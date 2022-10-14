import template from './template.mjs';

class SwCoupon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(course) {
        this.style.display = 'block';
    }
}

customElements.define("sw-coupon", SwCoupon);