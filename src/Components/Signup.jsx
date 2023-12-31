import React, { useState } from "react";
// import leftLoginPage from '../Images/leftLoginPage.png'
// import { Dialog } from '@headlessui/react'


import Layout from "../Layout";

const Signup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (

    <Layout>
      

      <div className="w-full flex justify-center items-center flex-col">
          <p className="text-center text-black font-medium text-[1.7rem]">
            WelcomeBack!
          </p>

          <p className="text-center">
            Sign up by entering the information below

          </p>

          <div className="flex flex-col items-center justify-center w-full ">


          <div className="w-full mt-5 flex justify-center items-center">
            <input
              type="text"
              placeholder="FirstName"
              className="w-full h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"
            />
          </div>

          <div className="w-full mt-10 flex justify-center items-center">
            <input
              type="text"
              placeholder="LastName:"
              className="w-full h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"
            />
          </div>

          <div className="w-full mt-10 flex justify-center items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"
            />
          </div>




          

          <div className="w-full mt-10 flex justify-center items-center relative">

            <div className=" flex-1">



            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              className="w-full h-[4rem] outline-none px-2 text-[#000] rounded-[12.089px] border-[#C4C4C4] border-[1.712px]"

             
            />
              </div>
            <div className="">

            <svg
               onClick={togglePassword}
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="37"
              viewBox="0 0 42 37"
              fill="none"
              className=" absolute top-1/2 transform -translate-y-1/2 cursor-pointer right-0 mr-10 "
            >
              <g
                clip-path="url(#a)"
                stroke="#D3D3D3"
                stroke-width="3.022"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M24.492 21.961a5.084 5.084 0 0 1-1.64 1.05c-.62.248-1.29.381-1.969.392a5.57 5.57 0 0 1-1.982-.329 5.135 5.135 0 0 1-1.681-.998 4.53 4.53 0 0 1-1.113-1.507 4.125 4.125 0 0 1-.367-1.778c.012-.609.16-1.209.437-1.765a4.579 4.579 0 0 1 1.171-1.471m13.58 12.178c-2.88 1.97-6.387 3.06-10.008 3.113-11.794 0-18.534-12.088-18.534-12.088 2.096-3.503 5.003-6.563 8.526-8.976l20.016 17.951Zm-13.546-20.7a17.059 17.059 0 0 1 3.538-.363c11.794 0 18.534 12.088 18.534 12.088a28.004 28.004 0 0 1-3.64 4.82L17.382 7.032ZM2.386 2.137l37.068 33.242" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.701.626h40.437V36.89H.701z" />
                </clipPath>
              </defs>
            </svg>


            </div>
            

          
           
           
          </div>




  <div className='flex justify-between items-center w-full'>

<div className="text-[#C4C4C4]">
  <p className="">Already have an account</p>

</div>

 <button className="">
 <a className="text-[#55229E] underline" href="/login">
       login
        </a>
       </button>

</div>

  </div>



<div className="rounded-[13.618px] border border-[#56229E] bg-[#55229E] w-full h-[70px] text-center pt-3 mt-7">
              <button className="">
                <p className="font-bold text-2xl font-sans text-white">Sign Up</p>
              </button>
            </div>


         

          
        </div>

      
      </Layout>
  
       
     
   
  );
};

export default Signup;
