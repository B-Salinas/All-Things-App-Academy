# Getting Started 
Open your terminal, start the PostgreSQL command line client with the command `psql postgres`. Your terminal should look like this: 
```
postgres=#
```

## Creating Users

== **Note:** ALL SQL statements in PostgreSQL end with a semicolon. ==

#### Normal User
```
CREATE USER username_goes_here
WITH
PASSWORD 'password_inbetween_single_quotes';
```

#### Super User
```
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
```

