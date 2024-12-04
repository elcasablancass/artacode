import './Intro.scss';

const Intro = () => {
    return (
        <section className='arta-intro'>
            <div className='arta-container'>
                <div className='arta-intro__wrapper'>
                    <div className='arta-intro__wrapper--left'>
                        <h2><span>Artacode</span>: Your Partner in Digital Innovation</h2>
                        <ul className='intro-list'>
                            <li className='website'>
                                <i className="fas fa-laptop-code"></i> 
                                <p>We create custom websites, web applications, and e-commerce solutions tailored to your business needs. Our team ensures responsive design, seamless user experience, and scalable technology for optimal performance.</p>
                            </li>
                            <li className='marketing'>
                                <i className="fas fa-bullhorn"></i> 
                                <p>We offer comprehensive digital marketing services including search engine optimization (SEO), content strategy, social media management, and paid advertising campaigns to help you reach and engage your target audience effectively.</p>
                            </li>
                            <li className='team'>
                                <i className="fas fa-users"></i> 
                                <p>Our team specializes in developing unique brand identities, including logo design, visual elements, and brand strategy. We help businesses communicate their values and vision through thoughtful design and clear messaging.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='arta-intro__wrapper--right'>
                    <img
                        src={require("../../assets/images/intro.png")}
                        alt="Artacode Digital Agency"
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;