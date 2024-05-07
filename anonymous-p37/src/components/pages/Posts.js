import React from 'react';
import info from "../../data/info.json";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Posts() {
    const [search, setSearch] = useState('');
    const date = new Date() 
    
    return (  
    <div className='container mx-auto bg-gray-200 flex flex-col justify-between items-center '>
        <div>
            <p>Posts</p>
            <input type='text' onChange={(e) => e.target.value}></input>
        </div>
            {info.map((post) => ( 
                <div key={post.id} className='w-[85%] bg-white my-2 rounded-lg p-2 box-border'>
                   <Link href={ '/posts/' +post.id}>More Details
                    <div>{post.userId}</div>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <div>{date.getFullYear()}/{date.getMonth()+1}/{date.getDate()} at {date.getHours()}:
                    {date.getMinutes()}</div>
                   </Link>
                </div>
        ))}
        </div>
  )
}
