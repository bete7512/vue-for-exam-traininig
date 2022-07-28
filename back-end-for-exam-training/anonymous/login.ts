import user from "../database/checkquery/findeuser"
const login = async (req:any,res:any)=>{
    console.log("bhcozxhnpiojpos");
    
    const {username,password} = req.body.input

    
    // const checkuser =user(req.body)
    // console.log(checkuser)
    res.status(200).json({
        token:'hero of the century'
    })
}
export default login