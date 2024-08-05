import { Link } from "react-router-dom";

export default function BlogPostItem({
    _id,
    author,
    title,
    imageUrl,
    

}){
    return(

        <>
        <div className="blog-posts">
       <article className="post">
         <h2>Article written by: {author}</h2>
         <h1>{title}</h1>
         <img src={imageUrl} alt="" />
 
         <Link to={`/posts/${_id}`}>Details</Link>
       </article>
     </div>
     </>
    )

}