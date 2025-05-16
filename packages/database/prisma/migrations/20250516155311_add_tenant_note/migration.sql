-- CreateTable
CREATE TABLE "TenantNote" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "text" VARCHAR(8000),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_TenantNote" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IX_TenantNote_tenantId" ON "TenantNote"("tenantId");

-- CreateIndex
CREATE INDEX "IX_TenantNote_userId" ON "TenantNote"("userId");

-- AddForeignKey
ALTER TABLE "TenantNote" ADD CONSTRAINT "TenantNote_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantNote" ADD CONSTRAINT "TenantNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
