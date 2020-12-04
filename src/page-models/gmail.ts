import { Selector, t } from "testcafe"
import { openEmailFrom3CPO } from "../stuff/dataSelectors"

export class Gmail {
    private gmail_url: string
    private refresh_button: Selector
    private open_post: Selector
    private happeo_post: Selector

    constructor() {
        this.gmail_url =        'https://gmail.com'
        this.refresh_button =   Selector('a').withAttribute('class','searchPageLink')
        this.open_post =        Selector('a').withText('Open post')
        this.happeo_post =      Selector('a').withAttribute('class','mention').withAttribute('data-user-id').parent('p')
    }


    public async openGmail(): Promise <void> {
        await t.navigateTo(this.gmail_url)
        // Gmail account is set as HTML mode by default
        //await t.click("input[value='Load basic HTML']")
    }

    public async openPostFrom3CPOViaGmail(text): Promise <void> {
    // following section will refresh the gmail HTML account and wait until the email arrived, max approx 50 seconds
        var refreshCounter: number = 10
        do {
            await t
            .click(this.refresh_button)
            .wait(5000)
            const element = openEmailFrom3CPO(text)
            refreshCounter--
        } while (await openEmailFrom3CPO(text).exists == false && refreshCounter != 0)

        await t.click(this.refresh_button)
            .click(openEmailFrom3CPO(text))
            .click(this.open_post)
            .expect(this.happeo_post.innerText).contains(text)
    }

    public async test(text: string): Promise <void> {
        do {
            await t
            .click(this.refresh_button)
            .wait(5000)
            const element = openEmailFrom3CPO(text)
        } while (await openEmailFrom3CPO(text).exists == false)

    }

}