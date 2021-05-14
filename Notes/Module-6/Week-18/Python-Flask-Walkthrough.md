# Before Getting Started

## Docs
- [Alembic](https://alembic.sqlalchemy.org/en/latest/)
- [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
- [Flask-WTF](https://flask-wtf.readthedocs.io/en/stable/)
- [Python](https://docs.python.org/3/index.html)
- [SQLAlchemy](https://docs.sqlalchemy.org/en/13/)
- [WTForms](https://wtforms.readthedocs.io/en/2.3.x/)

# Getting Started

In PSQL, create a database and a database user who owns the database. **Don't forget passwords need to be wrapped in single quotes!**

```sql
CREATE USER database_username 
WITH PASSWORD 'password_goes_here' 
CREATEDB;

CREATE DATABASE database_name 
WITH OWNER database_username;
```

Use `pipenv` to install dependencies. 

```zsh
pipenv install «dependency_name»
```

[comment]: <> (And for our convenience:)
[comment]: <> (```zsh)
[comment]: <> (pipenv install pytest pycodestyle pylint rope flask flask-sqlalchemy alembic flask-migrate python-dotenv psycopg2-binary sqlalchemy wtforms flask-wtf)
[comment]: <> (```)

Once you've done that, activate your virtual environment using `pipenv shell` in your terminal!

# Setting up `.env` environment

#### `.env`
```python
FLASK_ENV=development
SECRET_KEY=«generate_secret_key»
DATABASE_URL=«scheme»://«username»:«password»@«server_name»/«database_name»
```

- **Note 1:** To generate a `SECRET_KEY`, type in `node` into your terminal. You will be welcomed into the Node.js Enviroment. Use `require("crypto").randomBytes(32).toString("hex");` to generate a secret key. **A `SECRET_KEY` do not need to be wrapped in strings when placed in your `.env` file.**

- **Note 2:** An example of a `DATABASE_URL` would be:
```
  postgresql://sqlalchemy_test:password@localhost/sqlalchemy_test
  \________/   \_____________/ \______/ \_______/ \_____________/
      |              |            |         |            |
   scheme        username     password  server_name  database_name
```

#### `.flaskenv`
```python
FLASK_APP=app OR name of main file
FLASK_ENV=development
```

# Setting up `app` directory

#### `__init__.py`
```python
from flask from Flask

app = Flask(__name__)
```

#### `config.py`
```python
import os 
from os import environ
from flask_sqlalchemy import SQLAlchemy

class Configuration:
  SECRET_KEY = os.environ.get('SECRET_KEY')
  SQLALCHEMY_DATABASE_URI = environ.get('DATABASE_URL')
  SQLALCHEMY_TRACK_MODIFICATIONS = False
```

#### `forms.py`
```python 
from flask import Flask
import flask_wtf import FlaskForm
from wtforms.fields import (StringField, etc...)
from wtforms.validators import DataRequired

v = [DataRequired()]

class Form_Name(FlaskForm):
  input_field_name = StringField("label_goes_here", v)
  # etc...
```

#### `models.py`
```python
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class Model_Name(db.Model, UserMixin):
  __tablename__ = "table_name"
  
  column_name = db.Column(db.Type_Goes_here, other column data, etc...)
  # etc...
```

# Route Requirements
For the sake of simplicity, **all of our routes will be handled in the `app/__init__.py` file**. This will not be the case for future projects, so keep that in mind. 

#### `app / __init__.py`
```python
# previously set up
from flask from Flask

app = Flask(__name__)

# new set up
from flask from Flask, redirect, render_template
from flask-migrate import Migrate
from .config import Configuration
from .models import db, «Model_Name_Created_In_.models.py»
from .forms import «Form_Name_Created_In_.forms.py»

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)
```

#### `GET "/"`
```python
@app.route("/")
def main_page():
  return render_template("main_page.html") # we haven't created this template yet
```
