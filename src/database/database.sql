CREATE DATABASE IF NOT EXISTS dinoapidb;

USE dinoapidb;

CREATE TABLE dinosaur (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    diet VARCHAR(255) DEFAULT NULL,
    period VARCHAR(255) DEFAULT NULL,
    length VARCHAR(255) DEFAULT NULL,
    weight VARCHAR(255) DEFAULT NULL,
    description VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE dinosaur;

INSERT INTO dinosaur (name, diet, period, length, weight, description)
VALUES
    ('Tyrannosaurus Rex', 'Carnivore', 'Late Cretaceous', '40 feet', '8 tons', 'One of the largest meat-eating dinosaurs.'),
    ('Velociraptor', 'Carnivore', 'Late Cretaceous', '6 feet', '15-33 pounds', 'Known for its speed and sharp claws.'),
    ('Stegosaurus', 'Herbivore', 'Late Jurassic', '30 feet', '6,800 pounds', 'Characterized by its bony plates and spiked tail.'),
    ('Triceratops', 'Herbivore', 'Late Cretaceous', '26-30 feet', '6-12 tons', 'Famous for its three horns and large frill.'),
    ('Brachiosaurus', 'Herbivore', 'Late Jurassic', '85 feet', '30-80 tons', 'One of the tallest and heaviest dinosaurs.'),
    ('Ankylosaurus', 'Herbivore', 'Late Cretaceous', '20-30 feet', '4-6 tons', 'Armored dinosaur with a clubbed tail.'),
    ('Diplodocus', 'Herbivore', 'Late Jurassic', '88 feet', '11-17 tons', 'Known for its long neck and whip-like tail.'),
    ('Spinosaurus', 'Carnivore', 'Late Cretaceous', '40-59 feet', '6-23 tons', 'Has a sail-like structure on its back.'),
    ('Archaeopteryx', 'Carnivore', 'Late Jurassic', '1.9 feet', '0.5 pounds', 'Considered one of the earliest birds.'),
    ('Allosaurus', 'Carnivore', 'Late Jurassic', '28-39 feet', '2-4 tons', 'Large predatory dinosaur with sharp teeth.'),
    ('Iguanodon', 'Herbivore', 'Early Cretaceous', '26-33 feet', '2.5-5 tons', 'Notable for its thumb spike and ability to walk on two or four legs.'),
    ('Pteranodon', 'Carnivore', 'Late Cretaceous', '20 feet', '20 pounds', 'A flying reptile with a wingspan of up to 33 feet.'),
    ('Parasaurolophus', 'Herbivore', 'Late Cretaceous', '33-49 feet', '2.5-3.5 tons', 'Known for its distinctive cranial crest.'),
    ('Microraptor', 'Carnivore', 'Early Cretaceous', '1-3 feet', '2 pounds', 'Small dinosaur with feathers and the ability to glide.'),
    ('Carnotaurus', 'Carnivore', 'Late Cretaceous', '26-30 feet', '1-1.5 tons', 'Notable for its horned skull and muscular build.'),
    ('Pachycephalosaurus', 'Herbivore', 'Late Cretaceous', '15-23 feet', '1-2 tons', 'Dinosaur with a thick skull used for head-butting battles.');
    