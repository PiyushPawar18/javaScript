import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ResultBox = ({input,setInput}) => {
    const [allusers , setAllusers] = useState([])
    const [users , setUsers] = useState(allusers);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setAllusers(data))
    },[])
    useEffect(()=>{
        let a = allusers.filter((v,i) => v.username.toLowerCase().includes(input))
        setUsers(a);
    },[input])

    const setInputName = (v) => {
        setInput(v.username)
    }
    return (
        <div className='result-box'>
            <h3>Result Bar</h3>
            <div className='result-data'>
                {
                    users.map((v,i) => {
                        return(
                            <a key={i} onClick={() => setInputName(v)}>{v.username}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ResultBox

/*
import React, { useEffect, useState, useMemo } from 'react'

const ResultBox = ({ input, setInput }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const filteredUsers = useMemo(() => {
    if (!input) return users
    return users.filter(u =>
      u.username.toLowerCase().includes(input.toLowerCase())
    )
  }, [input, users])

  return (
    <div className='result-box'>
      <h3>Result Bar</h3>
      <div className='result-data'>
        {filteredUsers.map(user => (
          <div
            key={user.id}
            onClick={() => setInput(user.username)}
            className="result-item"
          >
            {user.username}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultBox

*/