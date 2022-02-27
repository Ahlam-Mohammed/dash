const express = require('express');
const route   = express.Router();

// Firebase Connection
const admin = require('../config/firebase');
const firebase = require('firebase/auth')

// middlewares
const authMiddleware   = require('../middlewares/auth');
const uploadMiddleware = require('../middlewares/upload');

// controller
const aboutController      = require('../controller/aboutController');
const skillController      = require('../controller/skillController');
const experienceController = require('../controller/experienceController')


// route.all('*', (req, res, next) => {
//   var token = req.csrfToken();
//   res.cookie('XSRF-TOKEN', token);
//   res.locals.csrfToken = token;
//   next();
// })

// route.get('/login', function (req, res) {
//   res.render("auth/login");
// });


// route.get("/index", authMiddleware.auth,async function (req, res) {
//   // await admin.auth().setCustomUserClaims('zHo5ztwJlQg0RGfYiYm17CGdDwh2', {admin: true});

//   res.render("index");
// });

route.get("/",  function (req, res) {
  res.render("index");
});

// route.post("/sessionLogin", (req, res) => {
//   const idToken = req.body.idToken.toString();

//   const expiresIn = 60 * 60 * 24 * 5 * 1000;

//   admin
//     .auth()
//     .createSessionCookie(idToken, { expiresIn })
//     .then(
//       (sessionCookie) => {
//         const options = { maxAge: expiresIn, httpOnly: true };
//         res.cookie("session", sessionCookie, options);
//         res.end(JSON.stringify({ status: "success" }));
//       },
//       (error) => {
//         res.status(401).send("UNAUTHORIZED REQUEST!");
//       }
//     );
// });

// route.get("/sessionLogout", (req, res) => {
//   res.clearCookie("session");
//   res.redirect("/login");
// });



route.get('/portfolio', (req, res) => {
  res.render('page/portfolio')
})

/**
 * About Router.
 */
route.get('/about', aboutController.getActive);
route.post('/about/create', uploadMiddleware.fields([{name: 'img'}, {name: 'cv'}]), aboutController.create);
route.post('/about/delete', aboutController.deleted);
route.post('/about/update', uploadMiddleware.fields([{name: 'img'}, {name: 'cv'}]),  aboutController.update);



/**
 * Skill Router.
 */
route.get('/skill', skillController.getActive);
route.post('/skill/create', skillController.create);
route.post('/skill/delete', skillController.deleted);
route.post('/skill/update', skillController.update);

/**
 * exp Router.
 */
route.get('/exp', experienceController.getActive);
route.post('/exp/create', experienceController.create);
route.post('/exp/delete', experienceController.deleted);
// route.post('/exp/update', experienceController.update);


module.exports = route;
