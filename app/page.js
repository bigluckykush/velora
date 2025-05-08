import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-dvh p-2 bg-gray-50">
         <div className="">
          <Image 
            width={1000}
            height={500}
            src="/blog1.jpg"
            alt="blog-image" 
            className="w-full"/>
            </div>
        </main>
   )            
}