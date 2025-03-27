import { useEffect, useState } from "react";
import { auth, db } from "../../component/firebase/FireBase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Regis from "../Register/Regis";

function Profile() {
  const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
        setUserDetails(user)
  
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      });
    };
    useEffect(() => {
      fetchUserData();
    }, []);
  
    async function handleLogout() {
      try {
        await auth.signOut();
        window.location.href = "/login";
        console.log("User logged out successfully!");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    }
    
  return (
    <div className="absolute left-0 top-10 h-screen overflow-x-hidden w-[24.5rem] xp:w-[42rem] xp:overflow-x-hidden bg-[#808080] md:overflow-x-hidden xs:w-[27rem] xs:overflow-x-hidden xm:overflow-x-hidden xm:w-[33.6rem]  md:h-ful md:w-[32.8rem] md:bg-[#DADADA] md:absolute md:top-0 md:left-[236px] lg:w-[49rem] xl:w-[70.6rem] xlg:w-[90rem]">
      {userDetails ? (
        <>
          <div className="flex justify-center items-center mt-10">
            <img
              src={userDetails.photo}
              style={{ borderRadius: "50%" }}
              className="w-10 h-14"
            />
          </div>
          <h3 className="text-center mt-9">Welcome {userDetails.firstName} 🙏🙏</h3>
          <div>
            <p className="text-center mt-2">Email: {userDetails.email}</p>
            <p className="text-center mt-2 ">First Name: {userDetails.firstName}</p>
            <p>Last Name: {userDetails.lastName}</p>
          </div>
          <button className="btn btn-primary  w-16 h-16 bg-black text-white items-center" onClick={handleLogout}>
            Logout
          </button>
          <button onClick={()=>navigate("/Movies")} className="btn btn-primary  w-16 h-16 bg-black text-white items-center">
            home
          </button>
        </>
      ) : (
            <div className="flex justify-center items-center flex-col">
              <p>you have not an account with us </p>
              <div className="flex justify-center items-center mt-11">
          <div className="w-[20rem] mt-8  md:mt-16 xp:w-[34rem] lg:w-[37rem] xlg:w-[55rem] flex  flex-col shadow-xl shadow-black">
                <div className="w-[20rem]  xp:w-[34rem] lg:w-[37rem] xlg:w-[55rem] h-[10rem] bg-[#8ec3f7]">

                </div>
                <div className="bg-white h-[24rem] w-[20rem] xp:w-[34rem] xp:h-[32rem] lg:w-[37rem] lg:h-[40rem] xlg:w-[55rem] xlg:h-[32rem]">
                  <h1 className="text-black text-3xl flex justify-center items-center mt-4 font-sans xp:text-5xl xp:mt-9"> welcome! </h1>
                  <div onClick={()=>navigate("SignUp")} className=" mt-7 hover:bg-[#c1d7f4] rounded-3xl border-l-black w-[17rem] h-14 ml-6 bg-[#f2f7fc] xp:mt-16 xp:ml-20 xp:h-20 xp:w-[25rem] xlg:w-[45rem]"> 
                      <h1 className="text-2xl text-center pt-2 xp:text-3xl xp:pt-4">create account</h1>
                  </div>
                  <div onClick={()=>navigate("Login")} className=" mt-7 hover:bg-[#c1d7f4] rounded-3xl border-l-black w-[17rem] h-14 ml-6 bg-[#f2f7fc] xp:mt-16 xp:ml-20 xp:h-20 xp:w-[25rem] xlg:w-[45rem]"> 
                      <h1 className="text-2xl text-center pt-2 xp:text-3xl xp:pt-4">login</h1>
                  </div>
                  <Regis
                  google="images/social.png"
                  facebbok="images/facebook.png"
                  linkedin="images/linkedin.png"
                  twitter="images/twitter.png">

                  </Regis>
                </div>
          </div>
        </div>
            </div>
      )}
    </div>  )
}

export default Profile