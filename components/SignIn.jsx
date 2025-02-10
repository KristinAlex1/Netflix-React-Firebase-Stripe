import React from 'react'

const SignIn = () => {
  return (
    <div  className='flex items-center justify-center'>
        <div className='flex flex-col h-[40vh]  w-[20vw] bg-black/85'>
        <h1 className='ml-[5rem] mt-[3rem] text-4xl text-white font-bold'>
            Sign In
        </h1>
        <input className='mt-[2rem] self-center bg-white rounded-sm h-[4rem] w-[27rem]'
        placeholder='username@gmail.com'
        
        ></input>
        <input className='mt-[1rem] self-center bg-white rounded-sm h-[4rem] w-[27rem]'
        placeholder='*******'
        ></input>
        <button className='mt-[3rem] h-[4rem] w-[27rem] self-center bg-red-600 text-white text-2xl rounded-sm'>Sign In</button>

        <div className='flex self-center p-[1rem] mt-[2rem]'>
            <h1 className='text-gray-500 mr-[0.5rem]'>New to Netflix?</h1>
            <h1 className='text-white'>Sign up now.</h1>

        </div>
        


        </div>

    </div>
  )
}

export default SignIn