import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.css']
})
export class AlunoEditarComponent implements OnInit {
  id!: number;
  aluno: Aluno = { nome: '', sexo: '', dtNasc: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoService.getAlunoById(this.id).subscribe({
      next: data => this.aluno = data,
      error: err => console.error(err)
    });
  }

  salvar() {
    this.alunoService.updateAluno(this.id, this.aluno).subscribe({
      next: () => this.router.navigate(['/aluno']),
      error: err => console.error(err)
    });
  }

  cancelar() {
    this.router.navigate(['/aluno']);
  }
}
