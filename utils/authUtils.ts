import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/db";
import { getInitials } from "@/lib/utils";

export async function checkUserSignIn() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    return { isSignedIn: false, user: null };
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    const user_name =
      (user?.given_name ?? "") + " " + (user?.family_name ?? "");
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email ?? "",
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        profilePicture: user.picture ?? `${getInitials(user_name)}`,
      },
    });
  }

  return { isSignedIn: true, user: dbUser };
}
