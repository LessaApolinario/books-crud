# This is a books crud
I made this simple application to document my learning in docker.

## Technologies used
* Node.js
* TypeScript

## The Entity Relationship Model used

![ERD](./docs/Books.jpeg)

## How to run?
Use the following command in the terminal to start the containers: `docker-compose --env-file .env up -d`

## Endpoints:

### Book
- Get all books: `/api/books`
    * **Method** = **GET**
    * **JSON response** = `
      {
      "id": "string",
		  "title": "string",
		  "pages": "integer",
		  "released": "string",
      "created_at": "string",
      "updated_at": "string"
	  }[]
  `
- Create a book: `/api/books/create`
    * **Method** = **POST**
    * **Sending JSON** = `
      {
        "book": {
		      "title": "string",
		      "pages": "integer",
		      "released": "string"
	      }
      }
    `
- Update a book: `/api/books/update`
  * **Method** = **PUT**
  * **Sending JSON** = `
    {
	    "id": "string",
	    "book": {
		    "title": "string",
		    "pages": "integer"
	    }
    }
  `
- Delete a book: `/api/books/delete`
  * **Method** = **DELETE**
  * **Sending JSON** = `{ "id": "string" }`

### Author
- Get all authors: `/api/authors`
  * **Method** = **GET**
  * **JSON response** = `
    {
		  "id": "string",
		  "name": "string",
		  "created_at": "string",
		  "updated_at": "string"
	  }[]
  `
- Create an author: `/api/authors/create`
  * **Method** = **POST**
  * **Sending JSON** = `
      {
	    "author" : {
		    "name": "string"
	    }
    }
  `
- Update an author: `/api/authors/update`
  * **Method** = **PUT**
  * **Sending JSON** = `
    {
	    "author": {
		    "id": "string",
	      "name": "string"
	    }
    }
  `
- Delete an author: `/api/authors/delete`
  * **Method** = **DELETE**
  * **Sending JSON** = `{ "id": "string" }`

### Genre
- Get all genres: `/api/genres`
  * **Method** = **GET**
  * **JSON response** = `
    {
		  "id": "string",
		  "name": "string",
		  "created_at": "string",
    }[]
	`
- Create a genre: `/api/genres/create`
  * **Method** = **POST**
  * **Sending JSON** `
    {
	    "genre": {
		    "name": "string"
	    }
    }
  `
- Update a genre: `/api/genres/update`
  * **Method** = **PUT**
  * **Sending JSON** = `
    {
	    "genre": {
		    "id": "string",
		    "name": "string"
	    }
    }
  `
- Delete a genre: `/api/genres/delete`
  * **Method** = **DELETE**
  * **Sending JSON** = `{ "id": "string" }`

### Book_Author
- Get all the authors of a book: `/api/book/author`
  * **Method** = **GET**
  * **Sending JSON** = `{ "book_id": "string" }`
  * **JSON response** = `
    {
		  "id": "string",
		  "name": "string",
		  "created_at": "string",
		  "updated_at": "string"
	  }[]
  `
- Get all books of an author: `/api/book/author/books`
  * **Method** = **GET**
  * **Sending JSON =** `{ "author_id": "string" }`
  * **JSON response** = `
    {
      "id": "string",
		  "title": "string",
		  "pages": "integer",
		  "released": "string",
      "created_at": "string",
      "updated_at": "string"
	  }[]
  `
- Link an author to a book: `/api/book/author/link`
  * **Method** = **POST**
  * **Sending JSON** = `
    {
      "book_author": {
        "book_id": "string",
        "author_id": "string"
      }
    }
  `
- Unlink an author from a book: `/api/book/author/unlink`
  * **Method** = **DELETE**
  * **Sending JSON** = `
    {
	    "book_author": {
		    "book_id": "string",
		    "author_id": "string"
	    }
    }
  `

### Book_Genre
- Get all genres of a book: `/api/book/genre/`
  * **Method** = **GET**
  * **Sending JSON** = `{ "book_id": "string" }`
  * **JSON response** = `
    {
		  "id": "string",
		  "name": "string",
		  "created_at": "string",
    }[]
	`
- Get all books of a genre: `/api/book/genre/books`
  * **Method** = **GET**
  * **Sending JSON** = `{ "genre_id": "string" }`
  * **JSON response** = `
    {
      "id": "string",
		  "title": "string",
		  "pages": "integer",
		  "released": "string",
      "created_at": "string",
      "updated_at": "string"
	  }[]
  `
- Link a genre to a book: `/api/book/genre/link`
  * **Method** = **POST**
  * **Sending JSON** = `
    {
      "book_genre": {
        "book_id": "string",
        "genre_id": "string"
      }
    }
  `
- Unlink a genre from a book: `/api/book/genre/unlink`
  * **Method** = **DELETE**
  * **Sending JSON** = `
    {
      "book_genre": {
        "book_id": "string",
        "genre_id": "string"
      }
    }
  `