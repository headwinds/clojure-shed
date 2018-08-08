CREATE TABLE colonist (
  id serial primary key,
  name varchar(20) NOT NULL,
  profession varchar(20) NOT NULL,
  level SMALLINT NOT NULL,
  timestamp timestamp default current_timestamp);

INSERT INTO colonist (name, profession,level) VALUES
    ('Han', 'Pilot', 1);

INSERT INTO colonist (name, profession,level) VALUES
    ('Luke', 'Jedi', 1);

INSERT INTO colonist (name, profession,level) VALUES
    ('Leia', 'Princess', 1);

INSERT INTO colonist (name, profession,level) VALUES
    ('Vader', 'Dark Lord', 10);
