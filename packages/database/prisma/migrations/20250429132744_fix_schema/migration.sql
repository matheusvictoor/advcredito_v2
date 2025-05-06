-- DropForeignKey
ALTER TABLE "UserImage" DROP CONSTRAINT "UserImage_userId_fkey";

-- DropIndex
DROP INDEX "UserImage_userId_key";
