CREATE TABLE colonist (
  colonist_id serial primary key,
  colonist_name varchar(20) UNIQUE NOT NULL,
  colonist_level SMALLINT NOT NULL,
  timestamp timestamp default current_timestamp);

-- Create a colonist

INSERT INTO colonist (colonist_name, colonist_level) VALUES
    ('Han', 4);

-- Create multiple colonist

INSERT INTO colonist (colonist_name, colonist_level)
VALUES
    ('Luke', 1),
    ('Leia', 6),
    ('Vader', 10);

-- Create their professions

CREATE TABLE profession(
  profession_id serial primary key,
  profession_name varchar(255) UNIQUE NOT NULL,
  profession_salary integer NOT NULL
);

INSERT INTO profession (profession_name, profession_salary)
VALUES
    ('Jedi', 245345),
    ('Pilot', 88353),
    ('Princess', 5464678),
    ('Dark Lord', 10453456);

CREATE TABLE colonist_profession
(
  colonist_id integer NOT NULL,
  profession_id integer NOT NULL,
  grant_date timestamp default current_timestamp,
  PRIMARY KEY (colonist_id, profession_id),
  CONSTRAINT colonist_profession_profession_id_fkey FOREIGN KEY (profession_id)
      REFERENCES profession (profession_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT colonist_profession_colonist_id_fkey FOREIGN KEY (colonist_id)
      REFERENCES colonist (colonist_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Grant their professions - I would need to know colonist_id & profession_id

INSERT INTO colonist_profession (colonist_id, profession_id)
WITH
  myconstants (ColonistName, ProfessionName) as (
    values ('Luke', 'Jedi')
  ),
  colonist_table AS (
    SELECT colonist_id
    FROM colonist, myconstants
    WHERE colonist_name=ColonistName
  ),
  profession_table AS (
    SELECT profession_id
    FROM profession, myconstants
    WHERE profession_name=ProfessionName
  )
  select colonist_table.colonist_id, profession_table.profession_id
  from colonist_table,profession_table;


-- from the terminal, sign into postgresql using the username postgres
$ psql --u postgres

-- list the databases
postgres=# \l

-- connect to shed
postgres=# \c shed
