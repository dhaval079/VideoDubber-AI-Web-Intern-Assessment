import React from "react";
import { IMG_FEATURE, IMG_FEATURES } from "../utils/constants";
import Section from "./Section";
import Link from "next/link";
import GetStarted from "./GetStarted";

const Middle1 = () => {
  return (
    <div className="grid grid-flow-col  md:py-40 text-neutral-600">
      <div className="my-auto flex flex-col items-center justify-center text-pretty text-center mx-0 md:mx-4 lg:mx-8">
        <h1 className="font-bold text-3xl lg:text-4xl pb-6 lg:pb-12">
        How does it work?
        </h1>
        <div className="grid grid-cols-3 gap-16 mt-8">
            <div className="text-center w-42 h-50 border-2 border-gray-300 bg-slate-100 rounded-lg p-10 ">
            <h1 className="font-bold text-1xl lg:text-2xl pb-6 lg:pb-12">
                <span className="text-white  bg-red-400  rounded-lg p-2.5 m-2">1</span> Upload
            </h1>                <p>Upload your French videos, your URLs, or pull from Youtube, Vimeo, Drive, and more.</p>
            </div>
            <div className="text-center w-42 h-50 border-2 border-gray-300 bg-slate-100 rounded-lg p-10 ">
            <h1 className="font-bold text-1xl lg:text-2xl pb-6 lg:pb-12"><span className="text-white  bg-blue-600 rounded-lg p-2.5 m-2">2</span>Create & Translate.</h1>
                <p>A subtitler will create the original (French) subtitles. A English subtitle translator will translate the subtitles.</p>
            </div>
            <div className="text-center w-42 h-50 border-2 border-gray-300 bg-slate-100 rounded-lg p-10 ">
            <h1 className="font-bold text-1xl lg:text-2xl pb-6 lg:pb-12"><span className="text-white  bg-blue-700 rounded-lg p-2.5 m-2">3</span> Download</h1>
                <p>Your file will appear on your dashboard with the perfect English subtitles.</p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Middle1;
