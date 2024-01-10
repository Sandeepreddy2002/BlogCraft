

# Node.js Note-Taker

A simple command-line and web-based note-taking application using Node.js, Yargs, and Express.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sandeepreddy2002/Node-Note-Taker.git
Navigate to the project directory:


cd Node-Note-Taker

Install dependencies:

npm install
Usage
1. Adding a New Note
Create a new note with content and optional tags:


note new "This is a new note" -t personal,important
2. Viewing All Notes
Get a list of all notes:

note all
3. Finding Notes
Search for notes based on a filter term:


note find "keyword"
4. Removing a Note
Remove a note by providing its ID:

note remove 1
5. Launching the Web Interface
Launch a web interface to view notes:

note web
By default, it will run on http://localhost:5000. You can specify a different port:

note web --port 3000
6. Cleaning Up
Remove all notes:

note clean
Examples
Adding a new note with tags:

 
note new "Meeting at 2 PM" -t work,meeting
Finding notes with a specific keyword:

 
note find "important"
Launching the web interface on a custom port:
 
note web --port 8080
 

 







   
