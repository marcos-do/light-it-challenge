USE light_it_challenge;

CREATE TABLE Patient(
    id MEDIUMINT AUTO_INCREMENT,
    name varchar(50),
    email varchar(100),
    address varchar(150),
    phone_number int,
    photo_path varchar(255),
    PRIMARY KEY (id)
);

INSERT INTO Patient(name, email, address, phone_number, photo_path)
VALUES ("John Doe", "jdoe@gmail.com", "John Doe House 123", 1234, "path");