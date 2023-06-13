## Nimans - Music Recommendation System
Nimans is a music recommendation system that uses user input and facial recognition to recommend songs to users. The system is built using React, Express, MongoDB, and Python.

Table of Contents
Features
Technologies
Installation
Usage
API Documentation
Contributing
License
Features
Nimans has the following features:

Users can search for songs or artists
Users can get random song recommendations
Users can get song recommendations based on their mood detected through facial recognition
Users can create an account and save their favorite songs
Technologies
Nimans is built using the following technologies:

Frontend
React
Axios
React Router
Backend
Express
MongoDB
Python
OpenCV
dlib
Installation
To install Nimans, follow these steps:

Clone this repository:
```git clone https://github.com/<YOUR_USERNAME>/nimans.git
```

Install dependencies:
```
cd nimans
npm install
cd client
npm install
```

Create a .env file in the root directory and add the following environment variables:
```
MONGODB_URI=<YOUR_MONGODB_URI>
PYTHON_PATH=<PATH_TO_PYTHON_EXECUTABLE>
```

Replace <YOUR_MONGODB_URI> with your MongoDB connection URI and <PATH_TO_PYTHON_EXECUTABLE> with the path to your Python executable.

Start the server:

```
npm run server
```

In a new terminal, start the client:
```
cd client
npm start
```

Usage
To use Nimans, follow these steps:

Open your web browser and go to http://localhost:3000/

Search for songs or artists by typing in the search box.

Get random song recommendations by clicking on the "Get Random Recommendations" button.

Get song recommendations based on your mood by clicking on the "Get Recommendations Based on Mood" button and allowing the system to access your camera.

Create an account and save your favorite songs by clicking on the "Sign Up" button and filling out the registration form.

API Documentation
Nimans has the following API endpoints:

GET /random
Returns an array of randomly recommended songs.

POST /search
Accepts a JSON object with a search_param property and returns an array of search results matching the search_param.

POST /mood
Accepts an image file and returns an array of song recommendations based on the mood detected in the image.


