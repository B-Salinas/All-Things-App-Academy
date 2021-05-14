# Before Getting Started

- [Alembic](https://alembic.sqlalchemy.org/en/latest/)
- [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
- [Flask-WTF](https://flask-wtf.readthedocs.io/en/stable/)
- [Python](https://docs.python.org/3/index.html)
- [SQLAlchemy](https://docs.sqlalchemy.org/en/13/)
- [WTForms](https://wtforms.readthedocs.io/en/2.3.x/)

# Getting Started

In PSQL, create a database and a database user who owns the database. Don't forget passwords need to be wrapped in single quotes! 

```sql
CREATE USER «database_username» WITH PASSWORD '«password»' CREATEDB;
CREATE DATABASE «database_name» WITH OWNER «database_username»;
