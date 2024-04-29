import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1674307725393 } from './migrations/1674307725393-CreateUsersTable';
import { CreateOrdersTable1714346128738 } from "./migrations/1714346128738-CreateOrdersTable";
import User from "../app/entities/User";
import { Order } from "../app/entities/Orders";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "aguanaboca",
    synchronize: true,
    logging: false,
    entities: [User, Order],
    migrations: [CreateUsersTable1674307725393, CreateOrdersTable1714346128738],
    subscribers: [],
})
