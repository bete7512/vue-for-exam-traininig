import trying from "../database/checkquery/findeuser"
const signup = async (req: any, res: any) => {
    console.log("bhcozxhnpiojpos");
    const { username, password } = req.body.input
    console.log(req.body);
    console.log(username);
    await console.log(trying(username))
    return res.status(200).json({
        token: 'hero of the century'
    })
}
export default signup