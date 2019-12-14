import { CrudRepository } from 'nestjs-rest-crud';
import { TempCrudTypeormRepository } from './TempCrudTypeormRepository';

export class CrudTypeormRepository<T> extends TempCrudTypeormRepository<T>
  implements CrudRepository<T> {}
