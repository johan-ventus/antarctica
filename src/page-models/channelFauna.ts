import { 
    faunaUrl, 
    postEditField, 
    userSuggestion, 
    gifButton, 
    selectHashtag, 
    selectGIFImage,
    postButton, 
    sentPost,
    searchGIF,
    openNotificationBar,
    notificationSentBy3CPO,
    notificationValidated,
    validatePostContent} from "../stuff/dataSelectors"

import { Selector, t } from 'testcafe'

export class Fauna {
    private url: string
    private edit_field: Selector
    private suggestion: Selector
    private gif_button: Selector
    private hashtag: Selector
    private gif: Selector
    private search_gif: Selector
    private post: Selector
    private sent_post: Selector
    private notifications_buttons: Selector
    private notification: Selector
    private opened_notification: Selector
    private validate: Selector

    constructor() {
        this.url = faunaUrl()
        this.edit_field = postEditField()
        this.suggestion = userSuggestion()
        this.gif_button = gifButton()
        this.search_gif = searchGIF()
        this.gif = selectGIFImage()
        this.post = postButton()
        this.notifications_buttons = openNotificationBar()
        this.notification = notificationSentBy3CPO()
        this.validate = validatePostContent()
    }

    public async openAntarticFaunaChannel(): Promise <void> {
        await t.navigateTo(faunaUrl())
                .expect(Selector('h1').withText('Fauna in Antarctica').visible).ok()

    }

    public async openNotifications(): Promise <void> {
        await t.click(openNotificationBar())
    }

    public async writePostToR2D2(text): Promise <void> {
   
        await t.typeText(postEditField(),'@R2D2').pressKey('enter')
            .click(userSuggestion())
            .typeText(postEditField(),text).pressKey('enter')
            .click(gifButton())
            .expect(searchGIF().visible).ok()
            .click(selectGIFImage())
            .click(postButton())
            .expect(sentPost(text).visible).ok()
    }

    public async readPostFrom3CPO(text): Promise <void> {  
            await t.click(notificationSentBy3CPO())
                .click(notificationValidated())
                .expect(notificationValidated().visible).ok()
                .expect(this.validate.innerText).contains(text)
    }
}