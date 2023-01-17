import React,{useState, useEffect} from 'react'
import Navbar from './Navbar'

function PostwithComments({postDetail}) {

    const [comments,setComments]= useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(data=>{
            return data.json()
        }).then(response=>{
            setComments(response);
        })
    }, [])

    var postcomments=comments.filter(e=>{
        return (e.postId===postDetail.userId)
    })


    return (
        <>
        <Navbar/>
        <div className="p-16 ">
            <p className="py-3 px-4 bg-blue-500 bg-opacity-75 rounded-lg capitalize">{postDetail.title}</p>
                    <p className="text-sm ml-2 text-red-500 italic ">Comments:-</p>
            {postcomments.map(val=>{
                return <div key={val.id}>
                    <p className="py-1 ml-8 px-4 3 bg-blue-500 bg-opacity-50 capitalize">{val.name}</p>
                    <p className="px-6 pb-7 ml-8 mb-3 text-green-900 3 italic bg-blue-500 bg-opacity-25">{val.body}</p>
            </div>
            })}
        </div>
        </>
    )
}


export default PostwithComments
