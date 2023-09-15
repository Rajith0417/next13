import React from 'react'
import { notFound } from "next/navigation"
import { Metadata } from 'next'
import BlogPost from '@/app/components/blog-post'
import { getSinglePostData, getSortedPostsData } from '../../../../lib/blog-posts'
import getFormattedDate from '../../../../lib/get-formatted-date'
import Link from 'next/link'

type params = {
  params: {
    blogId: string
  }
}

export async function generateMetadata({params}:params):Promise<Metadata>{
  const blogs =  getSortedPostsData();
  const postId = params.blogId;
  const singlePost = blogs.find(blog => blog.id === postId);

  if(!singlePost?.id){
    return {
      title: "post not found",
    }
  }

  return {  
    title: singlePost.title,
    description: 'description'
  }
}

export default async function selectedBlogPost({params}: params) {
  const {blogId} = params;
  const {id, title, date, htmlContent} = await getSinglePostData(blogId)

  const formattedDate = getFormattedDate(date);

  if(!id){
    return notFound();
  }
  
  return (
    <main>
      <h1>{title}</h1>
      <p>{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{__html: htmlContent}} />
        <Link href="/" >Back to Home</Link>
      </article>
    </main>
  )
}
