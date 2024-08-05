import { useEffect, useState } from "react"
import * as postService from "../../services/postService.js"
import BlogPostItem from "./blog-post-item/BlogPostItem.jsx";

export default function Blog(){
  const[posts,setPosts] = useState([]);

  useEffect(()=>{
    postService.getAll()
    .then(result => setPosts(result));
    
},[]);


    return(
        <>
                <div className="blog-title">
        <h1>Blog</h1>
      </div>
  
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="search-term"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="search-button">Search</button>
        </div>
      </div>
  
      <div className="all-posts">
         {posts.map(posted => (
        <BlogPostItem key={posted._id} {...posted} />
     ))}

     {posts.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
 ) }
      </div>
    

        </>

    )
}