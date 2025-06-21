export default {
  meta: {
    title: "Hibernate Setup",
    description: "How to set up Hibernate 3.6 with XML configuration",
    category: "persistence",
    subcategory: "java",
    difficulty: "beginner",
    duration: 25,
    keywords: ["setup", "configuration", "jars", "installation"]
  },
  content: [
    {
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
      "Hibernate requires several core JARs plus database-specific driver",
      "hibernate.cfg.xml is the main configuration file",
      "SessionFactory should be created once during application startup",
      "Proper project structure separates source, config and libraries",
      "Always verify setup with a simple test program"
    ],
    cheatSheet: {
      essentialJars: "hibernate3.jar, slf4j-api.jar, dom4j.jar, javassist.jar, database-driver.jar",
      cfgProperties: `
connection.driver_class
connection.url
dialect
show_sql
hbm2ddl.auto`
    }
  },
  nextSteps: [
    {
      topicId: "hibernate-mapping",
      reason: "Learn how to create entity mapping files"
    },
    {
      topicId: "hibernate-basic-operations",
      reason: "Understand CRUD operations with Hibernate"
    }
  ]
}