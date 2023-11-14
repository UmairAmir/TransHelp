import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Services.module.css";
import Dropdown from "../components/dropdown.js";
import Card from "../components/servicesCard.js";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className={styles.dropdown}>
        <h1>Take Charge of Your Sexual Health Today</h1>
        <p>Don't wait any longer—book a consultation with a trusted sexual health expert through TransHelp. Our secure and confidential platform ensures that your needs are met with the utmost care and professionalism.</p>
        <Dropdown />
      </section>

      <section className={styles.allCards}>
        <div className={styles.first2}>
          <Card 
              title="Expert Sexual Health Providers" 
              content="TransHelp partners with skilled and qualified doctors who specialize in sexual health. Our providers have extensive experience working with diverse communities and are committed to delivering personalized care tailored to your individual needs. Rest assured that you will receive expert guidance and support throughout your journey."
              icon="doctor"
          />
          <Card 
              title="Confidential and Judgement-Free Environment" 
              content="Your privacy and comfort are of utmost importance to us. At TransHelp, we provide a safe and confidential environment where you can discuss your sexual health concerns openly. Our sexual health experts are dedicated to creating a non-judgmental space where you can ask questions, seek guidance, and receive the care you deserve."
              icon="shield"
          />
        </div>

        <div className={styles.second2}>
          <Card 
              title="Comprehensive Sexual Health Services" 
              content="From routine check-ups and preventive care to addressing specific sexual health concerns, our sexual health experts offer a wide range of services. Whether you require advice on contraception, STI testing and treatment, sexual dysfunction, or reproductive health, our professionals are equipped with the knowledge and resources to assist you."
              icon="puzzle"
          />
          <Card 
              title="Easy Online Booking Process" 
              content="Booking a consultation with a sexual health expert has never been easier. Our user-friendly platform ensures a hassle-free experience, allowing you to secure your consultation with just a few clicks."
              icon="dot"
          />
        </div>

        <div className={styles.third2}>
          <Card 
              title="Empowering Care for All" 
              content="TransHelp is dedicated to empowering individuals from marginalized communities by delivering inclusive care and support. We understand the unique needs and concerns you may face, and our sexual health experts are here to provide guidance, resources, and personalized treatment options that respect your identity and experiences."
              icon="heart"
          />
        </div>
      </section>


      <Footer />
    </>
  )
};

export default Services;