import template from './template.mjs';

class SwQuiz extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(course) {
        this.style.display = 'block';
    }
}

customElements.define("sw-quiz", SwQuiz);