import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class createTeamsTable1600050043001 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "teams",
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "desciption",
                    type: "text",
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    default: 'now()',
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("teams");
    }

}
