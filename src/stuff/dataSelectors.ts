import { Selector } from 'testcafe'

const loginDetails = require('../../credentials.json')

export const faunaUrl = (): string => {
    //return `${loginDetails.url}/channels/19038209/FaunaInAntarctica`
    return 'https://staging.unvrs.io/channels/19038209/FaunaInAntarctica'
}

export const postEditField = (): Selector => {
    return Selector('div').withAttribute('contenteditable','true')
}

export const userSuggestion = (): Selector => {
    return Selector('div').withAttribute('class','user-mention__name')
}

export const gifButton = (): Selector => {
    return Selector('button').withAttribute('aria-label','GIF')
}

export const selectHashtag = (hashtag: string): Selector => {
    return Selector('p', { timeout : 5000 }).withText('#automation_'+hashtag)
}

export const searchGIF = (): Selector => {
    return Selector('input', { timeout : 3000 }).withAttribute('aria-label','Search')
}

export const selectGIFImage = (): Selector => {
    return Selector('div', { timeout : 3000 }).withAttribute('data-testid','giphy-wrapper').child('div').child('a').nth(1)
}

export const postButton = (): Selector => {
    return Selector('button').withAttribute('aria-label','Post')
}

export const sentPost = (value: string): Selector => {
    return Selector('p').withAttribute('data-tip','true').withText('a few seconds ago')
}