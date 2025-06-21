// topics/servlet-intro.js

export default {
    meta: {
        title: "Introduction to Servlets",
        description: "Learn the fundamentals of Java Servlets including lifecycle, advantages, and comparison with JSP.",
        category: "web-development",
        subcategory: "java",
        difficulty: "beginner",
        duration: 25,
        keywords: ["servlet", "jsp", "java web", "web.xml", "servlet lifecycle"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to Servlets",
            anchor: "servlet-intro"
        },
        {
            type: "paragraph",
            text: "Servlets are server-side Java programs that handle requests and generate dynamic responses. They are foundational in Java web development and operate within a servlet container like Apache Tomcat."
        },
        {
            type: "heading",
            level: 2,
            text: "What is a Servlet?",
            anchor: "what-is-servlet"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "A Servlet is a Java class that responds to HTTP requests in a web application.",
                "It extends the capabilities of servers by processing client requests and returning dynamic content.",
                "Servlets are part of the Java EE (Jakarta EE) platform and use the `javax.servlet` API."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Servlet vs JSP",
            anchor: "servlet-vs-jsp"
        },
        {
            type: "table",
            headers: ["Servlet", "JSP"],
            rows: [
                ["Controller logic", "View/presentation logic"],
                ["Pure Java code", "Mix of HTML and Java (discouraged now)"],
                ["Difficult to write UI", "Easy to write UI with tags"],
                ["Better for handling requests", "Better for rendering output"]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Advantages of Servlets",
            anchor: "servlet-advantages"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Platform-independent and part of standard Java EE.",
                "Efficient due to multi-threading support.",
                "Highly scalable and secure.",
                "Easy integration with JSP and JDBC.",
                "Robust lifecycle managed by the container."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Servlet Lifecycle",
            anchor: "servlet-lifecycle"
        },
        {
            type: "paragraph",
            text: "The servlet lifecycle is managed by the servlet container and includes initialization, request handling, and destruction phases."
        },
        {
            type: "list",
            style: "ordered",
            items: [
                "**`init()`** – Called once during servlet initialization.",
                "**`service()`** – Called for each request; delegates to `doGet()`, `doPost()`, etc.",
                "**`destroy()`** – Called once when the servlet is being taken out of service."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public class MyServlet extends HttpServlet {
  public void init() throws ServletException {
    // Initialization logic
  }

  protected void doGet(HttpServletRequest req, HttpServletResponse res)
      throws ServletException, IOException {
    // Request handling logic
    res.getWriter().write("Hello from Servlet");
  }

  public void destroy() {
    // Cleanup logic
  }
}`
        }, {
            type: "heading",
            level: 1,
            text: "Environment Setup",
            anchor: "environment-setup"
        },
        {
            type: "paragraph",
            text: "Setting up the development environment is the first step in building a servlet-based Java web application. It involves installing the necessary SDKs, configuring a servlet container, and organizing the project structure appropriately."
        },
        {
            type: "heading",
            level: 2,
            text: "Required Tools",
            anchor: "required-tools"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Java EE SDK** or **Jakarta EE** – Provides the servlet API and other enterprise features.",
                "**Apache Tomcat** – A popular servlet container used to run web applications.",
                "**IDE** – Eclipse, IntelliJ IDEA, or NetBeans are commonly used for servlet development."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Standard Project Structure",
            anchor: "project-structure"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`src/` – Contains all Java source files including servlet classes.",
                "`WEB-INF/web.xml` – The deployment descriptor for servlet configuration.",
                "`WebContent/` or `webapp/` – Stores static files like HTML, JSP, CSS, and JavaScript."
            ]
        }, {
            type: "heading",
            level: 2,
            text: "Example Folder Structure",
            anchor: "folder-structure"
        },
        {
            type: "code",
            language: "text",
            code: `MyWebApp/
├── src/
│   └── com/example/HelloServlet.java
├── WebContent/         (or webapp/)
│   ├── index.html
│   └── WEB-INF/
│       └── web.xml
├── lib/                (optional: for external JARs if not using Maven)
└── build/              (optional: for compiled classes)`
        }
        , {
            type: "heading",
            level: 1,
            text: "web.xml – Servlet Configuration File",
            anchor: "web-xml-config"
        },
        {
            type: "paragraph",
            text: "The `web.xml` file, located inside `WEB-INF/`, is the deployment descriptor used to configure servlets and define application behavior in Java web applications using XML."
        },
        {
            type: "heading",
            level: 2,
            text: "Servlet Declaration",
            anchor: "servlet-declaration"
        },
        {
            type: "code",
            language: "xml",
            code: `<servlet>
  <servlet-name>MyServlet</servlet-name>
  <servlet-class>com.example.MyServlet</servlet-class>
</servlet>`
        },
        {
            type: "paragraph",
            text: "Defines a servlet with a name and the fully qualified class name. This tells the container which class to load for this servlet."
        },
        {
            type: "heading",
            level: 2,
            text: "Servlet Mapping",
            anchor: "servlet-mapping"
        },
        {
            type: "code",
            language: "xml",
            code: `<servlet-mapping>
  <servlet-name>MyServlet</servlet-name>
  <url-pattern>/hello</url-pattern>
</servlet-mapping>`
        },
        {
            type: "paragraph",
            text: "Associates a servlet name with a URL pattern so the container knows when to invoke it based on the request URL."
        },
        {
            type: "heading",
            level: 2,
            text: "Welcome File Configuration",
            anchor: "welcome-file"
        },
        {
            type: "code",
            language: "xml",
            code: `<welcome-file-list>
  <welcome-file>index.html</welcome-file>
</welcome-file-list>`
        },
        {
            type: "paragraph",
            text: "Defines the default resource (like `index.html`) to be shown when the user accesses the root of the application without a specific path."
        }, {
            type: "heading",
            level: 1,
            text: "Servlet API Basics",
            anchor: "servlet-api-basics"
        },
        {
            type: "paragraph",
            text: "The core functionality of servlets revolves around handling HTTP requests and responses using the `HttpServletRequest` and `HttpServletResponse` objects. These allow you to read incoming data and generate dynamic web content."
        },
        {
            type: "heading",
            level: 2,
            text: "Common HTTP Methods",
            anchor: "http-methods"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`doGet(HttpServletRequest req, HttpServletResponse res)` – Handles HTTP GET requests (e.g., from URL query parameters).",
                "`doPost(HttpServletRequest req, HttpServletResponse res)` – Handles HTTP POST requests (form submissions).",
                "`doPut(HttpServletRequest req, HttpServletResponse res)` – Handles data updates (rare in HTML forms).",
                "`doDelete(HttpServletRequest req, HttpServletResponse res)` – Handles delete operations (usually from APIs)."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Reading Request Parameters",
            anchor: "reading-parameters"
        },
        {
            type: "code",
            language: "java",
            code: `String username = request.getParameter("username");
String email = request.getParameter("email");`
        },
        {
            type: "heading",
            level: 2,
            text: "Sending Response",
            anchor: "sending-response"
        },
        {
            type: "code",
            language: "java",
            code: `response.setContentType("text/html");
PrintWriter out = response.getWriter();
out.println("<h1>Welcome to Servlet</h1>");`
        },
        {
            type: "heading",
            level: 2,
            text: "Setting Content Type and Encoding",
            anchor: "content-type-encoding"
        },
        {
            type: "code",
            language: "java",
            code: `response.setContentType("text/html;charset=UTF-8");`
        }
        , {
            type: "heading",
            level: 1,
            text: "Request Handling",
            anchor: "request-handling"
        },
        {
            type: "paragraph",
            text: "Servlets handle HTTP requests and responses, allowing web applications to process form data, retrieve parameters, and control navigation via forwarding or redirecting."
        },
        {
            type: "heading",
            level: 2,
            text: "Handling Form Data via GET and POST",
            anchor: "handling-form-data"
        },
        {
            type: "paragraph",
            text: "Form submissions use the `doGet()` or `doPost()` methods in servlets. Parameters submitted from HTML forms can be accessed using `request.getParameter()`."
        },
        {
            type: "code",
            language: "java",
            code: `String name = request.getParameter("name");
String email = request.getParameter("email");`
        },
        {
            type: "heading",
            level: 2,
            text: "Retrieving Query Parameters",
            anchor: "query-parameters"
        },
        {
            type: "paragraph",
            text: "Query parameters in the URL (e.g., `?id=123`) can be accessed using `getParameter()`."
        },
        {
            type: "code",
            language: "java",
            code: `String id = request.getParameter("id");`
        },
        {
            type: "heading",
            level: 2,
            text: "Forwarding Requests",
            anchor: "forwarding"
        },
        {
            type: "paragraph",
            text: "Forwarding transfers control from one servlet or JSP to another on the server side without the client knowing."
        },
        {
            type: "code",
            language: "java",
            code: `RequestDispatcher rd = request.getRequestDispatcher("next.jsp");
rd.forward(request, response);`
        },
        {
            type: "heading",
            level: 2,
            text: "Redirecting Requests",
            anchor: "redirecting"
        },
        {
            type: "paragraph",
            text: "Redirection tells the browser to request a new URL. It creates a new request and changes the address in the browser."
        },
        {
            type: "code",
            language: "java",
            code: `response.sendRedirect("home.jsp");`
        }
        , {
            type: "heading",
            level: 1,
            text: "Servlet Lifecycle",
            anchor: "servlet-lifecycle"
        },
        {
            type: "paragraph",
            text: "The servlet lifecycle defines how a servlet is loaded, initialized, used to handle requests, and eventually destroyed by the servlet container (e.g., Tomcat)."
        },
        {
            type: "list",
            style: "ordered",
            items: [
                "**Container Initialization** – The servlet container (like Apache Tomcat) loads the servlet class and instantiates it.",
                "**init()** – This method is called once when the servlet is first created. It is used for one-time initialization.",
                "**service()** – Called every time a request is made to the servlet. It determines the request method (GET, POST, etc.) and delegates to the appropriate method (`doGet()`, `doPost()`, etc.).",
                "**destroy()** – Called once before the servlet is removed from memory. Used to release resources like database connections or file handles."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public class MyServlet extends HttpServlet {
  public void init() throws ServletException {
    // Initialization code here
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    // Request handling code here
  }

  public void destroy() {
    // Cleanup code here
  }
}`
        }
        , {
            type: "heading",
            level: 1,
            text: "Deployment Descriptor: web.xml – All Tags",
            anchor: "web-xml-tags"
        },
        {
            type: "paragraph",
            text: "`web.xml` is the deployment descriptor for Java web applications. It configures servlets, filters, listeners, initialization parameters, welcome files, error pages, and more. It resides in the `WEB-INF` directory."
        },
        {
            type: "table",
            headers: ["Tag", "Purpose"],
            rows: [
                ["<web-app>", "Root tag for the deployment descriptor"],
                ["<servlet>", "Defines a servlet with its name and class"],
                ["<servlet-mapping>", "Maps servlet to a URL pattern"],
                ["<filter>", "Defines a filter class for preprocessing requests"],
                ["<filter-mapping>", "Maps filter to servlets or URL patterns"],
                ["<listener>", "Registers application-level event listeners"],
                ["<context-param>", "Defines application-wide parameters"],
                ["<init-param>", "Defines initialization parameters inside a `<servlet>`"],
                ["<welcome-file-list>", "Specifies default welcome files (like `index.jsp`)"],
                ["<error-page>", "Defines custom error pages for specific status codes or exceptions"],
                ["<mime-mapping>", "Maps file extensions to MIME types"],
                ["<session-config>", "Configures session timeout and tracking mode"],
                ["<security-constraint>", "Defines access control rules (optional, for protected areas)"]
            ]
        }
        , {
            type: "heading",
            level: 1,
            text: "Request Dispatching",
            anchor: "request-dispatching"
        },
        {
            type: "paragraph",
            text: "In Servlets, request dispatching is used to navigate between resources such as JSP pages or other servlets. There are two main techniques: forwarding and redirecting."
        },
        {
            type: "heading",
            level: 2,
            text: "Forward vs Redirect",
            anchor: "forward-vs-redirect"
        },
        {
            type: "table",
            headers: ["Method", "Behavior"],
            rows: [
                ["Forward", "Performed on the server side. The request is forwarded internally without the client knowing. The browser URL remains unchanged."],
                ["Redirect", "Performed on the client side. The server instructs the browser to make a new request. The browser URL is updated."]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Using RequestDispatcher (Forwarding)",
            anchor: "request-dispatcher"
        },
        {
            type: "code",
            language: "java",
            code: `RequestDispatcher rd = request.getRequestDispatcher("result.jsp");
rd.forward(request, response);`
        },
        {
            type: "heading",
            level: 2,
            text: "Using Redirect",
            anchor: "send-redirect"
        },
        {
            type: "code",
            language: "java",
            code: `response.sendRedirect("result.jsp");`
        },
        {
            type: "heading",
            level: 2,
            text: "Scope Behavior",
            anchor: "scope-behavior"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Forward:** Request scope is preserved. Attributes set in the request remain available in the forwarded resource.",
                "**Redirect:** Creates a new request. Request scope attributes are not retained unless passed explicitly (e.g., as query parameters)."
            ]
        }
        , {
            type: "heading",
            level: 1,
            text: "Form Handling with HTML",
            anchor: "form-handling"
        },
        {
            type: "paragraph",
            text: "HTML forms are commonly used to send user input to servlets. Servlets process form data using the `doGet()` or `doPost()` methods depending on the form's method attribute."
        },
        {
            type: "heading",
            level: 2,
            text: "GET vs POST Methods",
            anchor: "get-vs-post"
        },
        {
            type: "table",
            headers: ["Method", "Behavior"],
            rows: [
                ["GET", "Appends form data to the URL as query parameters. Limited data size. Bookmarkable."],
                ["POST", "Sends form data in the request body. More secure and suitable for large or sensitive data."]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Sample HTML Form",
            anchor: "sample-form"
        },
        {
            type: "code",
            language: "html",
            code: `<form method="post" action="submitForm">
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>`
        },
        {
            type: "heading",
            level: 2,
            text: "Accessing Form Data in Servlet",
            anchor: "accessing-data"
        },
        {
            type: "code",
            language: "java",
            code: `protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    String username = request.getParameter("username");
    response.getWriter().println("Hello, " + username);
}`
        }
        , {
            type: "heading",
            level: 1,
            text: "Servlet Context and Config",
            anchor: "servlet-context-config"
        },
        {
            type: "paragraph",
            text: "ServletContext and ServletConfig are two key interfaces used to access configuration information and shared resources within a servlet environment."
        },
        {
            type: "heading",
            level: 2,
            text: "ServletContext (Application-wide Parameters)",
            anchor: "servlet-context"
        },
        {
            type: "paragraph",
            text: "The `ServletContext` object represents the web application's shared memory. It is used to access global initialization parameters and application-level resources."
        },
        {
            type: "code",
            language: "java",
            code: `ServletContext context = getServletContext();
String appName = context.getInitParameter("applicationName");`
        },
        {
            type: "code",
            language: "xml",
            code: `<context-param>
  <param-name>applicationName</param-name>
  <param-value>MyWebApp</param-value>
</context-param>`
        },
        {
            type: "heading",
            level: 2,
            text: "ServletConfig (Servlet-specific Parameters)",
            anchor: "servlet-config"
        },
        {
            type: "paragraph",
            text: "`ServletConfig` is used to pass configuration information specific to a particular servlet. These values are defined in the `<init-param>` block within the servlet declaration in `web.xml`."
        },
        {
            type: "code",
            language: "java",
            code: `public void init(ServletConfig config) throws ServletException {
    String adminEmail = config.getInitParameter("adminEmail");
}`
        },
        {
            type: "code",
            language: "xml",
            code: `<servlet>
  <servlet-name>AdminServlet</servlet-name>
  <servlet-class>com.example.AdminServlet</servlet-class>
  <init-param>
    <param-name>adminEmail</param-name>
    <param-value>admin@example.com</param-value>
  </init-param>
</servlet>`
        }
        , {
            type: "heading",
            level: 1,
            text: "Session Management",
            anchor: "session-management"
        },
        {
            type: "paragraph",
            text: "Session management in servlets allows data to persist across multiple requests from the same user. This is typically handled using the `HttpSession` object or cookies."
        },
        {
            type: "heading",
            level: 2,
            text: "Using HttpSession",
            anchor: "http-session"
        },
        {
            type: "code",
            language: "java",
            code: `HttpSession session = request.getSession(); // creates new or returns existing
session.setAttribute("username", "john_doe");
String name = (String) session.getAttribute("username");`
        },
        {
            type: "heading",
            level: 2,
            text: "Session Timeout Configuration",
            anchor: "session-timeout"
        },
        {
            type: "paragraph",
            text: "You can define a session timeout in minutes in the `web.xml` using `<session-config>`:"
        },
        {
            type: "code",
            language: "xml",
            code: `<session-config>
  <session-timeout>30</session-timeout> <!-- in minutes -->
</session-config>`
        },
        {
            type: "heading",
            level: 2,
            text: "Handling Cookies",
            anchor: "handling-cookies"
        },
        {
            type: "paragraph",
            text: "Cookies are small pieces of data stored on the client-side. Servlets can read and write cookies for session tracking or storing small user preferences."
        },
        {
            type: "code",
            language: "java",
            code: `// Reading cookies
Cookie[] cookies = request.getCookies();
if (cookies != null) {
  for (Cookie c : cookies) {
    out.println(c.getName() + ": " + c.getValue());
  }
}

// Creating a cookie
Cookie userCookie = new Cookie("username", "john_doe");
userCookie.setMaxAge(3600); // 1 hour
response.addCookie(userCookie);`
        }
        , {
            type: "heading",
            level: 1,
            text: "Error Handling in Servlets",
            anchor: "error-handling"
        },
        {
            type: "paragraph",
            text: "Error handling in servlet-based applications is typically configured in the `web.xml` deployment descriptor. You can define specific error pages based on HTTP status codes or Java exception types."
        },
        {
            type: "heading",
            level: 2,
            text: "Define Error Pages in web.xml",
            anchor: "webxml-error-pages"
        },
        {
            type: "code",
            language: "xml",
            code: `<error-page>
  <error-code>404</error-code>
  <location>/error404.jsp</location>
</error-page>

<error-page>
  <exception-type>java.lang.Throwable</exception-type>
  <location>/error.jsp</location>
</error-page>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<error-code>`: Handles specific HTTP errors (e.g., 404 Not Found).",
                "`<exception-type>`: Handles unhandled exceptions of a specific type.",
                "`<location>`: Points to the JSP or HTML page shown when an error occurs."
            ]
        }
        , {
            type: "heading",
            level: 1,
            text: "Servlet Security (web.xml Configuration)",
            anchor: "servlet-security"
        },
        {
            type: "paragraph",
            text: "Servlet security can be enforced declaratively using elements in the `web.xml` file. This includes URL-level restrictions, authentication methods, and role-based access control."
        },
        {
            type: "heading",
            level: 2,
            text: "Security Constraints",
            anchor: "security-constraints"
        },
        {
            type: "code",
            language: "xml",
            code: `<security-constraint>
  <web-resource-collection>
    <web-resource-name>Admin</web-resource-name>
    <url-pattern>/admin/*</url-pattern>
  </web-resource-collection>
  <auth-constraint>
    <role-name>admin</role-name>
  </auth-constraint>
</security-constraint>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<web-resource-collection>`: Defines the protected URL pattern.",
                "`<auth-constraint>`: Specifies the roles allowed to access the resource.",
                "Multiple constraints can be used for different URL patterns."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Login Configuration",
            anchor: "login-config"
        },
        {
            type: "code",
            language: "xml",
            code: `<login-config>
  <auth-method>BASIC</auth-method>
  <realm-name>MyRealm</realm-name>
</login-config>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<auth-method>`: Defines the authentication type (`BASIC`, `FORM`, etc.).",
                "`<realm-name>`: Logical name for the security realm used during login."
            ]
        }
        , {
            type: "heading",
            level: 1,
            text: "Filters (via web.xml)",
            anchor: "filters-webxml"
        },
        {
            type: "paragraph",
            text: "Filters in Servlets are powerful components used to intercept requests and responses for preprocessing tasks such as logging, authentication, or data compression. Filters are declared and mapped using `web.xml`."
        },
        {
            type: "heading",
            level: 2,
            text: "Common Uses of Filters",
            anchor: "filter-uses"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Request/response logging",
                "Authentication and authorization checks",
                "Data compression or encoding",
                "Input validation or sanitization"
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Filter Configuration in web.xml",
            anchor: "filter-config"
        },
        {
            type: "code",
            language: "xml",
            code: `<filter>
  <filter-name>LogFilter</filter-name>
  <filter-class>com.example.LogFilter</filter-class>
</filter>

<filter-mapping>
  <filter-name>LogFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<filter>`: Declares the filter and specifies the fully qualified filter class.",
                "`<filter-mapping>`: Maps the filter to URL patterns or specific servlets."
            ]
        }
        , {
            type: "heading",
            level: 1,
            text: "Listeners",
            anchor: "listeners"
        },
        {
            type: "paragraph",
            text: "Listeners in Servlets allow developers to monitor and respond to lifecycle events in web applications. These events can be related to the application context, HTTP sessions, or individual requests."
        },
        {
            type: "heading",
            level: 2,
            text: "Listener Declaration in web.xml",
            anchor: "listener-webxml"
        },
        {
            type: "code",
            language: "xml",
            code: `<listener>
  <listener-class>com.example.MyContextListener</listener-class>
</listener>`
        },
        {
            type: "paragraph",
            text: "You declare listeners in `web.xml` using the `<listener>` tag and provide the fully qualified listener class."
        },
        {
            type: "heading",
            level: 2,
            text: "Types of Listeners",
            anchor: "listener-types"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**ServletContextListener** – Listens to application lifecycle events (startup and shutdown).",
                "**HttpSessionListener** – Tracks creation and destruction of user sessions.",
                "**ServletRequestListener** – Monitors request lifecycle events (init and destroy)."
            ]
        }
        , {
            type: "heading",
            level: 1,
            text: "Testing and Deployment",
            anchor: "testing-deployment"
        },
        {
            type: "paragraph",
            text: "Servlet applications are typically packaged as WAR (Web Application Archive) files and deployed to a servlet container like Apache Tomcat. Proper testing involves verifying form handling, redirections, and session management."
        },
        {
            type: "heading",
            level: 2,
            text: "WAR Packaging",
            anchor: "war-packaging"
        },
        {
            type: "list",
            style: "ordered",
            items: [
                "Compile the Java classes and place them in `WEB-INF/classes`.",
                "Include `web.xml` inside `WEB-INF/`.",
                "Include all static resources like HTML, CSS, and JSP files.",
                "Use a tool like Maven, Gradle, or IDE to create the `.war` file."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Manual Deployment to Tomcat",
            anchor: "deploy-tomcat"
        },
        {
            type: "list",
            style: "ordered",
            items: [
                "Place the WAR file in the `webapps/` directory of Tomcat.",
                "Start Tomcat using `startup.bat` or `startup.sh`.",
                "Tomcat automatically extracts and deploys the WAR."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Testing the Application",
            anchor: "testing-app"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Test forms using GET/POST methods and validate parameters.",
                "Verify redirection using `response.sendRedirect()`.",
                "Test session behavior using `HttpSession` and attributes.",
                "Inspect logs and console output for debugging and logging statements."
            ]
        }
        , {
            type: "heading",
            level: 1,
            text: "Best Practices (XML-Focused)",
            anchor: "servlet-best-practices"
        },
        {
            type: "paragraph",
            text: "When developing Java web applications using XML-based configuration, adhering to best practices ensures maintainability, security, and performance. Below are key guidelines to follow:"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Keep `web.xml` clean and modular – avoid clutter and separate concerns with filters/listeners.",
                "Prefer `POST` over `GET` for transmitting sensitive or large data.",
                "Always validate user input on both client (HTML/JavaScript) and server (Servlet) sides.",
                "Reuse utility code like logging, authentication, or compression using reusable filters and listeners.",
                "Ensure all database resources (Connections, Statements, ResultSets) are closed in a `finally` block or use try-with-resources."
            ]
        }

    ],
    summary: {
        keyPoints: [
            "Servlets are Java classes that run on a web server to handle HTTP requests.",
            "They follow a well-defined lifecycle: init, service, destroy.",
            "Servlets are ideal for request processing, whereas JSP is for UI rendering.",
            "They are configured using web.xml in traditional setups.",
            "Servlets enable dynamic content generation and backend control."
        ]
    },
    nextSteps: [
        {
            topicId: "servlet-xml-config",
            reason: "Learn how to configure Servlets using web.xml and map URLs to servlet classes."
        },
        {
            topicId: "servlet-request-response",
            reason: "Understand handling request parameters and generating dynamic responses."
        }
    ]
}