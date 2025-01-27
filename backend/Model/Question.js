import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'question',
    timestamps: false
});

export default Question;