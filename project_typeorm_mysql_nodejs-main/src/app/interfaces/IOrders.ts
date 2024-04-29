interface IOrder {
    id: number;
    customerName: string;
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;
}

export default IOrder;
