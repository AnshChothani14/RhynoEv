import React from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useNavigate } from 'react-router-dom';
import { EffectCoverflow, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { battry, callSvg, design, Elevate, experience, imgAU, locationSvg, mailSvg, range, Superiority, tyre } from '../../../Assats/photos';
import Typewriter from 'typewriter-effect';
import FloatingActionButtonExtendedSize from '../../Design Components/FloatingButton/FloatingButton';
import HoverImageEffect from '../../Design Components/HoverImg/HoverImg';
import TiltedCard from '../../Design Components/USPDisplayer/USPDisplayer';
import Product from '../Product/Product';
import ResponsiveTable from '../../Design Components/Comparision Table/CompTable';
import products from '../../../Configration/Product';
import { Mail } from '@mui/icons-material';
import { LinkedIn, Instagram } from '@mui/icons-material'
const Home = () => {
    
    const usps = [
        {
            name: "LFP Battery",
            content: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
renowned for their safety features—eliminating the risk of fire associated with other
Lithium batteries. These batteries boast a broader temperature range, ideal for the
diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
by an Active Balancing Smart Battery Management System (BMS) for extended life
and reduced maintenance. Each battery undergoes rigorous waterproofing tests
according to IP76 standards. But it doesn't stop there—our technology goes the extra
mile in ensuring the battery's lasting durability. Connect with us to discover the
thoughtful engineering behind our batteries!`,
            photo: battry
        },
        {
            name: "Wider tyres",
            content: `Now, say goodbye to skidding and embrace the leaning turns!
Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
beast that ensures stability on different terrains such as wet roads, mud, and sand.`,
            photo: tyre
        },
        {
            name: "Range prediction",
            content: `Many budget-friendly electric scooters overlook this crucial
feature, causing riders to experience range anxiety. With Rhyno, you can ride with
peace of mind, thanks to the scooter providing precise information about the
remaining battery.`,
            photo: range
        },
        {
            name: "Extraordinery Experience",
            content: `Rhyno is more than just a mode of transportation. It is
an experience of sheer comfort and style! A seamless fusion of minimalism,
sophistication, and a touch of masculinity!`,
            photo: experience
        },
        {
            name: "Rugged and simple Design",
            content: `We’ve had enough of the EVs looking and feeling like
fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
ending up spending weeks and months at service stations for complex repairs. We
took a bold step of making something raw, rugged, and practical. We kept it so
simple that even your trusted local mechanic can understand and repair most of it. If
you have reached this far, why not to take a test ride? Click here to locate your
nearest dealership or book a test ride at your home!`,
            photo: design
        }
    ];
    const navigate = useNavigate();
    const handleMoreAboutUsClick = () => {
        navigate('/about-us');
    };

    return (
        <div className="">
            <div className="container mt-5">
                <div className="sec1">
                    <div className="text">
                        <ul className="list-unstyled">
                            <li> <span>Let's </span> </li>
                            <li className='spacial'><span><HoverImageEffect word={'Elevate'} img={Elevate} /></span></li>
                            <li><span>Your Ride Experience With Rhyno</span></li>
                            <li><span>– Where</span></li>
                            <li className='spacial'><span><HoverImageEffect word={'Superiority'} img={Superiority} /></span></li>
                            <li><span>Meets</span></li>
                        </ul>
                        <Typewriter
                            options={{
                                strings: ['Style .', 'Elegance .', 'Minimalism .', 'Comfort .'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'typewriter-h1',
                            }}
                        />
                        <button className="CheckBtn btn-1 btn-1e mt-5">Check Our Range</button>
                    </div>
                    <div className="swiper">
                        <div className="swiper-title">
                            <h1>OUR USPs</h1>
                            <h4>Discover the Difference—Where Excellence and Innovation Converge.</h4>
                        </div>
                        <Swiper
                            ltr={true}
                            effect={'coverflow'}
                            spaceBetween={200}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 40,
                                stretch: 0,
                                depth: 50,
                            }}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            EffectFade={false}
                            modules={[EffectCoverflow, Pagination, Autoplay, EffectFade]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={3000}
                            loop={true}
                            className="mySwiper"
                        >
                            {usps.map((usp, index) => (
                                <SwiperSlide key={index}>
                                    <TiltedCard
                                        title={usp.name}
                                        content={usp.content}
                                        img={usp.photo}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <FloatingActionButtonExtendedSize />
            </div>
            <div className="product-container">
                <div className="title">
                    <h1>Products</h1>
                    <h5>Where Functionality Meets Style—A Product Like No Other.</h5>
                </div>
                {products.map((product, index) => (
                    <Product key={index} index={index} />
                ))}
                <div className="title-1">
                    <h1>Product Comparison</h1>
                    <h5>Compare, Discover, and Choose—Where Performance and Innovation Come Together.</h5>
                </div>
                <ResponsiveTable />
            </div>
            <div className="about-us">
                <div className="title">
                    <h1>About Us</h1>
                    <h5>Our Journey, Our Mission—Crafting Excellence Every Step of the Way.</h5>
                </div>
                <div className="detail-container container mb-5 ">
                    <div className="row">
                        <div className="col-5 ">
                            <img src={imgAU} alt="" className='imgAU ' />
                        </div>
                        <div className="col-7">
                            <h1 className='title-Au'>About Rhyno Ev</h1>
                            <h4 className='des-Au'>Founded in 2019 by a visionary automotive engineer, Rhyno EV is more than a company—it's a movement towards sustainable and innovative mobility solutions. Driven by a passionate team, we craft electric vehicles that blend elegance, comfort, and advanced technology. Our flagship product redefines the electric scooter experience, emphasizing safety, durability, and style. Ideal for fleet operators in vibrant locations like Goa, our scooters promise reliability and a new standard in eco-friendly transportation. Join us in shaping the future of electric mobility.</h4>
                            <div className="btn-Au text-center">
                                <button className='CheckBtn btn-1 btn-1e my-5' onClick={handleMoreAboutUsClick}>More About Us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="contact-us">
                <div className="contact-us">
                    <div className="title">
                        <h1>Contact Us</h1>
                        <h5>We’re Here to Help—Reach Out Anytime, Anywhere.</h5>
                    </div>
                    <div className="contact-detail container">
                        <div className="row">
                            <div className="col-7">
                                <div className="det">
                                    <div className="img-contact">
                                        <img src={callSvg} alt="Phone Icon" />
                                    </div>
                                    <div className="des-contact">
                                        <h3>+91-9023987528</h3>
                                    </div>
                                </div>
                                <div className="det">
                                    <div className="img-contact">
                                        <img src={mailSvg} alt="Email Icon" />
                                    </div>
                                    <div className="des-contact">
                                        <h3>info@rhyno.in</h3>
                                    </div>
                                </div>
                                <div className="det">
                                    <div className="img-contact-sp ms-2">
                                        <img src={locationSvg} alt="Location Icon" />
                                    </div>
                                    <div className="des-contact ms-4">
                                        <h3>Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="map-container ">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58677.39983681151!2d72.61779354655854!3d23.194368247650605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81aa091b0f73%3A0xb8456d1d58827efd!2sPDPU%20UG%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1724928803237!5m2!1sen!2sin"
                                        width="450"
                                        height="350"
                                        style={{ border: 0 , borderRadius: '20px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer-container glass">
                <div className="footer-content">
                    <ul className="footer-list">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Website Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="https://www.linkedin.com/company/rhyno-wheels/" target="_blank" rel="noopener noreferrer">Career</a></li>
                        <li><a href="/rentals">Rentals</a></li>
                    </ul>
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/your-company" target="_blank" rel="noopener noreferrer">
                            <Instagram fontSize="large" />
                        </a>
                        <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">
                            <LinkedIn fontSize="large" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
