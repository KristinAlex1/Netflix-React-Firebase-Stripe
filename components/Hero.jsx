import React, { useState } from 'react'

const Hero = () => {
    const truncate = (string) => {
        return string?.length > 150 ? string.substr(0,150) + ' ...': string;

    }


  return (
    <>
        <header className='h-[50vh] 'style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCRGvp5vtgaHziVcGSg8kLaGT5F1qU0H8jA&s)` }}>
                <div className='flex flex-col w-[30vw] text-white pl-[8rem] pt-[15rem] mb-[3rem] '>
                    <h1 className='text-5xl font-bold'>Movie Name</h1>
                    <div className='flex mt-[1rem]'>
                     <button className='h-[3vh] w-[4vw] font-bold text-xl rounded-sm bg-gray-900 mr-[1rem] hover:bg-white hover:text-black duration-300'>Play</button>
                     <button className='h-[3vh] w-[4vw] font-bold text-xl rounded-sm bg-gray-900 mr-[1rem] hover:bg-white hover:text-black duration-300'> My List</button>

                    </div>
                    <h1 className='mt-[1rem] text-xl font-bold break-words'>
                        {truncate('iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefViaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefViaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV')}
                    </h1>
                    
                    
                </div>
                <div className='h-[30%] bg-gradient-to-t from-white/10 to-black/10'></div>
            </header>
    </>
  )
}

export default Hero