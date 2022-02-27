const aboutService = require('../services/abotService');

exports.getActive = (req, res) => {

    try {
        console.log(aboutService.getActive(res ,(data) => {

            if(!data) {
                console.log("err.message");
            } 
            else {
                console.log(data.img)
                res.render('page/about', {about: data});
            }
        }));
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

exports.create = (req ,res) => {
    
    try {
        aboutService.create(req.body , req.files);
        res.redirect('/about');
    } 
    catch (err) {
        console.log(err.message);
    }    
}

exports.deleted =  (req, res) => {

    try {
        aboutService.deleted(req.body);
        res.redirect('/about');
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

exports.update = (req, res) => {

    try {
        aboutService.update(req.body);
        res.redirect('/about');
    } 
    
    catch (error) {
        console.log(error.message);
    }
}
