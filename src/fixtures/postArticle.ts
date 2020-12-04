import { createPostAs3CPO, 
    openPostViaEmailAsR2D2, 
    getNotifiedOfPostAsR2D2  } from '../tests/faunaTests'

const faker = require('faker')

fixture `Publishing Posts In A Happeo Channel`
    .beforeEach(async t  => {
        var testText: string = faker.name.firstName();
        t.ctx.currentTestId = testText.toLowerCase();
    })


    test('Multi-user E2E : Write Post and React To Post', async t => {
        await createPostAs3CPO(t.ctx.currentTestId)
        await getNotifiedOfPostAsR2D2 (t.ctx.currentTestId)
        await openPostViaEmailAsR2D2(t.ctx.currentTestId)
    })
