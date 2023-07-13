import React from "react";
import './App.css';
import Animek from "./img/animek.JPG"
import Profile from "./img/Profile2.png"
import LinkedIn from "./img/Linkedin.png"
import Github from "./img/Github.png"
import Instagram from "./img/Instagram1.png"
import Discord from "./img/Discord1.png"
import Ellipsis from "./img/Ellipsis2.png"
import { useState, useEffect } from "react";


const App=()=>{   
  const [theme,setTheme]= useState("light");

  useEffect(()=>{
    if(theme === "dark" ){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleThemeSwitch=()=>{
    setTheme(theme === "dark"? "light":"dark" );
  }

 
  



  return(
    <div className="flex h-screen mx-auto justify-center dark:bg-slate-950 bg-beige">
        <div className=" w-96 flex flex-col  my-12 mx-14 justify-center content-center space-y-6 dark:bg-slate-950 bg-beige">
         
            <div className="flex flex-col gap-5   dark:bg-slate-950 bg-beige">

              <div className="flex flex-col gap-4 ">
                <div className="flex justify-end " >
                    <button class="flex justify-end " onClick={handleThemeSwitch}> 
                        <span class=" dark:inline end:0"
                        ><svg viewBox="0 0 24 24" fill="none" class="w-8 h-8">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                            class="dark:fill-sky-400/20 fill-sky-400/20"
                          ></path>
                          <path
                            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                            class="dark:fill-sky-500 fill-slate-700"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                            class="dark:fill-sky-500 fill-slate-700"
                          ></path></svg></span>
                    </button>
                </div>
                <div>
                  <img className="rounded-full h-40 w-40 mx-auto " src={Animek}/>
                </div>
                <p className="font-sans text-2xl font-bold text-center last-of-type:gap-5 dark:text-white">Arwin Marinta</p> 
              </div>

              <div className="flex flex-col gap-5">
                <a href="#">    
                    <button className = "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                        <img className= "h-8 w-8 ml-4" src={Profile}></img>
                        <span className="font-mono text-xl  text-center mx-auto" >Profile</span>
                        <div className= "h-8 w-8  mr-4 rounded-full  hover:bg-gray  ">
                          <img src={Ellipsis}></img>
                        </div>
                    </button>
                </a>
         
                <a href="https://www.linkedin.com/in/arwin-marinta-95512a256/" target="_blank">    
                    <button className= "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                      <img className= "h-8 w-8 ml-4" src={LinkedIn}></img>
                      <span className="font-mono text-xl  text-center mx-auto" >LinkedIn</span>
                      <div className= "h-8 w-8  mr-4">
                        <img src={Ellipsis}></img>
                      </div>
                    </button>
                </a>

                <a href="https://github.com/ArwinMarinta" target="_blank">    
                    <button className = "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                      <img className= "h-8 w-8 ml-4" src={Github}></img>
                      <span className="font-mono text-xl  text-center mx-auto" >Github</span>
                      <div className= "h-8 w-8  mr-4">
                        <img src={Ellipsis}></img>
                      </div>
                    </button>
                </a>

                <a href="https://www.instagram.com/wynnn_1/" target="_blank">    
                    <button className = "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                      <img className= "h-8 w-8 ml-4" src={Instagram}></img>
                      <span className="font-mono text-xl  text-center mx-auto" >Instagram</span>
                      <div className= "h-8 w-8  mr-4">
                        <img src={Ellipsis}></img>
                      </div>
                    </button>
                </a>

                <a href="#" >    
                    <button className = "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                      <img className= "h-8 w-8 ml-4" src={Discord}/>
                      <span className="font-mono text-xl  text-center mx-auto" >Discord</span>
                      <div className= "h-8 w-8  mr-4">
                        <img src={Ellipsis}></img>
                      </div>
                    </button>
                </a>
{/* 
                <a href="#" >    
                    <button className = "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  shadow-costum  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu transition-all hover:bg-beige border-abu bg-white">
                      <img className= "h-8 w-8 ml-4" src={Discord}/>
                      <span className="font-mono text-xl  text-center mx-auto" >Discord</span>
                      <div className= "h-8 w-8  mr-4">
                        <img src={Ellipsis}></img>
                      </div>
                    </button>
                </a>

                <a href="#" >    
                    <button className = "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  shadow-costum  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu transition-all hover:bg-beige border-abu bg-white">
                      <img className= "h-8 w-8 ml-4" src={Discord}/>
                      <span className="font-mono text-xl  text-center mx-auto" >Discord</span>
                      <div className= "h-8 w-8  mr-4">
                        <img src={Ellipsis}></img>
                      </div>
                    </button>
                </a>

                <a href="#" >    
                    <button className = "flex flex-row justify-between content-center border-2 rounded-xl  py-2 w-full  shadow-costum  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu transition-all hover:bg-beige border-abu bg-white">
                      <img className= "h-8 w-8 ml-4" src={Discord}/>
                      <span className="font-mono text-xl  text-center mx-auto" >Discord</span>
                      <div className= "h-8 w-8  mr-4">
                        <img src={Ellipsis}></img>
                      </div>
                    </button>
                </a> */}
                {/* <button class = "border-2 rounded-lg px-80 py-3 border-indigo-600">Twitter</button>
                <button class = "border-2 rounded-lg px-80 py-3 border-indigo-600">Telegram</button> */}

              </div>
            </div>
            <div className= "text-center text-lg dark:bg-slate-950 text-black dark:text-white bg-beige">Builds with React and Tailwinds</div>
        </div>
    </div>
           


   
  )
}

export default App;

