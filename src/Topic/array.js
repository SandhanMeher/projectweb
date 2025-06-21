// Topic/array.js
export default {
    meta: {
        title: "Arrays in Java",
        description: "Complete guide to array declaration, initialization, and operations in Java",
        category: "programming",
        subcategory: "java",
        difficulty: "beginner",
        prerequisites: ["java-basic-syntax"],
        created: "2024-01-15",
        updated: "2024-01-20",
        duration: 25,
        keywords: ["array", "data structure", "collections", "loops"],
        version: "1.1"
    },
    resources: [
        {
            type: "official-docs",
            title: "Java Arrays Documentation",
            url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"
        },
        {
            type: "video",
            title: "Java Arrays Tutorial",
            url: "https://www.youtube.com/watch?v=o2ARur9hs9M"
        }
    ],
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to Arrays",
            anchor: "arrays-intro"
        },
        {
            type: "paragraph",
            text: "Arrays are fixed-size data structures that store elements of the same type in contiguous memory locations."
        },
        {
            type: "code",
            language: "java",
            code: "// Declaration\nint[] numbers;\n\n// Initialization\nnumbers = new int[5];",
            explanation: "Declares an integer array and allocates memory for 5 elements."
        },
        {
            type: "heading",
            level: 2,
            text: "Array Initialization Methods",
            anchor: "array-init"
        },
        {
            type: "paragraph",
            text: "There are several ways to initialize arrays in Java:"
        },
        {
            type: "code",
            language: "java",
            code: `// Method 1: Declaration then initialization
int[] arr1;
arr1 = new int[3];

// Method 2: Declaration with initialization
int[] arr2 = {1, 2, 3};

// Method 3: Combined declaration and initialization
int[] arr3 = new int[]{4, 5, 6};`,
            explanation: "Examples of different ways to initialize arrays in Java."
        },
        {
            type: "alert",
            variant: "info",
            content: "The size of an array is fixed after creation and cannot be changed."
        },
        {
            type: "heading",
            level: 2,
            text: "Common Operations",
            anchor: "array-operations"
        },
        {
            type: "paragraph",
            text: "Basic array operations every Java developer should know:"
        },
        {
            type: "code",
            language: "java",
            code: `// Accessing elements
int first = arr2[0]; // 1

// Modifying elements
arr2[1] = 10; // {1, 10, 3}

// Getting length
int length = arr2.length; // 3 (not a method call)`,
            explanation: "Shows how to read, write, and get the length of an array."
        },
        {
            type: "heading",
            level: 2,
            text: "Multidimensional Arrays",
            anchor: "multi-arrays"
        },
        {
            type: "paragraph",
            text: "Java supports arrays of arrays, commonly used for matrices:"
        },
        {
            type: "code",
            language: "java",
            code: `// 2D array
int[][] matrix = new int[3][3];

// Jagged array
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[4];`,
            explanation: "Demonstrates creation of regular 2D arrays and jagged arrays."
        },
        {
            type: "alert",
            variant: "warning",
            content: "Remember that multidimensional arrays in Java are actually arrays of arrays, which allows for jagged arrays (rows of different lengths)."
        }
    ],
    summary: {
        keyPoints: [
            "Arrays are fixed-size and type-safe",
            "Use .length (not length()) for array size",
            "Zero-based indexing",
            "Multidimensional arrays are arrays of arrays"
        ],
        cheatSheet: {
            declaration: "DataType[] arrayName;",
            initialization: "arrayName = new DataType[size];",
            literal: "DataType[] arrayName = {val1, val2, val3};",
            multidim: "DataType[][] arrayName = new DataType[rows][cols];"
        }
    },
    nextSteps: [
        {
            topicId: "java-arraylist",
            reason: "Dynamic alternative to arrays with more flexibility"
        },
        {
            topicId: "java-collections",
            reason: "Learn about Java's Collection framework"
        }
    ]
};
