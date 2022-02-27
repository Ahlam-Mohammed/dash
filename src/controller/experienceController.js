const experienceService = require('../services/experienceService');

exports.getActive = (req, res) => {

    try {
        console.log(experienceService.getActive(res ,(data) => {

            if(!data) {
                console.log("err.message");
            } 
            else {
                // console.log(data.img)
                res.render('page/exp', {exp: data});
            }
        }));
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

exports.create = (req ,res) => {
    
    try {
        experienceService.create(req.body , req.files);
        res.redirect('/exp');
    } 
    catch (err) {
        console.log(err.message);
    }    
}

exports.deleted =  (req, res) => {

    try {
        experienceService.deleted(req.body);
        res.redirect('/exp');
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

// exports.update = (req, res) => {

//     try {
//         aboutService.update(req.body);
//         res.redirect('/about');
//     } 
    
//     catch (error) {
//         console.log(error.message);
//     }
// }
