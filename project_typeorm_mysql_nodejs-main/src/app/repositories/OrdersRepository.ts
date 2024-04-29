import { Repository, EntityRepository } from "typeorm";
import { Order } from "../entities/Orders";

@EntityRepository(Order)
class OrderRepository extends Repository<Order> {
    async createOrder(customerName: string, totalAmount: number): Promise<Order> {
        const order = this.create({ customerName, totalAmount });
        return this.save(order);
    }
    async getOrders(): Promise<Order[]> {
        return this.find(); 
    }
}

export default OrderRepository;
