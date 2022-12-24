import template from './template.mjs';

class SwStealth extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(origin) {
        this.style.display = 'block';
        const a = this.shadowRoot.querySelector('a');
        const button = this.shadowRoot.querySelector('button');
        a.href = origin ? "https://" + origin : "https://medium.com/siliconwat/trilogy-curriculum-for-complete-beginners-aspiring-to-become-fullstack-engineers-28f3b03327d4?sk=b40d217c5ca765a93465bd2212d49025";
        button.textContent = origin || "Trilogy Curriculum for Complete Beginners Aspiring to Become Fullstack Engineers";
    }
}

customElements.define("sw-stealth", SwStealth);