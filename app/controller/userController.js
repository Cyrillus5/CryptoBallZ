const Users = require('../models/users');
const bcrypt = require('bcrypt');

const userController = {
    // Show login form
    showLogin(req, res){
        if(req.session.user){
            res.render('admin')
        }
        res.render('login');        
    },
    // Connect
    async doLogin(req, res){
        const email = req.body.email;
        console.log(email);
        const getAdmin = await Users.findOne({
            where : {
                email : email
            }
        });
        console.log(getAdmin);
        if(getAdmin){
            const match = await bcrypt.compare(req.body.password, getAdmin.password);

            if(match) {
            req.session.user = getAdmin;
            delete req.session.password;
            res.redirect('/')
            } else {
                res.redirect('/login?error=wrongUserOrPwd');
            }
            
        } else {
            res.redirect('/login?error=wrongUserOrPwd');
        };
        
    }
};
module.exports = userController;