import Image from "next/image";
import Header from "./component/Header";
import BlogTitle from "./component/BlogTitle";
import BTMenu from "./component/BTMenu";
import İmgBetween from "./component/İmgBetween";
import Container from "./component/Container";

export default function Home() {
  return (
  <main >

<title>Blog Web</title>
     <Header></Header>
     <BlogTitle></BlogTitle>
     <BTMenu></BTMenu>
     <İmgBetween></İmgBetween>
     <Container></Container>
  </main>
  );
}
