/*
  Warnings:

  - You are about to drop the column `Marital_status` on the `users` table. All the data in the column will be lost.
  - Added the required column `marital_status` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "Marital_status",
ADD COLUMN     "marital_status" TEXT NOT NULL;
