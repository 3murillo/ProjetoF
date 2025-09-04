package br.edu.ifgoias.academico.services;

import br.edu.ifgoias.academico.dto.AlunoDTO;
import br.edu.ifgoias.academico.dto.AlunoCreateDTO;

import java.util.List;
import java.util.Optional;

public interface AlunoService {
    List<AlunoDTO> findAll();
    Optional<AlunoDTO> findById(Integer id);
    AlunoDTO create(AlunoCreateDTO dto);
    Optional<AlunoDTO> update(Integer id, AlunoCreateDTO dto);
    void delete(Integer id);
}
