export class UserDto {
  username: string;
  pass: string;
  fechanacimiento: string;
  sex: number;
  
}

export class LoginResponse{
  token:string;
}

export class TokenAuth {
  id: number;
  username: string;
  email: string;
  roles: string[];
  iat?: number;
  exp?: number;
  currency:string;
}

export class ExerciseResultDto {
  list: ExerciseDTO[];
  count: number;

  constructor(list: ExerciseDTO[], count: number) {
      this.list = list;
      this.count = count;
  }

}

export class ExerciseDTO  {

  id: number;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  nameEjercise: string;
  target: string;



}

export class BuscarDTO  {

  page: number;
  buscado: string;
}

export class Pagination {
  page: number;
  maxSize: number;
  collectionSize: number;
  mostrarCantidad: boolean;
  maxCount: number;
  pageSize: number;
}

export class createExerciseDto {

  
  idexercise: number;
  idusergym: number;
  calificacion: number;
}

export class responseDto {


  ok: string;


  
}