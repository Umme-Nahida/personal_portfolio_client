import { authOptions } from "@/helpers/authInfo"
import { getServerSession } from "next-auth"


export const getUserSession = async()=> await getServerSession(authOptions)