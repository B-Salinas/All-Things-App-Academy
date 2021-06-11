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
from flask_wtf import FlaskForm
from wtforms.fields import (StringField, etc...)
from wtforms.validators import DataRequired

v = [DataRequired()]

class Form_Name(FlaskForm):
  input_field_name = StringField("label_goes_here", v)
  # etc...
```

#### `models.py`
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Model_Name(db.Model, UserMixin):
  __tablename__ = "table_name"
  
  column_name = db.Column(db.Type_Goes_here, other column data, etc...)
  # etc...
```

# Route Requirements
For the sake of simplicity, **all of our routes will be handled in the `app/__init__.py` file**. This will not be the case for future projects, so keep that in mind. 

## Updating `app` directory

### `__init__.py`

Previous Setup
```python
from flask from Flask

app = Flask(__name__)
```

New Setup
```python
from flask from Flask, redirect, render_template
from flask-migrate import Migrate
from .config import Configuration
from .models import db, SimplePerson # newly created in .models
from .forms import SimpleForm # newly created in .forms

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)
```

### `forms.py`

Previous Setup
```python 
from flask_wtf import FlaskForm
from wtforms.fields import (StringField, etc...)
from wtforms.validators import DataRequired

v = [DataRequired()]

class Form_Name(FlaskForm):
  input_field_name = StringField("label_goes_here", v)
  # etc...
```

New Setup
```python
from flask_wtf import FlaskForm
from wtforms.fields import (StringField, IntegerField, TextAreaField, SubmitField)
from wtforms.validators import DataRequired

v = [DataRequired()]

class SimpleForm(FlaskForm):
  name = StringField("Name", v)
  age = IntegerField("Age")
  bio = TextAreaField("Bio")
  submit = SubmitField("Submit")
```

#### `models.py`

Previous Setup
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Model_Name(db.Model, UserMixin):
  __tablename__ = "table_name"
  
  column_name = db.Column(db.Type_Goes_here, other column data, etc...)
  # etc...
```

New Setup
```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class SimplePerson(db.Model):
  __tablename__ = "simple_people"
  
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50), nullable=False)
  age = db.Column(db.Integer)
  bio = db.Column(db.String(200))
```
## Actual Routes in `app` directory

#### `GET "/"`
```python
@app.route("/")
def main_page():
  return render_template("main_page.html") # we create this template in "Creating `app / templates` directory"
```

#### `GET "/simple-form"`
```python
@app.route("/simple-form")
def simple_form():
  form = SimpleForm()
  return render_template("simple_form.html", form=form) # we create this template in "Creating `app / templates` directory"
```

#### `POST "/simple-form"`
```python
@app.route("/simple-form", methods=["POST"])
def simple_data():
  form = SimpleForm()
  if form.validate_on_submit():
    data = SimplePerson()
    form.populate_obj(data)
    db.session.add(data)
    db.session.commit()
    return redirect("/")
  print(form.errors)
  return "Bad Data"
```

#### `GET "/simple-form-data"`
```python
@app.route("/simple-form-data")
def simple_form_data():
  result = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
  return render_template("simple_form_data.html", result=result) # we create this template in "Creating `app / templates` directory"
```

# Creating `app / templates` directory

#### `main_page.html`
```python
<h1>Practice Assessment</h1>
```

This file will render when `GET "/"` is used.

#### `simple_form.html`
```python
<form method="POST" action="/simple-form>
  <div>
    {{ form.name.label }} {{ form.name }}
  </div>
  <div>
    {{ form.age.label }} {{ form.age }}
  </div>
  <div>
    {{ form.bio.label }} {{ form.bio }}
  </div>
  <div>
    {{ form.submit }}
  </div>
</form>
```
This file will render when `GET "/simple-form"` is used.

#### `simple_form_data.html`
```python
{% for data in result %}
  <div>{{ data.name }}</div>
  <div>{{ data.age }}</div>
  <div>{{ data.bio }}</div>
{% endfor %}
```
This file will render when `GET "/simple-form-data"` is used.`


