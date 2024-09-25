import { useEffect, useState } from "react";
import * as postService from "../../services/postService.js";

import SearchItem from "./blog-post-item/SearchItem.jsx";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((result) => setPosts(result));
  }, []);

  const [searchItem, setSearchItem] = useState("");
  

  return (
    <div className='blog-container'>
      <div className='blog-title'>
        <h1>Blog</h1>
      </div>

      <div className='search'>
          <input
            type='text'
            className='search-term'
            placeholder='What are you looking for?'
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
        </div>

      <div className='wrap'>
  

        <div className='all-posts'>
        {posts.filter((value) => {
              if (searchItem == "") {
                console.log(value);
                return value;
                
              } else if (
                value.author.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                console.log(value);
                return value;
              }else if(
                value.title.toLowerCase().includes(searchItem.toLowerCase())
              ){
                console.log(value);
                
                return value;
              }
            }).map((posted) => (
          <SearchItem key={posted._id} {...posted} />
        ))}
        </div>
      </div>

      <div className='all-posts'>
        {/* {posts.map((posted) => (
          <BlogPostItem key={posted._id} {...posted} />
        ))} */}

        {posts.length === 0 && <h3 className='no-articles'>No articles yet.</h3>}
      </div>
    </div>
  );
}
