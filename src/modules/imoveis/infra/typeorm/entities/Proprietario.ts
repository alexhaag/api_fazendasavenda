import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("proprietarios")
class Proprietario {

  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  numero: number;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  telefone: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Proprietario }
