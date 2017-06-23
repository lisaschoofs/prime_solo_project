# Prime Solo Project : Music Notes, a Full-Stack Web Application

[Check out Music Notes online!](https://musicnotesapp.herokuapp.com/)

*For a demo with pre-loaded data, login with these credentials: email: lisaschoofs@gmail.com, password: lisa*

Music Notes is a full-stack web application that enables music teachers to better organize their lesson history and communicate with their students. It takes what is typically accomplished in a disorganized paper process and streamlines it into a digital organization tool.

This project was built over the course of two weeks as a part of my coursework at Prime Digital Academy.

## Technologies Used In this project:
- AngularJS
- Node.js
- Express.js
- PostgreSQL
- Passport.js
- Nodemailer
- Moment.js
- Sweet Alert 2
- GruntJS
- Bootstrap

## Local Installation

### Requirements

[Git](https://git-scm.com/), which allows the files to be brought down to the computer;
[npm](https://nodejs.org/en/download/), which comes included with Node;
[Postico](https://eggerapps.at/postico/), which acts as a local database.

### Instructions

This project can also be run on a personal computer instead of online.
There are three quick steps described individually below:

- **First**, create a git repository on your computer.
    - Create a new folder for the project.
    - Open a terminal window on Mac by right clicking on the folder and selecting "New Terminal at Folder".
    - In the terminal window, type `git init`, and hit enter.
    - Next, type `git remote add origin ` and add the web address for the Github repository the code is located on, with `.git` added to the end of that web address without a space in between, and hit enter.
    - Finally, type `git pull origin master`, and watch the as the files are brought down to the computer.

- **Second**, install the dependencies.
    - In order for the program to run, some other programs that it needs in order to work have to be installed. This is done in one step by typing `npm install` in the same terminal window and hitting enter. Again, the terminal window will show the files being brought into the project folder.
    - One of the dependencies is called Grunt, and it works by typing `grunt` in the same terminal window.
    - Watch the terminal display as it makes changes, and then type `^c` to turn it off and allow the server to be started.
    - Start the Postico application.
    - Copy the text in the `database.sql` file into the "SQL Query" field, highlight all of it, and hit enter. Postico should indicate success for creating the database needed to run the application.

- **Third**, start the server.
    - In the same terminal window, type `npm start`, and the terminal will display "Listening on port 5000".
    - Type "localhost:5000" in the address bar of your browser, and now the application is running, without a need for internet access! However, this means the application also cannot make changes to the real database, so local installation is only useful for testing.
    - When done using the application locally, type `^c` again to turn the server off.

---
## Acknowledgments

- The instructors and staff at [Prime Digital Academy](https://primeacademy.io/)

---
