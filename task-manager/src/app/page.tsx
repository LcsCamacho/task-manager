import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
const {isAuthenticated} =  getKindeServerSession()
const isLoggedIn = await isAuthenticated()

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-light">
            <p>Your personal workspace</p>
            <p className="text-5xl md:text-6xl">
              for <span className="text-blue-600">better productivity</span>
            </p>
          </h1>

          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus
            quasi eligendi dolor similique? Consequuntur adipisci minus itaque
            beatae vitae dolorum, magnam provident, minima velit quam explicabo
            nihil odio necessitatibus.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            {
              !isLoggedIn && (<><Button>
                <RegisterLink>Get Started</RegisterLink>
              </Button>
  
              <Button asChild variant="outline">
                <LoginLink>Sign in</LoginLink>
              </Button></>)
            }
            {isLoggedIn && <>
              <Button asChild>
                <Link href="/workspace"></Link>
              </Button>
            </>}
          </div>
        </div>
      </div>
    </div>
  );
}
