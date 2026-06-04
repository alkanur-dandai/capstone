import React from 'react'
import { Trees } from './trees'


export default function TreeComponent() {
  return (
    <>
    <Trees   position={[-15, 0, -160]} 
      scale={[0.19, 0.19, 0.19]} />

     <Trees position={[-15, 0, -150]} 
      scale={[0.19, 0.19, 0.19]}/> 

      <Trees position={[-16,1,-155]} 
      scale={[0.19, 0.19, 0.19]}/> 
       <Trees position={[-20,1,-160]} 
      scale={[0.19, 0.19, 0.19]}/> 

        {/* behind cafeteria */}
       <Trees position={[-5,0,-67 ]}
      scale={[0.19, 0.19, 0.19]}/>
    <Trees position={[-7,0,-69 ]}
      scale={[0.19, 0.19, 0.19]}/>

      <Trees position={[-5,0,-75 ]}
      scale={[0.19, 0.19, 0.19]}/>

      {/* field */}
     <Trees position={[22,1, -20]}
      scale={[0.19, 0.19, 0.19]}/>

       <Trees position={[-50,1, 120]}
      scale={[0.19, 0.19, 0.19]}/>
       <Trees position={[-47,1, 115]}
      scale={[0.3, 0.3, 0.3]}/>
       <Trees position={[-44,1, 105]}
      scale={[0.20,0.20, 0.20]}/>

         <Trees position={[4,1, 22]}
      scale={[0.30,0.30, 0.30]}/>
      
    </>
  )
}
