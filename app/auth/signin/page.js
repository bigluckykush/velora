import  { FcGoogle  } from  "react-icons/fc";
import  Link  from "next/link";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if(session?.user) {
    redirect("/dashboard/create-post")
  };

  return( 
    <main className="min-h-screen flex justify-center bg-gray-50 py-8 px-2">
      <article>
        <div className="w-full md:w-[24em] rounded-md bg-wwhite p-4">
          <h1 className="text-2xl mb-2">Sign into Velora</h1>
          <p className="text-sm text-gray mb-4">Sign into using....</p>
          <form 
            action={async() => {
              "use server"
              await signIn("google")
            }}
          className="mb-2">
            <button
              type="submit" 
              className="w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-blue-500 bg-black rounded-md ">
              <FcGoogle className="text-2xl"/> 
              <span className="text-white text-lg">Google account</span>
            </button>
          </form>
            <p className="text-xs text-gray-600">By clinking on the Sigin button you confirm that you have agreed with our {""}
              <Link href="#" className="text-gray-800 underline">Terms of use</Link>{""} and
              {""} 
              <Link href="#" className="text-gray-800 underline">privacy policy</Link>
            </p> 
        </div>
      </article> 
    </main>

  )
}