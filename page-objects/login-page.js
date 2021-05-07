import {t, Selector} from 'testcafe';

class LoginPage {

    get loginExpandableLink() {
        return Selector('.items-center.text-1-2rem > div > div');
    };

    get signInButtonSelector() {
        return Selector('button').withText('Zaloguj się');
    };

    get emailInput() {
        return Selector('form > div:nth-child(1) > div > div.relative.base-input-wrap > input');
    };

    get passwordInput() {
        return Selector('form > div:nth-child(2) > div > div.relative.base-input-wrap > input');
    };

    get signOutLinkSelector() {
        return Selector('.py-2.transition-3').withText('Wyloguj');
    };

    get loginDashboardLink() {
        return Selector('h1').withText('MÓJ PANEL');
    };

    get accountPanelLink() {
        return Selector('li').withText('Panel konta');
    };

    async checkLoggedDashboardExist() {
        await t
            .click(this.loginExpandableLink)
            .click(this.accountPanelLink)
            .expect(this.loginDashboardLink.visible).ok();
    };

    async loginToPage(userEmail, password) {
        await t
            .click(this.loginExpandableLink)
            .typeText(this.emailInput, userEmail)
            .typeText(this.passwordInput, password)
            .click(this.signInButtonSelector);
    };

    async logoutFromPage() {
        await t
            .click(this.loginExpandableLink)
            .click(this.signOutLinkSelector)
            .click(this.loginExpandableLink)
            .expect(this.signInButtonSelector.visible).ok()
    };
}

export default new LoginPage();
