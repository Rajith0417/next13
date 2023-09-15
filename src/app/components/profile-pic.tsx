// import React from 'react'
import Image from "next/image"

export default function profilePic() {
  return (
    <div className="">
        <Image 
        className="border border-red-950 rounded-full"
        width={"300"} 
        height={"300"} 
        src={"/images/profile-pic.jpg"} 
        alt={"my pic"} />
    </div>
  )
}
