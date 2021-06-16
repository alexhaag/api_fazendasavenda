import { v4 as uuid } from 'uuid';

class Imoveis {
  id?: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Imoveis) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}
export default Imoveis;
