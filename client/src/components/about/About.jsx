export default function About(){
    return(
        <div className="aboutContainer">
        <article className="top-article">
          <img src="./images/Choosing-a-Pediatrician.jpeg" alt="" />
          <div className="first-info-box">
            <h1>What is Pediatrics?</h1>
            <p>
              Paediatrics is the branch of medicine dealing with the health and
              medical care of infants, children, and adolescents from birth up to
              the age of 18. The word “paediatrics” means “healer of children”;
              they are derived from two Greek words: (pais = child) and (iatros =
              doctor or healer). Paediatrics is a relatively new medical
              specialty, developing only in the mid-19th century. Abraham Jacobi
              (1830–1919) is known as the father of paediatrics.
            </p>
          </div>
        </article>
        <article className="center-article">
          <div className="second-info-box">
            <h1>What does a pediatrician do?</h1>
            <p>
              A paediatrician is a child's physician who provides not only medical
              care for children who are acutely or chronically ill but also
              preventive health services for healthy children. A paediatrician
              manages physical, mental, and emotional well-being of the children
              under their care at every stage of development, in both sickness and
              health.
            </p>
  
           
          </div> 
          <img src="./images/pediatrician.jpg" alt="" />
        </article>
        <article className="bottom-article">
          <div className="third-info-box">
            <p>
          Paediatrics is concerned not only about immediate management of the ill
          child but also long term effects on quality of life, disability and
          survival. Paediatricians are involved with the prevention, early
          detection, and management of problems including:
        </p>
        <ul>
          <li>developmental delays and disorders</li>
          <li>behavioral problems</li>
          <li>functional disabilities</li>
          <li>social stresses</li>
          <li>mental disorders including depression and anxiety disorders</li>
        </ul>       
          </div>
       
        </article>
      
      </div>
  
    )
}