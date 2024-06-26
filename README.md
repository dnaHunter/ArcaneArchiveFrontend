# Arcane Archives

## Overview

My app is an E-book libary website that will store books and display them to be read. A user will be able to pick from a list of books and them select one to read. Only one person can read each book at one time.

### Problem

It is hard to find good books to read at a good price. Physical books from a libary are an improvement but can be hard to transport and you have to go to a libary in person. E-books can be easier to transport but can be expensive.

### User Profile

The users of my app will be avid readers, people on the move and others who can't or don't want to go to a physical libary but find books to expensive to read as much as they want.

### Features

- Store Ebooks on server
- View Ebooks on client
- Upload new books to the libary
- Homepage with list of all the books
- Users can review books
- When a book is being viewed it can't be accessed by any other users (Time limit to prevent stalling?).
- Users can register and login (Auth?)
- Logged in users can borrow a book for a week
- If a user is logged in and has borrowed books then they should be displayed at the top of the home page.

## Implementation

### Tech Stack

- React
- JavaScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs and external Data

- Project Gutenberg will be used for copyright free ebooks. This is not an API but is a download of outside books.

### Sitemap

All pages should be mobile first and responsive.

- "/" Homepage - A grid of books each with a cover image, title and author. Also has a serch bar in the header. Book card will link to the book info.
- "/books/:id" - Book info page. Has the book title and blurb with a button to the reader. Below are the user review of the books.
- "/books/upload" - Page where users can upload books to be stored on the site
- "/reader/:id" - The reader page. Has the reader for the book displays content of the book in one long page.
- "/user/:userID" - Account page - has the account details and all of their reviews.
- "users/register" - Creates a new account

### Mockups

### Home page

![alt text](/Mockups/image.png)

### Book Details Page

![alt text](/Mockups/Library_page-0001.jpg)

### Upload New Book Page

![alt text](/Mockups/Library_page-0002.jpg)

### Reader Page

![alt text](/Mockups/Library_page-0003.jpg)

### User details page

![alt text](/Mockups/Library_page-0004.jpg)

### Register Page

![alt text](/Mockups/Library_page-0005.jpg)

### Data

![alt text](</Mockups/CapstoneDB(1)-1.png>)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

Books endpoints

- get "/books" gets all the book titles, authors and cover images.
  Example response:

  ```
  [
    {
      "id": "1",
      "title": "Frankestien",
      "author": "Mary Shelley",
      "coverImagePath": "/public/cover1.jpg"
    },
    {
      "id": "2",
      "title": "Romeo and Juliet",
      "author": "William Shakespear",
      "coverImagePath": "/public/cover2.jpg"
    }
    ...
  ]
  ```

- get "/books/:id" gets everything about a specific book.
  Example response
  ```
  {
    "id": "1",
    "title": "Frankestien",
    "author": "Mary Shelley",
    "coverImagePath": "/public/cover1.jpg"
    "blurb": "Frankenstein by Mary Shelley is an epistolary and psychological novel, rightfully considered a milestone in literature.",
    "locked":"false",
    "lockedUntil": "1719221690018"
  }
  ```
- post "books" adds a new book.
  Example body:

  ```
  {
    "title": "Frankestien",
    "author": "Mary Shelley",
    "blurb": "Frankenstein by Mary Shelley is an epistolary and psychological novel, rightfully considered a milestone in literature."
    "coverImage": image,
    "textFile": file
  }
  ```

- get "/books/:id/reader" gets everything about the book for the reader, including the text file.
  Example reponse:
  ```
  {
    "title": "Frankestien",
    "author": "Mary Shelley",
    "coverImagePath": "/public/cover1.jpg"
    "textFile": file
  }
  ```
- patch "books/:id/lock" the system locks the book for 1 hour.
  example body:
  ```
  {
    "id":"1",
    "duration": "1 hour"
  }
  ```
- patch "books/:id/borrow" - borrows the book for a week if the user is logged in.
  example body:
  ```
  {
    "id":"1",
    "lockedBy":"1"
    "duration": "1 Week"
  }
  ```

User endpoints

- get "/user/:id" gets the username and reviews of that user.
  Example response:

  ```
  {
    "username":"Daniel",
    "reveiws": [
      {
        "bookName": "Frankenstien",
        "title": "Best Book",
        "body": "Not that good",
      },
      {
        "bookName": "Romeo and Juliet",
        "title": "Not that good",
        "body": "Best Book",
      }
      ...
    ]
  }
  ```

- get "/user/:id/borrowed-books" gets all the information on all the books the user has borrowed
  Response example:

  ```
  [
    {
      "id": "1",
      "title": "Frankestien",
      "author": "Mary Shelley",
      "coverImagePath": "/public/cover1.jpg"
    },
    {
      "id": "2",
      "title": "Romeo and Juliet",
      "author": "William Shakespear",
      "coverImagePath": "/public/cover2.jpg"
    }
    ...
  ]

  ```

- post "/user/" creates a new user
  Example body:
  ```
  {
    "username":"Daniel"
    "password":"password"
  }
  ```

Reveiw endpoints

- get "/reviews/:bookid" gets all the reviews for a specific book.

  ```
  [
    {
      "username": "Daniel",
      "title": "Best Book",
      "body": "Not that good",
    },
    {
      "username": "Sam",
      "title": "Not that good",
      "body": "Best Book",
    }
  ] 
  ```

- post "/reviews" creates a new review
  Example body:
  ```
  {
    "user_id": "1",
    "title": "Best Book",
    "body": "Not that good",
    "book_id": "1"
  }
  ```

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

I will use authenticaition to have users who can reserve books and leave reviews with names.

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Create 10 sample books and 20 sample reviews on the database.

- Create seeds

- Feature: homepage

  - Backend endpoint for get "/books".
  - Implement frontend homepage

- Feature: book details page without reviews

  - Backend endpoint for get "/books/:id"
  - Frontend page for book details

- Feature: reviews to book details page - defaults to aynonomus if not logged in

  - Implement backend for get "/reviews/:bookid" and post "/reviews".
  - Implement the forntend add new reviews and to display all the reviews for the book.

- Feature: reader page

  - Implement the backend for get "/books/:id/reader"
  - Implement the frontend for the reader page
  - Add lockout feature while book is being viewed - Add timelimit

- Server Unlocks books at the timelimit.

- Feature: Upload new books to the libary

  - Create the backend for post "/books"
  - Implement the frontend for upload page

- Feature users can login:

  - Create backend for post "/register"
  - Create frontend for register page

- Feature logged in user can have reviews linked to there account.

- Feature logged in users can borrow books

  - Create backend for patch for "books/:id/borrow"
  - Add borrow book section to book details

- Feature borrowed books homepage

- Bug fixing

## Nice-to-haves

- Change display details on the reader
- Filter books on genre
- Search for books
- Saves reading progress, local storage, cookies
- All time borrowed books
- How many times a book has been borrowed
- Copies