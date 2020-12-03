import { t } from 'testcafe'
import { flamboyant_robot, xwing_buddy } from '../stuff/userRoles'
import { createPostToR2D2 } from '../tests/postInFaunaChannel'

const faker = require('faker');

fixture('Publish A Post In Antarcica Fauna Channel')
    .beforeEach(async t => {
        //t.ctx.testText = faker.name.firstName()
        var a: string = faker.name.firstName()
        t.ctx.testText = a.toLowerCase()
    })

test('Publish Post As 3CPO', async t => {
    console.log(t.ctx.testText)
    await t.useRole(flamboyant_robot)
    await createPostToR2D2(t.ctx.testText)
})

test('React To Channel Notification As R2D2', async t => {
    await t.useRole(xwing_buddy)
    await t.navigateTo('https://staging.unvrs.io/').wait(10000)
});

test('React To Notification Email As R2D2', async () => {
    await t.useRole(xwing_buddy)
    await t.navigateTo('https://gmail.com').wait(10000)
});

