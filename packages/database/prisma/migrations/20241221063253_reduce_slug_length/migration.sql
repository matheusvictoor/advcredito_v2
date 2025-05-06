/*
  Warnings:

  - You are about to alter the column `slug` on the `Organization` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1048)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Organization" ALTER COLUMN "slug" SET DATA TYPE VARCHAR(255);
