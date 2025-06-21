export default {
    meta: {
        title: "Introduction to Hibernate",
        description: "Fundamentals of Hibernate ORM framework including architecture, features, and comparison with JDBC.",
        category: "persistence",
        subcategory: "java",
        difficulty: "beginner",
        duration: 30,
        keywords: ["hibernate", "orm", "jdbc", "architecture"]
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
            text: "Hibernate is a powerful, high-performance Object-Relational Mapping (ORM) framework for Java that simplifies database interactions."
        },

        {
            type: "heading",
            level: 2,
            text: "What is ORM?",
            anchor: "what-is-orm"
        },
        {
            type: "paragraph",
            text: "Object-Relational Mapping connects Java objects to database tables, allowing developers to work with objects rather than SQL queries."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Maps Java classes to database tables",
                "Converts object operations to SQL automatically",
                "Handles result set to object conversion"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Hibernate Architecture",
            anchor: "architecture"
        },
        {
            type: "code",
            language: "text",
            code: `┌──────────────────────┐
│   Application       │
└──────────┬─────────┘
           │
┌──────────▼─────────┐
│ Hibernate          │
│  - Configuration   │
│  - SessionFactory  │
│  - Session         │
└──────────┬─────────┘
           │
┌──────────▼─────────┐
│ JDBC               │
└──────────┬─────────┘
           │
┌──────────▼─────────┐
│ Database           │
└────────────────────┘`
        },
        {
            type: "table",
            headers: ["Component", "Purpose"],
            rows: [
                ["Configuration", "Reads XML/properties config"],
                ["SessionFactory", "Thread-safe factory for sessions"],
                ["Session", "Single-threaded unit of work"],
                ["Transaction", "Atomic operation boundary"]
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
            headers: ["Feature", "Hibernate", "JDBC"],
            rows: [
                ["Code Amount", "Less boilerplate", "Verbose"],
                ["Caching", "Built-in", "Manual"],
                ["Portability", "Database independent", "DB-specific"],
                ["Performance", "Optimized", "Raw"]
            ]
        }, {
            type: "heading",
            level: 1,
            text: "Hibernate Setup",
            anchor: "setup"
        },
        {
            type: "paragraph",
            text: "Setting up Hibernate 3.6 requires downloading the necessary libraries, configuring the project structure, and creating the configuration files."
        },

        {
            type: "heading",
            level: 2,
            text: "Required JARs",
            anchor: "jars"
        },
        {
            type: "table",
            headers: ["JAR", "Purpose", "Required"],
            rows: [
                ["hibernate3.jar", "Core Hibernate library", "Yes"],
                ["slf4j-api.jar", "Logging facade", "Yes"],
                ["log4j.jar", "Logging implementation", "No (optional)"],
                ["dom4j.jar", "XML parsing", "Yes"],
                ["commons-logging.jar", "Logging bridge", "Yes"],
                ["javassist.jar", "Bytecode manipulation", "Yes"],
                ["mysql-connector-java.jar", "MySQL JDBC driver", "Yes*"],
                ["ojdbc.jar", "Oracle JDBC driver", "Yes*"],
                ["antlr.jar", "HQL parsing", "Yes"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "* Database driver JAR depends on your database (MySQL, Oracle, PostgreSQL, etc.)"
        },

        {
            type: "heading",
            level: 2,
            text: "Project Structure",
            anchor: "project-structure"
        },
        {
            type: "code",
            language: "text",
            code: `project-root/
├── src/
│   ├── main/
│   │   ├── java/            # Java source files
│   │   │   └── com/
│   │   │       └── example/
│   │   │           ├── entities/
│   │   │           └── utils/
│   │   └── resources/       # Configuration files
│   │       ├── hibernate.cfg.xml
│   │       └── com/example/entities/*.hbm.xml
├── lib/                     # All required JARs
└── build/                   # Compiled classes`
        },

        {
            type: "heading",
            level: 2,
            text: "hibernate.cfg.xml Setup",
            anchor: "cfg-setup"
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
    <!-- Database connection settings -->
    <property name="connection.driver_class">com.mysql.jdbc.Driver</property>
    <property name="connection.url">jdbc:mysql://localhost:3306/hibernatedb</property>
    <property name="connection.username">root</property>
    <property name="connection.password">password</property>
    
    <!-- JDBC connection pool size -->
    <property name="connection.pool_size">5</property>
    
    <!-- SQL dialect -->
    <property name="dialect">org.hibernate.dialect.MySQL5Dialect</property>
    
    <!-- Enable Hibernate's automatic session context management -->
    <property name="current_session_context_class">thread</property>
    
    <!-- Echo all executed SQL to stdout -->
    <property name="show_sql">true</property>
    
    <!-- Mapping files -->
    <mapping resource="com/example/entities/Employee.hbm.xml"/>
  </session-factory>
</hibernate-configuration>`
        },

        {
            type: "heading",
            level: 2,
            text: "Basic Hibernate Utility Class",
            anchor: "util-class"
        },
        {
            type: "code",
            language: "java",
            code: `package com.example.utils;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
  private static final SessionFactory sessionFactory;
  
  static {
    try {
      // Create SessionFactory from hibernate.cfg.xml
      sessionFactory = new Configuration().configure().buildSessionFactory();
    } catch (Throwable ex) {
      System.err.println("Initial SessionFactory creation failed." + ex);
      throw new ExceptionInInitializerError(ex);
    }
  }
  
  public static SessionFactory getSessionFactory() {
    return sessionFactory;
  }
}`
        },

        {
            type: "heading",
            level: 2,
            text: "Common Setup Issues",
            anchor: "setup-issues"
        },
        {
            type: "table",
            headers: ["Issue", "Solution"],
            rows: [
                ["ClassNotFoundException", "Verify all required JARs are in classpath"],
                ["MappingException", "Check .hbm.xml file paths and syntax"],
                ["JDBCConnectionException", "Verify database credentials and URL"],
                ["Dialect not set", "Specify correct hibernate.dialect for your database"],
                ["SLF4J warnings", "Add slf4j-simple.jar or log4j.jar for logging"]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Verifying the Setup",
            anchor: "verify-setup"
        },
        {
            type: "code",
            language: "java",
            code: `import org.hibernate.Session;
import org.hibernate.Transaction;
import com.example.utils.HibernateUtil;

public class TestHibernateSetup {
  public static void main(String[] args) {
    try (Session session = HibernateUtil.getSessionFactory().openSession()) {
      Transaction tx = session.beginTransaction();
      // Simple test query
      Long count = (Long) session.createQuery("select count(*) from Employee").uniqueResult();
      System.out.println("Total employees: " + count);
      tx.commit();
    }
  }
}`
        }, {
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
        }, {
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
        }, {
            type: "heading",
            level: 1,
            text: "Persistent Classes (POJOs)",
            anchor: "persistent-classes"
        },
        {
            type: "paragraph",
            text: "In Hibernate, persistent classes (also called entities) are simple Java classes (POJOs – Plain Old Java Objects) that represent database tables. Each instance of a class represents a row in the corresponding table."
        },

        {
            type: "heading",
            level: 2,
            text: "Requirements for Persistent Classes",
            anchor: "requirements"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Default (no-arg) constructor** – Required so Hibernate can instantiate the class using reflection.",
                "**Serializable interface (optional)** – Recommended for distributed applications or when storing entities in sessions.",
                "**Getters and setters** – Hibernate uses property access (getter/setter methods) to read/write data unless configured otherwise."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Example POJO Class",
            anchor: "pojo-example"
        },
        {
            type: "code",
            language: "java",
            code: `package com.example;

import java.io.Serializable;

public class Employee implements Serializable {
  private Long id;
  private String firstName;
  private String lastName;
  private double salary;

  public Employee() {
    // Default constructor required by Hibernate
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public double getSalary() {
    return salary;
  }

  public void setSalary(double salary) {
    this.salary = salary;
  }
}`
        },

        {
            type: "alert",
            variant: "info",
            content: "Hibernate accesses fields using getter/setter methods by default. Avoid adding business logic inside them."
        }, {
            type: "heading",
            level: 1,
            text: "CRUD Operations Using Hibernate",
            anchor: "crud-operations"
        },
        {
            type: "paragraph",
            text: "Hibernate simplifies CRUD (Create, Read, Update, Delete) operations by providing an abstraction over JDBC using the `Session` and `SessionFactory` interfaces. These APIs help interact with the database using persistent objects."
        },

        {
            type: "heading",
            level: 2,
            text: "SessionFactory and Session",
            anchor: "session-and-factory"
        },
        {
            type: "paragraph",
            text: "`SessionFactory` is a heavyweight object created once during application startup. It is used to obtain `Session` instances which are lightweight and non-thread-safe objects for interacting with the database."
        },
        {
            type: "code",
            language: "java",
            code: `SessionFactory factory = new Configuration().configure().buildSessionFactory();
Session session = factory.openSession();`
        },

        {
            type: "heading",
            level: 2,
            text: "Creating Records: save() and persist()",
            anchor: "create-records"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`save(Object entity)` – Returns generated identifier immediately. May insert before flush.",
                "`persist(Object entity)` – Doesn't return ID and guarantees insert happens only during flush/commit."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Transaction tx = session.beginTransaction();
Employee emp = new Employee();
emp.setFirstName("Alice");
emp.setSalary(75000);

session.save(emp);  // or session.persist(emp);
tx.commit();`
        },

        {
            type: "heading",
            level: 2,
            text: "Reading Records: get() vs load()",
            anchor: "read-records"
        },
        {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
                ["get()", "Returns object or null if not found; hits DB immediately"],
                ["load()", "Returns proxy; throws `ObjectNotFoundException` if object doesn't exist"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Employee e1 = session.get(Employee.class, 1L);   // null if not found
Employee e2 = session.load(Employee.class, 2L);  // proxy, may throw exception later`
        },

        {
            type: "heading",
            level: 2,
            text: "Updating Records: update() and merge()",
            anchor: "update-records"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`update(Object)` – Re-attaches a detached object. Use only when sure no duplicate session exists.",
                "`merge(Object)` – Safer; copies state to a managed instance and returns it."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Employee emp = session.get(Employee.class, 1L);
emp.setSalary(90000);

Transaction tx = session.beginTransaction();
session.update(emp);  // or session.merge(emp);
tx.commit();`
        },

        {
            type: "heading",
            level: 2,
            text: "Deleting Records",
            anchor: "delete-records"
        },
        {
            type: "paragraph",
            text: "To delete a record, pass the persistent object to the `delete()` method inside a transaction."
        },
        {
            type: "code",
            language: "java",
            code: `Employee emp = session.get(Employee.class, 1L);

Transaction tx = session.beginTransaction();
session.delete(emp);
tx.commit();`
        },

        {
            type: "heading",
            level: 2,
            text: "Transactions: beginTransaction() and commit()",
            anchor: "transactions"
        },
        {
            type: "paragraph",
            text: "Hibernate recommends enclosing all database operations in transactions, even for read operations. This ensures consistency and proper session flushing."
        },
        {
            type: "code",
            language: "java",
            code: `Session session = factory.openSession();
Transaction tx = session.beginTransaction();

// Perform CRUD operations here

tx.commit();  // or tx.rollback() on error
session.close();`
        }, {
            type: "heading",
            level: 1,
            text: "Object States in Hibernate",
            anchor: "object-states"
        },
        {
            type: "paragraph",
            text: "In Hibernate, objects (entities) transition through different states during their lifecycle. Understanding these states is crucial for managing data persistence and session behavior."
        },

        {
            type: "heading",
            level: 2,
            text: "1. Transient State",
            anchor: "transient"
        },
        {
            type: "paragraph",
            text: "An object is in the **transient** state when it is created using the `new` keyword but is not yet associated with any Hibernate `Session`. It is not tracked or saved in the database."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Does not have a database identity (no row exists)",
                "Hibernate doesn't track or persist changes",
                "Not associated with any session"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Employee emp = new Employee(); // Transient state
emp.setFirstName("Ravi");
emp.setSalary(60000);`
        },

        {
            type: "heading",
            level: 2,
            text: "2. Persistent State",
            anchor: "persistent"
        },
        {
            type: "paragraph",
            text: "An object becomes **persistent** when it is associated with a Hibernate `Session` and has a corresponding row in the database. Any change to this object is automatically tracked and synchronized with the database."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Object is associated with a session",
                "Hibernate automatically detects changes (dirty checking)",
                "Changes are flushed to DB at commit or flush"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Session session = factory.openSession();
Transaction tx = session.beginTransaction();

session.save(emp);  // emp becomes persistent
emp.setSalary(70000);  // Hibernate tracks this change

tx.commit();`
        },

        {
            type: "heading",
            level: 2,
            text: "3. Detached State",
            anchor: "detached"
        },
        {
            type: "paragraph",
            text: "An object is in a **detached** state when it was previously persistent but its session has been closed. It is no longer managed by Hibernate but still contains a valid identifier and state."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Previously persistent but session is now closed",
                "Hibernate no longer tracks it",
                "Can be re-attached using `update()` or merged"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `session.close();  // emp is now detached
emp.setSalary(80000);  // No automatic tracking

// Later...
Session newSession = factory.openSession();
Transaction tx = newSession.beginTransaction();
newSession.update(emp);  // Re-attached to new session
tx.commit();`
        },

        {
            type: "heading",
            level: 2,
            text: "Summary Table",
            anchor: "object-states-summary"
        },
        {
            type: "table",
            headers: ["State", "Description", "Session Association"],
            rows: [
                ["Transient", "New object not in database", "No"],
                ["Persistent", "Tracked object with DB row", "Yes"],
                ["Detached", "Previously persistent, now disconnected", "No"]
            ]
        }, {
            type: "heading",
            level: 1,
            text: "Mapping Associations (Relations) - XML Based",
            anchor: "mapping-associations"
        },
        {
            type: "paragraph",
            text: "Associations in Hibernate define how objects are related to one another. Hibernate supports one-to-one, one-to-many, many-to-one, and many-to-many relationships using XML mapping. Correctly mapping associations is key to maintaining data consistency and optimizing performance."
        },

        {
            type: "heading",
            level: 2,
            text: "One-to-One Association",
            anchor: "one-to-one"
        },
        {
            type: "paragraph",
            text: "A one-to-one relationship maps a single instance of one entity to a single instance of another entity. In XML, it is mapped using the `<one-to-one>` tag."
        },
        {
            type: "code",
            language: "xml",
            code: `<class name="Employee" table="EMPLOYEES">
  <id name="id" column="EMP_ID">
    <generator class="native"/>
  </id>
  <one-to-one name="address" class="Address" cascade="all"/>
</class>`
        },
        {
            type: "paragraph",
            text: "Here, each `Employee` has exactly one `Address`. Hibernate will expect the primary keys to match unless configured otherwise."
        },

        {
            type: "heading",
            level: 2,
            text: "One-to-Many Association",
            anchor: "one-to-many"
        },
        {
            type: "paragraph",
            text: "A one-to-many relationship maps one entity to a collection of related entities. In XML, it is defined using collection tags like `<set>`, `<list>`, `<bag>`, or `<map>` with an inner `<one-to-many>` tag."
        },
        {
            type: "code",
            language: "xml",
            code: `<class name="Department" table="DEPARTMENTS">
  <id name="id" column="DEPT_ID">
    <generator class="native"/>
  </id>
  <set name="employees" cascade="all" inverse="true">
    <key column="DEPT_ID"/>
    <one-to-many class="Employee"/>
  </set>
</class>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<set>` – Avoids duplicates, unordered.",
                "`<list>` – Ordered list using index column.",
                "`<bag>` – Allows duplicates and unordered.",
                "`inverse=\"true\"` – Indicates ownership lies on the other side (prevents redundant SQL).",
                "`cascade=\"all\"` – Propagates operations like save/delete."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Many-to-One Association",
            anchor: "many-to-one"
        },
        {
            type: "paragraph",
            text: "A many-to-one relationship maps multiple entities to one parent entity. It is the most common association and is typically represented using the `<many-to-one>` tag."
        },
        {
            type: "code",
            language: "xml",
            code: `<class name="Employee" table="EMPLOYEES">
  <id name="id" column="EMP_ID">
    <generator class="native"/>
  </id>
  <property name="firstName" column="FIRST_NAME"/>
  <many-to-one name="department" class="Department" column="DEPT_ID" not-null="true"/>
</class>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`column` – Specifies the foreign key column.",
                "`class` – Fully qualified name of the related class.",
                "`not-null` – Ensures the association is required."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Many-to-Many Association",
            anchor: "many-to-many"
        },
        {
            type: "paragraph",
            text: "A many-to-many relationship links multiple entities in both directions using a join table. It is mapped using a `<set>` or `<bag>` combined with `<many-to-many>`."
        },
        {
            type: "code",
            language: "xml",
            code: `<class name="Student" table="STUDENTS">
  <id name="id" column="STUDENT_ID">
    <generator class="native"/>
  </id>
  <set name="courses" table="STUDENT_COURSE" cascade="save-update">
    <key column="STUDENT_ID"/>
    <many-to-many column="COURSE_ID" class="Course"/>
  </set>
</class>

<class name="Course" table="COURSES">
  <id name="id" column="COURSE_ID">
    <generator class="native"/>
  </id>
  <set name="students" table="STUDENT_COURSE" inverse="true">
    <key column="COURSE_ID"/>
    <many-to-many column="STUDENT_ID" class="Student"/>
  </set>
</class>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<set>` – Defines the collection type for the association.",
                "`table` – Specifies the name of the join table.",
                "`<key>` – Foreign key of the owning side.",
                "`<many-to-many>` – Defines the associated entity and its foreign key."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Summary Table",
            anchor: "association-summary"
        },
        {
            type: "table",
            headers: ["Association", "XML Element", "Key Attributes"],
            rows: [
                ["One-to-One", "<one-to-one>", "class, cascade, constrained"],
                ["One-to-Many", "<set>/<list> + <one-to-many>", "cascade, inverse, key"],
                ["Many-to-One", "<many-to-one>", "column, class, not-null"],
                ["Many-to-Many", "<set> + <many-to-many>", "table, key, column"]
            ]
        }, {
            type: "heading",
            level: 1,
            text: "Lazy vs Eager Loading",
            anchor: "lazy-vs-eager"
        },
        {
            type: "paragraph",
            text: "Hibernate provides two fetching strategies for associated entities: **lazy loading** and **eager loading**. These strategies define when the associated data is fetched from the database — either on demand or immediately."
        },

        {
            type: "heading",
            level: 2,
            text: "Lazy Loading",
            anchor: "lazy-loading"
        },
        {
            type: "paragraph",
            text: "In **lazy loading**, Hibernate fetches the associated entity or collection only when it is accessed for the first time. This is the default strategy for collections."
        },
        {
            type: "code",
            language: "xml",
            code: `<set name="employees" cascade="all" inverse="true" lazy="true">
  <key column="DEPT_ID"/>
  <one-to-many class="Employee"/>
</set>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Improves initial performance by avoiding unnecessary data fetching",
                "Returns proxy objects until accessed",
                "Can throw `LazyInitializationException` if accessed outside session"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Eager Loading",
            anchor: "eager-loading"
        },
        {
            type: "paragraph",
            text: "In **eager loading**, Hibernate loads the associated entity or collection at the same time as the parent object — regardless of whether it’s accessed or not."
        },
        {
            type: "code",
            language: "xml",
            code: `<set name="employees" cascade="all" inverse="true" lazy="false">
  <key column="DEPT_ID"/>
  <one-to-many class="Employee"/>
</set>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "All associated records are fetched immediately",
                "Can lead to unnecessary data loading (bad for large datasets)",
                "Useful when you always need the associated data"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Performance Impact",
            anchor: "performance-impact"
        },
        {
            type: "table",
            headers: ["Strategy", "When Data is Fetched", "Performance"],
            rows: [
                ["Lazy Loading", "On first access (on demand)", "Efficient, but may throw errors outside session"],
                ["Eager Loading", "Immediately with parent", "Simple to use but may fetch too much data"]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Always prefer lazy loading unless you're sure the associated data is always needed. Lazy loading helps avoid the N+1 query problem when used properly."
        }, {
            type: "heading",
            level: 1,
            text: "Cascade Types in XML",
            anchor: "cascade-types"
        },
        {
            type: "paragraph",
            text: "Cascade types in Hibernate determine how operations like save, delete, or update applied to a parent entity are propagated to its associated child entities. Cascading simplifies entity management by reducing boilerplate code for child operations."
        },

        {
            type: "heading",
            level: 2,
            text: "Common Cascade Options",
            anchor: "common-cascade-options"
        },
        {
            type: "table",
            headers: ["Cascade Type", "Effect"],
            rows: [
                ["`save-update`", "Saves or updates the child entities when the parent is saved/updated"],
                ["`delete`", "Deletes the child entities when the parent is deleted"],
                ["`all`", "Applies all cascade options (save, update, delete, etc.)"],
                ["`none`", "No cascading (default if not specified)"],
                ["`merge`", "Merges changes of associated detached objects"],
                ["`refresh`", "Refreshes the state of the associated object"],
                ["`persist`", "Persists the associated object when parent is persisted"]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Usage in XML Mapping",
            anchor: "cascade-xml-usage"
        },
        {
            type: "paragraph",
            text: "Cascade options are defined as an attribute in association tags such as `<set>`, `<list>`, `<one-to-one>`, `<many-to-one>`, etc."
        },
        {
            type: "code",
            language: "xml",
            code: `<class name="Department" table="DEPARTMENTS">
  <id name="id" column="DEPT_ID">
    <generator class="native"/>
  </id>

  <set name="employees" cascade="all" inverse="true">
    <key column="DEPT_ID"/>
    <one-to-many class="Employee"/>
  </set>
</class>`
        },
        {
            type: "paragraph",
            text: "In the above example, all operations on a `Department` (save, delete, update) will be cascaded to its `employees` set."
        },

        {
            type: "heading",
            level: 2,
            text: "Best Practices",
            anchor: "cascade-best-practices"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`cascade=\"all\"` is convenient for tightly-coupled relationships (e.g., Department → Employees).",
                "Avoid `cascade=\"delete\"` if child entities are shared or reused elsewhere.",
                "Use `cascade=\"save-update\"` for new and updated objects without triggering deletes."
            ]
        },

        {
            type: "alert",
            variant: "info",
            content: "Cascading saves time but must be used carefully. It should reflect real ownership: changes in parent must genuinely imply changes in child."
        }, {
            type: "heading",
            level: 1,
            text: "Component Mapping (Embeddables)",
            anchor: "component-mapping"
        },
        {
            type: "paragraph",
            text: "In Hibernate, a component (or embeddable) is a value-type object that does not have a separate identity (no primary key). It is stored in the same database table as the owning entity and is mapped using the `<component>` tag in XML configuration."
        },

        {
            type: "heading",
            level: 2,
            text: "When to Use Component Mapping",
            anchor: "when-to-use-component"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "For reusable groups of fields (e.g., address, contact info)",
                "When the object doesn’t need a separate database table",
                "To simplify complex objects within entities"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "XML Mapping with <component> Tag",
            anchor: "component-xml"
        },
        {
            type: "code",
            language: "xml",
            code: `<class name="Employee" table="EMPLOYEES">
  <id name="id" column="EMP_ID">
    <generator class="native"/>
  </id>

  <component name="address" class="com.example.Address">
    <property name="street" column="STREET"/>
    <property name="city" column="CITY"/>
    <property name="zipcode" column="ZIP"/>
  </component>
</class>`
        },
        {
            type: "paragraph",
            text: "In this example, the `Employee` class embeds an `Address` object, and the address fields are stored as columns in the EMPLOYEES table."
        },

        {
            type: "heading",
            level: 2,
            text: "POJO Class for Component",
            anchor: "component-pojo"
        },
        {
            type: "code",
            language: "java",
            code: `public class Address {
  private String street;
  private String city;
  private String zipcode;

  // Getters and setters
}`
        },

        {
            type: "alert",
            variant: "info",
            content: "Component classes must not define their own primary key and should be serializable. They are fully dependent on the owning entity."
        }, {
            type: "heading",
            level: 1,
            text: "Hibernate Query Language (HQL)",
            anchor: "hql"
        },
        {
            type: "paragraph",
            text: "Hibernate Query Language (HQL) is an object-oriented query language similar to SQL, but it works with entity objects and their properties rather than database tables and columns."
        },

        {
            type: "heading",
            level: 2,
            text: "Basic Syntax",
            anchor: "hql-syntax"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`from EntityName` – Fetches all records from an entity",
                "`select` – Chooses specific fields or expressions",
                "`where` – Filters records based on conditions",
                "`join` – Joins related entities using object relationships",
                "`group by` – Groups results for aggregation",
                "`order by` – Sorts the query result"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `// Basic example
Query query = session.createQuery("from Employee");
List<Employee> list = query.list();

// With conditions
Query query = session.createQuery("from Employee where salary > 50000");

// With joins
Query query = session.createQuery(
  "select e from Employee e join e.department d where d.name = 'IT'"
);`
        },

        {
            type: "heading",
            level: 2,
            text: "Using Parameters in HQL",
            anchor: "hql-parameters"
        },
        {
            type: "paragraph",
            text: "HQL supports both **positional** and **named** parameters for setting dynamic values safely (to prevent SQL injection and improve readability)."
        },
        {
            type: "heading",
            level: 3,
            text: "Named Parameters",
            anchor: "named-params"
        },
        {
            type: "code",
            language: "java",
            code: `Query query = session.createQuery(
  "from Employee where salary > :minSal and department.name = :deptName"
);
query.setParameter("minSal", 50000);
query.setParameter("deptName", "Sales");`
        },

        {
            type: "heading",
            level: 3,
            text: "Positional Parameters",
            anchor: "positional-params"
        },
        {
            type: "code",
            language: "java",
            code: `Query query = session.createQuery(
  "from Employee where salary > ?1 and department.name = ?2"
);
query.setParameter(1, 50000);
query.setParameter(2, "Sales");`
        },

        {
            type: "heading",
            level: 2,
            text: "Aggregation and Sorting",
            anchor: "hql-group-order"
        },
        {
            type: "code",
            language: "java",
            code: `// Aggregation with group by
Query query = session.createQuery(
  "select d.name, count(e) from Employee e join e.department d group by d.name"
);

// Ordering results
Query query = session.createQuery("from Employee order by salary desc");`
        },

        {
            type: "alert",
            variant: "info",
            content: "Unlike SQL, HQL uses Java class names and property names, not table or column names."
        }, {
            type: "heading",
            level: 1,
            text: "Named Queries",
            anchor: "named-queries"
        },
        {
            type: "paragraph",
            text: "Named Queries in Hibernate allow you to define reusable HQL or SQL queries by name. They are defined once, typically in XML mapping files, and can be reused throughout the application."
        },

        {
            type: "heading",
            level: 2,
            text: "Declaring Named Queries in XML",
            anchor: "named-query-xml"
        },
        {
            type: "paragraph",
            text: "You can declare HQL-based named queries using the `<query>` tag inside your `.hbm.xml` mapping file."
        },
        {
            type: "code",
            language: "xml",
            code: `<hibernate-mapping>
  <class name="com.example.Employee" table="EMPLOYEES">
    <!-- mappings... -->
  </class>

  <query name="Employee.byDepartment">
    <![CDATA[
      from Employee e where e.department.name = :deptName
    ]]>
  </query>
</hibernate-mapping>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`name` – The unique name to identify the query",
                "Query body is written in HQL and enclosed in `<![CDATA[ ... ]]>` to allow special characters"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Using Named Queries in Java Code",
            anchor: "using-named-query"
        },
        {
            type: "code",
            language: "java",
            code: `Query query = session.getNamedQuery("Employee.byDepartment");
query.setParameter("deptName", "Finance");
List<Employee> employees = query.list();`
        },

        {
            type: "alert",
            variant: "info",
            content: "Named queries improve maintainability and performance, as they can be parsed and validated at startup."
        }, {
            type: "heading",
            level: 1,
            text: "Criteria API (in Hibernate 3.6)",
            anchor: "criteria-api"
        },
        {
            type: "paragraph",
            text: "The Criteria API in Hibernate 3.6 provides a programmatic and type-safe way to build dynamic queries without writing HQL or SQL. It is especially useful for complex, condition-based queries constructed at runtime."
        },

        {
            type: "heading",
            level: 2,
            text: "Creating Criteria Object",
            anchor: "criteria-object"
        },
        {
            type: "code",
            language: "java",
            code: `Session session = sessionFactory.openSession();
Criteria criteria = session.createCriteria(Employee.class);`
        },
        {
            type: "paragraph",
            text: "The `createCriteria()` method initializes a query for a specific entity class."
        },

        {
            type: "heading",
            level: 2,
            text: "Applying Restrictions (WHERE Clause)",
            anchor: "criteria-restrictions"
        },
        {
            type: "code",
            language: "java",
            code: `criteria.add(Restrictions.eq("department", "Sales"));
criteria.add(Restrictions.gt("salary", 40000));`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`eq(property, value)` – Equal to",
                "`gt(property, value)` – Greater than",
                "`lt(property, value)` – Less than",
                "`like(property, pattern)` – SQL LIKE",
                "`between(property, min, max)` – Between values",
                "`or(condition1, condition2)` – Logical OR",
                "`and(condition1, condition2)` – Logical AND"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Projections (SELECT Specific Fields)",
            anchor: "criteria-projections"
        },
        {
            type: "code",
            language: "java",
            code: `criteria.setProjection(Projections.property("firstName"));`
        },
        {
            type: "paragraph",
            text: "Projections allow you to select specific columns rather than fetching the entire object."
        },

        {
            type: "heading",
            level: 2,
            text: "Sorting Results",
            anchor: "criteria-sorting"
        },
        {
            type: "code",
            language: "java",
            code: `criteria.addOrder(Order.asc("salary"));
criteria.addOrder(Order.desc("firstName"));`
        },
        {
            type: "paragraph",
            text: "`Order.asc()` and `Order.desc()` control the result ordering."
        },

        {
            type: "heading",
            level: 2,
            text: "Pagination",
            anchor: "criteria-pagination"
        },
        {
            type: "code",
            language: "java",
            code: `criteria.setFirstResult(0);  // Starting index
criteria.setMaxResults(10);   // Number of records to fetch`
        },
        {
            type: "paragraph",
            text: "Useful for paging large result sets in a UI."
        },

        {
            type: "alert",
            variant: "warning",
            content: "The Criteria API is deprecated in Hibernate 5 and replaced by the JPA Criteria API, but it is fully supported in Hibernate 3.6."
        }, {
            type: "heading",
            level: 1,
            text: "Transactions and ACID",
            anchor: "transactions-acid"
        },
        {
            type: "paragraph",
            text: "In Hibernate, transactions ensure that a set of operations either fully complete or have no effect at all. Hibernate uses the `Transaction` interface to manage transactions and ensures compliance with the ACID properties (Atomicity, Consistency, Isolation, Durability)."
        },

        {
            type: "heading",
            level: 2,
            text: "ACID Properties",
            anchor: "acid-properties"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Atomicity** – All operations within the transaction succeed or none do",
                "**Consistency** – Data remains in a consistent state before and after the transaction",
                "**Isolation** – Transactions do not interfere with each other’s data",
                "**Durability** – Changes persist even in case of system failures"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Using the Transaction Object",
            anchor: "transaction-usage"
        },
        {
            type: "code",
            language: "java",
            code: `Session session = sessionFactory.openSession();
Transaction tx = null;

try {
  tx = session.beginTransaction();

  // Perform operations
  session.save(employee);
  session.update(department);

  tx.commit(); // Commit changes
} catch (Exception e) {
  if (tx != null) tx.rollback(); // Rollback on failure
  e.printStackTrace();
} finally {
  session.close();
}`
        },
        {
            type: "paragraph",
            text: "All database-changing operations (save, update, delete) should be wrapped in a transaction to ensure data integrity."
        },

        {
            type: "heading",
            level: 2,
            text: "Rollback Scenarios",
            anchor: "rollback-scenarios"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "When an exception occurs during database operations",
                "When validation fails before committing",
                "When multiple operations depend on each other and one fails"
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Always handle exceptions and call `tx.rollback()` to prevent partial data changes in case of errors."
        },

        {
            type: "heading",
            level: 2,
            text: "Auto-commit Mode",
            anchor: "auto-commit"
        },
        {
            type: "paragraph",
            text: "Hibernate disables auto-commit by default to allow full control over transactions. Always commit or roll back manually."
        }, {
            type: "heading",
            level: 1,
            text: "Caching in Hibernate",
            anchor: "hibernate-caching"
        },
        {
            type: "paragraph",
            text: "Caching improves Hibernate performance by reducing the number of database queries. Hibernate supports two levels of caching: first-level (Session) cache and second-level (SessionFactory) cache."
        },

        {
            type: "heading",
            level: 2,
            text: "First-Level Cache (Session Cache)",
            anchor: "first-level-cache"
        },
        {
            type: "paragraph",
            text: "The first-level cache is built-in and enabled by default. It is associated with the Hibernate `Session` and stores objects during a session’s lifespan."
        },
        {
            type: "code",
            language: "java",
            code: `Session session = sessionFactory.openSession();
Employee e1 = session.get(Employee.class, 1); // Hits DB
Employee e2 = session.get(Employee.class, 1); // Fetched from cache`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Scoped to a single session",
                "Automatically cleared when session closes",
                "Reduces redundant queries within a session"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Second-Level Cache",
            anchor: "second-level-cache"
        },
        {
            type: "paragraph",
            text: "The second-level cache is optional and sits across multiple sessions. It requires external cache providers like EHCache, OSCache, Infinispan, etc., and must be explicitly configured."
        },
        {
            type: "heading",
            level: 3,
            text: "Enabling Second-Level Cache in XML",
            anchor: "second-level-cache-xml"
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="hibernate.cache.use_second_level_cache">true</property>
<property name="hibernate.cache.region.factory_class">
  org.hibernate.cache.ehcache.EhCacheRegionFactory
</property>
<property name="hibernate.cache.use_query_cache">true</property>`
        },
        {
            type: "paragraph",
            text: "This configuration is placed inside `hibernate.cfg.xml`. You also need a corresponding `ehcache.xml` configuration file."
        },

        {
            type: "heading",
            level: 2,
            text: "Entity-Level Cache Annotation (in XML Mapping)",
            anchor: "entity-cache"
        },
        {
            type: "code",
            language: "xml",
            code: `<class name="com.example.Employee" table="EMPLOYEES">
  <cache usage="read-write"/>
  ...
</class>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`usage=\"read-only\"` – For data that never changes",
                "`usage=\"read-write\"` – Allows safe read and update operations",
                "`usage=\"nonstrict-read-write\"` – Faster but may cause stale reads"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Query Cache (Optional)",
            anchor: "query-cache"
        },
        {
            type: "code",
            language: "java",
            code: `Query query = session.createQuery("from Employee");
query.setCacheable(true);
List<Employee> list = query.list();`
        },
        {
            type: "alert",
            variant: "info",
            content: "Enable query cache separately using `hibernate.cache.use_query_cache` and mark individual queries as cacheable."
        }, {
            type: "heading",
            level: 1,
            text: "Exception Handling in Hibernate",
            anchor: "hibernate-exceptions"
        },
        {
            type: "paragraph",
            text: "Hibernate provides a rich hierarchy of exceptions, most of which extend from the `HibernateException` base class. Proper exception handling is critical to ensure reliable transaction management and debugging."
        },

        {
            type: "heading",
            level: 2,
            text: "HibernateException",
            anchor: "hibernateexception"
        },
        {
            type: "paragraph",
            text: "`HibernateException` is the superclass for all runtime exceptions thrown by Hibernate. It indicates problems in configuration, query execution, session management, etc."
        },
        {
            type: "code",
            language: "java",
            code: `try {
  Session session = sessionFactory.openSession();
  Transaction tx = session.beginTransaction();
  
  // Hibernate operations
  tx.commit();
} catch (HibernateException e) {
  e.printStackTrace(); // Log error
}`
        },

        {
            type: "heading",
            level: 2,
            text: "ConstraintViolationException",
            anchor: "constraint-violation"
        },
        {
            type: "paragraph",
            text: "This exception occurs when a database constraint is violated, such as a duplicate key or not-null constraint. It is a subclass of `JDBCException`."
        },
        {
            type: "code",
            language: "java",
            code: `try {
  session.save(new Employee(null, "John")); // Null ID or constraint violation
} catch (ConstraintViolationException e) {
  System.out.println("Constraint violated: " + e.getConstraintName());
}`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Always validate data before persisting to avoid integrity violations."
        },

        {
            type: "heading",
            level: 2,
            text: "LazyInitializationException",
            anchor: "lazy-init-exception"
        },
        {
            type: "paragraph",
            text: "`LazyInitializationException` occurs when a lazy-loaded entity or collection is accessed outside of the session scope. Hibernate can’t fetch data once the session is closed."
        },
        {
            type: "code",
            language: "java",
            code: `Employee emp = session.get(Employee.class, 1);
session.close();
System.out.println(emp.getDepartment().getName()); // Triggers exception if lazy`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Keep the session open while accessing lazy-loaded fields",
                "Use eager loading carefully when lazy is not an option",
                "Consider using Open Session in View (OSIV) pattern for web apps"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Other Common Exceptions",
            anchor: "other-exceptions"
        },
        {
            type: "table",
            headers: ["Exception", "When it Occurs"],
            rows: [
                ["PropertyValueException", "Null assigned to a not-nullable property"],
                ["NonUniqueObjectException", "Trying to persist an object with same ID already in session"],
                ["QuerySyntaxException", "Invalid HQL syntax"],
                ["JDBCConnectionException", "Database not reachable or connection issues"]
            ]
        }, {
            type: "heading",
            level: 1,
            text: "Testing Hibernate Applications",
            anchor: "hibernate-testing"
        },
        {
            type: "paragraph",
            text: "Testing Hibernate-based applications is essential to ensure correct persistence logic. You can integrate Hibernate with testing frameworks like JUnit and use in-memory databases for fast, isolated tests."
        },

        {
            type: "heading",
            level: 2,
            text: "JUnit Integration with Hibernate",
            anchor: "junit-integration"
        },
        {
            type: "paragraph",
            text: "JUnit tests can be written to verify Hibernate operations such as save, update, delete, and fetch. Sessions and transactions should be manually managed in test cases."
        },
        {
            type: "code",
            language: "java",
            code: `@Test
public void testEmployeeSave() {
  Session session = sessionFactory.openSession();
  Transaction tx = session.beginTransaction();

  Employee emp = new Employee();
  emp.setFirstName("John");
  emp.setLastName("Doe");

  session.save(emp);
  tx.commit();
  session.close();

  assertNotNull(emp.getId());
}`
        },
        {
            type: "alert",
            variant: "info",
            content: "Wrap each test in a transaction and roll back if the test doesn't require permanent changes."
        },

        {
            type: "heading",
            level: 2,
            text: "Using In-Memory Databases (H2, HSQLDB)",
            anchor: "in-memory-db"
        },
        {
            type: "paragraph",
            text: "In-memory databases like H2 or HSQLDB are ideal for unit testing because they are lightweight, fast, and do not persist data between test runs."
        },
        {
            type: "code",
            language: "xml",
            code: `<property name="connection.driver_class">org.h2.Driver</property>
<property name="connection.url">jdbc:h2:mem:testdb</property>
<property name="connection.username">sa</property>
<property name="connection.password"></property>
<property name="dialect">org.hibernate.dialect.H2Dialect</property>
<property name="hibernate.hbm2ddl.auto">create</property>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`hibernate.hbm2ddl.auto=create` ensures schema is recreated for each test run",
                "No need for external setup or database installation",
                "Perfect for CI/CD environments and quick feedback"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Best Practices for Hibernate Testing",
            anchor: "testing-best-practices"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Use in-memory DBs for unit tests, real DBs for integration tests",
                "Mock dependencies that are not related to persistence",
                "Reset or recreate schema between test runs",
                "Test both success and failure (e.g., constraint violation, rollback)"
            ]
        }, {
            type: "heading",
            level: 1,
            text: "Exporting Schema in Hibernate",
            anchor: "exporting-schema"
        },
        {
            type: "paragraph",
            text: "Hibernate provides automatic schema generation based on your mapping configuration through the `hibernate.hbm2ddl.auto` property. This helps manage database schema creation and updates during development or testing."
        },

        {
            type: "heading",
            level: 2,
            text: "hibernate.hbm2ddl.auto Values",
            anchor: "hbm2ddl-values"
        },
        {
            type: "table",
            headers: ["Value", "Description"],
            rows: [
                ["`create`", "Drops and recreates the database schema every time the application starts"],
                ["`update`", "Updates the existing schema to match mappings without dropping data"],
                ["`validate`", "Validates the schema; throws an error if mismatched"],
                ["`create-drop`", "Creates schema on startup and drops it on shutdown (for testing)"],
                ["`none`", "Disables automatic schema generation (default in production)"]
            ]
        },

        {
            type: "code",
            language: "xml",
            code: `<property name="hibernate.hbm2ddl.auto">update</property>`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Avoid using `create` or `create-drop` in production environments, as they can result in data loss."
        },

        {
            type: "heading",
            level: 2,
            text: "Use Cases",
            anchor: "hbm2ddl-use-cases"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`create` – During initial development",
                "`update` – When evolving schema with existing data (use carefully)",
                "`validate` – In staging or production to ensure mappings match the schema",
                "`create-drop` – Ideal for integration tests with in-memory databases"
            ]
        }, {
            type: "heading",
            level: 1,
            text: "Best Practices",
            anchor: "hibernate-best-practices"
        },
        {
            type: "paragraph",
            text: "Following best practices when working with Hibernate helps improve performance, maintainability, and data consistency. Below are key guidelines developers should follow:"
        },

        {
            type: "list",
            style: "unordered",
            items: [
                "**Implement Serializable for all entities** – While optional, it ensures entities can be safely cached, transferred, or persisted in distributed systems.",
                "**Keep mapping files and domain classes in sync** – Always update `.hbm.xml` when you change a field or relationship in your Java class.",
                "**Avoid unnecessary eager loading** – Use `lazy=\"true\"` unless you truly need related entities immediately. Eager loading can cause performance issues and memory overhead.",
                "**Use transactions properly** – Always wrap save, update, or delete operations in transactions and ensure rollback on exceptions.",
                "**Optimize HQL and SQL queries** – Avoid fetching unneeded columns or relationships. Use pagination and indexing where necessary.",
                "**Use batch processing for bulk operations** – To reduce memory consumption and improve performance when dealing with large datasets.",
                "**Enable second-level caching thoughtfully** – Use appropriate cache strategies like `read-only` or `read-write` based on the mutability of data.",
                "**Log SQL during development only** – Use `hibernate.show_sql=true` during dev/test, but disable it in production for performance."
            ]
        },

        {
            type: "alert",
            variant: "info",
            content: "Clean ORM design leads to easier debugging, better database performance, and scalable applications."
        }
    ],
    summary: {
        keyPoints: [
            "Hibernate maps Java objects to relational tables",
            "Provides abstraction over JDBC",
            "Includes features like caching and HQL",
            "Uses SessionFactory and Session for operations"
        ]
    },
    nextSteps: [
        {
            topicId: "hibernate-setup",
            reason: "Learn how to set up Hibernate in your project"
        },
        {
            topicId: "hibernate-mapping",
            reason: "Understand XML mapping configurations"
        }
    ]
}