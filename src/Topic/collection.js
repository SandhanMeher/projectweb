// topics/java-collections-intro.js

export default {
    meta: {
        title: "Introduction to Java Collections Framework",
        description: "Learn what the Java Collections Framework is, why it was introduced, and understand its key components and benefits.",
        category: "programming",
        subcategory: "java",
        difficulty: "beginner",
        duration: 25,
        keywords: ["java collections", "collections framework", "array limitations", "collections API", "data structures"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to Java Collections Framework",
            anchor: "java-collections-intro"
        },
        {
            type: "paragraph",
            text: "The Java Collections Framework (JCF) is a unified architecture for representing and manipulating collections—groups of objects like lists, sets, and maps. It is part of the java.util package and includes interfaces, classes, and algorithms to handle data more efficiently than arrays."
        },

        {
            type: "heading",
            level: 2,
            text: "Why Collections Were Introduced",
            anchor: "why-collections"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Arrays have fixed size; collections can grow/shrink dynamically.",
                "Arrays store elements of the same type; collections can store objects with generic support.",
                "Collections provide powerful APIs for sorting, searching, and modifying data.",
                "Easier code management with built-in implementations of data structures."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Key Interfaces in the Collections Framework",
            anchor: "collections-interfaces"
        },
        {
            type: "table",
            headers: ["Interface", "Description"],
            rows: [
                ["Collection", "Root interface for all collection classes except maps."],
                ["List", "Ordered collection with index-based access (e.g., ArrayList, LinkedList)."],
                ["Set", "Unordered collection that does not allow duplicates (e.g., HashSet)."],
                ["Queue", "Used for holding elements prior to processing (e.g., PriorityQueue)."],
                ["Deque", "Double-ended queue that allows insertion/removal at both ends."],
                ["Map", "Key-value pair collection (e.g., HashMap, TreeMap)."]
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Collections Framework Hierarchy Diagram",
            anchor: "collections-hierarchy"
        },
        {
            type: "code",
            language: "text",
            code: `
             Collection
                 |
    --------------------------------
    |              |              |
   List           Set           Queue
    |              |              |
ArrayList     HashSet        PriorityQueue
LinkedList    TreeSet        ArrayDeque
      `
        },

        {
            type: "heading",
            level: 2,
            text: "Advantages of Using Collections",
            anchor: "collections-advantages"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Dynamic data structures: no need to predefine size.",
                "Efficient algorithms for searching, sorting, and manipulation.",
                "Thread-safe implementations available (e.g., Collections.synchronizedList).",
                "Generic support improves type safety and reduces casting.",
                "Interoperability between different collection types."
            ]
        },

        {
            type: "heading",
            level: 2,
            text: "Basic Example: List vs Array",
            anchor: "array-vs-list"
        },
        {
            type: "code",
            language: "java",
            code: `
// Using array
String[] namesArray = new String[2];
namesArray[0] = "Alice";
namesArray[1] = "Bob";

// Using List
import java.util.*;
List<String> namesList = new ArrayList<>();
namesList.add("Alice");
namesList.add("Bob");
System.out.println(namesList.get(1)); // Output: Bob
      `
        }, {
            type: "heading",
            level: 1,
            text: "Core Interfaces in Java Collections Framework",
            anchor: "core-interfaces-jcf"
        },
        {
            type: "paragraph",
            text: "All collection classes in Java implement one or more core interfaces defined in the Collections Framework. These interfaces provide the foundation for building reusable and flexible data structures."
        },
        {
            type: "table",
            headers: ["Interface", "Description"],
            rows: [
                ["Collection", "Root interface for all collection types (except Map). Provides methods like add(), remove(), size(), etc."],
                ["List", "An ordered collection that allows duplicates. Supports index-based access (e.g., ArrayList, LinkedList)."],
                ["Set", "A collection that does not allow duplicates. Elements are unordered (e.g., HashSet, LinkedHashSet)."],
                ["Queue", "Designed for holding elements prior to processing. Follows FIFO order (e.g., LinkedList, PriorityQueue)."],
                ["Deque", "A double-ended queue allowing insertions/removals at both ends (e.g., ArrayDeque)."],
                ["Map", "Stores key-value pairs. Keys are unique; values can be duplicated (e.g., HashMap, TreeMap)."],
                ["SortedSet / NavigableSet", "Set implementations that maintain elements in sorted order (e.g., TreeSet)."],
                ["SortedMap / NavigableMap", "Map implementations that maintain keys in sorted order (e.g., TreeMap)."]
            ]
        },
        {
            type: "paragraph",
            text: "These interfaces serve as the base for concrete implementations and enable developers to write more generic, flexible code by targeting interfaces instead of specific classes."
        }, {
            type: "heading",
            level: 1,
            text: "Collection vs Collections",
            anchor: "collection-vs-collections"
        },
        {
            type: "paragraph",
            text: "Although they sound similar, `Collection` and `Collections` serve very different purposes in Java. One is an interface that defines a group of objects, while the other is a utility class providing static helper methods."
        },
        {
            type: "table",
            headers: ["Term", "Meaning"],
            rows: [
                ["Collection", "A root interface in the java.util package that represents a group of objects (e.g., List, Set, Queue)."],
                ["Collections", "A utility class in java.util that contains static methods for manipulating collections (e.g., sort(), shuffle(), reverse())."]
            ]
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`Collection` is part of the Java Collections Framework hierarchy.",
                "`Collections` is a helper class used to operate on or return collections.",
                "Do not confuse `Collection` (interface) with `Collections` (class)."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class Example {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("Banana");
    list.add("Apple");
    list.add("Cherry");

    // Using Collections utility class to sort the list
    Collections.sort(list);

    System.out.println("Sorted List: " + list);
  }
}`
        },
        {
            type: "code",
            language: "text",
            code: `╔══════════════════════╗
║   Collection vs Collections   ║
╚══════════════════════╝
   Collection (Interface)       → Defines behavior of collections like List, Set, Queue
   Collections (Utility Class)  → Provides static methods to operate on collections`
        },
        {
            type: "paragraph",
            text: "In summary, `Collection` is the building block for collection types, whereas `Collections` provides useful static methods to work with those collection types."
        }
        , {
            type: "heading",
            level: 1,
            text: "List Interface and Implementations",
            anchor: "list-interface"
        },
        {
            type: "paragraph",
            text: "The `List` interface in Java represents an ordered collection that allows duplicate elements. Elements in a `List` are accessible by their index positions and can be added, removed, or modified."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Maintains insertion order.",
                "Allows duplicate elements.",
                "Provides index-based access to elements using `get(int index)`.",
                "Supports element insertion/removal at specific positions."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Common Implementations of List",
            anchor: "list-implementations"
        },
        {
            type: "table",
            headers: ["Implementation", "Description"],
            rows: [
                ["ArrayList", "Resizable-array implementation. Fast random access, slower insertions/deletions in the middle."],
                ["LinkedList", "Doubly linked list. Faster insertions/removals, slower random access."],
                ["Vector", "Legacy synchronized list. Slower performance compared to `ArrayList`."],
                ["Stack", "Legacy subclass of `Vector` representing a LIFO stack."]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Key Methods in List Interface",
            anchor: "list-methods"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`add(E e)`, `add(int index, E e)` – Add elements",
                "`get(int index)` – Retrieve element at a specific index",
                "`set(int index, E e)` – Replace element at a specific index",
                "`remove(int index)` – Remove element at a specific index",
                "`indexOf(Object o)` – Find the index of the first occurrence",
                "`lastIndexOf(Object o)` – Find the last occurrence",
                "`contains(Object o)` – Check if element exists",
                "`size()` – Return number of elements",
                "`isEmpty()` – Check if the list is empty",
                "`clear()` – Remove all elements",
                "`subList(int fromIndex, int toIndex)` – View part of the list"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class ListExample {
  public static void main(String[] args) {
    List<String> fruits = new ArrayList<>();
    fruits.add("Apple");
    fruits.add("Banana");
    fruits.add("Cherry");
    fruits.add(1, "Mango");

    System.out.println("All Fruits: " + fruits);           // [Apple, Mango, Banana, Cherry]
    System.out.println("Second fruit: " + fruits.get(1));  // Mango
    fruits.remove("Banana");
    fruits.set(1, "Orange");

    System.out.println("Updated Fruits: " + fruits);       // [Apple, Orange, Cherry]
  }
}`
        },
        {
            type: "paragraph",
            text: "Use `ArrayList` when you need fast access and iteration, and `LinkedList` when frequent insertions and deletions at arbitrary positions are required. For legacy code, `Vector` and `Stack` may still appear but are generally discouraged in new development."
        }
        , {
            type: "heading",
            level: 2,
            text: "LinkedList",
            anchor: "linkedlist"
        },
        {
            type: "paragraph",
            text: "`LinkedList` is a doubly linked list implementation of the `List` and `Deque` interfaces. It is ideal for scenarios where frequent insertions and deletions occur, especially at the beginning or middle of the list."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Maintains insertion order",
                "Allows duplicate elements",
                "Implements both `List` and `Deque` interfaces",
                "Efficient insertions and deletions (O(1)) at head/tail",
                "Slower random access (O(n)) compared to `ArrayList`"
            ]
        },
        {
            type: "table",
            headers: ["Operation", "Performance"],
            rows: [
                ["Insertion at head/tail", "Fast (O(1))"],
                ["Deletion at head/tail", "Fast (O(1))"],
                ["Random access", "Slow (O(n))"],
                ["Iteration", "O(n)"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class LinkedListExample {
  public static void main(String[] args) {
    LinkedList<String> tasks = new LinkedList<>();
    tasks.add("Task 1");
    tasks.addFirst("Task 0");  // Insert at beginning
    tasks.addLast("Task 2");   // Insert at end

    System.out.println("All Tasks: " + tasks);  // [Task 0, Task 1, Task 2]

    tasks.removeFirst();  // Removes "Task 0"
    tasks.removeLast();   // Removes "Task 2"

    System.out.println("Updated Tasks: " + tasks);  // [Task 1]
  }
}`
        },
        {
            type: "paragraph",
            text: "`LinkedList` is a great choice when you need to frequently add or remove elements from both ends of the list. However, for faster index-based access, prefer `ArrayList`."
        }
        , {
            type: "heading",
            level: 2,
            text: "Vector",
            anchor: "vector"
        },
        {
            type: "paragraph",
            text: "`Vector` is a synchronized, legacy implementation of the `List` interface. It maintains insertion order and allows duplicate elements. Although largely replaced by `ArrayList`, it is still used in multithreaded environments where thread safety is required."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Thread-safe (synchronized methods)",
                "Allows duplicates and maintains insertion order",
                "Implements the `List` interface",
                "Slower performance compared to `ArrayList` due to synchronization",
                "Legacy class from Java 1.0 (part of pre-collections framework)"
            ]
        },
        {
            type: "table",
            headers: ["Operation", "Performance"],
            rows: [
                ["Add (append)", "O(1) amortized"],
                ["Insert at position", "O(n)"],
                ["Remove at position", "O(n)"],
                ["Access by index", "O(1)"],
                ["Thread Safety", "Yes (synchronized methods)"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class VectorExample {
  public static void main(String[] args) {
    Vector<String> vector = new Vector<>();
    vector.add("Apple");
    vector.add("Banana");
    vector.add("Cherry");

    System.out.println("Fruits: " + vector);  // [Apple, Banana, Cherry]

    vector.remove("Banana");
    System.out.println("After removal: " + vector);  // [Apple, Cherry]

    System.out.println("First Element: " + vector.firstElement());  // Apple
  }
}`
        },
        {
            type: "paragraph",
            text: "`Vector` should only be used when you need a synchronized `List` and don't want to use external synchronization (e.g., using `Collections.synchronizedList()`). Otherwise, prefer `ArrayList` or `LinkedList` for better performance."
        }
        , {
            type: "heading",
            level: 2,
            text: "Stack",
            anchor: "stack"
        },
        {
            type: "paragraph",
            text: "`Stack` is a legacy class that represents a Last-In-First-Out (LIFO) stack of objects. It extends `Vector` and inherits its synchronized behavior. Elements are added and removed from the top of the stack."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Implements LIFO (Last-In-First-Out) ordering",
                "Extends `Vector` (thus thread-safe)",
                "Methods: `push()`, `pop()`, `peek()`, `empty()`, `search()`",
                "Consider using `Deque` (e.g., `ArrayDeque`) for better performance in modern code"
            ]
        },
        {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
                ["push(E item)", "Pushes an item onto the top of the stack"],
                ["pop()", "Removes and returns the top item"],
                ["peek()", "Returns the top item without removing it"],
                ["empty()", "Checks if the stack is empty"],
                ["search(Object o)", "Returns the 1-based position from the top"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class StackExample {
  public static void main(String[] args) {
    Stack<String> stack = new Stack<>();
    stack.push("A");
    stack.push("B");
    stack.push("C");

    System.out.println("Top element: " + stack.peek());  // C
    System.out.println("Popped element: " + stack.pop()); // C
    System.out.println("Stack after pop: " + stack);      // [A, B]
  }
}`
        },
        {
            type: "paragraph",
            text: "While `Stack` is functional, prefer `Deque` (like `ArrayDeque`) when thread safety is not required. It's more efficient and flexible for stack and queue operations."
        }
        , {
            type: "heading",
            level: 2,
            text: "Set Interface and Implementations",
            anchor: "set-interface"
        },
        {
            type: "paragraph",
            text: "`Set` is a collection that does not allow duplicate elements. It models the mathematical set abstraction and is typically used when uniqueness is required."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Does not allow duplicate elements",
                "At most one null element (depending on implementation)",
                "No guaranteed order (unless using ordered variants like LinkedHashSet or TreeSet)",
                "Main implementations include `HashSet`, `LinkedHashSet`, and `TreeSet`"
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "HashSet",
            anchor: "hashset"
        },
        {
            type: "paragraph",
            text: "`HashSet` is the most commonly used implementation of the `Set` interface. It uses a hash table for storage, making basic operations like add, remove, and contains run in constant time on average."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Unordered – the iteration order is not predictable",
                "Allows one null element",
                "Backed by a `HashMap` internally",
                "Not synchronized (use `Collections.synchronizedSet()` if needed)"
            ]
        },
        {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
                ["add(E e)", "Adds the specified element if not already present"],
                ["remove(Object o)", "Removes the specified element"],
                ["contains(Object o)", "Checks if the set contains the specified element"],
                ["isEmpty()", "Returns true if the set contains no elements"],
                ["size()", "Returns the number of elements in the set"],
                ["clear()", "Removes all elements from the set"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class HashSetExample {
  public static void main(String[] args) {
    Set<String> set = new HashSet<>();
    set.add("Apple");
    set.add("Banana");
    set.add("Apple"); // Duplicate ignored
    set.add("Cherry");

    System.out.println("HashSet: " + set);
    System.out.println("Contains 'Banana': " + set.contains("Banana"));
  }
}`
        },
        {
            type: "paragraph",
            text: "Use `HashSet` when you want a fast, unordered collection that ensures unique elements. If ordering is important, consider `LinkedHashSet` or `TreeSet`."
        }
        , {
            type: "heading",
            level: 3,
            text: "LinkedHashSet",
            anchor: "linkedhashset"
        },
        {
            type: "paragraph",
            text: "`LinkedHashSet` is an ordered version of `HashSet` that maintains a doubly-linked list across all elements. This allows it to preserve the insertion order while still providing near-constant-time performance for basic operations."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Maintains insertion order of elements",
                "Backed by a hash table + linked list",
                "Allows one null element",
                "Not synchronized by default"
            ]
        },
        {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
                ["add(E e)", "Adds the specified element if not already present"],
                ["remove(Object o)", "Removes the specified element"],
                ["contains(Object o)", "Checks if the set contains the specified element"],
                ["iterator()", "Returns an iterator in insertion order"],
                ["clear()", "Removes all elements"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class LinkedHashSetExample {
  public static void main(String[] args) {
    Set<String> linkedSet = new LinkedHashSet<>();
    linkedSet.add("Orange");
    linkedSet.add("Apple");
    linkedSet.add("Banana");

    System.out.println("LinkedHashSet (Insertion Order): " + linkedSet);
  }
}`
        },
        {
            type: "paragraph",
            text: "`LinkedHashSet` is ideal when you need fast lookups and consistent iteration order. It is slightly slower than `HashSet` due to the overhead of maintaining order."
        }
        , {
            type: "heading",
            level: 3,
            text: "TreeSet",
            anchor: "treeset"
        },
        {
            type: "paragraph",
            text: "`TreeSet` is a sorted set implementation based on a Red-Black tree. It ensures that elements are stored in their natural ordering or according to a provided `Comparator`. It implements the `NavigableSet` and `SortedSet` interfaces."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Maintains sorted (ascending) order of elements",
                "Does not allow duplicate elements",
                "Implements `NavigableSet` and `SortedSet`",
                "Backed by a Red-Black tree",
                "Elements must be `Comparable` or supplied with a `Comparator`"
            ]
        },
        {
            type: "table",
            headers: ["Method", "Description"],
            rows: [
                ["add(E e)", "Adds the specified element if not already present"],
                ["first()", "Returns the lowest element"],
                ["last()", "Returns the highest element"],
                ["ceiling(E e)", "Returns the least element ≥ e"],
                ["floor(E e)", "Returns the greatest element ≤ e"],
                ["higher(E e)", "Returns the least element > e"],
                ["lower(E e)", "Returns the greatest element < e"],
                ["remove(Object o)", "Removes the specified element"],
                ["iterator()", "Returns an iterator over the elements in ascending order"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.*;

public class TreeSetExample {
  public static void main(String[] args) {
    Set<Integer> treeSet = new TreeSet<>();
    treeSet.add(50);
    treeSet.add(10);
    treeSet.add(30);

    System.out.println("TreeSet (Sorted Order): " + treeSet);
    System.out.println("First Element: " + ((TreeSet<Integer>) treeSet).first());
    System.out.println("Ceiling of 25: " + ((TreeSet<Integer>) treeSet).ceiling(25));
  }
}`
        },
        {
            type: "paragraph",
            text: "`TreeSet` is ideal when you need sorted data without duplicates. Since it maintains ordering, it is slower than `HashSet` or `LinkedHashSet` for insertions and lookups."
        }
        , {
            type: "heading",
            level: 2,
            text: "Queue and Deque Interfaces",
            anchor: "queue-deque"
        },
        {
            type: "paragraph",
            text: "The `Queue` and `Deque` interfaces in Java are used for handling data in First-In-First-Out (FIFO) and Double-Ended Queue (Deque) patterns, respectively. These are particularly useful in scenarios like task scheduling, breadth-first search, and more."
        },
        {
            type: "heading",
            level: 3,
            text: "Queue Interface",
            anchor: "queue-interface"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Follows FIFO (First-In-First-Out) principle.",
                "Typically used for holding elements prior to processing.",
                "Important methods: `offer()`, `poll()`, `peek()`."
            ]
        },
        {
            type: "table",
            headers: ["Implementation", "Characteristics"],
            rows: [
                ["LinkedList", "Implements both `Queue` and `Deque`. Supports FIFO and LIFO operations."],
                ["PriorityQueue", "Elements are ordered based on natural ordering or a custom `Comparator`. Not thread-safe."]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Queue<String> queue = new LinkedList<>();
queue.offer("A");
queue.offer("B");
System.out.println(queue.poll()); // Outputs: A`
        },
        {
            type: "heading",
            level: 3,
            text: "Deque Interface",
            anchor: "deque-interface"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Deque stands for Double-Ended Queue.",
                "Allows insertion and removal at both ends.",
                "Can be used as both a queue (FIFO) and a stack (LIFO).",
                "Important methods: `addFirst()`, `addLast()`, `removeFirst()`, `removeLast()`."
            ]
        },
        {
            type: "table",
            headers: ["Implementation", "Characteristics"],
            rows: [
                ["LinkedList", "Doubly linked list. Allows null elements."],
                ["ArrayDeque", "Resizable-array implementation. Faster than `Stack` and `LinkedList` for stack operations. Does not allow nulls."]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Deque<String> deque = new ArrayDeque<>();
deque.addFirst("Front");
deque.addLast("Back");
System.out.println(deque.removeLast()); // Outputs: Back`
        },
        {
            type: "paragraph",
            text: "`Queue` is great for processing tasks in order, while `Deque` offers flexibility to add or remove elements from both ends efficiently."
        }
        , {
            type: "heading",
            level: 2,
            text: "Map Interface and Implementations",
            anchor: "map-interface"
        },
        {
            type: "paragraph",
            text: "The `Map` interface in Java represents a collection that maps keys to values. Each key is unique, and each key maps to exactly one value. It is widely used for associative arrays, lookup tables, and caching mechanisms."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Stores key-value pairs.",
                "Keys must be unique; values can be duplicated.",
                "Does not extend the Collection interface."
            ]
        },
        {
            type: "table",
            headers: ["Implementation", "Characteristics"],
            rows: [
                ["HashMap", "Unordered map. Allows one `null` key and multiple `null` values. Fast access via hashing."],
                ["LinkedHashMap", "Maintains insertion order. Slightly slower than `HashMap`."],
                ["TreeMap", "Sorted map based on natural ordering or custom comparator. Implements `NavigableMap`. No `null` keys."],
                ["Hashtable", "Legacy synchronized map. Slower and does not allow `null` keys or values."],
                ["Properties", "Subclass of `Hashtable`. Stores string key-value pairs, used for configuration files."]
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Iterating over a Map",
            anchor: "iterate-map"
        },
        {
            type: "code",
            language: "java",
            code: `Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);

// Using entrySet
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

// Using keySet
for (String key : map.keySet()) {
    System.out.println(key + " = " + map.get(key));
}

// Using forEach (Java 8+)
map.forEach((k, v) -> System.out.println(k + " -> " + v));`
        },
        {
            type: "heading",
            level: 3,
            text: "Using Properties Class",
            anchor: "properties-class"
        },
        {
            type: "code",
            language: "java",
            code: `Properties props = new Properties();
props.setProperty("username", "admin");
props.setProperty("password", "1234");

// Save to file
props.store(new FileOutputStream("config.properties"), null);

// Load from file
props.load(new FileInputStream("config.properties"));

System.out.println(props.getProperty("username"));`
        },
        {
            type: "paragraph",
            text: "`Map` implementations provide powerful tools for fast data lookup and storage using key-value structures. `HashMap` is the most common choice for general use, while `TreeMap` is suitable for sorted data, and `Properties` is useful for externalized configuration."
        }
        , {
            type: "heading",
            level: 2,
            text: "Comparable vs Comparator",
            anchor: "comparable-vs-comparator"
        },
        {
            type: "paragraph",
            text: "Java provides two main interfaces for comparing and sorting objects: `Comparable` and `Comparator`. These interfaces allow you to define natural and custom ordering for object collections."
        },
        {
            type: "table",
            headers: ["Feature", "Comparable", "Comparator"],
            rows: [
                ["Purpose", "Defines natural ordering", "Defines custom ordering"],
                ["Interface", "java.lang.Comparable", "java.util.Comparator"],
                ["Method", "compareTo(Object o)", "compare(Object o1, Object o2)"],
                ["Sorting usage", "Collections.sort(list)", "Collections.sort(list, comparator)"],
                ["Modification", "Class must implement `compareTo`", "Can be used externally, no need to modify the class"]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `// Comparable example (natural ordering)
class Student implements Comparable<Student> {
  int marks;
  public Student(int marks) { this.marks = marks; }

  public int compareTo(Student s) {
    return this.marks - s.marks; // ascending order
  }
}

// Comparator example (custom ordering)
class StudentMarksDescComparator implements Comparator<Student> {
  public int compare(Student a, Student b) {
    return b.marks - a.marks; // descending order
  }
}

List<Student> list = new ArrayList<>();
list.add(new Student(90));
list.add(new Student(70));
list.add(new Student(85));

Collections.sort(list); // uses Comparable
Collections.sort(list, new StudentMarksDescComparator()); // uses Comparator`
        },
        {
            type: "paragraph",
            text: "`Comparable` is best used when there is a single, natural sort order for a class. `Comparator` is ideal when multiple or external sorting logic is required."
        }
        , {
            type: "heading",
            level: 2,
            text: "Utility Methods in Collections Class",
            anchor: "collections-utility-methods"
        },
        {
            type: "paragraph",
            text: "The `java.util.Collections` class provides static utility methods to operate on or return collections. These methods simplify common collection tasks like sorting, reversing, synchronizing, and more."
        },
        {
            type: "table",
            headers: ["Method", "Description / Use Case"],
            rows: [
                ["sort(List<T>)", "Sorts the list into natural ascending order (must implement Comparable)."],
                ["sort(List<T>, Comparator)", "Sorts list using custom comparator logic."],
                ["reverse(List)", "Reverses the order of elements in the list."],
                ["shuffle(List)", "Randomly permutes the elements — useful for games or test cases."],
                ["swap(List, i, j)", "Swaps elements at positions `i` and `j`."],
                ["rotate(List, distance)", "Rotates elements in the list by a given distance."],
                ["max(Collection)", "Returns the maximum element based on natural ordering."],
                ["max(Collection, Comparator)", "Returns the maximum element using custom comparator."],
                ["min(Collection)", "Returns the minimum element based on natural ordering."],
                ["min(Collection, Comparator)", "Returns the minimum element using custom comparator."],
                ["frequency(Collection, Object)", "Counts how many times an element appears."],
                ["disjoint(Collection, Collection)", "Returns true if two collections have no elements in common."],
                ["replaceAll(List, oldVal, newVal)", "Replaces all occurrences of oldVal with newVal in the list."],
                ["fill(List, obj)", "Replaces all elements with a given object."],
                ["copy(dest, src)", "Copies all elements from source to destination list (must be same size or larger)."],
                ["binarySearch(List, key)", "Performs binary search on sorted list. Returns index if found."],
                ["unmodifiableList(List)", "Returns an unmodifiable (read-only) view of the list."],
                ["synchronizedList(List)", "Returns a thread-safe synchronized list wrapper."],
                ["checkedList(List, Class)", "Returns a type-safe list wrapper to prevent runtime ClassCastException."]
            ]
        },
        {
            type: "paragraph",
            text: "These methods are essential for efficient and clean collection manipulation in Java. Using them avoids repetitive boilerplate code and helps enforce immutability, thread-safety, and correctness."
        }
        , {
            type: "heading",
            level: 2,
            text: "Iterating Over Collections",
            anchor: "iterating-collections"
        },
        {
            type: "paragraph",
            text: "Java provides multiple ways to iterate through elements of a collection. Choosing the right iteration technique depends on the operation, type of collection, and performance needs."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Iterator**: Universal iterator for all Collection types. Allows safe removal during iteration.",
                "**ListIterator**: Bi-directional iterator available only for List types (e.g., ArrayList). Supports add(), set(), and backward traversal.",
                "**Enhanced for-loop**: Also known as 'for-each loop', it is concise and works for all collections and arrays. Does not support index-based access or element removal.",
                "**Java 8+ forEach() with Lambda**: Functional-style iteration using `collection.forEach(item -> {...})`. Clean and expressive for read-only access."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `// 1. Iterator example
Iterator<String> itr = list.iterator();
while (itr.hasNext()) {
  System.out.println(itr.next());
}

// 2. ListIterator example (bi-directional)
ListIterator<String> listItr = list.listIterator();
while (listItr.hasNext()) {
  System.out.println(listItr.next());
}
while (listItr.hasPrevious()) {
  System.out.println(listItr.previous());
}

// 3. Enhanced for-loop
for (String item : list) {
  System.out.println(item);
}

// 4. forEach with lambda
list.forEach(item -> System.out.println(item));`
        },
        {
            type: "paragraph",
            text: "Use `Iterator` when you need to remove items while traversing. Use `ListIterator` for flexible bidirectional access. Enhanced for-loop is ideal for simple read-only iterations, while `forEach()` suits modern, lambda-based clean code."
        }
        , {
            type: "heading",
            level: 2,
            text: "Fail-Fast vs Fail-Safe Iterators",
            anchor: "fail-fast-vs-fail-safe"
        },
        {
            type: "paragraph",
            text: "Java provides two types of iterators based on how they handle concurrent modifications: Fail-Fast and Fail-Safe. Understanding their behavior is important for writing robust, thread-safe code."
        },
        {
            type: "table",
            headers: ["Type", "Behavior", "Examples", "Thread-Safety"],
            rows: [
                [
                    "Fail-Fast",
                    "Throws ConcurrentModificationException if the collection is modified while iterating (except via iterator's own remove method).",
                    "`ArrayList`, `HashMap`, `HashSet`",
                    "Not thread-safe"
                ],
                [
                    "Fail-Safe",
                    "Iterates over a cloned copy of the collection, so changes do not affect the iterator. No exceptions are thrown.",
                    "`ConcurrentHashMap`, `CopyOnWriteArrayList`",
                    "Thread-safe"
                ]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `// Fail-Fast Example
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");

for (String s : list) {
  list.add("C"); // throws ConcurrentModificationException
}

// Fail-Safe Example
CopyOnWriteArrayList<String> safeList = new CopyOnWriteArrayList<>();
safeList.add("X");
safeList.add("Y");

for (String s : safeList) {
  safeList.add("Z"); // no exception, safe iteration
}`
        },
        {
            type: "paragraph",
            text: "Use fail-safe collections in multi-threaded environments to avoid runtime exceptions. Fail-fast is more efficient for single-threaded or controlled concurrent usage."
        }
        , {
            type: "heading",
            level: 2,
            text: "Synchronized vs Concurrent Collections",
            anchor: "synchronized-vs-concurrent"
        },
        {
            type: "paragraph",
            text: "Java provides different mechanisms for thread-safe collection handling: legacy synchronized collections and modern concurrent collections. Understanding their behavior helps in choosing the right data structure for multi-threaded applications."
        },
        {
            type: "table",
            headers: ["Type", "Description", "Examples", "Performance"],
            rows: [
                [
                    "Synchronized Collections",
                    "Thread-safe but use synchronized blocks which may cause contention and performance issues.",
                    "`Vector`, `Hashtable`, `Collections.synchronizedList()`",
                    "Slower under high concurrency"
                ],
                [
                    "Concurrent Collections",
                    "Designed for high-concurrency with better performance and scalability using non-blocking algorithms.",
                    "`ConcurrentHashMap`, `CopyOnWriteArrayList`, `BlockingQueue`",
                    "Faster and more scalable"
                ]
            ]
        },
        {
            type: "paragraph",
            text: "Synchronized collections are suitable for low-concurrency environments, while concurrent collections should be preferred for modern, multi-threaded applications."
        },
        {
            type: "code",
            language: "java",
            code: `// Synchronized collection using wrapper
List<String> syncList = Collections.synchronizedList(new ArrayList<>());

// Concurrent collection example
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("apple", 3);
map.put("banana", 5);`
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Vector** and **Hashtable** are legacy synchronized classes.",
                "`Collections.synchronizedXXX()` wraps standard collections for basic thread-safety.",
                "`ConcurrentHashMap` allows concurrent reads and thread-safe writes.",
                "`CopyOnWriteArrayList` is efficient for read-heavy scenarios with infrequent writes.",
                "`BlockingQueue` is used in producer-consumer scenarios with built-in blocking operations."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "Hashing and Hash Functions",
            anchor: "hashing-and-hash-functions"
        },
        {
            type: "paragraph",
            text: "Hashing is a core concept behind collections like `HashMap` and `HashSet`, enabling fast lookup, insertion, and deletion. It relies on the use of `hashCode()` and `equals()` methods to distribute keys into buckets efficiently."
        },
        {
            type: "heading",
            level: 3,
            text: "How HashMap Uses hashCode() and equals()"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`hashCode()` determines the bucket index for a key.",
                "`equals()` ensures uniqueness within the bucket during collision handling.",
                "Both methods must be overridden properly in custom key classes to ensure consistent behavior."
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Why Override Both hashCode() and equals()"
        },
        {
            type: "paragraph",
            text: "Overriding only one can break the contract expected by hash-based collections:"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "If two objects are equal (`equals()` returns true), they must have the same hash code.",
                "Failing to override `hashCode()` can result in keys being lost or duplicated in a `HashMap` or `HashSet`."
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Core Concepts"
        },
        {
            type: "table",
            headers: ["Term", "Description"],
            rows: [
                ["Bucket", "Logical location where entries with same hash code are grouped."],
                ["Collision", "Occurs when multiple keys have the same hash code."],
                ["Chaining", "Method to resolve collisions by using a list or tree of entries in a bucket."],
                ["Load Factor", "Defines when to resize the map (default is 0.75)."],
                ["Resizing", "HashMap automatically increases capacity when load factor threshold is crossed."]
            ]
        },
        {
            type: "code",
            language: "java",
            code: `class Employee {
  private int id;
  private String name;

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Employee)) return false;
    Employee emp = (Employee) o;
    return id == emp.id && name.equals(emp.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name);
  }
}`
        },
        {
            type: "paragraph",
            text: "The `Objects.hash()` method simplifies generating a hash code that includes multiple fields. Proper implementation of these methods ensures correct behavior in hash-based collections."
        }
        , {
            type: "heading",
            level: 2,
            text: "Sorting and Ordering in Java Collections",
            anchor: "sorting-and-ordering"
        },
        {
            type: "paragraph",
            text: "Java provides flexible mechanisms for sorting collections through natural ordering (`Comparable`) and custom ordering (`Comparator`). Sorting is essential for organizing data and is supported directly in various collection classes."
        },
        {
            type: "heading",
            level: 3,
            text: "Natural Ordering – Using Comparable",
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "A class implements `Comparable<T>` to define its natural ordering.",
                "Override the `compareTo(T o)` method to specify sorting logic.",
                "Used by `Collections.sort()` and `TreeSet`, `TreeMap` when no custom comparator is given."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `class Student implements Comparable<Student> {
  int rollNo;
  String name;

  public int compareTo(Student s) {
    return this.rollNo - s.rollNo; // Ascending order by roll number
  }
}`
        },
        {
            type: "heading",
            level: 3,
            text: "Custom Ordering – Using Comparator"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Use `Comparator<T>` to define multiple or alternative sorting logics.",
                "Pass it to `Collections.sort(list, comparator)` or constructor of `TreeSet`, `TreeMap`.",
                "Useful when you want different sorting orders without modifying the class."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Comparator<Student> byName = new Comparator<Student>() {
  public int compare(Student a, Student b) {
    return a.name.compareTo(b.name); // Sort by name
  }
};`
        },
        {
            type: "heading",
            level: 3,
            text: "Sorting Collections"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`Collections.sort(list)` – Sorts based on `Comparable`.",
                "`Collections.sort(list, comparator)` – Uses provided `Comparator`.",
                "`list.sort(comparator)` – Java 8+ lambda-style sorting."
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Sorted Collections"
        },
        {
            type: "table",
            headers: ["Collection", "Sorting Behavior"],
            rows: [
                ["TreeSet", "Automatically sorts elements using natural or custom order."],
                ["TreeMap", "Keys are sorted using natural or custom `Comparator`."],
                ["PriorityQueue", "Internally sorted for priority retrieval, not full iteration order."]
            ]
        },
        {
            type: "paragraph",
            text: "By leveraging `Comparable` and `Comparator`, Java collections can be sorted efficiently, supporting both fixed and flexible ordering logic."
        }
        , {
            type: "heading",
            level: 2,
            text: "Legacy Collection Classes",
            anchor: "legacy-collection-classes"
        },
        {
            type: "paragraph",
            text: "Before the introduction of the Java Collections Framework in Java 1.2, Java included several collection classes like Vector, Hashtable, and Stack. These classes are still part of Java for backward compatibility, but are generally discouraged in favor of newer, more flexible alternatives."
        },
        {
            type: "table",
            headers: ["Class", "Description", "Recommended Replacement"],
            rows: [
                ["Vector", "Resizable array, synchronized methods.", "ArrayList (with Collections.synchronizedList() if needed)"],
                ["Hashtable", "Key-value map, synchronized methods, does not allow null keys.", "HashMap or ConcurrentHashMap"],
                ["Stack", "LIFO stack based on Vector.", "Deque (e.g., ArrayDeque)"],
                ["Enumeration", "Legacy iterator-like interface.", "Iterator or enhanced for-loop"]
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Why Legacy Classes Are Discouraged"
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Synchronized by default – leads to performance issues in single-threaded environments.",
                "Less flexible – lack modern APIs like `Iterator`, `Stream`, or lambda support.",
                "Thread-safety is better handled with `java.util.concurrent` classes.",
                "Modern alternatives provide better performance and design patterns."
            ]
        },
        {
            type: "paragraph",
            text: "It's recommended to use modern collection classes from the `java.util` and `java.util.concurrent` packages to ensure better performance, readability, and maintainability in your applications."
        }
        , {
            type: "heading",
            level: 2,
            text: "Wrapper Classes in Collections",
            anchor: "wrapper-classes-in-collections"
        },
        {
            type: "paragraph",
            text: "Java collections work only with objects, not primitive types. To store primitive values like int or double in collections such as List or Map, Java provides corresponding wrapper classes. Autoboxing and unboxing automatically convert between primitives and objects."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Primitives like int, double, char cannot be used directly in collections.",
                "Use wrapper classes: Integer, Double, Character, etc.",
                "Autoboxing: Automatically converts int to Integer when adding to collection.",
                "Unboxing: Automatically converts Integer to int when retrieving from collection."
            ]
        },
        {
            type: "table",
            headers: ["Primitive Type", "Wrapper Class"],
            rows: [
                ["int", "Integer"],
                ["double", "Double"],
                ["char", "Character"],
                ["boolean", "Boolean"],
                ["long", "Long"],
                ["float", "Float"],
                ["short", "Short"],
                ["byte", "Byte"]
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Generics and Wrapper Types"
        },
        {
            type: "paragraph",
            text: "Collections use generics to provide type safety and avoid casting. Generics work only with reference types, so you must use wrapper classes (e.g., Integer instead of int) in generic collections."
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> numbers = new ArrayList<>();
numbers.add(10); // Autoboxing from int to Integer
int x = numbers.get(0); // Unboxing from Integer to int`
        },
        {
            type: "paragraph",
            text: "Using wrapper types with generics ensures compile-time type checking and prevents runtime ClassCastExceptions."
        }
        , {
            type: "heading",
            level: 2,
            text: "Generics in Collections",
            anchor: "generics-in-collections"
        },
        {
            type: "paragraph",
            text: "Generics allow you to define classes, interfaces, and methods with type parameters. In Java Collections, generics provide type safety and eliminate the need for explicit casting, reducing runtime errors and improving code clarity."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Generics enforce compile-time type checking.",
                "Avoids `ClassCastException` by eliminating unchecked conversions.",
                "Improves readability and maintainability of code."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `List<String> names = new ArrayList<>();
names.add("Alice");
String first = names.get(0); // No casting needed`
        },
        {
            type: "heading",
            level: 3,
            text: "Why Use Generics in Collections?"
        },
        {
            type: "table",
            headers: ["Without Generics", "With Generics"],
            rows: [
                [
                    `List list = new ArrayList();\nlist.add("hello");\nString s = (String) list.get(0);`,
                    `List<String> list = new ArrayList<>();\nlist.add("hello");\nString s = list.get(0);`
                ]
            ]
        },
        {
            type: "heading",
            level: 3,
            text: "Wildcards in Generics"
        },
        {
            type: "paragraph",
            text: "Wildcards provide flexibility when working with generics. They help in creating generic methods that can handle multiple types without knowing the exact class."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "`<?>` — Unbounded wildcard: accepts any type.",
                "`<? extends Number>` — Upper bounded wildcard: accepts `Number` or any of its subclasses.",
                "`<? super Integer>` — Lower bounded wildcard: accepts `Integer` or any of its superclasses."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `public void printList(List<?> list) {
  for (Object obj : list) {
    System.out.println(obj);
  }
}

List<Integer> nums = List.of(1, 2, 3);
printList(nums); // works with any type`
        },
        {
            type: "paragraph",
            text: "Use bounded wildcards when you need to restrict the type range, and unbounded when you're just reading data. Avoid wildcard use when you need to modify the collection."
        }
        , {
            type: "heading",
            level: 2,
            text: "Null Handling in Collections",
            anchor: "null-handling-in-collections"
        },
        {
            type: "paragraph",
            text: "Different Java collection classes handle null values and null keys differently. Understanding how each collection handles nulls is important to avoid unexpected `NullPointerExceptions` or logical bugs."
        },
        {
            type: "table",
            headers: ["Collection Type", "Null Key Allowed", "Null Values Allowed", "Notes"],
            rows: [
                ["HashMap", "Yes (only one)", "Yes (multiple)", "Permits one null key and multiple null values."],
                ["Hashtable", "No", "No", "Legacy synchronized class – does not allow nulls."],
                ["LinkedHashMap", "Yes", "Yes", "Same null support as HashMap."],
                ["TreeMap (natural ordering)", "No", "Yes", "Null key throws `NullPointerException` if comparator is not used."],
                ["TreeMap (with custom comparator)", "Depends", "Yes", "Allows null keys only if comparator supports it."],
                ["ConcurrentHashMap", "No", "No", "Thread-safe and disallows nulls to avoid ambiguity."],
                ["ArrayList", "N/A", "Yes", "Can store multiple null elements."],
                ["HashSet", "N/A", "Yes", "Backed by HashMap – allows one null element."],
                ["TreeSet", "N/A", "No", "Nulls not allowed if natural ordering is used."]
            ]
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "Use caution when inserting null keys/values in sorted structures like TreeMap or TreeSet.",
                "Concurrent collections disallow nulls for safety in multi-threaded environments.",
                "Null values are generally allowed in most collections, but their behavior may vary based on implementation."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "Time Complexity of Collection Operations",
            anchor: "time-complexity-collections"
        },
        {
            type: "paragraph",
            text: "Understanding the time complexity of core operations for different collection types helps in choosing the right data structure for performance-critical applications. Below is a comparison of common operations like get, add, remove for various collections."
        },
        {
            type: "table",
            headers: ["Collection Type", "Get", "Add", "Remove", "Notes"],
            rows: [
                ["ArrayList", "O(1)", "O(1) (amortized)", "O(n)", "Fast random access, slow inserts/removals in the middle."],
                ["LinkedList", "O(n)", "O(1) (at ends)", "O(1) (at ends)", "Efficient at head/tail, but slow for index access."],
                ["HashSet", "N/A", "O(1)", "O(1)", "No duplicates, backed by HashMap."],
                ["HashMap", "O(1)", "O(1)", "O(1)", "Average case; worst case is O(n) with poor hash functions."],
                ["LinkedHashMap", "O(1)", "O(1)", "O(1)", "Maintains insertion order."],
                ["TreeSet", "O(log n)", "O(log n)", "O(log n)", "Maintains sorted order using Red-Black tree."],
                ["TreeMap", "O(log n)", "O(log n)", "O(log n)", "Sorted by keys, good for range queries."],
                ["ConcurrentHashMap", "O(1)", "O(1)", "O(1)", "Thread-safe and scalable under concurrency."]
            ]
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Choose ArrayList** when fast indexed access is needed.",
                "**Use LinkedList** for frequent additions/removals at ends.",
                "**HashMap and HashSet** provide constant time operations on average, but rely on good hash functions.",
                "**TreeMap and TreeSet** offer ordered data with logarithmic performance."
            ]
        }
        , {
            type: "heading",
            level: 2,
            text: "Best Practices and Use Cases",
            anchor: "collections-best-practices"
        },
        {
            type: "paragraph",
            text: "Selecting the appropriate collection type is crucial for writing clean, efficient, and maintainable code. Below are some best practices and typical use cases based on the behavior and performance of each Java Collection type."
        },
        {
            type: "list",
            style: "unordered",
            items: [
                "**Use ArrayList** when fast random access is required and insertions/removals are infrequent.",
                "**Use LinkedList** when frequent insertions/deletions at both ends are needed, but avoid for random access.",
                "**Use HashMap** for key-based fast lookups where order is not important.",
                "**Use TreeMap** if you need sorted key-value pairs or range-based queries.",
                "**Use HashSet** to store unique elements without caring about order.",
                "**Use LinkedHashSet** if you want uniqueness and insertion order.",
                "**Use TreeSet** to maintain elements in a sorted, unique set.",
                "**Use ConcurrentHashMap** in multi-threaded applications for high-performance thread-safe maps.",
                "**Avoid legacy classes** like Vector and Hashtable unless specifically required for backward compatibility."
            ]
        },
        {
            type: "paragraph",
            text: "Choose the collection that best fits your specific use case to avoid performance bottlenecks and ensure code clarity."
        }

    ],
    summary: {
        keyPoints: [
            "Java Collections Framework provides a standard way to manage groups of data.",
            "It overcomes the limitations of arrays like fixed size and lack of utility methods.",
            "Collections are categorized into List, Set, Queue, Deque, and Map.",
            "It improves code readability, maintainability, and reusability.",
            "Built-in algorithms and dynamic resizing make collections efficient."
        ]
    },
    nextSteps: [
        {
            topicId: "collections-list-types",
            reason: "Explore the most used List implementations like ArrayList and LinkedList."
        },
        {
            topicId: "collections-map-types",
            reason: "Understand key-value data structures such as HashMap and TreeMap."
        }
    ]
}

