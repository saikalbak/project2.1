import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Footer.module.css';
import Map from '../Map/Map';
import Button from '../UI/Button/Button'

function Footer() {
  return (
    <>
    <section>
      <div className={styles.mapAll}>
        <div className={styles.map}>
          {/* <Map mapLink="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9bf87c4350bad7871b464b6edba997c38000a6a37fba586ca60513b6390ce511&amp;width=1100&amp;height=860&amp;lang=ru_RU&amp;scroll=true"></Map> */}
        </div>
        <div className={styles.mapContent}>
          <div className="title" id={styles.mapContentTitle}>
            Ask us anything
          </div>
          <div className={styles.mapContentInputs}>
                <div className={styles.mapContentInput}>
                    <input type="text" placeholder='Name' className={styles.inputMap}/>
                </div>
                <div className={styles.mapContentInput}>
                    <input type="text" placeholder='E-mail' className={styles.inputMap}/>
                </div>
                <div className={styles.mapContentInput}>
                    <input type="text" placeholder='+7 (999) 999 - 99 - 99' className={styles.inputMap}/>
                </div>
                <div className={styles.mapContentInput}>
                    <input type="text" placeholder='Message' className={styles.inputMap2}/>
                </div>
                <Button w='310px' h='90px' br='10px' bgc='transparent' b='2px solid #33B7BC' fse='15px'>SEND THE REQUEST</Button>
            </div>
        </div>
      </div>
    </section>
    <section>
        <div className={styles.info}>
            <div className='text' id={styles.infoTitle}>Get a discount of up to <span className='boldtext'> 60%</span></div>
            <div className='text' id={styles.infoText}>Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</div>
            <div className={styles.infoInput}>
               <input type="text" placeholder='Your email' className={styles.inputInfo}/>
               <Button w='180px' h='68px' b='none' br='10px' bgc='#33B7BC' fse='14px'>RECEIVE</Button>
            </div>
        </div>
    </section>
    <div>
        <div className={styles.footerScroll}>
            <Link className='link' id={styles.footerScrollLink}>Ferrari</Link>
            <Link className='link' id={styles.footerScrollLink}>Cadillac</Link>
            <Link className='link' id={styles.footerScrollLink}>Maserati</Link>
            <Link className='link' id={styles.footerScrollLink}>Lamborhini</Link>
            <Link className='link' id={styles.footerScrollLink}>Bentley</Link>
            <Link className='link' id={styles.footerScrollLink}>Porshe</Link>
            <Link className='link' id={styles.footerScrollLink}>Audi</Link>
            <Link className='link' id={styles.footerScrollLink}>BMW</Link>
            <Link className='link' id={styles.footerScrollLink}>Mersedes</Link>
            <Link className='link' id={styles.footerScrollLink}>Toyota</Link>
            <Link className='link' id={styles.footerScrollLink}>Lexus</Link>
            <Link className='link' id={styles.footerScrollLink}>Bugatti</Link>
            <Link className='link' id={styles.footerScrollLink}>Subaru</Link>
        </div>
    </div>
    <hr className={styles.hr}/>
    <div className={styles.footerContent}>
            <div className={styles.footerContentLinks}>
                <div className={styles.footerContentLinksLine}>
                    <div className="boldtext" id={styles.footerContentLinksLineTitle}>For Customers</div>
                    <div className={styles.footerContentLink}>About Us</div>
                    <div className={styles.footerContentLink}>Conditions</div>
                    <div className={styles.footerContentLink}>Testimonials</div>
                    <div className={styles.footerContentLink}>Articles</div>
                    <div className={styles.footerContentLink}>Contact</div>
                </div>
                <div className={styles.footerContentLinksLine}>
                    <div className="boldtext" id={styles.footerContentLinksLineTitle}>Car List</div>
                    <div className={styles.footerContentLink}>SUVs</div>
                    <div className={styles.footerContentLink}>Convertibles</div>
                    <div className={styles.footerContentLink}>Sport cars</div>
                    <div className={styles.footerContentLink}>Premium</div>
                    <div className={styles.footerContentLink}>Coupe</div>
                </div>
                <div className={styles.footerContentLinksLine}>
                    <div className="boldtext" id={styles.footerContentLinksLineTitle}>Service</div>
                    <div className={styles.footerContentLink}>Car List</div>
                    <div className={styles.footerContentLink}>Yacht List</div>
                    <div className={styles.footerContentLink}>Chauffeur</div>
                </div>
            </div>
            <hr className={styles.hr2}/>
            <div className={styles.footerInfo}>
                <div className={styles.footerInfoNumber}>
                <div className="boldtext" id={styles.footerInfoNumber}>
                +971 58 590 7875
                </div>
                <div className={styles.footerInfoButtons}>
                    <Button w='54px' h='54px' bgc='#34AADF' br='54px' b='none'>
                        <img src="./images/telegram (2) 1.svg" alt="" />
                    </Button>
                    <Button w='54px' h='54px' bgc='#43D854' br='54px'b='none'>
                        <img src="/images/whatsapp (4) 1.svg" alt="" />
                    </Button>
                </div>
                </div>
                <div className={styles.footerInfoBtn}>
                <Button w='294px' h='64px' br='10px' bgc='transparent' b='2px solid #33B7BC' fse='15px'>REQUEST A CALLBACK</Button>
                </div>
                <div className="text" id={styles.footerInfoAddress}>
                24 4th St - Al Quoz - Al Quoz <br /> Industrial Area 3 - Dubai
                </div>
                <div className={styles.footerInfoInput}>
                    <input type="text" name="" id="" placeholder='Write your E-mail' className={styles.input}/>
                    <Button fse='15px' bgc='#33B7BC' w='131px' h='80px' br='10px' b='none'>SUBMIT</Button>
                </div>
            </div>
    </div>
    <hr className={styles.hr}/>
    <div className={styles.footerScrollSecond}>
            <img src="./images/image 1.svg" alt="" />
            <img src="./images/image 2.svg" alt="" />
            <img src="./images/image 3.svg" alt="" />
            <img src="./images/image 4.svg" alt="" />
            <img src="./images/logo (1) 1.svg" alt="" />
            <img src="./images/Group 16148.svg" alt="" />
            <img src="./images/Mask Group.svg" alt="" />
            <img src="./images/image 22.svg" alt="" />
            <img src="./images/image 20.svg" alt="" />
            <img src="./images/image 25.svg" alt="" />
    </div>
    <hr className={styles.hr}/>
    <div className={styles.footerEnd}>
            <div className="text" id={styles.footerEndText}>Privacy Policy</div>
            <div className="text" id={styles.footerEndText2}>©2023 TRINITY. All rights reserved</div>
            <div className={styles.footerEndButtons}>
               <Button w='26px' h='26px' bgc='transparent' b='none'><img src="./images/facebook 1 (1).svg" alt="" /></Button>
               <Button w='26px' h='26px' bgc='transparent' b='none'><img src="./images/tiktok-social-media-video-logo 1.svg" alt="" /></Button>
               <Button w='26px' h='26px' bgc='transparent' b='none'><img src="./images/youtube 1.svg" alt="" /></Button>
               <Button w='26px' h='26px' bgc='transparent' b='none'><img src="./images/instagram 1 (1).svg" alt="" /></Button>
            </div>
    </div>
    </>
  );
}

export default Footer;