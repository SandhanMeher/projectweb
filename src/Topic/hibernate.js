// topics/hibernate-intro.js

export default {
    meta: {
        title: "Introduction to Hibernate",
        description: "Fundamentals of Hibernate ORM framework including architecture, features, and comparison with JDBC.",
        category: "persistence",
        subcategory: "java",
        difficulty: "beginner",
        duration: 30,
        keywords: ["hibernate", "orm", "jdbc", "architecture", "introduction"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to Hibernate",
            anchor: "hibernate-intro"
        },
        {
            type: "paragraph",
            text: "Hibernate is a powerful, high-performance Object-Relational Mapping (ORM) framework for Java. It handles the mapping of Java objects to relational database tables and simplifies database access logic in Java applications."
        },

        {
            type: "heading",
            level: 2,
            text: "What is ORM?",
            anchor: "what-is-orm"
        },
        {
            type: "paragraph",
            text: "Object-Relational Mapping (ORM) is a technique that connects the rich objects of an object-oriented language like Java with tables in a relational database. ORM allows developers to manipulate database data using Java objects without writing SQL queries directly."
        },

        {
            type: "list",
            style: "unordered",
            items: [
                "Maps Java classes to database tables",
                "Handles CRUD operations via object methods",
                "Reduces boilerplate JDBC code",
                "Improves maintainability and portability"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Why use Hibernate?",
            anchor: "why-hibernate"
        },
        {
            type: "paragraph",
            text: "Hibernate offers several advantages over traditional JDBC, making it easier and safer to persist data in enterprise applications."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Automatic table mapping from Java classes",
                "HQL (Hibernate Query Language) for object-oriented queries",
                "Supports caching for performance optimization",
                "Built-in transaction management",
                "Cross-database portability"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Features of Hibernate",
            anchor: "hibernate-features"
        },
        {
            type: "table",
            headers: ["Feature", "Description"],
            rows: [
                ["ORM", "Maps Java objects to relational tables"],
                ["HQL", "Supports powerful query language similar to SQL"],
                ["Caching", "Supports first-level and second-level caching"],
                ["Lazy Loading", "Fetches data on demand to optimize performance"],
                ["Transaction Management", "Handles commit and rollback seamlessly"],
                ["Automatic Schema Generation", "Can generate DB schema based on mappings"]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Hibernate Architecture",
            anchor: "hibernate-architecture"
        },
        {
            type: "paragraph",
            text: "Hibernate architecture consists of multiple layers and components, each responsible for a specific part of ORM processing."
        },
        {
            type: "code",
            language: "text",
            code: `┌──────────────────────┐
│   Application       │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ Hibernate           │
│  - Configuration    │
│  - SessionFactory   │
│  - Session          │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ JDBC                │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│ Database            │
└─────────────────────┘`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Configuration**: Reads settings from XML/properties files",
                "**SessionFactory**: Thread-safe factory for `Session` objects",
                "**Session**: Represents a unit of work; used to interact with DB",
                "**Transaction**: Manages atomicity and consistency",
                "**JDBC**: Hibernate uses JDBC under the hood to talk to the DB"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Hibernate vs JDBC",
            anchor: "hibernate-vs-jdbc"
        },
        {
            type: "table",
            headers: ["Hibernate", "JDBC"],
            rows: [
                ["Object-oriented", "Relational and SQL-based"],
                ["Less boilerplate", "Requires verbose code"],
                ["Supports caching", "No built-in caching"],
                ["Database independent", "Database-specific"],
                ["Maintains state across sessions", "Stateless by design"],
                ["Automatic mapping", "Manual result set parsing"]
            ]
        }
    ],
    summary: {
        keyPoints: [
            "Hibernate is a widely-used Java ORM framework that simplifies database access.",
            "ORM maps Java objects to relational tables using mapping files or annotations.",
            "Hibernate provides built-in features like HQL, caching, and transaction management.",
            "Its architecture is layered and designed for scalability and modularity.",
            "Hibernate reduces boilerplate code compared to JDBC."
        ]
    },
    nextSteps: [
        {
            topicId: "hibernate-xml-config",
            reason: "Deep dive into configuring Hibernate using XML files"
        },
        {
            topicId: "hibernate-mapping-concepts",
            reason: "Learn how entity relationships are defined and mapped"
        }
        ,
        {
            type: "heading",
            level: 1,
            text: "Hibernate Setup (3.6)",
            anchor: "hibernate-setup"
        },
        {
            type: "heading",
            level: 2,
            text: "Downloading Hibernate 3.6 Libraries",
            anchor: "download-libs"
        },
        {
            type: "paragraph",
            text: "Hibernate 3.6 can be downloaded from the official Hibernate SourceForge or Maven Central repositories. It includes core functionality along with several supporting libraries."
        },
        {
            type: "alert",
            variant: "info",
            content: "Hibernate 3.6 is an older version; ensure compatibility with your Java version (Java 6 or 7 is recommended)."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Go to [https://sourceforge.net/projects/hibernate/files/hibernate3/](https://sourceforge.net/projects/hibernate/files/hibernate3/)",
                "Download the ZIP bundle (e.g., `hibernate-distribution-3.6.x.Final.zip`)",
                "Extract it and navigate to the `lib/required` folder for core libraries"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Required JARs",
            anchor: "required-jars"
        },
        {
            type: "paragraph",
            text: "You need to include several JARs in your project's classpath to run Hibernate 3.6 successfully. These include core Hibernate files and dependencies."
        },
        {
            type: "table",
            headers: ["JAR File", "Purpose"],
            rows: [
                ["hibernate3.jar", "Main Hibernate library"],
                ["dom4j-1.6.1.jar", "XML processing"],
                ["commons-logging-1.1.1.jar", "Logging interface"],
                ["slf4j-api-1.6.1.jar", "Logging API"],
                ["slf4j-log4j12-1.6.1.jar", "SLF4J to Log4j binding"],
                ["log4j-1.2.16.jar", "Logging implementation"],
                ["javassist-3.12.0.GA.jar", "Bytecode enhancement"],
                ["antlr-2.7.6.jar", "Parsing HQL queries"],
                ["jta-1.1.jar", "Transaction management"]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "You also need the JDBC driver (e.g., `mysql-connector-java.jar`) for your specific database."
        },

        {
            type: "heading",
            level: 2,
            text: "Directory Structure for Hibernate Project",
            anchor: "project-structure"
        },
        {
            type: "paragraph",
            text: "A typical Hibernate project directory structure includes folders for source code, configuration, and mapping files."
        },
        {
            type: "code",
            language: "text",
            code: `my-hibernate-app/
├── lib/                   # All required JARs including Hibernate, slf4j, JDBC driver
├── src/                   # Java source files (e.g., Employee.java, MainApp.java)
│   └── com/
│       └── example/
│           ├── Employee.java
│           └── HibernateUtil.java
├── resources/
│   ├── hibernate.cfg.xml  # Main Hibernate configuration file
│   └── Employee.hbm.xml   # XML mapping files
└── bin/                   # Compiled class files`
        }
        ,

        {
            type: "heading",
            level: 1,
            text: "Hibernate Configuration via XML",
            anchor: "hibernate-xml-config"
        },
        {
            type: "paragraph",
            text: "In Hibernate 3.6, configuration is typically done using the `hibernate.cfg.xml` file. This file sets up database connectivity, Hibernate properties, and mapping files. It is placed in the classpath (usually under `src` or `resources`)."
        },

        {
            type: "heading",
            level: 2,
            text: "Purpose of hibernate.cfg.xml",
            anchor: "cfg-purpose"
        },
        {
            type: "paragraph",
            text: "The `hibernate.cfg.xml` file acts as the central configuration for Hibernate. It defines how Hibernate connects to the database, what dialect to use, which mappings are available, and other runtime properties."
        },

        {
            type: "heading",
            level: 2,
            text: "Basic Structure",
            anchor: "cfg-structure"
        },
        {
            type: "code",
            language: "xml",
            code: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration PUBLIC
  "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
  "http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">
<hibernate-configuration>
  <session-factory>
    <!-- Configuration properties go here -->
  </session-factory>
</hibernate-configuration>`
        },

        {
            type: "heading",
            level: 2,
            text: "Main Elements",
            anchor: "cfg-elements"
        },
        {
            type: "table",
            headers: ["Element", "Description"],
            rows: [
                ["<hibernate-configuration>", "Root element of the configuration file"],
                ["<session-factory>", "Defines settings related to session factory and database"]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Database Connection Properties",
            anchor: "db-properties"
        },
        {
            type: "paragraph",
            text: "These properties define how Hibernate connects to the underlying database using JDBC."
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="hibernate.connection.driver_class">com.mysql.jdbc.Driver</property>
<property name="hibernate.connection.url">jdbc:mysql://localhost:3306/mydb</property>
<property name="hibernate.connection.username">root</property>
<property name="hibernate.connection.password">password</property>`
        },

        {
            type: "heading",
            level: 2,
            text: "SQL Dialect",
            anchor: "sql-dialect"
        },
        {
            type: "paragraph",
            text: "The `hibernate.dialect` property tells Hibernate how to generate SQL syntax specific to the database you're using."
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="hibernate.dialect">org.hibernate.dialect.MySQL5Dialect</property>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`MySQL5Dialect` – for MySQL 5.x and above",
                "`Oracle10gDialect` – for Oracle 10g and above",
                "`PostgreSQLDialect` – for PostgreSQL",
                "`SQLServerDialect` – for Microsoft SQL Server"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Show SQL Queries",
            anchor: "show-sql"
        },
        {
            type: "paragraph",
            text: "This property is useful for debugging. If set to true, Hibernate will print all SQL statements to the console."
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="hibernate.show_sql">true</property>`
        },

        {
            type: "heading",
            level: 2,
            text: "Connection Pooling",
            anchor: "connection-pool"
        },
        {
            type: "paragraph",
            text: "Controls the number of connections in the Hibernate internal connection pool."
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="hibernate.connection.pool_size">5</property>`
        },

        {
            type: "heading",
            level: 2,
            text: "Automatic Schema Generation",
            anchor: "auto-ddl"
        },
        {
            type: "paragraph",
            text: "The `hibernate.hbm2ddl.auto` property is used for auto-creating or updating the database schema. It’s helpful during development but should be disabled in production."
        },
        {
            type: "table",
            headers: ["Value", "Description"],
            rows: [
                ["create", "Drops and recreates the schema each time"],
                ["update", "Updates the schema (non-destructive)"],
                ["create-drop", "Creates schema on startup, drops on shutdown"],
                ["validate", "Validates schema but makes no changes"],
                ["none", "No action taken"]
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="hibernate.hbm2ddl.auto">update</property>`
        },

        {
            type: "heading",
            level: 2,
            text: "Mapping Files",
            anchor: "cfg-mappings"
        },
        {
            type: "paragraph",
            text: "Mapping files (.hbm.xml) define how Java classes are mapped to database tables. They must be explicitly listed in the configuration."
        },
        {
            type: "code",
            language: "xml",
            code: `<mapping resource="com/example/Employee.hbm.xml"/>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "You can include multiple `<mapping resource=\"...\"/>` tags for each mapped class.",
                "Ensure the path is correct and matches the location inside the `resources` directory."
            ]
        }
        ,

        {
            type: "heading",
            level: 1,
            text: "Hibernate Mapping Files (.hbm.xml)",
            anchor: "mapping-files"
        },
        {
            type: "paragraph",
            text: "In Hibernate, mapping files define how Java classes and their fields are mapped to database tables and columns. These files use XML syntax and typically have the `.hbm.xml` extension. They are referenced in the `hibernate.cfg.xml` configuration."
        },

        {
            type: "heading",
            level: 2,
            text: "Basic Mapping Structure",
            anchor: "basic-mapping"
        },
        {
            type: "paragraph",
            text: "Every mapping file starts with the `<hibernate-mapping>` root element, and contains one or more `<class>` tags for mapping Java classes to database tables."
        },
        {
            type: "code",
            language: "xml",
            code: `<?xml version="1.0"?>
<!DOCTYPE hibernate-mapping PUBLIC
  "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
  "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
<hibernate-mapping>
  <class name="com.example.Employee" table="EMPLOYEES">
    <id name="id" column="EMP_ID" type="long">
      <generator class="native"/>
    </id>
    <property name="firstName" column="FIRST_NAME" type="string"/>
    <property name="lastName" column="LAST_NAME" type="string"/>
    <property name="salary" column="SALARY" type="double"/>
  </class>
</hibernate-mapping>`
        },

        {
            type: "table",
            headers: ["Tag", "Purpose"],
            rows: [
                ["<hibernate-mapping>", "Root element for the mapping file"],
                ["<class>", "Defines the Java class and associated table"],
                ["<id>", "Maps the primary key property"],
                ["<property>", "Maps other simple fields to columns"]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Mapping Types",
            anchor: "mapping-types"
        },
        {
            type: "paragraph",
            text: "Hibernate supports mapping of different data types between Java and SQL. You can use built-in primitive and object types, as well as date/time types and custom user-defined types."
        },

        {
            type: "heading",
            level: 3,
            text: "Primitive and Object Types",
            anchor: "primitive-types"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`int`, `long`, `float`, `double` → `integer`, `long`, `float`, `double`",
                "`java.lang.String` → `string`",
                "`boolean` → `boolean`"
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="age" column="AGE" type="integer"/>
<property name="active" column="IS_ACTIVE" type="boolean"/>`
        },

        {
            type: "heading",
            level: 3,
            text: "Date and Time Types",
            anchor: "date-types"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`java.util.Date` or `java.sql.Date` → `date`",
                "`java.sql.Time` → `time`",
                "`java.sql.Timestamp` → `timestamp`"
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="joinDate" column="JOIN_DATE" type="date"/>
<property name="loginTime" column="LOGIN_TIME" type="time"/>
<property name="lastUpdated" column="UPDATED_AT" type="timestamp"/>`
        },

        {
            type: "heading",
            level: 3,
            text: "Custom Types (Optional)",
            anchor: "custom-types"
        },
        {
            type: "paragraph",
            text: "Hibernate allows mapping custom Java types to database columns using user-defined types that implement the `UserType` interface. This is useful when you have non-standard data types."
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="status" column="STATUS" type="com.example.types.StatusUserType"/>`
        },
        {
            type: "alert",
            variant: "info",
            content: "Custom types require implementation of `org.hibernate.usertype.UserType`."
        }




    ]
}




