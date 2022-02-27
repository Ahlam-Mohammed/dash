const skillModel = require('../model/skills');

exports.getActive =  (res ,cb) => {

    skillModel.find({is_active: 1})

        .then(data => {
            if(!data){
                res.status(404);
            }else{
                cb(data);
            }
        })

        .catch(err =>{
            res.status(500).send(err.message);
        });   
}

exports.deleted = async (id) => {

    const { skill_id } = id;

    await skillModel.updateOne({ _id: skill_id }, { is_active: 0 });

}

exports.create = async (data) => {

    const { name, ratio } = data;

    await skillModel.insertMany([{ name, ratio }]);
}

exports.update = async (data) => {

    const { skill_id , name, ratio } = data;

    await skillModel.updateOne({ _id: skill_id }, { name, ratio });
}
