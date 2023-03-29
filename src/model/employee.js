const mongoose =require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
       
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            immutable: true,
            unique: true,
            required: true
        },
        employeeNumber: {
            type: "string",
            required: true
        },
        employeePosition:{ 
            type: String, 
            required: true,
            enum: ['Junior Developer', 'Senior Developer'],
            default: 'Junior Developer'
        },
        employeementDate: {
            type: String,
            required: true,
            default: Date.now()
        },
        salary:{
            type: Number,
            required: true,
        }
    },
        
    { timestamps: true }
);

module.exports  = mongoose.model('Employeee', employeeSchema);
