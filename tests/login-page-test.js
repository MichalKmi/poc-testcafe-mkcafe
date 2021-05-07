import LoginPage from '../page-objects/login-page';
import * as dotEnv from 'dotenv';
dotEnv.config();

fixture('MkCafe Login')
    .page(process.env.BASE_URL)

test('Simple login test', async t => {
    await LoginPage.loginToPage(process.env.USER_NAME, process.env.USER_PASSWORD)
    await LoginPage.checkLoggedDashboardExist()
    await LoginPage.logoutFromPage();
});
