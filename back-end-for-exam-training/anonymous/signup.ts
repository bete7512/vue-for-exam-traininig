import trying from "../database/checkquery/findeuser"
const signup = async (req: any, res: any) => {
    const { username, password } = req.body.input.objects
    console.log(req.body.input.objects);
    console.log(username);
   const data =  await trying({username});
//    console.log(data)
   return res.status(200).json({
        success: 'hero of the century'
    })
}
export default signup