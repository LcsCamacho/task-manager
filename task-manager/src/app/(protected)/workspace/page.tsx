import { getUserWorkspaces } from "@/app/data/workspace/get-user-workspaces"
import { NextPage } from "next"

const Page:NextPage = async () => {
    const {data} = await getUserWorkspaces()

    if(!data) return <></>
    if(data.onboardingCompleted)
    return <></>
}

export default Page