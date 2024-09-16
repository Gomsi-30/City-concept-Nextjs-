"use client"
import React from 'react'
import {FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

type a = {
  check?:boolean;
  articleTitle? : string;
}
const Share = ({check=true,articleTitle}:a) => {
      // articleTitle = articleTitle.replace(/[^A-Za-z0-9]+/g, "-");
      // sectionName = sectionName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();
  return (
    <div className='hidden lg:flex flex-row gap-2 items-center text-xl'>
      <TwitterShareButton url={`https://cityconcept.netlify.app/${articleTitle}`}>
            <FaSquareXTwitter  className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </TwitterShareButton>
      <LinkedinShareButton url={`https://cityconcept.netlify.app/${articleTitle}`}>
            <FaLinkedin  className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </LinkedinShareButton>
      <InstapaperShareButton url={`https://cityconcept.netlify.app/${articleTitle}`}>
            <FaSquareInstagram  className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </InstapaperShareButton>
      <FacebookShareButton url={`https://cityconcept.netlify.app/${articleTitle}`}>
            <FaSquareFacebook  className={`text-gray-500 transition-all ease-in-out ${check ? 'hover:text-black' : 'hover:text-white'} `}/>
      </FacebookShareButton>
    </div>
  )
}

export default Share;