import { t } from "testcafe"
import { Fauna } from "../page-models/channelFauna"

const fauna = new Fauna()

export const createPostToR2D2 = async (text: string): Promise<void> => {
    await fauna.openAntarticFaunaChannel()
    await fauna.writePostToR2D2(text)
}