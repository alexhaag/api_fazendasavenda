import Imoveis from '../models/Imoveis';

import ImoveisRepository from '../repositories/ImoveisRepository';

interface IRequest {
  provider: string;
  date: Date;
}

class CreateImovelService {
  private imoveisRepository: ImoveisRepository;

  constructor(imoveisRepository: ImoveisRepository) {
    this.imoveisRepository = imoveisRepository;
  }

  public execute({ provider, date }: IRequest): Imoveis {
    // if(){
    //   throw Error('Incluir um erro')
    // }

    const imovel = this.imoveisRepository.create({
      provider,
      date,
    });

    return imovel;
  }
}

export default CreateImovelService;
