import { Selector } from 'testcafe'

const loginDetails = require('../../credentials.json')

export const selectHashtag = (hashtag: string): Selector => {
    return Selector('p', { timeout : 5000 }).withText('#'+hashtag)
}

export const notificationSentBy3CPO = (): Selector => {
    return Selector('p').withAttribute('data-testid','timestamp').withText('a few seconds ago')

}

export const validatePostContent = (): Selector => {
    return Selector('a').withAttribute('class','mention').withAttribute('data-user-id').parent('p')
}

export const openEmailFrom3CPO = (email: string): Selector => {
    return Selector('b').withText(email)
}