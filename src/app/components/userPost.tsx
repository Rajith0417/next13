// import React from 'react'
type Props = {
    promise123: Promise<Post[]>;
}

export default async function userPost({promise123}: Props) {
    const posts = await promise123;
    const content = posts.map((post)=> { 
        return (
            <>
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </article>
            </>
            )
        })
        
    return content
}
