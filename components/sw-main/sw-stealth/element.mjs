import template from './template.mjs';

class SwStealth extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.#buildElements();
        this.#startIntervalCounter();
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

    #getRandomInt(min, max, string = true) {
        min = Math.ceil(min)
        max = Math.floor(max)
        if (string) {
            return String(Math.floor(Math.random() * (max - min)) + min)
        }
        return Math.floor(Math.random() * (max - min)) + min
    }

    #buildElements() {
        const sparkElements = this.shadowRoot.querySelectorAll('.spark')
        const weldElements = this.shadowRoot.querySelectorAll('.weld-container')

        sparkElements.forEach((spark, index) => {
            // create weld item first
            let sibling = weldElements[index]
            let baseAnimationDelay = this.#getRandomInt(1,15)
            let weld = document.createElement('div')
            weld.classList = "weld"
            weld.style.animationDelay = String(baseAnimationDelay) + "s"
            sibling.appendChild(weld)

            // sparks start here
            const sparkCount = 25
            for( var i = 0; i <=sparkCount; i++){
                const sparkDiv = this.#generateSpark(baseAnimationDelay)
                spark.appendChild(sparkDiv)
            }
        })
    }

    #generateSpark(delay) {
        let sparkDiv = document.createElement('div')
        // set standard properties
        sparkDiv.classList = 'particle'
        sparkDiv.style.top = this.#getRandomInt(25,35) + "px"
        sparkDiv.style.left =  this.#getRandomInt(0,5) + "px"
        sparkDiv.style.width = this.#getRandomInt(1,2) + "px"
        sparkDiv.style.height = this.#getRandomInt(4,7) + "px"
        // make some uniqness
        if(this.#getRandomInt(1,3) == 2){
            sparkDiv.classList = sparkDiv.classList + " negative-X"
        } else {
            sparkDiv.classList = sparkDiv.classList + " positive-X"
        }
        //create a base delay
        let combinedDelay = (this.#getRandomInt(0,9)/10) + parseFloat(delay)
        sparkDiv.style.animationDelay = String(combinedDelay) + "s" 
        return sparkDiv
    }

    #startIntervalCounter() {
        setInterval( () => this.shadowRoot.getElementById('material-group').classList.toggle('hidden'), 45000)
    }
}

customElements.define("sw-stealth", SwStealth);

// Reference: https://codepen.io/smartbadger/pen/Nzygqm?editors=0110