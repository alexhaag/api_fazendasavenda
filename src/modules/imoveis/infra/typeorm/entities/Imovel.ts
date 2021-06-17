import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Especificacao } from "./Especificacao";
import { FormaPagto } from "./FormaPagto";
import { Proprietario } from "./Proprietario";


@Entity("imoveis")
class Imovel {
  @PrimaryColumn()
  id: string;

  @Column()
  area: number;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  valor: string;

  @Column()
  obs: string;

  @ManyToOne(() => FormaPagto)
  @JoinColumn({ name: "forma_pagto_id" })
  forma_pagto: FormaPagto;

  @ManyToOne(() => Especificacao)
  @JoinColumn({ name: "especificacao_id" })
  especificacao: Especificacao;

  @ManyToMany(() => Proprietario)
  @JoinTable({
    name: "proprietarios_imoveis",
    joinColumns: [{ name: "imovel_id" }],
    inverseJoinColumns: [{ name: "proprietario_id" }]
  })
  proprietarios: Proprietario[];

  @Column()
  publicar: boolean;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.publicar = true;
    }
  }

}

