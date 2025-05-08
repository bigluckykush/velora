import { auth } from "@/auth"
import { AuthorizationCheck } from "@/config/authorization-check"
import Post from "./post"


export default async function page() {
    const session = await auth();
    return(
        <>
        <AuthorizationCheck/>
        <Post userId= {session?.user?.id}/>
        </>
    )
}



