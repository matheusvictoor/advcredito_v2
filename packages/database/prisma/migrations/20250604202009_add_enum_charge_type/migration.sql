/*
  Warnings:

  - The `type` column on the `Charge` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ChargeType" AS ENUM ('iptu', 'water', 'light', 'map', 'condominium', 'insuranceFire', 'other');

-- AlterTable
ALTER TABLE "ApiKey" ALTER COLUMN "description" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "Charge" DROP COLUMN "type",
ADD COLUMN     "type" "ChargeType" NOT NULL DEFAULT 'other';
