import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos() {
    this.alunoService.getAlunos().subscribe({
      next: data => this.alunos = data,
      error: err => console.error('Erro ao carregar alunos:', err)
    });
  }

  novoAluno() {
    this.router.navigate(['/aluno-novo']);
  }

  editarAluno(id?: number) {
    if (id == null) return;
    this.router.navigate([`/aluno-editar/${id}`]);
  }

  deletarAluno(id?: number) {
    if (id == null) return;
    if (!confirm('Confirma exclusão?')) return;
    this.alunoService.deleteAluno(id).subscribe({
      next: () => this.loadAlunos(),
      error: err => console.error('Erro ao excluir aluno:', err)
    });
  }
}
