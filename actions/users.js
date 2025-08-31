import prisma from "@/lib/db.config";

export const getAllUsers = async () => {
  const response = await prisma.users.findUnique({
    where: { email: "jk@sqlite.com" },
    include: { comments: true },
  });
  return response;
};
