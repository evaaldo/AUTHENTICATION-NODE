"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
// Public Route
exports.router.get('/', (request, response) => {
    return response.status(200).json({ message: 'Working...' });
});
// User Routes - CRUD
exports.router.get('/users');
exports.router.post('/users');
exports.router.put('/users');
exports.router.delete('/users');
