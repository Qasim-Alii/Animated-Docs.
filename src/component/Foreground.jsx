import React, { useRef } from "react";
import Cards from "./Cards";

function Foreground(params) {
  const ref = useRef(null);

  const data = [
    {
      description:
        "Lorem ipsum dolors site amet contr adipisicing dolors site.",
      filesize: "0.7Mb",
      close: false,
      tag: { isOpen: true, tagTitel: "Download Now.", tagColor: "green" },
    },
    {
      description:
        "Lorem ipsum dolors site amet contr adipisicing dolors site.",
      filesize: "0.7Mb",
      close: false,
      tag: { isOpen: true, tagTitel: "Download Now.", tagColor: "green" },
    },
    {
      description:
        "Lorem ipsum dolors site amet contr adipisicing dolors site.",
      filesize: "0.7Mb",
      close: false,
      tag: { isOpen: true, tagTitel: "Upload", tagColor: "blue" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
