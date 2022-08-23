import Layout from '../components/general/Layout'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

export default function Home() {
    return (
        <div className="main">
            <Layout>
                <div className="main">
                    <div className="main_container">
                        <div className="main_content">
                            <h1>Wealth Creation:
                                <br />
                                <span className="typewriter"><Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,
                                        strings: [
                                            "In Your Hands.",
                                            "On Your Phone.",
                                            "Anywhere You Are."
                                        ],
                                    }} /> </span>

                                {/* <span className="typewriter" data-wait="2000"
                        data-text='["In Your Hands.", "On Your Phone.", "Anywhere You Are."]'></span> */}
                            </h1>
                            <p>Increase you side income with few simple steps
                                <br />while we build your money into a life long investment.
                            </p>
                            <a href="/signup_signin" className="main_btn">Get Started</a>
                            <div className="app-download">
                                <h2 className="cmns">Coming Soon On</h2>
                                <div className="download">
                                    <img src="" alt="" srcSet="" />
                                    <a className="download-btn" target="_blank" href=""><img src="/images/apple-logo.png"
                                        alt="download-apple" className="apple_logo" /> App Store</a>

                                    <a className="download-btn" target="_blank" href=""><img src="/images/google-play.png"
                                        alt="download-google" className="google_logo" /> Play Store</a>
                                </div>
                            </div>
                        </div>
                        <div className="top_images">
                            <img src="/images/HiveInvest.png" className="shape" />
                            <img src="/images/HiveInvestPhone.png" className="phone" />
                        </div>
                    </div>
                    <div className="services">
                        <div className="services_intro">
                            <h1>Lorem ipsum dolor sit.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos omnis
                                non ducimus! Corporis, repudiandae?</p>
                        </div>
                        <div className="services_container">
                            <div className="services_card plane_cards">
                                <div className="box">
                                    <div>
                                        <img src="/images/betting_dice.jpg" className="services-images svc-img" alt="" srcSet="" />
                                    </div>
                                    <h4>Low Risk Betting</h4>
                                    <p>We have a specialised betting system that is done with an arbitrage gaming
                                        process.
                                        <br />We ensure that your investments are not placed on any odds above
                                        1.10 odd.
                                        <br /> This ensures that we stay committed to growing your investment.
                                    </p>
                                </div>
                            </div>
                            <div className="services_card rcorners">
                                <div className="box">
                                    <div>
                                        <img src="/images/investment.png" className="services-images svc-img" alt="" srcSet="" />
                                    </div>
                                    <h4>Profitable Trades</h4>
                                    <p>We have a specialised betting system that is done with an arbitrage gaming
                                        process.
                                        <br />We ensure that your investments are not placed on any odds above
                                        1.10 odd.
                                        <br /> This ensures that we stay committed to growing your investment.
                                    </p>
                                </div>
                            </div>
                            <div className="services_card plane_cards">
                                <div className="box">
                                    <div>
                                        <img src="/images/icon_flash_loan.png" className="services-images" alt="" srcSet="" />
                                    </div>
                                    <h4>Flash Loans</h4>
                                    <p>We have a specialised betting system that is done with an arbitrage gaming
                                        process.
                                        <br />We ensure that your investments are not placed on any odds above
                                        1.10 odd.
                                        <br /> This ensures that we stay committed to growing your investment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="cta Get_Started" href="/signup_signin"><button className="get_started_button"> Get Started &nbsp;<img
                            src="/images/get-started-icon.png" className="get_started_image" alt="" srcSet="" /></button></a>
                    </div>
                    <div className="contact_us_div">
                        <div className="svgrect"></div>
                        <div id="contact-correct" className="container-fluid row">
                            <div className="contact_us_cta col-lg-6 col-md-6 col-sm-12"><img src="/images/Flash_loan_section.png"
                                className="floan-image" alt="" srcSet="" />
                            </div>
                            <div className="contact_us col-lg-6 col-md-6 col-sm-12">
                                <h1>Have Any Concerns?</h1>
                                <p>Increase you side income with few simple steps
                                    <br />while we build your money into a life long investment.
                                </p>
                                <a href="cta" className="learn_more_button">Learn More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
