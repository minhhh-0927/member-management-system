import {MigrationInterface, QueryRunner} from "typeorm";

export class renameDescriptionTeamsTable1601273933672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.renameColumn('teams', 'desciption', 'description');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.renameColumn('teams', 'description', 'desciption');
    }
}
