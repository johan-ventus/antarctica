import { Selector, t } from 'testcafe'

import { notificationSentBy3CPO, selectHashtag } from '../stuff/dataSelectors'

const loginDetails = require('../../credentials.json')

export class Fauna {
    private url: string
    private edit_field: Selector
    private suggestion: Selector
    private gif_button: Selector
    private gif: Selector
    private search_gif: Selector
    private post: Selector
    private sent_post: Selector
    private notifications_buttons: Selector
    private notification: Selector
    private opened_notification: Selector
    private validate: Selector

    constructor() {
        this.url =                      loginDetails.url_base
        this.edit_field =               Selector('div').withAttribute('contenteditable','true')
        this.suggestion =               Selector('div').withAttribute('class','user-mention__name')
        this.gif_button =               Selector('button').withAttribute('aria-label','GIF')
        this.search_gif =               Selector('input', { timeout : 3000 }).withAttribute('aria-label','Search')
        this.gif =                      Selector('div', { timeout : 3000 }).withAttribute('data-testid','giphy-wrapper').child('div').nth(0)
        this.post =                     Selector('button').withAttribute('aria-label','Post')
        this.sent_post =                Selector('p').withAttribute('data-tip','true').withText('a few seconds ago').nth(0)
        this.notifications_buttons =    Selector('div').withAttribute('data-component-name','Notifications').child('button')
        this.notification =             notificationSentBy3CPO()
        this.validate =                 Selector('a').withAttribute('class','mention').withAttribute('data-user-id').parent('p')
    }

    public async openAntarticFaunaChannel(): Promise <void> {
        await t.navigateTo(this.url)
                .expect(Selector('h1').withText('Fauna in Antarctica').visible).ok()

    }

    public async openNotifications(): Promise <void> {
        await t.click(this.notifications_buttons)
            .click(this.notification)
    }

    public async writePostToR2D2(text): Promise <void> {
   
        await t
            .typeText(this.edit_field,text+' ')
            .typeText(this.edit_field,'@R2D2')
            .click(this.suggestion)
            // .click(selectHashtag(text))
            // Removing, because I didn't find a reliable way to cause rendering of the hashtag suggestions with Testcafé.
            .click(this.gif_button)
            .expect(this.search_gif.visible).ok().wait(500)
            .click(this.gif)
            .click(this.post)
            .expect(this.sent_post.visible).ok( { timeout : 20000})
    }

    public async readPostFrom3CPO(text): Promise <void> {  
            await t
                .expect(this.validate.visible).ok()
                .expect(this.validate.innerText).contains(text)
    }
}