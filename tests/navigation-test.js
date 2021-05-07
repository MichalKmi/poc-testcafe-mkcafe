import Navigation from '../page-objects/navigation-page';
import * as dotEnv from 'dotenv';

dotEnv.config();
// const dataSet = require('../test-data/data.json');
const dataSet = require('../test-data/data-wrong.json');


fixture('MkCafe Navigation')
    .page(process.env.BASE_URL)

dataSet.forEach(data => {
    test('Check Main Links Matches Expected', async t => {
        await Navigation.checkMainLinkMatchesExpected(1, data.menu_1.title);
        await Navigation.checkMainLinkMatchesExpected(2, data.menu_2.title);
        await Navigation.checkMainLinkMatchesExpected(3, data.menu_3.title);
        await Navigation.checkMainLinkMatchesExpected(4, data.menu_4.title);
        await Navigation.checkMainLinkMatchesExpected(5, data.menu_5.title);
        await Navigation.checkMainLinkMatchesExpected(6, data.menu_6.title);
    });
});
dataSet.forEach(data => {
    test('Hover Over related Links and Check Results', async t => {
        await Navigation.hoverOverElement(1);
        await Navigation.checkContentOnLeftExpandableMenu(data.menu_1.expandedLeftListInner);
        await Navigation.hoverOverElement(2);
        await Navigation.checkContentOnLeftExpandableMenu(data.menu_2.expandedLeftListInner);
        await Navigation.hoverOverElement(3);
        await Navigation.checkContentOnLeftExpandableMenu(data.menu_3.expandedLeftListInner);
    });
});

