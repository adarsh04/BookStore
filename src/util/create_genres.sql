CREATE TABLE genres (
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

INSERT INTO genres (ID, name)
  VALUES (0, 'Romance'), (1, 'Adult Fiction'), (2, 'Mystery'), (3, 'Science Fiction')