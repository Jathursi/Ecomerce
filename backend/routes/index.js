import { Router } from 'express';
// import Question from '../models/questionModel.js';
import chatbot from './chatbot.js';

const router = Router();

router.use('/chat', chatbot);
// import Logins from '../models/loginModel.js';
// import userRoutes from './userRoutes.js';
// import logbookRoute from './logbookRoute.js';
// import estRoute from './estRoute.js';
// import supRoutes from './supRoutes.js';
// import impRoutes from './impRoutes.js';
// import AttachmentRoutes from './AttachmentRoutes.js';
// import OutRoute from './OutRoute.js';
// import CompRoutes from './CompRoutes.js';
// import compEmailRoute from './compEmailRoute.js';
// import DropRoutes from './DropRoutes.js';
// import UserInfRoutess from './UserInfRoutess.js';
// import deleteRoutes from './deleteRoutes.js';
// import EmailAuthRoute from './EmailAuthRoute.js'
// const router = Router();

// router.use('/users', userRoutes);
// router.use('/logbook', logbookRoute);
// router.use('/est', estRoute);
// router.use('/sup', supRoutes);
// router.use('/imp', impRoutes);
// router.use('/attachment', AttachmentRoutes);
// router.use('/comp', CompRoutes);
// router.use('/email', compEmailRoute);
// router.use('/out', OutRoute);
// router.use('/drop', DropRoutes);
// router.use('/userinf', UserInfRoutess);
// router.use('/delete', deleteRoutes);
// router.use('/emailauth', EmailAuthRoute);
export default router;