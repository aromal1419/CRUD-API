CREATE TABLE users (
    id bigint NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    hobbies JSON,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);
