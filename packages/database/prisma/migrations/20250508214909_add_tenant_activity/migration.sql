-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ActorType" ADD VALUE 'collaborator';
ALTER TYPE "ActorType" ADD VALUE 'owner';

-- CreateTable
CREATE TABLE "TenantActivity" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "actionType" "ActionType" NOT NULL,
    "actorId" VARCHAR(255) NOT NULL,
    "actorType" "ActorType" NOT NULL,
    "metadata" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_TenantActivity" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IX_TenantActivity_tenantId" ON "TenantActivity"("tenantId");

-- CreateIndex
CREATE INDEX "IX_TenantActivity_occurredAt" ON "TenantActivity"("occurredAt");

-- AddForeignKey
ALTER TABLE "TenantActivity" ADD CONSTRAINT "TenantActivity_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
