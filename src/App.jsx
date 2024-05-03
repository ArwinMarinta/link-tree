import React from "react";
import "./App.css";
import "./Modal";

// import Animek from "./img/animek.JPG"
import Arwin from "./img/Arwin.jpg";
// import Share from "./img/share.png"
import Profile from "./img/Profile2.png";
import LinkedIn from "./img/Linkedin.png";
import Github from "./img/Github.png";
import Instagram from "./img/Instagram1.png";
import Discord from "./img/Discord1.png";
import Twitter from "./img/twitter.png";
import Telegram from "./img/telegram.png";
import Spotify from "./img/spotify.png";
import Qrig from "./img/Qrig.png";
import Qrln from "./img/QrLI.png";
import Qrdc from "./img/Qrdc.png";
import Qrgt from "./img/QrThb.png";
import Qrsptfy from "./img/Qrsptfy.png";
import Qrtwt from "./img/Qrtwt.png";
import Qrtlg from "./img/Qrtlg.png";
import { useState, useEffect } from "react";
import Modal from "./Modal";
// import userEvent from "@testing-library/user-event";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // const [showModal, setShowModal]=useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  // const [showModal8, setShowModal8]=useState(false);
  // const [showModal9, setShowModal9]=useState(false);
  // const handelOnClose = ()=>setShowModal(false);
  const handelOnClose2 = () => setShowModal2(false);
  const handelOnClose3 = () => setShowModal3(false);
  const handelOnClose4 = () => setShowModal4(false);
  const handelOnClose5 = () => setShowModal5(false);
  const handelOnClose6 = () => setShowModal6(false);
  const handelOnClose7 = () => setShowModal7(false);
  // const handelOnClose8 = ()=>setShowModal8(false);
  // const handelOnClose9 = ()=>setShowModal9(false);

  return (
    <>
      <div className="flex min-h-screen mx-auto justify-center items-start dark:bg-slate-950 bg-beige">
        <div className=" w-96 flex flex-col  my-12 mx-14 justify-center content-center gap-10 dark:bg-slate-950 bg-beige">
          <div className="flex flex-col gap-5   dark:bg-slate-950">
            <div className="flex flex-col ">
              <div className="flex justify-end">
                <button class="flex justify-end " onClick={handleThemeSwitch}>
                  <span class=" dark:inline end:0">
                    <svg viewBox="0 0 24 24" fill="none" class="w-8 h-8">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        class="dark:fill-sky-400/20 fill-sky-400/20"
                      />
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        class="dark:fill-sky-500 fill-slate-700"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        class="dark:fill-sky-500 fill-slate-700"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <img className="rounded-full h-36 w-36 mx-auto " src={Arwin} alt="" />
              </div>
              <p className="font-sans text-2xl font-bold text-center last-of-type:gap-5 mt-6 dark:text-white">
                Arwin Marinta
              </p>
            </div>

            <div className="flex flex-col gap-5 ">
              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://portofolio.arwinmarinta.com/"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={Profile} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">
                      Profile
                    </span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://www.linkedin.com/in/arwin-marinta-95512a256/"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={LinkedIn} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">
                      LinkedIn
                    </span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div
                    className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center"
                    onClick={() => setShowModal2(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://github.com/ArwinMarinta"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={Github} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">Github</span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div
                    className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center"
                    onClick={() => setShowModal3(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://www.instagram.com/wynnn_1/"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={Instagram} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">
                      Instagram
                    </span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div
                    className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center"
                    onClick={() => setShowModal4(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://discordapp.com/users/552284477486006273"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={Discord} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">
                      Discord
                    </span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div
                    className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center"
                    onClick={() => setShowModal5(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://twitter.com/lynx7902"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={Twitter} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">
                      Twitter
                    </span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div
                    className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center"
                    onClick={() => setShowModal6(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://t.me/Wynnn_1"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={Telegram} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">
                      Telegram
                    </span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div
                    className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center"
                    onClick={() => setShowModal7(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row group cursor-pointer justify-between content-center border-2 rounded-xl   w-full  dark:hover:shadow-costum2 shadow-costum dark:hover:bg-slate-800  dark:hover:text-white  hover:translate-x-1 hover:translate-y-1 hover:shadow-costum shadow-abu dark:shadow-slate-600 dark:hover:shadow-slate-300 transition-all  hover:bg-beige  border-abu bg-white">
                <a
                  href="https://open.spotify.com/user/31hjabaul3l36cbsftund7fhr6gq?si=iIYsvCvrRrG4o3werXF2XQ"
                  target="_blank "
                  alt=""
                  className="flex flex-row justify-between items-center w-full  p-2 "
                >
                  <div className="flex flex-row justify-between items-center w-full ">
                    <img className="h-8 w-8 ml-4 inline-block" src={Spotify} alt="" />
                    <span className="font-mono text-xl  text-center mx-auto">
                      Spotify
                    </span>
                  </div>
                </a>

                <div className="flex justify-center items-center p-2">
                  <div
                    className="flex h-8 w-8 mr-4  rounded-full group hover:bg-gray dark:hover:bg-slate-600 justify-center items-center"
                    onClick={() => setShowModal7(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="hidden w-6 h-6 group-hover:block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        className=""
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className= "flex justify-center ">
                <div className="flex flex-row  items-center justify-center  w-24 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="share" className="w-8 h-8">
                      <path d="m21.707 11.293-8-8A1 1 0 0 0 12 4v3.545A11.015 11.015 0 0 0 2 18.5V20a1 1 0 0 0 1.784.62 11.456 11.456 0 0 1 7.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 0 0 1.707.707l8-8a1 1 0 0 0 0-1.414ZM14 17.586V15.5a1 1 0 0 0-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 0 0-7.386 2.948A9.013 9.013 0 0 1 13 9.5a1 1 0 0 0 1-1V6.414L19.586 12Z"
                      className="dark:fill-slate-200">
                      </path>
                    </svg>
                    <div className= "text-center text-lg font-bold text-black dark:text-white">Share</div>
                </div>
              </div> */}
        </div>
      </div>

      {/* <Modal visible={showModal} onClose={(handelOnClose)} >
        <div className=" text-center font-bold p-2 bg-slate-100 rounded-t-xl">SCAN MY QR</div>
        <div className="flex p-16 justify-center text-lg font-bold">Website masih dalam proses pengembangan</div>
      </Modal> */}

      <Modal visible={showModal2} onClose={handelOnClose2}>
        <div className="mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrln} alt=""></img>
      </Modal>

      <Modal visible={showModal3} onClose={handelOnClose3}>
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrgt} alt=""></img>
      </Modal>

      <Modal visible={showModal4} onClose={handelOnClose4}>
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrig} alt=""></img>
      </Modal>

      <Modal visible={showModal5} onClose={handelOnClose5}>
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrdc} alt=""></img>
      </Modal>

      <Modal visible={showModal6} onClose={handelOnClose6}>
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrtwt} alt=""></img>
      </Modal>

      <Modal visible={showModal7} onClose={handelOnClose7}>
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrtlg} alt=""></img>
      </Modal>

      <Modal visible={showModal7} onClose={handelOnClose7}>
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrsptfy} alt=""></img>
      </Modal>

      {/* <Modal visible={showModal8} onClose={handelOnClose8} >
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrig} alt="" ></img>
      </Modal>

      <Modal visible={showModal9} onClose={handelOnClose9} >
        <div className=" mx-2 text-center font-bold p-2 bg-slate-100">SCAN MY QR</div>
        <img className="mx-2 max-w-xs" src={Qrig} alt="" ></img>
      </Modal> */}
    </>
  );
};

export default App;
