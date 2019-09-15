# Practice API - Lambda Motivational Quotes

This is a very special database made just for Lambda students to practice CRUD operations. Please respect the database and only post inspirational messages for your fellow classmates. Certain quotes from TLs and SLs will be protected from DELETE. Please only DELETE quotes you added! 

### Base URL: `https://lambda-practice-db.herokuapp.com`

### Endpoints

- GET all quotes `/api/getem` 

- GET one random quote `/api/getone`

- POST a new quote `/api/post` - POST requires an object with the following shape:

```javascript 
{
    "text": "A very inspiration quote goes here.",
    "author": "Herman the Cat"
} 
```

- PUT (edits) a quote by ID `/api/post/:id` - PUT requires an object with the following shape:

```javascript 
{
    "text": "Another very inspiration quote goes here.",
    "author": ""  // Author can be empty
} 
```

- DELETE a quote by ID `/api/post/:id`

# Summary of Properties

| Property    | Data Type | Nullable                          |
| -------- | ------ | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | integer  | Automatically assigned  |
| text     | string   | No               |
| author   | string   | Yes              | 
| created_at| timestamp   | Automatically assigned   |

- HINT: You can view the database using the endpoints above in your browser

