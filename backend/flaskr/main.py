# Commands in PorwerShell (Windows)
# venv\Script\activate
# $env:FLASK_APP = "main"
# flask run

#---------------------------------------------- Imports ----------------------------------------------#
from flask import Flask, redirect, url_for, request
from flask.templating import render_template
from flask_mysqldb import MySQL


#-----------------------------------------------------------------------------------------------------#
#---------------------------------------- Global Variables -------------------------------------------#


#-----------------------------------------------------------------------------------------------------#
#----------------------------------------------- Flask -----------------------------------------------#

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'mydb'
mysql = MySQL(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/API/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        firstName = request.form['firstName']
        lastName = request.form['lastName']
        username = request.form['username']
        password = request.form['password']
    else:
        firstName = request.args.get['firstName']
        lastName = request.args.get['lastName']
        username = request.args.get['username']
        password = request.args.get['password']

    cursor = mysql.connection.cursor()
    flag = cursor.execute("SELECT * FROM users WHERE `Username` = %s", (username,))
    mysql.connection.commit()

    if flag:
        print("Username already in use....")
        return index()
    
    cursor.execute("INSERT INTO users (FirstName, LastName, Username, Password)  VALUES (%s, %s, %s, %s)", (firstName, lastName, username, password))
    mysql.connection.commit()
    cursor.close()
    print("User crated with success....")
    
    return redirect(url_for('success', name = firstName))

@app.route('/API/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = request.form['Login']
        password = request.form['password']
    else:
        user = request.args.get['Login']
        password = request.args.get['password']

    cursor = mysql.connection.cursor()
    data = cursor.execute("SELECT * FROM users WHERE `FirstName` = %s AND `Password` = %s", (user, password))
    mysql.connection.commit()
    cursor.close()

    if(data):
        return redirect(url_for('success', name = user))
    else:
        return index()

@app.route('/success/<name>')
def success(name):
   return 'welcome %s' % name

if __name__ == '__main__':
    app.run(debug=True)

#-----------------------------------------------------------------------------------------------------#
#------------------------------------------ Python Scripts -------------------------------------------#







