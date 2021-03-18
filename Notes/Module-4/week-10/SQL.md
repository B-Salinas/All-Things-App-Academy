# Getting Started 
Open your terminal, start the PostgreSQL command line client with `psql postgres`. Your terminal should look like this: 
```sql
postgres=#
```

You can also prompt the PostgreSQL command line client with just `psql`, which will take you to your user's database.
```sql
b-salinas=#
```

## Creating Users

**Note:** ALL SQL statements in PostgreSQL end with a semicolon.

#### Normal User
```sql
CREATE USER username_goes_here
WITH
PASSWORD 'password_inbetween_single_quotes';
```

#### Super User
```sql
CREATE USER super_username_goes_here
WITH 
PASSWORD 'super_user_password_inbetween_single_quotes'
SUPERUSER;
```

You should see `CREATE ROLE`, if everything was typed correctly.

### Naming a User
Usernames should contain only lowercase letters, numbers, and underscroes. They should NOT contain spaces, dashes, or any other character.

| Good Usernames | Bad Usernames       |
|----------------|---------------------|
| appacademy     | Ned Ruggeri         |
| patel_kush_12  | melvin-howard-torme |
| bdorsey        | b.d.o.r.s.e.y       |

# SQL Commands

You can quit your psql session anytime by typing `\q` into the terminal:
```
postgres=# \q
b-salinas@Bs-MacBook-Pro ~ %
```

## SELECT
Select **ALL** rows in a given table using `SELECT *`
```
SELECT *
FROM «table name»
```
Select a specific column/s using `SELECT «column name»`
```
SELECT «column 1, column 2, etc»
FROM «table name»
```

