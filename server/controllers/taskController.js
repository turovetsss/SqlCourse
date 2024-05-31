const {Task, TaskUser, SolvedUserTaskList, User, sequelize} = require('../models/models');
const ApiError = require('../error/ApiError')

class TaskController {
    async createTask(req, res, next) {
        try {
            const {description, condition} = req.body;

            if (typeof condition !== 'string' || condition.trim() === '') {
                return next(ApiError.badRequest('Строка запроса не должна быть пустой'));
            }

            if (typeof description !== 'string' || description.trim() === '') {
                return next(ApiError.badRequest('Строка описания задачи не должна быть пустой'));
            }

            let taskQueryResult;
            try {
                taskQueryResult = await sequelize.query(condition);
            } catch (err) {
                return next(ApiError.internal('Ошибка в запросе задачи: ' + err.message));
            }

            let solution = JSON.stringify(taskQueryResult[0]);

            const task = await Task.create({description, condition, solution});
            return res.json(task);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getTasks(req, res) {
        const tasks = await Task.findAll();
        return res.json(tasks);
    }

    async getTask(req, res) {
        const {id} = req.params;
        const task = await Task.findOne({where: {id}});
        return res.json(task);
    }

    async updateTask(req, res, next) {
        try {
            const {id, description, condition} = req.body;

            if (typeof condition !== 'string' || condition.trim() === '') {
                return next(ApiError.badRequest('Строка запроса не должна быть пустой'));
            }

            const taskIsExists = await Task.findOne({where: {id: id}});
            if (!taskIsExists) {
                return next(ApiError.badRequest('Задача не найдена'));
            }

            let taskQueryResult;
            try {
                taskQueryResult = await sequelize.query(condition);
            } catch (err) {
                return next(ApiError.internal('Ошибка в запросе задачи: ' + err.message));
            }

            let solution = JSON.stringify(taskQueryResult[0]);

            const task = await Task.update(
                {description, condition, solution},
                {where: {id}}
            );
            return res.json(task);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteTask(req, res) {
        const {id} = req.params;
        const task = await Task.destroy({where: {id}});
        return res.json(task);
    }

    async solveTask(req, res, next) {
        try {
            const {taskId, userId, solution} = req.body;

            if (typeof solution !== 'string' || solution.trim() === '') {
                return next(ApiError.badRequest('Строка запроса не должна быть пустой'));
            }

            const task = await Task.findOne({where: {id: taskId}});
            if (!task) {
                return next(ApiError.badRequest('Задача не найдена'));
            }

            const user = await User.findOne({where: {id: userId}});
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'));
            }

            let userQueryResult, taskQueryResult;
            // тут короче решаем задачу, которую прислал пользователь
            try {
                userQueryResult = await sequelize.query(solution);
            } catch (err) {
                return next(ApiError.badRequest('Ошибка в запросе пользователя: ' + err.message));
            }

            // тут короче решаем задачу решением из условия задачи
            try {
                taskQueryResult = await sequelize.query(task.condition);
            } catch (err) {
                return next(ApiError.internal('Ошибка в запросе задачи: ' + err.message));
            }

            // проверяем результаты решений
            const isEqual = JSON.stringify(userQueryResult[0]) === JSON.stringify(taskQueryResult[0]);

            const taskUser = await TaskUser.findOne({where: {taskId, userId}});
            if (taskUser) {
                taskUser.solved = isEqual;
                await taskUser.save();
            } else {
                await TaskUser.create({taskId, userId, solved: isEqual});
            }
            const updatedTasks = await TaskUser.findAll({where: {userId}, include: [Task]});
            return res.json(updatedTasks);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getProgress(req, res, next) {
        try {
            const {id} = req.params;

            const user = await User.findOne({where: {id: id}});
            if (!user) {
                return next(ApiError.badRequest('Пользователь не найден'));
            }

            const countOfSolvedTasks = await TaskUser.count({where: {userId: id, solved: true}});
            return res.json({countOfSolvedTasks});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TaskController()