import React from 'react';
import './App.scss';

import keeyenLogo from '../assets/img/header-logo.png';
import smallKeeYenLogo from '../assets/img/small-logo.svg';

import messengerLogo from '../assets/img/messenger.png';
import iftttMockup from '../assets/img/ifttt.png';
import techCrunchMockup from '../assets/img/techcrunch.png'
import num from '../assets/img/num.png';
import infin from '../assets/img/infin.png';
import restock from '../assets/img/restock.png';

import fbLogo from '../assets/img/facebook-logo.png';
import flowLogo from '../assets/img/flow-logo.png';
import iftttLogo from '../assets/img/ifttt_wordmark-black.png';
import logicLogo from '../assets/img/logic-input-logo.png';
import picnicLogo from '../assets/img/picnic-logo.png';
import restockLogo from '../assets/img/restock-logo.png';
import tcLogo from '../assets/img/tc-logo.png';
import buuukLogo from '../assets/img/buuuk-logo-white.png';


function App() {
    return (
        <div className="app-main">
            <div className="nav">
                <a className="about">About</a>
                <p className="portfolio-title">Kee Yen</p>
                <a className="email" href="mailto:keeyeny@gmail.com">keeyeny@gmail.com</a>
            </div>

            <div className="logo-container">
                <div className="logo">
                    <img src={keeyenLogo} alt="The logo for Keey Yen, which is a boy with a roto-propeller hat." />
                </div>
            </div>

            <div className="work-grid">
                <div className="work-sample-container" id="messenger">
                    <img src={messengerLogo} alt="The logo for a messenger; a round chat box with a lightning in the middle." />
                </div>
                <div className="work-sample-container">
                    <img src={iftttMockup} alt="A series of mockups for IFTTT." />
                </div>
                <div className="work-sample-container" id="techCrunch">
                    <img src={techCrunchMockup} alt="A series of mockups for IFTTT." />
                </div>
                <div className="work-sample-container" id="num">
                    <img src={num} alt="A series of mockups for IFTTT." />
                </div>
                <div className="work-sample-container" id="infin">
                    <img src={infin} alt="A series of mockups for IFTTT." />
                </div>
                <div className="work-sample-container" id="restock">
                    <img src={restock} alt="A series of mockups for IFTTT." />
                </div>
            </div>

            <div className="line-break"></div>

            <div className="experience-grid">
                <div className="experience-description">
                    <h1>Experience</h1>
                    <div className="line-break-large"></div>
                    <div className="experience-list">
                        <div>
                            <h2>Facebook</h2>
                            <h4>Product Design Intern</h4>
                        </div>
                        <div className="experience-date-duration">
                            <h3>May - Aug 2019</h3>
                        </div>
                    </div>
                    <div className="experience-list">
                        <div>
                            <h2>Small Animal Studios</h2>
                            <h4>Product Designer (Contract)</h4>
                        </div>
                        <div className="experience-date-duration">
                            <h3>Apr - Aug 2018</h3>
                        </div>
                    </div>
                    <div className="experience-list">
                        <div>
                            <h2>Input Logic</h2>
                            <h4>Design Intern</h4>
                        </div>
                        <div className="experience-date-duration">
                            <h3>Apr - Aug 2018</h3>
                        </div>
                    </div>
                    <div className="experience-list">
                        <div>
                            <h2>Restocks</h2>
                            <h4>Product Designer (Contract)</h4>
                        </div>
                        <div className="experience-date-duration">
                            <h3>Apr - Aug 2018</h3>
                        </div>
                    </div>
                    <div className="experience-list">
                        <div>
                            <h2>Flow</h2>
                            <h4>Design Intern</h4>
                        </div>
                        <div className="experience-date-duration">
                            <h3>May - Aug 2018</h3>
                        </div>
                    </div>
                    <div className="experience-list">
                        <div>
                            <h2>Buuuk</h2>
                            <h4>Design Intern</h4>
                        </div>
                        <div className="experience-date-duration">
                            <h3>May - Aug 2018</h3>
                        </div>
                    </div>
                </div>
                <div className="experience-images">
                    <div className="experience-image-grid">
                        <div className="experience-img-container">
                            <img src={fbLogo} />
                        </div>
                        <div className="experience-img-container">
                            <img src={tcLogo} />
                        </div>
                        <div className="experience-img-container">
                            <img src={iftttLogo} />
                        </div>
                        <div className="experience-img-container">
                            <img src={logicLogo} />
                        </div>
                        <div className="experience-img-container">
                            <img src={restockLogo} />
                        </div>
                        <div className="experience-img-container">
                            <img src={flowLogo} />
                        </div>
                        <div className="experience-img-container">
                            <img src={buuukLogo} />
                        </div>
                        <div className="experience-img-container">
                            <img src={picnicLogo} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="media-links">
                    <a>twitter</a>
                    <a>dribble</a>
                    <a>email</a>
                    <a>linkedin</a>
                    <a>resume</a>
                </div>
                <div className="small-logo">
                    <img src={smallKeeYenLogo} />
                </div>
                <div className="location-age-time">
                    <p>49.2827°N, 123.1207°W</p>
                    <p>22.587724123</p>
                    <p>12:34:09</p>
                </div>
            </div>
        </div>
    )
}

export default App;