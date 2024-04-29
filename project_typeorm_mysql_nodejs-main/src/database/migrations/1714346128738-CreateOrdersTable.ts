import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrdersTable1714346128738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'customerName',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'totalAmount',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                        isNullable: false
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                        onUpdate: 'CURRENT_TIMESTAMP'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
