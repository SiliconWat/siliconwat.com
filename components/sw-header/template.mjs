import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="#"><img src="siliconwat.png"></a>
            <h1>Silicon Wat University</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Frontend Course</h3>
                <nav>
                    <a href="https://frontend.siliconwat.com"><button>eLearn: Online Frontend Music Course</button></a>
                    <h4>Learn</h4>
                    <menu>
                        <li><a href="#frontend-udemy">Watch Videos on Udemy</a></li>
                        <li><a href="#frontend-medium">Read Textbook on Medium</a></li>
                        <li class="coin"><a href="#frontend-quiz">Take Quizzes to Check Understanding</a></li>
                        <li class="cohort"><a href="#frontend-study-group">Study Groups (Chat & Discussion Boards) on Discord</a></li>
                    </menu>
                    <h4>Practice</h4>
                    <menu>
                        <li class="coin"><a href="#frontend-coding-exercise">Interactive Coding Exercises</a></li>
                        <li class="cohort"><a href="#frontend-pair-programming">Remote Pair Programming on Discord</a></li>
                        <li class="cohort"><a href="#frontend-project">Solo Projects on Codepen</a></li>
                    </menu>
                    <h4>Review</h4>
                    <menu>
                        <li class="coin"><a href="#frontend-flashcard">Syntax Flashcard Games</a></li>
                        <li class="cohort"><a href="#frontend-writing">Writing Assignments on Medium</a></li>
                        <li class="cohort"><a href="#frontend-interview">Mock Interviews on YouTube</a></li>
                    </menu>
                    <h4>Bonus</h4>
                    <menu>
                        <li><a href="https://timer.thonly.org">Pomodoro Productivity Timer</a></li>
                        <li><a href="https://podcast.thonly.org">The Code of Success Podcast</a></li>
                        <li><a href="https://radio.thonly.org">Coding Music Radio Station</a></li>
                        <li><a href="https://music.siliconwat.com">Live Demo: Music PWAs</a></li>
                    </menu>
                    <h4>Bonus: Advanced Lessons on YouTube</h4>
                    <menu>
                        <li><a>React and Redux</a></li>
                        <li><a>Web Audio Production</a></li>
                    </menu>
                    <h4>Medium Members: 40 Problems, Solutions and Explanations (Series)</h4>
                    <menu>
                        <li><a href="https://medium.com/@thonly/list/frontend-interview-questions-html-css-and-javascript-ad43867a247c">Interview Questions about HTML, CSS and JavaScript</a></li>
                        <li><a href="https://medium.com/@thonly/list/frontend-interview-questions-web-components-501621bd5b75">Interview Questions about Web Components</a></li>
                        <li><a href="https://medium.com/@thonly/list/frontend-interview-questions-react-and-redux-d513a7ab6b9d">Interview Questions about React and Redux</a></li>
                        <li><a href="https://medium.com/@thonly/list/frontend-interview-questions-data-structures-and-algorithms-caef4e6f1a6f">Data Stuctures and Algorithms in JavaScript</a></li>
                    </menu>
                    <br>
                    <a href="https://frontend.siliconwat.org"><button class="cohort">eJoin: Remote Frontend Cohort Program</button></a>
                </nav>
            </li>
            <li>
                <h3>Backend Course</h3>
                <nav>
                    <a href="https://backend.siliconwat.com"><button>eLearn: Online Backend Blockchain Course</button></a>
                    <h4>Learn</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li class="coin"><a>Take Quizzes to Check Understanding</a></li>
                        <li class="cohort"><a>Study Groups (Chat & Discussion Boards) on Discord</a></li>
                    </menu>
                    <h4>Practice</h4>
                    <menu>
                        <li class="coin"><a>Interactive Coding Exercises</a></li>
                        <li class="cohort"><a>Remote Pair Programming on Discord</a></li>
                        <li class="cohort"><a>Solo Projects on Replit</a></li>
                    </menu>
                    <h4>Review</h4>
                    <menu>
                        <li class="coin"><a>Syntax Flashcard Games</a></li>
                        <li class="cohort"><a>Group Chat & Discussion Boards</a></li>
                        <li class="cohort"><a>Writing Assignments on Medium</a></li>
                        <li class="cohort"><a>Mock Interviews on YouTube</a></li>
                    </menu>
                    <h4>Bonus</h4>
                    <menu>
                        <li><a href="https://timer.thonly.org">Pomodoro Productivity Timer</a></li>
                        <li><a href="https://podcast.thonly.org">The Code of Success Podcast</a></li>
                        <li><a href="https://radio.thonly.org">Coding Music Radio Station</a></li>
                        <li><a>Live Demo: Blockchain dApps</a></li>
                    </menu>
                    <h4>Bonus: Advanced Lessons on YouTube</h4>
                    <menu>
                        <li><a>TypeScript</a></li>
                        <li><a>MacOS Electron</a></li>
                        <li><a>Alexa Music Skill</a></li>
                        <li><a>Quantum Physics & Computing</a></li>
                        <li><a>Kiitos Programming Language</a></li>
                    </menu>
                    <h4>Medium Members: 40 Problems, Solutions and Explanations (Series)</h4>
                    <menu>
                        <li><a>Interview Questions about Node</a></li>
                        <li><a>Interview Questions about Blockchain</a></li>
                        <li><a>Data Stuctures and Algorithms in TypeScript</a></li>
                    </menu>
                    <br>
                    <a href="https://backend.siliconwat.org"><button class="cohort">eJoin: Remote Backend Cohort Program</button></a>
                </nav>
            </li>
            <li>
                <h3>iOS Course</h3>
                <nav>
                    <a href="https://ios.siliconwat.com"><button>eLearn: Online iOS Metaverse Course</button></a>
                    <h4>Learn</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li class="coin"><a>Take Quizzes to Check Understanding</a></li>
                        <li class="cohort"><a>Study Groups (Chat & Discussion Boards) on Discord</a></li>
                    </menu>
                    <h4>Practice</h4>
                    <menu>
                        <li class="coin"><a>Interactive Coding Exercises</a></li>
                        <li class="cohort"><a>Remote Pair Programming on Discord</a></li>
                        <li class="cohort"><a>Solo Projects on GitHub</a></li>
                    </menu>
                    <h4>Review</h4>
                    <menu>
                        <li class="coin"><a>Syntax Flashcard Games</a></li>
                        <li class="cohort"><a>Group Chat & Discussion Boards</a></li>
                        <li class="cohort"><a>Writing Assignments on Medium</a></li>
                        <li class="cohort"><a>Mock Interviews on YouTube</a></li>
                    </menu>
                    <h4>Bonus</h4>
                    <menu>
                        <li><a href="https://timer.thonly.org">Pomodoro Productivity Timer</a></li>
                        <li><a href="https://podcast.thonly.org">The Code of Success Podcast</a></li>
                        <li><a href="https://radio.thonly.org">Coding Music Radio Station</a></li>
                        <li><a>Live Demo: Metaverse Apps</a></li>
                    </menu>
                    <h4>Bonus: Advanced Lessons on YouTube</h4>
                    <menu>
                        <li><a>React Native</a></li>
                        <li><a>3D Animations</a></li>
                        <li><a>Deep Learning</a></li>
                    </menu>
                    <h4>Medium Members: 40 Problems, Solutions and Explanations (Series)</h4>
                    <menu>
                        <li><a>Interview Questions about iOS</a></li>
                        <li><a>Data Stuctures and Algorithms in Swift</a></li>
                    </menu>
                    <br>
                    <a href="https://ios.siliconwat.org"><button class="cohort">eJoin: Remote iOS Cohort Program</button></a>
                </nav>
            </li>
            <li>
                <h3>Graduation</h3>
                <nav>
                    <a href="#earn-coins"><button class="coin">Earn SW Coins</button></a>
                    <h4>Awards</h4>
                    <menu>
                        <li class="cohort"><a href="#showcase">Best Project Showcase</a></li>
                        <li class="cohort"><a href="#certification">Course Completion Certification</a></li>
                        <li class="cohort"><a href="#diploma">Graduation Diploma</a></li>
                    </menu>
                    <h4>Rewards</h4>
                    <menu>
                        <li class="cohort"><a href="#deposit">Commitment Loan Deposit</a></li>
                        <li class="cohort"><a href="#course-bonus">Course Completion Bonus</a></li>
                        <li class="cohort"><a href="#graduation-bonus">Graduation Mega Bonus</a></li>
                    </menu>
                    <h4>Benefits</h4>
                    <menu>
                        <li class="cohort"><a href="#interview">Mock Technical Interview</a></li>
                        <li class="cohort"><a href="#tutor">Volunteer Tutor</a></li>
                        <li class="cohort"><a href="#freelancer">Paid Freelancer</a></li>
                        <li class="cohort"><a href="#apprenticeship">Campus Apprenticeship Program</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Coupons</h3>
                <nav>
                    <a href="#redeem-coins"><button class="coin">Redeem SW Coins</button></a>
                    <h4>Inclusion & Diversity</h4>
                    <menu>
                        <li><a href="#minorities">Women & Minorities</a></li>
                        <li><a href="#refugees">Ukrainian Refugees</a></li>
                        <li><a href="#survivors">Cambodian Survivors</a></li>
                    </menu>
                    <h4>Campuses</h4>
                    <menu>
                        <li><a href="#cambodia">Cambodia</a></li>
                        <li><a href="#ukraine">Ukraine</a></li>
                        <li><a href="#usa">United States</a></li>
                    </menu>
                    <h4>Terms</h4>
                    <menu>
                        <li><a href="#refund">Refund Policy</a></li>
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#privacy">Privacy</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <!--<option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>-->
            </select>
        </aside>
    </header>
`;

export default template;