"use client";

import { Tree } from 'react-arborist'

const data = [
    { id: "1", name: "Unread" },
    { id: "2", name: "Threads" },
    {
      id: "3",
      name: "Chat Rooms",
      children: [
        { id: "c1", name: "General" },
        { id: "c2", name: "Random" },
        { id: "c3", name: "Open Source Projects" },
      ],
    },
    {
      id: "4",
      name: "Direct Messages",
      children: [
        { id: "d1", name: "Alice" },
        { id: "d2", name: "Bob" },
        { id: "d3", name: "Charlie" },
      ],
    },
  ];

const MainUI = () => {

//   console.log("data", data);

//   const dataArray = data.split("\n");

//   console.log("dataArray", dataArray);

  return (
    <>
      <h1>Main UI</h1>
      <Tree initialData={data} />
      {/* {dataArray.map((line: any, index: any) => {
        return <div key={index}>{line}</div>;
      })} */}
    </>
  );
};

export default MainUI;
