import {test, expect,Locator} from '@playwright/test';

export class CreatePage {

    readonly page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly userName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly passwordconfirm: Locator;
    readonly agreeCheck1: Locator;
    readonly agreeCheck2: Locator;
    readonly createAccount: Locator;

    constructor(page:any) {
        this.page = page;
        this.firstName = page.getByRole("input", {name: "firstName"});
        this.lastName = page.getByRole("input", {name: "lastName"});
        this.userName = page.getByRole("input", {name: "username"});
        this.email = page.getByRole("input", {name: "emailAddress"});
        this.password = page.getByRole("input", {type: "password"});
        this.passwordconfirm = page.getByRole("input", {name: "confirmPassword"});
        this.agreeCheck1 = page.locator("mantine-r69waeh2g");
        this.agreeCheck2 = page.locator("mantine-9uvn03r3f");
        this.createAccount = page.getByTestId("button-default");
    }

    async visitPage(){
        await this.page.goto('https://app.playonereal.com/agent-signup');
        await expect(this.page).toHaveURL("**/agent-signup");
        await this.page.waitForLoadState('networkidle');
    }

    async createAccountDetails(){
        await this.firstName.fill("Shashidhar");
        await this.lastName.fill("B");
        await this.userName.fill("Shashi123");
        await this.email.fill("iamshashidhar.b@gmail.com");
        await this.password.fill("Shashi@12345");
        await this.passwordconfirm.fill("Shashi@12345");
        await this.agreeCheck1.check();
        await this.agreeCheck2.check();
        await this.createAccount.click();
    }

}

module.exports = {CreatePage};
