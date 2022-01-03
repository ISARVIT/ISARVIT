# ISARVIT 👩‍⚕️ 
##### An Open-Source, Smart and Friendly Medical Report Generator
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/ISARVIT/ISARVIT) [![Website shields.io](https://img.shields.io/website-up-down-green-red/https/isarvit.github.io/ISARVIT/)](https://github.com/ISARVIT/ISARVIT)

ISARVIT is a very nice web application based around the simple idea of **making the generation of Medical Reports Easier**. It started as a student project under Mr. Slim Hammadi (researcher at [CRIStAL](https://www.cristal.univ-lille.fr/spip.php?page=rubrique&id_rubrique=1) and professor at [Centrale Lille](https://centralelille.fr/)) and the [Centre Hospitalier Universitaire de Lille](https://www.chu-lille.fr/).

The idea is simple: a Doctor (whom from now on will be refered as an "Admin") can create medical forms and a template for the Medical Report, another user (who will be refered as "User"), such as another doctor or radiologist, can access the forms availables, fill in the questions with his patient's information, and in a matter of seconds have a nicely formated Medical Report in his hands.

**Why do this? Why not stick to the traditional way of just making them?** Well:
- First of all, doing the traditional typed way takes time.
- More often than not, some of these medical reports are not very pretty of user friendly
- We offer other interesting options: such as automatically generating SVGs of the affected organs or a QR Code where the patient/another doctor can easily reread the answers to the forms, thus avoiding repeating the same questions.
- Finally, it opens doors for more groundbreaking ideas/implementations latter: why not have AI/Natural Language Processing do part of the report for you? With the right foundations in code already, the possibilities are endless.

**A small point about the architecture:** Frontend and Backend are completely separate, with only the API with axios connections receiving and sending information. This was done because it is safer to have less things depending on the Hospital's backend servers (if they are stored there, which they don't need to - but in the case they are, security first.) and to give a true modularity to both parts.

# 1. Backend
![](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white) ![](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

The backend is developed in Python, using the framework Flask (with some libraries) and hosted in Heroku. The idea was done an API to help the frontend to change information with a database hosted using MySQL, this should include cryptographic and make a safe environment. You an see the live version [here](https://api-isarvit.herokuapp.com)

To run the backend in your machine, you need to have [FLASK](https://flask.palletsprojects.com/en/2.0.x/) installed. The tutorial to install from zero in your machine are :

If you already have Python3 intalled, skip to step 2.

**Step 1: Install Python3**.
Windows:
```bash
pip install python3
```
Linux:
```bash
sudo apt install python3
```
**Step 2: Prepare the environment**.
So create a separate directory for your project and execute :
```bash
mkdir <project name>
```
After, open this directory :
```bash
cd <project name>
```
And then create a virtual env :
```bash
python3 -m venv <name of environment>
```
**Step 3: Activate the environment**.
Windows:
```bash
<name of environment>\Scripts\activate
```
Linux:
```bash
.<name of environment>/bin/activate
```
**Step 4: Install FLask in environment**.
```bash
pip install Flask
```
**Step 5: Install requirements**.
```bash
pip install -r requirements.txt
```
**Step 6: Configure Flask**.
In venv set the main.py to be executed in Flask with the command:
Windows:
```bash
$env:FLASK_APP:"<name of file>.py"
```
Linux:
```bash
export FLASK_APP=<name of file>.py
```
After that, use this command to run the application:
```bash
flask run
```

*Observation: If you want use a local database Mysql, you can find a script in **API/static/MySQL/make** to create the database necessary for the application.*

Enjoy the rest of tutorial! ~ Joel

# 2. Frontend
![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

The frontend is developed in React (and a ton of libraries) and deployed on gh-pages in this repository (in the branch gh-pages). Which makes both the frontend deploy and backend deploy completely separate. You can see the live version [here](https://isarvit.github.io/ISARVIT/).

The idea is to have a more-or-less MVC* architecture (*[React is not truly MVC](https://reactjs.org/blog/2013/06/05/why-react.html), but the way the viewing was constructed was based on it) with a control variable on the index.js coordinating the rest of the pages.

To run the frontend in your machine, you need to have [NPM](https://www.npmjs.com/) installed. The steps to run in your machine are:

```bash
git clone git@github.com:ISARVIT/ISARVIT.git
```
To clone into your computer (or use Github Desktop to do so). Move to the branch you wish in the repository and then:
```bash
cd frontend
```
To go to the frontend folder. If you're running for the first time, do:
```bash
npm install
```
To install all packages, this is only needed to do once (or everytime someone adds a new package). Finally, to run in your local server:
```bash
npm run start
```
If you have an error about open-ssl, you might want to do (dedicated to our friend Colin)
```bash
npm run colin
```
After you're done with your changes and want to deploy to gh-pages in live, do:
```bash
npm run deploy
```
(Please just do this if you know what you're doing)

# 3. To Do

**For february** (the deadline of handing the project in Centrale Lille):
- Redo our logo and our visual identity
- Clean the Github of the organization and add examples
- Make the documentation better/more detailed
- Finish the integration of the forms creation: Operations, Equations, etc...

For the future:
- Explore the IDEA of having AI generating part of the templates.

# 4. Help us Mantain It

Well, since the idea is to have this as an open-source and base for other projects, you are free to fork, expand on the ideas, or just join the team later in development. _(Or you can hire Andreis and Joel and help them achieve their dreams of working with code in something they love. Just saying...)_

![Contributions Over Time. Don't let it go down!](https://contributor-graph-api.apiseven.com/contributors-svg?chart=contributorOverTime&repo=ISARVIT/ISARVIT)
