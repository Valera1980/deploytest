import {MigrationInterface, QueryRunner} from "typeorm";

export class column1643740533742 implements MigrationInterface {
    name = 'column1643740533742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "comment" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "comment"`);
    }

}
