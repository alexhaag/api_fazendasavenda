import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateImoveis1619730169992 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'imoveis',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',

          },
          {
            name: 'area',
            type: 'number',

          }
          //celular,
          //cidade,
          //uf,
          //email,
          //fotos[{
          //  nome,
          //  url
          //}],
          //key,
          //arroz,
          //moeda,
          //tipo,
          //obs,
          //soja,
          //pecuaria,
          //preco,
          //proprietario,
          //publicar,


        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }
}
