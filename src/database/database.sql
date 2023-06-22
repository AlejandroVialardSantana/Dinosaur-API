CREATE DATABASE IF NOT EXISTS dinoapidb;

USE dinoapidb;

CREATE TABLE dinosaur (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    diet VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE dinosaur;

INSERT INTO dinosaur (name, diet) VALUES
('Tyrannosaurus', 'Carnivore'),
('Velociraptor', 'Carnivore'),
('Triceratops', 'Herbivore'),
('Stegosaurus', 'Herbivore'),
('Brachiosaurus', 'Herbivore'),
('Pteranodon', 'Carnivore'),
('Apatosaurus', 'Herbivore'),
('Dilophosaurus', 'Carnivore'),
('Compsognathus', 'Carnivore'),
('Spinosaurus', 'Carnivore'),
('Carnotaurus', 'Carnivore'),
('Ankylosaurus', 'Herbivore'),
('Parasaurolophus', 'Herbivore'),
('Pachycephalosaurus', 'Herbivore'),
('Gallimimus', 'Herbivore'),
('Microceratus', 'Herbivore'),
('Corythosaurus', 'Herbivore'),
('Ceratosaurus', 'Carnivore'),
('Allosaurus', 'Carnivore'),
('Iguanodon', 'Herbivore'),
('Baryonyx', 'Carnivore'),
('Carnotaurus', 'Carnivore'),
('Cryolophosaurus', 'Carnivore'),
('Deinonychus', 'Carnivore'),
('Diplodocus', 'Herbivore'),
('Giganotosaurus', 'Carnivore'),
('Megalosaurus', 'Carnivore'),
('Ornithomimus', 'Herbivore'),
('Ouranosaurus', 'Herbivore'),
('Pachyrhinosaurus', 'Herbivore'),
('Pentaceratops', 'Herbivore'),
('Suchomimus', 'Carnivore'),
('Therizinosaurus', 'Herbivore'),
('Troodon', 'Carnivore'),
('Tyrannotitan', 'Carnivore'),
('Utahraptor', 'Carnivore'),
('Yutyrannus', 'Carnivore'),
('Zalmoxes', 'Herbivore'),
('Zuniceratops', 'Herbivore');