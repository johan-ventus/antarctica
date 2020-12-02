import {  t, Selector, Role } from 'testcafe'

const loginDetails = require('../../credentials.json')

export const flamboyant_robot  = Role(loginDetails.url, async t => {
    await t
        .click('#signin-btn')
        .typeText('#identifierId',loginDetails._3cpo_username)
        .click('#identifierNext')
        .typeText(Selector('input').withAttribute('type','password'), loginDetails._3cpo_password)
        .click('#passwordNext')
})

export const xwing_buddy = Role(loginDetails.url, async t => {
    await t
        .click('#signin-btn')
        .typeText('#identifierId', loginDetails.r2d2_username)
        .click('#identifierNext')
        .typeText(Selector('input').withAttribute('type','password'), loginDetails.r2d2_password)
        .click('#passwordNext')
})