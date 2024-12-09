import React, { useState } from "react";
import Nav from "./Nav";
import Article from "./Article";

const Tabs = () => {
  const [actualPage, SetActualPage] = useState("Tommy");
  return (
    <div className="w-[80vh] flex   p-2 m-auto">
      <div className="w-1/4 flex ">
     
        <hr className="  w-1 rounded-full  bg-black h-full" />
        <div className="self-center m-auto">Nav</div>
      </div>
      <div className="w-3/4 ">Article</div>
    </div>
  );
};

export default Tabs;
