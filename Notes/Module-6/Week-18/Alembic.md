# Setting up Alembic 

Installing Alembic
```zsh
pipenv install alembic psycopg2-binary
```

Initialize Alembic's File Structure
```zsh
pipenv run alembic init <directory-name>
```

OR a lot of people just choose to put it in a directory named "alembic", so the command you can run is
```zsh
pipenv run alembic init alembic
```
- The `alembic/` directory holds your migrations and was provided for you when you ran `pipenv run alembic init alembic`
- The `README` file contains a description of the type of migration environment that you created
- The `env.py` file is really important, as Alembic will load the env.py file to configure the environment. 
- The `script.py.mako` file is the template that Alembic uses to generate the migration scripts that you tell it to generate -- it's customizable! 
- The `versions/` directory will hold the actual migration files
- And, the `alembic.ini` file is how you can configure Alembic's many, many configuration options. 

Inside the `alembic.ini` file, the first setting is called "script_location":
```python
file_template = %%(year)d%%(month).2d%%(day).2d_%%(hour).2d%%(minute).2d%%(second).2d_%%(slug)s
```

Inside the `env.py` file, `import os` at the top of the file. Then before the declaration of `run_migrations_offline`, add:
```python
config.set_main_option("sqlalchemy.url", os.environ.get("DATABASE_URL"))
```

Just in case, export the "DATABASE_URL" environment value for future use in the Alembic Command Line:
```zsh
export DATABASE_URL=postgresql://alembic_test:alembic_test@localhost/alembic_test
```

# Migrations with Alembic

To generate a new revision (migration)
```zsh
pipenv run alembic revision -m "the message about the revision"
```

This will create a new file in the `versions` directory of the Alembic directory. 

Inside this file, we will be focusing on the `upgrade` and `downgrade` methods. 

Upgrade
```python
def upgrade():
    op.create_table(
        "owners",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("first_name", sa.String(50), nullable=False),
        sa.Column("last_name", sa.String(50), nullable=False),
        sa.Column("email", sa.String(255), nullable=False),
    )
```

Downgrade
```python
def downgrade():
    op.drop_table("owners")
```

### Running Migrations
Now we tell Alembic that we want to apply our database revisions:
```zsh
pipenv run alembic upgrade <revision>
```

If you don't specifiy the version number, it defaults to the last revision created. 

However,
```zsh
pipenv run alembic upgrade head

```
will run all of the unapplied revisions (using 'head').

If you run into any problems, use
```zsh
pipenv run alembic downgrade base
``` 
where 'base' is used to remove all of the applied revisions. 
