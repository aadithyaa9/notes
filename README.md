ThinkBoard is a simple and elegant note-taking web application built with React and Node.js. It allows users to create, view, update, and delete notes, with smooth UI transitions and a modern design. The application also includes rate limiting to protect the backend from excessive requests.

Features
**Create new notes with a title and content

View all notes, sorted by creation date

Edit existing notes directly from the detail page

Delete notes from both list and detail views

Rate limiting implemented on the backend to prevent too many requests

Beautiful and responsive UI styled with Tailwind CSS and Lucide icons**



Tech Stack
  Frontend
  ** React

   React Router

   Axios

   Tailwind CSS

   Lucide React icons

   react-hot-toast for notifications**

  Backend
  **Node.js
  
  Express
  
  MongoDB (with Mongoose)
  
  Upstash Redis (for rate limiting)**




Backend
1)Clone the repository and navigate to the backend folder.

2)Install dependencies:
    npm i

3)Configure environment variables in a .env file:
MONGO_URI=your_mongo_db_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

4) Start the Backend

npm run dev








Frontend
1)Navigate to the frontend folder.

2)Install dependencies:
  npm install


3)Start the frontend Server:
  npm run dev

4)Visit http://localhost:5173 to use the app.



API Endpoints
**GET /api/notes — Fetch all notes

GET /api/notes/:id — Fetch a single note by ID

POST /api/notes — Create a new note

PUT /api/notes/:id — Update a note

DELETE /api/notes/:id — Delete a note
**


**Rate limiting** is applied globally to these endpoints to allow a certain number of requests per window.

**Rate Limiting**
The backend uses Upstash Redis with a sliding window algorithm to limit the number of requests a client can make in a given time frame.
If a user exceeds the limit, they receive a 429 error with a clear message indicating they should try again later.

**Contributing**
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


