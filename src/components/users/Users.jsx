import React, {useEffect, useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch("https://coffee-store-server-two-lake.vercel.app/users")
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, []);
    return (
        <div className="overflow-x-auto container mx-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Account created</th>
                    <th>Last Sign In Time</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    users?.map((user, idx) => <tr key={user._id}>

                        <th>{idx + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.creationTime}</td>
                        <td>{user.lastSignInTime}</td>
                        <td>Blue</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default Users;