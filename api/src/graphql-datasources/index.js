
const {BaseDS} = require('./base');
const Strapi = require('lib/strapi')

module.exports = () => {
  return {
    employees: new BaseDS(new Strapi('employee')),
    tasks: new BaseDS(new Strapi('task')),
  }
}
