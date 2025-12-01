import React from "react";

// 1. 결과에 따라 테두리 색상 클래스를 반환하는 함수
const getBorderColor = (result) => {
  if (result === "승리") return "border-green-500"
  if (result === "패배") return "border-red-500"
  if (result === "무승부") return "border-gray-400"
  return "border-black"
}

const Box = (props) => {
  const { title, item, result } = props;
  console.log(props);

  // 2. 동적 클래스 계산
  const dynamicBorderClass = getBorderColor(result)

  // 3. 정적 클래스와 동적 클래스 결합
  const boxClasses = `flex flex-col items-center gap-4 py-6 bg-yellow-100 shadow-lg border-4 ${dynamicBorderClass}`

  return (
    <div className={boxClasses}>
      <h1 className="text-3xl">{props.title}</h1>
      <img
        className="w-[330px] h-[300px]"
        src={props.item && props.item.img}
      ></img>
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
