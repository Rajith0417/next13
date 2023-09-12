// import React from 'react'
import getSingleUser from "../../../../lib/getSingleUser";
import getPosts from "../../../../lib/getPosts";
import { Suspense } from "react";
import UserPost from "@/app/components/userPost";
import type { Metadata } from "next";
import {notFound} from "next/navigation";


type Params = {
    params: {
        userId: number,
    }
}

export async function generateMetadata({params: {userId}}: Params): Promise<Metadata> {

  const singleUserData: Promise<User> = getSingleUser(userId)
  const user = await singleUserData;

  if(!user.name) return {
      title: 'User not found'
    }
  
  return {
    title: user.name,
    description: `This is the page of ${user.name}.`
  }
}

export default async function SingleUser({params: {userId}}: Params) {
  const singleUserData: Promise<User> = getSingleUser(userId)
  const postsData: Promise<Post[]> = getPosts(userId);  

  // const [singleUser, posts] = await Promise.all([singleUserData, postsData])//parallel fetching

  const singleUser = await singleUserData;

  if(!singleUser.name) return notFound();//if not found not defined default not found page will show


  const content = (
    <>
    <div>
      <h2>{singleUser.name}</h2>
      <br />
      <Suspense fallback="Loading...">
      {
        // posts.map(post => {
        //   return (
        //     <p key={post.id}>{post.title}</p>
        //   )
        // })
        <UserPost promise123={postsData} />//promise123 should be same as user post variable. otherwise it is an error
      }
      </Suspense>
    </div>
    </>
  );
  return (
    content
  )
}

