export default {
    meta: {
        id: "java-exception-handling",
        title: "Exception Handling in Java",
        description: "Understanding exception handling, its purpose, types, and best practices in Java.",
        category: "programming",
        subcategory: "java",
        difficulty: "beginner",
        prerequisites: ["java-basic-syntax"],
        created: "2025-06-24",
        updated: "2025-06-24",
        duration: 30,
        keywords: ["exception", "try-catch", "error", "runtime", "java"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "What is Exception Handling?",
            anchor: "what-is-exception-handling"
        },
        {
            type: "paragraph",
            text: "Exception handling in Java is a robust mechanism used to handle runtime errors. It ensures that the normal flow of the program is maintained even when unexpected events occur."
        },
        {
            type: "alert",
            variant: "info",
            content: "Definition: Mechanism to detect, catch, and handle runtime problems, ensuring the application continues to run smoothly or fails predictably."
        },
        {
            type: "heading",
            level: 2,
            text: "Benefits of Exception Handling",
            anchor: "exception-benefits"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Graceful error handling – avoids abrupt program termination",
                "Improves resilience – can recover or log meaningful errors",
                "Cleaner code – separates business logic from error handling"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero!");
}`
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Exception handling is like an airbag in a car — it doesn't stop the crash, but it helps you recover safely."
        }, {
            type: "heading",
            level: 1,
            text: "Types of Exceptions",
            anchor: "types-of-exceptions"
        },
        {
            type: "heading",
            level: 2,
            text: "Checked Exceptions",
            anchor: "checked-exceptions"
        },
        {
            type: "paragraph",
            text: "Checked exceptions are exceptions that the compiler checks at compile time. If not handled or declared with `throws`, the code will not compile. These exceptions usually deal with external resources like files or databases."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Must be either caught using `try-catch` or declared using `throws`",
                "Used for recoverable conditions"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public void readFile(String path) throws IOException {
  FileReader reader = new FileReader(path);
}`
        },
        {
            type: "table",
            headers: ["Exception", "Description"],
            rows: [
                ["IOException", "Signals an I/O operation failure"],
                ["SQLException", "Indicates issues interacting with a database"],
                ["FileNotFoundException", "File not found when attempting to read"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Trick: Think of 'checked' exceptions as the compiler’s way of checking that you've planned for real-world risks like file loss or network failure."
        }
        , {
            type: "heading",
            level: 2,
            text: "Unchecked Exceptions (RuntimeExceptions)",
            anchor: "unchecked-exceptions"
        },
        {
            type: "paragraph",
            text: "Unchecked exceptions are not checked at compile time. These are typically programming errors such as logic mistakes or improper use of an API. The compiler does not force you to handle them, but they can still cause program failure if not addressed."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Checked at runtime — compiler does not require handling",
                "Indicates bugs like null access, bad casting, or math errors",
                "Extends `RuntimeException`"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `String name = null;
System.out.println(name.length());  // Throws NullPointerException`
        },
        {
            type: "table",
            headers: ["Exception", "Cause"],
            rows: [
                ["NullPointerException", "Accessing a method or field on a null object"],
                ["ArrayIndexOutOfBoundsException", "Accessing array index beyond its range"],
                ["ArithmeticException", "Illegal math operation like division by zero"]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Tip: Unchecked ≠ unimportant! Always validate inputs and use defensive programming to prevent them."
        }
        , {
            type: "heading",
            level: 2,
            text: "Errors",
            anchor: "errors"
        },
        {
            type: "paragraph",
            text: "Errors are serious problems that a typical application should not try to catch. These are usually caused by the JVM or system-level issues and are not meant to be handled by application code."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Represent critical conditions like system crashes or resource exhaustion",
                "Extend the `Error` class, not `Exception`",
                "Not recommended to catch or recover from in normal code"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `int[] arr = new int[Integer.MAX_VALUE];  // Might cause OutOfMemoryError`
        },
        {
            type: "table",
            headers: ["Error", "Description"],
            rows: [
                ["OutOfMemoryError", "JVM runs out of memory (heap space exhausted)"],
                ["StackOverflowError", "Infinite recursion fills the stack"],
                ["NoClassDefFoundError", "Class definition not found at runtime"]
            ]
        },
        {
            type: "alert",
            variant: "danger",
            content: "🔥 Errors indicate catastrophic issues – like your computer running out of memory or a class not being found. They are almost never recoverable."
        }
        , {
            type: "heading",
            level: 1,
            text: "Java Exception Class Hierarchy",
            anchor: "exception-hierarchy"
        },
        {
            type: "paragraph",
            text: "All exceptions and errors in Java inherit from the `Throwable` class. This class is the root of the exception hierarchy and divides into two major branches: `Exception` and `Error`."
        },
        {
            type: "code",
            language: "text",
            code: `Throwable
├── Exception
│   ├── Checked Exceptions
│   │   ├── IOException
│   │   └── SQLException
│   └── RuntimeException
│       ├── NullPointerException
│       ├── ArithmeticException
│       └── IndexOutOfBoundsException
└── Error
    ├── OutOfMemoryError
    ├── StackOverflowError
    └── NoClassDefFoundError`
        },
        {
            type: "alert",
            variant: "info",
            content: "🧠 Trick: All exceptions are `Throwable`, but not all `Throwable` types are meant to be handled! Errors should typically be avoided, not caught."
        }
        , {
            type: "heading",
            level: 1,
            text: "Core Keywords in Exception Handling",
            anchor: "exception-core-keywords"
        },
        {
            type: "paragraph",
            text: "Java provides five key keywords for handling exceptions. Each plays a specific role in managing errors gracefully and maintaining program flow."
        },
        {
            type: "table",
            headers: ["Keyword", "Purpose", "Example"],
            rows: [
                [
                    "`try`",
                    "Wraps code that might throw an exception",
                    `try {
  int result = 10 / 0;
}`
                ],
                [
                    "`catch`",
                    "Handles the exception thrown in try block",
                    `catch (ArithmeticException e) {
  System.out.println("Cannot divide by zero!");
}`
                ],
                [
                    "`finally`",
                    "Executes code regardless of exception (cleanup block)",
                    `finally {
  System.out.println("Cleanup done");
}`
                ],
                [
                    "`throw`",
                    "Used to explicitly throw an exception",
                    `throw new IllegalArgumentException("Invalid input");`
                ],
                [
                    "`throws`",
                    "Declares that a method may throw one or more exceptions",
                    `public void readFile() throws IOException {
  // risky file logic
}`
                ]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Remember: `throw` is used *inside* the method to actually throw the exception, while `throws` is used in the method signature to declare it."
        }
        , {
            type: "heading",
            level: 1,
            text: "try-catch-finally Syntax",
            anchor: "try-catch-finally-syntax"
        },
        {
            type: "paragraph",
            text: "`try-catch-finally` is the standard structure for handling exceptions in Java. It helps you separate normal logic from error-handling logic and ensures resource cleanup with `finally`."
        },
        {
            type: "code",
            language: "java",
            code: `try {
    // risky code
} catch (ExceptionType e) {
    // handle exception
} finally {
    // always executed, even if no exception or after return
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`try` – Wraps code that may throw an exception.",
                "`catch` – Handles the specific exception thrown.",
                "`finally` – Executes regardless of exception, commonly used for closing resources."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "🧹 Tip: Use `finally` to close files, connections, or streams — even if an exception is thrown or a return statement is hit."
        }
        , {
            type: "heading",
            level: 1,
            text: "Multiple Catch Blocks",
            anchor: "multiple-catch-blocks"
        },
        {
            type: "paragraph",
            text: "Java allows you to define multiple catch blocks to handle different types of exceptions individually. This ensures specific handling logic for each exception type."
        },
        {
            type: "code",
            language: "java",
            code: `try {
    // some risky operations
} catch (IOException e) {
    System.out.println("File-related issue occurred");
} catch (SQLException e) {
    System.out.println("Database error occurred");
}`
        },
        {
            type: "heading",
            level: 2,
            text: "Multi-Catch (Java 7+)",
            anchor: "multi-catch"
        },
        {
            type: "paragraph",
            text: "Java 7 introduced multi-catch blocks, allowing a single catch block to handle multiple exception types using `|`."
        },
        {
            type: "code",
            language: "java",
            code: `try {
    // risky code
} catch (IOException | SQLException ex) {
    System.out.println("IO or SQL exception occurred");
}`
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Trick: Multi-catch reduces duplicate code when handling different exceptions the same way."
        }
        , {
            type: "heading",
            level: 1,
            text: "Exception Propagation",
            anchor: "exception-propagation"
        },
        {
            type: "paragraph",
            text: "In Java, if an exception is not caught in the current method, it is passed (or propagated) up the call stack to the previous method. This continues until it is caught or reaches the JVM, which will terminate the program if uncaught."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Useful for letting higher-level methods decide how to handle exceptions",
                "`throws` keyword in method signature indicates possible exception propagation"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public void readFile() throws IOException {
  FileReader fr = new FileReader("file.txt");  // may throw IOException
}

public void process() throws IOException {
  readFile();  // exception propagates here
}

public static void main(String[] args) {
  try {
    new MyClass().process();  // handle it at top level
  } catch (IOException e) {
    System.out.println("Handled IOException in main");
  }
}`
        },
        {
            type: "alert",
            variant: "info",
            content: "🧠 Real-life analogy: Exception propagation is like escalating a complaint up the management chain — whoever is willing and able to handle it, does so."
        }
        , {
            type: "heading",
            level: 1,
            text: "Throwing Exceptions",
            anchor: "throwing-exceptions"
        },
        {
            type: "paragraph",
            text: "In Java, exceptions can be thrown manually using the `throw` keyword. This is useful when you want to enforce certain conditions or report illegal usage within your code."
        },
        {
            type: "code",
            language: "java",
            code: `public void setAge(int age) {
  if (age < 0) {
    throw new IllegalArgumentException("Age cannot be negative");
  }
  this.age = age;
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Only instances of classes that extend `Throwable` can be thrown.",
                "`throw` is used to immediately terminate the current method and hand off control to the nearest matching catch block (if any)."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Tip: Use `throw` when business rules are violated — like passing negative age, null objects, or invalid states."
        }
        , {
            type: "heading",
            level: 1,
            text: "throws Clause",
            anchor: "throws-clause"
        },
        {
            type: "paragraph",
            text: "The `throws` clause is used in a method declaration to indicate that the method might throw one or more exceptions. It signals to the caller that they must handle or declare the exception."
        },
        {
            type: "code",
            language: "java",
            code: `public void readFile() throws IOException {
  FileReader fr = new FileReader("data.txt");
  // reading logic
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Used primarily with checked exceptions.",
                "Allows propagating the exception responsibility to the caller.",
                "Multiple exceptions can be declared, separated by commas."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public void processFile() throws IOException, SQLException {
  readFile();
  connectDatabase();
}`
        },
        {
            type: "alert",
            variant: "info",
            content: "🧠 Think of `throws` as a warning label — it tells the method caller: “I might throw something at you. Be ready!”"
        }
        , {
            type: "heading",
            level: 1,
            text: "finally Block",
            anchor: "finally-block"
        },
        {
            type: "paragraph",
            text: "The `finally` block in Java ensures that specific code is executed regardless of whether an exception is thrown or caught. It's most commonly used for cleanup operations like closing files or releasing resources."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Runs after the `try` and any matching `catch` blocks.",
                "Guaranteed to execute even if the method returns early.",
                "Not executed only if the JVM crashes or `System.exit()` is called."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public void process() {
  try {
    System.out.println("Inside try");
    return;
  } catch (Exception e) {
    System.out.println("Caught exception");
  } finally {
    System.out.println("Cleanup in finally");
  }
}

// Output:
// Inside try
// Cleanup in finally`
        },
        {
            type: "alert",
            variant: "info",
            content: "🧹 Use `finally` to close connections, streams, or free resources — it's your insurance for cleanup!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Custom Exceptions",
            anchor: "custom-exceptions"
        },
        {
            type: "paragraph",
            text: "In Java, you can create your own exception classes to represent application-specific error conditions. These custom exceptions help improve code readability and handle domain-specific problems more meaningfully."
        },
        {
            type: "code",
            language: "java",
            code: `class MyException extends Exception {
  public MyException(String msg) {
    super(msg);
  }
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Extend `Exception` for a checked custom exception.",
                "Extend `RuntimeException` for an unchecked custom exception.",
                "Custom exceptions can carry additional fields or logic as needed."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public void validateAge(int age) throws MyException {
  if (age < 18) {
    throw new MyException("User must be at least 18 years old.");
  }
}`
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Custom exceptions make error reporting more specific and user-friendly, especially in business-critical logic."
        }
        , {
            type: "heading",
            level: 1,
            text: "Common Built-in Exceptions",
            anchor: "common-built-in-exceptions"
        },
        {
            type: "paragraph",
            text: "Java provides several built-in exceptions to represent common runtime errors. Understanding them helps in both prevention and proper handling during development."
        },
        {
            type: "table",
            headers: ["Exception", "Cause"],
            rows: [
                ["NullPointerException", "Accessing methods or fields on a `null` reference"],
                ["ArrayIndexOutOfBoundsException", "Accessing an invalid index in an array"],
                ["ArithmeticException", "Dividing a number by zero (e.g., `10/0`)"],
                ["NumberFormatException", "Trying to parse an invalid string into a number"],
                ["ClassCastException", "Casting an object to an incompatible type"],
                ["IllegalArgumentException", "Passing an inappropriate or illegal argument to a method"]
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "🧠 Real-life analogy: Built-in exceptions are like system-generated warnings — they alert you when something goes against expected behavior."
        }
        , {
            type: "heading",
            level: 1,
            text: "Best Practices",
            anchor: "exception-best-practices"
        },
        {
            type: "paragraph",
            text: "Following best practices in exception handling leads to more maintainable, secure, and reliable code. Poor handling can hide bugs or create silent failures."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "✅ **Catch only necessary exceptions** – Handle what you can actually recover from.",
                "🚫 **Avoid empty catch blocks** – Silently swallowing exceptions makes debugging hard.",
                "⚠️ **Don’t catch `Exception` or `Throwable`** unless absolutely required – Be as specific as possible.",
                "📚 **Use custom or specific exceptions** – Makes error causes clearer and easier to track.",
                "🧹 **Always clean up** – Use `finally` or `try-with-resources` to release resources properly."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
  String line;
  while ((line = br.readLine()) != null) {
    System.out.println(line);
  }
} catch (IOException e) {
  System.out.println("Error reading file: " + e.getMessage());
}`},
        {
            type: "alert",
            variant: "info",
            content: "💡 Try-with-resources is preferred for managing file/database streams. It ensures resources are closed automatically."
        }
        , {
            type: "heading",
            level: 1,
            text: "try-with-resources (Java 7+)",
            anchor: "try-with-resources"
        },
        {
            type: "paragraph",
            text: "`try-with-resources` is a feature introduced in Java 7 that automatically closes resources like streams, readers, writers, or database connections. The resource must implement the `AutoCloseable` interface."
        },
        {
            type: "code",
            language: "java",
            code: `try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
  String line;
  while ((line = br.readLine()) != null) {
    System.out.println(line);
  }
} catch (IOException e) {
  System.out.println("Error reading file: " + e.getMessage());
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Closes the resource automatically after execution (no need for `finally`).",
                "Helps prevent memory leaks and resource exhaustion.",
                "Multiple resources can be declared in a single try block."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Any class that implements `AutoCloseable` or `Closeable` can be used in try-with-resources."
        }
        , {
            type: "heading",
            level: 1,
            text: "Exception vs Error vs RuntimeException",
            anchor: "exception-vs-error"
        },
        {
            type: "paragraph",
            text: "Java categorizes throwable issues into three major types: `Exception`, `Error`, and `RuntimeException`. Understanding the difference helps determine what needs to be handled and what indicates a system-level failure."
        },
        {
            type: "table",
            headers: ["Feature", "Exception", "Error", "RuntimeException"],
            rows: [
                ["Compile-time check", "Yes", "No", "No"],
                ["Can be handled", "Yes", "Rarely", "Yes"],
                ["Extends", "Exception", "Error", "Exception"]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Don’t try to handle `Error` types like `OutOfMemoryError` — they represent serious system problems that typically can't be recovered from."
        }
        , {
            type: "heading",
            level: 1,
            text: "Stack Trace",
            anchor: "stack-trace"
        },
        {
            type: "paragraph",
            text: "A stack trace provides a snapshot of the call stack at the point where an exception was thrown. It shows the method call hierarchy and helps identify the exact line and class where the error occurred."
        },
        {
            type: "code",
            language: "java",
            code: `try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  e.printStackTrace();
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`e.printStackTrace()` prints the exception name, message, and call hierarchy.",
                "Useful for debugging and logging unexpected exceptions.",
                "Best used during development or with proper logging frameworks in production."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "🧠 Think of a stack trace like a breadcrumb trail — it shows the path the program took before the exception hit."
        }
        , {
            type: "heading",
            level: 1,
            text: "Exception Chaining",
            anchor: "exception-chaining"
        },
        {
            type: "paragraph",
            text: "Exception chaining allows one exception to wrap another, preserving the original cause while providing additional context. It's useful when transforming low-level exceptions into high-level ones."
        },
        {
            type: "code",
            language: "java",
            code: `try {
  // some code that throws SQLException
} catch (SQLException ex) {
  throw new IOException("Failed to read from DB", ex);
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Helps trace the root cause while adding a custom message.",
                "Preserves both low-level and high-level exception details.",
                "Use `Throwable.getCause()` to retrieve the original exception."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "🔗 Exception chaining is like adding a label to a bubble-wrapped error — it keeps the root cause safe while giving more context."
        }
        , {
            type: "heading",
            level: 1,
            text: "Suppressed Exceptions (Java 7+)",
            anchor: "suppressed-exceptions"
        },
        {
            type: "paragraph",
            text: "Suppressed exceptions occur when multiple exceptions are thrown in a `try-with-resources` block — one in the `try` block and another while closing a resource. The secondary exceptions are suppressed and can be accessed via `getSuppressed()`."
        },
        {
            type: "code",
            language: "java",
            code: `try (MyResource res = new MyResource()) {
  res.doSomething();
} catch (Exception e) {
  for (Throwable t : e.getSuppressed()) {
    System.out.println("Suppressed: " + t);
  }
}`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Only available in `try-with-resources` blocks.",
                "`Throwable[] getSuppressed()` returns suppressed exceptions.",
                "Preserves all failure information that would otherwise be lost."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Suppressed exceptions are like side notes in a story — they weren’t the main error but still deserve attention!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Logging Exceptions",
            anchor: "logging-exceptions"
        },
        {
            type: "paragraph",
            text: "Instead of using `printStackTrace()` in production, it's best practice to log exceptions using a logging framework. This provides better control over output format, log levels, and destinations."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "✅ Use loggers like SLF4J, Log4j, or `java.util.logging`.",
                "📋 Log with meaningful messages alongside the exception.",
                "📁 Logs can be written to files, databases, or external systems.",
                "🚫 Avoid logging and re-throwing without purpose to reduce noise."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

private static final Logger logger = LoggerFactory.getLogger(MyClass.class);

try {
  riskyOperation();
} catch (IOException e) {
  logger.error("Failed to perform operation", e);
}`
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Logging helps trace issues post-deployment. Choose the appropriate log level: `error`, `warn`, `info`, `debug`, or `trace`."
        }
        , {
            type: "heading",
            level: 1,
            text: "Memory Trick",
            anchor: "exception-memory-trick"
        },
        {
            type: "paragraph",
            text: "To easily recall the five core keywords in Java exception handling, use the acronym:"
        },
        {
            type: "code",
            language: "text",
            code: `"T-C-F-T-T" → Try → Catch → Finally → Throw → Throws`
        },
        {
            type: "alert",
            variant: "info",
            content: "🦊 Memory Trick: “The Clever Fox Threw Things” helps you remember the exception handling flow and keywords!"
        }

    ],
    summary: {
        keyPoints: [
            "Java provides a structured way to handle runtime errors using try-catch-finally blocks.",
            "Exception handling improves application reliability and maintainability."
        ],
        cheatSheet: {
            basicSyntax: `
try {
  // code that might throw
} catch (ExceptionType e) {
  // handler
} finally {
  // always runs
}`
        }
    },
    nextSteps: [
        {
            topicId: "exception-types",
            reason: "Learn about checked and unchecked exceptions"
        },
        {
            topicId: "try-catch-finally",
            reason: "Understand how to use Java’s core error handling blocks"
        }
    ]
}
