# Commands in PorwerShell (Windows)
# venv\Script\activate
# $env:FLASK_APP = "main"
# flask run

#---------------------------------------------- Imports ----------------------------------------------#
from flask import Flask, redirect, url_for, request, jsonify
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
        firstName = removeChars(request.form['firstName'])
        lastName = removeChars(request.form['lastName'])
        username = removeChars(request.form['username'])
        email = removeChars(request.form['email'])
        password = removeChars(request.form['password'])
    else:
        firstName = removeChars(request.args.get['firstName'])
        lastName = removeChars(request.args.get['lastName'])
        username = removeChars(request.args.get['username'])
        email = removeChars(request.args.get['email'])
        password = removeChars(request.args.get['password'])

    # Cursor.execute will return the count of the numbers of rows affected during the query
    # How Username is Primary Key, flag will be 0 (not exist) or 1 (exist)
    cursor = mysql.connection.cursor()
    flag = cursor.execute("SELECT * FROM users WHERE `Username` = %s", (username,))
    mysql.connection.commit()

    if flag:
        print("Username already in use....")
        return index()
    
    cursor.execute("INSERT INTO users (FirstName, LastName, Username, Email, Password)  VALUES (%s, %s, %s, %s, %s)", (firstName, lastName, username, email, password))
    mysql.connection.commit()
    cursor.close()
    print("User crated with success....")
    
    return redirect(url_for('user', name = firstName))

@app.route('/API/login', methods=['GET', 'POST'])
def login():
    global User
    if request.method == 'POST':
        user = removeChars(request.form['Login'])
        password = removeChars(request.form['password'])
    else:
        user = removeChars(request.args.get['Login'])
        password = removeChars(request.args.get['password'])

    cursor = mysql.connection.cursor()
    flag = cursor.execute("SELECT * FROM users WHERE `Username` = %s AND `Password` = %s", (user, password))
    data = cursor.fetchone()
    #print(data)
    mysql.connection.commit()
    cursor.close()

    if(flag):
        if (data[5]):
            # Case that the user is Admin
            return redirect(url_for('admin', name = user))
        else:
            return redirect(url_for('user', name = user))
    else:
        print("Username or password incorrect!")
        return index()

@app.route('/API/getForms/<User>', methods=['POST', 'GET'])
def allForms(User=None):
    #print(User)
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM forms WHERE `Creator` = %s", (User,))
    data = cursor.fetchall()
    #print(data)
    mysql.connection.commit()
    cursor.close()

    json = '['

    for row in range(len(data)):
        aux = {
            "FormName" : data[row][0],
            "Creator" : data[row][1],
            "Content" : data[row][2],
            "FormID" : data[row][3] 
        }

        json += str(aux)

        if not (row == len(data) - 1):
            json += ','
    json += ']'
    #print(json)
    return jsonify(json)



@app.route('/user/<name>')
def user(name):
    return 'welcome %s' % name


@app.route('/<name>')
def admin(name):
    return render_template('initial.html', name=name)



if __name__ == '__main__':
    app.run(debug=True)

#-----------------------------------------------------------------------------------------------------#
#------------------------------------------ Python Scripts -------------------------------------------#

def removeChars(word):
    char = {'"', "'", '`', '´'}
    for i in word:
        for c in char:
            if i == c:
                word = word.replace(i, '')
    return word