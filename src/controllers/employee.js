const Employee = require('../model/employee');
const {employeeValidation} =  require('../validation/employee.validation');

//getting all employee
const getAllEmployees  = async(req, res)=>{
    try{
        const employee = await Employee.find();
        return res.json(employee);
    }catch(err){
        res.json( err);
    }
    
};

//getting a specific By email
const getEmployee = async(req, res)=>{
    try{
        const employee = await Employee.findOne({email:req.body.email});
        res.json(employee);
    }catch(err){
        res.json({msg: err})
    }
};

//deleting employee
const deleteEmployee =  async(req, res)=>{
    try{
        const employeeRemove = await Employee.deleteOne({
            _id: req.params.id
        });
        if(employeeRemove.deletedCount > 0){
            res.json({
                message: "Employee deleted successfully"
            });
        }else{
            res.json({
                message: "error occurred please try again"
            })
        }
        
    }catch(err){
        res.send({msg: err})
    }
};

//updating employee first name and lastName
const updateEmployee =  async(req, res)=>{
    
    try{
        const employeeUpdate = await Employee.updateOne({
            _id: req.params.id
        }, {$set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }});

       
        res.json(employeeUpdate)
    }catch(err){
        res.send({msg: err})
    }
};

//save Employee
const addEmployee= async(req, res)=>{
    //validating user inputs
    const {error} = employeeValidation(req.body)

    // if error exists then send back error
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const employeeEmail = await Employee.findOne({email:req.body.email});

    // if employee email exist then return 
    if(employeeEmail) return res.status(400).send("Employee's email already exists");

    // const owner = req.user.user_id
    const employee = new Employee({
        ...req.body
        
    })

    const savedEmployee = await employee.save();
    try{
        res.json(savedEmployee);
    }catch(err){
        res.json({msg: err})
    }  
};

module.exports = { getAllEmployees, getEmployee, updateEmployee, addEmployee, deleteEmployee }