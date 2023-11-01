import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getByName = async (name) => {
  const data = await prisma.file.findFirst({
    where: { fileName: name },
  });
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
  } 
}

export const createFile = async (fName, fContent) => {
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
      data: {fileName: newfName, fileContent: fContent},
    });
  } catch (error) {
    console.log("Error updating", error) 
  } 
}

export const updateFileName = async (fName, newfName) => {
  try {
    return await prisma.file.update({
      where: {fileName: fName},
      data: {fileName: newfName},
    });
  } catch (error) {
    throw error; 
  } 
}