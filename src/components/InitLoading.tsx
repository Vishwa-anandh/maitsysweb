import React from "react";
const InitLoading: React.FC = () => {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-center h-screen bg-white w-full `}
    >
      <img
        src={"/maitsysWhite.png"}
        alt={`maitsys`}
        title={`maitsys`}
        width={"80px"}
        height={"100px"}
      ></img>
      <h2 className={`text-lg font-bold text-black `}>Loading...</h2>
    </div>
  );
};

export default InitLoading;
