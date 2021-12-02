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
        this.id = id;
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
}

