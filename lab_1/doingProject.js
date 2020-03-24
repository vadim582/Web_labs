const { Customer } = require('./customer');

class doingProject extends Customer {
    constructor(doProj) {
        super();
        this.doProj = doProj;
    }
}

module.exports = doingProject;