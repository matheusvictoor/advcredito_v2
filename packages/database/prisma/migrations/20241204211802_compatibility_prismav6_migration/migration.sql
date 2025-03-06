-- AlterTable
ALTER TABLE "_ContactToContactTag" ADD CONSTRAINT "_ContactToContactTag_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ContactToContactTag_AB_unique";
