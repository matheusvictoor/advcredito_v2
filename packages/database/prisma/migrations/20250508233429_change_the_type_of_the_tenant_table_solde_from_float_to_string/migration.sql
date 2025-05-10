/*
  Warnings:

  - You are about to alter the column `solde` on the `Tenant` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `VarChar(16)`.

*/
-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "solde" DROP DEFAULT,
ALTER COLUMN "solde" SET DATA TYPE VARCHAR(16);
