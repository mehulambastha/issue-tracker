
import React from 'react'
import Link from 'next/link'

interface User {
    id: number;
    name: string;
    email: string;
}

const User = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()
    return (
        <>
            Users 
            <div className="divider"></div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {users.map(user => <tr key={user.id} className='hover'>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)}
            </table>
            <div className="divider"></div>
            <Link href="../">Back to Home</Link>

        </>
  )
}

export default User
