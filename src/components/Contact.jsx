import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center align-items-center'>

      
      <div className='h-[500px] w-[400px] bg-cyan-400 mt-[80px]'>

        <h1 className='text-center mt-5 '>Contact Us</h1>

        <input className='m-10 border-2 border-black' type="text" placeholder='Enter Your Name'></input>
        <br/>
        <input className='ml-10 border-2 border-black w-auto h-20 ' type="text" placeholder="Message"></input>
        <br/>
        <button className =" ml-10 mt-10 h-[50px] w-[60px] bg-slate-200 border-r-emerald-50 rounded-lg"type="submit">Submit</button>
      </div>


    </div>
  )
}

export default Contact;