export default {
    meta: {
        id: "java-streams-intro",
        title: "Introduction to Java Streams",
        description: "Learn the basics of Java Streams, their features, advantages, and differences from Collections",
        category: "programming",
        subcategory: "java",
        difficulty: "intermediate",
        prerequisites: ["java-collections"],
        created: "2025-06-24",
        updated: "2025-06-24",
        duration: 20,
        keywords: ["java", "streams", "functional programming", "collections", "lazy evaluation"]
    },
    content: [
        {
            type: "heading",
            level: 1,
            text: "Introduction to Java Streams",
            anchor: "intro-to-streams"
        },
        {
            type: "paragraph",
            text: "Java Streams, introduced in Java 8, provide a functional approach to processing sequences of elements. Unlike Collections, which store data, Streams are about describing computations on data, often in a chainable and declarative manner."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Think of a stream like a water pipeline — water (data) flows through filters (operations) until it reaches a collector (sink)."
        },
        {
            type: "heading",
            level: 2,
            text: "Core Characteristics of Streams",
            anchor: "stream-features"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**Declarative:** Code focuses on *what* to do, not *how* (e.g., use `.filter()` instead of writing a loop).",
                "**Lazy Evaluation:** Intermediate operations are not executed until a terminal operation is invoked.",
                "**Parallelizable:** Stream pipelines can be processed in parallel with `.parallelStream()`.",
                "**Non-storing:** A Stream does not store elements; it pulls from a source like a Collection or array."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `List<String> names = List.of("Alice", "Bob", "Charlie");
names.stream()
     .filter(name -> name.length() > 3)
     .map(String::toUpperCase)
     .forEach(System.out::println);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Streams = Source + Zero/More Intermediate Operations + One Terminal Operation"
        },
        {
            type: "heading",
            level: 2,
            text: "Stream vs Collection",
            anchor: "stream-vs-collection"
        },
        {
            type: "table",
            headers: ["Feature", "Stream", "Collection"],
            rows: [
                ["Data Storage", "Does NOT store data", "Stores elements"],
                ["Traversal", "One-time use", "Can iterate multiple times"],
                ["Evaluation", "Lazy", "Eager"],
                ["Operations", "Functional (map, filter, reduce)", "Imperative (looping)"],
                ["Parallelism", "Supports easy parallelism", "Needs manual multithreading"]
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Stream API Package",
            anchor: "stream-api-package"
        },
        {
            type: "paragraph",
            text: "The Stream API is part of the `java.util.stream` package. It provides the core interfaces like `Stream<T>`, `IntStream`, `LongStream`, `DoubleStream`, along with utility classes like `Collectors`, `StreamSupport`, etc."
        },
        {
            type: "code",
            language: "java",
            code: `import java.util.stream.Stream;

Stream<String> stream = Stream.of("Java", "Streams", "Are", "Cool");`
        },
        {
            type: "heading",
            level: 2,
            text: "Key Stream Interfaces",
            anchor: "stream-interfaces"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`Stream<T>` – Generic stream of reference types",
                "`IntStream`, `LongStream`, `DoubleStream` – For primitives (no boxing)",
                "`BaseStream<T,S>` – Superinterface for all streams"
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "Edge Case: Stream cannot be reused once a terminal operation is performed – doing so throws `IllegalStateException`."
        },
        {
            type: "paragraph",
            text: "Attempting to call `.forEach()` or `.count()` again on the same stream instance will fail because the stream is considered 'consumed'."
        },
        {
            type: "code",
            language: "java",
            code: `Stream<String> s = Stream.of("A", "B");
s.forEach(System.out::println); 
s.forEach(System.out::println); // Error: Stream already consumed`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Think of streams as *pipes*, not *buckets* — once data flows, the pipe is empty!"
        }, {
            type: "heading",
            level: 1,
            text: "Stream Creation",
            anchor: "stream-creation"
        },
        {
            type: "paragraph",
            text: "Java provides multiple ways to create streams from different sources like collections, arrays, values, or even infinite generators. Choosing the right creation method helps optimize performance and readability."
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Creating a stream is like deciding where the water in your pipeline comes from — a tank (collection), a tap (values), or an endless source (infinite stream)."
        },

        {
            type: "heading",
            level: 2,
            text: "1. From Collections",
            anchor: "stream-from-collection"
        },
        {
            type: "paragraph",
            text: "Most Java collections (like List, Set) support the `.stream()` and `.parallelStream()` methods to create a sequential or parallel stream."
        },
        {
            type: "code",
            language: "java",
            code: `List<String> names = List.of("A", "B", "C");
Stream<String> nameStream = names.stream();`
        },

        {
            type: "heading",
            level: 2,
            text: "2. From Arrays",
            anchor: "stream-from-array"
        },
        {
            type: "paragraph",
            text: "Use `Arrays.stream()` to create a stream from an array."
        },
        {
            type: "code",
            language: "java",
            code: `int[] numbers = {1, 2, 3, 4};
IntStream numStream = Arrays.stream(numbers);`
        },

        {
            type: "heading",
            level: 2,
            text: "3. From Values",
            anchor: "stream-from-values"
        },
        {
            type: "paragraph",
            text: "`Stream.of()` creates a stream from a fixed set of values."
        },
        {
            type: "code",
            language: "java",
            code: `Stream<Integer> numStream = Stream.of(10, 20, 30);`
        },

        {
            type: "heading",
            level: 2,
            text: "4. Infinite Streams",
            anchor: "infinite-streams"
        },
        {
            type: "paragraph",
            text: "Streams can be generated infinitely using `Stream.generate()` or `Stream.iterate()`. These must be bounded (e.g., with `.limit()`) to avoid non-terminating operations."
        },
        {
            type: "table",
            headers: ["Method", "Description", "Example"],
            rows: [
                ["`Stream.generate()`", "Uses a `Supplier<T>` to produce infinite data", `Stream.generate(Math::random).limit(5)`],
                ["`Stream.iterate()`", "Applies a function to seed repeatedly", `Stream.iterate(0, n -> n + 2).limit(5)`]
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Infinite streams **must** be limited with `.limit()` or they will run forever!"
        },

        {
            type: "heading",
            level: 2,
            text: "5. Primitive Streams",
            anchor: "primitive-streams"
        },
        {
            type: "paragraph",
            text: "Java provides special streams for primitives to avoid boxing overhead: `IntStream`, `LongStream`, and `DoubleStream`."
        },
        {
            type: "list",
            style: "disc",
            items: [
                "`IntStream.range(1, 5)` → stream of 1, 2, 3, 4",
                "`LongStream.of(100L, 200L)` → stream of long values",
                "`DoubleStream.generate(Math::random).limit(3)` → stream of 3 random doubles"
            ]
        },
        {
            type: "code",
            language: "java",
            code: `IntStream intStream = IntStream.rangeClosed(1, 5);
intStream.forEach(System.out::println);`
        },

        {
            type: "alert",
            variant: "info",
            content: "Trick to Remember: `Stream.of()` = fixed values, `generate()` = constant supplier, `iterate()` = evolving seed"
        },

        {
            type: "alert",
            variant: "warning",
            content: "⚠️ `.stream()` is **not available on arrays** — use `Arrays.stream()` instead!"
        }, {
            type: "heading",
            level: 1,
            text: "Types of Stream Operations",
            anchor: "stream-operations-types"
        },
        {
            type: "paragraph",
            text: "Stream operations in Java are classified into two types: **intermediate operations**, which transform or filter data lazily, and **terminal operations**, which produce a result or side-effect and trigger the execution of the pipeline."
        },
        {
            type: "heading",
            level: 2,
            text: "Intermediate Operations (Lazy)",
            anchor: "intermediate-ops"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`filter()`** – Filters elements based on a predicate.\n`stream.filter(x -> x > 10)`",
                "**`map()`** – Transforms each element using a function.\n`stream.map(String::toUpperCase)`",
                "**`flatMap()`** – Flattens nested structures (e.g., Stream<List<T>> → Stream<T>).\n`stream.flatMap(list -> list.stream())`",
                "**`distinct()`** – Removes duplicate elements using `equals()`.",
                "**`sorted()`** – Sorts elements either naturally or using a comparator.",
                "**`peek()`** – Performs an action for debugging without modifying the stream.",
                "**`limit(n)`** – Truncates the stream to at most `n` elements.",
                "**`skip(n)`** – Skips the first `n` elements of the stream."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Intermediate operations are lazy – they do nothing until a terminal operation is invoked."
        },
        {
            type: "heading",
            level: 2,
            text: "Terminal Operations (Eager)",
            anchor: "terminal-ops"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`forEach()`** – Performs an action for each element.",
                "**`collect()`** – Converts the stream into a collection, string, or summary via `Collectors`.",
                "**`reduce()`** – Combines elements using an accumulator function.\n`stream.reduce(0, Integer::sum)`",
                "**`count()`** – Returns the number of elements.",
                "**`min()` / `max()`** – Finds the min/max element using a comparator.",
                "**`anyMatch()` / `allMatch()` / `noneMatch()`** – Checks matching conditions for elements.",
                "**`findFirst()` / `findAny()`** – Returns the first/any element as `Optional`."
            ]
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Once a terminal operation is called, the stream is consumed and cannot be reused."
        }
        , {
            type: "heading",
            level: 1,
            text: "Mapping and Transformation",
            anchor: "mapping-transformation"
        },
        {
            type: "paragraph",
            text: "Mapping operations transform the elements of a stream. Java provides `map()` for one-to-one transformations and `flatMap()` for flattening nested structures into a single stream."
        },
        {
            type: "heading",
            level: 2,
            text: "map() – One-to-One Mapping",
            anchor: "map-operation"
        },
        {
            type: "paragraph",
            text: "`map()` applies a function to each element and returns a stream of transformed elements. The size of the stream remains the same."
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> numbers = List.of(1, 2, 3);
List<Integer> squares = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());`
        },
        {
            type: "alert",
            variant: "info",
            content: "Use `map()` when each element transforms into exactly one output (e.g., uppercasing, squaring)."
        },
        {
            type: "heading",
            level: 2,
            text: "flatMap() – One-to-Many Flattening",
            anchor: "flatmap-operation"
        },
        {
            type: "paragraph",
            text: "`flatMap()` is used when each element produces multiple values (e.g., a list of words from a sentence). It flattens nested streams into a single stream."
        },
        {
            type: "code",
            language: "java",
            code: `List<String> sentences = List.of("hello world", "java streams");
List<String> words = sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
    .collect(Collectors.toList());`
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: `map()` = 1 item → 1 box; `flatMap()` = 1 item → multiple boxes, then unpack them all into one row."
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trick: `map()` returns `Stream<Stream<T>>` if used with collections — use `flatMap()` to avoid nesting!"
        }
        , {
            type: "heading",
            level: 1,
            text: "Filtering",
            anchor: "stream-filtering"
        },
        {
            type: "paragraph",
            text: "The `filter()` method is used to select elements that match a given predicate. It returns a new stream containing only the elements that pass the condition."
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);
List<Integer> evens = numbers.stream()
    .filter(x -> x % 2 == 0)
    .collect(Collectors.toList());`
        },
        {
            type: "code",
            language: "java",
            code: `List<String> names = List.of("Alice", "Bob", "Angela", "David");
List<String> aNames = names.stream()
    .filter(s -> s.startsWith("A"))
    .collect(Collectors.toList());`
        },
        {
            type: "alert",
            variant: "info",
            content: "`filter()` is commonly used for extracting subsets of data based on boolean conditions."
        },
        {
            type: "alert",
            variant: "warning",
            content: "Trick: Always combine `filter()` with terminal ops like `collect()` or `count()` to trigger evaluation."
        }
        , {
            type: "heading",
            level: 1,
            text: "Sorting",
            anchor: "stream-sorting"
        },
        {
            type: "paragraph",
            text: "The `sorted()` operation is used to sort stream elements. It supports both natural ordering and custom comparators for advanced sorting logic."
        },
        {
            type: "heading",
            level: 2,
            text: "1. Natural Order Sorting",
            anchor: "natural-sorting"
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> numbers = List.of(5, 2, 9, 1);
List<Integer> sorted = numbers.stream()
    .sorted()
    .collect(Collectors.toList());`
        },
        {
            type: "heading",
            level: 2,
            text: "2. Custom Comparator Sorting",
            anchor: "custom-sorting"
        },
        {
            type: "code",
            language: "java",
            code: `List<String> names = List.of("Bob", "Alice", "David");
List<String> sortedByLength = names.stream()
    .sorted(Comparator.comparing(String::length))
    .collect(Collectors.toList());`
        },
        {
            type: "paragraph",
            text: "To sort in reverse order, you can chain `.reversed()` on the comparator."
        },
        {
            type: "code",
            language: "java",
            code: `List<String> reverseAlpha = names.stream()
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList());`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `Comparator.comparing(Class::method).reversed()` for complex custom sorting with reverse."
        },
        {
            type: "alert",
            variant: "warning",
            content: "`sorted()` without a comparator requires elements to implement `Comparable`, or it throws `ClassCastException`."
        }
        , {
            type: "heading",
            level: 1,
            text: "Collectors in Java Streams",
            anchor: "stream-collectors"
        },
        {
            type: "paragraph",
            text: "Collectors are utility methods from `java.util.stream.Collectors` used in the terminal `collect()` operation to accumulate stream elements into collections, strings, maps, statistics, and more."
        },
        {
            type: "heading",
            level: 2,
            text: "Common Collector Methods",
            anchor: "collector-methods"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`toList()`** – Collects elements into a `List`.\n`stream.collect(Collectors.toList())`",
                "**`toSet()`** – Collects elements into a `Set` (removes duplicates).",
                "**`toMap(k, v)`** – Collects into a `Map` using key and value mappings.\n`Collectors.toMap(x -> x.id, x -> x.name)`",
                "**`joining()`** – Concatenates strings with optional delimiter/prefix/suffix.\n`Collectors.joining(\", \")`",
                "**`counting()`** – Returns the total number of elements as `Long`.",
                "**`summarizingInt()` / `summarizingDouble()`** – Returns count, min, max, average, and sum in one step.",
                "**`groupingBy()`** – Groups elements by a classifier function.\n`Collectors.groupingBy(x -> x.category)`",
                "**`partitioningBy()`** – Partitions elements based on a predicate into `Map<Boolean, List<T>>`."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `List<String> words = List.of("apple", "banana", "apricot", "blueberry");

Map<Boolean, List<String>> partitioned = words.stream()
    .collect(Collectors.partitioningBy(s -> s.startsWith("a")));

Map<Character, List<String>> grouped = words.stream()
    .collect(Collectors.groupingBy(s -> s.charAt(0)));`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Use `groupingBy()` when the keys are dynamic, and `partitioningBy()` when the condition is boolean."
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ `toMap()` will throw `IllegalStateException` if duplicate keys occur — resolve with a merge function if needed."
        }
        , {
            type: "heading",
            level: 1,
            text: "Reduction",
            anchor: "stream-reduction"
        },
        {
            type: "paragraph",
            text: "A reduction operation combines elements of a stream into a single result. The `reduce()` method is commonly used for summing, multiplying, finding minimum/maximum, or building strings."
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> list = List.of(1, 2, 3, 4, 5);

// Sum of elements
int sum = list.stream().reduce(0, (a, b) -> a + b);`
        },
        {
            type: "paragraph",
            text: "`reduce(identity, accumulator)` takes an initial value (identity) and a binary operation that combines two values. The identity is returned when the stream is empty."
        },
        {
            type: "code",
            language: "java",
            code: `// Max element
int max = list.stream().reduce(Integer.MIN_VALUE, Integer::max);

// Product of elements
int product = list.stream().reduce(1, (a, b) -> a * b);`
        },
        {
            type: "alert",
            variant: "info",
            content: "You can use `reduce()` without an identity to return an `Optional<T>` in case the stream is empty."
        },
        {
            type: "code",
            language: "java",
            code: `Optional<Integer> optionalSum = list.stream().reduce((a, b) -> a + b);`
        },
        {
            type: "alert",
            variant: "warning",
            content: "Avoid using `reduce()` for mutable reduction like collecting into a list — prefer `collect()` for that."
        },
        {
            type: "alert",
            variant: "info",
            content: "Memory Tip: `reduce` = repeatedly apply a binary operation to 'reduce' all values to one."
        }
        , {
            type: "heading",
            level: 1,
            text: "Optional in Streams",
            anchor: "stream-optional"
        },
        {
            type: "paragraph",
            text: "Some stream operations return an `Optional<T>` to safely represent the result when a value may or may not exist. This avoids `NullPointerException` and encourages safe handling."
        },
        {
            type: "heading",
            level: 2,
            text: "Stream Methods Returning Optional",
            anchor: "optional-methods"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`findFirst()`** – Returns the first element in the stream.\n`Optional<T> result = stream.findFirst();`",
                "**`findAny()`** – Returns any element (useful in parallel streams).",
                "**`min()` / `max()`** – Finds the minimum/maximum element using a comparator.\nReturns `Optional<T>` in case the stream is empty.",
                "**`reduce()`** – When used without an identity, returns an `Optional<T>`."
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Safe Optional Handling",
            anchor: "optional-handling"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`ifPresent(Consumer)`** – Executes code only if value exists.",
                "**`orElse(default)`** – Returns default if no value is present.",
                "**`orElseGet(Supplier)`** – Lazily provides default.",
                "**`orElseThrow()`** – Throws exception if value is absent."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `Optional<String> name = List.of("A", "B").stream()
    .filter(s -> s.startsWith("Z"))
    .findFirst();

String result = name.orElse("Not Found");`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Optional is a wrapper box — always unwrap it safely using methods like `orElse()` or `ifPresent()`."
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Do not call `get()` on Optional without checking presence — it may throw `NoSuchElementException`."
        }
        , {
            type: "heading",
            level: 1,
            text: "Primitive Streams",
            anchor: "primitive-streams"
        },
        {
            type: "paragraph",
            text: "Java provides specialized stream types for primitive values: `IntStream`, `LongStream`, and `DoubleStream`. These avoid boxing overhead and include additional utility methods for performance and statistics."
        },
        {
            type: "heading",
            level: 2,
            text: "Types of Primitive Streams",
            anchor: "primitive-types"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`IntStream`** – Stream of `int` values",
                "**`LongStream`** – Stream of `long` values",
                "**`DoubleStream`** – Stream of `double` values"
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "Useful Methods",
            anchor: "primitive-methods"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`range(start, end)`** – Generates values from `start` (inclusive) to `end` (exclusive).\n`IntStream.range(1, 5)` → 1, 2, 3, 4",
                "**`rangeClosed(start, end)`** – Includes both start and end.\n`IntStream.rangeClosed(1, 5)` → 1, 2, 3, 4, 5",
                "**`sum()`** – Returns the total sum of elements.",
                "**`average()`** – Returns an `OptionalDouble` of the average value.",
                "**`summaryStatistics()`** – Returns count, sum, min, average, and max."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `IntStream stats = IntStream.rangeClosed(1, 5);
IntSummaryStatistics summary = stats.summaryStatistics();

System.out.println(summary.getSum());      // 15
System.out.println(summary.getAverage());  // 3.0`
        },
        {
            type: "alert",
            variant: "info",
            content: "Primitive streams are memory-efficient and faster for numeric computations."
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ `summaryStatistics()` consumes the stream, so do not use it more than once unless re-created."
        }
        , {
            type: "heading",
            level: 1,
            text: "Parallel Streams",
            anchor: "parallel-streams"
        },
        {
            type: "paragraph",
            text: "Parallel streams divide the data into multiple chunks and process them in parallel using the Fork/Join framework. They can improve performance on large datasets with independent operations."
        },
        {
            type: "heading",
            level: 2,
            text: "Creating a Parallel Stream",
            anchor: "creating-parallel-stream"
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);
int sum = numbers.parallelStream()
    .mapToInt(i -> i)
    .sum();`
        },
        {
            type: "heading",
            level: 2,
            text: "When to Use",
            anchor: "parallel-use-cases"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Large data sets (thousands+ elements)",
                "CPU-intensive operations (e.g., heavy computation)",
                "Independent operations (no shared state or ordering required)"
            ]
        },
        {
            type: "heading",
            level: 2,
            text: "When NOT to Use",
            anchor: "parallel-dont-use"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Small collections (overhead > gain)",
                "I/O-bound tasks (file or DB access)",
                "Operations with side effects (e.g., modifying shared data)",
                "Order-sensitive results (e.g., collecting to ordered lists)"
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life analogy: Think of parallel streams like dividing a big task among friends — works well only if tasks don’t depend on each other."
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Parallel streams don’t guarantee order unless used with `forEachOrdered()` — be cautious when order matters."
        }
        , {
            type: "heading",
            level: 1,
            text: "Short-Circuiting Operations",
            anchor: "short-circuiting-operations"
        },
        {
            type: "paragraph",
            text: "Short-circuiting operations allow the stream pipeline to stop processing as soon as a result is determined. They are efficient because they avoid unnecessary computation."
        },
        {
            type: "heading",
            level: 2,
            text: "Common Short-Circuiting Methods",
            anchor: "short-circuit-methods"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "**`limit(n)`** – Returns only the first `n` elements of the stream.\n`stream.limit(5)`",
                "**`skip(n)`** – Skips the first `n` elements.\n`stream.skip(3)`",
                "**`anyMatch(predicate)`** – Returns `true` if *any* element matches.\nStops at the first match.",
                "**`allMatch(predicate)`** – Returns `false` immediately if any element fails the condition.",
                "**`noneMatch(predicate)`** – Returns `false` if any element matches the condition.",
                "**`findFirst()`** – Returns the first element as `Optional<T>`.\nStops after finding the first.",
                "**`findAny()`** – Returns any element (non-deterministic in parallel streams)."
            ]
        },
        {
            type: "code",
            language: "java",
            code: `List<String> names = List.of("Alice", "Bob", "Charlie", "David");

boolean hasA = names.stream()
    .anyMatch(s -> s.startsWith("A"));  // true

Optional<String> first = names.stream()
    .filter(s -> s.length() > 3)
    .findFirst();`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: `match` operations stop processing as soon as result is known — they’re great for performance!"
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ `limit()` and `skip()` must come before terminal ops — they’re useless after `collect()` or `forEach()`."
        }
        , {
            type: "heading",
            level: 1,
            text: "Stream Reuse Issue",
            anchor: "stream-reuse-issue"
        },
        {
            type: "paragraph",
            text: "In Java, streams are consumable — once a terminal operation (like `forEach()`, `collect()`, etc.) is executed, the stream is closed and cannot be reused. Attempting to reuse it will throw an `IllegalStateException`."
        },
        {
            type: "code",
            language: "java",
            code: `Stream<String> stream = List.of("a", "b", "c").stream();

stream.forEach(System.out::println);  // OK
stream.forEach(System.out::println);  // Exception: stream has already been operated upon or closed`
        },
        {
            type: "heading",
            level: 2,
            text: "Solution 1: Use a Supplier",
            anchor: "stream-supplier"
        },
        {
            type: "code",
            language: "java",
            code: `Supplier<Stream<String>> streamSupplier = () -> List.of("a", "b", "c").stream();

streamSupplier.get().forEach(System.out::println);  // OK
streamSupplier.get().forEach(System.out::println);  // OK`
        },
        {
            type: "heading",
            level: 2,
            text: "Solution 2: Create a New Stream",
            anchor: "new-stream"
        },
        {
            type: "paragraph",
            text: "Simply call `.stream()` again on the source if it’s a collection or can be regenerated."
        },
        {
            type: "code",
            language: "java",
            code: `List<String> list = List.of("a", "b", "c");

list.stream().forEach(System.out::println);
list.stream().map(String::toUpperCase).forEach(System.out::println);`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: Streams are like pipes — once water flows through, you must get a new pipe!"
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Do not store a stream in a variable if you plan to use it multiple times — use a `Supplier` or regenerate it."
        }
        , {
            type: "heading",
            level: 1,
            text: "Common Use Cases of Streams",
            anchor: "stream-use-cases"
        },
        {
            type: "paragraph",
            text: "Java Streams are widely used to simplify and optimize data processing tasks. Here are some practical examples covering filtering, sorting, grouping, frequency counting, and flattening."
        },
        {
            type: "heading",
            level: 2,
            text: "1. Filtering Even/Odd Numbers and Null Removal",
            anchor: "filtering-use-case"
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, null, 6);

List<Integer> evens = numbers.stream()
    .filter(Objects::nonNull)
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());`
        },
        {
            type: "heading",
            level: 2,
            text: "2. Sorting Objects by Field",
            anchor: "sorting-use-case"
        },
        {
            type: "code",
            language: "java",
            code: `class Person {
  String name;
  int age;
  // constructor + getters
}

List<Person> sorted = people.stream()
    .sorted(Comparator.comparing(Person::getAge))
    .collect(Collectors.toList());`
        },
        {
            type: "heading",
            level: 2,
            text: "3. Grouping by Category",
            anchor: "grouping-use-case"
        },
        {
            type: "code",
            language: "java",
            code: `Map<String, List<Employee>> grouped = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));`
        },
        {
            type: "heading",
            level: 2,
            text: "4. Creating a Frequency Map",
            anchor: "frequency-map"
        },
        {
            type: "code",
            language: "java",
            code: `List<String> items = List.of("apple", "banana", "apple");

Map<String, Long> freq = items.stream()
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));`
        },
        {
            type: "heading",
            level: 2,
            text: "5. Flat Mapping Nested Lists",
            anchor: "flatmap-lists"
        },
        {
            type: "code",
            language: "java",
            code: `List<List<String>> nested = List.of(
  List.of("A", "B"),
  List.of("C", "D")
);

List<String> flat = nested.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());`
        },
        {
            type: "alert",
            variant: "info",
            content: "Real-life trick: Think of `flatMap()` as opening a box within a box — it flattens inner structures."
        }
        , {
            type: "heading",
            level: 1,
            text: "Best Practices for Using Java Streams",
            anchor: "stream-best-practices"
        },
        {
            type: "paragraph",
            text: "While Java Streams offer concise and powerful data processing, following best practices ensures code remains readable, efficient, and safe."
        },
        {
            type: "heading",
            level: 2,
            text: "1. Prefer Method References When Possible",
            anchor: "method-references"
        },
        {
            type: "code",
            language: "java",
            code: `List<String> upper = names.stream()
    .map(String::toUpperCase)  // cleaner than s -> s.toUpperCase()
    .collect(Collectors.toList());`
        },
        {
            type: "alert",
            variant: "info",
            content: "Method references make code cleaner and more readable when operations are simple."
        },
        {
            type: "heading",
            level: 2,
            text: "2. Avoid Stateful Operations",
            anchor: "stateful-ops"
        },
        {
            type: "code",
            language: "java",
            code: `List<String> unsafe = new ArrayList<>();
list.stream().forEach(unsafe::add); // ❌ Avoid modifying external state`
        },
        {
            type: "alert",
            variant: "warning",
            content: "⚠️ Stateful operations break stream purity and may cause bugs, especially in parallel streams."
        },
        {
            type: "heading",
            level: 2,
            text: "3. Combine Operations Thoughtfully",
            anchor: "combine-operations"
        },
        {
            type: "paragraph",
            text: "Chaining related operations (e.g., `filter → map → collect`) improves readability and avoids unnecessary temporary collections."
        },
        {
            type: "code",
            "language": "java",
            code: `List<String> result = list.stream()
    .filter(s -> s.length() > 3)
    .map(String::toLowerCase)
    .collect(Collectors.toList());`
        },
        {
            type: "heading",
            level: 2,
            text: "4. Use Parallel Streams with Caution",
            anchor: "parallel-caution"
        },
        {
            type: "list",
            style: "disc",
            items: [
                "Benchmark before and after using `parallelStream()`.",
                "Avoid parallel streams for small or I/O-bound tasks.",
                "Ensure operations are stateless and thread-safe."
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "Streams are most powerful when used with clean, stateless, and declarative logic."
        }
        , {
            type: "heading",
            level: 1,
            text: "Java 9+ Stream Enhancements",
            anchor: "stream-enhancements"
        },
        {
            type: "paragraph",
            text: "Java 9 introduced several powerful enhancements to the Stream API, making it easier to control stream flow and handle nullable values."
        },
        {
            type: "heading",
            level: 2,
            text: "1. `takeWhile()`",
            anchor: "takewhile"
        },
        {
            type: "paragraph",
            text: "Processes elements until the condition becomes false. Once false, remaining elements are ignored (even if they match again)."
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> numbers = List.of(1, 2, 3, 4, 0, 5, 6);
List<Integer> result = numbers.stream()
    .takeWhile(n -> n > 0)
    .collect(Collectors.toList());  // [1, 2, 3, 4]`
        },
        {
            type: "heading",
            level: 2,
            text: "2. `dropWhile()`",
            anchor: "dropwhile"
        },
        {
            type: "paragraph",
            text: "Skips elements as long as the condition is true. Starts processing once the condition becomes false."
        },
        {
            type: "code",
            language: "java",
            code: `List<Integer> result = numbers.stream()
    .dropWhile(n -> n > 0)
    .collect(Collectors.toList());  // [0, 5, 6]`
        },
        {
            type: "heading",
            level: 2,
            text: "3. `Stream.ofNullable()`",
            anchor: "ofnullable"
        },
        {
            type: "paragraph",
            text: "Creates a stream of 0 or 1 element depending on whether the object is null."
        },
        {
            type: "code",
            language: "java",
            code: `Stream.ofNullable("Hello")  // Stream with one element
Stream.ofNullable(null)       // Empty stream`
        },
        {
            type: "heading",
            level: 2,
            text: "4. Enhanced `iterate()`",
            anchor: "iterate-java9"
        },
        {
            type: "paragraph",
            text: "New form of `Stream.iterate()` supports a condition to stop iteration (previously only infinite possible)."
        },
        {
            type: "code",
            language: "java",
            code: `Stream.iterate(1, n -> n < 10, n -> n + 2)
    .forEach(System.out::println);  // 1 3 5 7 9`
        },
        {
            type: "alert",
            variant: "info",
            content: "Trick: `takeWhile` works like a filter until a rule breaks — then stops fully. `dropWhile` skips until a rule breaks — then processes all."
        }
        , {
            type: "heading",
            level: 1,
            text: "Memory Trick for Stream Pipeline",
            anchor: "stream-memory-trick"
        },
        {
            type: "paragraph",
            text: "A common and effective order of operations in Java Streams is:"
        },
        {
            type: "list",
            style: "number",
            items: [
                "**F**ilter – narrow down the data",
                "**M**ap – transform each element",
                "**S**ort – arrange the data",
                "**L**imit – reduce number of elements",
                "**C**ollect – gather results"
            ]
        },
        {
            type: "alert",
            variant: "info",
            content: "💡 Memory Trick: **FMSLC** → *Friendly Monkeys Sort Lovely Collections* 🐵📚"
        },
        {
            type: "code",
            language: "java",
            code: `List<String> result = names.stream()
    .filter(name -> name.length() > 3)     // F
    .map(String::toUpperCase)              // M
    .sorted()                              // S
    .limit(5)                              // L
    .collect(Collectors.toList());         // C`
        }

    ],
    summary: {
        keyPoints: [
            "Streams are declarative, lazy, and support parallelism.",
            "Stream does not store data – it processes it from a source.",
            "One-time use: Stream can be used only once after a terminal operation.",
            "Streams are found in `java.util.stream` package.",
            "Collections store and iterate, Streams compute and transform."
        ],
        cheatSheet: {
            coreOperations: `
stream() / parallelStream()
.filter(), .map(), .flatMap()
.distinct(), .sorted(), .limit()
.collect(), .forEach(), .reduce()
.count(), .anyMatch(), .findFirst()`,
            primitiveStreams: `
IntStream, LongStream, DoubleStream
range(), sum(), average(), boxed()`
        }
    },
    nextSteps: [
        {
            topicId: "java-streams-intermediate",
            reason: "Learn intermediate operations like filter, map, and flatMap"
        },
        {
            topicId: "java-streams-terminal",
            reason: "Explore terminal operations like collect, reduce, forEach"
        }
    ]
}
