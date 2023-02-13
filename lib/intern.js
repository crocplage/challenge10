const Employee = require('./employee');

class intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);

    this.school = school;

    this.role = "intern";
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return this.role;
    }
}
module.exports = intern;