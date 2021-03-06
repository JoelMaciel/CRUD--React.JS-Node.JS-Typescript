import { Router, Response, Request } from "express";
import { getTask, getTasks, saveTask, updateTask , finishedTask, removeTask } from "./controller/TasksController";

const routes = Router();

routes.get('/', (request:Request, response: Response) => {
    return response.json({message: 'Hello World'});
})
routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask)
routes.patch('/tasks/:id', finishedTask);
routes.delete('/tasks/:id', removeTask);


export default routes; 