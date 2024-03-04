import { Page, Locator, expect } from '@playwright/test';
import { timeStamp } from 'console';
import exp from 'constants';
import { randomUUID } from 'crypto';

export class PageObjectModels {
    private page: Page;
    private menubutton: Locator;
    private whatweoffer: Locator;
    private acceptCookies: Locator;

    constructor(page: Page){
        this.page = page;

        this.acceptCookies = this.page.getByLabel('Accepter alle', {exact: true});
        this.menubutton = this.page.getByText('Menu', {exact: true});
        this.whatweoffer = this.page.getByRole('button', {name: 'Hvad vi tilbyder'});
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
        var UUID = randomUUID();
        await this.page.screenshot({path: './Screenshots/screenshot_'+ UUID +'.png', fullPage: true});
    }
    
};