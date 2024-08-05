import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as postService from '../../services/postService.js'
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext.js";

export default function PostDetails(){
    const {email} =useContext(AuthContext)
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
  
    useEffect(() => {
      postService.getOne(postId).then(setPost);
      commentService.getAll(postId).then(setComments);
    }, [postId]);
  
    const addCommentHandler = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
  
      const newComment = await commentService.create(
        postId,
        formData.get("comment")
      );
  
  
  
      setComments(state => [...state,{...newComment,author:{email}}]);
    };
    return(
        <>
       
        <div className="details-container">
        <div className="details-box">
          <img src="/page/images/childWell-Being.jpg" alt="" />
          <h2>Article written by:{post.email}</h2>
          <h1>{post.title}</h1>
          <p>
          {post.text}
          </p>
  
      <div className="buttons">
          <a href="/page/edit.html" className="edit-button">Edit</a>
          <a href="/page/blog.html" className="delete-button">Delete</a>
      </div>
  
        </div>
        
      </div>
      
  
      <div className="add-comment-section">
          <h2>Add comment</h2>
          <form onSubmit={addCommentHandler}>
              <textarea name='comment' placeholder='Type here...'></textarea>
              <input type="submit" />
          </form>
      </div>
  
      <div className="comments-section">
          <h3>Comments:</h3>
          <ul>
          {comments.map(({_id, text,owner: {email} }) => (
              <li key={_id} className='comment'>
                <p>{email}: {text}</p>
              </li>
          ))}
          </ul>
          {comments.length === 0 && <p className='no-comment'>No comments.</p>}
      </div>
       </>
    )
}