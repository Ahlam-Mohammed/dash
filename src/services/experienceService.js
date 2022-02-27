const expModel = require('../model/experience');

exports.getActive =  (res ,cb) => {

    expModel.find({is_active: 1})

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

    const { exp_id } = id;

    await expModel.updateOne({ _id: exp_id }, { is_active: 0 });

}

exports.create = async (data , file) => {

    const { job, job_title, date, description} = data;

    const exp = new expModel({
        job: job,
        job_title: job_title,
        date: date,
        description: description,
    });

    await expModel.create(exp, (error, data)=>{
        if(error) console.log(error.message);
        else{
            console.log(data);
            console.log("data inserted successful");
        }
    })

}

// exports.update = async (data) => {

//     const {about_id, d_name, p_name, short_desc, desc} = data;

//     await aboutModel.updateOne({ _id: about_id }, {$set:{ displayName: d_name,
//         professionalName: p_name,
//         shortDescription: short_desc,
//         description: desc}})
// }
