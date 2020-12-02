import { 
    faunaUrl, 
    postEditField, 
    userSuggestion, 
    gifButton, 
    selectHashtag, 
    selectGIFImage,
    postButton, 
    sentPost,
    searchGIF} from "../stuff/dataSelectors"

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

    constructor() {
        this.url = faunaUrl()
        this.edit_field = postEditField()
        this.suggestion = userSuggestion()
        this.gif_button = gifButton()
        this.search_gif = searchGIF()
        this.gif = selectGIFImage()
        this.post = postButton()
    }

    public async openAntarticFaunaChannel(): Promise <void> {
        await t.navigateTo(faunaUrl())
                .expect(Selector('h1').withText('Fauna in Antarctica').visible).ok()
    }

    public async writePostToR2D2(text): Promise <void> {
        console.log('Text: '+text)
        await t.typeText(postEditField(),'@R2D2').pressKey('enter')
            .click(userSuggestion())
            .typeText(postEditField(),text).pressKey('enter')
            .click(gifButton())
            .expect(searchGIF().visible).ok()
            .click(selectGIFImage())
            .click(postButton())
            .expect(sentPost(text).visible).ok()
    }
}