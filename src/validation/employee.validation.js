const joi = require('@hapi/joi');


const employeeValidation = (data) =>{
    const schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email:  joi.string().email().required(),
        employeeNumber: joi.string().required(),
        employeePostion: joi.string().required(),
        employeementDate: joi.string().required(),
        salary: joi.number().required()
      
    
    })

    return schema.validate(data)
}

module.exports.employeeValidation = employeeValidation