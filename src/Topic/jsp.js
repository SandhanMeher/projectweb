// topics/jsp-intro.js

export default {
    meta: {
        title: "Introduction to JSP",
        description: "Understand the basics of JavaServer Pages (JSP), including lifecycle, comparison with Servlets, and how JSP is compiled and executed.",
        category: "web-development",
        subcategory: "java",
        difficulty: "beginner",
        duration: 25,
        keywords: ["jsp", "java server pages", "servlet", "jsp lifecycle", "web xml"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to JSP (JavaServer Pages)",
            anchor: "jsp-intro"
        },
        {
            type: "paragraph",
            text: "JavaServer Pages (JSP) is a server-side technology that allows the creation of dynamic, platform-independent web applications. JSP enables developers to embed Java code directly into HTML pages using special JSP tags."
        },
        {
            type: "heading",
            level: 2,
            text: "What is JSP?",
            anchor: "what-is-jsp"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "JSP is a text-based document for generating dynamic web content using Java.",
                "It is compiled into a Servlet by the server during the first request.",
                "Allows embedding Java logic inside HTML via scripting elements."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "JSP vs Servlet",
            anchor: "jsp-vs-servlet"
        },
        {
            type: "table",
            headers: ["JSP", "Servlet"],
            rows: [
                ["HTML-centric with embedded Java", "Java-centric with HTML generated via code"],
                ["More readable for designers", "Requires more Java knowledge"],
                ["Automatically compiled to servlet", "Manually coded"],
                ["Better suited for views", "Better suited for controllers/business logic"]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "JSP Lifecycle",
            anchor: "jsp-lifecycle"
        },
        {
            type: "paragraph",
            text: "JSP goes through a defined set of phases in its lifecycle. These phases are handled by the servlet container (e.g., Tomcat):"
        },
        {
            type: "list",
            style: "ordered",
            items: [
                "Translation – JSP is converted into a Java servlet class.",
                "Compilation – The generated servlet is compiled into bytecode.",
                "Initialization – The servlet is initialized using the `jspInit()` method.",
                "Execution – Requests are handled using `_jspService()`.",
                "Destruction – Servlet is taken down using `jspDestroy()`."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "JSP Compilation Behind the Scenes",
            anchor: "jsp-compilation"
        },
        {
            type: "paragraph",
            text: "When a JSP page is accessed for the first time, the servlet container performs the following operations:"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "The JSP file is parsed and converted into a `.java` file (a servlet).",
                "This servlet is compiled into a `.class` file.",
                "The servlet class is loaded into memory and initialized.",
                "Subsequent requests are handled by the compiled servlet until the server is restarted or the JSP changes."
            ]
        }, {
            type: "heading",
            level: 2,
            text: "JSP Configuration via web.xml",
            anchor: "jsp-web-xml"
        },
        {
            type: "paragraph",
            text: "The `web.xml` file in the `WEB-INF` directory is used to configure JSP behavior in a web application. It allows setting welcome files, error pages, MIME types, session timeout, and security constraints."
        },
        {
            type: "heading",
            level: 3,
            text: "Mapping .jsp Pages as Welcome Files"
        },
        {
            type: "code",
            language: "xml",
            code: `<welcome-file-list>
  <welcome-file>index.jsp</welcome-file>
</welcome-file-list>`
        },
        {
            type: "paragraph",
            text: "This ensures that `index.jsp` is loaded automatically when the user accesses the root of the web application."
        },
        {
            type: "heading",
            level: 3,
            text: "Error Page Mapping"
        },
        {
            type: "code",
            language: "xml",
            code: `<error-page>
  <error-code>404</error-code>
  <location>/error404.jsp</location>
</error-page>`
        },
        {
            type: "paragraph",
            text: "Custom error pages can be defined to improve user experience during HTTP errors like 404 or 500."
        },
        {
            type: "heading",
            level: 3,
            text: "Additional Configuration Options"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<mime-mapping>` – Defines file extensions and content types (e.g., .pdf, .json).",
                "`<session-config>` – Specifies session timeout in minutes.",
                "`<security-constraint>` – Restricts access to certain JSP pages based on user roles.",
                "`<context-param>` – Defines application-wide configuration parameters used across servlets and JSPs."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "JSP Syntax Elements",
            anchor: "jsp-syntax-elements"
        },
        {
            type: "paragraph",
            text: "JSP supports a variety of syntax elements to control behavior, import libraries, and embed Java logic directly within HTML."
        },
        {
            type: "heading",
            level: 3,
            text: "a. Directives"
        },
        {
            type: "paragraph",
            text: "Directives provide global information about the JSP page to the container. They control page properties, include static files, and define tag libraries."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Page Directive:** Sets attributes like language and content type."
            ]
        },
        {
            type: "code",
            language: "jsp",
            code: `<%@ page language="java" contentType="text/html" %>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Include Directive:** Includes the content of another file during translation time."
            ]
        },
        {
            type: "code",
            language: "jsp",
            code: `<%@ include file="header.jsp" %>`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Taglib Directive:** Declares and maps tag libraries like JSTL to a prefix."
            ]
        },
        {
            type: "code",
            language: "jsp",
            code: `<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>`
        },
        {
            type: "heading",
            level: 3,
            text: "b. Scriptlet Elements"
        },
        {
            type: "paragraph",
            text: "Scriptlets allow Java code to be embedded directly into a JSP page. These should be used sparingly as they mix business logic with presentation."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Scriptlets (`<% %>`):** Execute Java code during request handling.",
                "**Declarations (`<%! %>`):** Declare class-level variables or methods.",
                "**Expressions (`<%= %>`):** Output the result of a Java expression."
            ]
        },
        {
            type: "code",
            language: "jsp",
            code:
                `<% int count = 5; %>
<%! private int total = 0; %>
<p>The count is: <%= count %></p>`
        }
        , {
            type: "heading",
            level: 2,
            text: "Implicit Objects in JSP",
            anchor: "jsp-implicit-objects"
        },
        {
            type: "paragraph",
            text: "JSP provides a set of predefined implicit objects that simplify access to request, response, session, and application-level data. These objects are automatically available in every JSP page without needing to declare them."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**request** – Instance of `HttpServletRequest`; provides access to form data, request headers, etc.",
                "**response** – Instance of `HttpServletResponse`; used to set content type, send redirects, and manage output.",
                "**session** – Represents the `HttpSession`; used to store user-specific data across multiple requests.",
                "**application** – Instance of `ServletContext`; used for sharing data across the entire application.",
                "**out** – Used to send content to the client (an instance of `JspWriter`).",
                "**config** – Servlet configuration object, an instance of `ServletConfig`.",
                "**page** – Refers to the current JSP page instance (like `this` in Java).",
                "**pageContext** – Provides access to all the namespaces associated with a JSP page.",
                "**exception** – Only available in error pages; provides exception object details."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "Form Handling and Request Parameters",
            anchor: "jsp-form-handling"
        },
        {
            type: "paragraph",
            text: "JSP allows you to handle form submissions and retrieve data sent by users via HTTP GET or POST requests using the `request` implicit object."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Create HTML forms within JSP pages using standard HTML `<form>` tags.",
                "Set the `action` attribute to the target JSP or servlet.",
                "Use `method=\"post\"` or `method=\"get\"` to specify how the form submits data."
            ]
        },
        {
            type: "code",
            language: "html",
            code: `<form action="submit.jsp" method="post">
  <label>Username:</label>
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>`
        },
        {
            type: "paragraph",
            text: "To access form data in the receiving JSP page, use the `request.getParameter()` method:"
        },
        {
            type: "code",
            language: "jsp",
            code: `<p>Welcome, <%= request.getParameter("username") %>!</p>`
        }
        , {
            type: "heading",
            level: 2,
            text: "JSP Actions (XML-style tags)",
            anchor: "jsp-actions"
        },
        {
            type: "paragraph",
            text: "JSP actions are special XML-style tags that encapsulate dynamic behavior and allow interaction with JavaBeans, forwarding requests, and including resources at runtime."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "<jsp:include page=\"...\" /> – Dynamically includes another resource at request time.",
                "<jsp:forward page=\"...\" /> – Forwards the request to another resource.",
                "<jsp:param name=\"...\" value=\"...\" /> – Adds parameters to include or forward requests.",
                "<jsp:useBean> – Instantiates or references a JavaBean.",
                "<jsp:setProperty> – Sets a property on a JavaBean.",
                "<jsp:getProperty> – Retrieves a property value from a JavaBean."
            ]
        },
        {
            type: "paragraph",
            text: "Example of working with JavaBeans in JSP:"
        },
        {
            type: "code",
            language: "jsp",
            code: `<jsp:useBean id="user" class="com.example.User" scope="session" />
<jsp:setProperty name="user" property="name" value="John" />
<p>Hello, <jsp:getProperty name="user" property="name" /></p>`
        }
        , {
            type: "heading",
            level: 2,
            text: "Expression Language (EL)",
            anchor: "expression-language"
        },
        {
            type: "paragraph",
            text: "Expression Language (EL) simplifies access to application data stored in JavaBeans components, request/session attributes, and implicit objects. It allows you to dynamically output values without using scriptlets."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Access scoped variables directly: `${param.name}`, `${sessionScope.user}`, `${applicationScope.count}`",
                "Use dot notation for property access: `${user.name}` is equivalent to `user.getName()`",
                "Use bracket notation for dynamic or non-standard names: `${param['user-name']}`"
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "EL Implicit Objects",
            anchor: "el-implicit-objects"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`param` – Single request parameter: `${param.username}`",
                "`paramValues` – Multiple values of a request parameter: `${paramValues.hobby[0]}`",
                "`header` – HTTP request headers: `${header['User-Agent']}`",
                "`cookie` – Cookies by name: `${cookie.userId.value}`",
                "`initParam` – Application-wide init params: `${initParam.appName}`",
                "`pageScope`, `requestScope`, `sessionScope`, `applicationScope` – Access variables in specific scopes"
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "JavaBeans in JSP",
            anchor: "javabeans-jsp"
        },
        {
            type: "paragraph",
            text: "JavaBeans are reusable Java classes (POJOs) that follow specific conventions and are used to encapsulate data in JSP pages. They are often bound to the JSP page using `<jsp:useBean>`."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Must have a **no-argument constructor**.",
                "Should have **getter and setter** methods for all properties (e.g., `getName()`, `setName(String name)`).",
                "Should be **serializable** (optional but recommended for session persistence)."
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Using <jsp:useBean> to Bind Beans",
            anchor: "jsp-usebean"
        },
        {
            type: "code",
            language: "jsp",
            code: `<jsp:useBean id="user" class="com.example.User" scope="session" />
<jsp:setProperty name="user" property="name" value="John" />
<jsp:getProperty name="user" property="name" />`
        },
        {
            type: "paragraph",
            text: "`<jsp:useBean>` is used to create or locate an existing bean instance based on the scope provided. If it doesn’t exist, it's created."
        },
        {
            type: "heading",
            level: 3,
            text: "Scopes for JavaBeans",
            anchor: "javabean-scopes"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**page** – Default scope, valid only for the current page.",
                "**request** – Lives for the duration of a single HTTP request.",
                "**session** – Persists across multiple requests from the same client.",
                "**application** – Shared across the entire application context."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "JSTL (JSP Standard Tag Library)",
            anchor: "jstl"
        },
        {
            type: "paragraph",
            text: "JSTL provides a set of standard tags for common JSP tasks such as iteration, conditionals, internationalization, and string manipulation. It is declared using the `<%@ taglib %>` directive and complements XML-based JSP configuration."
        },
        {
            type: "heading",
            level: 3,
            text: "a. JSTL Core Tags (`c:`)",
            anchor: "jstl-core"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<c:set>` – Assigns values to variables or bean properties",
                "`<c:if>` – Executes conditional logic",
                "`<c:choose>`, `<c:when>`, `<c:otherwise>` – Multi-branch logic (similar to switch-case)",
                "`<c:forEach>` – Iterates over arrays, collections, or ranges",
                "`<c:remove>` – Removes a scoped variable",
                "`<c:catch>` – Catches exceptions for error handling"
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "b. JSTL Formatting Tags (`fmt:`)",
            anchor: "jstl-formatting"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<fmt:formatDate>`, `<fmt:formatNumber>` – Formats dates and numbers",
                "`<fmt:bundle>`, `<fmt:message>` – Loads and displays localized messages",
                "**Supports internationalization (i18n)** using message bundles and locale settings"
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "c. JSTL Functions (`fn:`)",
            anchor: "jstl-functions"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`fn:contains` – Checks if one string contains another",
                "`fn:startsWith`, `fn:endsWith` – Checks prefixes or suffixes",
                "`fn:length` – Returns the length of a collection or string",
                "`fn:toUpperCase`, `fn:toLowerCase` – Changes case of strings"
            ]
        },
        {
            type: "paragraph",
            text: "To use JSTL in your JSP pages, add the following taglib directive:"
        },
        {
            type: "code",
            language: "jsp",
            code: `<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>`
        }
        , {
            type: "heading",
            level: 2,
            text: "Includes and Reuse",
            anchor: "jsp-includes"
        },
        {
            type: "paragraph",
            text: "JSP supports two types of includes: static and dynamic. Includes help with modularizing views by reusing common components like headers, footers, or navigation menus."
        },
        {
            type: "heading",
            level: 3,
            text: "Static Include",
            anchor: "static-include"
        },
        {
            type: "paragraph",
            text: "Static include is handled at translation time. The content of the included file is merged into the including JSP before it is compiled into a servlet."
        },
        {
            type: "code",
            language: "jsp",
            code: `<%@ include file="header.jsp" %>`
        },
        {
            type: "heading",
            level: 3,
            text: "Dynamic Include",
            anchor: "dynamic-include"
        },
        {
            type: "paragraph",
            text: "Dynamic include is handled at request time. It includes the response generated by the target page into the current page dynamically during execution."
        },
        {
            type: "code",
            language: "jsp",
            code: `<jsp:include page="footer.jsp" />`
        }
        , {
            type: "heading",
            level: 2,
            text: "Error Handling in JSP",
            anchor: "jsp-error-handling"
        },
        {
            type: "paragraph",
            text: "JSP supports both page-level and application-level error handling to manage exceptions and user-friendly error pages."
        },
        {
            type: "heading",
            level: 3,
            text: "Page-Level Error Handling",
            anchor: "jsp-error-page-level"
        },
        {
            type: "paragraph",
            text: "You can specify an error page for a specific JSP using the `errorPage` attribute. The target error page must set `isErrorPage=\"true\"`."
        },
        {
            type: "code",
            language: "jsp",
            code: `<%@ page errorPage="error.jsp" %> <!-- on main page -->
<%@ page isErrorPage="true" %> <!-- on error.jsp -->`
        },
        {
            type: "heading",
            level: 3,
            text: "Application-Level Error Mapping (web.xml)",
            anchor: "jsp-error-webxml"
        },
        {
            type: "paragraph",
            text: "You can define global error pages in `web.xml` to handle specific HTTP error codes or Java exceptions."
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
  <location>/generalError.jsp</location>
</error-page>`
        }
        , {
            type: "heading",
            level: 2,
            text: "Session and Cookie Management",
            anchor: "jsp-session-cookie"
        },
        {
            type: "paragraph",
            text: "Managing user sessions and cookies is a crucial part of stateful web applications. JSP provides built-in support for both session and cookie handling."
        },
        {
            type: "heading",
            level: 3,
            text: "Session Management",
            anchor: "jsp-session-management"
        },
        {
            type: "paragraph",
            text: "JSP uses the `HttpSession` object to maintain state between client requests."
        },
        {
            type: "code",
            language: "java",
            code: `// Store data in session
session.setAttribute("username", "john");

// Retrieve data from session
String user = (String) session.getAttribute("username");`
        },
        {
            type: "heading",
            level: 3,
            text: "Cookie Management",
            anchor: "jsp-cookie-management"
        },
        {
            type: "paragraph",
            text: "Cookies allow you to store small pieces of data on the client side. JSP can create, read, and manipulate cookies using the `Cookie` class."
        },
        {
            type: "code",
            language: "java",
            code: `// Add cookie
Cookie cookie = new Cookie("user", "john");
cookie.setMaxAge(3600); // 1 hour
response.addCookie(cookie);

// Read cookies
Cookie[] cookies = request.getCookies();
if (cookies != null) {
  for (Cookie c : cookies) {
    if ("user".equals(c.getName())) {
      out.println("User: " + c.getValue());
    }
  }
}`
        }
        , {
            type: "heading",
            level: 2,
            text: "Custom Tags (Tag Libraries)",
            anchor: "jsp-custom-tags"
        },
        {
            type: "paragraph",
            text: "Custom tags in JSP allow you to encapsulate reusable functionality into tag handlers, defined through Tag Library Descriptor (TLD) files. These tags help keep JSP pages clean and modular."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Useful for encapsulating reusable UI logic and reducing scriptlet usage.",
                "Tags are declared in `.tld` files and can be packaged in JARs.",
                "Custom tag logic is handled by Java classes that implement `TagSupport` or `SimpleTagSupport`."
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Tag Library Declaration (TLD File)",
            anchor: "tld-file"
        },
        {
            type: "code",
            language: "xml",
            code: `<taglib xmlns="http://java.sun.com/xml/ns/javaee"
        version="2.1">
  <tlib-version>1.0</tlib-version>
  <short-name>my</short-name>
  <uri>http://example.com/mytags</uri>

  <tag>
    <name>hello</name>
    <tag-class>com.example.tags.HelloTag</tag-class>
    <body-content>empty</body-content>
  </tag>
</taglib>`
        },
        {
            type: "heading",
            level: 3,
            text: "Using the Custom Tag in JSP",
            anchor: "using-custom-tag"
        },
        {
            type: "code",
            language: "jsp",
            code: `<%@ taglib uri="http://example.com/mytags" prefix="my" %>
<my:hello />`
        },
        {
            type: "paragraph",
            text: "In the example above, the custom tag `<my:hello />` is mapped via the TLD file and implemented in a corresponding tag handler class."
        }
        , {
            type: "heading",
            level: 2,
            text: "Forwarding and Redirection",
            anchor: "jsp-forward-redirect"
        },
        {
            type: "paragraph",
            text: "JSP allows forwarding and redirection of requests to other pages or resources. Forwarding happens on the server side, while redirection instructs the browser to initiate a new request."
        },
        {
            type: "heading",
            level: 3,
            text: "Using <jsp:forward>",
            anchor: "jsp-forward"
        },
        {
            type: "code",
            language: "jsp",
            code: `<jsp:forward page="nextPage.jsp" />`
        },
        {
            type: "paragraph",
            text: "This forwards the request to `nextPage.jsp` on the server without notifying the browser. The URL remains unchanged, and request data is preserved."
        },
        {
            type: "heading",
            level: 3,
            text: "Using response.sendRedirect() in Scriptlet",
            anchor: "jsp-redirect"
        },
        {
            type: "code",
            language: "jsp",
            code: `<%
  response.sendRedirect("home.jsp");
%>`
        },
        {
            type: "paragraph",
            text: "This performs a client-side redirect. The browser is instructed to send a new request to `home.jsp`, and the URL changes. Original request data is lost unless passed as query parameters."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Forward:** Server-side, internal transfer, retains request attributes.",
                "**Redirect:** Client-side, new request, URL changes, no shared attributes."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "MVC with JSP + Servlet",
            anchor: "mvc-jsp-servlet"
        },
        {
            type: "paragraph",
            text: "JSP and Servlets work together in the Model-View-Controller (MVC) design pattern. This pattern helps separate concerns and organize code efficiently in Java web applications."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**JSP (View):** Responsible for presenting data to the user. Contains HTML and display logic.",
                "**Servlet (Controller):** Handles HTTP requests, processes input, and decides the next view.",
                "**JavaBeans (Model):** Encapsulates business logic and data used by the application."
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Forwarding with RequestDispatcher",
            anchor: "mvc-forward"
        },
        {
            type: "code",
            language: "java",
            code: `RequestDispatcher rd = request.getRequestDispatcher("view.jsp");
rd.forward(request, response);`
        },
        {
            type: "paragraph",
            text: "The Servlet forwards the request to a JSP page after processing. The JSP displays the data."
        },
        {
            type: "heading",
            level: 3,
            text: "Sharing Data Using request.setAttribute()",
            anchor: "mvc-data-sharing"
        },
        {
            type: "code",
            language: "java",
            code: `User user = new User("John", "Doe");
request.setAttribute("userData", user);`
        },
        {
            type: "paragraph",
            text: "Data is set in the request scope by the controller and accessed in the JSP using Expression Language:"
        },
        {
            type: "code",
            language: "jsp",
            code: `${userData.firstName} ${userData.lastName}`
        }
        , {
            type: "heading",
            level: 2,
            text: "Best Practices (XML-Focused)",
            anchor: "jsp-best-practices"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Avoid using Java code (`<% ... %>`) in views:** Mixing Java code in JSP makes maintenance harder and violates separation of concerns.",
                "**Use JSTL and EL where possible:** These simplify logic in JSP and make pages cleaner and more readable.",
                "**Centralize routing with Servlets:** Handle all request routing in Servlets and forward to JSP for rendering.",
                "**Use separate folders:** Organize files clearly, e.g., `jsp/` for pages, `WEB-INF/` for config, and `resources/` for static assets.",
                "**Keep logic in Java classes (Servlet/Bean), not JSP:** Maintain clean architecture by keeping business logic out of view templates."
            ]
        }

    ],
    summary: {
        keyPoints: [
            "JSP is a server-side technology that mixes HTML with Java to create dynamic web content.",
            "JSPs are converted to servlets by the server at runtime.",
            "It simplifies page creation for developers familiar with HTML.",
            "JSP lifecycle consists of translation, compilation, initialization, execution, and destruction.",
            "JSP is best used for the view layer, while servlets handle business logic."
        ]
    },
    nextSteps: [
        {
            topicId: "jsp-syntax-elements",
            reason: "Learn about JSP scripting elements like declarations, scriptlets, and expressions."
        },
        {
            topicId: "jsp-directives-and-actions",
            reason: "Understand how to use directives and standard actions for controlling page behavior."
        }
    ]
};
