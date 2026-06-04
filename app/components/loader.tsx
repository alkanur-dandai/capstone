// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// interface CloudLoaderProps {
//   isLoading: boolean;
// }

// export default function CloudLoader({ isLoading }: CloudLoaderProps) {
//   const [renderClouds, setRenderClouds] = useState(isLoading);

//   useEffect(() => {
//     if (isLoading) {
//       setRenderClouds(true);
//     }
//   }, [isLoading]);

//   return (
//     <AnimatePresence onExitComplete={() => setRenderClouds(false)}>
//       {renderClouds && (
//         <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden select-none flex">
          
//           {/* LEFT CLOUD ASSET */}
//           <motion.div 
//             initial={{ x: "-100%" }}
//             animate={isLoading ? { x: "0%" } : { x: "-100%" }}
//             transition={{ type: "spring", damping: 26, stiffness: 60 }}
//             className="absolute top-0 left-0 w-[55vw] h-full pointer-events-auto"
//           >
//             <div className="relative w-full h-full">
//               <Image 
//                 src="/cloud-left.png" 
//                 alt="Loading Left Clouds" 
//                 fill
//                 priority
//                 sizes="55vw"
//                 style={{ objectFit: "cover", objectPosition: "right center" }}
//               />
//             </div>
//           </motion.div>

//           {/* RIGHT CLOUD ASSET */}
//           <motion.div 
//             initial={{ x: "100%" }}
//             animate={isLoading ? { x: "0%" } : { x: "100%" }}
//             transition={{ type: "spring", damping: 26, stiffness: 60 }}
//             className="absolute top-0 right-0 w-[55vw] h-full pointer-events-auto"
//           >
//             <div className="relative w-full h-full">
//               <Image 
//                 src="/cloud-right.png" 
//                 alt="Loading Right Clouds" 
//                 fill
//                 priority
//                 sizes="55vw"
//                 style={{ objectFit: "cover", objectPosition: "left center" }}
//               />
//             </div>
//           </motion.div>

//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function DolphinLoader() {
//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100%",
//         position: "relative",
//         overflow: "hidden",
//         background:
//           "linear-gradient(to bottom, #87ceeb 0%, #87ceeb 50%, #0284c7 50%, #0369a1 100%)",
//       }}
//     >
//       {/* Water Surface */}
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           width: "100%",
//           height: "4px",
//           background: "rgba(255,255,255,0.8)",
//         }}
//       />

//       {/* Dolphin */}
//       <motion.div
//         animate={{
//           y: [80, -80, -120, -80, 80],
//           rotate: [25, -10, -35, -10, 25],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         style={{
//           position: "absolute",
//           left: "50%",
//           top: "50%",
//           fontSize: "5rem",
//           transform: "translateX(-50%)",
//           userSelect: "none",
//         }}
//       >
//         🐬
//       </motion.div>

//       {/* Loading Text */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "60px",
//           width: "100%",
//           textAlign: "center",
//           color: "white",
//           fontSize: "1.2rem",
//           fontWeight: "bold",
//         }}
//       >
//         Loading Campus Map...
//       </div>
//     </div>
//   );
// }