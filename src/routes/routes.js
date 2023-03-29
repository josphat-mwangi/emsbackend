const router = require('express').Router();
const { getAllEmployees, getEmployee, deleteEmployee, updateEmployee,  addEmployee} = require('../controllers/employee');


router.post('/', addEmployee);
router.get("/allemployees", getAllEmployees);
router.get('/employee', getEmployee);
router.delete('/employee/:id', deleteEmployee);
router.put('/employee/:id', updateEmployee);



module.exports = router