-- CreateTable
CREATE TABLE "Membership" (
    "id" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'member',
    "isOwner" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_Membership" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Membership_organizationId_userId_key" ON "Membership"("organizationId", "userId");

-- Copy existing organization and role data to Membership
WITH RankedAdminUsers AS (
    SELECT 
        "id" AS "userId",
        "organizationId",
        "role",
        "createdAt",
        ROW_NUMBER() OVER (PARTITION BY "organizationId" ORDER BY "createdAt" ASC) AS RankInOrg
    FROM "User"
    WHERE "organizationId" IS NOT NULL AND "role" = 'admin'
)
INSERT INTO "Membership" ("id", "organizationId", "userId", "role", "isOwner")
SELECT 
  uuid_in(
        overlay(
            overlay(
                md5(random()::text || ':' || random()::text) 
                placing '4' from 13
            ) 
            placing to_hex(floor(random() * (11 - 8 + 1) + 8)::int)::text from 17
        )::cstring
    ) AS id,
    "organizationId", 
    "userId", 
    "role", 
    CASE WHEN RankInOrg = 1 THEN true ELSE false END
FROM RankedAdminUsers;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "organizationId",
DROP COLUMN "role";

-- CreateTable
CREATE TABLE "OrganizationLogo" (
    "id" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "data" BYTEA,
    "contentType" VARCHAR(255),
    "hash" VARCHAR(64),

    CONSTRAINT "PK_OrganizationLogo" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IX_OrganizationLogo_organizationId" ON "OrganizationLogo"("organizationId");

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "logo" VARCHAR(2048);

-- Alter table to add slug column (nullable first)
ALTER TABLE "Organization" 
ADD COLUMN "slug" VARCHAR(1048);

-- Update existing organizations with unique slugs
WITH slug_generation AS (
    SELECT 
        id, 
        LOWER(  -- Convert name to lowercase before processing
            REGEXP_REPLACE(
                REPLACE(LOWER(name), ' ', '-'),  -- Replace spaces with hyphens
                '[^a-z0-9\-]',  -- Allow only lowercase letters, digits, and hyphens
                '', 
                'g'
            )
        ) || '-' ||  -- Append random characters
        SUBSTRING(
            REPLACE(
                CAST(RANDOM() AS TEXT), 
                '.', 
                ''
            ), 
            1, 
            14
        ) AS clean_name_with_random,
        ROW_NUMBER() OVER (
            PARTITION BY 
                LOWER(
                    REGEXP_REPLACE(
                        REPLACE(LOWER(name), ' ', '-'), 
                        '[^a-z0-9\-]', 
                        '', 
                        'g'
                    )
                )
            ORDER BY id
        ) AS name_sequence
    FROM "Organization"
)
UPDATE "Organization" o
SET "slug" = 
    CASE 
        WHEN sg.name_sequence > 1 
        THEN TRIM(TRAILING '-' FROM TRIM(LEADING '-' FROM sg.clean_name_with_random)) || '-' || sg.name_sequence 
        ELSE TRIM(TRAILING '-' FROM TRIM(LEADING '-' FROM sg.clean_name_with_random)) 
    END
FROM slug_generation sg
WHERE o.id = sg.id;


-- Alter column to be NOT NULL
ALTER TABLE "Organization" 
ALTER COLUMN "slug" SET NOT NULL;

-- Create unique index
CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "completedOnboarding";
