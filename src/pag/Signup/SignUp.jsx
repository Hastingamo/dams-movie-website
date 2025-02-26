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
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up successfully:", user);

      console.log("signup");
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
        window.location.href = "/Login";
      }
    } catch (error) {
      console.error("Registration error:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <>
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] bg-[#808080] xp:w-[42rem] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[48.95rem] xl:w-[70.6rem] xlg:w-[90rem] ">
        <div className="flex justify-center items-center  ">
          <div className="w-[20rem] mt-8  md:mt-16 xp:w-[34rem] lg:w-[37rem] xlg:w-[55rem] flex  flex-col">
            <div className="bg-black h-[18rem] w-[20rem] xp:w-[34rem] lg:[37rem] lg:h-[30rem] xlg:w-[55rem] xp:h-[19rem]"></div>
            <div className="bg-white absolute top-[16rem] h xs:top-[15rem] xm:top-[14rem] rounded-[4rem] xm:left-18 h-[20rem] w-[20rem] xp:w-[34rem] xp:top-[18rem] xp:h-[26rem] lg:[37rem]  lg:top-[26rem] lg:h-[40rem] xlg:w-[55rem] xlg:h-[10rem] xlg:top-72 ">
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
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default SignUp;
