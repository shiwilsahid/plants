-- CreateTable
CREATE TABLE "Plant" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specific" (
    "plantId" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Specific_pkey" PRIMARY KEY ("plantId")
);
