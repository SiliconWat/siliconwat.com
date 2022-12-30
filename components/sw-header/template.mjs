import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><img src="siliconwat.png"></a>
            <a href="/"><h1>Silicon Wat University</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Frontend Course</h3>
                <nav>
                    <a href="#Frontend.SiliconWat.com"><button>eLearn: Online Frontend Music Course</button></a>
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
                        <li class="cohort"><a>Solo Projects on Codepen</a></li>
                    </menu>
                    <h4>Review</h4>
                    <menu>
                        <li class="coin"><a>Syntax Flashcard Games</a></li>
                        <li class="cohort"><a>Writing Assignments on Medium</a></li>
                        <li class="cohort"><a>Mock Interviews on YouTube</a></li>
                    </menu>
                    <h4>Bonus</h4>
                    <menu>
                        <li><a href="#timer.thonly.org">Pomodoro Productivity Timer</a></li>
                        <li><a href="#podcast.thonly.org">The Code of Success Podcast</a></li>
                        <li><a href="#radio.thonly.org">Coding Music Radio Station</a></li>
                        <li><a>Live Demo: Music PWAs</a></li>
                    </menu>
                    <h4>Bonus: Advanced Lessons on YouTube</h4>
                    <menu>
                        <li><a>React and Redux</a></li>
                        <li><a>Web Audio Production</a></li>
                    </menu>
                    <h4>Medium Members: 40 Problems, Solutions and Explanations (Series)</h4>
                    <menu>
                        <li><a>Interview Questions about HTML, CSS and JavaScript</a></li>
                        <li><a>Interview Questions about Web Components</a></li>
                        <li><a>Interview Questions about React and Redux</a></li>
                        <li><a>Data Stuctures and Algorithms in JavaScript</a></li>
                    </menu>
                    <br>
                    <a href="#Frontend.SiliconWat.org"><button class="cohort">eJoin: Remote Frontend Cohort Program</button></a>
                </nav>
            </li>
            <li>
                <h3>Backend Course</h3>
                <nav>
                    <a href="#Backend.SiliconWat.com"><button>eLearn: Online Backend Blockchain Course</button></a>
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
                        <li><a href="#timer.thonly.org">Pomodoro Productivity Timer</a></li>
                        <li><a href="#podcast.thonly.org">The Code of Success Podcast</a></li>
                        <li><a href="#radio.thonly.org">Coding Music Radio Station</a></li>
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
                    <a href="#Backend.SiliconWat.org"><button class="cohort">eJoin: Remote Backend Cohort Program</button></a>
                </nav>
            </li>
            <li>
                <h3>iOS Course</h3>
                <nav>
                    <a href="#iOS.SiliconWat.com"><button>eLearn: Online iOS Metaverse Course</button></a>
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
                        <li><a href="#timer.thonly.org">Pomodoro Productivity Timer</a></li>
                        <li><a href="#podcast.thonly.org">The Code of Success Podcast</a></li>
                        <li><a href="#radio.thonly.org">Coding Music Radio Station</a></li>
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
                    <a href="#iOS.SiliconWat.org"><button class="cohort">eJoin: Remote iOS Cohort Program</button></a>
                </nav>
            </li>
            <li>
                <h3>Graduation</h3>
                <nav>
                    <a><button class="coin">Earn SW Coins</button></a>
                    <h4>Awards</h4>
                    <menu>
                        <li class="cohort"><a>Best Project Showcase</a></li>
                        <li class="cohort"><a>Course Completion Certification</a></li>
                        <li class="cohort"><a>Graduation Diploma</a></li>
                    </menu>
                    <h4>Rewards</h4>
                    <menu>
                        <li class="cohort"><a>Commitment Loan Deposit</a></li>
                        <li class="cohort"><a>Course Completion Bonus</a></li>
                        <li class="cohort"><a>Graduation Mega Bonus</a></li>
                    </menu>
                    <h4>Benefits</h4>
                    <menu>
                        <li class="cohort"><a>Volunteer Tutor</a></li>
                        <li class="cohort"><a>Mock Technical Interview</a></li>
                        <li class="cohort"><a>Campus Apprenticeship Program</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Coupons</h3>
                <nav>
                    <a><button class="coin">Redeem SW Coins</button></a>
                    <h4>Inclusion & Diversity</h4>
                    <menu>
                        <li><a>Women & Minorities</a></li>
                        <li><a>Ukrainian Refugees</a></li>
                        <li><a>Cambodian Genocide</a></li>
                    </menu>
                    <h4>Campuses</h4>
                    <menu>
                        <li><a>Cambodia</a></li>
                        <li><a>Ukraine</a></li>
                        <li><a>United States</a></li>
                    </menu>
                    <h4>Terms</h4>
                    <menu>
                        <li><a>Medium Members</a></li>
                        <li><a>Refund Policy</a></li>
                        <li><a>FAQs</a></li>
                        <li><a>Service</a></li>
                        <li><a>Privacy</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;