import {
  ActionType,
  ActorType,
  type Tenant,
  type Prisma,
} from "@workspace/database";
import { prisma } from "@workspace/database/client";

const fieldsToCheck = [
  "record",
  "name",
  "image",
  "email",
  "phone",
  "status",
  "archived",
  "street",
  "number",
  "neighborhood",
  "zipcode",
  "city",
  "complement",
  "state",
] as const;

type FieldToCheck = (typeof fieldsToCheck)[number];

type ChangeEntry = {
  old: string | null;
  new: string | null;
};

type TenantChanges = {
  [K in FieldToCheck]?: ChangeEntry;
};

function safeStringify<T>(value: T): string | null {
  if (value === null || value === undefined) {
    return null;
  }
  return typeof value === "object" ? JSON.stringify(value) : String(value);
}

export function detectChanges(
  currentTenant: Partial<Tenant> | null,
  updatedTenant: Tenant,
  updateData?: Prisma.TenantUpdateInput,
): TenantChanges {
  const changes: TenantChanges = {};

  for (const field of fieldsToCheck) {
    const oldValue = currentTenant
      ? safeStringify(currentTenant[field as keyof Tenant])
      : null;
    const newValue = safeStringify(updatedTenant[field as keyof Tenant]);
    if (oldValue !== newValue && (!updateData || field in updateData)) {
      changes[field] = { old: oldValue, new: newValue };
    }
  }

  return changes;
}

export async function createTenantAndCaptureEvent(
  tenantData: Prisma.TenantCreateInput,
  actorId: string,
): Promise<Tenant> {
  return await prisma.$transaction(async (tx) => {
    const createdAt = tenantData.createdAt ?? new Date();
    const newTenant = await tx.tenant.create({
      data: {
        ...tenantData,
        createdAt: createdAt,
        updatedAt: createdAt,
      },
    });

    const changes = detectChanges(null, newTenant);

    await tx.tenantActivity.create({
      data: {
        tenantId: newTenant.id,
        actionType: ActionType.CREATE,
        actorId,
        actorType: ActorType.MEMBER,
        metadata: changes,
        occurredAt: createdAt,
      },
    });

    return newTenant;
  });
}

export async function updateTenantAndCaptureEvent(
  tenantId: string,
  updateData: Prisma.TenantUpdateInput,
  actorId: string,
): Promise<TenantChanges> {
  return await prisma.$transaction(async (tx) => {
    const currentTenant = await tx.tenant.findUnique({
      where: { id: tenantId },
    });

    if (!currentTenant) {
      throw new Error("Tenant not found");
    }

    const updatedTenant = await tx.tenant.update({
      where: { id: tenantId },
      data: { ...updateData, updatedAt: new Date() },
    });

    const changes = detectChanges(currentTenant, updatedTenant, updateData);

    if (Object.keys(changes).length > 0) {
      await tx.tenantActivity.create({
        data: {
          tenantId,
          actionType: ActionType.UPDATE,
          actorId,
          actorType: ActorType.MEMBER,
          metadata: changes,
          occurredAt: new Date(),
        },
      });
    }

    return changes;
  });
}
