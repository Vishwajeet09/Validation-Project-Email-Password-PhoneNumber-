import userModel from "../models/userModel.js"

class userController{
    static home = (req,res) => {
        res.render("index")
    }

    static userSignUp = (req,res) => {
        res.render("signup")
    }

    static createUserDoc = async(req,res) => {
        // console.log(req.body);
        try{
            const {email, phoneNumber, password} = req.body

            const doc = new userModel({
                email,
                phoneNumber,
                password
            })
            // Saving userDoc in db
            await doc.save()

            res.redirect("/login");
    }
    catch (error) {
        res.render('error.ejs', {info:error.message})
    }
    }

    static userLogIn = (req,res) => {
        res.render("login")
    }

    static verifyUser = async(req,res) => {
        try {
            // destructuring the req.body:
            // console.log(req.body);
            const {email, password} = req.body

            //  findingOut email from db:
            const user = await userModel.findOne({email:email})

            //  Handling null value in result (it come when new user direct try to login without signup):
            if (user != null){
                if (user.email == email && user.password == password){
                
                res.render("userPage")
                
                }
                else{
                        res.send("Email or Password is Wrong")
                    }
            }
            else{
                res.send("You are not a register User")
            }
        } catch (error) {
            console.log(error.message);
        }
        
    }
}

export default userController