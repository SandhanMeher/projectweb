export default {
  meta: {
    title: "Strings in Java",
    description: "Complete guide to String manipulation and operations in Java",
    category: "programming",
    subcategory: "java",
    difficulty: "beginner",
    duration: 20,
    keywords: ["string", "text", "manipulation", "methods"]
  },
  content: [
    {
      type: "heading",
      level: 1,
      text: "String Fundamentals",
      anchor: "strings-intro"
    },
    {
      type: "paragraph",
      text: "Strings in Java are objects that represent sequences of characters. They are immutable - their values cannot be changed after creation."
    },
    {
      type: "code",
      language: "java",
      code: "// String creation\nString str1 = \"Hello\";\nString str2 = new String(\"World\");"
    },
    {
      type: "heading",
      level: 2,
      text: "Common String Methods",
      anchor: "string-methods"
    },
    {
      type: "table",
      headers: ["Method", "Description", "Example"],
      rows: [
        ["length()", "Returns string length", "\"hello\".length() → 5"],
        ["charAt(int)", "Returns character at index", "\"hello\".charAt(1) → 'e'"],
        ["substring(int, int)", "Extracts portion of string", "\"hello\".substring(1,3) → \"el\""],
        ["toUpperCase()", "Converts to uppercase", "\"hello\".toUpperCase() → \"HELLO\""],
        ["equals(String)", "Compares string content", "\"hello\".equals(\"HELLO\") → false"],
        ["contains(String)", "Checks for substring", "\"hello\".contains(\"ell\") → true"]
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "Always use equals() for string comparison, not == which checks object reference."
    },
    {
      type: "heading",
      level: 2,
      text: "String Concatenation",
      anchor: "string-concat"
    },
    {
      type: "paragraph",
      text: "Multiple ways to combine strings in Java:"
    },
    {
      type: "table",
      headers: ["Method", "Example", "Notes"],
      rows: [
        ["+ operator", "\"Hello\" + \" \" + \"World\"", "Simple but inefficient for multiple operations"],
        ["concat()", "\"Hello\".concat(\" World\")", "Similar to + operator"],
        ["StringBuilder", "new StringBuilder().append(\"Hello\").append(\" World\")", "Best for multiple concatenations"],
        ["String.join()", "String.join(\"-\", \"a\", \"b\", \"c\")", "Java 8+, good for joining collections"]
      ]
    },
    {
      type: "code",
      language: "java",
      code: "// Performance comparison\nString result = \"\";\nfor (int i = 0; i < 100; i++) {\n  result += i;  // Creates new string each time\n}\n\n// Better approach\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 100; i++) {\n  sb.append(i);  // Modifies same object\n}\nString betterResult = sb.toString();"
    }
  ],
  summary: {
    keyPoints: [
      "Strings are immutable in Java",
      "Use equals() for content comparison",
      "StringBuilder is preferred for multiple concatenations",
      "Many utility methods available for string manipulation"
    ],
    cheatSheet: {
      creation: "String s = \"text\"; or String s = new String(charArray);",
      comparison: "if (str1.equals(str2)) {...}",
      concatenation: "StringBuilder sb = new StringBuilder(); sb.append(str1);"
    }
  },
  nextSteps: [
    {
      topicId: "java-stringbuilder",
      reason: "Learn more about efficient string manipulation"
    }
  ]
};