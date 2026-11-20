package br.edu.atitus.geopoint.repositeries;

import br.edu.atitus.geopoint.entities.PointEntity;
import org.springframework.jdbc.core.JdbcTemplate;

public class PointRepository {
    // Declarando uma dependencia da classe
    private final JdbcTemplate jdbcTemplate;

    // Injeção de dependência via Construtor
    public PointRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;

    }

    public PointEntity insert(PointEntity point) {

        String sql = """
        INSERT INTO points (
            id, name, description, latitude, longitude
        )
        VALUES (?, ?, ?, ?, ?)
        """;

        jdbcTemplate.update(
                sql,
                point.getId(),
                point.getName(),
                point.getDescription(),
                point.getLatitude(),
                point.getLongitude()
        );

        return point;
    }
}
