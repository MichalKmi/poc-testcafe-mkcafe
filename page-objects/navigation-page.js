import {t, Selector} from 'testcafe';

class NavigationPage {

    get mainMenuLink() {
        return Selector('.h-full > ul li');
    };

    get expandedLeftListSelector(){
        return Selector('.show-me > div > div.category-list-wrap');
    };

    async checkMainLinkMatchesExpected(linkNumber,dataFromJsonForNthLink) {
        await this.checkLinksClickable(linkNumber)
        await this.checkTextMatchesExpected(linkNumber,dataFromJsonForNthLink)
    };

    async checkLinksClickable(linkNumber) {
        await t
            .click(this.mainMenuLink.nth(linkNumber - 1));
    };

    async checkTextMatchesExpected(linkNumber,dataFromJsonForNthLink) {
        await t
            .expect(this.mainMenuLink.nth(linkNumber - 1).innerText).eql(dataFromJsonForNthLink)
    };

    async hoverOverElement(linkNumber) {
        await t
            .hover(this.mainMenuLink.nth(linkNumber - 1))
            .expect(this.expandedLeftListSelector.visible).ok();
    };

    async checkContentOnLeftExpandableMenu(expectedDataFromJson) {
        await t
            .expect(this.expandedLeftListSelector.innerText).eql(expectedDataFromJson)
    };
}

export default new NavigationPage();
