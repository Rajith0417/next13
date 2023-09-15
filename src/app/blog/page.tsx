import { Metadata } from "next";
import ProfilePic from "../components/profile-pic";
import BlogPost from "../components/blog-post";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'blog',
    description: 'Blog from Dave Gray'
}

export default function Blog() {
  return (
    <>
        <ProfilePic />
        <Suspense fallback="Loading...">
            <BlogPost />
        </Suspense>
        
    </>
  )
}
