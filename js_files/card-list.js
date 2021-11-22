export default class CardsList {
    constructor ({data = [], Component = {}}) {
        this.data = data;
        this.Component = Component;

        this.render();

    }

    // Темплейт
    get getTemplate () {
        return `
        <div class="festivals">
        </div>
      `;
    }

    getChildComponents (wrapper, cardsData) {
        if (cardsData.length < 1) {
            const noProducts = document.createElement("h2");
            noProducts.classList.add("product-wrapper");
            noProducts.innerText = "No products found";
            wrapper.append(noProducts);
        } else {
            cardsData.forEach((item) => {
                const { element } = new this.Component(item);

                if (element) {
                    wrapper.append(element);
                }
            });
        }
    }


    render () {
        const listWrapper = document.createElement('div'); // Створюємо простий div
        listWrapper.innerHTML = this.getTemplate; // Закидаємо в нього html з фунції вище
        this.element = listWrapper.firstElementChild;
        this.getChildComponents(this.element, this.data); // Закидуємо дані з масиву data, як в кожен клас Card

    }

    remove () {
        if(this.element) {
            this.element.remove();
        }
    }

    destroy () {
        this.remove();
        this.element = null;
    }

    update (data = []) {
        if (!this.element) {
            return;
        }

        this.element.innerHTML = "";
        this.data = data;

        this.getChildComponents(this.element, this.data);
    }

}
