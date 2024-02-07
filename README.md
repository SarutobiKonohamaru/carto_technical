# Initial configuration

1- Create a new database in Postgres

```
CREATE DATABASE carto
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

```
2- Create a new table for storing points data from csv file

```
CREATE TABLE coordinates (
    id SERIAL PRIMARY KEY,
    longitude DOUBLE PRECISION,
    latitude DOUBLE PRECISION
);

```

3- Install Postgis extension

```
CREATE EXTENSION IF NOT EXISTS postgis;

```

4- Create table for storing polygons data based on the user input

```
CREATE TABLE polygon (
    id serial primary key,
    geom geometry(POLYGON, 4326)
);

```

5- Insert one polygon sample data:

```
INSERT INTO polygon (geom) VALUES (ST_GeomFromText('POLYGON ((-122.488248 37.772731, -122.488248 37.729332, -122.397006 37.729332, -122.397006 37.772731, -122.488248 37.772731))', 4326));

```

6- Run a query for getting results  

```
SELECT COUNT(*) AS total_puntos
FROM coordenadas
WHERE ST_Within(ST_SetSRID(ST_MakePoint(longitud, latitud), 4326), (SELECT geom FROM poligono));

```