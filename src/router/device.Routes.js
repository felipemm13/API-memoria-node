import express from 'express';
import deviceController from '../controller/Device.Controller';
import authenticate from '../token/token';

const deviceRouter = express.Router();

deviceRouter.get('/device/:deviceId?', authenticate, deviceController.getDevices);
deviceRouter.post('/device', authenticate, deviceController.createDevices);
deviceRouter.put('/device/:deviceId', authenticate, deviceController.updateDevice);
deviceRouter.delete('/device/:deviceId', authenticate, deviceController.deleteDevice);

export default deviceRouter;