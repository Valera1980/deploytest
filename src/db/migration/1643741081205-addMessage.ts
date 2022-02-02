import {MigrationInterface, QueryRunner} from "typeorm";

export class addMessage1643741081205 implements MigrationInterface {
    name = 'addMessage1643741081205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "message" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "message"`);
    }

}
