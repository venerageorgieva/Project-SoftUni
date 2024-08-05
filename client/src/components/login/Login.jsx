export default function Login(){
    return(
        <div className="login-form">
        <h1>Login</h1>
         <form className="login-details">
         
           <div>
             <label htmlFor="email">Email:</label> <br />
             <input type="text" id="email" name="email" />
           </div>
     
           <div>
             <label htmlFor="password">Password:</label> <br />
             <input type="password" id="password" name="password" />
           </div>
        
           <div >
             <button className="button" type="submit">Login</button>
           </div>
         </form>
         </div>
    )
}