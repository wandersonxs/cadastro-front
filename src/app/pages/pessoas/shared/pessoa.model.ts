import {BaseResourceModel} from '../../../shared/models/base-resource.model';

export class Pessoa extends BaseResourceModel{
  constructor(
    public id?: number,
    public nome?: string,
    public sexo?: string,
    public email?: string,
    public dataNascimento?: string,
    public naturalidade?: string,
    public nacionalidade?: boolean,
    public cpf?: string

  ) {
    super();
  }

  static types =  {
    M: 'MASCULINO',
    F: 'FEMININO',
    O: 'OUTROS'
  };

  static fromJson(jsonData: any): Pessoa {
    return Object.assign(new Pessoa(), jsonData);
  }
}
