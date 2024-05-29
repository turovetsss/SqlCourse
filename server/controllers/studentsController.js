const uuid = require('uuid')
const path = require('path')
const {Student, sequelize} = require('../models/models')

const ApiError = require('../error/ApiError')

class StudentsController {
    async create(req, res, next) {
        try {
            const {name, surname, group, mark, birthday} = req.body;
            const student = await Student.create({name, surname, group, mark, birthday});
            return res.json(student);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async edit(req, res, next) {
        try {
            const {id, name, surname, group, mark, birthday} = req.body;
            const student = await Student.update(
                {name, surname, group, mark, birthday},
                {where: {id}}
            );
            if (student[0] === 0) {
                return next(ApiError.badRequest('Студент не найден'));
            }
            return res.json({message: 'Студент успешно обновлен'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const student = await Student.findOne({where: {id}});
            if (!student) {
                return next(ApiError.badRequest('Студент не найден'));
            }
            return res.json(student);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const students = await Student.findAll();
            return res.json(students);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            const student = await Student.destroy({where: {id}});
            if (!student) {
                return next(ApiError.badRequest('Студент не найден'));
            }
            return res.json({message: 'Студент успешно удален'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async sandbox(req, res, next) {
        try {
            const {query} = req.body;

            if (typeof query !== 'string') {
                return next(ApiError.badRequest('Строка запроса не должна быть пустой'));
            }

            const queryType = query.trim().split(' ')[0].toUpperCase();

            if (['SELECT', 'UPDATE', 'DELETE', 'INSERT'].includes(queryType)) {
                const result = await sequelize.query(query);

                const students = await Student.findAll();
                return res.json(students);
            } else {
                return next(ApiError.badRequest('Неподдерживаемый тип комманды'));
            }
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new StudentsController()