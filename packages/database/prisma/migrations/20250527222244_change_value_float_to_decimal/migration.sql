/*
  Warnings:

  - You are about to alter the column `rental` on the `Contract` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(8,2)`.
  - You are about to alter the column `amount` on the `Payment` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(8,2)`.
  - You are about to alter the column `amount` on the `Plan` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(8,2)`.
  - You are about to alter the column `vProperty` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to alter the column `vRental` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(8,2)`.
  - You are about to alter the column `vCondominium` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(8,2)`.
  - You are about to alter the column `vIptu` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(8,2)`.
  - You are about to alter the column `vSafe` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(8,2)`.

*/
-- AlterTable
ALTER TABLE "Contract" ALTER COLUMN "rental" SET DEFAULT 0.00,
ALTER COLUMN "rental" SET DATA TYPE DECIMAL(8,2);

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "amount" SET DEFAULT 0.00,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(8,2);

-- AlterTable
ALTER TABLE "Plan" ALTER COLUMN "amount" SET DEFAULT 0.00,
ALTER COLUMN "amount" SET DATA TYPE DECIMAL(8,2);

-- AlterTable
ALTER TABLE "Property" ALTER COLUMN "vProperty" SET DEFAULT 0.00,
ALTER COLUMN "vProperty" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "vRental" SET DEFAULT 0.00,
ALTER COLUMN "vRental" SET DATA TYPE DECIMAL(8,2),
ALTER COLUMN "vCondominium" SET DEFAULT 0.00,
ALTER COLUMN "vCondominium" SET DATA TYPE DECIMAL(8,2),
ALTER COLUMN "vIptu" SET DEFAULT 0.00,
ALTER COLUMN "vIptu" SET DATA TYPE DECIMAL(8,2),
ALTER COLUMN "vSafe" SET DEFAULT 0.00,
ALTER COLUMN "vSafe" SET DATA TYPE DECIMAL(8,2);
