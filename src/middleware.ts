import { KindeState } from "@kinde-oss/kinde-auth-nextjs";
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(async function middleware(
  req: NextRequest & {
    kindeAuth: KindeState;
  }
) {
  console.log("look at me", req.kindeAuth);
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
