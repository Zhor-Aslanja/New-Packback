import React from 'react';
import { useParams } from 'react-router-dom';
import info from "../../data/info.json"

export default function PostDetails(props) {
    const {id} = useParams()
    const post = info.filter(e => e.id === Number(id))[0];
    return (
    <div>
        <ul>
            <li>{post.userId}</li>
            <li>{post.id}</li>
            <li>{post.title}</li>
            <li>{post.body}</li>
        </ul>
    </div>
  )
}
