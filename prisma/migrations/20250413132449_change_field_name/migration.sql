/*
  Warnings:

  - You are about to drop the column `subscriptionid` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_subscriptionid_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "subscriptionid",
ADD COLUMN     "subscriptionId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription"("id") ON DELETE SET NULL ON UPDATE CASCADE;
