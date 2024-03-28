import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1711607435316 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    `);
  }
}
