// 'use client'

// import { useEffect, useState  } from "react";
// // import { image } from "next/image";

// export default function WelcomePage() {
  
//     // const [housePost, setHousePost] = useState(null);
//     const [housePost, setHousePost] = useState([]);
//     useEffect(() => {
//       async function fetchData() {
//       const response = await fetch('data/hero.json');
//       const data = await response.json();
//       setHousePost(data);
//       }
//          fetchData();
// }, []);
 
  


//   return (
//     <>
//       <div className="sticky top-3 z-50 mx-4">
//   <div className="
//     flex items-center justify-between  px-8 py-5 rounded-3xl  bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500   backdrop-blur-lg  border border-white/20 shadow-2xl shadow-blue-900/30 ">
    
//     {/* Logo */}
//     <h1 className="text-white text-3xl   font-extrabold  tracking-wide hover:scale-105 transition-all duration-300 cursor-pointer ">
//       Extra Housing
//     </h1>

//     {/* Login Button */}
//     <button className=" bg-white text-blue-700 font-bold px-6 py-3 rounded-full shadow-lg  hover:shadow-white/20  hover:scale-110 hover:bg-slate-100 active:scale-95 transition-all duration-300 ">
//       Login →
//     </button>

//   </div>
// </div>

//       <section className="">
//         <div>
//           <h1 className="text-blue-600">
//             Welcome To Extra Housing Estate 
//           </h1>
//         </div>
//       {/* some logic over here */}
      

// {housePost.length === 0 ? (
//   <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//   {housePost.map((post, index) => (
//     <div className="relative flex"
//       key={index}
//       >
//     <img
//     src={post.image}
//     alt={post.location}
//     className="w-full h-64 object-cover rounded-xl"
//   />

//   <div className="absolute inset-0 flex flex-col items-center justify-center">
//     <h2 className="text-white text-4xl font-bold drop-shadow-lg">
//       {post.location}
//     </h2>

//     <p className="text-white text-lg">
//       {post.style}
//     </p>
//   </div>
// </div>

      
//   ))}
  
// </div>
      

//       </section>
//     </>
//   )

// }

// my code 