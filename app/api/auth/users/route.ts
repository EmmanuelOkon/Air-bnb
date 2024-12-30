import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Debugging: Log the user object
  console.log("Retrieved user:", user);

  if (!user || user === null || !user.id) {
    return NextResponse.redirect("http://localhost:3000");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  // Debugging: Log the dbUser object
  console.log("Database user:", dbUser);

  if (!dbUser) {
    // const user_name =
    //   (user?.given_name ?? "") + " " + (user?.family_name ?? "");
    dbUser = await prisma.user.create({
      data: {
        email: user.email ?? "",
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        id: user.id,
        profilePicture:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,

        // profilePicture: user.picture ?? `${getInitials(user_name)}`,
      },
    });

    // Debugging: Log the newly created dbUser object
    console.log("Newly created database user:", dbUser);
  }

  return NextResponse.redirect("http://localhost:3000");
}

// import { NextResponse } from "next/server";
// import { checkUserSignIn } from "@/utils/authUtils";

// export async function GET() {
//   const { isSignedIn, user } = await checkUserSignIn();

//   if (!isSignedIn) {
//     return NextResponse.redirect("http://localhost:3000");
//   }

//   // Debugging: Log the user object
//   console.log("Signed-in user:", user);

//   return NextResponse.redirect("http://localhost:3000");
// }
