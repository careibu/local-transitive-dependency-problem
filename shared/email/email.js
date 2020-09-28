const {modelFn} = require('careibu-model/model')

exports.emailFn = function() {
    return modelFn() + ', from email'
}