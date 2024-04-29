import { Request, Response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { Order } from '../entities/Orders'; 
import OrdersRepository from '../repositories/OrdersRepository'; 

const userRouter = Router();

userRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const ordersRepository = getCustomRepository(OrdersRepository); 
    const orders = await ordersRepository.find(); 
    return res.status(200).json(orders); 
});

export default userRouter;
