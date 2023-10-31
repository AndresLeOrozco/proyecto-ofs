import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getByName = async (name) => {
  console.log(name)
  const data = await prisma.file.findFirst({
    where: { fileName: name },
  });
  console.log(data);
  return data;
}

export const getAllFiles = async () => {
  try {
    const fileNames = await prisma.file.findMany({
      select: {
        fileName: true,
      },
    });
    return fileNames;
  } catch (error) {
    console.error("Files are not available.", error)
  } finally {
    await prisma.$disconnect();
  }
}

export const createFile = async (fName, fContent) => {
  console.log(fName, fContent)
  return await prisma.file.create({
    data: {
      fileName: fName,
      fileContent: fContent,
    }
  })
}

export const updateFile = async (fName, fContent, newfName = fName) => {
  try {
    return await prisma.file.update({
      where: {fileName: fName},
      data: {fName: newfName, fileContent: fContent},
    });
  } catch (error) {
    console.log("Error updating", error) 
  } finally {
    await prisma.$disconnect();
  }
}
