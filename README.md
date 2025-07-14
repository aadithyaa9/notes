ThinkBoard
ThinkBoard is a simple and elegant note-taking web application built with React and Node.js. It allows users to create, view, update, and delete notes, with smooth UI transitions and a modern design. The application also includes rate limiting to protect the backend from excessive requests.

Features
Create new notes with a title and rich content

View a list of all notes, sorted by creation date

Edit existing notes directly from the detail page

Delete notes from both the list and the detail view

Rate limiting implemented on the backend to prevent too many requests

Beautiful and responsive user interface styled with Tailwind CSS and Lucide icons

Tech Stack
Frontend
React

React Router

Axios

Tailwind CSS

Lucide React icons

react-hot-toast for notifications

Backend
Node.js

Express

MongoDB (with Mongoose)

Upstash Redis (for rate limiting)

Installation
Backend
Clone the repository and navigate to the backend folder.

Install dependencies:

nginx
Copy
Edit
npm install
Configure environment variables in a .env file:

ini
Copy
Edit
MONGO_URI=your_mongo_db_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
Start the backend server:

arduino
Copy
Edit
npm run dev
Frontend
Navigate to the frontend folder.

Install dependencies:

nginx
Copy
Edit
npm install
Start the frontend development server:

arduino
Copy
Edit
npm run dev
Visit http://localhost:5173 to use the app.

API Endpoints
GET /api/notes - Fetch all notes

GET /api/notes/:id - Fetch a single note by ID

POST /api/notes - Create a new note

PUT /api/notes/:id - Update a note

DELETE /api/notes/:id - Delete a note

Rate limiting is applied globally to these endpoints to allow a certain number of requests per window.

Rate Limiting
The backend uses Upstash Redis with a sliding window algorithm to limit the number of requests a client can make in a given time frame. If a user exceeds the limit, they receive a 429 error and a friendly message indicating they should try again later.

Project Structure
css
Copy
Edit
frontend/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
backend/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── config/
  └── server.js
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

