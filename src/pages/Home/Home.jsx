import React from 'react'
import './Home.css'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Layout>
        <header>
            <div className="title" id='header_title'>Dubai</div>
            <div className="text" id='header_text'>LUXURY CAR RENTAL</div>
        </header>
        <main>
            <section className='section1'>
                <div className="section1_img">
                    <img src="./images/Rectangle 170.svg" alt="" />
                </div>
                <div className="section1_content">
                    <div className="title" id='title'>Most Popular</div>
                    <input type="text" placeholder='Car search' className='section1_content_input'/>
                    <div className="section1_content_swiper">
                        <div className="swiper_slides">
                            <div className="swiper_slide">
                                <div className="boldtext" id='swiper_slide_title'>Audi</div>
                                <div className="text" id='swiper_slide_text'>Huracan EVO Spyder RS6</div>
                            </div>
                            <div className="swiper_slide">
                                <div className="boldtext" id='swiper_slide_title'>Lamborghini</div>
                                <div className="text" id='swiper_slide_text'>Urus</div>
                            </div>
                            <div className="swiper_slide">
                                <div className="boldtext" id='swiper_slide_title'>Lamborghini</div>
                                <div className="text" id='swiper_slide_text'>Huracan EVO Spyder</div>
                            </div>
                            <div className="swiper_slide">
                                <div className="boldtext" id='swiper_slide_title'>Ferrari</div>
                                <div className="text" id='swiper_slide_text'>Roma</div>
                            </div>
                            <div className="swiper_slide">
                                <div className="boldtext" id='swiper_slide_title'>Range Rover</div>
                                <div className="text" id='swiper_slide_text'>Autobiography New 2022</div>
                            </div>
                        </div>
                    </div>
                    <div className="section_btn">
                        <Button w='215px' h='57px' br='10px' b='none' bgc='#33B7BC' clr='#FFFFFF' fse='15px'>VIEW ALL</Button>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="section2_scroll">
                    <Link className='link' id='section2_scroll_link'>Special Offer</Link>
                    <Link className='link' id='section2_scroll_link'>New Car</Link>
                    <Link className='link' id='section2_scroll_link'>Most Popular</Link>
                    <Link className='link' id='section2_scroll_link'>Daily</Link>
                </div>
                <div className="section2_cards">
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 13.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Lamborghini Urus</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 14.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Ferrari Roma</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 177.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Rolls-Royce Ghost</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                    <div className="section2_card">
                        <div className="section2_card_img">
                            <img src="./images/Rectangle 178.svg" alt="" id='section2_card_img'/>
                        </div>
                        <div className="section2_card_info">
                            <div className="boldtext" id='section2_card_info_text'>Porsche 911 Turbo S</div>
                            <Button w='108px' h='54px' br='8px' b='2px solid #33B7BC' bgc='transparent'>RENT</Button>
                        </div>
                    </div>
                </div>
                <div className="section2_btn">
                    <Button w='350px' h='72px' fse='18px' bgc='#33B7BC' b='none' br='10px'>
                        <Link className='btn' to={'/cars'}>VIEW ALL</Link>
                    </Button>
                </div>
            </section>
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
            <section className="section4">
                <div className="title" id='section4_title'>Reviews</div>
                <div className="section4Videos">
                    <img src="./images/Rectangle 153.svg" alt="" className='section4Video'/>
                    <img src="./images/Rectangle 154.svg" alt="" className='section4Video'/>
                    <img src="./images/Rectangle 155.svg" alt="" className='section4Video'/>
                    <img src="./images/Rectangle 156.svg" alt="" className='section4Video'/></div>
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
        </main>
    </Layout>
  )
}

export default Home