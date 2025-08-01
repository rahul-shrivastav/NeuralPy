'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useEffect, useState } from 'react';
import { AiOutlinePython } from "react-icons/ai";

import { RiReactjsLine } from "react-icons/ri";
import { Prompts } from '@/components/Prompts';
import { LuCopy } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import Typewriter from '@/components/Typewriter';



export default function Home() {
  const [prompt, setprompt] = useState('');
  // const [loading, setloading] = useState(false);
  const [loading, setloading] = useState(true);
  const handleChange = (event) => {
    event.preventDefault()
    setprompt(event.target.value);
  };
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('font1').classList.remove('opacity-10', '-top-10');
      document.getElementById('font1').classList.add('top-0');
      document.getElementById('font2').classList.remove('opacity-10', '-top-10');
      document.getElementById('font2').classList.add('top-0');
      document.getElementById('form').classList.remove('opacity-10', 'top-10');
      document.getElementById('form').classList.add('top-0');
      document.getElementById('logo').classList.remove('opacity-10', 'scale-75');
      document.getElementById('logo').classList.add('scale-85');

    }, 10);

    setTimeout(() => {
      setloading(false);

    }, 5000);
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(prompt);

    const grad1 = document.getElementById('grad1');
    grad1.classList.remove('left-0');
    grad1.classList.add('left-[15%]');
    const grad2 = document.getElementById('grad2');
    grad2.classList.remove('left-0');
    grad2.classList.add('left-[15%]');

    const panel2 = document.getElementById('panel2');
    panel2.classList.remove('-right-[100%]');
    panel2.classList.add('right-0');
    const panel1 = document.getElementById('panel1');
    panel1.classList.remove('-left-[100%]');
    panel1.classList.add('left-0');

    const form = document.getElementById('form');
    form.classList.add('top-[1000px]', 'opacity-0');
    const logo = document.getElementById('logo');
    logo.classList.remove('left-1/2');
    logo.classList.add('left-[65%]');
    const font1 = document.getElementById('font1');
    font1.classList.add('top-[-1000px]', 'opacity-0');
    const font2 = document.getElementById('font2');
    font2.classList.add('top-[-1000px]', 'opacity-0');
  };
  return (
    <div className=" relative w-screen  h-screen bg-black overflow-clip ">



      <div className='fixed  top-1/2 left-1/2 transition-all -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10  sm:w-[50%] w-[85%]'>
        <div id='font1' className='text-5xl landing  w-full font-mono font-extrabold text-center md:text-6xl transition-all duration-[1.3s] relative -top-10 opacity-10'>Generate <span className=' linear-wipe'>Python</span> Code</div>
        <div id='font2' className='text-sm landing my-4 w-full font-mono font-light  text-center md:my-8 md:text-2xl text-gray-400 transition-all duration-[1.3s] relative -top-10 opacity-10'>What do you want to build ?</div>

        <form id='form' onSubmit={handleSubmit} className='transition-all duration-1000 relative top-10 opacity-10 rounded-sm text-white w-full  -- bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-80  '>

          <textarea id="prompt"
            value={prompt}
            onChange={handleChange}
            placeholder="Write your requirements or query here..."
            rows={10}
            cols={90}
            className='p-3 z-10 focus:outline-none font-extralight font-stretch-90% text-gray-300 rounded-md placeholder:text-gray-500 w-full border border-slate-600 focus:border  focus:border-teal-900'  >
          </textarea>

          <div className='w-full -z-10  opacity-15 h-[95%] absolute top-0 left-0 bg-lines'></div>
          <button type='submit' className='z-10 hover:cursor-pointer hover:border hover:border-white hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-emerald-600 via-emerald-400 text-black to-cyan-300 text-[10px] font-bold p-3 absolute font-stretch-100% bottom-6 right-6 rounded-sm flex items-center justify-center '>Generate Code</button>

        </form>


      </div>

      <div id='logo' className='opacity-10 scale-75 transition-all duration-[1.2s] fixed top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-7'>
        <img src='./logo_text2.png' width={'180px'} className=' opacity-100'></img>
      </div>

      {/* bg and GRADIENTS */}
      <div className='bg-lines w-full h-full absolute top-0 left-0 opacity-[0.04] border'></div>
      <div id='grad1' className='circle-gradient opacity-15 blur-3xl absolute border-white bottom-[70%]  left-0  h-full w-full'></div>
      <div id='grad2' className='circle-gradient-b opacity-15 blur-3xl absolute border-white top-[93%]  left-0  h-full w-full'></div>

      {/* panels */}
      <div className=' w-full h-full flex relative '>

        {/* panel1 */}
        <div id='panel1' className='w-[30%] bg-black  absolute transition-all duration-500 -left-[100%]   rounded-sm h-full border-r border-slate-700/55  flex flex-col items-center justify-center'>
          <div className='w-full  relative h-[65%] overflow-y-scroll '>


            <div className=' w-full flex-1 overflow-y-scroll'>
              <Prompts number={1} text={'w-[35%] rounded-sm In Natural Language Processing (NLP), stop words are the most common words in a language that are often filtered out during text preprocessing. These words typically dont carry significant meaning on their own and are usually removed to reduce noise and focus on the important words in the text.h-full border border-teal-900 flex flex-'} />
            </div>
          </div>
          <div className='w-full h-[35%]  p-5 pt-15  flex'>
            <form id='form' onSubmit={handleSubmit} className='transition-all duration-1000 relative top-0 rounded-sm text-white w-full  -- bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-80  '>

              <textarea id="prompt2"
                value={prompt}
                onChange={handleChange}
                placeholder="Write another prompt here..."
                className='flex-1 p-3 h-full z-10 focus:outline-none text-sm font-extralight font-stretch-90% text-gray-300 rounded-md placeholder:text-gray-500 w-full border border-slate-600 focus:border  focus:border-slate-500'  >
              </textarea>

              <button type='submit' className='z-10 hover:cursor-pointer hover:border hover:border-white hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-emerald-600 via-emerald-400 text-black to-cyan-300 text-[10px] font-bold p-3 absolute font-stretch-100% bottom-6 right-6 rounded-sm flex items-center justify-center '>Generate Code</button>
              <div className='w-full -z-10  opacity-25 h-full absolute top-0 left-0 bg-lines'></div>

            </form>

          </div>
        </div>

        {/* panel2 */}
        <div id='panel2' className='w-[70%] absolute -right-[100%] transition-all duration-500  rounded-sm h-full flex items-center justify-center  '>

          <div className=' w-[70%] h-[75%] z-10 bg-black '>

            <div className='gradient-border relative '>
              {/* react logo */}
              <span className=' absolute z-10 top-1/2 right-1/2 translate-1/2 -translate-y-1/2 opacity-5 text-teal-300 text-[130px] p-4'><AiOutlinePython />
              </span>
              {/* icons */}
              <div className='w-12 h-20  absolute bottom-2 right-0 flex flex-col bg-transparent border-transparent'>
                <button className='flex-1 w-full relative translate-x-[100%]   flex items-center justify-center text-emerald-700 hover:text-emerald-500 hover:cursor-pointer text-lg'><LuCopy />
                </button>
                <button className='flex-1 w-full relative translate-x-[100%] flex items-center justify-center text-emerald-700 hover:text-emerald-500 hover:cursor-pointer text-xl'><MdOutlineSpaceDashboard />
                </button>

              </div>


              {loading && <div className='absolute left-0 top-0 w-full h-full z-30 bg-black rounded-3xl'>
                <div className='flex  flex-col items-center justify-center w-full h-full'>
                  <img width={'40px'} className='opacity-100 logo filter invert-50 hover:invert-0' src={'./logo1.png'}></img>
                  <span className='font-extralight font-mono text-[8px]'>Generating code...</span>
                </div>
              </div>}

              {!loading && <div className='absolute left-0 top-0 w-full h-full  bg-black rounded-3xl'>
                <Typewriter />
              </div>}

            </div>

          </div>
        </div>

      </div>














    </div>
  );















};

