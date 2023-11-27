const User = require('../schema/user-schema.js')

const addUser = async (req,res) => {
    const user = req.body ;

    const newUser = new User(user) ;

    try{
await newUser.save() ;
res.status(201).json(newUser) ;
    }catch(error){
  res.status(409).json({message : error.message}) ;
    }
}


module.exports = addUser ;