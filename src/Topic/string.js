// topics/java-strings.js

export default {
    meta: {
        title: "Java Strings – Complete Theory & Important Concepts",
        description: "Comprehensive guide to String handling in Java including immutability, memory, comparison, and methods.",
        category: "programming",
        subcategory: "java",
        difficulty: "beginner",
        duration: 25,
        keywords: ["java strings", "string class", "string pool", "immutability", "string methods"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "What is a String in Java?",
            anchor: "what-is-string"
        },
        {
            type: "paragraph",
            text: "In Java, a String is a sequence of characters. It is represented by the `String` class in the `java.lang` package. Strings are objects and are immutable, meaning once a String object is created, it cannot be changed."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "String is a class, not a primitive type.",
                "Strings are immutable – their content cannot be changed after creation.",
                "String literals are stored in a special memory area called the String pool."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "String Creation Methods",
            anchor: "string-creation"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                `String str1 = "Hello"; // uses string pool`,
                `String str2 = new String("Hello"); // creates new object in heap`
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "String Immutability",
            anchor: "string-immutability"
        },
        {
            type: "paragraph",
            text: "Any operation on a String (e.g., concatenation, replace) creates a new String object because Strings in Java are immutable. This behavior helps with memory efficiency and thread safety."
        },
        {
            type: "heading",
            level: 2,
            text: "Memory: String Pool",
            anchor: "string-pool"
        },
        {
            type: "paragraph",
            text: "Java stores string literals in a special memory area called the string pool. This avoids creating duplicate string objects and improves memory usage."
        },
        {
            type: "code",
            language: "java",
            code: `String a = "Java";
String b = "Java";
System.out.println(a == b); // true (same reference from pool)

String c = new String("Java");
System.out.println(a == c); // false (different object in heap)`
        },
        {
            type: "heading",
            level: 2,
            text: "Common String Methods",
            anchor: "string-methods"
        },
        {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
                ["length()", "Returns the number of characters in the string"],
                ["charAt(int index)", "Returns character at given index"],
                ["substring(int beginIndex, int endIndex)", "Returns substring"],
                ["contains(CharSequence)", "Checks if sequence is present"],
                ["equals(Object)", "Compares string content"],
                ["equalsIgnoreCase(String)", "Compares ignoring case"],
                ["compareTo(String)", "Lexicographical comparison"],
                ["indexOf(String)", "Returns index of first match"],
                ["lastIndexOf(String)", "Returns last match index"],
                ["toUpperCase(), toLowerCase()", "Case conversion"],
                ["trim()", "Removes leading/trailing spaces"],
                ["replace()", "Replaces characters or substrings"]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "String Comparison: == vs equals()",
            anchor: "string-comparison"
        },
        {
            type: "paragraph",
            text: "`==` checks for reference equality (same object), while `equals()` checks for content equality."
        },
        {
            type: "code",
            language: "java",
            code: `String x = "abc";
String y = "abc";
String z = new String("abc");

System.out.println(x == y); // true (same pool reference)
System.out.println(x == z); // false (different object)
System.out.println(x.equals(z)); // true (same content)`
        },
        {
            type: "heading",
            level: 2,
            text: "StringBuilder and StringBuffer",
            anchor: "stringbuilder-stringbuffer"
        },
        {
            type: "paragraph",
            text: "Since Strings are immutable, use `StringBuilder` (non-thread-safe) or `StringBuffer` (thread-safe) for frequent modifications."
        },
        {
            type: "table",
            headers: ["Class", "Thread Safe", "Use Case"],
            rows: [
                ["String", "Yes (immutable)", "Fixed content, safe for multi-threaded use"],
                ["StringBuilder", "No", "Fast for single-threaded string operations"],
                ["StringBuffer", "Yes", "Safe for multi-threaded string modifications"]
            ]
        }, {
            type: "heading",
            level: 2,
            text: "String Creation",
            anchor: "string-creation"
        },
        {
            type: "paragraph",
            text: "In Java, there are two main ways to create strings: using string literals and using the `new` keyword. Each method behaves differently in memory."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Using string literal** (stored in String Pool):"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `String s1 = "hello";`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Using `new` keyword** (creates a new object in heap):"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `String s2 = new String("hello");`
        },
        {
            type: "paragraph",
            text: "String literals are pooled to save memory, while `new String()` always creates a new object even if the value already exists in the string pool."
        }, {
            type: "heading",
            level: 2,
            text: "String Immutability",
            anchor: "string-immutability"
        },
        {
            type: "paragraph",
            text: "In Java, strings are immutable, meaning once a `String` object is created, its value cannot be changed. Any operation that appears to modify a string actually creates a new `String` object."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "You cannot modify the contents of a `String` once it is created.",
                "All string operations such as `concat()`, `substring()`, or `replace()` return a new string.",
                "Immutability ensures thread safety and makes strings suitable for use as keys in maps."
            ]
        },
        {
            type: "paragraph",
            text: "Under the hood:"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Before Java 9, strings internally used a `char[]` array.",
                "Since Java 9, the internal representation has been optimized to use a `byte[]` array with encoding metadata (Compact Strings feature)."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "String Pool (String Interning)",
            anchor: "string-pool"
        },
        {
            type: "paragraph",
            text: "Java maintains a special memory area called the String Pool where it stores unique string literals. This is done to optimize memory usage by reusing instances of identical strings."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "When a string literal is created, the JVM checks the pool.",
                "If the literal already exists, the same reference is returned.",
                "If not, a new string object is added to the pool."
            ]
        },
        {
            type: "paragraph",
            text: "You can explicitly add a string to the pool using the `intern()` method:"
        },
        {
            type: "code",
            language: "java",
            code: `String s = new String("Java").intern(); // Adds to pool if not already present`
        },
        {
            type: "paragraph",
            text: "This ensures that `s` refers to the pooled instance of the string \"Java\"."
        }
        , {
            type: "heading",
            level: 2,
            text: "String Comparison",
            anchor: "string-comparison"
        },
        {
            type: "paragraph",
            text: "Java provides different ways to compare String values. It's important to understand the difference between reference comparison and content comparison."
        },
        {
            type: "table",
            headers: ["Method", "Description", "Example"],
            rows: [
                ["==", "Compares memory reference (if both variables point to the same object)",
                    `String a = "hello";\nString b = "hello";\nSystem.out.println(a == b); // true (from String Pool)`],
                [".equals()", "Compares the actual content of strings",
                    `String a = new String("hello");\nString b = new String("hello");\nSystem.out.println(a.equals(b)); // true`],
                [".equalsIgnoreCase()", "Compares content while ignoring case",
                    `String a = "Java";\nString b = "java";\nSystem.out.println(a.equalsIgnoreCase(b)); // true`]
            ]
        },
        {
            type: "paragraph",
            text: "Use `.equals()` or `.equalsIgnoreCase()` for comparing string content. Avoid using `==` unless you want to check if two references point to the same object."
        }
        , {
            type: "heading",
            level: 2,
            text: "Important String Methods",
            anchor: "important-string-methods"
        },
        {
            type: "paragraph",
            text: "The String class in Java provides a wide variety of methods for manipulating and inspecting string values. Here's a list of the most commonly used methods:"
        },
        {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
                ["length()", "Returns the length (number of characters) in the string"],
                ["charAt(int index)", "Returns the character at the specified index"],
                ["substring(int begin)", "Returns a substring starting from the given index to the end"],
                ["substring(int begin, int end)", "Returns a substring between the given start (inclusive) and end (exclusive) indices"],
                ["contains(String)", "Checks if the string contains the given substring"],
                ["indexOf(char/str)", "Returns the index of the first occurrence of the given character or substring"],
                ["lastIndexOf(char/str)", "Returns the index of the last occurrence of the given character or substring"],
                ["startsWith(String) / endsWith(String)", "Checks if the string starts or ends with the specified prefix or suffix"],
                ["toLowerCase() / toUpperCase()", "Converts the string to lowercase or uppercase"],
                ["trim()", "Removes leading and trailing whitespace"],
                ["replace(old, new)", "Replaces occurrences of a character or substring with another"],
                ["split(String regex)", "Splits the string into an array based on a regular expression"],
                ["isEmpty() / isBlank()", "Checks if the string is empty or only contains whitespace (Java 11+)"]
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "String Concatenation",
            anchor: "string-concatenation"
        },
        {
            type: "paragraph",
            text: "String concatenation is the process of joining two or more strings together. In Java, this can be done using the '+' operator or the concat() method. Behind the scenes, the compiler often optimizes string literals using a StringBuilder for performance."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Using + operator: Concatenates two or more strings directly.",
                "Using concat(): Appends one string to the end of another.",
                "Compiler optimization: For multiple string literals, the compiler internally uses StringBuilder for efficient concatenation."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `// Using + operator
String s = "Hello " + "World";

// Using concat() method
String s1 = "Hello ";
String s2 = "World";
String result = s1.concat(s2);`
        }
        , {
            type: "heading",
            level: 2,
            text: "StringBuilder vs StringBuffer",
            anchor: "stringbuilder-vs-stringbuffer"
        },
        {
            type: "paragraph",
            text: "Both StringBuilder and StringBuffer are mutable classes used for manipulating strings. However, they differ in terms of synchronization and performance."
        },
        {
            type: "table",
            headers: ["Feature", "StringBuilder", "StringBuffer"],
            rows: [
                ["Mutability", "Mutable", "Mutable"],
                ["Thread-safe", "❌ No", "✅ Yes (synchronized)"],
                ["Performance", "Faster", "Slower"],
                ["Use-case", "Single-threaded apps", "Multi-threaded apps"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `// Example using StringBuilder
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb);  // Output: Hello World

// Example using StringBuffer
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" Java");
System.out.println(sbf);  // Output: Hello Java`
        }
        , {
            type: "heading",
            level: 2,
            text: "Why Strings Are Immutable?",
            anchor: "why-strings-immutable"
        },
        {
            type: "paragraph",
            text: "In Java, strings are immutable, meaning their values cannot be changed once created. This immutability provides multiple advantages across security, performance, and memory optimization."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Security**: Strings are often used in sensitive operations like file paths, network connections, and class loading. Being immutable ensures their values can’t be changed maliciously.",
                "**Thread Safety**: Multiple threads can safely share string objects without needing synchronization.",
                "**String Pooling**: Immutable strings can be reused from the String Pool, saving memory and improving performance.",
                "**Caching of hashCode**: Since the string value doesn’t change, its hashCode can be cached, making it efficient for use in hash-based collections like HashMap."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "String Internals",
            anchor: "string-internals"
        },
        {
            type: "paragraph",
            text: "Java's String class has evolved over versions to enhance performance and memory efficiency. Internally, a String is a wrapper over a character array or byte array, depending on the Java version."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Java 8 and earlier**: Strings are backed by a `char[]` array internally.",
                "**Java 9 and later**: Introduced Compact Strings, where strings are backed by a `byte[]` array along with a `coder` field to support both Latin-1 and UTF-16 encodings. This reduces memory usage for Latin-1 content.",
                "**hashCode caching**: The `hashCode` of a string is computed once and cached for efficiency, making repeated hash-based lookups faster (e.g., in HashMap)."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "Conversions Involving Strings",
            anchor: "string-conversions"
        },
        {
            type: "paragraph",
            text: "Java provides several methods to convert between Strings and other data types such as arrays and numbers. These conversions are useful when working with user input, data processing, and formatting."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Convert String to char[]**: `char[] arr = str.toCharArray();`",
                "**Convert char[] to String**: `String s = new String(arr);`",
                "**Convert number to String**: `String.valueOf(123);`, or `Integer.toString(123);`",
                "**Convert String to number**: `Integer.parseInt(\"123\");`, `Double.parseDouble(\"3.14\");`"
            ]
        }, {
            type: "heading",
            level: 2,
            text: "String vs StringBuilder vs StringBuffer",
            anchor: "string-vs-builder-vs-buffer"
        },
        {
            type: "paragraph",
            text: "Java provides three main classes for working with text: String, StringBuilder, and StringBuffer. Each has its own characteristics regarding mutability, thread safety, and performance."
        },
        {
            type: "table",
            headers: ["Feature", "String", "StringBuilder", "StringBuffer"],
            rows: [
                ["Mutable", "❌", "✅", "✅"],
                ["Thread-safe", "❌", "❌", "✅"],
                ["Performance", "Slow", "Fast", "Slower"]
            ]
        },
        {
            type: "paragraph",
            text: "Use `String` when immutability is desired, `StringBuilder` for efficient string manipulation in single-threaded environments, and `StringBuffer` when working in multithreaded contexts requiring synchronization."
        }
,{
  type: "heading",
  level: 2,
  text: "String as Key in HashMap",
  anchor: "string-as-key-in-hashmap"
},
{
  type: "paragraph",
  text: "String is one of the most commonly used types as a key in HashMap. This is due to several characteristics that make it reliable and efficient for hashing and key-based lookups."
},
{
  type: "list",
  style: "unordered",
  items: [
    "**Immutable:** Once a String is created, its value can't be changed. This ensures the hashCode value remains constant during its lifetime in the map.",
    "**Overridden Methods:** The String class properly overrides `hashCode()` and `equals()` methods, which are essential for key comparison and hashing.",
    "**Consistent Behavior:** Since its behavior doesn't change, it avoids unpredictable map behavior and lookup failures.",
    "**Efficient Interning:** Frequently used strings can be interned, making them memory-efficient."
  ]
}


    ],
    summary: {
        keyPoints: [
            "Strings in Java are immutable and stored in a String pool when created using literals.",
            "Use `equals()` to compare content, not `==`.",
            "Use `StringBuilder` or `StringBuffer` when you need mutable string operations.",
            "Strings support a wide range of built-in methods for manipulation and querying."
        ]
    },
    nextSteps: [
        {
            topicId: "java-stringbuilder",
            reason: "Learn about mutable alternatives to String."
        },
        {
            topicId: "java-regular-expressions",
            reason: "Explore how to perform pattern matching on strings."
        }
    ]
};

