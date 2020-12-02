import { t } from 'testcafe';
import { flamboyant_robot, xwing_buddy } from '../stuff/userRoles'

fixture `Publish A Post In Antarcica Fauna Channel`

test('Publish Post As 3CPO', async t => {
    await t.useRole(flamboyant_robot)
    await t.navigateTo('https://staging.unvrs.io/').wait(10000)
});

test('React To Channel Notification As R2D2', async t => {
    await t.useRole(xwing_buddy)
    await t.navigateTo('https://staging.unvrs.io/').wait(10000)
});

test('React To Notification Email As R2D2', async () => {
    await t.useRole(xwing_buddy)
    await t.navigateTo('https://gmail.com').wait(10000)
});