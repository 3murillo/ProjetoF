package br.edu.ifgoias.academico.dto;

import java.time.LocalDate;

public class AlunoCreateDTO {
    private String nome;
    private String sexo;
    private LocalDate dtNasc;

    public AlunoCreateDTO() {}

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getSexo() { return sexo; }
    public void setSexo(String sexo) { this.sexo = sexo; }

    public LocalDate getDtNasc() { return dtNasc; }
    public void setDtNasc(LocalDate dtNasc) { this.dtNasc = dtNasc; }
}
