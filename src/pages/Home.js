import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css"
import hero from "../assets/hero.jpg"
import Card from "../components/card.js"
import Card2 from "../components/card2.js"
import Footer from "../components/footer.js"
import Carousel from "../components/Carousel.js"
import diversity from "../assets/diversity.png"
import partner1 from "../assets/partner1.png"


const Home = () => {
  const currentYear = new Date().getFullYear();

  const slides = [
    {
      heading: 'This industry',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.pixabay.com/photo/2023/11/04/07/57/owl-8364426_1280.jpg',
    },
    {
      heading: 'That industry',
      paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://cdn.pixabay.com/photo/2023/10/26/18/18/coneflower-8343278_640.jpg',
    },
    // Add more slides as needed
  ];

  return (
    <>
      <Navbar />
      
      <div className={styles.heroSection}>
        <div className={styles.heroSectionContainer}>
          <div className={`${styles.heroSectionContent} ${styles.heroItem}`}>
            <h1 className={styles.heroSectionContenth1}>TransHelp: Your Bridge to Inclusive Health and Support</h1>
            <p>At TransHelp, we believe that everyone deserves access to compassionate, inclusive, and specialized healthcare, mental health support, and legal assistance</p>        
            <div>
              <button className={styles.heroSectionContentButton}>FIND NOW</button>
            </div>
          </div>
          <div className={`${styles.heroSectionImage} ${styles.heroItem}`}>
            <img src={diversity} alt="mainImage" className={styles.heroSectionImageImg}/>
          </div>
        </div>
      </div>


      {/* <section className={styles.whyUs}>
        <div className={styles.allCards}>
            <div className={styles.first}>
                <Card
                    heading="Inclusive Care for Marginalized Communities"
                    paragraph="We understand the unique challenges and needs of transgender individuals, women, and those living with HIV/AIDS/STIs. Our team of experienced and culturally sensitive healthcare providers, mental health professionals, and legal experts are here to support you on your journey to wellness."
                    />
                <Card
                    heading="Convenient Online Consultations"
                    paragraph="Say goodbye to long wait times and travel hassles. TransHelp offers secure and user-friendly online consultations, allowing you to access the care you need from the comfort and privacy of your own home. Our telehealth platform is accessible through computers, smartphones, and tablets, making healthcare, mental health support, and legal guidance just a few clicks away."
                    />
                <Card
                    heading="Expert Doctors, Psychologists, and Lawyers"
                    paragraph="Our network of doctors specializing in sexual health, psychologists trained in mental health support, and lawyers well-versed in legal matters ensure that you receive professional, personalized, and evidence-based care. We prioritize the highest standards of expertise and professionalism to provide you with the best possible support."
                    />
            </div>
            <div className={styles.last}>
                <Card
                    heading="Confidentiality and Privacy"
                    paragraph="Your privacy is of utmost importance to us. TransHelp employs stringent security measures to protect your personal information and ensure all consultations are confidential. Our platform utilizes encrypted communication channels, safeguarding your privacy throughout the entire process."
                    />
                <Card
                    heading="Empowering Resources and Education"
                    paragraph="TransHelp is more than just a telehealth app. We are dedicated to empowering our users with knowledge and resources. We offer a wealth of educational materials, articles, and frequently asked questions, providing you with the information you need to make informed decisions about your sexual health, mental well-being, and legal matters."
                    />
                <Card
                    heading="Multilingual Support"
                    paragraph="We value diversity and understand that language and cultural barriers can affect access to care. That's why TransHelp provides culturally competent support and offers multilingual services to cater to our diverse community. We strive to ensure that language is never a barrier to receiving the care you deserve."
                    />
            </div>
        </div>
      </section> */}
      <section>
        <div className={styles.cards}>
          <div className={styles.first2}>
            <Card2 heading="Inclusive Care for Marginalized Communities" para="We understand the unique challenges and needs of transgender individuals, women, and those living with HIV/AIDS/STIs. Our team of experienced and culturally sensitive healthcare providers, mental health professionals, and legal experts are here to support you on your journey to wellness." icon="globe"/>
            <Card2 heading="Convenient Online Consultations" para="Say goodbye to long wait times and travel hassles. TransHelp offers secure and user-friendly online consultations, allowing you to access the care you need from the comfort and privacy of your own home. Our telehealth platform is accessible through computers, smartphones, and tablets, making healthcare, mental health support, and legal guidance just a few clicks away." icon="dot"/>
          </div>
          <div className={styles.second2}>
            <Card2 heading="Expert Doctors, Psychologists, and Lawyers" para="We understand the unique challenges and needs of transgender individuals, women, and those living with HIV/AIDS/STIs. Our team of experienced and culturally sensitive healthcare providers, mental health professionals, and legal experts are here to support you on your journey to wellness." icon="doctor"/>
            <Card2 heading="Confidentiality and Privacy" para="Your privacy is of utmost importance to us. TransHelp employs stringent security measures to protect your personal information and ensure all consultations are confidential. Our platform utilizes encrypted communication channels, safeguarding your privacy throughout the entire process." icon="shield"/>
          </div>
          <div className={styles.third2}>
            <Card2 heading="Empowering Resources and Education" para="TransHelp is more than just a telehealth app. We are dedicated to empowering our users with knowledge and resources. We offer a wealth of educational materials, articles, and frequently asked questions, providing you with the information you need to make informed decisions about your sexual health, mental well-being, and legal matters." icon="book"/>
            <Card2 heading="Multilingual Support" para="We value diversity and understand that language and cultural barriers can affect access to care. That's why TransHelp provides culturally competent support and offers multilingual services to cater to our diverse community. We strive to ensure that language is never a barrier to receiving the care you deserve." icon="puzzle"/>
          </div>
        </div>
      </section>

      <section className={styles.keyFeatures}>
        <div>
          <h3>Health, Legal, and Community at Your Fingertips:</h3>
          <h1 className={styles.keyFeaturesh1}>TransHelp - Your All-in-One Solution</h1>
          <ul>
            <li className={styles.keyFeaturesli}>&rarr; Sexual Health Consultations</li>
            <li className={styles.keyFeaturesli}>&rarr; Mental Health Support</li>
            <li className={styles.keyFeaturesli}>&rarr; Legal Assistance</li>
            <li className={styles.keyFeaturesli}>&rarr; AI Chatbot</li>
            <li className={styles.keyFeaturesli}>&rarr; SOS Services (Health & Safety)</li>
            <li className={styles.keyFeaturesli}>&rarr; Awareness Resources</li>
            <li className={styles.keyFeaturesli}>&rarr; Secure and Confidential</li>
            <li className={styles.keyFeaturesli}>&rarr; Appointment Reminders and Notifications</li>
            <li className={styles.keyFeaturesli}>&rarr; Community Support and Engagement</li>
            <li className={styles.keyFeaturesli}>&rarr; Multilingual Support</li>
            <li className={styles.keyFeaturesli}>&rarr; 24/7 Access</li>
          </ul>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <h1>Our Trusted Partners</h1>
        <div className={styles.partnerLogos}>
            <div className={styles.partnerLogo}><img src={partner1} className={styles.partnerLogoImg} alt="Partner 1"/></div>
            <div className={styles.partnerLogo}><img src={partner1} className={styles.partnerLogoImg} alt="Partner 2"/></div>
            <div className={styles.partnerLogo}><img src={partner1} className={styles.partnerLogoImg} alt="Partner 3"/></div>
        </div>
      </section>

      <section className={styles.impactCreated}>
      <div className={styles.wrapper}>
        <div className={styles.impactContent}>
          <h1>Lives Saved</h1>
          <h2>1234</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.impactContent}>
          <h1>Lives Saved</h1>
          <h2>1234</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.impactContent}>
          <h1>Lives Saved</h1>
          <h2>1234</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.impactContent}>
          <h1>Lives Saved</h1>
          <h2>1234</h2>
        </div>
      </div>
    </section>
    
    <section className={styles.meetLeaders}>
      <h1 className={styles.meetLeadersh1}>Meet Our Leaders</h1>
      <Carousel slides={slides}/>

    </section>


    <Footer />
    <h3 style={{textAlign: 'center', color: 'white', backgroundColor: '#FF4387'}}>TransHelp &copy; {currentYear}</h3>
    </>
  )
};

export default Home;