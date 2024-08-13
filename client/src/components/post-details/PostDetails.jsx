import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as postService from "../../services/postService.js";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext.js";
import useForm from "../../hooks/useForm.js";
import reducer from "./commentReducer.js";
import { pathToUrl } from "../../utils/pathUtils.js";
import Path from "../../paths.js";

export default function PostDetails() {
  const { email, userId } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);
  const { postId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    postService.getOne(postId).then(setPost);

    commentService.getAll(postId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [postId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(postId, values.comment);

    newComment.owner = { email };

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });
  };

  const deleteButtonClickHandler = async () => {
   const hasConfirmed = confirm(`Are you sure you want to delete this post -> "${post.title}"`);
  
   if(hasConfirmed){
   await postService.remove(postId);


   navigate('/posts')
   }
  }

  
  const { values, onChange, onSubmit } = useForm(addCommentHandler, 
    {comment:''}
  );

 
  return (
    <>
      <div className='details-container'>
        <div className='details-box'>
          <img name='imageUrl' src={post.imageUrl} alt='' />
          <h2>Article written by: {post.author}</h2>
          <h1 name='title'>{post.title}</h1>
          <p name='text'>{post.text}</p>

          {userId === post._ownerId && (
            <div className='buttons'>
              <Link
                to={pathToUrl(Path.PostEdit, { postId })}
                className='edit-button'>
                Edit
              </Link>
            
              <button className='edit-button' onClick={deleteButtonClickHandler}>Delete</button>
              
            </div>
          )}
        </div>
      </div>

      <div className='add-comment-section'>
        <h2>Add comment:</h2>
        <form onSubmit={onSubmit}>
          <textarea name='comment' onChange={onChange} placeholder='Type here...'></textarea>
          <input type='submit' />
        </form>
      </div>

      <div className='comments-section'>
        <h3>Comments:</h3>
        <ul>
          {comments.map(({ _id, text, owner: { email } }) => (
            <li key={_id} className='comment' name='comment'>
              <p>
                {email}:{text}
              </p>
            </li>
          ))}
        </ul>
        {comments.length === 0 && <p className='no-comment'>No comments.</p>}
      </div>
    </>
  );
}
