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