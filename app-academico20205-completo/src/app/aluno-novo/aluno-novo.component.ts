import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent {
  aluno: Aluno = { nome: '', sexo: '', dtNasc: '' };

  constructor(private alunoService: AlunoService, private router: Router) {}

  salvar() {
    this.alunoService.createAluno(this.aluno).subscribe({
      next: () => this.router.navigate(['/aluno']),
      error: err => console.error(err)
    });
  }

  cancelar() {
    this.router.navigate(['/aluno']);
  }
}
