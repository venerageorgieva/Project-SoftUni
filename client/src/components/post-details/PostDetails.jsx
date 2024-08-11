import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as postService from '../../services/postService.js'
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext.js";

export default function PostDetails(){
    const {email} = useContext(AuthContext)
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    console.log({postId});
    
  
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
          <img name="imageUrl" src={post.imageUrl} alt="" />
          <h2>Article written by: {post.author}</h2>
          <h1 name='title'>{post.title}</h1>
          <p name='text'>
          {post.text}
          </p>
  
      <div className="buttons">
          <Link to='/:postId/edit-post' className="edit-button">Edit</Link>
          <Link to="/blog" className="delete-button">Delete</Link>
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