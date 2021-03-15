

# Creating Users

### Normal User
```
CREATE USER username_goes_here
WITH
PASSWORD 'password_inbetween_single_quotes';
```

### Super User
```
CREATE USER super_username_goes_here
WITH 
PASSWORD 'super_user_password_inbetween_single_quotes'
SUPERUSER;
```
**Note:** ALL SQL statements in PostgreSQL end with a semicolon.

#### Naming a User
Usernames should contain only lowercase letters, numbers, and underscroes. They should NOT contain spaces, dashes, or any other character.

**Good Usernames**
- appacademy
- patel_kush_12
- bdorsey

**Bad/Incorrect Usernames**
- Ned Ruggeri
- melvin-howard-torme
- b.d.o.r.s.e.y
