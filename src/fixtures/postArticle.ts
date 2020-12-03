import { t } from 'testcafe'
import { flamboyant_robot, xwing_buddy } from '../stuff/userRoles'
import { createPostToR2D2, readPostAs3CPO } from '../tests/postInFaunaChannel'

const loginDetails = require('../../credentials.json')

const faker = require('faker');

fixture('Publish A Post In Antarcica Fauna Channel')
    .before( async t => {
        var a: string = faker.name.firstName()
        loginDetails.testText = a.toLowerCase()
        //const faker = require('faker')
        //var a: string = faker.name.firstName()
        //console.log(a.toLowerCase)
        //t.ctx.testText = a.toLowerCase
        //await t.ctx.testText = faker.name.firstName()
    })
    //.beforeEach(async t => {
        //t.ctx.testText = faker.name.firstName()
        //var a: string = faker.name.firstName()
        //t.ctx.testText = a.toLowerCase()
    //})

test('Publish Post As 3CPO', async t => {
    //console.log(t.ctx.testText)
    console.log(loginDetails.testText)
    await t.useRole(flamboyant_robot)
    await createPostToR2D2(loginDetails.testText)
})

test('React To Channel Notification As R2D2', async t => {
    await t.useRole(xwing_buddy)
    await readPostAs3CPO(loginDetails.testText)
});

test('React To Notification Email As R2D2', async () => {
    await t.useRole(xwing_buddy)
    await t.navigateTo('https://gmail.com').wait(10000)
});

