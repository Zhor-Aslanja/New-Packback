import React from 'react';
import info from "../../data/info.json"

export default function Posts() {
   return (
    <div>
        <p>Posts</p>
        <div>
            {info.map((post) => (
                <div key={post.id}>
                    <div>{post.userId}</div>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>
        ))}
        </div>
    </div>
  )
}
