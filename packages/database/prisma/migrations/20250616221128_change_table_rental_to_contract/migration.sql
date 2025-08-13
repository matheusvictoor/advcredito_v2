/*
  Warnings:

  - The values [owner] on the enum `ActorType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `rentalId` on the `Charge` table. All the data in the column will be lost.
  - You are about to drop the column `isOwner` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `rentalId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `condominium` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `dueCondominium` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `dueIptu` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `dueSafe` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `iptu` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `safe` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `typeRental` on the `Property` table. All the data in the column will be lost.
  - You are about to alter the column `state` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `VarChar(64)` to `VarChar(2)`.
  - The `category` column on the `Property` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Owner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OwnerCompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OwnerImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OwnerPerson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rental` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contractId` to the `Charge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Charge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `landlordId` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LandlordRecord" AS ENUM ('person', 'company');

-- CreateEnum
CREATE TYPE "PropertyUse" AS ENUM ('residential', 'commercial', 'industrial', 'rural', 'agricultural', 'government', 'other');

-- CreateEnum
CREATE TYPE "ConractType" AS ENUM ('annual', 'daily', 'fortnightly', 'monthly', 'seasonal', 'weekly');

-- CreateEnum
CREATE TYPE "StatusContract" AS ENUM ('active', 'canceled', 'finished');

-- AlterEnum
BEGIN;
CREATE TYPE "ActorType_new" AS ENUM ('api', 'collaborator', 'landlord', 'member', 'system');
ALTER TABLE "ContactActivity" ALTER COLUMN "actorType" TYPE "ActorType_new" USING ("actorType"::text::"ActorType_new");
ALTER TABLE "TenantActivity" ALTER COLUMN "actorType" TYPE "ActorType_new" USING ("actorType"::text::"ActorType_new");
ALTER TYPE "ActorType" RENAME TO "ActorType_old";
ALTER TYPE "ActorType_new" RENAME TO "ActorType";
DROP TYPE "ActorType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Charge" DROP CONSTRAINT "Charge_rentalId_fkey";

-- DropForeignKey
ALTER TABLE "OwnerCompany" DROP CONSTRAINT "OwnerCompany_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "OwnerImage" DROP CONSTRAINT "OwnerImage_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "OwnerPerson" DROP CONSTRAINT "OwnerPerson_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_rentalId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_tenantId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_userId_fkey";

-- DropIndex
DROP INDEX "Charge_rentalId_idx";

-- AlterTable
ALTER TABLE "Charge" DROP COLUMN "rentalId",
ADD COLUMN     "contractId" UUID NOT NULL,
ADD COLUMN     "due" TIMESTAMP(3),
ADD COLUMN     "propertyId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "isOwner",
ADD COLUMN     "isLandlord" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "rentalId",
ADD COLUMN     "contractId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "condominium",
DROP COLUMN "dueCondominium",
DROP COLUMN "dueIptu",
DROP COLUMN "dueSafe",
DROP COLUMN "iptu",
DROP COLUMN "ownerId",
DROP COLUMN "safe",
DROP COLUMN "type",
DROP COLUMN "typeRental",
ADD COLUMN     "contractualPeriod" "ConractType" NOT NULL DEFAULT 'annual',
ADD COLUMN     "landlordId" UUID NOT NULL,
ADD COLUMN     "propertyType" "PropertyType" NOT NULL DEFAULT 'house',
ADD COLUMN     "propertyUse" "PropertyUse" NOT NULL DEFAULT 'residential',
ALTER COLUMN "state" SET DATA TYPE VARCHAR(2),
DROP COLUMN "category",
ADD COLUMN     "category" "PropertyUse" NOT NULL DEFAULT 'residential';

-- DropTable
DROP TABLE "Owner";

-- DropTable
DROP TABLE "OwnerCompany";

-- DropTable
DROP TABLE "OwnerImage";

-- DropTable
DROP TABLE "OwnerPerson";

-- DropTable
DROP TABLE "Rental";

-- DropEnum
DROP TYPE "OwnerRecord";

-- DropEnum
DROP TYPE "PropertyCategory";

-- DropEnum
DROP TYPE "RentalType";

-- DropEnum
DROP TYPE "StatusRental";

-- CreateTable
CREATE TABLE "Contract" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "subscriptionId" UUID NOT NULL,
    "startContract" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endContract" TIMESTAMP(3) NOT NULL,
    "rental" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "furnished" BOOLEAN NOT NULL DEFAULT false,
    "dueRental" TIMESTAMP(3) NOT NULL,
    "totalCharges" DECIMAL(8,2) NOT NULL DEFAULT 0.00,
    "paymentType" "PaymentType" NOT NULL DEFAULT 'billet',
    "propertyType" "PropertyType" NOT NULL DEFAULT 'house',
    "propertyUse" "PropertyUse" NOT NULL DEFAULT 'residential',
    "status" "StatusContract" NOT NULL DEFAULT 'active',
    "forumCity" VARCHAR(64) NOT NULL,
    "observation" VARCHAR(255),
    "p_street" VARCHAR(64) NOT NULL,
    "p_number" VARCHAR(10) NOT NULL,
    "p_neighborhood" VARCHAR(64) NOT NULL,
    "p_zipcode" VARCHAR(10) NOT NULL,
    "p_city" VARCHAR(64) NOT NULL,
    "p_state" VARCHAR(2) NOT NULL,
    "p_country" VARCHAR(32) NOT NULL DEFAULT 'Brasil',
    "p_complement" VARCHAR(255),
    "l_name" VARCHAR(64) NOT NULL,
    "l_doc" VARCHAR(14) NOT NULL,
    "l_email" VARCHAR(64),
    "l_phone" VARCHAR(11),
    "l_street" VARCHAR(64) NOT NULL,
    "l_number" VARCHAR(10) NOT NULL,
    "l_neighborhood" VARCHAR(64) NOT NULL,
    "l_zipcode" VARCHAR(10) NOT NULL,
    "l_city" VARCHAR(64) NOT NULL,
    "l_state" VARCHAR(2) NOT NULL,
    "l_country" VARCHAR(32) NOT NULL DEFAULT 'Brasil',
    "l_complement" VARCHAR(255),
    "t_name" VARCHAR(64) NOT NULL,
    "t_doc" VARCHAR(14) NOT NULL,
    "t_email" VARCHAR(64) NOT NULL,
    "t_phone" VARCHAR(11) NOT NULL,
    "t_street" VARCHAR(64),
    "t_number" VARCHAR(10),
    "t_neighborhood" VARCHAR(64),
    "t_zipcode" VARCHAR(10),
    "t_city" VARCHAR(64),
    "t_state" VARCHAR(2),
    "t_country" VARCHAR(32) DEFAULT 'Brasil',
    "t_complement" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Contract" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Landlord" (
    "id" UUID NOT NULL,
    "slug" VARCHAR(21) NOT NULL,
    "image" VARCHAR(2048),
    "record" "LandlordRecord" NOT NULL DEFAULT 'person',
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "street" VARCHAR(64),
    "number" VARCHAR(10),
    "neighborhood" VARCHAR(64),
    "zipcode" VARCHAR(10),
    "city" VARCHAR(64),
    "complement" VARCHAR(255),
    "state" VARCHAR(2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Landlord" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandlordImage" (
    "landlordId" UUID NOT NULL,
    "data" BYTEA,
    "contentType" VARCHAR(255),
    "hash" VARCHAR(64),

    CONSTRAINT "PK_LandlordImage" PRIMARY KEY ("landlordId")
);

-- CreateTable
CREATE TABLE "LandlordPerson" (
    "landlordId" UUID NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "dateBirth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_LandlordPerson" PRIMARY KEY ("landlordId")
);

-- CreateTable
CREATE TABLE "LandlordCompany" (
    "landlordId" UUID NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,

    CONSTRAINT "PK_LandlordCompany" PRIMARY KEY ("landlordId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_subscriptionId_key" ON "Contract"("subscriptionId");

-- CreateIndex
CREATE INDEX "IX_Contract_tenantId" ON "Contract"("tenantId");

-- CreateIndex
CREATE INDEX "IX_Contract_propertyId" ON "Contract"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Landlord_slug_key" ON "Landlord"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Landlord_email_key" ON "Landlord"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Landlord_phone_key" ON "Landlord"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "LandlordPerson_cpf_key" ON "LandlordPerson"("cpf");

-- CreateIndex
CREATE INDEX "IX_LandlordPerson_cpf" ON "LandlordPerson"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "LandlordCompany_cnpj_key" ON "LandlordCompany"("cnpj");

-- CreateIndex
CREATE INDEX "IX_LandlordCompany_cnpj" ON "LandlordCompany"("cnpj");

-- CreateIndex
CREATE INDEX "Charge_contractId_idx" ON "Charge"("contractId");

-- AddForeignKey
ALTER TABLE "Charge" ADD CONSTRAINT "Charge_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Charge" ADD CONSTRAINT "Charge_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandlordImage" ADD CONSTRAINT "LandlordImage_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "Landlord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandlordPerson" ADD CONSTRAINT "LandlordPerson_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "Landlord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandlordCompany" ADD CONSTRAINT "LandlordCompany_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "Landlord"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "Landlord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
