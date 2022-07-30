import axios from 'axios'
import React, { useEffect, useState } from 'react'

// body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id: 1
// title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId: 1

function FetchingUseEffect() {
    let [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            setPosts(res.data)
        }).catch(err =>{
            console.log(err);
        })
    },[])
  return (
    <div>
        post are loading .. 😩
        {
            posts.map(item => <li key={item.id}>🤞🥰 {item.title}</li>)
        }
    </div>
  )
}

export default FetchingUseEffect