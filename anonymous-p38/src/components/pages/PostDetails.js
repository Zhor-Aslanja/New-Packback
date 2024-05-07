import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import info from "../../data/info.json"

export default function PostDetails(props) {
    const {id} = useParams()
    const post = info.filter(e => e.id === Number(id))[0];
    const [usId, setUsId] = useState(post.userId);
    const [pId, setId] = useState(post.id);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const [closed, setClosed] = useState(true);
    

    return (
    <div className='w-full h-[80vh] flex justify-center items-center flex-col'>
        <div className='flex justify-between flex-col w-1/6 border-2 border-gray-200 hover:shadow-2xl transition-all duration-1000 rounded-lg p-4'>
        <ul>
            <li>User-ID: {usId}</li>
            <li>ID: {pId}</li>
            <li>TITLE: {title}</li>
            <li>DESCRIPTION: {body}</li>
        </ul>
        <div className='mt-8'>
            <hr className='mb-3'/>
            <button type="button" onClick={() => setClosed(!closed)} class="text-white bg-gradient-to-r
             from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Edit</button>
                <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 
                hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Delete</button>
            </div>
            {closed && (
                <div className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
                rouneded-md p-4 flex justify-between items-center flex-col'>
                    <p className='uppercase'>update your post</p>
                    <div className='mt-2'>
                        <label>Update Title</label>
                        <input placeholder={title} className='text-cyan-400 my-1 p-1 w-full rounded-md' />
                    </div>
                    <div className='mt-2'>
                        <label>Update Description</label>
                        <input placeholder={body} className='text-cyan-400 my-1 p-1 w-full rounded-md' />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
