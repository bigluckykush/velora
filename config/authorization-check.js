  "use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export async function AuthorizationCheck() {
    const session = await auth();
    // redirect to sigin in page 
    if (!session?.user) {
       redirect ("/auth/signin");
    } 
}