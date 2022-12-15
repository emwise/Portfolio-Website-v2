import Link from "next/link"
import Navbar from "../components/navbar"
import utilStyles from "../styles/utils.module.css"
import Image from 'next/image';
import Head from "next/head";
import HeaderItems from "../components/headerItems";

export default function About(){
  return (<div>
    <HeaderItems />
    <Navbar />
    <Head>
      <title>My Programming Journey</title>
    </Head>
    <div className={utilStyles.mainContainerFlex}>
      <div className={utilStyles.textContainer}>
        <h1 >My Programming Journey</h1>
        <p>My Introduction to programming began with Python and Java at <a href="https://www.macalester.edu/about/" target="_blank">Macalester College</a> in Saint Paul, MN. I took these two courses and while I loved computer science, I was a senior and had plans to travel after graduating.</p>
        <p>I rennovated a cargo van and lived out of it while traveling around the United States for the better part of four years! During these travels I spent time exploring Java using <a href="https://java-programming.mooc.fi/" target="_blank">University of Helsinki's MOOC</a>.</p>
        <p>Eventually, my travels took me to Gainesville, FL where I spent almost two years investigating patient blood samples for blood group antibodies at a reference laboratory. In my free time, I dove deeper into OOP while learning about data structures and algorithms using Coursera's <a href="https://www.coursera.org/specializations/cs-fundamentals" target="_blank"> Accelerated Computer Science Fundementals Specialization</a>.</p>
        <p>After, wanting to use my skills to create something more tangible, I began my web development journey with Coursera's <a href="https://www.coursera.org/learn/html-css-javascript-for-web-developers" target="_blank"> HTML, CSS, and Javascript for Web Developers</a>. Through the course I built my first website and ignited my passion for web development.</p>
        <p>Since then I've completed courses on JavaScript, React, Node.js, and Express.js from <a href="https://ilovecoding.org/" target="_blank">iLoveCoding.org</a>, and built <Link href={"/"}><a>many projects</a></Link> along the way.</p>
        <p>Now, I'am commited to becomming a professional developer and am learning about AWS! Learn more about my journey and my thoughts through <Link href={"/blog"}><a>my blog</a></Link>.</p>
      </div>
      <div className={utilStyles.aboutMeImageContainer}>
        <div className={utilStyles.aboutMeImage}>
          <Image
            priority
            src="/images/vanBuild.png"
            className={utilStyles.imageRadius}
            height={250}
            width={250}
            alt="In process of remodeling the van"
          />
          <p className={utilStyles.caption}>In the process of remodeling the van</p>
        </div>
        <div className={utilStyles.aboutMeImage}>
          <Image
            priority
            src="/images/vanLocationPhoto.png"
            className={utilStyles.imageRadius}
            height={250}
            width={250}
            alt="Parked at Apalachicola, FL with a view of the ocean"
          />
          <p className={utilStyles.caption}>Parked with a view of the ocean</p>
        </div>
      </div>
    </div>
  </div>)
}