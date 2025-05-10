/*
  Warnings:

  - You are about to drop the column `logo` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `solde` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Tenant` table. All the data in the column will be lost.
  - Added the required column `zipcode` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Tenant" DROP CONSTRAINT "Tenant_ownerId_fkey";

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "logo",
DROP COLUMN "solde",
DROP COLUMN "zipCode",
ADD COLUMN     "image" VARCHAR(2048),
ADD COLUMN     "zipcode" VARCHAR(10);

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "zipCode",
ADD COLUMN     "zipcode" VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "zipCode",
ADD COLUMN     "zipcode" VARCHAR(10);

-- CreateTable
CREATE TABLE "_ContractToProperty" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ContractToProperty_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ContractToProperty_B_index" ON "_ContractToProperty"("B");

-- AddForeignKey
ALTER TABLE "_ContractToProperty" ADD CONSTRAINT "_ContractToProperty_A_fkey" FOREIGN KEY ("A") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractToProperty" ADD CONSTRAINT "_ContractToProperty_B_fkey" FOREIGN KEY ("B") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;
