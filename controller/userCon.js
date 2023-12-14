const User = require('../model/user')

const getdata = async(req,res) => {
    let dataid;
    try{
        dataid=await User.find()
    }
    catch(err){
        console.log(err)

    }
    if(!dataid){
        return res.status(404).json({message: "Data is not found"})
    }
    return res.status(200).json({dataid})



}

const postdata = async(req,res) => {
    const {fname,lname,email} = req.body;
    let postid;
    try{
        postid = new User({
            fname,lname,email
        })
       postid = await postid.save()
    }
    catch(err){
        console.log(err)

    }
    if(!postid){
        return res.status(404).json({message: "Data is not found"})
    }
    return res.status(200).json({postid})



}
exports.getdata=getdata;
exports.postdata = postdata;