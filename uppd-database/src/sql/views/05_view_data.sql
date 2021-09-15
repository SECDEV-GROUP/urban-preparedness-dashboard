ALTER TABLE city_geography
RENAME COLUMN tractce10 to tractce;

CREATE VIEW view_data AS
SELECT *
FROM city_metrics AS m, city_geography AS g
WHERE m.tractce10::TEXT = g.tractce;
