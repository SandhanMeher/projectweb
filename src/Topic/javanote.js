export default{
  meta: {
    id: "java-output-questions-30",
    title: "30 Core Java Output Questions (Basic & Operators)",
    description: "Fundamental Java output questions covering basic concepts and operators",
    category: "programming",
    subcategory: "java",
    difficulty: "beginner",
    prerequisites: [],
    duration: 60,
    keywords: ["output", "basics", "operators", "type-conversion"]
  },
  content: [
    // ===== BASIC CONCEPTS (1-20) =====
    {
      type: "heading",
      level: 2,
      text: "1. Integer Division",
      anchor: "int-division"
    },
    {
      type: "code",
      language: "java",
      code: "System.out.println(5 / 2); // Output: 2"
    },
    {
      type: "paragraph",
      text: "When both operands are integers, Java performs integer division and truncates the decimal portion."
    },

    {
      type: "heading",
      level: 2,
      text: "2. Floating-Point Precision",
      anchor: "float-precision"
    },
    {
      type: "code",
      language: "java",
      code: "System.out.println(0.1 + 0.2 == 0.3); // Output: false"
    },
    {
      type: "paragraph",
      text: "Due to IEEE 754 floating-point representation, 0.1 + 0.2 actually equals approximately 0.30000000000000004."
    },

    {
      type: "heading",
      level: 2,
      text: "3. Post-increment vs Pre-increment",
      anchor: "increment-ops"
    },
    {
      type: "code",
      language: "java",
      code: `int x = 5;
System.out.println(x++); // Output: 5 (returns then increments)
System.out.println(++x); // Output: 7 (increments then returns)`
    },

    {
      type: "heading",
      level: 2,
      text: "4. Character Arithmetic",
      anchor: "char-arithmetic"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println('A' + 1);         // Output: 66
System.out.println((char)('A' + 1)); // Output: B`
    },
    {
      type: "paragraph",
      text: "Chars are promoted to int in arithmetic operations using their Unicode values (A=65)."
    },

    {
      type: "heading",
      level: 2,
      text: "5. String Concatenation Order",
      anchor: "string-concat"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println(10 + 20 + "A"); // Output: "30A"
System.out.println("A" + 10 + 20); // Output: "A1020"`
    },
    {
      type: "paragraph",
      text: "Operations evaluate left-to-right. Numbers add before string concatenation begins."
    },

    {
      type: "heading",
      level: 2,
      text: "6. Ternary Operator",
      anchor: "ternary-operator"
    },
    {
      type: "code",
      language: "java",
      code: `int x = 10;
System.out.println(x > 5 ? "Yes" : "No"); // Output: "Yes"`
    },

    {
      type: "heading",
      level: 2,
      text: "7. Assignment vs Equality",
      anchor: "assignment-equality"
    },
    {
      type: "code",
      language: "java",
      code: `int y = 5;
if (y == 10) {}  // Correct equality check
// if (y = 10) {} // Compilation error (assignment in if)`
    },

    {
      type: "heading",
      level: 2,
      text: "8. Type Promotion",
      anchor: "type-promotion"
    },
    {
      type: "code",
      language: "java",
      code: `byte b = 10;
byte c = b + 1; // Compile error (promoted to int)
int d = b + 1;  // Valid`
    },

    {
      type: "heading",
      level: 2,
      text: "9. Switch Fallthrough",
      anchor: "switch-fallthrough"
    },
    {
      type: "code",
      language: "java",
      code: `int day = 1;
switch (day) {
  case 1: System.out.println("Monday");
  case 2: System.out.println("Tuesday"); break;
}
// Output:
// Monday
// Tuesday`
    },

    {
      type: "heading",
      level: 2,
      text: "10. Loop Scope",
      anchor: "loop-scope"
    },
    {
      type: "code",
      language: "java",
      code: `for (int i = 0; i < 3; i++) {
  int x = i;
}
// System.out.println(x); // Error - x out of scope`
    },

    {
      type: "heading",
      level: 2,
      text: "11. Break/Continue",
      anchor: "break-continue"
    },
    {
      type: "code",
      language: "java",
      code: `for (int i = 0; i < 5; i++) {
  if (i == 2) continue;
  if (i == 4) break;
  System.out.println(i);
}
// Output: 0 1 3`
    },

    {
      type: "heading",
      level: 2,
      text: "12. Labeled Loops",
      anchor: "labeled-loops"
    },
    {
      type: "code",
      language: "java",
      code: `outer:
for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++) {
    if (i == 1) break outer;
    System.out.println(i+","+j);
  }
}
// Output: 0,0 0,1 0,2`
    },

    {
      type: "heading",
      level: 2,
      text: "13. Array Initialization",
      anchor: "array-init"
    },
    {
      type: "code",
      language: "java",
      code: `int[] arr1 = new int[3];       // All zeros
int[] arr2 = {1, 2, 3};          // Initialized
System.out.println(arr1[0]);     // Output: 0
System.out.println(arr2.length); // Output: 3`
    },

    {
      type: "heading",
      level: 2,
      text: "14. Varargs",
      anchor: "varargs"
    },
    {
      type: "code",
      language: "java",
      code: `void printAll(String... items) {
  System.out.println(items.length);
}
printAll("A", "B"); // Output: 2`
    },

    {
      type: "heading",
      level: 2,
      text: "15. Main Method Signature",
      anchor: "main-method"
    },
    {
      type: "code",
      language: "java",
      code: `public static void main(String[] args) {} // Valid
// public static void main(String args[]) {} // Also valid`
    },

    {
      type: "heading",
      level: 2,
      text: "16. Command-Line Args",
      anchor: "command-line-args"
    },
    {
      type: "code",
      language: "java",
      code: `// java MyProgram arg1 arg2
System.out.println(args[0]); // Output: "arg1"`
    },

    {
      type: "heading",
      level: 2,
      text: "17. System.out vs err",
      anchor: "out-vs-err"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println("Normal output");
System.err.println("Error output"); // Often appears in red`
    },

    {
      type: "heading",
      level: 2,
      text: "18. Static Imports",
      anchor: "static-imports"
    },
    {
      type: "code",
      language: "java",
      code: `import static java.lang.Math.PI;
System.out.println(PI); // No Math.PI needed`
    },

    {
      type: "heading",
      level: 2,
      text: "19. Comments",
      anchor: "comments"
    },
    {
      type: "code",
      language: "java",
      code: `// Single-line
/* Multi-line */
/** Javadoc */`
    },

    {
      type: "heading",
      level: 2,
      text: "20. Unicode Escapes",
      anchor: "unicode-escapes"
    },
    {
      type: "code",
      language: "java",
      code: `char omega = '\u03A9';
System.out.println(omega); // Output: Ω`
    },

    // ===== OPERATORS (21-30) =====
    {
      type: "heading",
      level: 2,
      text: "21. Short-Circuit Evaluation",
      anchor: "short-circuit"
    },
    {
      type: "code",
      language: "java",
      code: `int x = 5;
System.out.println(false && (x++ == 6)); // Output: false
System.out.println(x); // Output: 5 (x++ not evaluated)`
    },

    {
      type: "heading",
      level: 2,
      text: "22. Bitwise Operations",
      anchor: "bitwise-ops"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println(5 & 3);  // AND: 0101 & 0011 = 0001 (1)
System.out.println(5 | 3);  // OR: 0101 | 0011 = 0111 (7)
System.out.println(5 ^ 3);  // XOR: 0101 ^ 0011 = 0110 (6)`
    },

    {
      type: "heading",
      level: 2,
      text: "23. Shift Operators",
      anchor: "shift-ops"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println(8 >> 1);  // Right shift: 4 (8/2)
System.out.println(1 << 3);  // Left shift: 8 (1*2³)
System.out.println(-8 >>> 1); // Unsigned right shift`
    },

    {
      type: "heading",
      level: 2,
      text: "24. Compound Assignment",
      anchor: "compound-assign"
    },
    {
      type: "code",
      language: "java",
      code: `int x = 5;
x += 3;  // Equivalent to x = x + 3
System.out.println(x); // Output: 8`
    },

    {
      type: "heading",
      level: 2,
      text: "25. Operator Precedence",
      anchor: "operator-precedence"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println(3 + 4 * 5);   // Output: 23 (* before +)
System.out.println((3 + 4) * 5); // Output: 35`
    },

    {
      type: "heading",
      level: 2,
      text: "26. Instanceof Operator",
      anchor: "instanceof-op"
    },
    {
      type: "code",
      language: "java",
      code: `Object obj = "Hello";
System.out.println(obj instanceof String); // Output: true`
    },

    {
      type: "heading",
      level: 2,
      text: "27. Casting",
      anchor: "casting"
    },
    {
      type: "code",
      language: "java",
      code: `double d = 3.14;
int i = (int)d;  // Explicit cast
System.out.println(i); // Output: 3`
    },

    {
      type: "heading",
      level: 2,
      text: "28. Numeric Promotion",
      anchor: "numeric-promotion"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println(5 / 2.0); // Output: 2.5 (promoted to double)`
    },

    {
      type: "heading",
      level: 2,
      text: "29. String Conversion",
      anchor: "string-conversion"
    },
    {
      type: "code",
      language: "java",
      code: `System.out.println("Value: " + 10); // Output: "Value: 10" (automatic toString())`
    },

    {
      type: "heading",
      level: 2,
      text: "30. Boolean Evaluation",
      anchor: "boolean-eval"
    },
    {
      type: "code",
      language: "java",
      code: `boolean a = true, b = false;
System.out.println(a || b);  // Output: true
System.out.println(a && b); // Output: false`
    },

    {
      type: "alert",
      variant: "info",
      content: "Tip: Compile and run these examples to verify the outputs!"
    }
  ],
  summary: {
    keyPoints: [
      "Primitive operations follow strict type rules",
      "Operator precedence affects evaluation order",
      "Type conversions happen implicitly in expressions",
      "Control flow statements have specific scoping rules"
    ],
    cheatSheet: {
      importantThings: `
Key Takeaways:
• 5/2 = 2 (integer division)
• 0.1 + 0.2 ≠ 0.3 (floating-point precision)
• x++ vs ++x have different evaluation times
• && and || short-circuit evaluation
• instanceof checks object type at runtime
      `
    }
  },
  nextSteps: [
    {
      topicId: "java-oop-concepts",
      reason: "Learn about object-oriented programming in Java"
    },
    {
      topicId: "java-exception-handling",
      reason: "Understand how Java handles errors and exceptional cases"
    }
  ]
};