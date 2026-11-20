package br.edu.atitus.geopoint.configs;

import br.edu.atitus.geopoint.controllers.PointController;
import br.edu.atitus.geopoint.repositeries.PointRepository;
import br.edu.atitus.geopoint.services.PointService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class Factory {

    @Bean
    public PointController pointController(JdbcTemplate jdbcTemplate) {

        PointRepository repository = new PointRepository(jdbcTemplate);

        PointService service = new PointService(repository);

        return new PointController(service);
    }
}