package br.edu.atitus.geopoint.controllers;

import br.edu.atitus.geopoint.dtos.PointRequest;
import br.edu.atitus.geopoint.entities.PointEntity;
import br.edu.atitus.geopoint.services.PointService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@RestController
@RequestMapping("/api/points")
@CrossOrigin(origins = "*")
public class PointController {

    private final PointService service;

    public PointController(PointService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<PointEntity> insertPoint(
           @RequestBody PointRequest pointRequest){
        PointEntity point = service.insert(pointRequest);
        return ResponseEntity.status(201).body(point);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PointEntity> changePoint(
            @PathVariable UUID id,
            @RequestBody PointRequest pointRequest){
        PointEntity point = service.change(id, pointRequest);
        return ResponseEntity.ok(point);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePoint(
            @PathVariable UUID id) {

        service.delete(id);

        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> handleRuntimeException(NoSuchElementException exception) {
        return ResponseEntity
                .status(404)
                .body(exception.getMessage());
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<String> handleRuntimeException(RuntimeException exception) {
        return ResponseEntity
                .status(400)
                .body(exception.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception exception) {
        return ResponseEntity
                .status(500)
                .body("Erro interno do servidor.");
    }
    @GetMapping
    public ResponseEntity<List<PointEntity>> findAll() {
        List<PointEntity> response = service.findAll();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PointEntity> findById(@PathVariable UUID id) {

        PointEntity response = service.findById(id);

        return ResponseEntity.ok(response);
    }
}
