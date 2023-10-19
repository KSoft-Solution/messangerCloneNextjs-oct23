import prisma from "@/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser:any = async () => {
  const session = await getSession();
  try {
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    console.log({currentUser})

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
