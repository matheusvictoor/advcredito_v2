/*
  Warnings:

  - You are about to drop the column `condominium` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `dueCondominium` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `dueIptu` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `dueSafe` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `iptu` on the `Rental` table. All the data in the column will be lost.
  - You are about to drop the column `safe` on the `Rental` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('billet', 'pix', 'cash', 'transfer');

-- AlterTable
ALTER TABLE "Rental" DROP COLUMN "condominium",
DROP COLUMN "dueCondominium",
DROP COLUMN "dueIptu",
DROP COLUMN "dueSafe",
DROP COLUMN "iptu",
DROP COLUMN "safe",
ADD COLUMN     "paymentType" "PaymentType" NOT NULL DEFAULT 'billet';

-- CreateTable
CREATE TABLE "Charge" (
    "id" UUID NOT NULL,
    "rentalId" UUID NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "description" VARCHAR(128),
    "value" DECIMAL(8,2) NOT NULL DEFAULT 0.00,

    CONSTRAINT "PK_Charge" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Charge_rentalId_idx" ON "Charge"("rentalId");

-- AddForeignKey
ALTER TABLE "Charge" ADD CONSTRAINT "Charge_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
