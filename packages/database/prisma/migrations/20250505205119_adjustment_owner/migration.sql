/*
  Warnings:

  - You are about to drop the `FinancialTransation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Owner` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Owner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FinancialTransation" DROP CONSTRAINT "FinancialTransation_contractId_fkey";

-- DropForeignKey
ALTER TABLE "FinancialTransation" DROP CONSTRAINT "FinancialTransation_tenantId_fkey";

-- AlterTable
ALTER TABLE "Owner" ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "logo" VARCHAR(2048),
ADD COLUMN     "slug" VARCHAR(21) NOT NULL,
ADD COLUMN     "solde" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "ownerId" UUID NOT NULL;

-- DropTable
DROP TABLE "FinancialTransation";

-- CreateTable
CREATE TABLE "Payment" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "contractId" UUID NOT NULL,
    "type" "TransationType" NOT NULL DEFAULT 'rent',
    "status" "StatusTransation" NOT NULL DEFAULT 'pending',
    "description" VARCHAR(255),
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Payment" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerImage" (
    "ownerId" UUID NOT NULL,
    "data" BYTEA,
    "contentType" VARCHAR(255),
    "hash" VARCHAR(64),

    CONSTRAINT "PK_OwnerImage" PRIMARY KEY ("ownerId")
);

-- CreateIndex
CREATE INDEX "IX_Payment_tenantId" ON "Payment"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_slug_key" ON "Owner"("slug");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerImage" ADD CONSTRAINT "OwnerImage_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;
