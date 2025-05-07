import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-dvh p-2 bg-gray-50">
         <div className="">
          <Image 
            width={3000}
            height={1500}
            src="/down.jpg"
            alt="blog-image" 
            className="w-full"/>
            </div>
        </main>
   )            
}