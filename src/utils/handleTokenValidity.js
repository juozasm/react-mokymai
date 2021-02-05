import getTimeStamp from "./getTimestamp";
import jwt from 'jsonwebtoken'

export default function handleTokenValidity(token) {
    if(!token) return false
    const { exp } =  jwt.decode(token)
    const currentTimestamp = getTimeStamp()
    return exp > currentTimestamp
}