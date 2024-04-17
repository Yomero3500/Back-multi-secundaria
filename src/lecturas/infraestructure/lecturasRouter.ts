import express from 'express';
import { getDataController, newDataController } from './dependencies';

export const lecturasRouter = express.Router();

lecturasRouter.post('/', (req, res) =>{
    newDataController.run(req, res)
    .then(() => {
     return null;
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
})

lecturasRouter.get('/', (req, res) =>{
    getDataController.run(req, res)
    .then(() => {
     return null;
    })
    .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    })
})