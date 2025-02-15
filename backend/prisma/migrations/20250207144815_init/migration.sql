-- CreateTable
CREATE TABLE "UserCredentials" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCredentials_username_key" ON "UserCredentials"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserCredentials_email_key" ON "UserCredentials"("email");
