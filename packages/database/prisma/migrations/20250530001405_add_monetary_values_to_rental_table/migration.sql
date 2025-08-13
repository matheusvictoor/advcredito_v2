/*
  Warnings:

  - You are about to drop the column `contractId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `vCondominium` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `vIptu` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `vProperty` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `vRental` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `vSafe` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContractToProperty` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rentalId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusRental" AS ENUM ('active', 'canceled', 'finished');

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_userId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_contractId_fkey";

-- DropForeignKey
ALTER TABLE "_ContractToProperty" DROP CONSTRAINT "_ContractToProperty_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContractToProperty" DROP CONSTRAINT "_ContractToProperty_B_fkey";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "contractId",
ADD COLUMN     "rentalId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "vCondominium",
DROP COLUMN "vIptu",
DROP COLUMN "vProperty",
DROP COLUMN "vRental",
DROP COLUMN "vSafe",
ADD COLUMN     "condominium" DECIMAL(8,2) DEFAULT 0.00,
ADD COLUMN     "iptu" DECIMAL(8,2) DEFAULT 0.00,
ADD COLUMN     "propertyValue" DECIMAL(10,2) DEFAULT 0.00,
ADD COLUMN     "rental" DECIMAL(10,2) DEFAULT 0.00,
ADD COLUMN     "safe" DECIMAL(8,2) DEFAULT 0.00;

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "_ContractToProperty";

-- DropEnum
DROP TYPE "StatusContract";

-- CreateTable
CREATE TABLE "Rental" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "subscriptionId" UUID NOT NULL,
    "startRental" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endRental" TIMESTAMP(3) NOT NULL,
    "rental" DECIMAL(10,2) DEFAULT 0.00,
    "condominium" DECIMAL(8,2) DEFAULT 0.00,
    "iptu" DECIMAL(8,2) DEFAULT 0.00,
    "safe" DECIMAL(8,2) DEFAULT 0.00,
    "dueIptu" TIMESTAMP(3),
    "dueCondominium" TIMESTAMP(3),
    "dueRental" TIMESTAMP(3) NOT NULL,
    "dueSafe" TIMESTAMP(3),
    "status" "StatusRental" NOT NULL DEFAULT 'active',
    "observation" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Rental" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rental_subscriptionId_key" ON "Rental"("subscriptionId");

-- CreateIndex
CREATE INDEX "IX_Rental_tenantId" ON "Rental"("tenantId");

-- CreateIndex
CREATE INDEX "IX_Rental_propertyId" ON "Rental"("propertyId");

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rental" ADD CONSTRAINT "Rental_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
