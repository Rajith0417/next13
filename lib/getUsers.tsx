// import React from 'react'

export default async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!response.ok) throw new Error('Error fetching data');
  return (
    response.json()
  )
}

