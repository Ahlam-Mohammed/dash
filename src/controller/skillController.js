const skillService = require('../services/skillService');

exports.getActive = (req, res) => {

    try {
        console.log(skillService.getActive(res ,(data) => {

            if(!data) {
                console.log("err.message");
            } 
            else {
                res.render('page/skills', {skills: data});
            }
        }));
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

exports.create = (req ,res) => {
    
    const { data } = req.body;

    try {
        skillService.create(req.body);
        res.redirect('/skill');
    } 
    catch (err) {
        console.log(err.message);
    }    
}

exports.deleted =  (req, res) => {

    try {
        skillService.deleted(req.body);
        res.redirect('/skill');
    } 
    
    catch (error) {
        console.log(error.message);
    }
}

exports.update = (req, res) => {

    try {
        skillService.update(req.body);
        res.redirect('/skill');
    } 
    
    catch (error) {
        console.log(error.message);
    }
}
