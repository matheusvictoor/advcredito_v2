import 'server-only';

import { prisma } from '@workspace/database/client';

import { keys } from '../keys';
import { BillingUnit } from './billing-unit';
import { stripeServer } from './stripe-server';
import { mapSubscriptionToTier, pickSubscription } from './subscription';

export async function addOrganizationToStripe(
  name: string,
  email: string,
  organizationId: string
): Promise<string> {
  const stripeCustomer = await stripeServer.customers.create({
    name,
    email,
    metadata: {
      organizationId
    }
  });

  return stripeCustomer.id;
}

export async function updateOrganizationSubscriptionPlan(
  stripeCustomerId: string | null | undefined
): Promise<void> {
  if (!stripeCustomerId) {
    console.warn('Missing stripeCustomerId');
    return;
  }
  const organization = await prisma.organization.findFirst({
    where: { stripeCustomerId },
    select: {
      id: true,
      tier: true,
      stripeCustomerId: true
    }
  });
  if (!organization || !organization.stripeCustomerId) {
    console.warn('Organization not found or missing stripeCustomerId');
    return;
  }

  const subscriptionsResponse = await stripeServer.subscriptions.list({
    customer: organization.stripeCustomerId
  });

  const subscriptions = subscriptionsResponse.data || [];
  const subscription = pickSubscription(subscriptions);
  const tier = mapSubscriptionToTier(subscription);

  if (tier !== organization.tier) {
    await prisma.organization.update({
      where: { id: organization.id },
      data: { tier }
    });
  }
}

export async function updateOrganizationSubscriptionQuantity(
  organizationId: string
): Promise<void> {
  if (keys().BILLING_UNIT !== BillingUnit.PerSeat) {
    return;
  }

  const organization = await prisma.organization.findFirst({
    where: { id: organizationId },
    select: {
      stripeCustomerId: true,
      _count: { select: { memberships: true } }
    }
  });
  if (!organization) {
    console.warn(`Organization with id ${organizationId} not found`);
    return;
  }
  if (!organization.stripeCustomerId) {
    console.warn('Missing stripeCustomerId');
    return;
  }

  const subscriptionsResponse = await stripeServer.subscriptions.list({
    customer: organization.stripeCustomerId
  });
  const subscriptions = subscriptionsResponse.data || [];
  const subscription = pickSubscription(subscriptions);

  if (subscription) {
    await stripeServer.subscriptions.update(subscription.id, {
      items: [
        {
          quantity: organization._count.memberships,
          id: subscription.items.data[0].id
        }
      ],
      billing_cycle_anchor: 'unchanged', // Keeps the current cycle
      proration_behavior: 'always_invoice' // Immediate invoice for changes
    });
  }
}

export async function deleteOrganizationFromStripe(
  stripeCustomerId: string
): Promise<void> {
  try {
    await stripeServer.customers.del(stripeCustomerId);
  } catch (error) {
    console.error('Error deleting Stripe customer:', error);
    throw error;
  }
}
