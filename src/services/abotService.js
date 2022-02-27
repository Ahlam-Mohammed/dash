const aboutModel = require('../model/about');

exports.getActive =  (res ,cb) => {

    aboutModel.find({is_active: 1})

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

    const { about_id } = id;

    await aboutModel.updateOne({ _id: about_id }, { is_active: 0 });

}

exports.create = async (data , file) => {

    const { d_name, p_name, short_desc, desc} = data;
    const img = file['img'][0].filename;
    const cv  = file['cv'][0].filename;

    const about = new aboutModel({
        displayName: d_name,
        professionalName: p_name,
        shortDescription: short_desc,
        description: desc,
        img: img,
        cv:cv
    });

    await aboutModel.create(about, (error, data)=>{
        if(error) console.log(error.message);
        else{
            console.log(data);
            console.log("data inserted successful");
        }
    })

    // await aboutModel.insertMany([{ d_name, p_name, short_desc, desc, img, cv}]);
}

exports.update = async (data) => {

    const {about_id, d_name, p_name, short_desc, desc} = data;

    await aboutModel.updateOne({ _id: about_id }, {$set:{ displayName: d_name,
        professionalName: p_name,
        shortDescription: short_desc,
        description: desc}})
}
