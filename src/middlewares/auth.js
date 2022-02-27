// Firebase Connection
const admin = require('../config/firebase');

function auth (req, res, next) 
{
    const sessionCookie = req.cookies.session || "";

    admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then((userData) => {
            console.log("Logged in:", userData.email)
            next();
        })
        .catch((error) => {
            res.redirect("/login");
        });
}

function isAdmin (req, res, next) 
{
    const sessionCookie = req.cookies.session || "";

    admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then((userData) => {
            if (userData.admin === true)
            {
                req.authId = userData.uid;
                console.log("Admin is :", userData.email)
                next();
            }
        })
        .catch((error) => {
            res.redirect("/");
        });
}



module.exports = {auth, isAdmin}