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

        if (origin) {
            a.href = "https://" + origin;
            button.textContent = origin;
        } else {
            a.style.display = 'none';
        }
    }
}

customElements.define("sw-stealth", SwStealth);