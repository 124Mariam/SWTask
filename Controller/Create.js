import doctorModel from "../Database/doctorModel.js";
import alert from "alert";


export const index = async (request, response) => {

    const doctor = await doctorModel.find().lean();

    response.render('doctor', { layout: false, doctor })
}
    ;
export const add = (request, response) => {
    response.render("addDoctor", { layout: false })
};

export const store = async (request, response) => {

    const { Doc_code, Doc_name, Doc_email, Doc_password } = request.body;

if( Doc_code==""|| Doc_name==""|| Doc_email==""|| Doc_password==""){

    alert("Please Enter The Whole Data ");
} else{
    await doctorModel.create({
        Doc_code,
        Doc_name,
        Doc_email,
        Doc_password
    });

    response.redirect("/doctor");}
};


export const edit = async (request, response) => {
    const _id = request.params;
    const doctor = await doctorModel.find().lean();
    const editdoctor = await doctorModel.findById(_id).lean();
    response.render('edit', { layout: false, doctor, editDoc: editdoctor });
};

export const update = async (request, response) => {

    const { Doc_code, Doc_name, Doc_email, Doc_password } = request.body;


    if( Doc_code==""|| Doc_name==""|| Doc_email==""|| Doc_password==""){

        alert("Please Enter The Whole Data ");
    } else{

    const { _id } = request.params;

    await doctorModel.findByIdAndUpdate(_id, { $set: { Doc_code, Doc_name, Doc_email, Doc_password } })
    response.redirect('/doctor')
}

};
export const deleteOne = async (request, response) => {
    const _id = request.params;
    await doctorModel.findByIdAndDelete(_id).lean();
    return response.redirect("/doctor");
}