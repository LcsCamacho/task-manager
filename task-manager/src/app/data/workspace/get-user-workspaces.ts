import { db } from "@/lib/prisma"
import { userRequired } from "../user/is-user-authenticated"

export const getUserWorkspaces = async () => {
    try {
        const {user} =await userRequired()

        const workspaces = await db.user.findUnique({
            where: {id:user?.id},
            include: {
                workspaces: {
                    select: {
                        id:true,
                        userId:true,
                        workspaceId:true,
                        accessLevel:true,
                        createdAt:true,
                        workspace: {
                            select: {name:true}
                        }
                    }
                }
            }
        })
    } catch (error) {
        console.log(error)
        return undefined
    }

}