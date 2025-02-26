import { useState } from "react";
import { auth } from "../../component/firebase/FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
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
      <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] bg-[#808080] xp:w-[42rem] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[48.95rem] xl:w-[70.6rem] xlg:w-[90rem] ">
        <div className="flex justify-center items-center ">
          <div className="w-[20rem]  h-[35rem] mt-8 bg-white md:mt-16 xp:w-[34rem] lg:w-[37rem] xlg:w-[55rem] xlg:h-[40rem]">
            <div className="bg-black h-[10rem] w-[20rem] xp:w-[34rem] lg:[37rem] xlg:w-[55rem]">
              <h1 className="text-white flex justify-center items-center top-24">
                Dams
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="">
                <div className="">
                  <input
                    type="email"
                    name="idetifier"
                    onChange={handleEmail}
                    placeholder="enter your email"
                  />
                  <input
                    type="password"
                    name="password"
                    onChange={handlePassword}
                    placeholder="enter your password"
                  />
                  <button>login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
