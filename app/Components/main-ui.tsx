"use client";

import { Tree } from 'react-arborist'

import { convertText2Objects } from '@/app/data-functions/data-functions'

convertText2Objects()

// const data = [
//     { id: "1", name: "Unread", children: [] },
//     { id: "2", name: "Threads" },
//     {
//       id: "3",
//       name: "Chat Rooms",
//       children: [
//         { id: "c1", name: "General" },
//         { id: "c2", name: "Random" },
//         { id: "c3", name: "Open Source Projects" },
//       ],
//     },
//     {
//       id: "4",
//       name: "Direct Messages",
//       children: [
//         { id: "d1", name: "Alice" },
//         { id: "d2", name: "Bob" },
//         { id: "d3", name: "Charlie" },
//       ],
//     },
//   ];

const MainUI = () => {
  return (
    <>
      <h1>Main UI</h1>
      {/* <Tree initialData={data} initialOpenState={false}  width={1000}/> */}
      {/* {dataArray.map((line: any, index: any) => {
        return <div key={index}>{line}</div>;
      })} */}
    </>
  );
};

export default MainUI;
