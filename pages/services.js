import Layout from '../components/general/Layout'
import Image from 'next/image'

const Services = () => {
    return (
        <div className="main">
            <Layout>
                <div className="service_container">
                    <div className="skills">
                        <h1 className="skills-headings">Services</h1>
                        <div className="skill-row">
                            <div>
                                <img className="code-icon" src="/images/betting_dice.jpg" alt="code icon" />
                            </div>
                            <div>
                                <h3 className="skills-headings">Coursera</h3>
                                <p>
                                    This is a five part course on front end web development. HTML5,
                                    CSS3, JavaScript, JQuery and Boostrap. Capstone course was completed
                                    using a bootstrap theme. This was my first web design course. I was
                                    just getting my feet wet here.
                                </p>
                            </div>
                        </div>
                        <div className="skill-row">
                            <div>
                                <img className="web-icon" src="/images/investment.png" alt="web stack icon" />
                            </div>
                            <div>
                                <h3 className="skills-headings">Udemy</h3>
                                <p>
                                    I took the complete 2020 web development bootcamp from Udemy from
                                    Angela Yu. This is an intense course has 469 lectures which focuses
                                    on full stack development. I like this course as it gave me more
                                    confidence to be able to code than the first one.
                                </p>
                            </div>
                        </div>
                        <div className="skill-row">
                            <div>
                                <img className="code-icon" src="/images/icon_flash_loan.png" alt="code icon" />
                            </div>
                            <div>
                                <h3 className="skills-headings">Coursera</h3>
                                <p>
                                    This is a five part course on front end web development. HTML5,
                                    CSS3, JavaScript, JQuery and Boostrap. Capstone course was completed
                                    using a bootstrap theme. This was my first web design course. I was
                                    just getting my feet wet here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Services;