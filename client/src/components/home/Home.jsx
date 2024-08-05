export default function Home(){
    return(
        <main>

        <div className="container">
          <div className="detail-box">
            <h1>Role</h1>
            <p>
              It is important for pediatricians to consider all aspects of the
              child’s health, including their overall wellbeing as they grow and
              develop. They can help to improve a number of health outcomes for
              young people, such as reducing mortality and infection, while also
              encouraging healthy lifestyle choices to maintain good health.
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="our-mission">Our  Mission</div>
      
          <div className="wrap-container">
            <div className="programs-first-container">
              <div className="programs">
                <article>
                  <img src="./images/safety.png" alt="" />
                  <p>Safety is our priority.</p>
                </article>
              </div>
      
              <div className="programs">
                <article>
                  <img src="./images/lessons.jpeg" alt="" />
                  <p>Interactive learning.</p>
                </article>
              </div>
            </div>
      
            <div className="programs-second-container">
              <div className="programs">
                <article>
                  <img src="./images/happyenv.png" alt="" />
                  <p>Happy environment.</p>
                </article>
              </div>
              <div className="programs">
                <article>
                  <img src="./images/child-psychology.png" alt="" />
                  <p>
                    Monthly child psychologist appointments.To ensure a healthy
                    lifestyle
                  </p>
                </article>
              </div>
            </div>
          </div>
      </div>
      </main>
    )
}