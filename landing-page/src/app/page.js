import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.fold}>
        <img className={styles.backgroundImg} src="./images/backgroundImg.png"></img>
        <img className={styles.backgroundImg} src="./images/backgroundImg.png"></img>
        <h1 className={styles.headline}>Personalised Teaching with<br></br><span className={styles.headlineHighlight}>Every Student's Insights</span></h1>
        <h2 className={styles.subheadline}>Empower your teaching with detailed performance analytics and personalized feedback</h2>
        <div className={styles.buttonRow}>
          <Link href="mailto:silastaysl@gmail.com" className={`${styles.CTAButton} button`}>Try it out for Free</Link>
          <Link href="mailto:silastaysl@gmail.com" className={`${styles.DemoButton} button`}>
            <svg className={styles.demoIcon} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 23h-24v-21h24v21zm-20-1v-4h-3v4h3zm15 0v-19h-14v19h14zm4 0v-4h-3v4h3zm-6-9.5l-9 5v-10l9 5zm3 .5v4h3v-4h-3zm-16 4v-4h-3v4h3zm5-1.2l5.941-3.3-5.941-3.3v6.6zm11-7.8v4h3v-4h-3zm-16 4v-4h-3v4h3zm16-9v4h3v-4h-3zm-16 4v-4h-3v4h3z"/></svg>
            Watch a Demo
          </Link>
        </div>
      </div>
      <div className={styles.mockupImgContainer}>
        <img className={styles.mockupImg} src="/images/mockup.png"></img>
      </div>
      <h2 className={styles.separatorHeadline} id="features">A New Way of Teaching, Unlocking Every Student’s Potential</h2>
      <div className={styles.featuresContainer}>
        <div className={styles.featureContainer}>
          <div className={styles.featureLeftContainer}>
            <img src="/images/featureImg1.png" alt="" className={styles.featureImg} />
          </div>
          <div className={styles.featureRightContainer}>
            <div className={styles.featureTextContainer}>
              <h3 className={styles.featureHeadline}>
                  <svg className={styles.featureIcon} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 17.75c0-.414-.336-.75-.75-.75h-12.5c-.414 0-.75.336-.75.75s.336.75.75.75h12.5c.414 0 .75-.336.75-.75zm-19.806-.537 1.249 1.114c.13.116.293.173.456.173.184 0 .369-.075.504-.222l2.116-2.313c.119-.131.178-.296.178-.459 0-.375-.302-.682-.683-.682-.185 0-.369.074-.504.221l-1.661 1.815-.746-.665c-.131-.116-.292-.173-.454-.173-.379 0-.683.307-.683.682 0 .188.076.374.228.509zm19.806-3.463c0-.414-.336-.75-.75-.75h-12.5c-.414 0-.75.336-.75.75s.336.75.75.75h12.5c.414 0 .75-.336.75-.75zm-19.806-1.449 1.249 1.114c.13.116.293.173.456.173.184 0 .369-.074.504-.222l2.116-2.313c.119-.131.178-.295.178-.459 0-.375-.302-.682-.683-.682-.185 0-.369.074-.504.221l-1.661 1.815-.746-.665c-.131-.116-.292-.173-.454-.173-.379 0-.683.307-.683.683 0 .187.076.374.228.508zm19.806-2.551c0-.414-.336-.75-.75-.75h-12.5c-.414 0-.75.336-.75.75s.336.75.75.75h12.5c.414 0 .75-.336.75-.75zm-19.806-2.361 1.249 1.114c.13.116.293.173.456.173.184 0 .369-.074.504-.221l2.116-2.313c.119-.131.178-.296.178-.46 0-.374-.302-.682-.683-.682-.185 0-.369.074-.504.221l-1.661 1.815-.746-.664c-.131-.116-.292-.173-.454-.173-.379 0-.683.306-.683.682 0 .187.076.374.228.509zm19.806-1.639c0-.414-.336-.75-.75-.75h-12.5c-.414 0-.75.336-.75.75s.336.75.75.75h12.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></svg>
                  Automate Marking Of Your Student's Work
              </h3>
              <h5 className={styles.featureSubheadline}>Save time with our AI-powered system that automatically marks student work, allowing you to focus on impactful teaching and student engagement</h5>
              <Link href="/#form" className={`${styles.featureButton} button`}>Learn more</Link>
            </div>
          </div>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.featureLeftContainer}>
            <div className={styles.featureTextContainer}>
              <h3 className={styles.featureHeadline}>
                <svg className={styles.featureIcon} fill="black" width="24" height="24" viewBox="0 0 24 24"><path d="M13.077 6.099c.336-.137.683-.156 1.001-.081.681.162 1.232.748 1.278 1.519-.226-.276-.524-.456-.85-.533-.328-.078-.686-.051-1.024.087-.674.275-1.093.915-1.027 1.629-.743-.852-.432-2.19.622-2.621zm.521 9.834c.658.41 2.729 1.548 4.845 4.067 1.912-.781 3.742-1.528 5.558-2.268-.823-2.021-.198-3.151-1.018-5.159-.56-1.37-1.034-1.502-1.943-1.549l.287.708c.175.426-.47.686-.642.262l-.258-.63c-.209-.515-.881-.383-1.469-.387l.35.857c.173.424-.469.688-.643.262l-.303-.744c-.215-.526-.915-.374-1.508-.364l.37.908c.175.428-.471.686-.643.263l-1.503-3.677c-.467-1.144-2.238-.466-1.756.717l2.217 5.434c-.324-.215-.922-.482-1.33-.578-1.263-.298-2.075.969-.611 1.878zm-5.858-5.311l-2.74 2.669.705.709 2.033-1.965 1.496 1.497 2.656-2.672-.422-1-2.228 2.264-1.5-1.502zm-4.658 13.378h2.628l3.42-4h-2.633l-3.415 4zm9.773-4l3.42 4h2.628l-3.415-4h-2.633zm-2.855 4h2v-4h-2v4zm3.141-6c-.902-.564-1.617-.94-2.076-2h-8.065v-13h16v6h2v-6h1v-3h-22v3h1v15h12.141z"/></svg>
                In-Depth Insights that Actually Matter
              </h3>
              <h5 className={styles.featureSubheadline}>Understand your student's strengths and weaknesses, track progress, and tailor your teaching strategies accordingly with detailed analytics</h5>
              <Link href="/#form" className={`${styles.featureButton} button`}>Learn more</Link>
            </div>
          </div>
          <div className={styles.featureRightContainer}>
            <img src="/images/featureImg2.png" alt="" className={styles.featureImg} />
          </div>
        </div>

        <div className={styles.featureContainer}>
          <div className={styles.featureLeftContainer}>
            <img src="/images/featureImg3.png" alt="" className={styles.featureImg} />
          </div>
          <div className={styles.featureRightContainer}>
            <div className={styles.featureTextContainer}>
              <h3 className={styles.featureHeadline}>
                <svg className={styles.featureIcon} fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.622 3c-1.913 0-2.558 1.382-5.623 1.382-3.009 0-3.746-1.382-5.623-1.382-5.209 0-6.376 10.375-6.376 14.348 0 2.145.817 3.652 2.469 3.652 3.458 0 2.926-5 6.915-5h5.23c3.989 0 3.457 5 6.915 5 1.652 0 2.471-1.506 2.471-3.651 0-3.973-1.169-14.349-6.378-14.349zm-10.622 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm10-6c.552 0 1 .447 1 1 0 .553-.448 1-1 1s-1-.447-1-1c0-.553.448-1 1-1zm-2 4c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2 2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm2-2c-.552 0-1-.447-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .553-.448 1-1 1zm-10.25-1c0 .965-.785 1.75-1.75 1.75s-1.75-.785-1.75-1.75.785-1.75 1.75-1.75 1.75.785 1.75 1.75z"/></svg>
                Keep Students Engaged with Gamification
              </h3>
              <h5 className={styles.featureSubheadline}>Make learning fun and engaging with gamified elements - reward progress, create healthy competition, and keep students invested in their educational journey</h5>
              <Link href="/#form" className={`${styles.featureButton} button`}>Learn more</Link>
            </div>
          </div>
        </div>

        <h2 className={styles.sectionHeadline} id="pricings">Plans that fit your school</h2>
        <h3 className={styles.sectionSubheadline}>Transparent, Simple and Flexible plans for any institution</h3>
        <div className={styles.pricingsContainer}>
          <div className={styles.pricingContainer}>
            <h4 className={styles.priceHeader}>Personal</h4>
            <h5 className={styles.priceSubheader}>For Individuals and Small Classes</h5>
            <p className={styles.priceNumber}>$19 /mth</p>
            <Link className={`${styles.priceButton} button`} href="/#form">Free Trial Now</Link>
            <div className={styles.priceFeaturesList}>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Class sizes of up to 30 Students
              </p>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                AI-Assisted Features
              </p>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Long-term Gamification
              </p>
            </div>
          </div>

          <div className={styles.pricingContainer}>
            <h4 className={styles.priceHeader}>Team</h4>
            <h5 className={styles.priceSubheader}>For Departments and Teams</h5>
            <p className={styles.priceNumber}>$39 /mth</p>
            <Link className={`${styles.priceButton} button`} href="/#form">Free Trial Now</Link>
            <div className={styles.priceFeaturesList}>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Class sizes of up to 100 Students
              </p>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Up to 20 Teachers
              </p>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Organisational Features
              </p>
            </div>
          </div>

          <div className={styles.pricingContainer}>
            <h4 className={styles.priceHeader}>Personal</h4>
            <h5 className={styles.priceSubheader}>For Schools and Institutions</h5>
            <p className={styles.priceNumber}>Custom</p>
            <Link className={`${styles.priceButton} button`} href="/#form">Free Trial Now</Link>
            <div className={styles.priceFeaturesList}>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Unlimited Class Sizes
              </p>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Unlimited Teachers
              </p>
              <p>
                <svg className={styles.priceFeatureTick} xmlns="http://www.w3.org/2000/svg" fill="#77e145" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                Custom Analytics and Support
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formContainer} id="form">
          <h2 className={`${styles.sectionHeadline} ${styles.formHeadline}`}>Unlocking Every Student's Potential</h2>
          <h3 className={`${styles.sectionSubheadline} ${styles.formSubheadline}`}>Sign up to revolutionise the way you engage your students</h3>
          <div className={styles.buttonRow}>
            <Link className={`${styles.CTAButton} button`} href="mailto:silastaysl@gmail.com">Get started for Free</Link>
            <Link className={`${styles.DemoButton} button`} href="mailto:silastaysl@gmail.com">
              <svg className={styles.demoIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/></svg>
              Contact us
            </Link>  
          </div>  
        </div>

      </div>
    </main>
  );
}
