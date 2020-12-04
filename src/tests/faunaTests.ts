import { t } from "testcafe"
import { Fauna } from "../page-models/channelFauna"
import { Gmail } from '../page-models/gmail'
import { flamboyant_robot, xwing_buddy } from "../stuff/userRoles"

const fauna = new Fauna()
const gmail = new Gmail()

export const createPostAs3CPO = async (text: string): Promise<void> => {
    await t.useRole(flamboyant_robot)
    await fauna.openAntarticFaunaChannel()
    await fauna.writePostToR2D2(text)
}

export const getNotifiedOfPostAsR2D2 = async (text: string): Promise <void> => {
    await t.useRole(xwing_buddy)
    await fauna.openNotifications()
    await fauna.readPostFrom3CPO(text)
}

export const openPostViaEmailAsR2D2 = async (text: string): Promise <void> => {
    await t.useRole(xwing_buddy)
    await gmail.openGmail()
    await gmail.openPostFrom3CPOViaGmail(text)
}
