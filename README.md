# Datasource configuration

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
2- Create a table for storing points data from csv file

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

4- Import longitude and latitude data from input csv file

```
COPY coordinates(longitude, latitude) FROM 'path/file.csv' DELIMITER ',' CSV HEADER;
```


4- Create table for storing area of inetesr data based on the user input

```
CREATE TABLE area_of_interest (
    id serial primary key,
    area text,
    geom geometry(POLYGON, 4326)
);
ALTER TABLE IF EXISTS public.area_of_interest
    ADD CONSTRAINT idx_area_unique UNIQUE (area);
```

5- Create table for storing analysis results

```
CREATE TABLE analysis
(
    id serial,
    total_points integer,
    centroid_stdev double precision,
    centroid_index double precision,
    area_interest_fk integer,
    PRIMARY KEY (id),
    CONSTRAINT area_of_interest_fk FOREIGN KEY (area_interest_fk)
        REFERENCES area_of_interest (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
);
```

## Backend configuration

The backend server consists of a REST API implemented under NodeJS platform (v12.18.3) using Express library.

1- Open a terminal and go to backend folder
2- Run npm i to install project dependencies
3- Run npm start. The server will start running on port configured in the environment variable PORT or 3000 by default

