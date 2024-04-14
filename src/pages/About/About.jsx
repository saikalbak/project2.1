import React from 'react'
import '../Home/Home.css'
import styles from './About.module.css'
import Layout from '../../components/Layout/Layout'

function About() {
  return (
    <Layout>
        <div className={styles.margin}></div>
        <section className='section3'>
                <div className="boldtext" id='section3_title'>About Us</div>
                <div className="section3_cards">
                    <div className="section3_card">
                        <div className="section3_card_title">
                            <span className='section3_card_title1'>8</span>
                            <span className='title' id='section3_card_title2'>year</span>
                        </div>
                        <div className="text" id='section3_card_text'>
                            We've come a long way from a 2-people <br /> company to winning at Webby's. 
                        </div>
                    </div>
                    <div className="section3_card">
                        <div className="section3_card_title">
                            <span className='section3_card_title1'>72</span>
                            <span className='title' id='section3_card_title2'>cars</span>
                        </div>
                        <div className="text" id='section3_card_text'>
                            We've come a long way from a 2-people <br /> company to winning at Webby's. 
                        </div>
                    </div>
                    <div className="section3_card">
                        <div className="section3_card_title">
                            <span className='section3_card_title1'>190</span>
                            <span className='title' id='section3_card_title2'>people</span>
                        </div>
                        <div className="text" id='section3_card_text'>
                            We've come a long way from a 2-people <br /> company to winning at Webby's. 
                        </div>
                    </div>
                </div>
                <div className="section3_text">
                    <span><img src="./images/photo3.svg" alt="" className='s3_img'/></span>
                    <span className='section3TextAll'>I’m with cars for over 18 years. My auto passion and attention to details will make your experience with us second to none. Guaranteed.</span>
                    <span className='section3TextSpan'><img src="./images/photo4.svg" alt="" className='s3_img'/></span>
                </div>
                <div className="section3_author">
                    <div className="boldtext" id="section3_author_title">Kirill Aliev, MBA</div>
                    <div className="title" id="section3_author_text">CEO Trinity car rental boutique</div>
                </div>
                <div className="section3_img">
                    <img src="./images/kirill.svg" alt="" id='section3_img'/>
                </div>
        </section>
        <section className={styles.section}>
          <div className="title" id={styles.section_title}>Glad to present you Dubai Get Car</div>
          <div className={styles.section_text}>
            <div className="text" id={styles.section_text}>
            A company founded by a team of professional enthusiasts who have set themselves the goal of creating a truly exclusive car rental service that is unique for our country. With us, you do not need to spend time and money on regular repairs, paying high taxes and seasonal storage of your car. You just have to enjoy the indescribable emotions from driving the car of your dreams.
            </div>
            <div className="text" id={styles.section_text}>
            Your safety is our most important concern. The strictest control over the technical and sanitary-hygienic condition of our vehicles is one of the distinctive features and fundamental ideas that guide us. We guarantee that any car from the Dubai Get Car vehicle fleet will leave a bright mark and unforgettable impressions in your soul.
            </div>
          </div>
          <div className="boldtext" id={styles.section_boldtext}>
          We invite you to familiarize yourself with our fleet of vehicles, which are extremely rare in full complete sets of brands: McLaren, Rolls-Royce, Lamborghini, Ferrari, Bentley, Porsche, Mercedes-Benz, etc.
          </div>
        </section>
        <section className="section5">
                <div className="title" id="section4_title">Advantages</div>
                <div className="section5_cards">
                    <div className="section5_card">
                        <img src="./images/image 26.svg" alt="" className='section5_img'/>
                        <div className='boldtext' id="section5_card_text">40+ unique cars for <br /> rent from our fleet</div>
                    </div>
                    <div className="section5_card">
                        <img src="./images/img5678.svg" alt="" className='section5_img'/>
                        <div className='boldtext' id="section5_card_text">Delivery and return <br /> of cars in Dubai 24/7</div>
                    </div>
                    <div className="section5_card">
                        <img src="./images/image 29.svg" alt="" className='section5_img'/>
                        <div className='boldtext' id="section5_card_text">Insurance without a <br /> deductible for each car</div>
                    </div>
                    <div className="section5_card">
                        <img src="./images/image 31.svg" alt="" className='section5_img'/>
                        <div className='boldtext' id="section5_card_text">No video or audio <br /> recording in the car</div>
                    </div>
                    <div className="section5_card">
                        <img src="./images/image 28.svg" alt="" className='section5_img'/>
                        <div className='boldtext' id="section5_card_text">24/7 technical support</div>
                    </div>
                    <div className="section5_card">
                        <img src="./images/image 32.svg" alt="" className='section5_img'/>
                        <div className='boldtext' id="section5_card_text">All models have a premium package</div>
                    </div>
                </div>
                <div className="section5_adaptive_cards">
                    <div className="section5_adaptive_card">
                        <div id='ellipse'></div>
                        <div className="text" id="section5_adaptive_card_text">
                        40+ unique cars for rent from our fleet
                        </div>
                    </div>
                    <div className="section5_adaptive_card">
                        <div id='ellipse'></div>
                        <div className="text" id="section5_adaptive_card_text">
                        Delivery and return of cars in Dubai 24/7
                        </div>
                    </div>
                    <div className="section5_adaptive_card">
                        <div id='ellipse'></div>
                        <div className="text" id="section5_adaptive_card_text">
                        Insurance without a deductible for each car
                        </div>
                    </div>
                    <div className="section5_adaptive_card">
                        <div id='ellipse'></div>
                        <div className="text" id="section5_adaptive_card_text">
                        No video or audio recording in the car
                        </div>
                    </div>
                </div>
        </section>
    </Layout>
  )
}

export default About