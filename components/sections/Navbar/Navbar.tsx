import React from "react";
import { motion } from "framer-motion";


import { navVariants } from "@/utils/motion";
import { NavLink } from "./NavLink";
import { MainButton } from "@/components/Buttons";

import { Close, GPT, Hamburger, Github, Linkedin, Gmail } from "@/public/assets/svg";

import useMediaQuery from "@/hooks/useMediaQuery";

import { Pages } from "@/types";

import { SmallNavLink } from "./SmallNavLink";



export const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1024px)");
  const [menu, setMenu] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`flex  flex-row justify-between items-center py-10 w-11/12 mx-auto lg:max-w-[1920px] h-50`}
      >
        <li className="flex gap-8 items-center">
          <div className="w-16">
            <GPT />
          </div>
          {isAboveMediumScreens && (
            <div className="flex gap-5 leading-[25px] text-[16px]">
              <NavLink to={Pages.home}>Home</NavLink>
              <NavLink to={Pages.about}>What is GPT?</NavLink>
              <NavLink to={Pages.start}>Get Started</NavLink>
              <NavLink to={Pages.blog}>Blog</NavLink>
              <NavLink to={Pages.openAi} >Open AI</NavLink>
            </div>
          )}
        </li>
        {isAboveMediumScreens ? (
          <div className="flex gap-8 items-center">
            <NavLink to="signIn">Sign In</NavLink>
            <MainButton type="normal">Sign Up</MainButton>
          </div>
        ) : (
          <div
            onClick={() => {
              setMenu(true);
            }}
          >
            <Hamburger />
          </div>
        )}
      </motion.nav>
      {!isAboveMediumScreens && (
        <div
          className={`fixed inset-0 bg-[#0d1829] z-50 w-full sm:px-10 px-4 py-10 transform transition-transform duration-300 
          flex flex-col justify-between gap-20
          ${menu ? "translate-y-[0]" : "-translate-y-[100rem]"}`}>
          
          <div className="self-end" onClick={()=>{setMenu(false)}}>
            <Close/>
          </div>
          <div className="flex gap-4 flex-col">
            <SmallNavLink setMenu={setMenu} to={Pages.home}>Home</SmallNavLink>
            <SmallNavLink setMenu={setMenu} to={Pages.about}>What is GPT?</SmallNavLink>
            <SmallNavLink setMenu={setMenu} to={Pages.start}>Get Started</SmallNavLink>
            <SmallNavLink setMenu={setMenu} to={Pages.blog}>Blog</SmallNavLink>
            <SmallNavLink setMenu={setMenu} to={Pages.home}>Open Ai</SmallNavLink>
          </div>
          <div className="min-h-[12rem] shadow-white
           border-2 border-white border-solid rounded-lg py-4">
            <div className="xs:text-[30px] text-[20px] pb-4 border-b-2 border-b-white border-solid text-white uppercase font-extrabold text-center">
              Made by Saba Khubashvili
            </div>
            <div className="flex gap-4 justify-center mt-4 flex-wrap">
              <a href="mailto:khubashvili.saba12@gmail.com" target='_blank' className="">
                <Gmail/>
              </a>
              <a href="https://www.linkedin.com/in/საბა-ხუბაშვილი-b08910223/" target='_blank' className="">
                <Linkedin/>
              </a>
              <a href="https://github.com/SabaKhubashvili" target='_blank' className="">
                <Github/>
              </a>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
