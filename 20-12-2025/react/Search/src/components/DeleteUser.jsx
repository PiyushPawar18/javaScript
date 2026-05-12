import React, { useEffect, useState } from 'react'

const DeleteUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])
    function deleteUser(id){
        console.log(id)
        const a = users.filter((user,i) => {
            return id != user.id
        })
        console.log(a)
        setUsers(a);
    }
    return (
        <div className='delete'>
            {
                users.map((v, i) => {
                    return (
                        <div key={v.id}>
                        <a onClick={() => setInputName(v)}>{v.username}</a>
                        <button className='btn' onClick={() => deleteUser(v.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DeleteUser
