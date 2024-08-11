import { useNavigate } from "react-router-dom";
import * as postService from "../../services/postService.js";

export default function EditPost() {
  const navigate = useNavigate();
  const createPostHandler = async (e) => {
    e.preventDefault()
    const postData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await postService.create(postData);
      navigate("/blog");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };
  return (
    <div className='create-form'>
      <h1>Edit Post</h1>
      <form className='form-details' onSubmit={createPostHandler}>
        <div>
          <label htmlFor='author'>Author:</label> <br />
          <input type='text' id='author' name='author' />
        </div>
        <div>
          <label htmlFor='title'>Title</label> <br />
          <input type='text' id='title' name='title' />
          <div>
            <label htmlFor='imageUrl'>Image address:</label> <br />
            <input type='text' id='imageUrl' name='imageUrl' />
          </div>
        </div>
        <div>
          <label htmlFor='text'>Text:</label> <br />
          <textarea name='text' id='text'></textarea>
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
