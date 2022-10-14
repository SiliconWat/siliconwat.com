import template from './template.mjs';

class SwCurriculum extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render() {
        this.style.display = 'block';
    }
}

customElements.define("sw-curriculum", SwCurriculum);