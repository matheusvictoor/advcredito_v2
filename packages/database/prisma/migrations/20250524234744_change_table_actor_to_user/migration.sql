/*
  Warnings:

  - You are about to alter the column `phone` on the `Actor` table. The data in that column could be lost. The data in that column will be cast from `VarChar(16)` to `VarChar(11)`.
  - You are about to alter the column `phone` on the `Owner` table. The data in that column could be lost. The data in that column will be cast from `VarChar(16)` to `VarChar(11)`.
  - You are about to alter the column `phone` on the `Tenant` table. The data in that column could be lost. The data in that column will be cast from `VarChar(16)` to `VarChar(11)`.

*/
-- DropForeignKey
ALTER TABLE "ContactComment" DROP CONSTRAINT "ContactComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "ContactNote" DROP CONSTRAINT "ContactNote_userId_fkey";

-- DropForeignKey
ALTER TABLE "ContactPageVisit" DROP CONSTRAINT "ContactPageVisit_userId_fkey";

-- DropForeignKey
ALTER TABLE "TenantComment" DROP CONSTRAINT "TenantComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "TenantNote" DROP CONSTRAINT "TenantNote_userId_fkey";

-- DropForeignKey
ALTER TABLE "TenantPageVisit" DROP CONSTRAINT "TenantPageVisit_userId_fkey";

-- AlterTable
ALTER TABLE "Actor" ALTER COLUMN "phone" SET DATA TYPE VARCHAR(11);

-- AlterTable
ALTER TABLE "Owner" ALTER COLUMN "phone" SET DATA TYPE VARCHAR(11);

-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "phone" SET DATA TYPE VARCHAR(11);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'member',
ALTER COLUMN "locale" SET DEFAULT 'pt-BR';

-- AddForeignKey
ALTER TABLE "TenantPageVisit" ADD CONSTRAINT "TenantPageVisit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantComment" ADD CONSTRAINT "TenantComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenantNote" ADD CONSTRAINT "TenantNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
