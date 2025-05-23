/*
  Warnings:

  - The `state` column on the `Tenant` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "state",
ADD COLUMN     "state" "BrazilianStates";
