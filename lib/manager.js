const Employee = require('./employee');
// const manager = require("./employee");

class manager extends Employee {
    constructor(name, email, id, officeNumber){
    super(name, email, id);
    this.officeNumber = officeNumber;
    this.role = "manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}
module.exports = manager;