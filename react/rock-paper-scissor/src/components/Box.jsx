import React from "react";

const Box = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col items-center gap-4 py-6 bg-yellow-100">
      <h1 className="text-3xl">{props.title}</h1>
      <img
        className="w-[350px] h-[330px]"
        src={props.item && props.item.img}
      ></img>
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
