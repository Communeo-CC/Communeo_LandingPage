"use client";
import { useEffect } from "react";

import fluidCursor from "../../fluidCursor";
import React from "react";

const FluidCursor = () => {

  useEffect(() => {
    fluidCursor();
  }, [])


  return (
    <div className='fixed top-0 left-0 z-2'>
      <canvas id="fluid" className='w-screen h-screen' />
    </div>
  );
};
export default FluidCursor;
