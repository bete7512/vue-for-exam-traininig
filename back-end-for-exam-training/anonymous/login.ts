import trying from "../database/checkquery/findeuser"
const login = async (req:any,res:any)=>{
     
    const {username,password} = req.body.input

    const data =  await trying({username});
   console.log(data)
    res.status(200).json({
        token:'hero of the century'
    })
}
export default login