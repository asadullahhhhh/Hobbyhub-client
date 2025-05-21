import React, { use, useState } from 'react';
import { AuthContext } from '../../assets/Contexts/Context';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase.init';

const Signup = () => {
  const [passErr, setPassErr] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()

  // Global context
  const { signUp } = use(AuthContext);
  

  // check password
  const regex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const handelChange = (e) => {
    if (regex.test(e.target.value)) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  };

  // Sign up functinality here
  const handelSignup = (e) => {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const userInfo = Object.fromEntries(formData.entries())
    console.log(userInfo);

    if(passErr){
      signUp(userInfo?.email, userInfo?.password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: userInfo.name,
            photoURL: userInfo.photo,
          })
            .then(() => {
              // console.log(res);
            const newObj = {
              name : auth.currentUser.displayName,
              email : auth.currentUser.email,
              photURL : auth.currentUser.photoURL,
              groupCollection : []
            }
            
            // post user
            fetch("http://localhost:3000/users", {
              method : "POST",
              headers : {
                "content-type" : "application/json"
              },
              body : JSON.stringify(newObj)
            })
              .then(res => res.json())
              .then(data => {
                if(data.insertedId){
                  navigate(location?.state || "/")
                }
              })
            })
        })
        .catch(err => {
          toast.error(err.message)
        })
      // console.log(userInfo);
    }
    else{
      toast.error("Please check the password")
    }
  }

  // console.log(passErr);

  return (
    <>
      <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center mb-5">
                Signup now!
              </h1>
              <form onSubmit={handelSignup} className="w-full">
                <div className="space-y-3">
                  <div>
                    <label className="label">Name</label>
                    <input
                      type="text"
                      required
                      name="name"
                      className="input focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="label">Photo URL</label>
                    <input
                      type="text"
                      name="photo"
                      required
                      className="input focus:outline-none"
                      placeholder="Photo URL"
                    />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="input focus:outline-none"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative">
                    <label className="label">Password</label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      required
                      className="input focus:outline-none"
                      placeholder="Password"
                      onChange={handelChange}
                    />
                    <div
                      onClick={() => setShow(!show)}
                      className="absolute z-20 px-2 py-1 rounded-lg bg-gray-800 cursor-pointer top-[52%] right-[5%] md:right-[10%]"
                    >
                      {show ? (
                        <FaEyeSlash color="white" />
                      ) : (
                        <FaEye color="white" />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  {passErr ? (
                    ""
                  ) : (
                    <p className="text-[12px] max-w-[320px] text-red-400">
                      password must have an uppercase letter and a lowercase
                      letter and length must be 6
                    </p>
                  )}
                </div>
                <div className="mt-1">
                  <p>
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="text-blue-400 underline font-medium"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
                <button type="submit" className={`btn w-full btn-neutral mt-4`}>
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;