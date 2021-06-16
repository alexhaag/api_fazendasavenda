import Imovel from '../models/Imoveis';

interface CreateImovelDTO {
  provider: string;
  date: Date;
}

class ImoveisRepository {
  private imoveis: Imovel[];

  constructor() {
    this.imoveis = [];
  }

  public all(): Imovel[] {
    return this.imoveis;
  }

  public findById(id: string): Imovel | null {
    const findImovel = this.imoveis.find(imovel => id === imovel.id);
    return findImovel || null;
  }

  public create({ provider, date }: CreateImovelDTO): Imovel {
    const imovel = new Imovel({ provider, date });
    this.imoveis.push(imovel);

    return imovel;
  }
}

export default ImoveisRepository;
