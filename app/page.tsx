import Image from "next/image";
import Header from "./components/Header";
import Container from "./components/Container";

export default function Home() {
  return (
    <main className=" bg-[#242529] w-full h-[100vh] pt-[3%]">
      <Header />
      <Container/>
    </main>
  );
}
