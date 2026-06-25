
export default class HomePageComponents {

    constructor(page){
        this.page = page
        this.sortMenuButton = page.locator('[data-test="sort"]')
    }
    sort(selected) {
        const buttons = {
            nameAZ : '',
            nameZA : '',
            priceHL : 'price,desc',
            priceLJ : '',
            COratingAE : '',
            COratingEA: ''
        }
        return buttons[selected];
    }
};