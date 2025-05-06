/*
  Warnings:

  - You are about to drop the column `type` on the `Owner` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Tenant` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "OwnerRecord" AS ENUM ('person', 'company');

-- CreateEnum
CREATE TYPE "TenantRecord" AS ENUM ('person', 'company');

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "type",
ADD COLUMN     "record" "OwnerRecord" NOT NULL DEFAULT 'person';

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "type",
ADD COLUMN     "record" "TenantRecord" NOT NULL DEFAULT 'person';

-- DropEnum
DROP TYPE "OwnerType";

-- DropEnum
DROP TYPE "TenantType";
