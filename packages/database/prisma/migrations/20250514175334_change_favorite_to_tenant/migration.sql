/*
  Warnings:

  - You are about to drop the column `contactId` on the `Favorite` table. All the data in the column will be lost.
  - The `solde` column on the `Tenant` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `tenantId` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_contactId_fkey";

-- DropIndex
DROP INDEX "IX_Favorite_contactId";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "contactId",
ADD COLUMN     "tenantId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "solde",
ADD COLUMN     "solde" DECIMAL(10,2) NOT NULL DEFAULT 0.00;

-- CreateIndex
CREATE INDEX "IX_Favorite_tenantId" ON "Favorite"("tenantId");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
