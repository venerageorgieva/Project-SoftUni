import { useNavigate, useParams } from "react-router-dom";
import * as postService from "../../services/postService.js";
import useForm from "../../hooks/useForm.js";
import { useEffect, useState } from "react";

export default function EditPost() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({
    author: "",
    title: "",
    imageUrl: "",
    text: "",
  });

  useEffect(() => {
    postService.getOne(postId).then((result) => {
      setPost(result);
    });
  }, [postId]);

  const editPostHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData);

      try {
        await postService.edit(postId,values);
        navigate("/posts");
      } catch (err) {
        // Error notification
        console.log(err);
      }
  };

   const onChange = (e) =>{
    setPost(state =>({
      ...state,
      [e.target.name] : e.target.value
    }))
   }

  return (
    <div className='create-form'>
      <h1>Edit Post</h1>
      <form className='form-details' onSubmit={editPostHandler}>
        <div>
          <label htmlFor='author'>Author:</label> <br />
          <input type='text' id='author' value={post.author} onChange={onChange} name='author' />
        </div>
        <div>
          <label htmlFor='title'>Title</label> <br />
          <input type='text' id='title' value={post.title} onChange={onChange} name='title' />
          <div>
            <label htmlFor='imageUrl'>Image address:</label> <br />
            <input type='text' id='imageUrl' value={post.imageUrl} onChange={onChange} name='imageUrl' />
          </div>
        </div>
        <div>
          <label htmlFor='text'>Text:</label> <br />
          <textarea id='text' value={post.text} onChange={onChange} name='text'></textarea>
        </div>

        <div>
          <button className='form-create-button' type='submit'>
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
