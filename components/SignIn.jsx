import React, { useRef } from 'react'
import { auth } from '../src/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
            navigate('/')
        })
        .catch((error) => alert(error.message))
      };

    const signOutFunction = (e) => {
        e.preventDefault();

        signOut(auth)
        .then(() => {
            console.log("User signed out successfully")
    })
        .catch(() => {
            console.error("Error signing out:", error);

        })

    }
  return (
    <div  className='flex items-center justify-center'>
        <div className='flex flex-col h-[40vh]  w-[35rem] bg-black/85'>
        <button onClick = {signIn} className='ml-[1rem] mt-[3rem] text-4xl text-white font-bold'>
            Sign In
        </button>
        <input ref={emailRef} className='mt-[2rem] self-center bg-white rounded-sm h-[4rem] w-[27rem]'
        placeholder='username@gmail.com'
        
        ></input>
        <input ref={passwordRef} className='mt-[1rem] self-center bg-white rounded-sm h-[4rem] w-[27rem]'
        placeholder='*******'
        ></input>
        <button onClick={signIn} className='mt-[3rem] h-[4rem] w-[27rem] self-center bg-red-600 text-white text-2xl rounded-sm'>Sign In</button>

        <div className='flex self-center p-[1rem] mt-[2rem]'>
            <h1 className='text-gray-500 mr-[0.5rem]'>New to Netflix?</h1>
            <button onClick={register} className='text-white hover:underline'>Sign up now.</button>

        </div>
        


        </div>

    </div>
  )
}

export default SignIn