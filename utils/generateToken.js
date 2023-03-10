import JWT from "jsonwebtoken";

const generateToken = async(id)=> {
    // console.log("process env",process.env.MAILJET_API_SECRET,)
    return await JWT.sign({id}, process.env.JWT_TOKEN, {expiresIn:'2hrs'})
}

export default generateToken