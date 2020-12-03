import { watchFile } from "fs"
import { t } from "testcafe"
import { Fauna } from "../page-models/channelFauna"
import { faunaUrl } from "../stuff/dataSelectors"

const fauna = new Fauna()

export const createPostToR2D2 = async (text: string): Promise<void> => {
    await fauna.openAntarticFaunaChannel()
    await fauna.writePostToR2D2(text)
}

export const readPostAs3CPO = async (text: string): Promise <void> => {
    await t.navigateTo(faunaUrl()) 
    await fauna.openNotifications()
    await fauna.readPostFrom3CPO(text)

}