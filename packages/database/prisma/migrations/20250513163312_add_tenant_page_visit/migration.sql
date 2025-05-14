-- CreateTable
CREATE TABLE "TenantPageVisit" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "userId" UUID,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_TenantPageVisit" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IX_TenantPageVisit_tenantId" ON "TenantPageVisit"("tenantId");

-- CreateIndex
CREATE INDEX "IX_TenantPageVisit_userId" ON "TenantPageVisit"("userId");

-- AddForeignKey
ALTER TABLE "TenantPageVisit" ADD CONSTRAINT "TenantPageVisit_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantPageVisit" ADD CONSTRAINT "TenantPageVisit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Actor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
