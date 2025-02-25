import { useState } from "react";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form>
        <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] xp:w-[42rem] bg-[#808080] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[33.5rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem] xlg:w-[90rem]">
          <div className="flex flex-col justify-center items-center w-screen h-full">
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
    </>
  );
}

export default Login;
