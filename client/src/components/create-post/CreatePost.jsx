export default function CreatePost(){
    return(
        <div className="create-form">
        <h1>Create Post</h1>
         <form className="form-details">
             <div>
                 <label htmlFor="author">Author:</label> <br />
                 <input type="text" id="author" name="author" />
         
               </div>
           <div>
             <label htmlFor="title">Title</label> <br />
             <input type="text" id="title" name="title" />
           <div>
             <label htmlFor="imageUrl">Image address:</label> <br />
             <input type="text" id="imageUrl" name="imageUrl" />
     
           </div>
    
           </div>
           <div>
            <label htmlFor="text">Text:</label> <br />
             <textarea name="text" id="text"></textarea>
            
    
          </div>
     
           <div >
             <button className="form-create-button" type="submit">Create</button>
           </div>
         </form>
         </div>
    )
}