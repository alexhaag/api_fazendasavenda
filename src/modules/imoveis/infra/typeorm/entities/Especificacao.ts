import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("especificacoes")
class Especificacao {

  @PrimaryColumn()
  id: string;

  @Column()
  especificacao: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }

}
export { Especificacao }
