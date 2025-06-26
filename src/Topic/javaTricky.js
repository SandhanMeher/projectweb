export default {
    meta: {
        id: "java-type-casting",
        title: "Type Casting in Java",
        description: "Covers implicit and explicit casting rules for primitives and references in Java",
        category: "programming",
        subcategory: "java",
        difficulty: "intermediate",
        prerequisites: ["java-basic-syntax"],
        duration: 30,
        keywords: ["type casting", "widening", "narrowing", "primitive", "reference", "instanceof"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Type Casting in Java",
            anchor: "type-casting"
        },
        {
            type: "paragraph",
            text: "Type casting in Java allows converting a value of one data type into another. It's important in both primitive types and reference types, especially when dealing with inheritance or arithmetic."
        },

        {
            type: "heading",
            level: 2,
            text: "Widening (Implicit) Casting",
            anchor: "widening-casting"
        },
        {
            type: "paragraph",
            text: "Widening is safe and done automatically when converting a smaller type to a larger type (e.g., `int → long`). No data loss occurs."
        },
        {
            type: "code",
            language: "java",
            code: `int a = 10;
long b = a;  // widening
float c = b; // long → float`
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Trick: 'Big Bucket can hold small water' — larger data types can hold smaller ones without problem."
        },

        {
            type: "heading",
            level: 2,
            text: "Narrowing (Explicit) Casting",
            anchor: "narrowing-casting"
        },
        {
            type: "paragraph",
            text: "Narrowing is risky and requires an explicit cast. It converts a larger type to a smaller type and may result in data loss or overflow."
        },
        {
            type: "code",
            language: "java",
            code: `long a = 1000L;
int b = (int) a; // OK
double d = 3.14;
int x = (int) d; // x = 3 (fraction lost)`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Always use narrowing cautiously—especially with float/double to int. You may lose precision or get overflow."
        },

        {
            type: "heading",
            level: 2,
            text: "Primitive vs Reference Type Casting",
            anchor: "primitive-vs-reference"
        },
        {
            type: "paragraph",
            text: "Primitive casting changes the actual value, whereas reference casting changes the *view* of the object. Reference casting only works with IS-A relationships (inheritance)."
        },
        {
            type: "code",
            language: "java",
            code: `Object obj = "Hello";
String str = (String) obj;  // Downcasting (must be safe)

Object obj2 = new Integer(5);
// String s = (String) obj2; // Runtime ClassCastException`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Upcasting: Subclass → Superclass (automatic)",
                "Downcasting: Superclass → Subclass (needs explicit cast)",
                "Use `instanceof` to check type before downcasting"
            ]
        },
        {
            type: "alert",
            variant: "error",
            content: "Common MCQ Trap: Reference casting compiles but fails at runtime if type mismatch (ClassCastException)."
        },

        {
            type: "heading",
            level: 2,
            text: "Casting Table (Quick Summary)",
            anchor: "casting-table"
        },
        {
            type: "table",
            headers: ["Type", "Widening Target", "Narrowing From"],
            rows: [
                ["byte", "short, int, long, float, double", "-"],
                ["short", "int, long, float, double", "byte"],
                ["int", "long, float, double", "byte, short, char"],
                ["long", "float, double", "int and below"],
                ["float", "double", "int, long"],
                ["double", "-", "float and below"]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "MCQ Traps to Watch For",
            anchor: "casting-mcq-traps"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`int / int` = int (not float!)",
                "`char + int` → promoted to `int`",
                "`byte + byte` → becomes `int` internally",
                "`short + short` → becomes `int` internally",
                "Downcasting object without checking `instanceof` can compile but throw `ClassCastException`"
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-Life Analogy: Casting is like speaking in a language — bigger groups can understand smaller ones (widening), but smaller ones may not understand bigger groups without training (narrowing)."
        }, {
            type: "heading",
            level: 1,
            text: "Downcasting (Reference Types)",
            anchor: "downcasting"
        },
        {
            type: "paragraph",
            text: "Downcasting in Java refers to casting a superclass reference back to a subclass. While upcasting (subclass → superclass) is always safe and implicit, downcasting requires an explicit cast and is only safe when the object is actually an instance of the subclass."
        },
        {
            type: "heading",
            level: 2,
            text: "Upcasting vs Downcasting",
            anchor: "upcasting-vs-downcasting"
        },
        {
            type: "code",
            language: "java",
            code: `class Animal { }
class Dog extends Animal { void bark() {} }

Animal a = new Dog();        // Upcasting (safe)
Dog d = (Dog) a;             // Downcasting (safe)

Animal a2 = new Animal();
// Dog d2 = (Dog) a2;        // Runtime error! ClassCastException`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Downcasting compiles fine but may throw ClassCastException at runtime if the actual object is not of the target type."
        },
        {
            type: "heading",
            level: 2,
            text: "Using instanceof Before Downcasting",
            anchor: "instanceof-downcast"
        },
        {
            type: "code",
            language: "java",
            code: `if (a instanceof Dog) {
  Dog d = (Dog) a;
  d.bark();
} else {
  System.out.println("Not a Dog");
}`
        },
        {
            type: "paragraph",
            text: "`instanceof` ensures the object really belongs to the subclass before casting, preventing runtime errors."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Upcasting is implicit and always safe.",
                "Downcasting is explicit and may fail at runtime.",
                "Use `instanceof` to avoid ClassCastException.",
                "Downcasting does not convert object type—it just narrows the reference type."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-Life Analogy: Upcasting is like calling a ‘dog’ just an ‘animal’ (broadening). Downcasting is like expecting every animal to bark—not all do!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Integer Division (`int / int`)",
            anchor: "int-int-division"
        },
        {
            type: "paragraph",
            text: "In Java, dividing two integers using `/` results in an integer — any decimal part is **truncated** (not rounded)."
        },
        {
            type: "code",
            language: "java",
            code: `System.out.println(7 / 2);    // Output: 3 (not 3.5)
System.out.println(7 / 2.0);  // Output: 3.5 (promoted to double)
System.out.println(7.0 / 2);  // Output: 3.5
System.out.println((double) 7 / 2); // Output: 3.5`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`int / int` results in `int`.",
                "Fractional part is truncated, not rounded.",
                "To preserve decimals, use at least one operand as `float` or `double`.",
                "Casting before division ensures decimal precision."
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Common Mistake: Writing `int result = 7 / 2;` and expecting 3.5. The result will be 3 because both operands are integers."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-Life Analogy: Integer division is like asking how many *whole* apples you can get from slicing 7 apples into groups of 2. The answer is 3 — with 1 leftover ignored."
        }
        , {
            type: "heading",
            level: 1,
            text: "Numeric Promotion Rules",
            anchor: "numeric-promotion"
        },
        {
            type: "paragraph",
            text: "Java applies automatic type promotion when performing arithmetic operations involving mixed types or smaller integral types (byte, short, char). These promotions ensure type safety and precision."
        },
        {
            type: "heading",
            level: 2,
            text: "byte/short/char + byte/short/char → int",
            anchor: "small-types-to-int"
        },
        {
            type: "code",
            language: "java",
            code: `byte a = 10;
byte b = 20;
// byte c = a + b; // ❌ Compilation error
int c = a + b;     // ✅ Result is int`
        },
        {
            type: "alert",
            variant: "info",
            content: "Operations involving only byte, short, or char are promoted to `int` before evaluation."
        },
        {
            type: "heading",
            level: 2,
            text: "Mixed-Type Promotions",
            anchor: "mixed-type-promotions"
        },
        {
            type: "table",
            headers: ["Operands", "Result Type", "Explanation"],
            rows: [
                ["int + float", "float", "int promoted to float"],
                ["long + float", "float", "long promoted to float"],
                ["int + double", "double", "int promoted to double"],
                ["float + double", "double", "float promoted to double"]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Integer Constant Expressions",
            anchor: "const-expr"
        },
        {
            type: "code",
            language: "java",
            code: `byte b = 10 + 20;   // ✅ OK, result is 30 (fits in byte)
byte c = 10;
byte d = c + 20;     // ❌ Compilation error: promoted to int`
        },
        {
            type: "alert",
            variant: "info",
            content: "Constant expressions like `10 + 20` are evaluated at compile time and allowed if the result fits in the target type."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`byte`, `short`, and `char` always promote to `int` during arithmetic.",
                "The result type of expressions is determined by the widest type among operands.",
                "Be cautious when assigning the result to smaller types (explicit cast may be needed)."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-Life Analogy: Mixing juice from a small glass (byte) with a big jug (float) — the result must be stored in the bigger container!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Tricky String + int Behavior",
            anchor: "string-int-behavior"
        },
        {
            type: "paragraph",
            text: "In Java, `+` is both an arithmetic addition operator and a string concatenation operator. When used with `String`, it concatenates. Evaluation proceeds **left to right**, affecting the final result."
        },
        {
            type: "code",
            language: "java",
            code: `System.out.println(10 + 20 + "A");   // Output: 30A
System.out.println("A" + 10 + 20);   // Output: A1020`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`+` is evaluated left to right.",
                "If the first operands are numbers, Java performs arithmetic.",
                "Once a `String` is encountered, all subsequent `+` operations are treated as string concatenation."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick to Remember: As soon as Java hits a `String`, all remaining `+` operations become string joins!"
        },
        {
            type: "alert",
            variant: "warning",
            content: "MCQ Trap: `System.out.println(10 + 20 + \"10\" + 20)` → Output is `301020`, not `10201020`."
        },
        {
            type: "paragraph",
            text: "Real-Life Analogy: Think of `+` as adding money until someone says a 'word' — then it becomes story mode instead of calculator mode!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Char and Numeric Casting",
            anchor: "char-numeric-casting"
        },
        {
            type: "paragraph",
            text: "In Java, `char` is a 16-bit unsigned data type representing Unicode characters. It can be freely converted to and from numeric types like `int` using casting."
        },
        {
            type: "code",
            language: "java",
            code: `char c = 65;         // ✅ valid → prints 'A'
System.out.println(c);    // Output: A

char d = (char)65;        // Explicit casting → 'A'

int x = 'A';              // ✅ valid → gives 65
System.out.println(x);    // Output: 65`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`char` can be assigned an integer (0–65535) directly or with casting.",
                "A character literal like `'A'` is internally stored as its ASCII/Unicode value.",
                "`char ↔ int` conversions are common in loops and encoding operations."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "`char` to `int` is widening; `int` to `char` requires explicit narrowing."
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trick: `'A' + 1` results in `66`, not `B`, because it’s numeric addition. Use `(char)('A' + 1)` to get `B`."
        },
        {
            type: "paragraph",
            text: "Real-Life Analogy: Think of `char` as a symbol with a secret number badge. You can ask its badge number (cast to `int`) or assign a new badge number to get a new symbol!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Float & Double Literal Suffix",
            anchor: "float-double-suffix"
        },
        {
            type: "paragraph",
            text: "By default, decimal literals in Java are treated as `double`. Assigning them directly to a `float` without a suffix or cast results in a compile-time error."
        },
        {
            type: "code",
            language: "java",
            code: `float f = 1.0;      // ❌ Error: possible lossy conversion
float f1 = 1.0f;    // ✅ Correct: uses 'f' suffix
float f2 = (float)1.0; // ✅ Correct: uses explicit cast`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`1.0` is a `double` literal by default.",
                "Use `f` or `F` suffix to mark a literal as `float`.",
                "Explicit casting with `(float)` also works."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Use `f` for float literals and `d` for double (optional since default is double)."
        },
        {
            type: "alert",
            variant: "warning",
            content: "`float f = 1.0;` will not compile — always use `1.0f` or `(float)1.0`."
        },
        {
            type: "paragraph",
            text: "Memory Trick: **‘f’ for float, or fail to compile!**"
        }
        , {
            type: "heading",
            level: 1,
            text: "Wrapper Classes and Autoboxing/Unboxing",
            anchor: "autoboxing-unboxing"
        },
        {
            type: "paragraph",
            text: "Java provides wrapper classes (`Integer`, `Double`, `Boolean`, etc.) for primitive types. Autoboxing converts primitives to objects, and unboxing does the reverse — but both can lead to subtle issues."
        },
        {
            type: "code",
            language: "java",
            code: `Integer i = null;
int j = i;  // ❌ NullPointerException at runtime

Integer x = 10;
int y = x + 5;  // ✅ Autounboxing, then arithmetic

Integer a = 128;
Integer b = 128;
System.out.println(a == b);  // false → because objects not cached

Integer c = 100;
Integer d = 100;
System.out.println(c == d);  // true → values between -128 and 127 are cached`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`Integer i = null; int j = i;` causes `NullPointerException` due to unboxing null.",
                "`==` checks reference equality for wrappers, not value equality — use `.equals()`.",
                "Java caches wrapper objects for values from -128 to 127."
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trap: Autounboxing a `null` wrapper will crash your code!"
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `.equals()` to compare wrapper values, not `==`."
        },
        {
            type: "paragraph",
            text: "Real-Life Analogy: Wrapper objects are like gift-wrapped values. Unwrapping a missing gift (null) causes trouble!"
        }
        , {
            type: "heading",
            level: 1,
            text: "final with Casting",
            anchor: "final-casting"
        },
        {
            type: "paragraph",
            text: "In Java, `byte`, `short`, and `char` arithmetic results in `int`, so assignments normally require explicit casting. But if a `final` variable is used, and its value is a constant within range, implicit narrowing is allowed."
        },
        {
            type: "code",
            language: "java",
            code: `final byte b = 10;
byte c = b + 1; // ✅ No error, because result (11) fits in byte range

byte x = 10;
byte y = x + 1; // ❌ Error: requires cast to byte

final int i = 300;
byte j = i; // ❌ Error: 300 is out of byte range (-128 to 127)`
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`final` constants allow compile-time evaluation.",
                "If the result fits in the target type range, no cast is needed.",
                "Without `final`, the result is promoted to `int`."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "`final` variables known at compile-time allow implicit narrowing conversions if values are in range."
        },
        {
            type: "alert",
            variant: "warning",
            content: "Do **not** confuse runtime values with compile-time constants — only the latter benefit from this rule."
        },
        {
            type: "paragraph",
            text: "Memory Trick: **‘final + small = safe cast’** (only if within range and constant)."
        }
        , {
            type: "heading",
            level: 1,
            text: "Special Trick Patterns (MCQ Style)",
            anchor: "mcq-trick-patterns"
        },
        {
            type: "list",
            style: "disc",
            items: [
                `"10" + 20 + 30 → "102030" (left-to-right: string + number = string)`,
                `10 + 20 + "30" → "3030" (addition first, then string concatenation)`,
                `(double)(5 / 2) → 2.0 (division is int before casting)`,
                `5 / (double)2 → 2.5 (one operand is double, so float division)`,
                `'A' + 1 → 66 (char promoted to int → 65 + 1)`,
                `(char)('A' + 1) → 'B' (char arithmetic then cast back)`
            ]
        },
        {
            type: "code",
            language: "java",
            code: `System.out.println("10" + 20 + 30);  // "102030"
System.out.println(10 + 20 + "30");   // "3030"

System.out.println((double)(5 / 2));  // 2.0
System.out.println(5 / (double)2);   // 2.5

System.out.println('A' + 1);         // 66
System.out.println((char)('A' + 1)); // B`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Java evaluates left to right. Watch for string concatenation and casting timing!"
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trap: `(double)(a / b)` still does integer division **first**."
        },
        {
            type: "paragraph",
            text: "Memory Analogy: `'A' + 1` is like treating 'A' as 65 — Java auto-promotes chars in arithmetic!"
        }

    ],
    summary: {
        keyPoints: [
            "Widening casting is automatic and safe; narrowing requires explicit cast.",
            "Object casting must follow inheritance; use instanceof to check before downcasting.",
            "Arithmetic operations often promote smaller types to int or higher types automatically."
        ],
        cheatSheet: {
            importantThings: `
Widening: byte → short → int → long → float → double
Narrowing: double → float → long → int → short → byte

Use instanceof to avoid ClassCastException!
      `
        }
    },
    nextSteps: [
        {
            topicId: "java-arithmetic-behavior",
            reason: "Understand how arithmetic promotions impact casting and expressions"
        },
        {
            topicId: "java-instanceof",
            reason: "Safely downcast objects using instanceof before casting"
        }
    ]
}
