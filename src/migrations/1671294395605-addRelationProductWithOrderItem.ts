import { MigrationInterface, QueryRunner } from "typeorm";

export class addRelationProductWithOrderItem1671294395605 implements MigrationInterface {
    name = 'addRelationProductWithOrderItem1671294395605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_item\` ADD UNIQUE INDEX \`IDX_904370c093ceea4369659a3c81\` (\`productId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_904370c093ceea4369659a3c81\` ON \`order_item\` (\`productId\`)`);
        await queryRunner.query(`ALTER TABLE \`order_item\` ADD CONSTRAINT \`FK_904370c093ceea4369659a3c810\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order_item\` DROP FOREIGN KEY \`FK_904370c093ceea4369659a3c810\``);
        await queryRunner.query(`DROP INDEX \`REL_904370c093ceea4369659a3c81\` ON \`order_item\``);
        await queryRunner.query(`ALTER TABLE \`order_item\` DROP INDEX \`IDX_904370c093ceea4369659a3c81\``);
    }

}
