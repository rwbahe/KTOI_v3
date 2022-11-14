class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div id="footer-cont">
                    <div id="footer-info">
                        <p>&#169 2022 Kootenai Tribe of Idaho</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);