import Navbar from "../components/navbar";
import ContactForm from "../components/contactForm";
import LocationMap from "../components/locationMap";
import utilStyles from "../styles/utils.module.css"
import HeaderItems from "../components/headerItems";
import Head from "next/head";


export default function Contact(){
  return(
  <div>
    <HeaderItems />
    <Head>
      <title>Contact Me</title>
    </Head>
    <Navbar />
    <div className={utilStyles.contactPage}>
      <ContactForm />
      <LocationMap />
    </div>
  </div>)
}