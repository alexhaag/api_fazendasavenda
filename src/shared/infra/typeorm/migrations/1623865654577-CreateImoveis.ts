import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateImoveis1623865654577 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "imoveis",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "area",
            type: "numeric"
          },
          {
            name: "cidade",
            type: "varchar"
          },
          {
            name: "uf",
            type: "varchar"
          },
          {
            name: "valor",
            type: "numeric"
          },
          {
            name: "obs",
            type: "varchar"
          },
          {
            name: "forma_pagto_id",
            type: "uuid"
          },
          {
            name: "especificacao_id",
            type: "uuid"
          },
          {
            name: "publicar",
            type: "boolean"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true
          }
        ],
        foreignKeys: [
          {
            name: "FKImovelFormaPagto",
            referencedTableName: "formas_pagto",
            referencedColumnNames: ["id"],
            columnNames: ["forma_pagto_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          },
          {
            name: "FKImovelEspecificacao",
            referencedTableName: "especificacoes",
            referencedColumnNames: ["id"],
            columnNames: ["especificacao_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("imoveis");
  }

}
