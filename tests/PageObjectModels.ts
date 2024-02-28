import { Page, Locator } from '@playwright/test';

export class PageObjectModels {
    private page: Page;
    private menubutton: Locator;
    private whatweoffer: Locator;
    private acceptCookies: Locator;

    constructor(page: Page){
        this.page = page;
        this.acceptCookies = this.page.locator('button', { hasText: 'Accepter alle'} );
        this.menubutton = this.page.locator('button', { hasText: 'Menu}'});
        this.whatweoffer = this.page.locator('button', { hasText: 'Hvad vi tilbyder}'});
    }

    async navigate(){
        await this.page.goto('https://prod.knowit.dk/');
    }
    async clickacceptCookies(){
        await this.acceptCookies.click();
    }
    async clickmenubutton(){
        await this.menubutton.click();
    }
    async clickwhatweoffer(){
        await this.whatweoffer.click();
    }

};