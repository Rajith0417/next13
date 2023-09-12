// import React from 'react'

export default async function getPosts(userId: number) {
    const response =  await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if(!response.ok) undefined

    return response.json();
}
