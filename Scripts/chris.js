class KaderGroup extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.innerHTML = this.getAttribute("summary")

        const container = document.createElement("div");
        container.classList.add("grid-container")

        summary.appendChild(container);

        const style = document.createElement("style");
        style.innerText = `
        details>summary {
            list-style: none;
            font-size: x-large;
            cursor: pointer;
        }
        
        summary::after {
            content: ' ';
        }
        
        summary::before {
            content: "▶ "
        }
        
        details[open] summary::before {
            content: "▼ "
        }
        
        details[open] summary:after {
            content: " ";
        }`;

        details.innerHTML = this.innerHTML;
        //this.innerHTML = "";

        details.appendChild(summary);
        this.appendChild(details);
        this.appendChild(style);
    }
}

class KaderPlayer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const item = document.createElement("div");
        item.classList.add("grid-item");

        const trikot = document.createElement("div");
        trikot.classList.add("trikot");
        const trikotNr = document.createElement("p");
        trikotNr.innerHTML = this.getAttribute("number");

        trikot.appendChild(trikotNr);
        item.appendChild(trikot);

        const style = document.createElement("style");
        style.innerText = `
        .grid-item {
            margin: 5px;
            font-size: 30px;
            color: var(--header-font-color);
            background-color: var(--ternary-color-elevated);
            height: 200px;
            width: 500px;
            padding: 5px;
            border-radius: 7px;
        }
        
        .grid-item img {
            width: 125px;
            height: 125px;
            position: relative;
            left: 10px;
            top: -170px;
            border-radius: 50%;
        }
        
        .grid-item h4 {
            position: relative;
            top: -100px;
            left: 160px;
            color: var(--header-font-color);
            text-align: left;
        }
        
        .grid-item table {
            position: relative;
            color: var(--header-font-color);
            top: -250px;
            left: 60px;
            margin-left: auto;
            margin-right: auto;
            font-size: large;
        }
        
        .grid-item table th,
        td {
            padding: 5px;
            text-align: center;
        }
        
        .grid-item table {
            background-color: var(--ternary-color);
        }
        
        .grid-item div.trikot p {
            position: relative;
            text-align: center;
            width: 60px;
            top: 10px;
            color: var(--header-font-color);
            font-size: large;
        }
        
        .grid-item div.trikot {
            position: relative;
            top: -15px;
            left: 440px;
            margin-right: 15px;
            background-image: url("../Images/milan/trikot.png");
            background-repeat: no-repeat;
            width: 60px;
            height: 60px;
        }`;

        this.appendChild(item);
        this.appendChild(style);
    }
}

customElements.define("kader-group", KaderGroup);
customElements.define("kader-player", KaderPlayer);