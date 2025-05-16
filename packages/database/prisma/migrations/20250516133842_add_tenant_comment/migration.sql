-- CreateTable
CREATE TABLE "TenantComment" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "text" VARCHAR(2000) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_TenantComment" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IX_TenantComment_tenantId" ON "TenantComment"("tenantId");

-- CreateIndex
CREATE INDEX "IX_TenantComment_userId" ON "TenantComment"("userId");

-- AddForeignKey
ALTER TABLE "TenantComment" ADD CONSTRAINT "TenantComment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantComment" ADD CONSTRAINT "TenantComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
