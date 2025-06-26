export default {
    meta: {
        id: "sql-basics",
        title: "SQL Basics",
        description: "Fundamentals of SQL including command categories, examples, and practical usage",
        category: "database",
        subcategory: "sql",
        difficulty: "beginner",
        prerequisites: [],
        created: "2025-06-24",
        updated: "2025-06-24",
        duration: 30,
        keywords: ["sql", "ddl", "dml", "dcl", "tcl", "dql", "query language"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to SQL",
            anchor: "intro"
        },
        {
            type: "paragraph",
            text: "SQL (Structured Query Language) is a standard language for accessing and managing relational databases. It allows you to define, manipulate, secure, and query data stored in tables."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: SQL is like giving instructions to a library — how to store new books (INSERT), find books (SELECT), or remove them (DELETE)."
        },

        {
            type: "heading",
            level: 2,
            text: "Categories of SQL Commands",
            anchor: "sql-categories"
        },
        {
            type: "table",
            headers: ["Command Type", "Purpose", "Examples"],
            rows: [
                ["DDL (Data Definition Language)", "Define structure of DB objects", "CREATE, ALTER, DROP"],
                ["DML (Data Manipulation Language)", "Manipulate data inside tables", "INSERT, UPDATE, DELETE"],
                ["DCL (Data Control Language)", "Control access and permissions", "GRANT, REVOKE"],
                ["TCL (Transaction Control Language)", "Manage transaction behavior", "COMMIT, ROLLBACK, SAVEPOINT"],
                ["DQL (Data Query Language)", "Query data", "SELECT"]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trick to remember: Think **CUDQS** for command types: Create (DDL), Update (DML), Data query (DQL), Grant/Revoke (DCL), Save/Undo (TCL)"
        },

        {
            type: "heading",
            level: 2,
            text: "DDL – Define Database Structure",
            anchor: "ddl"
        },
        {
            type: "paragraph",
            text: "DDL commands create and modify the structure of database objects such as tables, schemas, indexes, and views."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  age INT
);`
        },

        {
            type: "heading",
            level: 2,
            text: "DML – Manipulate Data",
            anchor: "dml"
        },
        {
            type: "paragraph",
            text: "DML commands let you add, modify, or delete data within tables. They don’t affect structure, only the contents."
        },
        {
            type: "code",
            language: "sql",
            code: `INSERT INTO students VALUES (1, 'Alice', 21);
UPDATE students SET age = 22 WHERE id = 1;
DELETE FROM students WHERE id = 1;`
        },

        {
            type: "heading",
            level: 2,
            text: "DCL – Secure the Database",
            anchor: "dcl"
        },
        {
            type: "paragraph",
            text: "DCL commands manage privileges and access control to data and resources."
        },
        {
            type: "code",
            language: "sql",
            code: `GRANT SELECT, INSERT ON students TO 'user1';
REVOKE INSERT ON students FROM 'user1';`
        },

        {
            type: "heading",
            level: 2,
            text: "TCL – Manage Transactions",
            anchor: "tcl"
        },
        {
            type: "paragraph",
            text: "TCL commands handle transactions — groups of operations treated as a single unit of work. Useful in multi-step database operations."
        },
        {
            type: "code",
            language: "sql",
            code: `BEGIN;
UPDATE students SET age = 25 WHERE id = 2;
COMMIT; -- saves the change

-- or to undo
ROLLBACK;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Transactions are like shopping carts — you can add/remove items (DML), but only when you pay (COMMIT) is it final."
        },

        {
            type: "heading",
            level: 2,
            text: "DQL – Querying the Data",
            anchor: "dql"
        },
        {
            type: "paragraph",
            text: "DQL mainly includes the `SELECT` statement, used to retrieve data from one or more tables based on conditions."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name, age FROM students WHERE age > 20;`
        },

        {
            type: "heading",
            level: 2,
            text: "Important Points for Solving Questions",
            anchor: "solve-questions"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Always identify the **command type** first (DDL, DML, etc.) — this determines expected behavior.",
                "DDL and DCL are auto-committed — you can’t roll them back!",
                "`WHERE` is used in DML and DQL; DDL doesn’t use it.",
                "DDL modifies structure — so errors may come from constraints or existing schema.",
                "Use aliases and formatting to simplify complex SELECT queries.",
                "Understand ACID principles when dealing with TCL."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Think of SQL commands as different teams: Architect (DDL), Builder (DML), Guard (DCL), Accountant (TCL), Detective (DQL)"
        }, {
            type: "heading",
            level: 1,
            text: "Data Definition Language (DDL)",
            anchor: "ddl-overview"
        },
        {
            type: "paragraph",
            text: "DDL commands are used to define, alter, and delete database schema objects like tables, indexes, and views. These commands affect the database structure, not the data itself."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: DDL is like working with blueprints — it defines the structure of a building (database)."
        },

        {
            type: "heading",
            level: 2,
            text: "CREATE – Define a New Object",
            anchor: "create"
        },
        {
            type: "paragraph",
            text: "The `CREATE` command is used to define new tables, views, indexes, or entire schemas in the database."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  salary DECIMAL(10, 2),
  hire_date DATE
);`
        },

        {
            type: "heading",
            level: 2,
            text: "ALTER – Modify Existing Structure",
            anchor: "alter"
        },
        {
            type: "paragraph",
            text: "The `ALTER` command allows changes to the structure of existing database objects, such as adding or dropping columns."
        },
        {
            type: "code",
            language: "sql",
            code: `ALTER TABLE employees ADD department VARCHAR(30);
ALTER TABLE employees MODIFY salary DECIMAL(12, 2);`
        },

        {
            type: "heading",
            level: 2,
            text: "DROP – Delete an Object",
            anchor: "drop"
        },
        {
            type: "paragraph",
            text: "`DROP` completely removes a database object, such as a table or view, along with all its data and structure."
        },
        {
            type: "code",
            language: "sql",
            code: `DROP TABLE employees;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "DROP is irreversible! All data and structure will be lost."
        },

        {
            type: "heading",
            level: 2,
            text: "TRUNCATE – Delete All Rows, Keep Structure",
            anchor: "truncate"
        },
        {
            type: "paragraph",
            text: "`TRUNCATE` deletes all data from a table but retains the table structure. It's faster than `DELETE` and is not transaction-safe."
        },
        {
            type: "code",
            language: "sql",
            code: `TRUNCATE TABLE employees;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use TRUNCATE when you want a clean slate, like wiping a whiteboard without erasing its layout."
        },

        {
            type: "heading",
            level: 2,
            text: "RENAME – Rename an Object",
            anchor: "rename"
        },
        {
            type: "paragraph",
            text: "The `RENAME` command changes the name of a database object such as a table."
        },
        {
            type: "code",
            language: "sql",
            code: `RENAME TABLE employees TO staff;`
        },

        {
            type: "heading",
            level: 2,
            text: "Common SQL Data Types",
            anchor: "data-types"
        },
        {
            type: "table",
            headers: ["Category", "Types", "Example"],
            rows: [
                ["Numeric", "INT, FLOAT, DECIMAL", "`salary DECIMAL(10,2)`"],
                ["Character", "CHAR(n), VARCHAR(n), TEXT", "`name VARCHAR(50)`"],
                ["Date/Time", "DATE, TIME, DATETIME, TIMESTAMP", "`hire_date DATE`"],
                ["Binary", "BINARY, VARBINARY, BLOB", "`profile_pic BLOB`"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick to remember: Use VARCHAR for variable-length strings and CHAR for fixed-length codes (like 'Y'/'N')."
        },

        {
            type: "heading",
            level: 2,
            text: "Important Notes on DDL",
            anchor: "ddl-notes"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "DDL commands are auto-committed — changes cannot be rolled back!",
                "Altering large tables may lock the table and cause performance issues.",
                "`CREATE` can also be used to define constraints (e.g., `PRIMARY KEY`, `UNIQUE`).",
                "Use `IF EXISTS` or `IF NOT EXISTS` to make DDL operations safer (where supported)."
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "DDL commands impact schema — always double-check before executing, especially in production."
        }
        , {
            type: "heading",
            level: 1,
            text: "Data Manipulation Language (DML)",
            anchor: "dml-overview"
        },
        {
            type: "paragraph",
            text: "DML commands allow you to insert, update, and delete data in existing database tables. These operations affect the *contents* of tables, not their structure."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: DML is like editing the content of a document — adding, changing, or removing sentences — while the template stays the same."
        },

        {
            type: "heading",
            level: 2,
            text: "INSERT – Add New Data",
            anchor: "insert"
        },
        {
            type: "paragraph",
            text: "`INSERT` is used to add one or more new rows into a table."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Insert one row
INSERT INTO employees (id, name, salary) VALUES (1, 'Alice', 55000);

-- Insert multiple rows
INSERT INTO employees (id, name, salary) VALUES 
(2, 'Bob', 60000),
(3, 'Charlie', 58000);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Tip: Always match column count with value count to avoid syntax errors."
        },

        {
            type: "heading",
            level: 2,
            text: "UPDATE – Modify Existing Data",
            anchor: "update"
        },
        {
            type: "paragraph",
            text: "`UPDATE` changes existing values in one or more rows. You should always include a `WHERE` clause to avoid updating the entire table unintentionally."
        },
        {
            type: "code",
            language: "sql",
            code: `UPDATE employees
SET salary = salary + 5000
WHERE name = 'Alice';`
        },
        {
            type: "alert",
            variant: "warning",
            content: "If you omit `WHERE`, all rows in the table will be updated!"
        },

        {
            type: "heading",
            level: 2,
            text: "DELETE – Remove Data",
            anchor: "delete"
        },
        {
            type: "paragraph",
            text: "`DELETE` removes one or more rows from a table. Like `UPDATE`, it's important to use `WHERE` to target specific rows."
        },
        {
            type: "code",
            language: "sql",
            code: `DELETE FROM employees WHERE salary < 40000;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "`DELETE` keeps the table structure intact but removes rows — use `TRUNCATE` to delete all rows faster."
        },

        {
            type: "heading",
            level: 2,
            text: "MERGE – Conditional Insert or Update",
            anchor: "merge"
        },
        {
            type: "paragraph",
            text: "`MERGE` (also known as UPSERT) combines INSERT and UPDATE into a single operation. It’s available in RDBMS like Oracle and SQL Server."
        },
        {
            type: "code",
            language: "sql",
            code: `MERGE INTO employees AS target
USING new_employees AS source
ON target.id = source.id
WHEN MATCHED THEN 
  UPDATE SET target.salary = source.salary
WHEN NOT MATCHED THEN 
  INSERT (id, name, salary) VALUES (source.id, source.name, source.salary);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: MERGE is like a smart door — if the person is known, update their record; if not, register them."
        },

        {
            type: "heading",
            level: 2,
            text: "DML Important Notes",
            anchor: "dml-notes"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "DML operations are transactional — they can be committed or rolled back.",
                "`INSERT`, `UPDATE`, and `DELETE` affect only data, not structure.",
                "DML can trigger constraints like `NOT NULL`, `UNIQUE`, or `FOREIGN KEY` violations.",
                "`MERGE` is helpful in synchronization tasks like updating staging tables."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: DML = Data Moves & Logs — because it changes your data and can be logged/rolled back."
        }
        , {
            type: "heading",
            level: 1,
            text: "Data Query Language (DQL)",
            anchor: "dql-overview"
        },
        {
            type: "paragraph",
            text: "DQL is used to fetch data from one or more tables using the `SELECT` statement. It allows filtering, sorting, and shaping the result set for analysis or processing."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: DQL is like querying a spreadsheet to view specific rows and columns that match a condition."
        },

        {
            type: "heading",
            level: 2,
            text: "SELECT – Retrieve Data",
            anchor: "select"
        },
        {
            type: "paragraph",
            text: "`SELECT` is the core command used to retrieve rows from tables. You can choose specific columns or use `*` to get all columns."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Get all columns
SELECT * FROM employees;

-- Get specific columns
SELECT name, salary FROM employees;`
        },

        {
            type: "heading",
            level: 2,
            text: "Column Aliasing",
            anchor: "alias"
        },
        {
            type: "paragraph",
            text: "Aliases are used to rename columns temporarily in the result set, making them more readable or user-friendly."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name AS employee_name, salary AS monthly_income FROM employees;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Tip: Use `AS` for clarity — it's optional but improves readability."
        },

        {
            type: "heading",
            level: 2,
            text: "Filtering with WHERE",
            anchor: "where"
        },
        {
            type: "paragraph",
            text: "The `WHERE` clause is used to filter records based on conditions. It supports logical operators like `AND`, `OR`, and `NOT`."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT * FROM employees
WHERE salary > 50000 AND department = 'HR';`
        },
        {
            type: "alert",
            variant: "warning",
            content: "`WHERE` comes before `GROUP BY` and `ORDER BY` — follow the SQL execution order!"
        },

        {
            type: "heading",
            level: 2,
            text: "Sorting with ORDER BY",
            anchor: "order-by"
        },
        {
            type: "paragraph",
            text: "The `ORDER BY` clause arranges the result set in ascending or descending order based on one or more columns."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name, salary FROM employees
ORDER BY salary DESC;`
        },
        {
            type: "alert",
            variant: "info",
            content: "By default, `ORDER BY` uses ASC (ascending). Use `DESC` to sort from high to low."
        },

        {
            type: "heading",
            level: 2,
            text: "Removing Duplicates with DISTINCT",
            anchor: "distinct"
        },
        {
            type: "paragraph",
            text: "`DISTINCT` eliminates duplicate rows in the result set for specified columns."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT DISTINCT department FROM employees;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Tip: DISTINCT applies to the full column set — not individual columns separately."
        },

        {
            type: "heading",
            level: 2,
            text: "Pagination with LIMIT, OFFSET, FETCH",
            anchor: "pagination"
        },
        {
            type: "paragraph",
            text: "Pagination breaks result sets into smaller chunks using `LIMIT` (MySQL/PostgreSQL), `OFFSET`, or `FETCH` (SQL Server, Oracle)."
        },
        {
            type: "code",
            language: "sql",
            code: `-- MySQL / PostgreSQL
SELECT * FROM employees LIMIT 5 OFFSET 10;

-- SQL Server / Oracle (with FETCH)
SELECT * FROM employees
ORDER BY id
OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Think of pagination like flipping pages in a book — OFFSET skips, LIMIT/FETCH reads."
        },

        {
            type: "heading",
            level: 2,
            text: "DQL Tips for Solving Questions",
            anchor: "dql-tips"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`SELECT *` is easy but inefficient — use specific columns in production.",
                "`WHERE` should be your go-to for filtering — master comparison and logical operators.",
                "`DISTINCT` helps with analytics — like counting unique departments or values.",
                "`ORDER BY` works best when combined with `LIMIT` for top-N queries.",
                "Use `AS` to make column names user-friendly for reports and exports.",
                "Practice pagination in real apps (like displaying 10 posts per page)."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `SWODP` as a memory aid — SELECT, WHERE, ORDER BY, DISTINCT, Pagination"
        }
        , {
            type: "heading",
            level: 1,
            text: "SQL Operators",
            anchor: "sql-operators"
        },
        {
            type: "paragraph",
            text: "SQL operators are used within `WHERE`, `SELECT`, and other clauses to perform operations, compare values, and filter records based on conditions. They are essential for building powerful query logic."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Operators are like tools in a toolbox — each one serves a specific role for modifying or evaluating data."
        },

        {
            type: "heading",
            level: 2,
            text: "Arithmetic Operators",
            anchor: "arithmetic-operators"
        },
        {
            type: "table",
            headers: ["Operator", "Purpose", "Example"],
            rows: [
                ["+", "Addition", "`salary + 1000`"],
                ["-", "Subtraction", "`salary - 500`"],
                ["*", "Multiplication", "`salary * 1.1` (10% raise)"],
                ["/", "Division", "`salary / 12` (monthly salary)"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name, salary * 1.1 AS raised_salary FROM employees;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use arithmetic operators in `SELECT` to calculate on-the-fly values like tax or bonus."
        },

        {
            type: "heading",
            level: 2,
            text: "Comparison Operators",
            anchor: "comparison-operators"
        },
        {
            type: "table",
            headers: ["Operator", "Meaning", "Example"],
            rows: [
                ["=", "Equal to", "`salary = 50000`"],
                ["!=", "Not equal to", "`department != 'HR'`"],
                [">", "Greater than", "`salary > 60000`"],
                ["<", "Less than", "`salary < 40000`"],
                [">=", "Greater than or equal to", "`experience >= 5`"],
                ["<=", "Less than or equal to", "`age <= 30`"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT * FROM employees WHERE salary >= 60000;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use comparison operators with care — they are essential for filtering rows based on conditions."
        },

        {
            type: "heading",
            level: 2,
            text: "Logical Operators",
            anchor: "logical-operators"
        },
        {
            type: "table",
            headers: ["Operator", "Purpose", "Example"],
            rows: [
                ["AND", "Both conditions must be true", "`salary > 50000 AND department = 'IT'`"],
                ["OR", "At least one condition must be true", "`department = 'HR' OR department = 'Finance'`"],
                ["NOT", "Negates the condition", "`NOT (department = 'Sales')`"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT * FROM employees
WHERE department = 'IT' AND salary > 60000;`
        },

        {
            type: "heading",
            level: 2,
            text: "Special Operators",
            anchor: "special-operators"
        },

        {
            type: "paragraph",
            text: "`BETWEEN`, `IN`, `LIKE`, and `IS NULL` are commonly used to match patterns or sets of values."
        },

        {
            type: "list",
            style: "disc",
            items: [
                "`BETWEEN a AND b` – Checks if value is in range (inclusive)",
                "`IN (v1, v2, ...)` – Checks if value exists in a list",
                "`LIKE 'pattern'` – Pattern matching using `%` (any chars) and `_` (single char)",
                "`IS NULL` / `IS NOT NULL` – Checks for presence or absence of a value"
            ]
        },

        {
            type: "code",
            language: "sql",
            code: `SELECT * FROM employees
WHERE salary BETWEEN 50000 AND 70000;

SELECT * FROM employees
WHERE department IN ('HR', 'IT', 'Finance');

SELECT * FROM employees
WHERE name LIKE 'A%';

SELECT * FROM employees
WHERE manager_id IS NULL;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `%` in `LIKE` as a wildcard — `%a%` means name contains 'a', `_a%` means second letter is 'a'."
        },

        {
            type: "heading",
            level: 2,
            text: "Quick Recap: Operator Use Cases",
            anchor: "recap-operators"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Arithmetic → Used in calculations in `SELECT` or `UPDATE`",
                "Comparison → Used in `WHERE` to filter rows",
                "Logical → Combine multiple `WHERE` conditions",
                "Special → Match ranges, lists, patterns, or null values"
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: **ACLS** – Arithmetic, Comparison, Logical, Special — covers all operator types!"
        }
        , {
            type: "heading",
            level: 1,
            text: "SQL Functions",
            anchor: "sql-functions"
        },
        {
            type: "paragraph",
            text: "SQL functions are built-in operations used to transform, analyze, and compute values in queries. They are categorized as scalar (operate on single values) and aggregate (operate on groups of values)."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Scalar functions are like calculators for individual fields, while aggregate functions are like summary tools for reports (e.g., total, average, etc)."
        },

        {
            type: "heading",
            level: 2,
            text: "Scalar Functions – Operate on Individual Values",
            anchor: "scalar-functions"
        },
        {
            type: "paragraph",
            text: "These functions return a single value for each input row and are commonly used in `SELECT`, `WHERE`, or `ORDER BY` clauses."
        },
        {
            type: "table",
            headers: ["Function", "Purpose", "Example"],
            rows: [
                ["UPPER(str)", "Converts to uppercase", "`UPPER(name)` → 'ALICE'"],
                ["LOWER(str)", "Converts to lowercase", "`LOWER(department)` → 'hr'"],
                ["LENGTH(str)", "Returns string length", "`LENGTH(name)` → 5 for 'Alice'"],
                ["ROUND(n, d)", "Rounds number to d decimals", "`ROUND(12.3456, 2)` → 12.35"],
                ["CEIL(n)", "Next whole number up", "`CEIL(5.1)` → 6"],
                ["FLOOR(n)", "Next whole number down", "`FLOOR(5.9)` → 5"],
                ["NOW()", "Current date and time", "`NOW()` → '2025-06-24 14:32:00'"],
                ["CURDATE()", "Current date", "`CURDATE()` → '2025-06-24'"],
                ["DATE_FORMAT(date, fmt)", "Formats a date", "`DATE_FORMAT(NOW(), '%Y')` → '2025'"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT UPPER(name) AS upper_name, ROUND(salary, 2) AS rounded_salary
FROM employees;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Tip: Scalar functions work on each row separately. Combine them creatively to transform output as needed."
        },

        {
            type: "heading",
            level: 2,
            text: "Aggregate Functions – Operate on Sets of Rows",
            anchor: "aggregate-functions"
        },
        {
            type: "paragraph",
            text: "Aggregate functions summarize data across multiple rows. They are often used with `GROUP BY` to compute totals or statistics."
        },
        {
            type: "table",
            headers: ["Function", "Purpose", "Example"],
            rows: [
                ["COUNT(*)", "Number of rows", "`COUNT(*)` → total number of employees"],
                ["SUM(column)", "Total of values", "`SUM(salary)` → total payroll"],
                ["AVG(column)", "Average of values", "`AVG(salary)` → mean salary"],
                ["MIN(column)", "Smallest value", "`MIN(salary)` → lowest paid employee"],
                ["MAX(column)", "Largest value", "`MAX(salary)` → highest paid employee"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT department, COUNT(*) AS total_employees, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use COUNT for headcount, SUM for total money, AVG for report cards, MIN/MAX for competitions!"
        },

        {
            type: "heading",
            level: 2,
            text: "Important Notes",
            anchor: "functions-notes"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Scalar functions can be used anywhere expressions are allowed.",
                "Aggregate functions often need `GROUP BY` when used with other columns.",
                "`COUNT(column)` ignores NULLs, but `COUNT(*)` counts all rows.",
                "Use `ROUND()` with `AVG()` or `SUM()` to display cleaner decimal results.",
                "Use `DATE_FORMAT()` to format dates into custom display formats."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: **C-SLAM** for aggregates — COUNT, SUM, AVG, MIN, MAX"
        }
        , {
            type: "heading",
            level: 1,
            text: "Grouping and Aggregation",
            anchor: "grouping-aggregation"
        },
        {
            type: "paragraph",
            text: "`GROUP BY` is used to group rows based on one or more columns and apply aggregate functions to each group. `HAVING` filters these grouped results. Advanced grouping like `ROLLUP` and `CUBE` allows multi-level summaries."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: GROUP BY is like organizing students by class to calculate the average marks per class."
        },

        {
            type: "heading",
            level: 2,
            text: "GROUP BY – Group Rows for Aggregation",
            anchor: "group-by"
        },
        {
            type: "paragraph",
            text: "`GROUP BY` collects rows with the same value in specified columns into groups. Then aggregate functions like `COUNT()`, `SUM()`, `AVG()` are applied to each group."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_sal
FROM employees
GROUP BY department;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "All columns in SELECT (except aggregates) must appear in `GROUP BY`!"
        },

        {
            type: "heading",
            level: 2,
            text: "HAVING – Filter After Grouping",
            anchor: "having"
        },
        {
            type: "paragraph",
            text: "`HAVING` filters grouped results, just like `WHERE` filters rows. Use it to apply conditions to aggregates."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `WHERE` for raw rows and `HAVING` for grouped data!"
        },

        {
            type: "heading",
            level: 2,
            text: "Advanced Grouping: ROLLUP, CUBE, GROUPING SETS",
            anchor: "advanced-grouping"
        },
        {
            type: "paragraph",
            text: "These features provide multidimensional summaries — useful in analytical queries or reports."
        },
        {
            type: "table",
            headers: ["Feature", "Purpose", "Example"],
            rows: [
                ["ROLLUP", "Adds subtotals (bottom-up)", "`GROUP BY ROLLUP(department, job)`"],
                ["CUBE", "Adds subtotals in all directions", "`GROUP BY CUBE(region, product)`"],
                ["GROUPING SETS", "Custom group combinations", "`GROUP BY GROUPING SETS ((region), (product))`"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- ROLLUP: Total salary per dept and overall
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY ROLLUP(department);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: ROLLUP adds totals like a report footer, CUBE adds all possible combinations!"
        },

        {
            type: "heading",
            level: 2,
            text: "Best Practices and Tips",
            anchor: "grouping-tips"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`GROUP BY` goes before `HAVING`, which goes before `ORDER BY`.",
                "Use column aliases in `HAVING` with caution — not supported in all databases.",
                "`GROUP BY 1` refers to the first column in SELECT (positional notation).",
                "ROLLUP is great for dashboards and subtotal reports.",
                "Use GROUPING() function to detect NULLs added by ROLLUP/CUBE."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: W→G→H→O → WHERE, GROUP BY, HAVING, ORDER BY — SQL clause order!"
        }
        , {
            type: "heading",
            level: 1,
            text: "SQL Joins",
            anchor: "sql-joins"
        },
        {
            type: "paragraph",
            text: "Joins are used to retrieve data from multiple tables based on related columns. Each join type serves a different purpose and returns specific combinations of rows."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Joins are like merging two Excel sheets using a common column (e.g., Employee ID)."
        },

        {
            type: "heading",
            level: 2,
            text: "INNER JOIN",
            anchor: "inner-join"
        },
        {
            type: "paragraph",
            text: "Returns only the matching rows from both tables based on the join condition."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT e.name, d.name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.id;`
        },
        {
            type: "code",
            language: "text",
            code: `   Table A       Table B
A.id  B.id        Match
 1     1     --->  ✅
 2     2     --->  ✅
 3     -     --->  ❌ (excluded)
 -     4     --->  ❌ (excluded)`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: INNER JOIN = intersection (only matching data)"
        },

        {
            type: "heading",
            level: 2,
            text: "LEFT JOIN (LEFT OUTER JOIN)",
            anchor: "left-join"
        },
        {
            type: "paragraph",
            text: "Returns all rows from the left table, and matched rows from the right table. Fills NULL if no match."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT e.name, d.name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Left table rows always appear, even if there's no match in the right."
        },

        {
            type: "heading",
            level: 2,
            text: "RIGHT JOIN (RIGHT OUTER JOIN)",
            anchor: "right-join"
        },
        {
            type: "paragraph",
            text: "Returns all rows from the right table, and matched rows from the left table. Fills NULL if no match."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT e.name, d.name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Right table is fully preserved — useful if you want all departments even without employees."
        },

        {
            type: "heading",
            level: 2,
            text: "FULL OUTER JOIN",
            anchor: "full-outer-join"
        },
        {
            type: "paragraph",
            text: "Returns all rows from both tables. If no match is found, fills with NULLs."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT e.name, d.name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.id;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Not supported in all databases (e.g., MySQL needs workaround using `UNION` of LEFT and RIGHT joins)."
        },

        {
            type: "heading",
            level: 2,
            text: "CROSS JOIN",
            anchor: "cross-join"
        },
        {
            type: "paragraph",
            text: "Returns the Cartesian product — every row from the first table is joined with every row from the second."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT a.name, b.color
FROM products a
CROSS JOIN colors b;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Be careful! `CROSS JOIN` explodes rows — if A has 10 and B has 5 rows, result = 50 rows."
        },

        {
            type: "heading",
            level: 2,
            text: "SELF JOIN",
            anchor: "self-join"
        },
        {
            type: "paragraph",
            text: "A table joins to itself — useful for hierarchical relationships like employees and managers."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.id;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Always use table aliases (`e1`, `e2`) to avoid confusion in SELF JOINs."
        },

        {
            type: "heading",
            level: 2,
            text: "NATURAL JOIN",
            anchor: "natural-join"
        },
        {
            type: "paragraph",
            text: "Automatically joins tables on columns with the same name. Available in some databases like Oracle, PostgreSQL."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT * FROM employees
NATURAL JOIN departments;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Avoid NATURAL JOINs in production — lack of explicit join condition may lead to unexpected results!"
        },

        {
            type: "heading",
            level: 2,
            text: "Quick Comparison",
            anchor: "joins-comparison"
        },
        {
            type: "table",
            headers: ["Join Type", "Includes"],
            rows: [
                ["INNER JOIN", "Only matching rows"],
                ["LEFT JOIN", "All from left + matching from right"],
                ["RIGHT JOIN", "All from right + matching from left"],
                ["FULL OUTER JOIN", "All rows from both with NULLs if no match"],
                ["CROSS JOIN", "All combinations (Cartesian product)"],
                ["SELF JOIN", "Same table joined with itself"],
                ["NATURAL JOIN", "Join on columns with same names (auto-detected)"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: **I L R F C S N** → INNER, LEFT, RIGHT, FULL, CROSS, SELF, NATURAL"
        }
        , {
            type: "heading",
            level: 1,
            text: "Subqueries in SQL",
            anchor: "subqueries"
        },
        {
            type: "paragraph",
            text: "Subqueries (also called nested queries) are queries inside another SQL query. They are useful for filtering, transforming, or computing values based on related data."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: A subquery is like a mini-report embedded inside a larger report."
        },

        {
            type: "heading",
            level: 2,
            text: "Single-Row Subqueries",
            anchor: "single-row-subqueries"
        },
        {
            type: "paragraph",
            text: "Returns only one row. Often used with comparison operators like =, <, >."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Employees earning more than the average salary
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);`
        },
        {
            type: "alert",
            variant: "warning",
            content: "If subquery returns more than 1 row, you'll get an error in single-row subqueries!"
        },

        {
            type: "heading",
            level: 2,
            text: "Multi-Row Subqueries",
            anchor: "multi-row-subqueries"
        },
        {
            type: "paragraph",
            text: "Returns multiple rows. Use with `IN`, `ANY`, or `ALL` operators."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Employees in departments with 'Sales' or 'Marketing'
SELECT name FROM employees
WHERE dept_id IN (
  SELECT id FROM departments WHERE name IN ('Sales', 'Marketing')
);`
        },
        {
            type: "code",
            language: "sql",
            code: `-- Salaries greater than ANY of the salaries in 'IT'
SELECT name FROM employees
WHERE salary > ANY (
  SELECT salary FROM employees WHERE dept_id = 3
);`
        },

        {
            type: "heading",
            level: 2,
            text: "Correlated Subqueries",
            anchor: "correlated-subqueries"
        },
        {
            type: "paragraph",
            text: "A correlated subquery refers to columns from the outer query and is executed once per row of the outer query."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Employees whose salary is above the average of their own department
SELECT e1.name FROM employees e1
WHERE salary > (
  SELECT AVG(salary) FROM employees e2
  WHERE e1.dept_id = e2.dept_id
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Correlated subqueries are like per-row checks — slower but powerful!"
        },

        {
            type: "heading",
            level: 2,
            text: "Using IN, EXISTS, ANY, ALL",
            anchor: "in-exists-any-all"
        },
        {
            type: "table",
            headers: ["Operator", "Purpose", "Example"],
            rows: [
                ["IN", "Match any from list", "`dept_id IN (SELECT id ...)`"],
                ["EXISTS", "Check if rows exist", "`EXISTS (SELECT 1 FROM ...)`"],
                ["ANY", "Compare with any value", "`> ANY (SELECT salary ...)`"],
                ["ALL", "Compare with all values", "`< ALL (SELECT salary ...)`"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Use EXISTS to check if employees exist in HR
SELECT name FROM departments d
WHERE EXISTS (
  SELECT 1 FROM employees e WHERE e.dept_id = d.id
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Tip: Use `EXISTS` when you're checking for the *presence* of rows, not their values."
        },

        {
            type: "heading",
            level: 2,
            text: "Subqueries in SELECT, WHERE, FROM",
            anchor: "subquery-positions"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**WHERE clause** – filter rows using conditions from another query",
                "**SELECT clause** – return computed values (scalar subquery)",
                "**FROM clause** – treat subquery as a derived table or virtual view"
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Subquery in SELECT
SELECT name, (SELECT MAX(salary) FROM employees) AS top_salary
FROM employees;`
        },
        {
            type: "code",
            language: "sql",
            code: `-- Subquery in FROM
SELECT dept, avg_salary
FROM (
  SELECT dept_id AS dept, AVG(salary) AS avg_salary
  FROM employees GROUP BY dept_id
) AS dept_avg;`
        },

        {
            type: "heading",
            level: 2,
            text: "Best Practices",
            anchor: "subquery-best-practices"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Use correlated subqueries only when necessary – they are slower.",
                "EXISTS is often faster than IN for large datasets.",
                "Use aliases (`AS`) to name subqueries in FROM clause.",
                "Avoid scalar subqueries in SELECT if they repeat the same calculation."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: S → M → C → I/E/A → W/S/F (Single, Multi, Correlated → IN/EXISTS/ANY/ALL → WHERE, SELECT, FROM)"
        }
        , {
            type: "heading",
            level: 1,
            text: "Set Operators in SQL",
            anchor: "set-operators"
        },
        {
            type: "paragraph",
            text: "Set operators combine the results of two or more `SELECT` queries into a single result set. These queries must have the same number and order of columns, and compatible data types."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Set operators are like merging two different lists (like union of friends from school and college) with or without duplicates."
        },

        {
            type: "heading",
            level: 2,
            text: "UNION",
            anchor: "union"
        },
        {
            type: "paragraph",
            text: "`UNION` combines results of two queries and removes duplicates (distinct rows only)."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name FROM employees
UNION
SELECT name FROM clients;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: UNION = Unique values from both queries"
        },

        {
            type: "heading",
            level: 2,
            text: "UNION ALL",
            anchor: "union-all"
        },
        {
            type: "paragraph",
            text: "`UNION ALL` combines results and keeps duplicates. Faster than `UNION` because it skips sorting."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name FROM employees
UNION ALL
SELECT name FROM clients;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Use `UNION ALL` when duplicates matter or for performance reasons."
        },

        {
            type: "heading",
            level: 2,
            text: "INTERSECT",
            anchor: "intersect"
        },
        {
            type: "paragraph",
            text: "Returns only the common rows between two queries."
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name FROM employees
INTERSECT
SELECT name FROM clients;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: INTERSECT = common friends from two lists!"
        },
        {
            type: "alert",
            variant: "warning",
            content: "`INTERSECT` is not supported in MySQL (use INNER JOIN workaround)."
        },

        {
            type: "heading",
            level: 2,
            text: "MINUS / EXCEPT",
            anchor: "minus-except"
        },
        {
            type: "paragraph",
            text: "`MINUS` (Oracle) or `EXCEPT` (PostgreSQL/SQL Server) returns rows from the first query that do not exist in the second query."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Employees who are not clients
SELECT name FROM employees
MINUS
SELECT name FROM clients;`
        },
        {
            type: "code",
            language: "sql",
            code: `-- SQL Server / PostgreSQL equivalent
SELECT name FROM employees
EXCEPT
SELECT name FROM clients;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: MINUS = what’s left when you subtract one list from another."
        },

        {
            type: "heading",
            level: 2,
            text: "Rules and Best Practices",
            anchor: "set-operators-rules"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "All queries must have the same number of columns.",
                "Column data types must be compatible.",
                "Column names are taken from the first SELECT query.",
                "`ORDER BY` should be used only once at the end of the entire set operation.",
                "Use parentheses to group and control evaluation in complex combinations."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Quick Comparison",
            anchor: "set-operator-comparison"
        },
        {
            type: "table",
            headers: ["Operator", "Duplicates", "Use Case"],
            rows: [
                ["UNION", "No", "Merge two datasets, remove duplicates"],
                ["UNION ALL", "Yes", "Faster merge with duplicates"],
                ["INTERSECT", "No", "Find common rows"],
                ["MINUS / EXCEPT", "No", "Subtract second result from the first"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: U U A I M → UNION, UNION ALL, INTERSECT, MINUS"
        }, {
            type: "heading",
            level: 1,
            text: "SQL Constraints",
            anchor: "sql-constraints"
        },
        {
            type: "paragraph",
            text: "Constraints are rules applied to columns or tables to ensure data integrity and consistency. They define what data is valid and prevent invalid or duplicate data entries."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Constraints are like form validations—e.g., age must be positive, email must be unique."
        },

        {
            type: "heading",
            level: 2,
            text: "PRIMARY KEY",
            anchor: "primary-key"
        },
        {
            type: "paragraph",
            text: "A primary key uniquely identifies each row in a table. It cannot contain NULL values or duplicates."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Only one primary key allowed per table, but it can be a composite key (more than one column)."
        },

        {
            type: "heading",
            level: 2,
            text: "FOREIGN KEY",
            anchor: "foreign-key"
        },
        {
            type: "paragraph",
            text: "A foreign key establishes a link between two tables. It ensures that the value in one table corresponds to a valid primary key in another."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE enrollments (
  student_id INT,
  FOREIGN KEY (student_id) REFERENCES students(id)
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: FOREIGN KEY ensures **referential integrity**—no orphan records."
        },

        {
            type: "heading",
            level: 2,
            text: "UNIQUE",
            anchor: "unique"
        },
        {
            type: "paragraph",
            text: "Ensures that all values in a column are different. Unlike PRIMARY KEY, it can allow NULLs."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE users (
  email VARCHAR(100) UNIQUE
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "You can have multiple UNIQUE constraints on different columns."
        },

        {
            type: "heading",
            level: 2,
            text: "NOT NULL",
            anchor: "not-null"
        },
        {
            type: "paragraph",
            text: "Prevents NULL values in a column. Often used with critical data like usernames or IDs."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE employees (
  emp_id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: NOT NULL = mandatory field (like required in HTML forms)."
        },

        {
            type: "heading",
            level: 2,
            text: "CHECK",
            anchor: "check"
        },
        {
            type: "paragraph",
            text: "Used to enforce domain-level rules like value ranges or patterns."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE orders (
  amount DECIMAL(10,2),
  CHECK (amount > 0)
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Useful for business rules like age ≥ 18 or quantity > 0."
        },

        {
            type: "heading",
            level: 2,
            text: "DEFAULT",
            anchor: "default"
        },
        {
            type: "paragraph",
            text: "Provides a default value when no value is explicitly given."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE TABLE customers (
  status VARCHAR(10) DEFAULT 'active'
);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use DEFAULT to avoid nulls and simplify insert operations."
        },

        {
            type: "heading",
            level: 2,
            text: "Quick Comparison",
            anchor: "constraint-comparison"
        },
        {
            type: "table",
            headers: ["Constraint", "Purpose", "Allows NULLs?", "Allows Duplicates?"],
            rows: [
                ["PRIMARY KEY", "Unique row identifier", "No", "No"],
                ["FOREIGN KEY", "Refer to another table", "Yes", "Yes"],
                ["UNIQUE", "Ensure unique values", "Yes", "No"],
                ["NOT NULL", "Prevent nulls", "No", "Yes"],
                ["CHECK", "Custom rule enforcement", "Depends", "Depends"],
                ["DEFAULT", "Auto value on insert", "Yes", "Yes"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: **P F U N C D** → Primary, Foreign, Unique, Not Null, Check, Default"
        }
        , {
            type: "heading",
            level: 1,
            text: "Indexes in SQL",
            anchor: "sql-indexes"
        },
        {
            type: "paragraph",
            text: "Indexes improve the speed of data retrieval operations on a database table. Think of an index as a fast lookup table for rows—especially helpful for large datasets."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: An index in a book helps you quickly find content without flipping every page."
        },

        {
            type: "heading",
            level: 2,
            text: "Creating Indexes",
            anchor: "creating-indexes"
        },
        {
            type: "paragraph",
            text: "Indexes are typically created on columns that are used in `WHERE`, `JOIN`, or `ORDER BY` clauses."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Create index on a single column
CREATE INDEX idx_lastname ON employees(last_name);

-- Create a unique index
CREATE UNIQUE INDEX idx_email ON users(email);`
        },

        {
            type: "heading",
            level: 2,
            text: "Unique vs Non-Unique Indexes",
            anchor: "unique-vs-nonunique"
        },
        {
            type: "table",
            headers: ["Type", "Duplicates Allowed?", "Use Case"],
            rows: [
                ["Unique Index", "No", "Enforce uniqueness (e.g., email)"],
                ["Non-Unique Index", "Yes", "Speed up searches (e.g., last name, category)"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Primary keys and unique constraints automatically create unique indexes."
        },

        {
            type: "heading",
            level: 2,
            text: "Composite Indexes",
            anchor: "composite-index"
        },
        {
            type: "paragraph",
            text: "Composite (multi-column) indexes are useful when multiple columns are queried together frequently."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Create composite index
CREATE INDEX idx_fullname ON employees(last_name, first_name);`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trick: Order matters! `idx(a, b)` helps `(a)` and `(a, b)` queries, but **not** just `(b)` alone."
        },

        {
            type: "heading",
            level: 2,
            text: "Indexing Best Practices",
            anchor: "index-best-practices"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Index frequently filtered or sorted columns.",
                "Avoid indexing columns with low cardinality (e.g., gender).",
                "Don't over-index—extra indexes slow down `INSERT`, `UPDATE`, and `DELETE`.",
                "Use composite indexes for queries that use multiple columns in WHERE or JOIN.",
                "Regularly analyze unused or duplicate indexes."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Tip: Indexes speed up reads, but can slow down writes."
        },

        {
            type: "heading",
            level: 2,
            text: "EXPLAIN Plan",
            anchor: "explain-plan"
        },
        {
            type: "paragraph",
            text: "`EXPLAIN` or `EXPLAIN PLAN` helps you understand how a SQL query will execute. It shows whether indexes are being used and which parts are slow."
        },
        {
            type: "code",
            language: "sql",
            code: `-- MySQL / PostgreSQL
EXPLAIN SELECT * FROM employees WHERE last_name = 'Smith';`
        },
        {
            type: "code",
            language: "sql",
            code: `-- Oracle
EXPLAIN PLAN FOR SELECT * FROM employees WHERE last_name = 'Smith';
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use `EXPLAIN` to tune queries and validate that your indexes are helping!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Views in SQL",
            anchor: "sql-views"
        },
        {
            type: "paragraph",
            text: "A view is a virtual table based on the result of a SQL query. It does not store data itself but displays data from one or more underlying tables."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: A view is like a read-only Google Sheet pulling data from a backend Excel file."
        },

        {
            type: "heading",
            level: 2,
            text: "Creating Views",
            anchor: "creating-views"
        },
        {
            type: "paragraph",
            text: "Views are created using the `CREATE VIEW` statement with a `SELECT` query."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Create a simple view
CREATE VIEW active_employees AS
SELECT id, name, department
FROM employees
WHERE status = 'active';`
        },
        {
            type: "paragraph",
            text: "You can now query the view as if it's a table:"
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT * FROM active_employees;`
        },

        {
            type: "heading",
            level: 2,
            text: "Updatable Views",
            anchor: "updatable-views"
        },
        {
            type: "paragraph",
            text: "Some views can be updated directly using `INSERT`, `UPDATE`, or `DELETE`, depending on the database and query structure."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "The view must reference a single table.",
                "No `GROUP BY`, `DISTINCT`, `JOIN`, or aggregate functions.",
                "All columns required by the base table must be present."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "If conditions are met, you can write: `UPDATE active_employees SET department = 'HR' WHERE id = 5;`"
        },

        {
            type: "heading",
            level: 2,
            text: "Materialized Views (in some DBs)",
            anchor: "materialized-views"
        },
        {
            type: "paragraph",
            text: "Materialized views store the result of a query physically, unlike regular views. They are used for performance improvement on large, costly queries."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Oracle example
CREATE MATERIALIZED VIEW emp_summary
AS
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Materialized views must be refreshed manually or on schedule to reflect new data."
        },

        {
            type: "heading",
            level: 2,
            text: "Dropping Views",
            anchor: "dropping-views"
        },
        {
            type: "paragraph",
            text: "To remove a view:"
        },
        {
            type: "code",
            language: "sql",
            code: `DROP VIEW active_employees;`
        },
        {
            type: "code",
            language: "sql",
            code: `-- For materialized view (Oracle)
DROP MATERIALIZED VIEW emp_summary;`
        },

        {
            type: "heading",
            level: 2,
            text: "Best Practices and Use Cases",
            anchor: "views-best-practices"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Use views to simplify complex joins and queries.",
                "Encapsulate logic and improve security (hide sensitive columns).",
                "Avoid updating complex views—prefer triggers or application logic.",
                "Use materialized views for reporting and read-heavy dashboards."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: View = Virtual Table, Materialized View = Material + Stored Table"
        }
        , {
            type: "heading",
            level: 1,
            text: "Transactions (TCL)",
            anchor: "transactions-tcl"
        },
        {
            type: "paragraph",
            text: "A transaction is a sequence of operations performed as a single logical unit of work. Transaction Control Language (TCL) commands manage the changes made by DML statements and group them into logical transactions."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Think of a transaction like placing an order in a shopping cart—you can confirm (commit) or cancel (rollback) before finalizing."
        },

        {
            type: "heading",
            level: 2,
            text: "BEGIN / START TRANSACTION",
            anchor: "start-transaction"
        },
        {
            type: "paragraph",
            text: "Begins a new transaction. Changes made after this point are held in a temporary state until committed or rolled back."
        },
        {
            type: "code",
            language: "sql",
            code: `START TRANSACTION;  -- or BEGIN;`
        },

        {
            type: "heading",
            level: 2,
            text: "COMMIT",
            anchor: "commit"
        },
        {
            type: "paragraph",
            text: "`COMMIT` saves all the changes made during the transaction to the database permanently."
        },
        {
            type: "code",
            language: "sql",
            code: `COMMIT;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Once committed, changes can't be rolled back."
        },

        {
            type: "heading",
            level: 2,
            text: "ROLLBACK",
            anchor: "rollback"
        },
        {
            type: "paragraph",
            text: "`ROLLBACK` undoes all changes made since the transaction began or since the last `SAVEPOINT`."
        },
        {
            type: "code",
            language: "sql",
            code: `ROLLBACK;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Rollback helps protect data in case of errors or failures in a transaction."
        },

        {
            type: "heading",
            level: 2,
            text: "SAVEPOINT",
            anchor: "savepoint"
        },
        {
            type: "paragraph",
            text: "Defines a point within a transaction to which you can later roll back without affecting the entire transaction."
        },
        {
            type: "code",
            language: "sql",
            code: `SAVEPOINT sp1;
-- Some changes here
ROLLBACK TO sp1;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: SAVEPOINT lets you 'checkpoint' your work like a game save."
        },

        {
            type: "heading",
            level: 2,
            text: "ACID Properties",
            anchor: "acid-properties"
        },
        {
            type: "table",
            headers: ["Property", "Description", "Real-Life Analogy"],
            rows: [
                ["Atomicity", "All operations in a transaction succeed or none do", "Buying all items in a combo or none at all"],
                ["Consistency", "Database moves from one valid state to another", "Can't transfer money without updating both accounts"],
                ["Isolation", "Transactions don’t affect each other mid-way", "Two ATMs withdrawing from the same account won't interfere"],
                ["Durability", "Once committed, changes persist even after crash", "Confirmed order still placed even if browser crashes"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: ACID = Atomicity, Consistency, Isolation, Durability"
        },

        {
            type: "heading",
            level: 2,
            text: "Example Transaction Flow",
            anchor: "transaction-example"
        },
        {
            type: "code",
            language: "sql",
            code: `START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
-- If no errors
COMMIT;
-- If error
-- ROLLBACK;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Always use transactions for multiple-step operations to ensure data integrity!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Stored Procedures and Functions",
            anchor: "stored-procedures-functions"
        },
        {
            type: "paragraph",
            text: "Stored procedures and functions are reusable blocks of SQL logic stored in the database. They encapsulate complex operations and can take parameters, return values, and handle errors."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Think of stored procedures as 'macros'—automated, repeatable instructions saved for later use."
        },

        {
            type: "heading",
            level: 2,
            text: "Creating and Calling Stored Procedures",
            anchor: "create-call-procedure"
        },
        {
            type: "code",
            language: "sql",
            code: `-- Create a procedure
DELIMITER //
CREATE PROCEDURE GetEmployeeCount()
BEGIN
  SELECT COUNT(*) FROM employees;
END;
//
DELIMITER ;

-- Call it
CALL GetEmployeeCount();`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use `CALL procedure_name();` to invoke a stored procedure."
        },

        {
            type: "heading",
            level: 2,
            text: "IN, OUT, INOUT Parameters",
            anchor: "procedure-parameters"
        },
        {
            type: "code",
            language: "sql",
            code: `-- Procedure with parameters
CREATE PROCEDURE AddBonus(IN empId INT, OUT newSalary DECIMAL(10,2))
BEGIN
  SELECT salary + 500 INTO newSalary FROM employees WHERE id = empId;
END;`
        },
        {
            type: "table",
            headers: ["Parameter Type", "Purpose", "Direction"],
            rows: [
                ["IN", "Pass value into procedure", "Input only"],
                ["OUT", "Return value from procedure", "Output only"],
                ["INOUT", "Pass value in and get modified value out", "Both input and output"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: IN = Give, OUT = Take, INOUT = Exchange!"
        },

        {
            type: "heading",
            level: 2,
            text: "Creating and Using Functions",
            anchor: "create-function"
        },
        {
            type: "code",
            language: "sql",
            code: `-- Create a function
DELIMITER //
CREATE FUNCTION GetTotalSalary(dept VARCHAR(50))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
  DECLARE total DECIMAL(10,2);
  SELECT SUM(salary) INTO total FROM employees WHERE department = dept;
  RETURN total;
END;
//
DELIMITER ;

-- Use it like a column
SELECT GetTotalSalary('HR');`
        },
        {
            type: "alert",
            variant: "info",
            content: "Functions must return a single value and can be used inside SELECT queries."
        },

        {
            type: "heading",
            level: 2,
            text: "Differences Between Procedure and Function",
            anchor: "proc-vs-func"
        },
        {
            type: "table",
            headers: ["Feature", "Stored Procedure", "Function"],
            rows: [
                ["Return Value", "Optional (via OUT)", "Mandatory (via RETURN)"],
                ["Use in SELECT", "No", "Yes"],
                ["Called Using", "`CALL`", "`SELECT`"],
                ["Parameter Types", "IN, OUT, INOUT", "IN only"],
                ["Purpose", "Perform task (action)", "Compute and return result"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: Function returns a **value**. Procedure performs an **action**."
        },

        {
            type: "heading",
            level: 2,
            text: "Error Handling with DECLARE and EXCEPTION",
            anchor: "error-handling"
        },
        {
            type: "paragraph",
            text: "Use `DECLARE ... HANDLER` inside procedures to handle exceptions like division by zero or missing data."
        },
        {
            type: "code",
            language: "sql",
            code: `CREATE PROCEDURE SafeDivide(IN num1 INT, IN num2 INT, OUT result DECIMAL(10,2))
BEGIN
  DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    SET result = NULL;

  IF num2 = 0 THEN
    SET result = NULL;
  ELSE
    SET result = num1 / num2;
  END IF;
END;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use `DECLARE HANDLER` to handle runtime errors gracefully in stored logic."
        }
        , {
            type: "heading",
            level: 1,
            text: "Triggers in SQL",
            anchor: "sql-triggers"
        },
        {
            type: "paragraph",
            text: "A trigger is a stored block of SQL that is automatically executed (fired) in response to certain events on a table, like `INSERT`, `UPDATE`, or `DELETE`."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: A trigger is like a motion sensor light—it activates automatically when someone walks by."
        },

        {
            type: "heading",
            level: 2,
            text: "BEFORE and AFTER Triggers",
            anchor: "before-after-triggers"
        },
        {
            type: "table",
            headers: ["Timing", "When It Fires", "Common Use Cases"],
            rows: [
                ["BEFORE", "Before the DML statement executes", "Data validation, auto-filling fields"],
                ["AFTER", "After the DML statement executes", "Logging, audit trails, sending notifications"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- BEFORE INSERT Trigger Example
CREATE TRIGGER before_insert_employee
BEFORE INSERT ON employees
FOR EACH ROW
SET NEW.created_at = NOW();`
        },

        {
            type: "heading",
            level: 2,
            text: "Types of DML Triggers",
            anchor: "dml-triggers"
        },
        {
            type: "paragraph",
            text: "Triggers can be created for `INSERT`, `UPDATE`, or `DELETE` actions, allowing custom logic to be applied for each case."
        },
        {
            type: "code",
            language: "sql",
            code: `-- AFTER UPDATE Trigger
CREATE TRIGGER after_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
INSERT INTO salary_audit(emp_id, old_salary, new_salary, changed_on)
VALUES (OLD.id, OLD.salary, NEW.salary, NOW());`
        },
        {
            type: "alert",
            variant: "info",
            content: "`OLD` and `NEW` hold the data before and after the triggering event."
        },

        {
            type: "heading",
            level: 2,
            text: "Row-Level vs Statement-Level Triggers",
            anchor: "row-vs-statement-triggers"
        },
        {
            type: "table",
            headers: ["Trigger Type", "Fires For", "Granularity", "Example Use"],
            rows: [
                ["Row-Level", "Each affected row", "FOR EACH ROW", "Audit changes per record"],
                ["Statement-Level", "Once per statement", "Without FOR EACH ROW", "Track bulk updates"]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Most databases like MySQL only support **row-level** triggers."
        },

        {
            type: "heading",
            level: 2,
            text: "Best Practices",
            anchor: "trigger-best-practices"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Keep trigger logic simple to avoid hidden performance issues.",
                "Use AFTER triggers for logging, BEFORE for validation.",
                "Avoid recursion—one trigger firing another indefinitely.",
                "Document all triggers clearly for maintainability."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Triggers are invisible helpers. Use them wisely—they can act without obvious signs!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Cursors in SQL",
            anchor: "sql-cursors"
        },
        {
            type: "paragraph",
            text: "A cursor allows row-by-row processing of the result set returned by a query. While SQL is generally set-based, cursors are helpful when row-level logic is needed."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: A cursor is like a scanner reading one line at a time from a document instead of copying the whole thing at once."
        },

        {
            type: "heading",
            level: 2,
            text: "Implicit vs Explicit Cursors",
            anchor: "implicit-explicit-cursors"
        },
        {
            type: "table",
            headers: ["Cursor Type", "Managed By", "Control", "Use Case"],
            rows: [
                ["Implicit", "Database", "Automatic", "Single-row operations (SELECT INTO, DML)"],
                ["Explicit", "Developer", "Manual (OPEN, FETCH, CLOSE)", "Row-by-row processing with logic"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use explicit cursors when you need full control over iteration."
        },

        {
            type: "heading",
            level: 2,
            text: "Cursor Lifecycle: OPEN, FETCH, CLOSE",
            anchor: "cursor-operations"
        },
        {
            type: "list",
            style: "number",
            items: [
                "**DECLARE**: Define the cursor with a SELECT query.",
                "**OPEN**: Open the cursor and establish the result set.",
                "**FETCH**: Retrieve the next row from the cursor.",
                "**CLOSE**: Release the cursor resources."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Declare and use an explicit cursor (MySQL / PL/SQL)
DECLARE emp_name VARCHAR(100);
DECLARE done INT DEFAULT FALSE;
DECLARE cur CURSOR FOR SELECT name FROM employees;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

OPEN cur;

read_loop: LOOP
  FETCH cur INTO emp_name;
  IF done THEN
    LEAVE read_loop;
  END IF;
  -- Do something with emp_name
END LOOP;

CLOSE cur;`
        },

        {
            type: "heading",
            level: 2,
            text: "When to Use Cursors",
            anchor: "when-use-cursors"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "When logic depends on values from previous rows.",
                "When you need conditional operations on a per-row basis.",
                "When set-based solutions are too complex or not possible."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Caution and Performance Tips",
            anchor: "cursor-performance"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Avoid using cursors for large datasets—use set-based operations if possible.",
                "Always close the cursor to free resources.",
                "Use cursors only when procedural logic is essential."
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Row-by-row (RBAR) = slow-by-slow. Prefer set operations unless absolutely necessary."
        }
        , {
            type: "heading",
            level: 1,
            text: "User Management and Security (DCL)",
            anchor: "user-management-dcl"
        },
        {
            type: "paragraph",
            text: "Data Control Language (DCL) manages database access and security. It helps define who can access what, and what actions they can perform."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Think of GRANT/REVOKE like giving or taking away door keys from users in an office."
        },

        {
            type: "heading",
            level: 2,
            text: "GRANT",
            anchor: "grant"
        },
        {
            type: "paragraph",
            text: "`GRANT` gives users specific privileges to perform actions like SELECT, INSERT, or EXECUTE on database objects."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Grant SELECT and INSERT to user 'alex'
GRANT SELECT, INSERT ON employees TO 'alex'@'localhost';`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use WITH GRANT OPTION to allow the user to grant the same privileges to others."
        },

        {
            type: "heading",
            level: 2,
            text: "REVOKE",
            anchor: "revoke"
        },
        {
            type: "paragraph",
            text: "`REVOKE` removes previously granted privileges from users or roles."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Revoke INSERT privilege from user 'alex'
REVOKE INSERT ON employees FROM 'alex'@'localhost';`
        },
        {
            type: "alert",
            variant: "warning",
            content: "REVOKE doesn’t delete the user—just removes access."
        },

        {
            type: "heading",
            level: 2,
            text: "Creating Users and Roles",
            anchor: "users-and-roles"
        },
        {
            type: "paragraph",
            text: "You can create users and assign them roles, which are collections of privileges. This simplifies access management for multiple users."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Create user
CREATE USER 'john'@'localhost' IDENTIFIED BY 'securepass';

-- Create role
CREATE ROLE readonly;

-- Grant privileges to role
GRANT SELECT ON database.* TO readonly;

-- Assign role to user
GRANT readonly TO 'john'@'localhost';`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use roles like 'job titles'—assign access once and reuse it for multiple users."
        },

        {
            type: "heading",
            level: 2,
            text: "Privileges and Permissions",
            anchor: "privileges-permissions"
        },
        {
            type: "table",
            headers: ["Privilege", "Purpose", "Object Type"],
            rows: [
                ["SELECT", "Read data", "Tables, views"],
                ["INSERT", "Add data", "Tables"],
                ["UPDATE", "Modify existing data", "Tables"],
                ["DELETE", "Remove data", "Tables"],
                ["EXECUTE", "Run stored procedures/functions", "Routines"],
                ["USAGE", "Minimal access to connect", "Databases"],
                ["ALL PRIVILEGES", "Grants all rights", "Any object"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Always follow the principle of **least privilege**—grant only what is necessary."
        }
        , {
            type: "heading",
            level: 1,
            text: "Normalization",
            anchor: "normalization"
        },
        {
            type: "paragraph",
            text: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity by dividing large tables into smaller, related ones."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Normalization is like organizing a messy cupboard—group related items into their own boxes so everything is neat and efficient."
        },

        {
            type: "heading",
            level: 2,
            text: "First Normal Form (1NF)",
            anchor: "1nf"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Ensures each column contains **atomic** (indivisible) values.",
                "No repeating groups or arrays allowed."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Bad (Not 1NF)
| ID | Name   | Phones        |
|----|--------|---------------|
| 1  | Alice  | 123, 456      |

-- Good (1NF)
| ID | Name   | Phone   |
|----|--------|---------|
| 1  | Alice  | 123     |
| 1  | Alice  | 456     |`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: 1NF = No Multivalues! Each cell must be single and simple."
        },

        {
            type: "heading",
            level: 2,
            text: "Second Normal Form (2NF)",
            anchor: "2nf"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Must be in 1NF.",
                "No **partial dependency** on a composite key (i.e., non-key attributes must depend on the whole primary key)."
            ]
        },
        {
            type: "paragraph",
            text: "Useful when you have a composite primary key—ensure every column depends on the full key."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Bad: City depends only on StudentID
| StudentID | CourseID | City     |
|-----------|----------|----------|

-- Good: Split into two tables
Students(StudentID, City)
Enrollments(StudentID, CourseID)`
        },

        {
            type: "heading",
            level: 2,
            text: "Third Normal Form (3NF)",
            anchor: "3nf"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Must be in 2NF.",
                "No **transitive dependency**: non-key columns should not depend on other non-key columns."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Bad: DepartmentName depends on DeptID, not directly on StudentID
| StudentID | DeptID | DepartmentName |

-- Good:
Departments(DeptID, DepartmentName)
Students(StudentID, DeptID)`
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory trick: 3NF = No columns depending on non-key columns!"
        },

        {
            type: "heading",
            level: 2,
            text: "Boyce-Codd Normal Form (BCNF)",
            anchor: "bcnf"
        },
        {
            type: "paragraph",
            text: "A stricter version of 3NF. Every determinant must be a candidate key. It removes anomalies even when 3NF is satisfied."
        },
        {
            type: "code",
            language: "sql",
            code: `-- If EmpID and DeptID both determine something,
-- and DeptID isn't a key → violates BCNF
`
        },
        {
            type: "alert",
            variant: "warning",
            content: "BCNF fixes edge cases where 3NF fails—very rare but important in academic scenarios."
        },

        {
            type: "heading",
            level: 2,
            text: "Fourth Normal Form (4NF)",
            anchor: "4nf"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Must be in BCNF.",
                "Eliminates **multi-valued dependencies**.",
                "Each row should represent one fact."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- A person can have multiple skills and projects
-- Each should be split into its own row to meet 4NF`
        },
        {
            type: "alert",
            variant: "info",
            content: "4NF = No row should describe two or more independent multi-valued facts."
        },

        {
            type: "heading",
            level: 2,
            text: "Fifth Normal Form (5NF)",
            anchor: "5nf"
        },
        {
            type: "paragraph",
            text: "Ensures that every join dependency is a consequence of candidate keys. It’s required in very complex models involving reconstruction of data from multiple joins."
        },
        {
            type: "alert",
            variant: "info",
            content: "Rare in real-world use. More academic and theoretical in nature."
        },

        {
            type: "heading",
            level: 2,
            text: "Denormalization",
            anchor: "denormalization"
        },
        {
            type: "paragraph",
            text: "Denormalization is the process of intentionally introducing redundancy for faster read performance, often used in reporting or large-scale querying."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Used to reduce complex joins.",
                "Improves performance at the cost of storage and potential inconsistencies.",
                "Common in OLAP/data warehouse systems."
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Denormalize **only when necessary**—prefer normalization for data integrity."
        }
        , {
            type: "heading",
            level: 1,
            text: "ER Model and Relational Schema",
            anchor: "er-model-relational-schema"
        },
        {
            type: "paragraph",
            text: "The Entity-Relationship (ER) Model is used to visually represent the structure of a database. It includes entities, attributes, and relationships, which are later translated into relational schemas (tables)."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Think of the ER model as a **blueprint of a building**, and the relational schema as the **actual rooms and structures** built from it."
        },

        {
            type: "heading",
            level: 2,
            text: "Entities and Attributes",
            anchor: "entities-attributes"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**Entity**: Real-world object or concept (e.g., Student, Book).",
                "**Attribute**: A property or detail of an entity (e.g., name, age).",
                "Attributes can be **simple**, **composite** (split into sub-parts), or **derived** (e.g., Age from DOB)."
            ]
        },
        {
            type: "code",
            language: "text",
            code: `Entity: STUDENT
Attributes: ID, Name, DOB, Email
→ Age is derived from DOB`
        },

        {
            type: "heading",
            level: 2,
            text: "Types of Keys",
            anchor: "keys"
        },
        {
            type: "table",
            headers: ["Key Type", "Description", "Example"],
            rows: [
                ["Primary Key", "Uniquely identifies each row", "student_id"],
                ["Candidate Key", "All possible unique keys", "student_id, email"],
                ["Composite Key", "Combination of multiple columns", "student_id + course_id"],
                ["Foreign Key", "Links to a key in another table", "course_id referencing COURSES(id)"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Primary ⊂ Candidate Keys; Foreign = Link to another table!"
        },

        {
            type: "heading",
            level: 2,
            text: "Relationships",
            anchor: "relationships"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**Relationship**: An association between entities (e.g., Student ENROLLS in Course).",
                "Can be **Unary**, **Binary**, or **Ternary** (involving 1, 2, or 3 entities).",
                "May include **attributes** specific to the relationship (e.g., enrollment date)."
            ]
        },
        {
            type: "code",
            language: "text",
            code: `STUDENT ---< ENROLLS >--- COURSE
(Enrollment has attributes like enrollment_date)`
        },

        {
            type: "heading",
            level: 2,
            text: "Cardinality and Participation",
            anchor: "cardinality-participation"
        },
        {
            type: "table",
            headers: ["Term", "Meaning", "Example"],
            rows: [
                ["Cardinality", "Defines number of related records", "One-to-One, One-to-Many, Many-to-Many"],
                ["Participation", "Total (mandatory) or Partial (optional)", "All students must have an ID (total)"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory trick: Cardinality = Quantity of links, Participation = Mandatory or Optional"
        },

        {
            type: "heading",
            level: 2,
            text: "Relational Schema",
            anchor: "relational-schema"
        },
        {
            type: "paragraph",
            text: "The relational schema is a logical representation of the database structure in tabular form, derived from the ER model."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Student Table
CREATE TABLE Student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100) UNIQUE
);

-- Course Table
CREATE TABLE Course (
  id INT PRIMARY KEY,
  title VARCHAR(100)
);

-- Enrollment (relationship table)
CREATE TABLE Enrollment (
  student_id INT,
  course_id INT,
  enrollment_date DATE,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES Student(id),
  FOREIGN KEY (course_id) REFERENCES Course(id)
);`
        }
        , {
            type: "heading",
            level: 1,
            text: "Advanced SQL Concepts",
            anchor: "advanced-sql"
        },
        {
            type: "paragraph",
            text: "Advanced SQL features enable complex analytics, transformations, and data manipulation. These tools are essential for interviews, reports, and large-scale applications."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Think of advanced SQL like Excel formulas + pivot tables — powerful for summaries, comparisons, and insights."
        },

        {
            type: "heading",
            level: 2,
            text: "Common Table Expressions (CTE)",
            anchor: "cte"
        },
        {
            type: "paragraph",
            text: "`WITH` clause lets you define temporary result sets that can be referenced like a table. It improves readability for nested queries."
        },
        {
            type: "code",
            language: "sql",
            code: `WITH HighEarners AS (
  SELECT name, salary FROM employees WHERE salary > 80000
)
SELECT * FROM HighEarners;`
        },
        {
            type: "alert",
            variant: "info",
            content: "CTEs help break down big queries—like defining variables in code before using them."
        },

        {
            type: "heading",
            level: 2,
            text: "Window Functions",
            anchor: "window-functions"
        },
        {
            type: "table",
            headers: ["Function", "Purpose", "Example Use"],
            rows: [
                ["ROW_NUMBER()", "Unique row index per partition", "Top N per group"],
                ["RANK()", "Rank with gaps", "Leaderboard with ties"],
                ["DENSE_RANK()", "Rank without gaps", "Compact ranking"],
                ["LEAD()", "Access next row", "Compare today vs tomorrow"],
                ["LAG()", "Access previous row", "Compare today vs yesterday"],
                ["FIRST_VALUE()", "Get first in group", "First purchase date"],
                ["NTILE(n)", "Distribute rows into n buckets", "Quartiles, percentiles"]
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `SELECT name, department,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank
FROM employees;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `OVER (PARTITION BY ...)` to 'reset' the function per group."
        },

        {
            type: "heading",
            level: 2,
            text: "Recursive Queries",
            anchor: "recursive"
        },
        {
            type: "paragraph",
            text: "CTEs can be recursive to solve hierarchical problems like org charts, tree traversal, etc."
        },
        {
            type: "code",
            language: "sql",
            code: `WITH RECURSIVE OrgChart AS (
  SELECT id, name, manager_id FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id
  FROM employees e
  JOIN OrgChart o ON e.manager_id = o.id
)
SELECT * FROM OrgChart;`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Recursive queries need a base case and a join back—just like loops in programming."
        },

        {
            type: "heading",
            level: 2,
            text: "JSON Functions (PostgreSQL / MySQL)",
            anchor: "json-functions"
        },
        {
            type: "paragraph",
            text: "Modern RDBMS support JSON fields and functions to store, query, and manipulate semi-structured data."
        },
        {
            type: "code",
            language: "sql",
            code: `-- Access JSON field in PostgreSQL
SELECT data->>'name' AS name FROM users;

-- In MySQL
SELECT JSON_EXTRACT(info, '$.email') FROM customers;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use JSON when you can't predict the structure ahead of time—but avoid overusing it in relational tables."
        },

        {
            type: "heading",
            level: 2,
            text: "Pivoting and Unpivoting Data",
            anchor: "pivot-unpivot"
        },
        {
            type: "paragraph",
            text: "Pivot converts rows to columns (e.g., monthly sales by region). Unpivot does the reverse."
        },
        {
            type: "code",
            language: "sql",
            code: `-- PostgreSQL Pivot with FILTER
SELECT
  department,
  COUNT(*) FILTER (WHERE gender = 'M') AS males,
  COUNT(*) FILTER (WHERE gender = 'F') AS females
FROM employees
GROUP BY department;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Pivoting = spreadsheet cross-tab. It's great for dashboards and grouped summaries."
        }
        , {
            type: "heading",
            level: 1,
            text: "Performance Tuning in SQL",
            anchor: "performance-tuning"
        },
        {
            type: "paragraph",
            text: "Performance tuning helps speed up queries, reduce server load, and improve user experience in databases. A few smart changes in queries or indexes can drastically improve performance."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Optimizing SQL is like tuning a car engine—it still runs otherwise, but performs much better with tuning!"
        },

        {
            type: "heading",
            level: 2,
            text: "Query Optimization",
            anchor: "query-optimization"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Write only the **columns you need** (`SELECT col1` instead of `SELECT *`).",
                "Use **WHERE filters** early to reduce row scans.",
                "Avoid unnecessary **JOINs** or **nested subqueries**.",
                "Use **EXISTS** instead of **IN** for correlated subqueries.",
                "Use **LIMIT** or **FETCH FIRST** to avoid processing unneeded rows."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Avoid this:
SELECT * FROM employees;

-- Prefer:
SELECT id, name FROM employees WHERE department = 'IT';`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Think like the database — reduce what it has to read, process, and return."
        },

        {
            type: "heading",
            level: 2,
            text: "Indexing Strategies",
            anchor: "indexing"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Index **columns used in WHERE, JOIN, ORDER BY, or GROUP BY**.",
                "Use **composite indexes** for multiple columns accessed together.",
                "Avoid indexing columns with **low cardinality** (like gender).",
                "Don't over-index — indexes slow down INSERT/UPDATE/DELETE operations.",
                "Use **covering indexes** that include all columns used in a query."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Create an index on frequently searched column
CREATE INDEX idx_emp_dept ON employees(department);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Index is like a book’s table of contents — faster lookup without flipping every page."
        },

        {
            type: "heading",
            level: 2,
            text: "Avoiding Full Table Scans",
            anchor: "full-scan"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Use **indexes** and **WHERE conditions** to reduce rows scanned.",
                "Avoid functions on indexed columns (`WHERE UPPER(name)` disables index).",
                "Use **indexed columns** in JOIN and WHERE.",
                "Use proper **data types** for comparison (don’t compare string to int)."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- Avoid this (index not used):
SELECT * FROM employees WHERE UPPER(name) = 'ALICE';

-- Prefer:
SELECT * FROM employees WHERE name = 'Alice';`
        },

        {
            type: "heading",
            level: 2,
            text: "EXPLAIN, ANALYZE, and Query Plan",
            anchor: "query-plan"
        },
        {
            type: "paragraph",
            text: "`EXPLAIN` shows the query execution plan. It helps detect full scans, index usage, joins, and estimated cost. In PostgreSQL, use `EXPLAIN ANALYZE` to see actual timings."
        },
        {
            type: "code",
            language: "sql",
            code: `EXPLAIN SELECT * FROM employees WHERE department = 'Sales';

-- PostgreSQL with execution time:
EXPLAIN ANALYZE SELECT * FROM employees WHERE id = 101;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Tip: Learn to read query plans—it’s like reading a map of how the database works."
        }
        , {
            type: "heading",
            level: 1,
            text: "SQL with Programming Languages (Java Focus)",
            anchor: "sql-java-integration"
        },
        {
            type: "paragraph",
            text: "SQL is commonly used with programming languages to interact with databases dynamically. Java uses JDBC and modern ORM tools like Hibernate and JPA for this purpose."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: JDBC is like a driver’s seat to operate the database car from a Java program."
        },

        {
            type: "heading",
            level: 2,
            text: "JDBC (Java Database Connectivity)",
            anchor: "jdbc"
        },
        {
            type: "paragraph",
            text: "JDBC is a standard Java API that allows you to connect to relational databases, execute SQL queries, and handle results."
        },
        {
            type: "code",
            language: "java",
            code: `Connection conn = DriverManager.getConnection(url, user, pass);
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users");`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Avoid using `Statement` with user input—it’s vulnerable to SQL injection!"
        },

        {
            type: "heading",
            level: 2,
            text: "PreparedStatement vs Statement",
            anchor: "prepared-vs-statement"
        },
        {
            type: "table",
            headers: ["Feature", "Statement", "PreparedStatement"],
            rows: [
                ["Parameter binding", "No", "Yes (safe)"],
                ["SQL injection risk", "High", "Low"],
                ["Performance", "Slower for repeated use", "Faster (precompiled)"],
                ["Flexibility", "Dynamic SQL", "Static SQL with parameters"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `PreparedStatement ps = conn.prepareStatement(
  "SELECT * FROM users WHERE id = ?"
);
ps.setInt(1, 101);
ResultSet rs = ps.executeQuery();`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `PreparedStatement` anytime user input is involved."
        },

        {
            type: "heading",
            level: 2,
            text: "SQL Injection Prevention",
            anchor: "sql-injection"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Never concatenate user inputs directly into SQL.",
                "Use **PreparedStatement** or **Stored Procedures**.",
                "Validate and sanitize input on the server side.",
                "Restrict DB permissions for the application user (e.g., no DROP privileges)."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `// Dangerous
String sql = "SELECT * FROM users WHERE name = '" + input + "'";

// Safe
PreparedStatement ps = conn.prepareStatement("SELECT * FROM users WHERE name = ?");
ps.setString(1, input);`
        },
        {
            type: "alert",
            variant: "danger",
            content: "SQL injection = one of the most dangerous web vulnerabilities. Never trust user input!"
        },

        {
            type: "heading",
            level: 2,
            text: "ORM Tools: Hibernate and JPA",
            anchor: "orm-tools"
        },
        {
            type: "paragraph",
            text: "Object-Relational Mapping (ORM) tools help developers interact with databases using Java objects instead of SQL queries. Hibernate is a popular ORM implementation; JPA is the standard API."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**Hibernate**: Powerful ORM framework with advanced features (lazy loading, caching, HQL).",
                "**JPA (Java Persistence API)**: Java standard for ORM; Hibernate is a common implementation.",
                "ORM handles CRUD operations, relationships, and schema mapping via annotations or XML."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `@Entity
public class Employee {
  @Id
  private int id;
  private String name;
  
  @ManyToOne
  private Department department;
}`},
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: ORM is like an adapter that lets you use Java objects as if they were DB rows."
        }
        , {
            type: "heading",
            level: 1,
            text: "NoSQL vs SQL",
            anchor: "nosql-vs-sql"
        },
        {
            type: "paragraph",
            text: "SQL (relational) and NoSQL (non-relational) databases serve different purposes. Understanding their differences helps you pick the right database for your use case."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: SQL is like a spreadsheet with fixed columns, while NoSQL is like a folder of JSON files — more flexible, but less structured."
        },

        {
            type: "heading",
            level: 2,
            text: "Key Differences",
            anchor: "key-differences"
        },
        {
            type: "table",
            headers: ["Feature", "SQL (Relational)", "NoSQL (Non-Relational)"],
            rows: [
                ["Data Model", "Structured (tables)", "Flexible (JSON, key-value, etc.)"],
                ["Schema", "Fixed schema", "Schema-less or dynamic"],
                ["Scalability", "Vertical (scale-up)", "Horizontal (scale-out)"],
                ["Joins", "Supports joins", "Generally no joins"],
                ["Transactions", "ACID-compliant", "Eventually consistent (BASE)"],
                ["Examples", "MySQL, PostgreSQL", "MongoDB, Cassandra, Redis"]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trick to Remember: SQL = Strong schema & consistency. NoSQL = Flexible & scalable."
        },

        {
            type: "heading",
            level: 2,
            text: "When to Use SQL vs NoSQL",
            anchor: "use-cases"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**Use SQL when:** you need structured data, complex queries, relationships, and strong consistency (e.g., banking, ERP).",
                "**Use NoSQL when:** you need high scalability, fast writes, or deal with dynamic/unstructured data (e.g., social apps, IoT, logs)."
            ]
        },
        {
            type: "paragraph",
            text: "Example: Use SQL for employee management system; use NoSQL for storing user activity logs or chat messages."
        },

        {
            type: "heading",
            level: 2,
            text: "Types of NoSQL Databases",
            anchor: "nosql-types"
        },
        {
            type: "table",
            headers: ["Type", "Description", "Examples"],
            rows: [
                ["Document", "Stores data as JSON/BSON documents", "MongoDB, CouchDB"],
                ["Key-Value", "Simple key-value pairs", "Redis, DynamoDB"],
                ["Column-Family", "Column-based storage", "Cassandra, HBase"],
                ["Graph", "Nodes and relationships", "Neo4j, ArangoDB"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: DKCG = Document, Key-Value, Column, Graph (Types of NoSQL)"
        },

        {
            type: "heading",
            level: 2,
            text: "SQL Compatibility in NoSQL Databases",
            anchor: "sql-compatibility"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Some NoSQL DBs offer SQL-like querying for familiarity and ease:",
                "**MongoDB** uses a JSON-based query language but supports SQL-like aggregation.",
                "**Cassandra** supports **CQL (Cassandra Query Language)** — similar to SQL.",
                "**Google BigQuery**, **Amazon Athena**, **Azure Cosmos DB** also support SQL interfaces over NoSQL storage.",
                "Tools like **Apache Drill** and **Presto** allow querying NoSQL using SQL."
            ]
        },
        {
            type: "code",
            language: "sql",
            code: `-- CQL example (Cassandra)
SELECT name FROM users WHERE id = 123;`
        },
        {
            type: "alert",
            variant: "info",
            content: "Note: SQL-style interfaces in NoSQL don't always support joins or ACID transactions."
        }


    ],
    summary: {
        keyPoints: [
            "SQL is a standardized language used for managing relational databases",
            "SQL commands are categorized into DDL, DML, DCL, TCL, and DQL",
            "DDL and DCL auto-commit, while DML is transactional",
            "SELECT is the core of DQL — used to retrieve and analyze data",
            "Each command type serves a unique role in DB lifecycle"
        ],
        cheatSheet: {
            ddl: `CREATE, ALTER, DROP, TRUNCATE`,
            dml: `INSERT, UPDATE, DELETE`,
            dcl: `GRANT, REVOKE`,
            tcl: `COMMIT, ROLLBACK, SAVEPOINT`,
            dql: `SELECT`
        }
    },
    nextSteps: [
        {
            topicId: "sql-select-queries",
            reason: "Start writing complex SELECT statements using WHERE, ORDER BY, and functions"
        },
        {
            topicId: "sql-joins",
            reason: "Learn how to fetch and analyze data from multiple tables"
        }
    ]
}
