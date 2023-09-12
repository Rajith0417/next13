import React from 'react'
import { Metadata } from 'next'
import getUsers from '../../../lib/getUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users',
}
export default async function Users() {
    const userData: Promise<User[]> = getUsers();
    const users = await userData;
    const content = (
        <div>
            <h2>Users</h2>
            <br />
            {
                users.map((user)=>{
                    return (
                        <p key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></p>
                    )
                })
            }
        </div>
    );
  return (content);
}
