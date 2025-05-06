/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "OwnerType" AS ENUM ('person', 'company');

-- CreateEnum
CREATE TYPE "PropertyCategory" AS ENUM ('residential', 'commercial', 'industrial', 'rural', 'agricultural', 'government', 'other');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('apartment', 'attic', 'building', 'chalet', 'commercialSpace', 'condominium', 'countryHouse', 'farm', 'garage', 'holidayHome', 'house', 'hotel', 'kitnette', 'land', 'livingRoom', 'loft', 'lot', 'motorhome', 'office', 'other', 'parking', 'room', 'sharedOffice', 'store', 'studio', 'villa', 'warehouse', 'warehouseBuilding');

-- CreateEnum
CREATE TYPE "RentalType" AS ENUM ('annual', 'daily', 'fortnightly', 'monthly', 'seasonal', 'weekly');

-- CreateEnum
CREATE TYPE "StatusContract" AS ENUM ('active', 'canceled', 'finished');

-- CreateEnum
CREATE TYPE "StatusProperty" AS ENUM ('active', 'building', 'inactive', 'occupied', 'rented', 'reserved', 'sold', 'underConstruction');

-- CreateEnum
CREATE TYPE "StatusSubscription" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "StatusTransation" AS ENUM ('canceled', 'paid', 'pending');

-- CreateEnum
CREATE TYPE "TenantType" AS ENUM ('person', 'company');

-- CreateEnum
CREATE TYPE "TransationType" AS ENUM ('credit', 'rent', 'interest', 'fine');

-- CreateTable
CREATE TABLE "Actor" (
    "id" UUID NOT NULL,
    "image" VARCHAR(2048),
    "name" VARCHAR(64) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "phone" VARCHAR(16),
    "email" VARCHAR(64) NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" VARCHAR(64) NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "role" "Role" NOT NULL DEFAULT 'member',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Actor" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "subscriptionId" UUID NOT NULL,
    "startContract" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endContract" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "rental" DOUBLE PRECISION NOT NULL,
    "status" "StatusContract" NOT NULL DEFAULT 'active',
    "observation" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Contract" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialTransation" (
    "id" UUID NOT NULL,
    "tenantId" UUID NOT NULL,
    "contractId" UUID NOT NULL,
    "type" "TransationType" NOT NULL DEFAULT 'rent',
    "status" "StatusTransation" NOT NULL DEFAULT 'pending',
    "description" VARCHAR(255),
    "amount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_FinancialTransation" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" UUID NOT NULL,
    "type" "OwnerType" NOT NULL DEFAULT 'person',
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(16) NOT NULL,
    "street" VARCHAR(64),
    "number" VARCHAR(10),
    "neighborhood" VARCHAR(64),
    "zipCode" VARCHAR(10),
    "city" VARCHAR(64),
    "complement" VARCHAR(255),
    "state" VARCHAR(64),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Owner" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OwnerPerson" (
    "ownerId" UUID NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "dateBirth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_OwnerPerson" PRIMARY KEY ("ownerId")
);

-- CreateTable
CREATE TABLE "OwnerCompany" (
    "ownerId" UUID NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,

    CONSTRAINT "PK_OwnerCompany" PRIMARY KEY ("ownerId")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" UUID NOT NULL,
    "ownerId" UUID NOT NULL,
    "street" VARCHAR(64) NOT NULL,
    "number" VARCHAR(10) NOT NULL,
    "neighborhood" VARCHAR(64) NOT NULL,
    "complement" VARCHAR(255),
    "zipCode" VARCHAR(10) NOT NULL,
    "city" VARCHAR(64) NOT NULL,
    "state" VARCHAR(64) NOT NULL,
    "floor" INTEGER,
    "type" "PropertyType" NOT NULL DEFAULT 'house',
    "category" "PropertyCategory" NOT NULL DEFAULT 'residential',
    "typeRental" "RentalType" NOT NULL DEFAULT 'annual',
    "furnished" BOOLEAN NOT NULL DEFAULT false,
    "nRoom" INTEGER,
    "nSuite" INTEGER,
    "nBathroom" INTEGER,
    "parkingSpaces" INTEGER,
    "areaLand" DOUBLE PRECISION,
    "areaBuild" DOUBLE PRECISION,
    "canAnimal" BOOLEAN NOT NULL DEFAULT false,
    "observation" VARCHAR(255),
    "vProperty" DOUBLE PRECISION,
    "vRental" DOUBLE PRECISION,
    "vCondominium" DOUBLE PRECISION,
    "vIptu" DOUBLE PRECISION,
    "vSafe" DOUBLE PRECISION,
    "dueIptu" TIMESTAMP(3),
    "dueCondominium" TIMESTAMP(3),
    "dueSafe" TIMESTAMP(3),
    "status" "StatusProperty" NOT NULL DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Property" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "interval" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "repetition" INTEGER,
    "creadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Plan" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" UUID NOT NULL,
    "planId" INTEGER NOT NULL,
    "tenantId" UUID NOT NULL,
    "status" "StatusSubscription" NOT NULL DEFAULT 'active',
    "description" VARCHAR(255),
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Subscription" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" UUID NOT NULL,
    "type" "TenantType" NOT NULL DEFAULT 'person',
    "name" VARCHAR(64) NOT NULL,
    "image" VARCHAR(2048),
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(16) NOT NULL,
    "status" "InvitationStatus" NOT NULL DEFAULT 'pending',
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "solde" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "street" VARCHAR(64),
    "number" VARCHAR(10),
    "neighborhood" VARCHAR(64),
    "zipCode" VARCHAR(10),
    "city" VARCHAR(64),
    "complement" VARCHAR(255),
    "state" VARCHAR(64),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_Tenant" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenantImage" (
    "tenantId" UUID NOT NULL,
    "data" BYTEA,
    "contentType" VARCHAR(255),
    "hash" VARCHAR(64),

    CONSTRAINT "PK_TenantImage" PRIMARY KEY ("tenantId")
);

-- CreateTable
CREATE TABLE "TenantPerson" (
    "tenantId" UUID NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PK_TenantPerson" PRIMARY KEY ("tenantId")
);

-- CreateTable
CREATE TABLE "TenantCompany" (
    "tenantId" UUID NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,

    CONSTRAINT "PK_TenantCompany" PRIMARY KEY ("tenantId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Actor_cpf_key" ON "Actor"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Actor_email_key" ON "Actor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_subscriptionId_key" ON "Contract"("subscriptionId");

-- CreateIndex
CREATE INDEX "IX_Contract_tenantId" ON "Contract"("tenantId");

-- CreateIndex
CREATE INDEX "IX_Contract_propertyId" ON "Contract"("propertyId");

-- CreateIndex
CREATE INDEX "IX_FinancialTransation_tenantId" ON "FinancialTransation"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_email_key" ON "Owner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_phone_key" ON "Owner"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "OwnerPerson_cpf_key" ON "OwnerPerson"("cpf");

-- CreateIndex
CREATE INDEX "IX_OwnerPerson_cpf" ON "OwnerPerson"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "OwnerCompany_cnpj_key" ON "OwnerCompany"("cnpj");

-- CreateIndex
CREATE INDEX "IX_OwnerCompany_cnpj" ON "OwnerCompany"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_email_key" ON "Tenant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_phone_key" ON "Tenant"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "TenantPerson_cpf_key" ON "TenantPerson"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "TenantCompany_cnpj_key" ON "TenantCompany"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "UserImage_userId_key" ON "UserImage"("userId");

-- AddForeignKey
ALTER TABLE "UserImage" ADD CONSTRAINT "UserImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Actor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Actor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialTransation" ADD CONSTRAINT "FinancialTransation_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialTransation" ADD CONSTRAINT "FinancialTransation_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerPerson" ADD CONSTRAINT "OwnerPerson_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OwnerCompany" ADD CONSTRAINT "OwnerCompany_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantImage" ADD CONSTRAINT "TenantImage_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantPerson" ADD CONSTRAINT "TenantPerson_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantCompany" ADD CONSTRAINT "TenantCompany_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
