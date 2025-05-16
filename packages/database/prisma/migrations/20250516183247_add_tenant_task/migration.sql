-- CreateEnum
CREATE TYPE "TenantTaskStatus" AS ENUM ('open', 'completed');

-- CreateTable
CREATE TABLE "TenantTask" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(8000),
    "status" "TenantTaskStatus" NOT NULL DEFAULT 'open',
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_TenantTask" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IX_TenantTask_tenantId" ON "TenantTask"("tenantId");

-- AddForeignKey
ALTER TABLE "TenantTask" ADD CONSTRAINT "TenantTask_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
