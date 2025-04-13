/*
  Warnings:

  - You are about to drop the column `onbardingCompleted` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "onbardingCompleted",
ADD COLUMN     "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false;
