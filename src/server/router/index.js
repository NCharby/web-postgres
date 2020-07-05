import { Router } from 'express';
import asyncHandler from "express-async-handler";

import Users from '../users/index'

const AppRouter: Router = Router()

AppRouter.route('/users/:id?')
    .get( asyncHandler(Users.get))

export default AppRouter