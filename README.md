# Practice API - Lambda Motivational Quotes

This is a very special database made just for Lambda students to practice CRUD operations. Please respect the database and only post inspirational messages for your fellow classmates. 

Quotes that have an ID 1-22 are protected and cannot be edited or deleted. I will be monitoring the database and removing any content that isn't inspirational. 

Build an application where you register/login a user to get a list of quotes or get a random quote 1 at a time. 

### Base URL: `https://lambda-practice-db.herokuapp.com`

API Documentation

- [POST] to `/api/auth/register`: returns a token to be added to the header of all other requests.Tokens expire after 7 days.
- [POST] to `/api/auth/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the body of the request: { username: 'ExampleUserName', password: '1234' }

Requires Token to be sent back in the header of the following requests:

- [GET] to `/api/post`: returns the list of quotes.
- [GET] to `/api/post/getone`: returns a random quote.
- [POST] to `/api/post`: creates a new quote object. Pass the quote as the body of the request (the second argument passed to axios.post).
- [PUT] to `/api/post/:id`: updates the quote using the id passed as part of the URL. Send the quote object with the updated information as the body of the request (the second argument passed to axios.put).
- [DELETE] to `/api/post/:id`: removes the quote and return a success/error message.



### POST & PUT requires an object with the following shape:

```javascript 
{
    "text": "A very inspirational quote goes here.",
    "author": "Herman the Cat"
} 
```


# Summary of Properties

| Property    | Data Type | Nullable                          |
| -------- | ------ | --------------------------------- |
| id       | integer  | Automatically assigned  |
| text     | string   | No               |
| author   | string   | Yes              | 
| created_at| timestamp   | Automatically assigned   |


