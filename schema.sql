USE groove_db;

CREATE TABLE Barbers (
	id INT AUTO_INCREMENT NOT NULL,
	barber_name VARCHAR(30) NOT NULL,
    barber_photo VARCHAR(30) NOT NULL,
	specialty VARCHAR(30),
    barber_email VARCHAR(30) NOT NULL,
    barber_phone VARCHAR(30) NOT NULL,
    createdAt timestamp NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE Clients (
	id INT AUTO_INCREMENT NOT NULL,
	client_name VARCHAR(30) NOT NULL,
    client_email VARCHAR(30) NOT NULL,
    client_phone VARCHAR(30) NOT NULL,
    createdAt timestamp NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Bookings (
	id INT AUTO_INCREMENT NOT NULL,
    client_id SMALLINT NOT NULL REFERENCES clients(id),
    barber_id SMALLINT NOT NULL REFERENCES barbers(id),
    booking_date INT NOT NULL,
    booking_time INT NOT NULL,
    createdAt timestamp NOT NULL,
    PRIMARY KEY (id)
);