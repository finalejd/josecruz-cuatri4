import React from "react";
import {Navbar,MobileNav,Typography,Button,IconButton} from "@material-tailwind/react";
import logo from '../assets/image/nfl.png';


export default function header() {

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
        <img src={logo} alt="" width="40" height="40"/>
        </Typography>
      </div>
    </Navbar>
  );
}

