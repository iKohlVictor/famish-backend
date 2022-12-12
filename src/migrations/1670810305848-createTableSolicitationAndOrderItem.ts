import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableSolicitationAndOrderItem1670810305848
  implements MigrationInterface
{
  name = 'createTableSolicitationAndOrderItem1670810305848';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`solicitation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`numberDesk\` int NULL, \`typeSolicitation\` enum ('DELIVERY', 'TAKEAWAY', 'EAT_ON_THE_SPOT') NOT NULL DEFAULT 'EAT_ON_THE_SPOT', \`value\` int NULL, \`paymentStatus\` enum ('PENDING', 'APPROVED', 'RECUSED') NOT NULL DEFAULT 'PENDING', \`paymentType\` varchar(255) NULL, \`details\` varchar(255) NULL, \`statusSolicitation\` enum ('PENDING', 'UNDERWAY', 'FINISHED', 'CANCELED') NOT NULL DEFAULT 'PENDING', \`customerId\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`REL_b27593ef7552eca1ac5158ad8c\` (\`customerId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`order_item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`productId\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`solicitationId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`solicitation\` ADD CONSTRAINT \`FK_b27593ef7552eca1ac5158ad8c0\` FOREIGN KEY (\`customerId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`order_item\` ADD CONSTRAINT \`FK_931b9d4523e3e9559dad639a8fd\` FOREIGN KEY (\`solicitationId\`) REFERENCES \`solicitation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`order_item\` DROP FOREIGN KEY \`FK_931b9d4523e3e9559dad639a8fd\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`solicitation\` DROP FOREIGN KEY \`FK_b27593ef7552eca1ac5158ad8c0\``,
    );
    await queryRunner.query(`DROP TABLE \`order_item\``);
    await queryRunner.query(
      `DROP INDEX \`REL_b27593ef7552eca1ac5158ad8c\` ON \`solicitation\``,
    );
    await queryRunner.query(`DROP TABLE \`solicitation\``);
  }
}
