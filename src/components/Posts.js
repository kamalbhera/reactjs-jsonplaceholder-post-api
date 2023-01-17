import React,{useState,useEffect} from 'react'

import {NavLink} from "react-router-dom"

import axios from 'axios'
import Navbar from './Navbar';


function Posts({setPostDetail}) {

    const [posts, setPosts]= useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(
            res=>{
                setPosts(res.data)
            }
        )
        },[]);

    return (
        <>
        <Navbar/>
        <div className="p-16">
            <h3>Posts</h3>
            {posts.map(item=>{
                if(item.id<=30){
                return(
                    <div className="border-2 border-purple-500 rounded-lg my-2 p-4 flex justify-between" >
                        <p className="text-green-900 w-3/4 capitalize" key={item.id}>{item.title}</p>
                        <NavLink to="/postwithcomments" className="text-sm text-pink-500" onClick={()=>{setPostDetail(item)}} >Read Comments</NavLink>
                    </div>
                )
                }
            })}
        </div>
        </>
    )
}

export default Posts
