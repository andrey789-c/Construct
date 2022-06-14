export class Render {
    constructor(elem, htmlContent) {
        this.elem = document.querySelector(elem)
        this.htmlContent = htmlContent
    }

    render() {
        this.elem.innerHTML = this.htmlContent
    }
}