 "use client"
import { useEffect, useState } from "react"


export default function home () {
    const [count,setCount] = useState(0) 
    return (
        <main classsName="flax flex-col gap-20 items-center justify-center px-20 py-20">
            <p className="text-4xl font-bold">count: {count}</p>
            <button onClick={() => setCount(count + 1 )} className="w-[200px] h-[50px] text-white bg-blue-400">Increment</button>
            <button onClick={() => setCount(count - 1 )} className="w-[200px] h-[50px] text-white bg-blue-400">Decrement</button>
        </main>

    )
}








// import Image from "next/image"

// export default function Home() {
//   return (
//     <main>
//       <div>
//         <p>My Image</p>
//         <Image width={300} height={300} src="/2.jpg" alt="image" />
//       </div>
//     </main>
          
//   )
// }


// useEffect (() => {
//     const getDate = async () => {
//         const respones = await fetch ("http://dummyjson.com/products")
//         const data = await respones.json()
//         console.log(data.products)
//     }
//     getDate()
//  })