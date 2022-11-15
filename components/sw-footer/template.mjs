import "./sw-sponsors/element.mjs";
import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <sw-sponsors></sw-sponsors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://kiitos.earth">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://heartbank.fund">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/SiliconWat">GitHub</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                        <li><a href="https://twitter.com/siliconwat">Twitter</a></li>
                        <li><a href="https://youtube.com/@siliconwat">YouTube</a></li>
                        <li><a href="https://medium.com/@thonly">Medium</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="https://thonly.org">Lead Instructor: Thon Ly</a></li>
                        <li><a href="mailto:university@siliconwat.com">university@siliconwat.com</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
            <small><a href="https://siliconwat.org">Silicon Wat Campus</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;