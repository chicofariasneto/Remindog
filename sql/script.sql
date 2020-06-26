CREATE SCHEMA remindog;

CREATE TABLE remindog.dog (
    id_user INT NOT NULL,
    username VARCHAR(120) NOT NULL,
    serving BOOLEAN NOT NULL,
    service VARCHAR(120),
    reminder_aux INT,

    CONSTRAINT pk_dog PRIMARY KEY (id_user)
);

CREATE TABLE remindog.reminder (
    id_reminder SERIAL NOT NULL,
    fk_user INT NOT NULL,
    reminder_on TIMESTAMP NOT NULL,
    note VARCHAR(1000),

    CONSTRAINT pk_reminder PRIMARY KEY (id_reminder),
    CONSTRAINT reminder_fk_user FOREIGN KEY (fk_user) REFERENCES remindog.dog (id_user) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);