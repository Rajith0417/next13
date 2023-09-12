// import React from 'react'

export default async function getSingleUser(userId: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if(!response.ok) undefined
    return (
      response.json()
    )
}
