export default function Blog(){
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
         <div className="blog-posts">
        <article className="post">
          <h2>Article written by: Dr. Veselin Atanasov</h2>
          <h1>Expert Pediatrics Health Tips for Your Child's Well-Being</h1>
          <img src="./images/childWell-Being.jpg" alt="" />
  
          <a href="/page/details.html">Details</a>
        </article>
      </div>
      
  
      </div>
        </>

    )
}