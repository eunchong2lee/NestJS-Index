import { MigrationInterface, QueryRunner } from 'typeorm';

export class BoardMigrationADD1711607435316 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE INDEX idx_title ON board(title);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP INDEX idx_title;
    `);
  }
}
