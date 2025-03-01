import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth, db } from "../../component/firebase/FireBase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { GithubAuthProvider } from "firebase/auth";


function Regis({ facebbok, google, linkedin, twitter }) {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;

      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }
  function gitHubLogin(){
    const providers = new GithubAuthProvider();
    signInWithPopup(auth, providers).then(async (result) => {
      console.log(result);
      const user = result.user;
      console.log(user)


    });
    

  }
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-2 mt-6">
        <img className="w-4 h-4" src={facebbok} alt="" />
        <img onClick={gitHubLogin} className="w-4 h-4" src={linkedin} alt="" />
        <img onClick={googleLogin} className="w-4 h-4" src={google} alt="" />
        <img className="w-4 h-4" src={twitter} alt="" />
      </div>
    </>
  );
}

export default Regis;
