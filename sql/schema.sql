-- CREATE DATABASE books;

-- \c books;

CREATE TABLE IF NOT EXISTS book
(
    id         UUID PRIMARY KEY,
    title      VARCHAR(255),
    pages      INTEGER,
    released   TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS author
(
    id         UUID PRIMARY KEY,
    name       VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS genre
(
    id         UUID PRIMARY KEY,
    name       VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS book_author
(
    book_id   UUID,
    author_id UUID,
    CONSTRAINT book_author_pk PRIMARY KEY (book_id, author_id),
    CONSTRAINT book_author_fk FOREIGN KEY (book_id) REFERENCES book (id),
    CONSTRAINT author_fk FOREIGN KEY (author_id) REFERENCES author (id)
);

CREATE TABLE IF NOT EXISTS book_genre
(
    book_id  UUID,
    genre_id UUID,
    CONSTRAINT book_genre_fk FOREIGN KEY (book_id) REFERENCES book (id),
    CONSTRAINT genre_fk FOREIGN KEY (genre_id) REFERENCES genre (id)
);
