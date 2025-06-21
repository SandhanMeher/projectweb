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
      explanation: "Basic array declaration and initialization"
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
      code: "// Method 1: Declaration then initialization\nint[] arr1;\narr1 = new int[3];\n\n// Method 2: Declaration with initialization\nint[] arr2 = {1, 2, 3};\n\n// Method 3: Combined declaration and initialization\nint[] arr3 = new int[]{4, 5, 6};"
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
      code: "// Accessing elements\nint first = arr2[0]; // 1\n\n// Modifying elements\narr2[1] = 10; // {1, 10, 3}\n\n// Getting length\nint length = arr2.length; // 3 (not a method call)",
      explanation: "Note that array length is a property, not a method"
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
      code: "// 2D array\nint[][] matrix = new int[3][3];\n\n// Jagged array\nint[][] jagged = new int[3][];\njagged[0] = new int[2];\njagged[1] = new int[4];"
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