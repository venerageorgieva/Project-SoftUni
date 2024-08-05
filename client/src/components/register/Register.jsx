export default function Register(){
    return(
        <div className="register-form">
        <h1>Register</h1>
         <form className="form-details">
             <div>
                 <label htmlFor="license-number">License Number:</label> <br />
                 <input type="text" id="license-name" name="license-name" />
         

            {/* { <!-- <p className={styles.errorMessage}>{errors.age}</p> -->} */}               </div>
           <div>
             <label htmlFor="first-name">First Name:</label> <br />
             <input type="text" id="first-name" name="first-name" />
     

            {/* { <!-- <p className={styles.errorMessage}>{errors.age}</p> -->} */}           </div>
           <div>
             <label htmlFor="last-name">Last Name:</label> <br />
             <input type="text" id="last-name" name="last-name" />
     

            {/* { <!-- <p className={styles.errorMessage}>{errors.age}</p> -->} */}           </div>
           <div>
             <label htmlFor="email">Email:</label> <br />
             <input type="text" id="email" name="email" />
     
            {/* { <!-- <p className={styles.errorMessage}>{errors.age}</p> -->} */}
           </div>
     
           <div>
             <label htmlFor="password">Password:</label> <br />
             <input type="password" id="password" name="password" />
           </div>
           <div>
             <label htmlFor="confirm-password">Confirm password:</label> <br />
             <input
               type="confirm-password"
               id="confirm-password"
               name="confirm-password"
             />
           </div>
           <div >
             <button className="button" type="submit">Register</button>
           </div>
         </form>
         </div>
    )
}