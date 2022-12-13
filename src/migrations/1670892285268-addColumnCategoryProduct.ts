import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumnCategoryProduct1670892285268
  implements MigrationInterface
{
  name = 'addColumnCategoryProduct1670892285268';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD \`category\` enum ('DRINK', 'LUNCH', 'DESSERT', 'OTHERS', 'SERVING') NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`category\``);
  }
}
