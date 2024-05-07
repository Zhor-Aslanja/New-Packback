import React from 'react';
import info from "../../data/info.json";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Posts() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(info);

    const date = new Date() 
    return (  
    <div className='container mx-auto bg-gray-200 flex flex-col justify-between items-center '>
        <div>
            <p>Posts</p>
            <input type='text' placeholder='Search posts...' value={search} onChange={(e) => {
                setSearch(e.target.value);
                setData(info.filter(element =>
            element.title.includes(search)))}
        } />
        </div>
            {data.map((post) => ( 
                <div key={post.id} className='w-[85%] bg-white my-2 rounded-lg p-2 box-border'>
                   <Link to={ '/posts/' +post.id}>More Details
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
