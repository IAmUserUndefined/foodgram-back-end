/*
  Warnings:

  - Added the required column `key` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `photo` ADD COLUMN `key` VARCHAR(191) NOT NULL;
