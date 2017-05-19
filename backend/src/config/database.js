const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE'} excede o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE'} excede o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' é um valor inválido para o campo '{PATH}'."

module.exports = mongoose.connect('mongodb://localhost/mymoney')