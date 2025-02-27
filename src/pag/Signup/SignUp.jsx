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
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
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
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[26.5rem] bg-[#808080] xp:w-[42rem] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[48.95rem] xl:w-[70.6rem] xlg:w-[90rem] ">
        <div className="flex justify-center items-center mt-11">
          <div className="w-[20rem] xs:mt-9 xm:mt-0 md:mt-16 xp:w-[34rem] lg:w-[37rem] xlg:w-[55rem] flex  flex-col shadow-xl shadow-black">
            <div className="w-[20rem]  xp:w-[34rem] lg:w-[37rem] xlg:w-[55rem] h-[8rem] bg-[#8ec3f7]">
            <h3 className="text-center mt-7">Sign Up</h3>

            </div>
            <div className="bg-white h-[36rem] xs:h-[35rem] w-[20rem] xm:h-[32rem] xp:w-[34rem] xp:h-[43rem] lg:w-[37rem] lg:h-[42rem] xlg:w-[55rem] xlg:h-[42rem]">
              <form onSubmit={handleRegister}>
                <div className="mb-3 flex flex-col mt-5 ml-11 xp:mt-10 xp:ml-24 rounded-sm w-[15rem]  xp:w-[23rem] lg:w-[28rem] xlg:w-[43rem] shadow-md shadow-black">
                  <label className="text-2xl">First name</label>
                  <input
                    type="text"
                    className="form-control border rounded-sm p-2 text-2xl "
                    placeholder="First name"
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 flex flex-col mt-5 ml-11 xp:mt-10 xp:ml-24 rounded-sm w-[15rem]  xp:w-[23rem] lg:w-[28rem] xlg:w-[43rem] shadow-md shadow-black">
                  <label className="text-2xl">Last name</label>
                  <input
                    type="text"
                    className="form-control border rounded-sm p-2 text-2xl "
                    placeholder="Last name"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>

                <div className="mb-3 flex flex-col mt-5 ml-11 xp:mt-10 xp:ml-24 rounded-sm w-[15rem]  xp:w-[23rem] lg:w-[28rem] xlg:w-[43rem] shadow-md shadow-black">
                  <label className="text-2xl">Email address</label>
                  <input
                    type="email"
                    className="form-control border rounded-sm p-2 text-2xl "
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 flex flex-col mt-5 ml-11 xp:mt-10 xp:ml-24 rounded-sm w-[15rem]  xp:w-[23rem] lg:w-[28rem] xlg:w-[43rem] shadow-md shadow-black">
                  <label className="text-2xl">Password</label>
                  <input
                    type="password"
                    className="form-control border rounded-sm p-2 text-2xl "
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="d-grid">
                  <button type="submit"  className="btn btn-primary text-2xl xp:text-3xl mt-7 hover:bg-[#c1d7f4] rounded-3xl border-l-black w-[17rem] h-14 ml-6 bg-[#f2f7fc] xp:mt-16 xp:ml-20 xp:h-20 xp:w-[25rem] xlg:w-[45rem]">
                    Sign Up
                  </button>
                </div>
                <p onClick={()=>navigate("Login")} className="forgot-password text-center text-2xl xp:text-3xl">
                  Already registered login
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
