import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateColumnPrice1670891828661 implements MigrationInterface {
  name = 'updateColumnPrice1670891828661';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`price\``);
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD \`price\` decimal(14,4) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`solicitation\` DROP COLUMN \`value\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`solicitation\` ADD \`value\` decimal(14,4) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`solicitation\` DROP COLUMN \`value\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`solicitation\` ADD \`value\` int NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`price\``);
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD \`price\` int NOT NULL`,
    );
  }
}
