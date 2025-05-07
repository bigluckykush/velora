import { Button } from "@mui/material"
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";



export default async function profile () {
    const session = await auth()
    return(
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:py-8 md: px-12 lg:px-16 bg-gray-100">
        <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 p-2 md:p-6">
            <div className="flex justify-center">
               <Image
               width={80}
               height={80}
               src={session?.user?.image}
               alt="profile photo"
               className="rounded-full" />
            </div>
               <p className="text-center py-3 border-b border-blue-400">{session?.user?.name}</p>
               <p className="text-center py-3 border-b border-blue-400">{session?.user?.email}</p>
               <p className="text-center py-3 border-b border-blue-400">{session?.user?.id}</p>
               <form>
                <Button className="w-full" variant="contained" color="error" type="submit">Sign Out</Button>
               </form>
               <Link href="#" className="p-2 bg-blue-500 rounded-md text-white text-center">Update profile</Link>
               
        </div>
        </main>
    )
}