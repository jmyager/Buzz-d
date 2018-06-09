USE dsounuh5z7xv9iih;

CREATE TABLE barbers (
	id INT AUTO_INCREMENT NOT NULL,
	barber_name VARCHAR(30) NOT NULL,
	specialty VARCHAR(30),
    barber_email VARCHAR(30) NOT NULL,
    barber_phone INT NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE clients (
	id INT AUTO_INCREMENT NOT NULL,
	client_name VARCHAR(30) NOT NULL,
    client_email VARCHAR(30) NOT NULL,
    client_phone INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE bookings (
	id INT AUTO_INCREMENT NOT NULL,
    client_id
    barber_id
    booking_date
    booking_time
    PRIMARY KEY (id)
);