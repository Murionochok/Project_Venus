export default class Card {
    element;

    constructor({
        id = '',
        title = '',
        description = '',
        location = '',
        price = 0,
        startDate = new Date(),
        endDate = new Date(),
        hasTentPlace = false,
        imageLink = '',
        LinkToOffSite = ''
    } = {}) {
        this.id= id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.hasTentPlace = hasTentPlace;
        this.imageLink = imageLink;
        this.LinkToOffSite = LinkToOffSite;

        this.render();
    }

getHTMLTemplate(){
    return `
        <div class="festivals__window">
            ${this.title}
            <div class="festivals-descr">
                <div class="festivals__window-box">
                    <div class="festivals__window-descr">${this.description}</div>
                <button class="festivals__window-button">Details</button>
                </div>
            </div>
        </div>
    `
}

    render() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.getHTMLTemplate();
        this.element = wrapper.firstElementChild;
    }

    destroy() {
        if (this.element) {
            this.element.remove();
        }
        this.element = null;
    }
}

