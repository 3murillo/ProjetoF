export interface Aluno {
  idaluno?: number;  // opcional ao criar
  nome: string;
  sexo: string;
  dtNasc: string;    // ISO date string "YYYY-MM-DD" para simplicidade
}
