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

> **Note:** ALL SQL statements in PostgreSQL end with a semicolon.

### Naming a User
Usernames should contain only lowercase letters, numbers, and underscroes. They should NOT contain spaces, dashes, or any other character.

| Good Usernames | Bad Usernames       |
|----------------|---------------------|
| appacademy     | Ned Ruggeri         |
| patel_kush_12  | melvin-howard-torme |
| bdorsey        | b.d.o.r.s.e.y       |

# SQL Basic Commands

You can quit your psql session anytime by typing `\q` into the terminal:
```sql
postgres=# \q
b-salinas@Bs-MacBook-Pro ~ %
```

### SELECT
Select **ALL** rows in a given table using `SELECT *`/
```sql
SELECT *
FROM «table name»;
```

Select a specific column/s using `SELECT «column name»`.
```sql
SELECT «column 1, column 2, etc»
FROM «table name»;
```

### WHERE
The simplest WHERE clause finds a row by a single column value.
```sql
SELECT «column 1, column 2, etc»
FROM «table name»
WHERE «column name» = 'value/condition';
```

The WHERE clause can also be used to check for a list of values.
```sql
SELECT «column 1, column 2, etc»
FROM «table name»
WHERE «column name» IN ('value/condition 1', 'value/condition 2', etc);
```

We can use the WHERE to check for a range of numeric/integar values.
```sql
SELECT «column 1, column 2, etc»
FROM «table name»
WHERE «column name» BETWEEN «value 1» AND «value 2»;
```

### ORDER BY
You can specify the order in which you get back data, say ASCENDING...
```sql
SELECT name, «other column name»
FROM «table name»
ORDER BY name;
```

Or DESCENDING order.
```sql
SELECT name, «other column name»
FROM «table name»
ORDER BY name DESC;
```

### LIMIT 
You can limit the number of rows returned using LIMIT.
```sql
SELECT name, «other column name»
FROM «table name»
ORDER BY name
LIMIT 100;
```

### OFFSET 
The LIMIT command above would return the first 100 rows that would meet the specified criteria. Let's say you want to see the _next_ 100 rows, you can do this using OFFSET after the LIMIT clause. 

```sql
SELECT name, «other column name»
FROM «table name»
ORDER BY name
LIMIT 100 OFFSET 100;
```

This would return rows 101 - 200. It still _limits_ the total number of rows to 100, but it starts with the 100th row instead of the 1st row. 

# SQL Operators
An SQL operator is a word or character that is used inside a WHERE clause to perform comparisons or arithmetic operations. 

### Logical Operators
| Operator | Description                                                   |
|----------|---------------------------------------------------------------|
| ALL      | TRUE if all of the subquery values meet the condition.        |
| AND      | TRUE if all the conditions separated by AND are TRUE.         |
| ANY      | TRUE if any of the subquery values meet the condition.        |
| BETWEEN  | TRUE if the operand is within the range of comparisons.       |
| EXISTS   | TRUE if the subquery returns one or more records.             |
| IN       | TRUE if the operand is equal to one of a list of expressions. |
| LIKE     | TRUE if the operand matches a pattern (accepts "wildcards").  |
| NOT      | Displays a record if the condition(s) is NOT TRUE.            |
| OR       | TRUE if any of the conditions separated by OR is TRUE.        |
| SOME     | TRUE if any of the subquery values meet the condition.        |

### Wildcard Operator
The wildcard character (`%`) is used to substitute one or more characters in a string. The wildcard character is used with the LIKE operator, where the LIKE operator is used with the WHERE clause. 

| `LIKE`  | Matches "dog" | Matches "hotdog" | Matches "dog-tired" | Matches "ordogordo" | 
|---------|---------------|------------------|---------------------|---------------------|
| `dog`   | yes           | no               | no                  | no                  |
| `%dog`  | yes           | yes              | no                  | no                  |
| `dog%`  | yes           | no               | yes                 | no                  |
| `%dog%` | yes           | yes              | yes                 | yes                 |

> **Note:** Other SQL wildcard characters can be found [here](https://www.w3schools.com/sql/sql_wildcards.asp).

### Arithmetic Operators
| Operator | Meaning                     | Syntax  |
|----------|-----------------------------|---------|
| `+`      | Addition                    | `a + b` |
| `-`      | Subtraction                 | `a - b` |
| `*`      | Multiplication              | `a * b` |
| `/`      | Division                    | `a / b` |
| `%`      | Modulus (returns remainder) | `a % b` |

### Comparison Operators
| Operator | Meaning                  | Syntax   |
|----------|--------------------------|----------|
| `=`      | Equals                   | `a = b`  |
| `!=`     | Not equal to             | `a != b` |
| `<>`     | Not equal to             | `a <> b` |
| `>`      | Greater than             | `a > b`  |
| `<`      | Less than                | `a < b`  |
| `>=`     | Greater than or equal to | `a >= b` |
| `<=`     | Less than or equal to    | `a <= b` |
| `!<`     | Not less than            | `a !< b` |
| `!>`     | Not greater than         | `a !> b` |

# SQL Advanced Commands

## INSERT
We can insert a new table row using the following INSERT statement
```sql
INSERT INTO «table name» («column 1 name, column 2 name»)
VALUES
(column 1 value, column 2 value);
```

If you do not specify which columns our new data is being inserted to, make sure to INSERT data into the entire row length.
```sql
INSERT INTO «table name with 5 columns» 
VALUES
(column 1 value, column 2 value, column 3 value, column 4 value, column 5 value);
```

You can also insert multiple rows at once, to prevent you from writing multiple INSERT statements (you can choose to specifiy which particular columns as well). 
```sql
INSERT INTO «table name»
VALUES
(column 1 value, column 2 value, etc),
(column 1 value, column 2 value, etc),
(column 1 value, column 2 value, etc),
(column 1 value, column 2 value, etc)
...etc;
```

## INNER JOIN
Use JOIN to retrieve rows from multiple tables
```sql
SELECT * 
FROM «table 1 name»
INNER JOIN «table 2 name» ON (table_1_column_name.foreign_key_id = table_2_column_name.primary_key_id);
```

Here is more [in-depth documentation](https://www.postgresql.org/docs/8.3/tutorial-join.html) of JOIN. 

> **Note:** Aside from INNER JOIN, there are different types of JOIN operators that can be found [here](https://www.postgresqltutorial.com/postgresql-joins/). 

# Writing and Running Seed Files 

#### Caret Method
```
psql -d [database] -U [username] < [path_to_file/file.sql]
```

#### Pipe Method
```
cat [path_to_file/file.sql] | psql -d [database] -U [username]
```
