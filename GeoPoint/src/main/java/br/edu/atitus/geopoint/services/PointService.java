package br.edu.atitus.geopoint.services;

import br.edu.atitus.geopoint.dtos.PointRequest;
import br.edu.atitus.geopoint.entities.PointEntity;
import br.edu.atitus.geopoint.repositeries.PointRepository;

import java.awt.*;
import java.math.BigDecimal;
import java.util.NoSuchElementException;
import java.util.UUID;
import java.util.List;

public class PointService {


    private final PointRepository repository;

    public PointService(PointRepository repository) {
        this.repository = repository;
    }

    public PointEntity change(UUID id, PointRequest pointRequest){
        //TODO validar os dados
        if (pointRequest == null)
            throw new RuntimeException("Objeto Nulo");

        if (pointRequest.name() == null || pointRequest.name().isBlank())
            throw new RuntimeException("Nome inválido");

        if (pointRequest.latitude() == null
                || pointRequest.latitude().compareTo(BigDecimal.valueOf(-90)) < 0
                || pointRequest.latitude().compareTo(BigDecimal.valueOf(90)) > 0)
            throw new RuntimeException("latitude inválida - Intervalo aceito: -90 a 90");

        if (pointRequest.longitude() == null
                || pointRequest.longitude().compareTo(BigDecimal.valueOf(-180)) < 0
                || pointRequest.longitude().compareTo(BigDecimal.valueOf(180)) > 0)
            throw new RuntimeException("longitude inválida - Intervalo aceito: -180 a 180");

        //TODO fazer o restante das validações

        //TODO converter DTO em Entidade
        PointEntity point = new PointEntity();

        point.setId(id);
        point.setName(pointRequest.name().trim());
        point.setDescription(
            pointRequest.description() == null
                ? null
                : pointRequest.description().trim()
        );
        point.setLatitude(pointRequest.latitude());
        point.setLongitude(pointRequest.longitude());

        //TODO invocar camada de repositorio

        return repository.change(point);
    }

    public PointEntity insert(PointRequest pointRequest) {

        //TODO validar os dados
        if (pointRequest == null)
            throw new RuntimeException("Objeto Nulo");
        if (pointRequest.name() == null || pointRequest.name().isBlank())
            throw new RuntimeException("Nome inválido");
        if (pointRequest.latitude() == null
                || pointRequest.latitude().compareTo(BigDecimal.valueOf(-90)) < 0
                || pointRequest.latitude().compareTo(BigDecimal.valueOf(90)) > 0)
            throw new RuntimeException("latitude inválida - Intervalo aceito: -90 a 90");

        if (pointRequest.longitude() == null
                || pointRequest.longitude().compareTo(BigDecimal.valueOf(-180)) < 0
                || pointRequest.longitude().compareTo(BigDecimal.valueOf(180)) > 0)
            throw new RuntimeException("longitude inválida - Intervalo aceito: -180 a 180");

        //TODO fazer o restante das validações

        //TODO converter DTO em Entidade
        PointEntity point = new PointEntity();

        point.setId(UUID.randomUUID());
        point.setName(pointRequest.name());
        point.setDescription(pointRequest.description().trim());
        point.setLatitude(pointRequest.latitude());
        point.setLongitude(pointRequest.longitude());

        //TODO invocar camada de repositorio

        return repository.insert(point);


    }
    public List<PointEntity> findAll() {

        return repository.findAll();
    }

    public PointEntity findById(UUID id) {
        PointEntity point = repository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Ponto não localizado com o ID: " + id));
        return point;
    }

}
