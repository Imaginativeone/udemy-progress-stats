import Image from "next/image";

import data from '@/app/data/web-dev-bootcamp'
import MainUI from "./Components/main-ui";

console.log('Hello')

export default function Home() {

  console.log('data', data)

  return (
    <>
      <h1>Home - Hello</h1>
      <MainUI data={data}></MainUI>
    </>
  );
}
