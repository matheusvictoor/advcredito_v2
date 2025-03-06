import { APP_NAME } from '@workspace/common/app';
import { InvitationStatus, Role } from '@workspace/database';
import { prisma } from '@workspace/database/client';
import { sendInvitationEmail } from '@workspace/email/send-invitation-email';
import { routes } from '@workspace/routes';

export async function checkIfCanInvite(
  email: string,
  organizationId: string
): Promise<boolean> {
  const [countMemberships, countInvitations] = await prisma.$transaction([
    prisma.membership.count({
      where: {
        user: { email },
        organizationId
      }
    }),
    prisma.invitation.count({
      where: {
        email: email,
        organizationId: organizationId,
        status: InvitationStatus.PENDING
      }
    })
  ]);

  return countMemberships === 0 && countInvitations === 0;
}

export async function createInvitation(
  email: string,
  role: Role,
  organizationId: string
) {
  const result = await prisma.$transaction([
    // revoke old invitations
    prisma.invitation.updateMany({
      where: {
        organizationId,
        email,
        status: InvitationStatus.PENDING
      },
      data: {
        status: InvitationStatus.REVOKED
      }
    }),
    // create new invitation
    prisma.invitation.create({
      data: {
        email,
        role,
        organizationId
      },
      select: {
        id: true,
        role: true,
        email: true,
        token: true
      }
    })
  ]);

  return result[1];
}

type SendInvitationParams = {
  email: string;
  organizationName: string;
  invitedByEmail: string;
  invitedByName: string;
  token: string;
  invitationId: string;
  organizationId: string;
};

export async function sendInvitationRequest({
  email,
  organizationName,
  invitedByEmail,
  invitedByName,
  token,
  invitationId,
  organizationId
}: SendInvitationParams): Promise<void> {
  await sendInvitationEmail({
    recipient: email,
    appName: APP_NAME,
    organizationName,
    invitedByEmail,
    invitedByName,
    inviteLink: `${routes.dashboard.invitations.Request}/${token}`
  });
  await prisma.invitation.update({
    where: {
      id: invitationId,
      organizationId
    },
    data: { lastSentAt: new Date() },
    select: { id: true }
  });
}
