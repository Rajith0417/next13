import React from "react";
import { getSortedPostsData } from "../../../lib/blog-posts";
import ListItem from "./list-item";

export default function BlogPost() {
  const blogPosts = getSortedPostsData();
  //console.log(blogPosts);
  const content = (
    <>
    <h2>Blogs</h2>
    {
      blogPosts.map(blog=>{
        return (
          <ListItem key={blog.id} blog={blog}/>
        )
      })
    }
    </>
  )

  return (
    content
  )
}
