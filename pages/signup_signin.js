import Layout from '../components/general/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useState } from 'react';


const Signup_Signin = () => {

    const [toggle, setToggle] = useState('false');

    const toggleSwitch = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    return (
        <div className="main">
            <Layout>
                <div className="susi_container">
                    <div className={toggle ? "s_container" : "s_container sign_up_mode"}>
                        <div className="form_container">
                            <div className="signin_signup">
                                <form action="" className="sign_in_form">
                                    <h2 className="title">Sign In</h2>
                                    <div className="socials">
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                    <p className="social_text">Or Sign in with Email</p>
                                    <div className="input_field"><i className="fas fa-user"></i>
                                        <input type="email" placeholder="Email" name="email" />
                                    </div>
                                    <div className="input_field"><i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Password" name="password" />
                                    </div>
                                    <input type="submit" value="login" className="s_btn solid" />
                                </form>

                                <form action="" className="sign_up_form">
                                    <h2 className="title">Sign Up</h2>
                                    <div className="socials">
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                    <p className="social_text">Or Sign up with Email</p>
                                    <div className="input_field"><i className="fas fa-user"></i>
                                        <input type="email" placeholder="Email" name="email" />
                                    </div>
                                    <div className="input_field"><i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Password" name="password" />
                                    </div>
                                    <div className="input_field"><i className="fas fa-lock"></i>
                                        <input type="confirmPassword" placeholder="Confirm Password" name="confirmPassword" />
                                    </div>
                                    <div className="input_field"><i className="fas fa-user"></i>
                                        <input type="referrer" placeholder="Referral Code (Optional)" name="referrer" />
                                    </div>
                                    {/* onChange={activateButton(this)}  */}
                                    <p><input className="on change was in this Line" type="checkbox" name="terms" id="terms" />&nbsp; I have
                                        read the<a href="">Terms</a> and <a href="">Privacy Policy</a>.</p>
                                    <input type="submit" value="SignUp" id="signup_submit" className="s_btn solid" />
                                    <p><a href="">Forgot Password?</a></p>
                                </form>
                            </div>
                        </div>

                        <div className="panels_container">
                            <div className="panel left_panel">
                                <div className="content">
                                    <h3> Don't Have An Account?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni fugit labore.</p>
                                    <button className="s_btn transparent" id="sign_up_btn" onClick={toggleSwitch}>Sign Up</button>
                                </div>
                                {/* <!-- <img src="/images/logins.svg" className="sp_images" alt="" /> --> */}
                            </div>

                            <div className="panel right_panel">
                                <div className="content">
                                    <h3>Already a Member?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni fugit labore.</p>
                                    <button className="s_btn transparent" id="sign_in_btn" onClick={toggleSwitch}>Sign In</button>
                                </div>
                                {/* <!-- <img src="/images/signups.svg" className="sp_images" alt="" /> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Signup_Signin;