import Navbar from "../components/navbar";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css'
import HeaderItems from "../components/headerItems";
import Head from "next/head";

//this will statically render the html and add the post data at build time.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Blog({ allPostsData }){

  return(
    <div>
      <HeaderItems />
      <Head>
        <title>Emma Wise - Blog Archives</title>
      </Head>
      <Navbar/>
      <section className={utilStyles.mainContainer}>
        <h1>Archived Posts</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small >
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </div>
  )
}