import { useState } from "react";
import { auth } from "../../component/firebase/FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/Profile";
    } catch (error) {
      console.log(error);
      console.log("email or password is incorrect");
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
            <div className="bg-white h-[23rem] xs:h-[22rem] w-[20rem] xm:h-[24rem] xp:w-[34rem] xp:h-[32rem] lg:w-[37rem] lg:h-[31rem] xlg:w-[55rem] xlg:h-[34rem]">
              <form onSubmit={handleSubmit}>
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
                <button
                  type="submit"
                  className="btn btn-primary text-2xl xp:text-3xl mt-7 hover:bg-[#c1d7f4] rounded-3xl border-l-black w-[17rem] h-14 ml-6 bg-[#f2f7fc] xp:mt-16 xp:ml-20 xp:h-20 xp:w-[25rem] xlg:w-[45rem]"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
