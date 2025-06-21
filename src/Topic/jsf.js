export default {
    meta: {
        title: "JSF: Introduction & Background (XML-Based)",
        description: "Learn the fundamentals of JavaServer Faces with a strict focus on XML-based configuration, MVC architecture, lifecycle phases, and Facelets.",
        category: "web-development",
        subcategory: "java",
        difficulty: "intermediate",
        duration: 20,
        keywords: ["jsf", "java server faces", "mvc", "facelets", "java ee", "xml configuration"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to JSF (JavaServer Faces)",
            anchor: "jsf-intro"
        },
        {
            type: "paragraph",
            text: "JavaServer Faces (JSF) is a server-side web framework for building Java web applications using reusable UI components. JSF follows the Model-View-Controller (MVC) pattern and is a standard part of the Java EE platform."
        },

        {
            type: "heading",
            level: 2,
            text: "What is JSF?",
            anchor: "what-is-jsf"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "JSF is a component-based UI framework for Java web applications.",
                "Runs on top of the Servlet API.",
                "Allows configuration using `faces-config.xml` (this module uses XML only)."
            ]
        }, {
            type: "heading",
            level: 1,
            text: "JSF Maven Dependencies",
            anchor: "jsf-maven-dependencies"
        },
        {
            type: "paragraph",
            text: "To set up a JSF 2.x project using Maven, you need to include the required JSF and JSTL dependencies in your `pom.xml` file. Below are the standard dependencies for JSF API, implementation, and JSTL support."
        },
        {
            type: "code",
            language: "xml",
            code: `<!-- JSF API -->
<dependency>
  <groupId>com.sun.faces</groupId>
  <artifactId>jsf-api</artifactId>
  <version>2.2.20</version>
</dependency>

<!-- JSF Implementation -->
<dependency>
  <groupId>com.sun.faces</groupId>
  <artifactId>jsf-impl</artifactId>
  <version>2.2.14</version>
</dependency>

<!-- JSTL (JavaServer Pages Standard Tag Library) -->
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>jstl</artifactId>
  <version>1.2</version>
</dependency>`
        },

        {
            type: "heading",
            level: 2,
            text: "Component-Based MVC vs JSP/Servlet",
            anchor: "component-vs-jsp"
        },
        {
            type: "table",
            headers: ["JSF (Component-Based MVC)", "JSP/Servlet (Traditional MVC)"],
            rows: [
                ["Uses UI components and event-driven model", "Uses request-response model with scriptlets or tags"],
                ["Manages full request lifecycle", "Developers manually control flow"],
                ["Separation of UI logic and navigation rules via XML", "Hardcoded navigation and UI logic"],
                ["Supports templating via Facelets", "Limited template support"]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "JSF 2 Lifecycle (6 Phases)",
            anchor: "jsf-lifecycle"
        },
        {
            type: "list",
            style: "ordered",
            items: [
                "Restore View – Initializes or restores the component tree.",
                "Apply Request Values – Populates values from form fields.",
                "Process Validations – Validates input based on rules.",
                "Update Model Values – Updates backing bean properties.",
                "Invoke Application – Executes application logic (like actions).",
                "Render Response – Renders the UI to the client."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "XML-Based Configuration Only",
            anchor: "xml-config-only"
        },
        {
            type: "paragraph",
            text: "JSF applications can be configured entirely using `faces-config.xml`, which defines managed beans, navigation rules, converters, validators, and more. This guide strictly avoids annotations."
        },

        {
            type: "code",
            language: "xml",
            code: `<managed-bean>
  <managed-bean-name>userBean</managed-bean-name>
  <managed-bean-class>com.example.UserBean</managed-bean-class>
  <managed-bean-scope>session</managed-bean-scope>
</managed-bean>`
        },

        {
            type: "heading",
            level: 2,
            text: "Benefits of Facelets over JSP",
            anchor: "facelets-vs-jsp"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Facelets is the default view handler in JSF 2.x and replaces JSP.",
                "Supports templating, reusable layouts, and composite components.",
                "Processes XHTML files directly (cleaner markup).",
                "Allows expression language (EL), JSTL, and JSF tag libraries."
            ]
        }, {
            type: "heading",
            level: 1,
            text: "JSF Project Setup (XML-Based)",
            anchor: "jsf-setup"
        },
        {
            type: "paragraph",
            text: "To create a JSF 2 project using XML-based configuration, you need specific libraries, proper folder structure, and a correctly configured `web.xml` file to map JSF requests."
        },

        {
            type: "heading",
            level: 2,
            text: "Required Libraries (JARs)",
            anchor: "required-libs"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**mojarra-*.jar** – JSF Reference Implementation (RI)",
                "**jsf-api-*.jar** – JSF API definitions",
                "**jsf-impl-*.jar** – JSF core implementation",
                "**el-api.jar** and **el-impl.jar** – Expression Language support (optional if not included in container)"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "`web.xml` Configuration",
            anchor: "web-xml"
        },
        {
            type: "paragraph",
            text: "The `web.xml` file is used to register the JSF `FacesServlet`, define URL mappings, and configure welcome files."
        },
        {
            type: "code",
            language: "xml",
            code: `<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                             http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
  
  <!-- FacesServlet Registration -->
  <servlet>
    <servlet-name>Faces Servlet</servlet-name>
    <servlet-class>javax.faces.webapp.FacesServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
  </servlet>

  <servlet-mapping>
    <servlet-name>Faces Servlet</servlet-name>
    <url-pattern>*.xhtml</url-pattern>
  </servlet-mapping>

  <!-- Welcome File -->
  <welcome-file-list>
    <welcome-file>index.xhtml</welcome-file>
  </welcome-file-list>
</web-app>`
        },

        {
            type: "heading",
            level: 2,
            text: "Folder Structure",
            anchor: "folder-structure"
        },
        {
            type: "code",
            language: "text",
            code: `YourProject/
├── WebContent/
│   ├── index.xhtml
│   ├── pages/
│   │   └── home.xhtml
│   └── WEB-INF/
│       ├── web.xml
│       └── faces-config.xml
├── src/
│   └── com/example/
│       └── UserBean.java
├── lib/
│   ├── mojarra-2.x.jar
│   ├── jsf-api.jar
│   ├── jsf-impl.jar
│   └── el-api.jar`
        },

        {
            type: "heading",
            level: 2,
            text: "`faces-config.xml` File",
            anchor: "faces-config"
        },
        {
            type: "paragraph",
            text: "Used for declaring managed beans, navigation rules, converters, and other JSF components using XML."
        },
        {
            type: "code",
            language: "xml",
            code: `<?xml version="1.0" encoding="UTF-8"?>
<faces-config xmlns="http://xmlns.jcp.org/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
              http://xmlns.jcp.org/xml/ns/javaee/web-facesconfig_2_2.xsd"
              version="2.2">

  <!-- Example managed bean -->
  <managed-bean>
    <managed-bean-name>userBean</managed-bean-name>
    <managed-bean-class>com.example.UserBean</managed-bean-class>
    <managed-bean-scope>session</managed-bean-scope>
  </managed-bean>
</faces-config>`
        }, {
            type: "heading",
            level: 1,
            text: "faces-config.xml Configuration",
            anchor: "faces-config"
        },
        {
            type: "paragraph",
            text: "`faces-config.xml` is the central configuration file for JSF applications when using XML-based setup. It defines beans, navigation rules, converters, validators, and more."
        },

        {
            type: "heading",
            level: 2,
            text: "<faces-config> Root Element",
            anchor: "faces-config-root"
        },
        {
            type: "paragraph",
            text: "The root `<faces-config>` tag defines the JSF version and associated XML namespaces. Always include the correct schema for your JSF version (e.g., 2.2)."
        },
        {
            type: "code",
            language: "xml",
            code: `<?xml version="1.0" encoding="UTF-8"?>
<faces-config xmlns="http://xmlns.jcp.org/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
              http://xmlns.jcp.org/xml/ns/javaee/web-facesconfig_2_2.xsd"
              version="2.2">`
        },

        {
            type: "heading",
            level: 2,
            text: "<managed-bean> – Defining Beans",
            anchor: "managed-bean"
        },
        {
            type: "paragraph",
            text: "Used to declare managed beans and their scopes in XML. Beans must have a public no-arg constructor and should be declared with a unique name."
        },
        {
            type: "code",
            language: "xml",
            code: `<managed-bean>
  <managed-bean-name>userBean</managed-bean-name>
  <managed-bean-class>com.example.UserBean</managed-bean-class>
  <managed-bean-scope>session</managed-bean-scope>
</managed-bean>`
        },

        {
            type: "heading",
            level: 2,
            text: "<navigation-rule> & <navigation-case>",
            anchor: "navigation-rule"
        },
        {
            type: "paragraph",
            text: "Defines navigation flow between views. Useful for XML-based flow control without hardcoding outcomes in pages."
        },
        {
            type: "code",
            language: "xml",
            code: `<navigation-rule>
  <from-view-id>/login.xhtml</from-view-id>
  <navigation-case>
    <from-outcome>success</from-outcome>
    <to-view-id>/home.xhtml</to-view-id>
  </navigation-case>
</navigation-rule>`
        },

        {
            type: "heading",
            level: 2,
            text: "<converter> – Custom Converters",
            anchor: "converter"
        },
        {
            type: "paragraph",
            text: "Registers a custom converter class with a specific converter ID. This ID is referenced in your XHTML using `converterId`."
        },
        {
            type: "code",
            language: "xml",
            code: `<converter>
  <converter-id>dateConverter</converter-id>
  <converter-class>com.example.DateConverter</converter-class>
</converter>`
        },

        {
            type: "heading",
            level: 2,
            text: "<validator> – Custom Validators",
            anchor: "validator"
        },
        {
            type: "paragraph",
            text: "Registers a custom validator by ID. Used in Facelets with `validatorId`."
        },
        {
            type: "code",
            language: "xml",
            code: `<validator>
  <validator-id>emailValidator</validator-id>
  <validator-class>com.example.EmailValidator</validator-class>
</validator>`
        },

        {
            type: "heading",
            level: 2,
            text: "<application> – Global Application Settings",
            anchor: "application"
        },
        {
            type: "paragraph",
            text: "Used to define resource bundles, default render kits, and view handlers for the application."
        },
        {
            type: "code",
            language: "xml",
            code: `<application>
  <resource-bundle>
    <base-name>com.example.messages</base-name>
    <var>msg</var>
  </resource-bundle>
</application>`
        },

        {
            type: "heading",
            level: 2,
            text: "<lifecycle> – Phase Listeners",
            anchor: "lifecycle"
        },
        {
            type: "paragraph",
            text: "Declares custom lifecycle phase listeners that hook into the JSF lifecycle."
        },
        {
            type: "code",
            language: "xml",
            code: `<lifecycle>
  <phase-listener>com.example.CustomPhaseListener</phase-listener>
</lifecycle>`
        },

        {
            type: "heading",
            level: 2,
            text: "<factory> – Custom Factories",
            anchor: "factory"
        },
        {
            type: "paragraph",
            text: "Overrides default factory implementations for FacesContext, Application, RenderKit, etc."
        },
        {
            type: "code",
            language: "xml",
            code: `<factory>
  <faces-context-factory>com.example.MyFacesContextFactory</faces-context-factory>
</factory>`
        },

        {
            type: "heading",
            level: 2,
            text: "<referenced-bean> – External Beans",
            anchor: "referenced-bean"
        },
        {
            type: "paragraph",
            text: "Declares non-managed beans (like utility classes) so they can be accessed via EL in JSF views."
        },
        {
            type: "code",
            language: "xml",
            code: `<referenced-bean>
  <referenced-bean-name>utils</referenced-bean-name>
  <referenced-bean-class>com.example.Utils</referenced-bean-class>
</referenced-bean>`
        }, {
            type: "heading",
            level: 1,
            text: "Managed Beans in JSF (XML-Based Configuration)",
            anchor: "managed-beans"
        },
        {
            type: "paragraph",
            text: "Managed Beans are Java classes that handle business logic and are linked to JSF UI components. In XML-based configuration, all beans are declared inside `faces-config.xml` using the `<managed-bean>` element."
        },

        {
            type: "heading",
            level: 2,
            text: "<managed-bean-name>",
            anchor: "bean-name"
        },
        {
            type: "paragraph",
            text: "Defines the name by which the bean is accessed in the JSF view using EL (e.g., `#{userBean}`). It must be unique within the application scope."
        },
        {
            type: "code",
            language: "xml",
            code: `<managed-bean>
  <managed-bean-name>userBean</managed-bean-name>
  ...
</managed-bean>`
        },

        {
            type: "heading",
            level: 2,
            text: "<managed-bean-class>",
            anchor: "bean-class"
        },
        {
            type: "paragraph",
            text: "Specifies the fully qualified Java class name of the managed bean. The class must have a public no-argument constructor."
        },
        {
            type: "code",
            language: "xml",
            code: `<managed-bean>
  ...
  <managed-bean-class>com.example.UserBean</managed-bean-class>
  ...
</managed-bean>`
        },

        {
            type: "heading",
            level: 2,
            text: "<managed-bean-scope>",
            anchor: "bean-scope"
        },
        {
            type: "paragraph",
            text: "Defines the bean's lifecycle and visibility. Available scopes include:"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`request` – Bean lives for a single HTTP request.",
                "`session` – Lives across multiple requests within the same user session.",
                "`application` – Shared across all users.",
                "`view` – Lives as long as the user is interacting with the same JSF view (Facelets only)."
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<managed-bean>
  ...
  <managed-bean-scope>session</managed-bean-scope>
</managed-bean>`
        },

        {
            type: "heading",
            level: 2,
            text: "<managed-property> – Dependency Injection",
            anchor: "managed-property"
        },
        {
            type: "paragraph",
            text: "Used to inject another managed bean or literal value into a bean property. The bean being injected must also be defined in `faces-config.xml`."
        },
        {
            type: "code",
            language: "xml",
            code: `<managed-bean>
  <managed-bean-name>orderBean</managed-bean-name>
  <managed-bean-class>com.example.OrderBean</managed-bean-class>
  <managed-bean-scope>request</managed-bean-scope>
  
  <managed-property>
    <property-name>userBean</property-name>
    <value>#{userBean}</value>
  </managed-property>
</managed-bean>`
        }, {
            type: "heading",
            level: 1,
            text: "Navigation Rules (XML-Based)",
            anchor: "navigation-rules"
        },
        {
            type: "paragraph",
            text: "In JSF, navigation between pages can be controlled using navigation rules defined in `faces-config.xml`. These rules map outcomes (typically from action methods or buttons) to specific views/pages."
        },

        {
            type: "heading",
            level: 2,
            text: "<navigation-rule> Block",
            anchor: "navigation-rule-block"
        },
        {
            type: "paragraph",
            text: "Each navigation rule typically applies to a single source view and defines one or more outcomes that determine the destination view."
        },
        {
            type: "code",
            language: "xml",
            code: `<navigation-rule>
  <from-view-id>/login.xhtml</from-view-id>
  <navigation-case>
    <from-outcome>success</from-outcome>
    <to-view-id>/home.xhtml</to-view-id>
  </navigation-case>
</navigation-rule>`
        },

        {
            type: "heading",
            level: 2,
            text: "<from-view-id>",
            anchor: "from-view-id"
        },
        {
            type: "paragraph",
            text: "Specifies the source page (view) from which the navigation originates. The value is the path to the XHTML page (e.g., `/login.xhtml`)."
        },

        {
            type: "heading",
            level: 2,
            text: "<from-outcome>",
            anchor: "from-outcome"
        },
        {
            type: "paragraph",
            text: "Defines the outcome string returned by an action method or button. When this value matches, the navigation rule is applied."
        },

        {
            type: "heading",
            level: 2,
            text: "<to-view-id>",
            anchor: "to-view-id"
        },
        {
            type: "paragraph",
            text: "Specifies the target page (view) to be displayed when the rule is triggered."
        },

        {
            type: "heading",
            level: 2,
            text: "<redirect/> (Optional)",
            anchor: "redirect"
        },
        {
            type: "paragraph",
            text: "When included, it tells JSF to use client-side redirection (i.e., browser URL changes), instead of the default server-side forward."
        },
        {
            type: "code",
            language: "xml",
            code: `<navigation-case>
  <from-outcome>logout</from-outcome>
  <to-view-id>/login.xhtml</to-view-id>
  <redirect/>
</navigation-case>`
        }, {
            type: "heading",
            level: 1,
            text: "Facelets in JSF 2",
            anchor: "facelets"
        },
        {
            type: "paragraph",
            text: "Facelets is the default view handler technology in JSF 2.x. It replaces JSP and provides powerful templating and component composition features using XHTML and XML namespaces."
        },

        {
            type: "heading",
            level: 2,
            text: "Templating with Facelets",
            anchor: "templating"
        },
        {
            type: "paragraph",
            text: "Facelets uses special XML tags (`ui:*`) for defining layouts and templates. It promotes code reuse and separation of layout from logic."
        },
        {
            type: "code",
            language: "xml",
            code: `<!-- layout.xhtml -->
<ui:composition template="/templates/base.xhtml"
    xmlns:ui="http://java.sun.com/jsf/facelets"
    xmlns:h="http://xmlns.jcp.org/jsf/html">

  <ui:define name="content">
    <h:outputText value="Welcome to JSF!" />
  </ui:define>

</ui:composition>`
        },
        {
            type: "paragraph",
            text: "Templates are defined using `<ui:composition>` and `<ui:define>`. Placeholder regions are marked using `<ui:insert>` in the template file."
        },
        {
            type: "code",
            language: "xml",
            code: `<!-- base.xhtml -->
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:ui="http://java.sun.com/jsf/facelets"
      xmlns:h="http://xmlns.jcp.org/jsf/html">
  <body>
    <header>My Site</header>
    <ui:insert name="content" />
    <footer>© 2025</footer>
  </body>
</html>`
        },

        {
            type: "heading",
            level: 2,
            text: "<ui:include> – Reusable Components",
            anchor: "ui-include"
        },
        {
            type: "paragraph",
            text: "Used to include other XHTML components or fragments inside a page."
        },
        {
            type: "code",
            language: "xml",
            code: `<ui:include src="/components/header.xhtml" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Common View Tags (h:, f:, ui:)",
            anchor: "view-tags"
        },
        {
            type: "paragraph",
            text: "JSF provides several namespaces to define UI components:"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`h:` – HTML form and UI elements",
                "`f:` – Core functionality like AJAX, validators, converters",
                "`ui:` – Facelets templating support"
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Forms & Input Components",
            anchor: "form-input"
        },
        {
            type: "code",
            language: "xml",
            code: `<h:form>
  <h:outputLabel for="username" value="Username:" />
  <h:inputText id="username" value="#{loginBean.username}" />

  <h:outputLabel for="password" value="Password:" />
  <h:inputSecret id="password" value="#{loginBean.password}" />

  <h:commandButton value="Login" action="#{loginBean.login}" />
</h:form>`
        },

        {
            type: "heading",
            level: 2,
            text: "Output Components",
            anchor: "output"
        },
        {
            type: "code",
            language: "xml",
            code: `<h:outputText value="Hello, #{userBean.name}!" />
<h:outputLabel for="email" value="Email:" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Buttons and Links",
            anchor: "buttons-links"
        },
        {
            type: "code",
            language: "xml",
            code: `<h:commandButton value="Submit" action="#{bean.submit}" />
<h:commandLink value="Edit" action="#{bean.edit}" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Selects and Checkboxes",
            anchor: "lists"
        },
        {
            type: "code",
            language: "xml",
            code: `<h:selectOneMenu value="#{userBean.country}">
  <f:selectItem itemValue="IN" itemLabel="India" />
  <f:selectItem itemValue="US" itemLabel="USA" />
</h:selectOneMenu>

<h:selectBooleanCheckbox value="#{userBean.agree}" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Messages",
            anchor: "messages"
        },
        {
            type: "code",
            language: "xml",
            code: `<h:message for="username" />
<h:messages globalOnly="true" />`
        },

        {
            type: "heading",
            level: 2,
            text: "AJAX Support with <f:ajax>",
            anchor: "ajax"
        },
        {
            type: "paragraph",
            text: "JSF supports partial page updates using `<f:ajax>`."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:inputText value="#{userBean.name}">
  <f:ajax render="greeting" />
</h:inputText>

<h:outputText id="greeting" value="Hello, #{userBean.name}" />`
        }, {
            type: "heading",
            level: 1,
            text: "JSTL in JSF (Core, Formatting, and Functions)",
            anchor: "jstl-jsf"
        },
        {
            type: "paragraph",
            text: "JSF fully supports JSTL (JavaServer Pages Standard Tag Library) in Facelets views. JSTL allows for flow control, internationalization, formatting, and string functions within XHTML files. To use JSTL, the relevant XML namespaces must be declared in your view files."
        },

        {
            type: "heading",
            level: 2,
            text: "a. Core JSTL Tags",
            anchor: "core-jstl"
        },
        {
            type: "paragraph",
            text: "Namespace: `xmlns:c=\"http://java.sun.com/jsp/jstl/core\"`"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<c:if>` – Conditionally render content based on EL expressions.",
                "`<c:choose>`, `<c:when>`, `<c:otherwise>` – Implement switch-case style logic.",
                "`<c:forEach>` – Iterate over collections or arrays.",
                "`<c:set>` – Define or overwrite scoped variables.",
                "`<c:remove>` – Remove scoped variables.",
                "`<c:catch>` – Catch and handle exceptions without breaking the page."
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<c:if test="#{userBean.loggedIn}">
  <h:outputText value="Welcome, #{userBean.name}" />
</c:if>

<c:forEach items="#{productBean.products}" var="product">
  <h:outputText value="#{product.name}" /><br/>
</c:forEach>`
        },

        {
            type: "heading",
            level: 2,
            text: "b. Formatting JSTL Tags",
            anchor: "fmt-jstl"
        },
        {
            type: "paragraph",
            text: "Namespace: `xmlns:fmt=\"http://java.sun.com/jsp/jstl/fmt\"`"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<fmt:formatNumber>` – Format numbers as currency, percentage, or decimal.",
                "`<fmt:parseNumber>` – Convert string to numeric format.",
                "`<fmt:formatDate>` – Format dates based on pattern or locale.",
                "`<fmt:parseDate>` – Parse strings into dates.",
                "`<fmt:bundle>` – Load resource bundles.",
                "`<fmt:message>` – Display localized messages from bundles."
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<fmt:formatNumber value="#{order.total}" type="currency" />
<fmt:formatDate value="#{order.date}" pattern="dd-MM-yyyy" />

<fmt:bundle basename="messages">
  <fmt:message key="welcome.message" />
</fmt:bundle>`
        },

        {
            type: "heading",
            level: 2,
            text: "c. JSTL Functions",
            anchor: "fn-jstl"
        },
        {
            type: "paragraph",
            text: "Namespace: `xmlns:fn=\"http://java.sun.com/jsp/jstl/functions\"`"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`fn:length()` – Returns the length of a string or collection.",
                "`fn:contains()` – Checks if a string contains a substring.",
                "`fn:startsWith()` / `fn:endsWith()` – String prefix/suffix check.",
                "`fn:toUpperCase()` / `fn:toLowerCase()` – String case manipulation.",
                "`fn:trim()` – Trims whitespace from both ends."
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<c:if test="#{fn:contains(userBean.email, '@gmail.com')}">
  <h:outputText value="Using Gmail" />
</c:if>

<h:outputText value="Total items: #{fn:length(cartBean.items)}" />`
        }, {
            type: "heading",
            level: 1,
            text: "Expression Language (EL) in JSF",
            anchor: "el-jsf"
        },
        {
            type: "paragraph",
            text: "Expression Language (EL) is used in JSF to bind UI components to backend data and methods. EL provides a clean, concise syntax for accessing JavaBeans, invoking methods, and referencing implicit objects."
        },

        {
            type: "heading",
            level: 2,
            text: "Value Binding: `#{bean.property}`",
            anchor: "el-value-binding"
        },
        {
            type: "paragraph",
            text: "Used to read and write values between UI components and managed bean properties."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:inputText value="#{userBean.username}" />
<h:outputText value="Hello, #{userBean.username}" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Method Binding: `#{bean.method}`",
            anchor: "el-method-binding"
        },
        {
            type: "paragraph",
            text: "Invokes methods from managed beans, commonly used in command buttons or links."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:commandButton value="Login" action="#{userBean.login}" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Implicit Objects in EL",
            anchor: "el-implicit-objects"
        },
        {
            type: "paragraph",
            text: "EL provides several built-in implicit objects to access request, session, and application-level data."
        },
        {
            type: "table",
            headers: ["Object", "Description"],
            rows: [
                ["`param`", "Map of request parameters (`param['username']`)"],
                ["`paramValues`", "Map of request parameter arrays"],
                ["`header`", "Request header values"],
                ["`cookie`", "Request cookies"],
                ["`initParam`", "Context initialization parameters"],
                ["`requestScope`", "Variables stored in request scope"],
                ["`sessionScope`", "Variables stored in session scope"],
                ["`applicationScope`", "Application-wide scoped variables"],
                ["`facesContext`", "Current FacesContext instance"]
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<h:outputText value="Username: #{param.username}" />
<h:outputText value="Language: #{header['Accept-Language']}" />
<h:outputText value="Session User: #{sessionScope.userBean.username}" />`
        }, {
            type: "heading",
            level: 1,
            text: "Converters and Validators (XML Configuration)",
            anchor: "jsf-converters-validators"
        },
        {
            type: "paragraph",
            text: "In JSF, Converters and Validators can be registered in `faces-config.xml` and used declaratively in Facelets using `<f:converter>` and `<f:validator>` tags. This enables type conversion and validation logic for form inputs without using annotations."
        },

        {
            type: "heading",
            level: 2,
            text: "Registering a Converter",
            anchor: "register-converter"
        },
        {
            type: "paragraph",
            text: "Converters are used to convert between UI component values (usually strings) and model object types. Custom converters must implement `javax.faces.convert.Converter` and be registered in `faces-config.xml` using the `<converter>` element."
        },
        {
            type: "code",
            language: "xml",
            code: `<converter>
  <converter-id>customConverter</converter-id>
  <converter-class>com.example.converter.MyCustomConverter</converter-class>
</converter>`
        },

        {
            type: "heading",
            level: 2,
            text: "Registering a Validator",
            anchor: "register-validator"
        },
        {
            type: "paragraph",
            text: "Validators are used to enforce rules on user input. Custom validators must implement `javax.faces.validator.Validator` and be declared using `<validator>` in `faces-config.xml`."
        },
        {
            type: "code",
            language: "xml",
            code: `<validator>
  <validator-id>customValidator</validator-id>
  <validator-class>com.example.validator.MyCustomValidator</validator-class>
</validator>`
        },

        {
            type: "heading",
            level: 2,
            text: "Using Converters and Validators in Views",
            anchor: "use-in-views"
        },
        {
            type: "paragraph",
            text: "Once registered, you can use converters and validators directly in XHTML pages with the `converterId` or `validatorId` attributes."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:inputText value="#{bean.date}">
  <f:converter converterId="customConverter" />
</h:inputText>

<h:inputText value="#{bean.email}">
  <f:validator validatorId="customValidator" />
</h:inputText>`
        }, {
            type: "heading",
            level: 1,
            text: "Events and Action Handling in JSF",
            anchor: "jsf-events-actions"
        },
        {
            type: "paragraph",
            text: "JSF provides a declarative way to handle user actions such as button clicks and UI events. Using EL, developers can bind component actions to managed bean methods. In XML-configured JSF applications, all backing beans must be registered in `faces-config.xml`."
        },

        {
            type: "heading",
            level: 2,
            text: "Using `action` for Navigation or Logic",
            anchor: "jsf-action"
        },
        {
            type: "paragraph",
            text: "`action` is used to invoke a method when a button or link is activated. The return value of the method typically determines navigation outcome."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:commandButton value="Submit" action="#{formBean.submitForm}" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Using `actionListener` for Event Handling",
            anchor: "jsf-actionlistener"
        },
        {
            type: "paragraph",
            text: "`actionListener` is used when you want to execute logic in response to an event, without determining navigation."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:commandButton value="Process" actionListener="#{formBean.processEvent}" />`
        },

        {
            type: "heading",
            level: 2,
            text: "Defining the Managed Bean in faces-config.xml",
            anchor: "xml-managed-bean-event"
        },
        {
            type: "code",
            language: "xml",
            code: `<managed-bean>
  <managed-bean-name>formBean</managed-bean-name>
  <managed-bean-class>com.example.FormBean</managed-bean-class>
  <managed-bean-scope>request</managed-bean-scope>
</managed-bean>`
        }, {
            type: "heading",
            level: 1,
            text: "Data Table and Iteration in JSF",
            anchor: "jsf-datatable-iteration"
        },
        {
            type: "paragraph",
            text: "JSF provides multiple components to render collections and lists of data. `<h:dataTable>` is used for tabular layouts, while `<ui:repeat>` is ideal for custom non-table rendering."
        },

        {
            type: "heading",
            level: 2,
            text: "<h:dataTable> – Tabular Data Rendering",
            anchor: "jsf-h-datatable"
        },
        {
            type: "paragraph",
            text: "`<h:dataTable>` is used to render rows and columns from a list of objects. It allows headers, footers, and column-specific components."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:dataTable value="#{userBean.users}" var="user" border="1">
  <h:column>
    <f:facet name="header">ID</f:facet>
    #{user.id}
  </h:column>
  <h:column>
    <f:facet name="header">Name</f:facet>
    #{user.name}
  </h:column>
  <h:column>
    <f:facet name="header">Email</f:facet>
    #{user.email}
  </h:column>
</h:dataTable>`
        },

        {
            type: "heading",
            level: 2,
            text: "<ui:repeat> – Simple List Iteration",
            anchor: "jsf-ui-repeat"
        },
        {
            type: "paragraph",
            text: "`<ui:repeat>` is a Facelets tag used to repeat any block of markup for each item in a collection. It's useful when table structure isn't required."
        },
        {
            type: "code",
            language: "xml",
            code: `<ui:repeat value="#{userBean.users}" var="user">
  <h:outputText value="#{user.name}" />
  <br />
</ui:repeat>`
        },

        {
            type: "heading",
            level: 2,
            text: "Additional Features in <h:dataTable>",
            anchor: "jsf-datatable-features"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Row selection:** Not built-in; can be implemented with command links/buttons inside rows.",
                "**Styling:** Use `rowClasses`, `columnClasses`, or standard CSS.",
                "**Headers and Footers:** Define with `<f:facet name=\"header\">` or `<f:facet name=\"footer\">` inside `<h:column>`."
            ]
        },
        {
            type: "code",
            language: "xml",
            code: `<h:dataTable value="#{userBean.users}" var="user" rowClasses="even,odd">
  <h:column>
    <f:facet name="header">Select</f:facet>
    <h:commandButton value="Select" action="#{userBean.select(user)}" />
  </h:column>
  <h:column>
    <f:facet name="header">Name</f:facet>
    #{user.name}
  </h:column>
</h:dataTable>`
        }, {
            type: "heading",
            level: 1,
            text: "Internationalization (i18n) in JSF",
            anchor: "jsf-i18n"
        },
        {
            type: "paragraph",
            text: "JSF supports internationalization (i18n) through resource bundles defined in `faces-config.xml`. This allows dynamic text rendering based on the selected locale using message keys in `.properties` files."
        },

        {
            type: "heading",
            level: 2,
            text: "Registering Message Bundle (faces-config.xml)",
            anchor: "i18n-register-bundle"
        },
        {
            type: "paragraph",
            text: "You can define your application's default message bundle and its access variable using the `<application>` section in `faces-config.xml`."
        },
        {
            type: "code",
            language: "xml",
            code: `<application>
  <resource-bundle>
    <base-name>resources.messages</base-name>
    <var>msg</var>
  </resource-bundle>
</application>`
        },

        {
            type: "heading",
            level: 2,
            text: "Creating Message Bundle File",
            anchor: "i18n-bundle-file"
        },
        {
            type: "paragraph",
            text: "Create a `messages.properties` file (and optional locale-specific versions like `messages_fr.properties`) under the `resources` package."
        },
        {
            type: "code",
            language: "properties",
            code: `label.username=Username
label.password=Password
button.submit=Submit`
        },

        {
            type: "heading",
            level: 2,
            text: "Using Resource Bundle in View",
            anchor: "i18n-view-usage"
        },
        {
            type: "paragraph",
            text: "Access message values in JSF pages using the variable defined (`msg` in this case)."
        },
        {
            type: "code",
            language: "xml",
            code: `<h:outputLabel for="username" value="#{msg['label.username']}" />
<h:inputText id="username" value="#{loginBean.username}" />

<h:commandButton value="#{msg['button.submit']}" action="#{loginBean.login}" />`
        }, {
            type: "heading",
            level: 1,
            text: "Session & Security Handling in JSF",
            anchor: "jsf-session-security"
        },
        {
            type: "paragraph",
            text: "JSF supports session management and security via the standard Servlet API. You can manage session state using `ExternalContext`, and configure role-based access using `web.xml`."
        },

        {
            type: "heading",
            level: 2,
            text: "Accessing Session via ExternalContext",
            anchor: "session-external-context"
        },
        {
            type: "paragraph",
            text: "Use `FacesContext.getCurrentInstance().getExternalContext()` to access session and request-level operations."
        },
        {
            type: "code",
            language: "java",
            code: `ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
HttpSession session = (HttpSession) ec.getSession(false);
String username = (String) session.getAttribute("username");`
        },

        {
            type: "heading",
            level: 2,
            text: "Invalidating a Session",
            anchor: "session-invalidate"
        },
        {
            type: "paragraph",
            text: "To log out a user or clear session data, manually invalidate the session from a backing bean."
        },
        {
            type: "code",
            language: "java",
            code: `ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
ec.invalidateSession();`
        },

        {
            type: "heading",
            level: 2,
            text: "Declaring Security Constraints in web.xml",
            anchor: "security-webxml"
        },
        {
            type: "paragraph",
            text: "You can restrict access to pages based on roles using `<security-constraint>` in `web.xml`. This is container-managed security supported by all Java EE compliant servers."
        },
        {
            type: "code",
            language: "xml",
            code: `<security-constraint>
  <web-resource-collection>
    <web-resource-name>Admin Pages</web-resource-name>
    <url-pattern>/admin/*</url-pattern>
  </web-resource-collection>
  <auth-constraint>
    <role-name>admin</role-name>
  </auth-constraint>
</security-constraint>

<login-config>
  <auth-method>FORM</auth-method>
  <form-login-config>
    <form-login-page>/login.xhtml</form-login-page>
    <form-error-page>/error.xhtml</form-error-page>
  </form-login-config>
</login-config>

<security-role>
  <role-name>admin</role-name>
</security-role>`
        }, {
            type: "heading",
            level: 1,
            text: "JSF Lifecycle",
            anchor: "jsf-lifecycle"
        },
        {
            type: "paragraph",
            text: "The JSF lifecycle is a series of six well-defined phases that govern how a request is processed and how the response is generated. Understanding this lifecycle is key to mastering JSF."
        },

        {
            type: "heading",
            level: 2,
            text: "Six Lifecycle Phases",
            anchor: "lifecycle-phases"
        },
        {
            type: "list",
            style: "ordered",
            items: [
                "**Restore View** – Reconstructs the component tree from the previous request or creates a new one.",
                "**Apply Request Values** – Component values are populated from HTTP request parameters.",
                "**Process Validations** – Registered validators are executed to check input validity.",
                "**Update Model Values** – Validated values are moved into managed beans (model objects).",
                "**Invoke Application** – Action methods or listeners are executed (e.g., button click logic).",
                "**Render Response** – The component tree is rendered into HTML to send to the client."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Custom Phase Listener (XML Configuration)",
            anchor: "custom-phase-listener"
        },
        {
            type: "paragraph",
            text: "You can add a custom phase listener to monitor or manipulate behavior during any phase of the JSF lifecycle. Register it in `faces-config.xml` using `<lifecycle>`."
        },
        {
            type: "code",
            language: "xml",
            code: `<lifecycle>
  <phase-listener>com.example.lifecycle.CustomPhaseListener</phase-listener>
</lifecycle>`
        },

        {
            type: "code",
            language: "java",
            code: `public class CustomPhaseListener implements PhaseListener {
  public void beforePhase(PhaseEvent event) {
    System.out.println("Before phase: " + event.getPhaseId());
  }

  public void afterPhase(PhaseEvent event) {
    System.out.println("After phase: " + event.getPhaseId());
  }

  public PhaseId getPhaseId() {
    return PhaseId.ANY_PHASE;
  }
}`
        }, {
            type: "heading",
            level: 1,
            text: "FacesContext & ExternalContext",
            anchor: "facescontext-externalcontext"
        },
        {
            type: "paragraph",
            text: "`FacesContext` is the central JSF context object that provides access to the state and environment of a request. `ExternalContext` (accessible via `FacesContext`) offers servlet-level access to request, response, session, and application."
        },

        {
            type: "heading",
            level: 2,
            text: "Accessing Scopes via ExternalContext",
            anchor: "facescontext-scopes"
        },
        {
            type: "code",
            language: "java",
            code: `FacesContext context = FacesContext.getCurrentInstance();
ExternalContext ec = context.getExternalContext();

// Get session scope attribute
String username = (String) ec.getSessionMap().get("username");

// Set application scope attribute
ec.getApplicationMap().put("globalMessage", "Welcome All Users!");

// Remove request attribute
ec.getRequestMap().remove("tempFlag");`
        },

        {
            type: "heading",
            level: 2,
            text: "Redirecting or Forwarding Pages",
            anchor: "facescontext-redirect"
        },
        {
            type: "code",
            language: "java",
            code: `ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();

// Redirect to another page
ec.redirect("home.xhtml");

// Forward (server-side dispatch, not browser visible)
RequestDispatcher dispatcher = ((HttpServletRequest) ec.getRequest())
    .getRequestDispatcher("/admin/dashboard.xhtml");
dispatcher.forward((HttpServletRequest) ec.getRequest(), (HttpServletResponse) ec.getResponse());

FacesContext.getCurrentInstance().responseComplete();`
        },

        {
            type: "heading",
            level: 2,
            text: "Adding FacesMessages",
            anchor: "facescontext-messages"
        },
        {
            type: "paragraph",
            text: "You can programmatically show messages in the view using `FacesMessage` objects."
        },
        {
            type: "code",
            language: "java",
            code: `FacesContext context = FacesContext.getCurrentInstance();
context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, 
  "Success", "User created successfully!"));

// Targeting a specific component (e.g., form field)
context.addMessage("loginForm:username", new FacesMessage("Username is required"));`
        }, {
            type: "heading",
            level: 1,
            text: "Error Handling in JSF",
            anchor: "jsf-error-handling"
        },
        {
            type: "paragraph",
            text: "JSF supports both server-side error handling using `web.xml` configuration and UI-level feedback using `FacesMessage`. These mechanisms help gracefully report and manage exceptions and validation issues."
        },

        {
            type: "heading",
            level: 2,
            text: "Custom Error Pages (web.xml)",
            anchor: "jsf-custom-error-pages"
        },
        {
            type: "paragraph",
            text: "Define custom pages for specific error codes or exceptions in `web.xml`."
        },
        {
            type: "code",
            language: "xml",
            code: `<error-page>
  <exception-type>java.lang.Throwable</exception-type>
  <location>/error.xhtml</location>
</error-page>

<error-page>
  <error-code>404</error-code>
  <location>/not-found.xhtml</location>
</error-page>`
        },

        {
            type: "heading",
            level: 2,
            text: "Using FacesMessage for Validation Errors",
            anchor: "jsf-facesmessage-errors"
        },
        {
            type: "paragraph",
            text: "`FacesMessage` allows developers to show field-specific or global messages in JSF views. These messages can be triggered in backing beans or validators."
        },
        {
            type: "code",
            language: "java",
            code: `FacesContext context = FacesContext.getCurrentInstance();
context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_ERROR,
  "Validation Failed", "Email address is invalid"));`
        },
        {
            type: "code",
            language: "xml",
            code: `<h:message for="email" style="color:red" />
<h:inputText id="email" value="#{userBean.email}" required="true" />`
        }, {
            type: "heading",
            level: 1,
            text: "Composite Components (XML View Only)",
            anchor: "jsf-composite-components"
        },
        {
            type: "paragraph",
            text: "JSF allows you to define your own reusable UI components using XML in Facelets. These are called *composite components* and are created using the `<composite:interface>` and `<composite:implementation>` tags inside an XHTML file."
        },

        {
            type: "heading",
            level: 2,
            text: "Component Structure",
            anchor: "jsf-composite-structure"
        },
        {
            type: "paragraph",
            text: "Composite components are placed in the `/resources/` folder under a namespace and can be reused like regular JSF tags."
        },
        {
            type: "code",
            language: "xml",
            code: `<!-- File: /resources/custom/inputText.xhtml -->
<ui:component xmlns="http://www.w3.org/1999/xhtml"
              xmlns:ui="http://java.sun.com/jsf/facelets"
              xmlns:composite="http://java.sun.com/jsf/composite">

  <composite:interface>
    <composite:attribute name="label" required="true"/>
    <composite:attribute name="value" required="true"/>
  </composite:interface>

  <composite:implementation>
    <h:outputLabel value="#{cc.attrs.label}" for="input"/>
    <h:inputText id="input" value="#{cc.attrs.value}" />
  </composite:implementation>

</ui:component>`
        },

        {
            type: "heading",
            level: 2,
            text: "Using the Composite Component",
            anchor: "jsf-composite-usage"
        },
        {
            type: "paragraph",
            text: "You can now use the custom component in any JSF page by importing the namespace."
        },
        {
            type: "code",
            language: "xml",
            code: `<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:h="http://java.sun.com/jsf/html"
      xmlns:cust="http://java.sun.com/jsf/composite/custom">

  <h:form>
    <cust:inputText label="Username:" value="#{userBean.username}" />
  </h:form>
</html>`
        }, {
            type: "heading",
            level: 1,
            text: "Best Practices (XML-Focused)",
            anchor: "jsf-best-practices"
        },
        {
            type: "paragraph",
            text: "Following best practices when working with JSF and XML-based configuration helps ensure a maintainable, scalable, and efficient application. These practices focus on clarity, separation of concerns, and leveraging JSF's strengths."
        },

        {
            type: "list",
            style: "unordered",
            items: [
                "**Use `faces-config.xml` for all definitions:** Keep your managed beans, navigation rules, converters, validators, and listeners centralized in the configuration file.",
                "**Avoid logic in the view:** Keep business logic strictly in the managed beans. Views should only focus on displaying data and capturing input.",
                "**Use JSTL for simple logic only:** Use tags like `<c:if>`, `<c:forEach>`, etc., for conditional rendering and loops, but avoid placing core logic in Facelets.",
                "**Modularize views with includes and templates:** Use `<ui:include>` and Facelets templating (`<ui:composition>`, `<ui:define>`, `<ui:insert>`) to break down views into reusable parts.",
                "**Prefer session/view scopes for navigation-driven beans:** For multi-page workflows, `session` or `view` scope beans ensure data consistency and performance."
            ]
        }
    ],
    summary: {
        keyPoints: [
            "JSF is a component-based framework for building Java web UIs.",
            "The lifecycle has six phases from view restoration to rendering.",
            "This course uses XML-based configuration (`faces-config.xml`) only.",
            "Facelets offer a powerful and cleaner alternative to JSP."
        ],
        cheatSheet: {
            facesConfigTags: `
<managed-bean>
<navigation-rule>
<converter>
<validator>
<application>
      `,
            lifecyclePhases: `
1. Restore View
2. Apply Request Values
3. Process Validations
4. Update Model Values
5. Invoke Application
6. Render Response
      `
        }
    },
    nextSteps: [
        {
            topicId: "jsf-setup-xml",
            reason: "Set up a JSF 2 project with proper XML configuration and folder structure."
        },
        {
            topicId: "jsf-managed-beans-xml",
            reason: "Learn how to configure managed beans in `faces-config.xml`."
        }
    ]
}
