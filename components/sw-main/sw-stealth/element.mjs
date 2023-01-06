import template from './template.mjs';

class SwStealth extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(origin) {
        const a = this.shadowRoot.getElementById('follow');
        a.href = origin ? "https://" + origin : "https://twitter.com/siliconwat";
        a.firstElementChild.innerHTML = origin || "<b>Follow</b> for real-time updates!";
        this.style.display = 'block';
    }
}

customElements.define("sw-stealth", SwStealth);