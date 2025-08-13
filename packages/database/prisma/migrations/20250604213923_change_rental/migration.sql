/*
  Warnings:

  - Made the column `rental` on table `Rental` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Rental" ALTER COLUMN "rental" SET NOT NULL;
