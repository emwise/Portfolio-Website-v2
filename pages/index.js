import Navbar from "../components/navbar"
import Profile from "../components/profile"
import Projects from "../components/projects"
import { getAllProjectData } from "../lib/projects";
import Head from "next/head";
import HeaderItems from "../components/headerItems";

export async function getStaticProps() {
  const projects = await getAllProjectData();
  return {
    props: {
      projects,
    },
  };
}

export default function Home( projetcs ){
  return (
    <div>
      <HeaderItems />
      <Navbar />
      <Head>
        <title>Emma Wise - Software Engineer</title>
      </Head>
      <Profile />
      <Projects projects={projetcs}/>
    </div>
  )
}