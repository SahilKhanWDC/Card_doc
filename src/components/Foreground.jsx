import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

    const ref = useRef(null)

  const data = [
    {
      desc: "This data is shown because there is some consitional rendering to it.",
      filesize: "1.4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This data is shown because there is some consitional rendering to it.",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Uplaod Now", tagColor: "blue" },
    },
    {
      desc: "This data is shown because there is some consitional rendering to it.",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="top-0 left-0 fixed z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
