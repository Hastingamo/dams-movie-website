import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../../component/firebase/FireBase";
import { db } from "../../component/firebase/FireBase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const auth = getAuth(app);
  const handleRegister = async(e) =>{
    e.preventDefault(); // Prevent page refresh

    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
            console.log("User signed up successfully:", user);

      console.log("signup");
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
        window.location.href = "/Login";

      }

    }catch(error){
      console.error("Registration error:", error.message);  
      toast.error(error.message, {
        position: "bottom-center",
      });
    
    }
  }
  return (
    <>
      <form onSubmit={handleRegister}>
        <h3>Sign Up</h3>
        <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">Login</a>
        </p>
      </form>
    
    </>
  );
}
export default SignUp;
