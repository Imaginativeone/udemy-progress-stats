"use client";

const MainUI = ({ data }: any) => {
  console.log("data", data);

  const dataArray = data.split("\n");

  console.log("dataArray", dataArray);

  return (
    <>
      <h1>Main UI</h1>
      {dataArray.map((line: any, index: any) => {
        return <div key={index}>{line}</div>;
      })}
    </>
  );
};

export default MainUI;
