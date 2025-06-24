export default{
  meta: {
    title: "Introduction to EJB",
    description: "Understand the basics, evolution, and architecture of Enterprise JavaBeans (EJB), including use cases and differences across versions.",
    category: "persistence",
    subcategory: "java",
    difficulty: "intermediate",
    duration: 40,
    keywords: ["ejb", "enterprise java", "ejb 3.2", "component architecture", "java ee"]
  },
  content: [
    {
      type: "heading",
      level: 1,
      text: "What is EJB?",
      anchor: "what-is-ejb"
    },
    {
      type: "paragraph",
      text: "Enterprise JavaBeans (EJB) is a server-side component architecture for developing and deploying enterprise-level, distributed Java applications. It is part of the Java EE (now Jakarta EE) platform and is designed to simplify the development of scalable, transactional, and secure business components."
    },
    {
      type: "alert",
      variant: "info",
      content: "EJB allows developers to focus on business logic while the container handles infrastructure concerns like transactions, security, and concurrency."
    },

    {
      type: "heading",
      level: 1,
      text: "Evolution of EJB",
      anchor: "ejb-evolution"
    },
    {
      type: "paragraph",
      text: "EJB has undergone significant changes across its versions to improve developer productivity and reduce complexity. EJB 3.x marked a major shift towards POJO-based programming and annotations."
    },
    {
      type: "table",
      headers: ["Version", "Highlights"],
      rows: [
        ["EJB 1.x", "Introduced component model but required complex deployment descriptors"],
        ["EJB 2.x", "Improved component model with local interfaces but still verbose"],
        ["EJB 3.0", "Simplified model using POJOs and annotations"],
        ["EJB 3.1", "No-interface beans, singleton session beans"],
        ["EJB 3.2", "Focus on simplifying APIs and improving usability"]
      ]
    },

    {
      type: "heading",
      level: 1,
      text: "EJB 2.x vs EJB 3.x",
      anchor: "ejb-comparison"
    },
    {
      type: "table",
      headers: ["Aspect", "EJB 2.x", "EJB 3.x"],
      rows: [
        ["Development Style", "Heavy XML descriptors", "Annotation-based, POJOs"],
        ["Dependency Injection", "Not supported", "Supported using @EJB"],
        ["Persistence", "Entity beans (complex)", "JPA (Java Persistence API)"],
        ["Interfaces", "Mandatory home and remote interfaces", "Optional or no interfaces"],
        ["Ease of Use", "Verbose and complex", "Simplified and developer-friendly"]
      ]
    },

    {
      type: "heading",
      level: 1,
      text: "Use Cases of EJB",
      anchor: "ejb-use-cases"
    },
    {
      type: "list",
      style: "disc",
      items: [
        "Business logic in enterprise applications",
        "Transactional operations (e.g., banking systems)",
        "Security-enforced operations using container-managed security",
        "Remote service invocation via distributed objects",
        "Scalable and clustered business services"
      ]
    },

    {
      type: "heading",
      level: 1,
      text: "Component-Based Architecture",
      anchor: "component-architecture"
    },
    {
      type: "paragraph",
      text: "EJB promotes a component-based development model where business logic is encapsulated in reusable, managed components. These components are deployed into an EJB container which provides services such as lifecycle management, transaction handling, concurrency, and security."
    },
    {
      type: "code",
      language: "text",
      code: `┌──────────────────────────┐
│    EJB Container         │
│ ┌──────────────────────┐ │
│ │  Stateless Session   │ │
│ │  Stateful Session    │ │
│ │  Singleton Session   │ │
│ │  Message-Driven Bean │ │
│ └──────────────────────┘ │
└──────────────────────────┘
          │
     Application Server
          │
       Resources (DB, JMS)`
    },{
    type: "heading",
    level: 1,
    text: "EJB Architecture Overview",
    anchor: "architecture-overview"
  },
  {
    type: "paragraph",
    text: "The EJB architecture follows a layered design where enterprise beans are deployed inside a container, which is hosted on an application server. This container manages the lifecycle, transactions, security, and other cross-cutting concerns for the beans automatically."
  },
  {
    type: "alert",
    variant: "info",
    content: "Think of the EJB container as a smart manager that handles all the complex tasks so your business logic stays clean and focused."
  },

  {
    type: "heading",
    level: 1,
    text: "EJB Container Responsibilities",
    anchor: "container-responsibilities"
  },
  {
    type: "list",
    style: "disc",
    items: [
      "Lifecycle management of EJB components",
      "Security enforcement using declarative or programmatic models",
      "Transaction management using JTA (Java Transaction API)",
      "Concurrency control to manage multiple clients",
      "Remote access to business methods",
      "Interception of calls for cross-cutting logic (logging, auditing)"
    ]
  },
  {
    type: "paragraph",
    text: "The EJB container acts as an intermediary between client applications and the EJB components. It abstracts the complexities of enterprise application development."
  },

  {
    type: "heading",
    level: 2,
    text: "Lifecycle Management",
    anchor: "lifecycle"
  },
  {
    type: "paragraph",
    text: "The container controls the creation, pooling, activation, passivation, and destruction of EJB instances. This ensures efficient resource usage and scalability."
  },
  {
    type: "code",
    language: "java",
    code: `@Stateless
public class PaymentBean {
  @PostConstruct
  public void init() { System.out.println("Bean created"); }

  @PreDestroy
  public void destroy() { System.out.println("Bean destroyed"); }
}`
  },
  {
    type: "alert",
    variant: "warning",
    content: "Memory Trick: Think of the container as a hotel manager – it checks beans in, assigns rooms (resources), and checks them out automatically."
  },

  {
    type: "heading",
    level: 2,
    text: "Security Management",
    anchor: "security"
  },
  {
    type: "paragraph",
    text: "EJB containers support declarative security using annotations or XML. It handles authentication, authorization, and role-based access control."
  },
  {
    type: "table",
    headers: ["Annotation", "Purpose"],
    rows: [
      ["@RolesAllowed", "Restrict access to users with specific roles"],
      ["@PermitAll", "Allow access to all users"],
      ["@DenyAll", "Block access to all users"]
    ]
  },
  {
    type: "code",
    language: "java",
    code: `@Stateless
public class AdminBean {
  @RolesAllowed("admin")
  public void deleteUser(String userId) { ... }
}`
  },
  {
    type: "alert",
    variant: "info",
    content: "Security logic is externalized — your bean methods stay clean and role-based access is handled by the container."
  },

  {
    type: "heading",
    level: 2,
    text: "Transaction Management",
    anchor: "transactions"
  },
  {
    type: "paragraph",
    text: "EJB provides container-managed transactions using JTA. Developers can declare the transaction behavior using annotations like @TransactionAttribute."
  },
  {
    type: "table",
    headers: ["Attribute", "Behavior"],
    rows: [
      ["REQUIRED", "Join or create a transaction"],
      ["REQUIRES_NEW", "Always create a new transaction"],
      ["MANDATORY", "Must be called within a transaction"],
      ["NEVER", "Must not run in a transaction"],
      ["SUPPORTS", "Run with or without a transaction"],
      ["NOT_SUPPORTED", "Suspend any existing transaction"]
    ]
  },
  {
    type: "code",
    language: "java",
    code: `@Stateless
public class OrderService {
  @TransactionAttribute(TransactionAttributeType.REQUIRED)
  public void placeOrder(Order order) { ... }
}`
  },
  {
    type: "alert",
    variant: "info",
    content: "Analogy: Think of transactions like a bank lockbox — either all operations succeed and the box is locked, or it’s rolled back if anything fails."
  },

  {
    type: "heading",
    level: 2,
    text: "Concurrency Management",
    anchor: "concurrency"
  },
  {
    type: "paragraph",
    text: "EJB containers manage concurrent access to beans to avoid data inconsistency. Stateless and message-driven beans are thread-safe by design. Singleton beans require explicit concurrency control."
  },
  {
    type: "code",
    language: "java",
    code: `@Singleton
@Lock(LockType.WRITE)
public class CounterBean {
  private int count = 0;

  public void increment() {
    count++;
  }
}`
  },
  {
    type: "alert",
    variant: "warning",
    content: "Use @Lock annotations on singleton beans to define access control (READ or WRITE)."
  },
  {
    type: "paragraph",
    text: "Concurrency tricks: Stateless = safe; Singleton = caution; Stateful = isolated per client."
  },

  {
    type: "heading",
    level: 2,
    text: "Remoting Support",
    anchor: "remoting"
  },
  {
    type: "paragraph",
    text: "EJBs can be accessed remotely using RMI or IIOP protocols. Remote interfaces are annotated with @Remote and must be serializable. The container handles the network communication and marshalling."
  },
  {
    type: "code",
    language: "java",
    code: `@Remote
public interface ProductService {
  List<Product> listAll();
}`
  },
  {
    type: "alert",
    variant: "info",
    content: "Real-world analogy: Like calling a customer support center — you don’t need to know how it works internally, just the number (interface) to dial."
  },

  {
    type: "heading",
    level: 2,
    text: "Interceptors",
    anchor: "interceptors"
  },
  {
    type: "paragraph",
    text: "Interceptors allow cross-cutting concerns such as logging, auditing, and validation to be added declaratively. They are executed before or after business methods using @AroundInvoke."
  },
  {
    type: "code",
    language: "java",
    code: `public class LoggingInterceptor {
  @AroundInvoke
  public Object log(InvocationContext ctx) throws Exception {
    System.out.println("Entering: " + ctx.getMethod().getName());
    return ctx.proceed();
  }
}`
  },
  {
    type: "code",
    language: "java",
    code: `@Stateless
@Interceptors(LoggingInterceptor.class)
public class PaymentService {
  public void processPayment() { ... }
}`
  },
  {
    type: "alert",
    variant: "info",
    content: "Interceptors = AOP-style hooks that wrap around method calls without changing the core logic."
  },{
  type: "heading",
  level: 1,
  text: "Types of EJBs",
  anchor: "types-of-ejbs"
},
{
  type: "paragraph",
  text: "Enterprise JavaBeans (EJB) are categorized into four main types based on their behavior and intended usage. Each bean type serves different business scenarios and is managed by the EJB container with a specific lifecycle."
},

{
  type: "heading",
  level: 2,
  text: "Stateless Session Bean",
  anchor: "stateless-bean"
},
{
  type: "paragraph",
  text: "Stateless session beans do not retain any client state across method calls. Each method call is independent, making them ideal for lightweight, scalable tasks."
},
{
  type: "list",
  style: "disc",
  items: [
    "Use Case: Reusable services like authentication, calculations, sending emails",
    "Lifecycle: Created by container and pooled; reused across clients",
    "Annotation: @Stateless"
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class AuthService {
  public boolean validateUser(String username, String password) {
    // Logic here
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: Like a vending machine — it serves any customer, but doesn’t remember who used it."
},

{
  type: "heading",
  level: 2,
  text: "Stateful Session Bean",
  anchor: "stateful-bean"
},
{
  type: "paragraph",
  text: "Stateful session beans retain conversational state across multiple method calls and transactions for a single client."
},
{
  type: "list",
  style: "disc",
  items: [
    "Use Case: Shopping cart, online banking session, wizard forms",
    "Lifecycle: One bean per client; tied to client session until timeout or removal",
    "Annotation: @Stateful"
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateful
public class ShoppingCart {
  private List<Item> cart = new ArrayList<>();

  public void addItem(Item item) {
    cart.add(item);
  }

  public List<Item> getItems() {
    return cart;
  }
}`
},
{
  type: "alert",
  variant: "warning",
  content: "Memory Trick: 'Stateful' = 'State-full' = remembers everything about the current client!"
},

{
  type: "heading",
  level: 2,
  text: "Singleton Session Bean",
  anchor: "singleton-bean"
},
{
  type: "paragraph",
  text: "Singleton session beans are instantiated once per application and shared across all clients. They are ideal for shared configuration, caching, and coordination."
},
{
  type: "list",
  style: "disc",
  items: [
    "Use Case: Application-level caching, scheduler, logging service",
    "Lifecycle: Single instance per application; created at startup or on first access",
    "Annotation: @Singleton"
  ]
},
{
  type: "code",
  language: "java",
  code: `@Singleton
public class AppConfig {
  private Map<String, String> settings = new HashMap<>();

  public void loadConfig() {
    // Load from file or DB
  }

  public String getSetting(String key) {
    return settings.get(key);
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: Like a control tower — one shared instance that coordinates for all clients."
},

{
  type: "heading",
  level: 2,
  text: "Message-Driven Bean (MDB)",
  anchor: "message-driven-bean"
},
{
  type: "paragraph",
  text: "MDBs are used for asynchronous messaging. They consume messages from a JMS queue or topic and do not retain any state."
},
{
  type: "list",
  style: "disc",
  items: [
    "Use Case: Order processing, email sending, logging from queue",
    "Lifecycle: Created and managed by container; listens to JMS destination",
    "Annotation: @MessageDriven"
  ]
},
{
  type: "code",
  language: "java",
  code: `@MessageDriven(activationConfig = {
  @ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Queue"),
  @ActivationConfigProperty(propertyName = "destinationLookup", propertyValue = "jms/OrderQueue")
})
public class OrderProcessor implements MessageListener {
  public void onMessage(Message message) {
    // Process incoming message
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "MDB = Event-driven workers — they wait silently until a message wakes them up."
},

{
  type: "heading",
  level: 2,
  text: "Key Differences Between EJB Types",
  anchor: "ejb-differences"
},
{
  type: "table",
  headers: ["EJB Type", "Client State", "Lifecycle", "Concurrency", "Use Case"],
  rows: [
    ["Stateless", "No", "Pooled per request", "Thread-safe", "Reusable services"],
    ["Stateful", "Yes", "One per client", "Isolated per client", "Shopping cart"],
    ["Singleton", "Global", "One per app", "Manual control (@Lock)", "Shared cache/config"],
    ["MDB", "No", "Container-managed", "Message-triggered", "Async processing"]
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Use Stateless for scale, Stateful for session tracking, Singleton for shared state, and MDB for async jobs."
}
,{
  type: "heading",
  level: 1,
  text: "EJB Lifecycle",
  anchor: "ejb-lifecycle"
},
{
  type: "paragraph",
  text: "Each EJB type follows a specific lifecycle managed by the container. Developers can hook into key stages using lifecycle callback annotations to perform initialization, cleanup, or special handling."
},
{
  type: "alert",
  variant: "info",
  content: "Memory Trick: Lifecycle methods are like event hooks — @PostConstruct is birth, @PreDestroy is farewell, and others depend on bean type."
},

{
  type: "heading",
  level: 2,
  text: "Common Lifecycle Annotations",
  anchor: "common-lifecycle-annotations"
},
{
  type: "table",
  headers: ["Annotation", "Applies To", "Purpose"],
  rows: [
    ["@PostConstruct", "All EJBs", "Executed once after bean creation and dependency injection"],
    ["@PreDestroy", "All EJBs", "Executed just before the bean is removed"],
    ["@Remove", "Stateful Beans", "Explicitly tells container to destroy the bean"],
    ["@Timeout", "Singleton Beans (TimerService)", "Handles timer events triggered by @Schedule or TimerService"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class LoggerService {
  @PostConstruct
  public void init() {
    System.out.println("Logger initialized");
  }

  @PreDestroy
  public void cleanup() {
    System.out.println("Logger destroyed");
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "Stateless Session Bean Lifecycle",
  anchor: "stateless-lifecycle"
},
{
  type: "paragraph",
  text: "Stateless beans are created and pooled by the container. Each client method call is served by an instance from the pool. The container manages lifecycle transparently."
},
{
  type: "code",
  language: "text",
  code: `   Client Call
        │
        ▼
 ┌───────────────┐
 │ Container Pool│
 └──────┬────────┘
        │ creates
        ▼
 ┌──────────────────┐
 │ @PostConstruct    │
 └──────────────────┘
        │
   Business Method
        │
 ┌──────────────────┐
 │ @PreDestroy       │
 └──────────────────┘`
},
{
  type: "alert",
  variant: "info",
  content: "Stateless beans are fast and scalable due to pooling — no state = no memory bloat."
},

{
  type: "heading",
  level: 2,
  text: "Stateful Session Bean Lifecycle",
  anchor: "stateful-lifecycle"
},
{
  type: "paragraph",
  text: "Stateful beans maintain client-specific state. Each client gets a dedicated instance, and the bean lives across multiple method calls until explicitly removed or timed out."
},
{
  type: "code",
  language: "java",
  code: `@Stateful
public class Wizard {
  @Remove
  public void complete() {
    System.out.println("Wizard completed");
  }
}`
},
{
  type: "code",
  language: "text",
  code: `  Client Call
      │
      ▼
 ┌──────────────┐
 │ New Instance │
 └─────┬────────┘
       ▼
 ┌──────────────┐
 │ @PostConstruct│
 └─────┬────────┘
       │
  Multiple Calls
       │
 ┌──────────────┐
 │ @Remove or   │
 │ Timeout      │
 └─────┬────────┘
       ▼
 ┌──────────────┐
 │ @PreDestroy  │
 └──────────────┘`
},
{
  type: "alert",
  variant: "warning",
  content: "Use @Remove to clean up — or the container might time out your bean silently!"
},

{
  type: "heading",
  level: 2,
  text: "Singleton Bean Lifecycle",
  anchor: "singleton-lifecycle"
},
{
  type: "paragraph",
  text: "Singleton beans are created once and shared across the application. They're ideal for configuration, caching, or timers. The container invokes @PostConstruct when the bean is ready, and @PreDestroy before shutdown."
},
{
  type: "code",
  language: "java",
  code: `@Singleton
public class CleanupJob {
  @Timeout
  public void autoClean() {
    System.out.println("Scheduled clean-up executed");
  }
}`
},
{
  type: "code",
  language: "text",
  code: ` App Startup
     │
     ▼
 ┌──────────────┐
 │ @PostConstruct│
 └─────┬────────┘
       ▼
 Background Work
 Scheduled @Timeout
       │
 App Shutdown
       ▼
 ┌──────────────┐
 │ @PreDestroy  │
 └──────────────┘`
},
{
  type: "alert",
  variant: "info",
  content: "Singleton beans are the 'always-on' services — best for app-wide tasks and periodic jobs."
},

{
  type: "heading",
  level: 2,
  text: "Message-Driven Bean Lifecycle",
  anchor: "mdb-lifecycle"
},
{
  type: "paragraph",
  text: "MDBs are automatically created and destroyed by the container based on message delivery. Developers don’t control their lifecycle explicitly."
},
{
  type: "code",
  language: "text",
  code: ` Message Received
        │
        ▼
 ┌──────────────┐
 │ Container    │
 │ Instantiates │
 └─────┬────────┘
       ▼
 ┌──────────────┐
 │ @PostConstruct│
 └─────┬────────┘
       ▼
 ┌──────────────┐
 │ onMessage()  │
 └─────┬────────┘
       ▼
 ┌──────────────┐
 │ @PreDestroy  │
 └──────────────┘`
},
{
  type: "alert",
  variant: "info",
  content: "MDBs behave like background listeners — you focus only on `onMessage`, and the container handles the rest."
}
,{
  type: "heading",
  level: 1,
  text: "EJB Annotations (Java EE 7 / EJB 3.2 Specific)",
  anchor: "ejb-annotations"
},
{
  type: "paragraph",
  text: "EJB 3.x introduced annotation-based programming to reduce boilerplate XML configuration. These annotations cover bean types, dependency injection, transactions, scheduling, security, and more."
},
{
  type: "alert",
  variant: "info",
  content: "Memory Trick: EJB annotations turn Java classes into 'magic beans' — one tag, and the container does the rest!"
},

{
  type: "heading",
  level: 2,
  text: "Bean Type Annotations",
  anchor: "bean-type-annotations"
},
{
  type: "table",
  headers: ["Annotation", "Purpose", "Applies To"],
  rows: [
    ["@Stateless", "Marks a bean as stateless", "Class"],
    ["@Stateful", "Marks a bean as stateful", "Class"],
    ["@Singleton", "Marks a bean as singleton", "Class"],
    ["@MessageDriven", "Marks an MDB for JMS messaging", "Class"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class PaymentBean {
  public void pay() { ... }
}`
},
{
  type: "alert",
  variant: "info",
  content: "@Stateless is the most common bean type — great for stateless business logic like services."
},

{
  type: "heading",
  level: 2,
  text: "Dependency Injection",
  anchor: "dependency-injection"
},
{
  type: "paragraph",
  text: "@EJB is used to inject an EJB reference into another bean or servlet. The container manages lookup and lifecycle."
},
{
  type: "code",
  language: "java",
  code: `@EJB
private PaymentBean payment;`
},
{
  type: "alert",
  variant: "info",
  content: "Use @EJB instead of JNDI lookups — cleaner, shorter, and container-managed."
},

{
  type: "heading",
  level: 2,
  text: "Timer and Scheduling",
  anchor: "timers"
},
{
  type: "table",
  headers: ["Annotation", "Purpose"],
  rows: [
    ["@Timeout", "Marks a method to handle TimerService events"],
    ["@Schedule", "Schedules automatic invocation using cron-like syntax"],
    ["@Schedules", "Allows multiple schedules on a single method"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Singleton
public class ReportJob {
  @Schedule(hour = "0", minute = "0", second = "0", persistent = false)
  public void generateDailyReport() {
    System.out.println("Report generated");
  }
}`
},
{
  type: "alert",
  variant: "warning",
  content: "Scheduling = built-in cron — no Quartz or external timers needed!"
},

{
  type: "heading",
  level: 2,
  text: "Transaction Management",
  anchor: "transactions"
},
{
  type: "table",
  headers: ["Annotation", "Purpose"],
  rows: [
    ["@TransactionManagement", "Defines transaction strategy (CONTAINER or BEAN)"],
    ["@TransactionAttribute", "Sets behavior like REQUIRED, REQUIRES_NEW, etc."]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class TransferService {
  @TransactionAttribute(TransactionAttributeType.REQUIRED)
  public void transfer() { ... }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Let the container manage transactions unless you need fine-grained control (then use BMT)."
},

{
  type: "heading",
  level: 2,
  text: "Security Annotations",
  anchor: "security"
},
{
  type: "table",
  headers: ["Annotation", "Effect"],
  rows: [
    ["@RolesAllowed", "Restrict method access to specified roles"],
    ["@PermitAll", "Allow all users to access the method"],
    ["@DenyAll", "Block access to the method completely"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class AdminService {
  @RolesAllowed("admin")
  public void deleteUser(String id) { ... }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Security annotations separate access control from logic — clean and declarative."
},

{
  type: "heading",
  level: 2,
  text: "Concurrency Management (Singletons)",
  anchor: "concurrency"
},
{
  type: "table",
  headers: ["Annotation", "Purpose"],
  rows: [
    ["@Lock", "Defines access type (READ or WRITE)"],
    ["@AccessTimeout", "Time to wait for lock acquisition"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Singleton
public class CounterService {
  private int count = 0;

  @Lock(LockType.WRITE)
  @AccessTimeout(value = 2000)
  public void increment() { count++; }
}`
},
{
  type: "alert",
  variant: "warning",
  content: "Singleton = shared. Use locks to avoid race conditions!"
},

{
  type: "heading",
  level: 2,
  text: "Asynchronous Execution",
  anchor: "async"
},
{
  type: "paragraph",
  text: "@Asynchronous allows EJB methods to run in the background without blocking the caller. Useful for long-running tasks like email, report generation, or bulk processing."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class Mailer {
  @Asynchronous
  public void sendEmail(String to, String body) {
    // Run in background
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: Like firing off an SMS — you don’t wait for the person to read it!"
},

{
  type: "heading",
  level: 2,
  text: "Local and Remote Interfaces",
  anchor: "interfaces"
},
{
  type: "table",
  headers: ["Annotation", "Used For"],
  rows: [
    ["@Remote", "Expose bean to remote clients (over network)"],
    ["@Local", "Expose bean to local clients (same JVM)"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Remote
public interface RemoteService {
  void perform();
}

@Stateless
public class RemoteServiceImpl implements RemoteService {
  public void perform() { ... }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Use @Remote when clients are on different machines — otherwise prefer @Local for performance."
}
,{
  type: "heading",
  level: 1,
  text: "Business Interfaces in EJB",
  anchor: "business-interfaces"
},
{
  type: "paragraph",
  text: "In EJB, business interfaces define how a bean is accessed by clients. There are three types: Local, Remote, and No-Interface view. Choosing the right interface impacts performance, deployment flexibility, and accessibility."
},

{
  type: "heading",
  level: 2,
  text: "Local Interface",
  anchor: "local-interface"
},
{
  type: "paragraph",
  text: "A local interface is used when the bean and the client reside in the same JVM. It offers faster communication since no network overhead is involved."
},
{
  type: "list",
  style: "disc",
  items: [
    "Use Case: Bean used internally within the same application or module",
    "Annotation: @Local (optional if only one interface is present)"
  ]
},
{
  type: "code",
  language: "java",
  code: `@Local
public interface OrderService {
  void placeOrder(String itemId);
}

@Stateless
public class OrderServiceImpl implements OrderService {
  public void placeOrder(String itemId) {
    // Business logic
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Local interfaces are ideal for internal components that don't require remote exposure."
},

{
  type: "heading",
  level: 2,
  text: "Remote Interface",
  anchor: "remote-interface"
},
{
  type: "paragraph",
  text: "A remote interface allows EJBs to be accessed from a different JVM, even across networks. This is useful for distributed applications."
},
{
  type: "list",
  style: "disc",
  items: [
    "Use Case: When a client application is deployed on a different server",
    "Annotation: @Remote"
  ]
},
{
  type: "code",
  language: "java",
  code: `@Remote
public interface BillingService {
  void chargeCustomer(String customerId, double amount);
}

@Stateless
public class BillingServiceImpl implements BillingService {
  public void chargeCustomer(String customerId, double amount) {
    // Remote business logic
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Remote interfaces enable separation of concerns in distributed systems — but may add latency."
},

{
  type: "heading",
  level: 2,
  text: "No-Interface View",
  anchor: "no-interface"
},
{
  type: "paragraph",
  text: "The No-Interface view allows clients in the same module to call public methods of the bean class directly without defining an interface."
},
{
  type: "list",
  style: "disc",
  items: [
    "Use Case: Quick development within the same module",
    "Annotation: None — just a public class with public methods"
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class GreetingService {
  public String sayHello(String name) {
    return "Hello, " + name;
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "No-interface = Fastest dev path. Good for small or single-module apps."
},

{
  type: "heading",
  level: 2,
  text: "Differences Between Interface Types",
  anchor: "interface-differences"
},
{
  type: "table",
  headers: ["Feature", "Local Interface", "Remote Interface", "No-Interface View"],
  rows: [
    ["JVM Scope", "Same JVM only", "Different JVMs allowed", "Same module only"],
    ["Annotation Required", "@Local (optional)", "@Remote", "None"],
    ["Network Overhead", "No", "Yes", "No"],
    ["Use Case", "Internal module logic", "Distributed apps", "Simple modular apps"],
    ["Client Access", "Interface", "Interface", "Directly via class"]
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Pick Local for performance, Remote for distribution, and No-Interface for simplicity."
}
,{
  type: "heading",
  level: 1,
  text: "Dependency Injection in EJB",
  anchor: "dependency-injection-ejb"
},
{
  type: "paragraph",
  text: "Dependency Injection (DI) in EJB allows automatic injection of required beans or resources into components like servlets, JSF managed beans, or other EJBs without manual lookup. The container handles lifecycle, lookup, and references."
},
{
  type: "alert",
  variant: "info",
  content: "DI = Ask and you shall receive. The container gives you the bean you ask for!"
},

{
  type: "heading",
  level: 2,
  text: "Using @EJB for Injection",
  anchor: "ejb-annotation"
},
{
  type: "paragraph",
  text: "The `@EJB` annotation is used to inject an enterprise bean into another component. The container resolves the reference at deployment or runtime."
},
{
  type: "code",
  language: "java",
  code: `@EJB
private PaymentService payment;`
},
{
  type: "alert",
  variant: "info",
  content: "The name of the injected bean is automatically resolved by type, or by JNDI name if specified."
},

{
  type: "heading",
  level: 2,
  text: "Injection Targets: Where Can You Use @EJB?",
  anchor: "injection-targets"
},
{
  type: "list",
  style: "disc",
  items: [
    "EJBs (Stateless, Stateful, Singleton)",
    "Servlets",
    "JSF Managed Beans",
    "Java SE classes (with JNDI fallback or CDI)",
    "Web filters and listeners (in Java EE 6+)"
  ]
},
{
  type: "code",
  language: "java",
  code: `// In a servlet
@WebServlet("/checkout")
public class CheckoutServlet extends HttpServlet {
  @EJB
  private CartService cart;

  protected void doPost(...) {
    cart.checkout();
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "You can inject EJBs into servlets and JSF beans directly — no JNDI code needed!"
},

{
  type: "heading",
  level: 2,
  text: "Injection Scope and Visibility",
  anchor: "injection-scope"
},
{
  type: "paragraph",
  text: "Injected EJBs follow the lifecycle and visibility of their injection context. For example, in stateless beans, the EJB reference is shared across method calls; in servlets, it lasts for the servlet instance."
},
{
  type: "table",
  headers: ["Injection Context", "Visibility", "Bean Lifecycle"],
  rows: [
    ["Stateless Bean", "Shared across requests", "Managed by container pool"],
    ["Stateful Bean", "Per-client instance", "Destroyed via @Remove or timeout"],
    ["Servlet", "Shared across servlet lifecycle", "Container-injected"],
    ["JSF Bean", "Scoped to view/session", "Managed by JSF runtime"]
  ]
},
{
  type: "alert",
  variant: "warning",
  content: "Always treat injected EJBs as shared resources — avoid storing request-specific state in stateless or singleton beans."
},

{
  type: "heading",
  level: 2,
  text: "Dependency Injection vs JNDI Lookup",
  anchor: "di-vs-jndi"
},
{
  type: "paragraph",
  text: "Before annotations, beans were accessed using JNDI (Java Naming and Directory Interface). DI simplifies code by removing lookup logic and letting the container wire dependencies automatically."
},
{
  type: "table",
  headers: ["Aspect", "DI (@EJB)", "JNDI Lookup"],
  rows: [
    ["Code", "Clean and declarative", "Manual and verbose"],
    ["Error Handling", "Compile-time safety", "Prone to runtime errors"],
    ["Testability", "Easier with mocking frameworks", "Harder to mock JNDI"],
    ["Preferred?", "Yes (modern apps)", "Legacy support only"]
  ]
},
{
  type: "code",
  language: "java",
  code: `// Old JNDI way
Context ctx = new InitialContext();
PaymentService ps = (PaymentService) ctx.lookup("java:global/app/PaymentService");

// With DI
@EJB
private PaymentService ps;`
},
{
  type: "alert",
  variant: "info",
  content: "DI makes code cleaner and easier to maintain — use JNDI only when DI isn’t possible."
}
,{
  type: "heading",
  level: 1,
  text: "Transactions in EJB",
  anchor: "ejb-transactions"
},
{
  type: "paragraph",
  text: "EJB supports declarative and programmatic transaction management, ensuring data integrity across multiple operations. Transactions are crucial for consistent and reliable enterprise applications."
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: A transaction is like a bank transfer — either everything succeeds or nothing does."
},

{
  type: "heading",
  level: 2,
  text: "Container-Managed Transactions (CMT)",
  anchor: "cmt"
},
{
  type: "paragraph",
  text: "CMT is the default transaction model in EJB. The container starts, commits, or rolls back transactions automatically based on annotations like @TransactionAttribute."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class PaymentService {
  @TransactionAttribute(TransactionAttributeType.REQUIRED)
  public void processPayment() {
    // Auto-managed transaction
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "CMT is recommended for most cases — let the container do the heavy lifting!"
},

{
  type: "heading",
  level: 2,
  text: "Bean-Managed Transactions (BMT)",
  anchor: "bmt"
},
{
  type: "paragraph",
  text: "In BMT, the developer controls transaction boundaries using the JTA `UserTransaction` API. This is useful for complex or conditional transaction handling."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
@TransactionManagement(TransactionManagementType.BEAN)
public class TransferService {
  @Resource
  private UserTransaction utx;

  public void transferFunds() {
    try {
      utx.begin();
      // operations
      utx.commit();
    } catch (Exception e) {
      utx.rollback();
    }
  }
}`
},
{
  type: "alert",
  variant: "warning",
  content: "Use BMT only when you need precise control — it increases complexity."
},

{
  type: "heading",
  level: 2,
  text: "Transaction Attributes",
  anchor: "transaction-attributes"
},
{
  type: "table",
  headers: ["Attribute", "Behavior"],
  rows: [
    ["REQUIRED", "Join existing or start a new transaction (default)"],
    ["REQUIRES_NEW", "Always starts a new transaction and suspends the current one"],
    ["MANDATORY", "Must run within an existing transaction or fail"],
    ["NEVER", "Fails if a transaction is active"],
    ["NOT_SUPPORTED", "Runs outside any transaction (suspends current)"],
    ["SUPPORTS", "Joins current transaction if present, else runs without one"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
public void auditLog() {
  // Always runs in a separate transaction
}`
},
{
  type: "alert",
  variant: "info",
  content: "Trick to Remember: REQUIRED = Common case, REQUIRES_NEW = Isolated, MANDATORY = Must have, NEVER = Must not."
},

{
  type: "heading",
  level: 2,
  text: "Handling Rollbacks",
  anchor: "rollback-handling"
},
{
  type: "paragraph",
  text: "By default, EJB rolls back only for unchecked exceptions (RuntimeException). You can customize rollback behavior using `@ApplicationException` or programmatically via `setRollbackOnly()`."
},
{
  type: "code",
  language: "java",
  code: `@ApplicationException(rollback = true)
public class PaymentFailedException extends Exception {}`},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class RefundService {
  @Resource
  private SessionContext ctx;

  public void issueRefund() {
    if (/* invalid */) {
      ctx.setRollbackOnly(); // manual rollback
    }
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Use @ApplicationException when throwing custom exceptions that should trigger rollback."
}
,{
  type: "heading",
  level: 1,
  text: "Security in EJB",
  anchor: "ejb-security"
},
{
  type: "paragraph",
  text: "EJB security ensures that only authorized users can access specific business methods. EJB supports both declarative and programmatic security models, leveraging container-managed authentication and role-based access control."
},
{
  type: "alert",
  variant: "info",
  content: "Think of roles in EJB as keys — only users with the right key (role) can unlock specific methods."
},

{
  type: "heading",
  level: 2,
  text: "Declarative Security (Annotations)",
  anchor: "declarative-security"
},
{
  type: "paragraph",
  text: "Declarative security uses annotations to enforce access restrictions at the method or class level. It is clean and separates business logic from access control."
},
{
  type: "table",
  headers: ["Annotation", "Purpose"],
  rows: [
    ["@RolesAllowed", "Allow only specified roles to access the method/class"],
    ["@PermitAll", "Allow access to all users (default)"],
    ["@DenyAll", "Deny access to all users (even admin)"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class AdminService {
  @RolesAllowed("admin")
  public void deleteUser(String id) { ... }

  @PermitAll
  public List<String> getPublicData() { ... }

  @DenyAll
  public void deprecatedMethod() { ... }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Use declarative security for clear, maintainable access control."
},

{
  type: "heading",
  level: 2,
  text: "Programmatic Security",
  anchor: "programmatic-security"
},
{
  type: "paragraph",
  text: "Programmatic security allows you to make access decisions within your methods using the `SessionContext` API."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class UserService {
  @Resource
  private SessionContext ctx;

  public void deleteAccount(String userId) {
    if (ctx.isCallerInRole("admin")) {
      // Proceed with deletion
    } else {
      throw new SecurityException("Access denied");
    }
  }

  public String currentUser() {
    return ctx.getCallerPrincipal().getName();
  }
}`
},
{
  type: "list",
  style: "disc",
  items: [
    "`getCallerPrincipal()` → Gets the identity (username) of the current user",
    "`isCallerInRole(\"role\")` → Checks if the caller belongs to a specific role"
  ]
},
{
  type: "alert",
  variant: "warning",
  content: "Programmatic security gives flexibility but can mix business logic with access control — use sparingly."
},

{
  type: "heading",
  level: 2,
  text: "Role Mapping in Deployment Descriptors",
  anchor: "role-mapping"
},
{
  type: "paragraph",
  text: "Role names used in annotations must be mapped to actual users or groups in the application server's deployment descriptor or security realm configuration."
},
{
  type: "code",
  language: "xml",
  code: `<ejb-jar>
  <assembly-descriptor>
    <security-role>
      <role-name>admin</role-name>
    </security-role>
    <method-permission>
      <role-name>admin</role-name>
      <method>
        <ejb-name>AdminService</ejb-name>
        <method-name>deleteUser</method-name>
      </method>
    </method-permission>
  </assembly-descriptor>
</ejb-jar>`
},
{
  type: "alert",
  variant: "info",
  content: "Role mapping connects your app's role names to actual users/groups in your server's security realm."
},

{
  type: "heading",
  level: 2,
  text: "Declarative vs Programmatic Security",
  anchor: "security-comparison"
},
{
  type: "table",
  headers: ["Aspect", "Declarative Security", "Programmatic Security"],
  rows: [
    ["Where defined", "Annotations or XML", "Inside Java code"],
    ["Readability", "More readable", "Less readable"],
    ["Separation of concerns", "Yes", "No"],
    ["Flexibility", "Limited", "More control"],
    ["Best for", "Standard access rules", "Dynamic access logic"]
  ]
}
,{
  type: "heading",
  level: 1,
  text: "Interceptors in EJB",
  anchor: "ejb-interceptors"
},
{
  type: "paragraph",
  text: "Interceptors in EJB allow you to insert cross-cutting concerns (like logging or security checks) around business method invocations. They provide a powerful way to separate concerns and avoid code duplication."
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: An interceptor is like a security checkpoint before entering a building — it inspects the action before and after execution."
},

{
  type: "heading",
  level: 2,
  text: "Method Interceptors with @AroundInvoke",
  anchor: "aroundinvoke"
},
{
  type: "paragraph",
  text: "`@AroundInvoke` is used to define logic that runs before and after a business method. It can access method details via the `InvocationContext` object."
},
{
  type: "code",
  language: "java",
  code: `public class LoggingInterceptor {
  @AroundInvoke
  public Object logMethod(InvocationContext ctx) throws Exception {
    System.out.println("Before: " + ctx.getMethod().getName());
    Object result = ctx.proceed(); // continue execution
    System.out.println("After: " + ctx.getMethod().getName());
    return result;
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "`ctx.proceed()` is mandatory — it calls the actual business method."
},

{
  type: "heading",
  level: 2,
  text: "Applying Interceptors",
  anchor: "applying-interceptors"
},
{
  type: "paragraph",
  text: "Interceptors can be applied at the class or method level using the `@Interceptors` annotation, or globally via deployment descriptor."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
@Interceptors(LoggingInterceptor.class)
public class OrderService {
  public void placeOrder() { ... }
}`
},
{
  type: "paragraph",
  text: "You can apply interceptors to specific methods and exclude them at the class or method level."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
@Interceptors({SecurityInterceptor.class, AuditInterceptor.class})
public class PaymentService {

  @ExcludeClassInterceptors
  public void internalPing() { ... }
}`
},

{
  type: "heading",
  level: 2,
  text: "Default Interceptors",
  anchor: "default-interceptors"
},
{
  type: "paragraph",
  text: "Default interceptors are applied to all beans in a module and are declared in `ejb-jar.xml`."
},
{
  type: "code",
  language: "xml",
  code: `<assembly-descriptor>
  <interceptor-binding>
    <ejb-name>*</ejb-name>
    <interceptor-class>com.example.LoggingInterceptor</interceptor-class>
  </interceptor-binding>
</assembly-descriptor>`
},
{
  type: "alert",
  variant: "warning",
  content: "Default interceptors apply to all beans unless explicitly excluded using @ExcludeDefaultInterceptors."
},

{
  type: "heading",
  level: 2,
  text: "Use Cases of Interceptors",
  anchor: "interceptor-usecases"
},
{
  type: "list",
  style: "disc",
  items: [
    "Logging method execution (entry/exit)",
    "Auditing user actions",
    "Measuring execution time",
    "Applying security checks",
    "Validating input before business logic"
  ]
},
{
  type: "paragraph",
  text: "Interceptors are ideal for concerns that affect multiple beans or methods but are not part of core business logic."
},

{
  type: "heading",
  level: 2,
  text: "Important Annotations Summary",
  anchor: "interceptor-annotations"
},
{
  type: "table",
  headers: ["Annotation", "Purpose"],
  rows: [
    ["@AroundInvoke", "Defines interceptor method"],
    ["@Interceptors", "Declares interceptor classes"],
    ["@Interceptor", "Marks a class as an interceptor"],
    ["@ExcludeClassInterceptors", "Skips interceptors on specific method"],
    ["@ExcludeDefaultInterceptors", "Skips default interceptors for a bean"]
  ]
}
,{
  type: "heading",
  level: 1,
  text: "Timer Service in EJB",
  anchor: "ejb-timer-service"
},
{
  type: "paragraph",
  text: "EJB Timer Service enables you to schedule automatic or programmatic execution of business methods at specific intervals or times. It supports both recurring and single-action timers and is managed by the container."
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: Think of Timer Service like setting alarms that automatically call Java methods on time."
},

{
  type: "heading",
  level: 2,
  text: "Automatic Timers with @Schedule",
  anchor: "automatic-timers"
},
{
  type: "paragraph",
  text: "Use `@Schedule` to declare timers that run periodically based on calendar expressions. These are managed automatically by the container."
},
{
  type: "code",
  language: "java",
  code: `@Singleton
public class ReportService {

  @Schedule(hour = "2", minute = "0", second = "0", persistent = false)
  public void generateDailyReport() {
    System.out.println("Generating report at 2 AM daily...");
  }
}`
},
{
  type: "list",
  style: "disc",
  items: [
    "`@Schedule` runs automatically on method invocation",
    "Set `persistent = false` to avoid restart replay",
    "You can define multiple schedules using `@Schedules`"
  ]
},
{
  type: "code",
  language: "java",
  code: `@Schedules({
  @Schedule(dayOfWeek = "Mon", hour = "9", minute = "0"),
  @Schedule(dayOfWeek = "Fri", hour = "17", minute = "0")
})`
},

{
  type: "heading",
  level: 2,
  text: "Programmatic Timers using TimerService",
  anchor: "programmatic-timers"
},
{
  type: "paragraph",
  text: "The `TimerService` API allows you to create and manage timers dynamically at runtime. These are useful when schedule times are user-defined or not known in advance."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class ReminderService {

  @Resource
  private TimerService timerService;

  public void scheduleReminder(long delayInMillis) {
    timerService.createTimer(delayInMillis, "Reminder");
  }

  @Timeout
  public void onTimeout(Timer timer) {
    System.out.println("Reminder Triggered: " + timer.getInfo());
  }
}`
},
{
  type: "alert",
  variant: "info",
  content: "Programmatic timers = More flexible, user-driven scheduling. Great for reminders or expiration logic."
},

{
  type: "heading",
  level: 2,
  text: "The @Timeout Method",
  anchor: "timeout-method"
},
{
  type: "paragraph",
  text: "Methods annotated with `@Timeout` are invoked by the container when a timer expires. It can be used for both automatic and programmatic timers."
},
{
  type: "code",
  language: "java",
  code: `@Timeout
public void timeoutHandler(Timer timer) {
  System.out.println("Timer expired: " + timer.getInfo());
}`
},

{
  type: "heading",
  level: 2,
  text: "Persistent vs Non-Persistent Timers",
  anchor: "persistent-vs-nonpersistent"
},
{
  type: "table",
  headers: ["Type", "Behavior", "Use Case"],
  rows: [
    ["Persistent (default)", "Survives server restart", "Critical jobs like backups"],
    ["Non-Persistent", "Lost after server crash/restart", "Lightweight tasks like logging"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Schedule(hour = "*", persistent = false)
public void logHeartbeat() {
  // Won't be re-executed after crash
}`
},
{
  type: "alert",
  variant: "warning",
  content: "Use persistent timers for reliability, non-persistent for performance."
},

{
  type: "heading",
  level: 2,
  text: "Calendar Expressions in @Schedule",
  anchor: "calendar-expressions"
},
{
  type: "table",
  headers: ["Field", "Description", "Example"],
  rows: [
    ["second", "0–59", "`0` (at 0th second)"],
    ["minute", "0–59", "`*/15` (every 15 mins)"],
    ["hour", "0–23", "`2` (2 AM)"],
    ["dayOfMonth", "1–31", "`15` (15th of the month)"],
    ["month", "1–12 or names", "`JAN` (January)"],
    ["dayOfWeek", "0–7 or names", "`Mon` or `1` (Monday)"],
    ["year", "4-digit", "`2025` (year 2025)"]
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick to Remember: Calendar expressions in `@Schedule` are similar to CRON syntax but cleaner!"
}
,{
  type: "heading",
  level: 1,
  text: "Concurrency in EJB",
  anchor: "ejb-concurrency"
},
{
  type: "paragraph",
  text: "Concurrency control in EJB is most relevant in Singleton beans, which can be accessed by multiple clients simultaneously. EJB provides annotations like `@Lock` and `@AccessTimeout` to manage concurrent access safely."
},
{
  type: "alert",
  variant: "info",
  content: "Think of `@Lock(WRITE)` like locking a door for exclusive access. `@Lock(READ)` is like a library – many can read, but no changes allowed during that time."
},

{
  type: "heading",
  level: 2,
  text: "Singleton Bean Concurrency",
  anchor: "singleton-concurrency"
},
{
  type: "paragraph",
  text: "Singleton beans are shared across the entire application and support multiple concurrent method calls. You can control access using `@Lock` annotations."
},
{
  type: "code",
  language: "java",
  code: `@Singleton
public class ConfigManager {

  private Map<String, String> settings = new HashMap<>();

  @Lock(LockType.READ)
  public String getSetting(String key) {
    return settings.get(key);
  }

  @Lock(LockType.WRITE)
  public void updateSetting(String key, String value) {
    settings.put(key, value);
  }
}`
},
{
  type: "table",
  headers: ["LockType", "Description"],
  rows: [
    ["READ", "Allows multiple threads to call the method concurrently (as long as no WRITE lock is held)"],
    ["WRITE", "Exclusive lock — only one thread can execute the method"]
  ]
},
{
  type: "alert",
  variant: "warning",
  content: "Default lock type is `WRITE` — restricts concurrency unless explicitly marked `READ`."
},

{
  type: "heading",
  level: 2,
  text: "@AccessTimeout",
  anchor: "access-timeout"
},
{
  type: "paragraph",
  text: "`@AccessTimeout` defines how long a thread should wait for a lock before timing out. It can be applied at the method or class level."
},
{
  type: "code",
  language: "java",
  code: `@Lock(LockType.WRITE)
@AccessTimeout(value = 5000) // Wait up to 5 seconds
public void updateGlobalConfig() {
  // long update logic
}`
},
{
  type: "alert",
  variant: "info",
  content: "Use `@AccessTimeout` to avoid indefinite blocking when a lock is held by another thread."
},

{
  type: "heading",
  level: 2,
  text: "Threading Model Restrictions in EJB",
  anchor: "threading-restrictions"
},
{
  type: "list",
  style: "disc",
  items: [
    "EJBs are not allowed to create or manage threads directly (`new Thread()`, `Executors`, etc.)",
    "Container manages threading and concurrency for safety and scalability",
    "Use asynchronous methods (`@Asynchronous`) or TimerService for background tasks"
  ]
},
{
  type: "alert",
  variant: "danger",
  content: "Direct thread management in EJBs violates the EJB specification and may lead to unpredictable behavior."
}
,{
  type: "heading",
  level: 1,
  text: "Asynchronous Methods in EJB",
  anchor: "ejb-async"
},
{
  type: "paragraph",
  text: "EJB supports asynchronous method invocation using the `@Asynchronous` annotation. This allows the caller to proceed immediately while the method runs in the background, ideal for tasks like email sending, file processing, or reporting."
},
{
  type: "alert",
  variant: "info",
  content: "Real-life analogy: Like sending a parcel via courier — you hand it off and continue your work without waiting for delivery."
},

{
  type: "heading",
  level: 2,
  text: "Using the @Asynchronous Annotation",
  anchor: "asynchronous-usage"
},
{
  type: "paragraph",
  text: "Annotate a method with `@Asynchronous` to indicate that it should be executed in a separate thread managed by the container."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class EmailService {

  @Asynchronous
  public void sendEmail(String to, String subject, String body) {
    // Simulate delay
    try { Thread.sleep(5000); } catch (InterruptedException e) {}
    System.out.println("Email sent to: " + to);
  }
}`
},
{
  type: "list",
  style: "disc",
  items: [
    "Caller does not wait for completion",
    "The method runs on a container-managed thread",
    "Only methods in a separate EJB class can be truly asynchronous"
  ]
},

{
  type: "heading",
  level: 2,
  text: "Return Types for Asynchronous Methods",
  anchor: "async-return-types"
},
{
  type: "table",
  headers: ["Return Type", "Description"],
  rows: [
    ["void", "Use when you don't care about the result"],
    ["Future<T>", "Use to retrieve the result later using `get()`"]
  ]
},
{
  type: "code",
  language: "java",
  code: `@Asynchronous
public Future<String> generateReport() {
  // heavy processing
  return new AsyncResult<>("Report Complete");
}`
},
{
  type: "alert",
  variant: "warning",
  content: "Always check if the `Future` is done before calling `get()` to avoid blocking unnecessarily."
},

{
  type: "heading",
  level: 2,
  text: "Use Cases for @Asynchronous",
  anchor: "async-usecases"
},
{
  type: "list",
  style: "disc",
  items: [
    "Sending emails without blocking the main flow",
    "Generating reports in the background",
    "Data processing or transformation jobs",
    "Calling third-party services with latency"
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Use asynchronous methods when the task is not immediately required by the client and can run in parallel."
}
,{
  type: "heading",
  level: 1,
  text: "Message-Driven Beans (MDB)",
  anchor: "mdb-overview"
},
{
  type: "paragraph",
  text: "Message-Driven Beans (MDBs) are EJB components that listen asynchronously to messages from JMS queues or topics. They are used for loosely coupled, event-driven processing."
},
{
  type: "alert",
  variant: "info",
  content: "MDBs are like receptionists — they react to messages from a queue and process them independently of the sender."
},

{
  type: "heading",
  level: 2,
  text: "Listening to JMS Queues or Topics",
  anchor: "mdb-listen"
},
{
  type: "paragraph",
  text: "MDBs implement the `javax.jms.MessageListener` interface and override the `onMessage` method. They handle messages from a specific destination configured via annotations or deployment descriptors."
},
{
  type: "code",
  language: "java",
  code: `@MessageDriven(
  activationConfig = {
    @ActivationConfigProperty(propertyName = "destinationType", propertyValue = "javax.jms.Queue"),
    @ActivationConfigProperty(propertyName = "destinationLookup", propertyValue = "java:/jms/queue/MyQueue")
  }
)
public class OrderProcessorBean implements MessageListener {

  public void onMessage(Message message) {
    try {
      TextMessage txtMsg = (TextMessage) message;
      System.out.println("Received: " + txtMsg.getText());
    } catch (JMSException e) {
      e.printStackTrace();
    }
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "@MessageDriven and ActivationConfigProperty",
  anchor: "activation-config"
},
{
  type: "paragraph",
  text: "`@MessageDriven` is used to declare the MDB and configure its connection to a queue or topic. The `@ActivationConfigProperty` annotation allows setting connection properties like destination type, lookup name, and acknowledgment mode."
},
{
  type: "table",
  headers: ["Property", "Purpose"],
  rows: [
    ["destinationType", "Specifies whether it's a Queue or Topic"],
    ["destinationLookup", "JNDI name of the destination"],
    ["acknowledgeMode", "AUTO_ACKNOWLEDGE or DUPS_OK_ACKNOWLEDGE"],
    ["messageSelector", "Filter messages based on header values"]
  ]
},

{
  type: "heading",
  level: 2,
  text: "MDB Lifecycle",
  anchor: "mdb-lifecycle"
},
{
  type: "paragraph",
  text: "MDBs are stateless and do not maintain a conversational state with clients. Their lifecycle is managed by the container, which instantiates and pools them automatically to handle messages concurrently."
},
{
  type: "list",
  style: "disc",
  items: [
    "MDB is created and pooled by the container",
    "For each message, an instance is pulled from the pool",
    "`onMessage()` is called",
    "Instance is returned to pool"
  ]
},
{
  type: "alert",
  variant: "info",
  content: "MDBs do not support `@PostConstruct`, `@PreDestroy`, or `@Remove`. Their only callback is `onMessage()`."
},

{
  type: "heading",
  level: 2,
  text: "MDB vs JMS Listener",
  anchor: "mdb-vs-jms"
},
{
  type: "table",
  headers: ["Feature", "MDB", "JMS Listener (manual)"],
  rows: [
    ["Threading", "Managed by container", "Managed manually"],
    ["Lifecycle", "Fully automatic", "Developer-managed"],
    ["Scalability", "Container pools instances", "Manual threading needed"],
    ["Ease of use", "Simplified with annotations", "Requires more boilerplate"],
    ["Transactional", "Supports CMT/BMT", "Needs manual transaction control"]
  ]
},
{
  type: "alert",
  variant: "warning",
  content: "Use MDBs when you need container-managed messaging with minimal setup and automatic scalability."
}
,{
  type: "heading",
  level: 1,
  text: "Exception Handling in EJB",
  anchor: "ejb-exceptions"
},
{
  type: "paragraph",
  text: "EJB distinguishes between two types of exceptions — **System exceptions** (unchecked) and **Application exceptions** (checked). This distinction determines rollback behavior and how exceptions are propagated to the client."
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: System exceptions are like engine failure — the container stops the car. Application exceptions are like hitting a pothole — the journey continues but with a warning."
},

{
  type: "heading",
  level: 2,
  text: "System Exceptions (Unchecked)",
  anchor: "system-exceptions"
},
{
  type: "list",
  style: "disc",
  items: [
    "Thrown from the EJB or container",
    "RuntimeException or its subclasses (e.g., NullPointerException)",
    "Container automatically logs the exception",
    "Transaction is marked for rollback",
    "EJB instance may be discarded"
  ]
},
{
  type: "code",
  language: "java",
  code: `if (customer == null) {
  throw new NullPointerException("Customer not found");
}`
},

{
  type: "heading",
  level: 2,
  text: "Application Exceptions (Checked)",
  anchor: "application-exceptions"
},
{
  type: "paragraph",
  text: "Application exceptions represent business logic errors and are expected to be handled by the client. They must extend `Exception` and can be explicitly marked using `@ApplicationException`."
},
{
  type: "code",
  language: "java",
  code: `@ApplicationException(rollback = true)
public class InsufficientFundsException extends Exception {
  public InsufficientFundsException(String message) {
    super(message);
  }
}`
},
{
  type: "table",
  headers: ["Property", "Default Behavior"],
  rows: [
    ["Rollback", "false unless specified"],
    ["Propagation", "Sent back to the client"],
    ["Instance discard", "EJB not discarded"]
  ]
},

{
  type: "heading",
  level: 2,
  text: "@ApplicationException Usage",
  anchor: "applicationexception-annotation"
},
{
  type: "paragraph",
  text: "`@ApplicationException` is used to mark a checked exception as a business exception and optionally trigger rollback if needed."
},
{
  type: "code",
  language: "java",
  code: `@ApplicationException(rollback = true)
public class BusinessViolationException extends Exception { }`
},
{
  type: "alert",
  variant: "warning",
  content: "If rollback is not specified, the transaction will continue by default even after the exception."
},

{
  type: "heading",
  level: 2,
  text: "Rollback Handling",
  anchor: "rollback-handling"
},
{
  type: "paragraph",
  text: "You can programmatically mark the transaction for rollback using the session context."
},
{
  type: "code",
  language: "java",
  code: `@Resource
SessionContext ctx;

public void withdraw(double amount) {
  if (amount > balance) {
    ctx.setRollbackOnly();
    throw new IllegalArgumentException("Insufficient balance");
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "Exception Propagation Rules",
  anchor: "exception-propagation"
},
{
  type: "list",
  style: "disc",
  items: [
    "Application exceptions are passed to the client as-is",
    "System exceptions are wrapped in `EJBException` or cause remote call failure",
    "Unchecked exceptions trigger automatic rollback",
    "Checked exceptions only trigger rollback if annotated or manually set"
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick: Checked exceptions = business logic, safe to send. Unchecked = runtime failure, rollback and discard."
}
,{
  type: "heading",
  level: 1,
  text: "JNDI in EJB",
  anchor: "ejb-jndi"
},
{
  type: "paragraph",
  text: "JNDI (Java Naming and Directory Interface) is used in EJB to locate and access enterprise beans. Although dependency injection is preferred in EJB 3.x, JNDI is still useful for dynamic or remote lookups."
},
{
  type: "alert",
  variant: "info",
  content: "Think of JNDI as a phonebook – you look up the name to find the EJB reference and call it."
},

{
  type: "heading",
  level: 2,
  text: "JNDI Naming Convention in EJB 3.x",
  anchor: "jndi-naming"
},
{
  type: "paragraph",
  text: "The EJB 3.x specification introduced a simplified portable JNDI naming format based on global namespaces. This avoids vendor-specific names."
},
{
  type: "code",
  language: "text",
  code: `java:global[/<app-name>]/<module-name>/<bean-name>![<fully-qualified-interface>]`
},
{
  type: "list",
  style: "disc",
  items: [
    "`<app-name>`: The EAR name (optional)",
    "`<module-name>`: The JAR or WAR file name (without .jar/.war)",
    "`<bean-name>`: The name of the EJB class",
    "`<interface>`: Fully qualified name of business interface (optional)"
  ]
},
{
  type: "code",
  language: "text",
  code: `java:global/MyApp/MyEJBModule/PaymentService!com.example.PaymentServiceLocal`
},

{
  type: "heading",
  level: 2,
  text: "Manual Lookup vs Injection",
  anchor: "lookup-vs-injection"
},
{
  type: "table",
  headers: ["Approach", "Description", "When to Use"],
  rows: [
    ["Injection", "Use `@EJB` to inject dependency automatically", "Recommended in most cases"],
    ["Manual JNDI", "Use `InitialContext.lookup()` to locate bean", "When dynamic or remote lookup is needed"]
  ]
},
{
  type: "code",
  language: "java",
  code: `// Injection
@EJB
private PaymentServiceLocal paymentService;

// Manual Lookup
Context ctx = new InitialContext();
PaymentServiceLocal ps = (PaymentServiceLocal)
  ctx.lookup("java:global/MyApp/MyEJBModule/PaymentService!com.example.PaymentServiceLocal");`
},
{
  type: "alert",
  variant: "warning",
  content: "Manual JNDI lookup requires more code and is error-prone. Use dependency injection when possible."
},

{
  type: "heading",
  level: 2,
  text: "JNDI Namespace Scopes",
  anchor: "jndi-namespaces"
},
{
  type: "table",
  headers: ["Namespace", "Scope", "Example"],
  rows: [
    ["`java:global`", "Visible to all applications on the server", "`java:global/MyApp/MyBean`"],
    ["`java:app`", "Visible to all modules in the same EAR", "`java:app/MyBean`"],
    ["`java:module`", "Visible only within the same module (JAR/WAR)", "`java:module/MyBean`"]
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick: `global` = all apps, `app` = same EAR, `module` = same JAR/WAR."
}
,{
  type: "heading",
  level: 1,
  text: "Packaging and Deployment in EJB",
  anchor: "ejb-packaging"
},
{
  type: "paragraph",
  text: "Enterprise JavaBeans (EJBs) are deployed in standard formats such as `.jar` and `.ear`. EJB 3.x allows configuration through annotations or traditional XML descriptors like `ejb-jar.xml`."
},
{
  type: "alert",
  variant: "info",
  content: "Real-life analogy: Packaging EJBs is like organizing apps into folders (JAR) and folders into a zip file (EAR) for enterprise deployment."
},

{
  type: "heading",
  level: 2,
  text: ".jar Packaging for EJBs",
  anchor: "jar-packaging"
},
{
  type: "list",
  style: "disc",
  items: [
    "EJB classes and interfaces are packaged inside a `.jar` file",
    "The archive must include a `META-INF/ejb-jar.xml` file if XML configuration is used",
    "Can be deployed directly to an EJB container"
  ]
},
{
  type: "code",
  language: "text",
  code: `my-ejb.jar
├── com/
│   └── example/
│       ├── PaymentBean.class
│       └── PaymentService.class
└── META-INF/
    └── ejb-jar.xml`
},

{
  type: "heading",
  level: 2,
  text: "Deployment Descriptors (ejb-jar.xml)",
  anchor: "deployment-descriptor"
},
{
  type: "paragraph",
  text: "`ejb-jar.xml` is the deployment descriptor used to declare EJBs, their interfaces, transaction types, security roles, and other container-managed behaviors."
},
{
  type: "code",
  language: "xml",
  code: `<?xml version="1.0" encoding="UTF-8"?>
<ejb-jar version="3.2" xmlns="http://xmlns.jcp.org/xml/ns/javaee">
  <enterprise-beans>
    <session>
      <ejb-name>PaymentBean</ejb-name>
      <ejb-class>com.example.PaymentBean</ejb-class>
      <session-type>Stateless</session-type>
      <transaction-type>Container</transaction-type>
    </session>
  </enterprise-beans>
</ejb-jar>`
},
{
  type: "alert",
  variant: "warning",
  content: "XML descriptors are optional in EJB 3.x but required in some legacy or enterprise environments."
},

{
  type: "heading",
  level: 2,
  text: "Annotations vs XML Configuration",
  anchor: "annotations-vs-xml"
},
{
  type: "table",
  headers: ["Aspect", "Annotations", "XML Descriptors"],
  rows: [
    ["Readability", "Simpler and concise", "Verbose but explicit"],
    ["Overrides", "Annotations take priority", "Can override via XML if needed"],
    ["Usage", "Preferred in EJB 3.x+", "Required in older versions (EJB 2.x)"]
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Use annotations for modern development, but learn XML for migration and enterprise customization."
},

{
  type: "heading",
  level: 2,
  text: "EAR Packaging (EJB + Web)",
  anchor: "ear-packaging"
},
{
  type: "paragraph",
  text: "An `.ear` (Enterprise Archive) file can package multiple modules such as EJBs (`.jar`), web apps (`.war`), and shared libraries. It allows full deployment of enterprise applications in a single unit."
},
{
  type: "code",
  language: "text",
  code: `my-app.ear
├── lib/
│   └── shared-lib.jar
├── my-web.war
└── my-ejb.jar`
},
{
  type: "list",
  style: "disc",
  items: [
    "Used for multi-module enterprise applications",
    "Each module can access others via `java:app` namespace",
    "Requires an `application.xml` descriptor (optional in Java EE 6+)"
  ]
}
,{
  type: "heading",
  level: 1,
  text: "EJB and Web Integration",
  anchor: "ejb-web-integration"
},
{
  type: "paragraph",
  text: "Enterprise JavaBeans (EJBs) can be injected and used within web components like Servlets, JSPs, JSF managed beans, and RESTful endpoints, enabling separation of business logic from presentation logic."
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: EJBs are the engines behind the scenes, while Servlets and JSF pages are the dashboards users interact with."
},

{
  type: "heading",
  level: 2,
  text: "Injecting EJB into Servlets",
  anchor: "ejb-in-servlet"
},
{
  type: "paragraph",
  text: "You can inject a local or remote EJB into a servlet using the `@EJB` annotation."
},
{
  type: "code",
  language: "java",
  code: `@WebServlet("/pay")
public class PaymentServlet extends HttpServlet {

  @EJB
  private PaymentService paymentService;

  protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
    paymentService.processPayment();
    res.getWriter().write("Payment processed.");
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "Using EJB in JSP",
  anchor: "ejb-in-jsp"
},
{
  type: "paragraph",
  text: "JSPs cannot directly use `@EJB`. Instead, you inject the EJB into a backing servlet or a helper bean, then forward or expose data to the JSP."
},
{
  type: "code",
  language: "java",
  code: `request.setAttribute("paymentStatus", paymentService.getStatus());
request.getRequestDispatcher("/status.jsp").forward(request, response);`
},
{
  type: "alert",
  variant: "warning",
  content: "Avoid business logic directly in JSPs. Use servlets or JSF for EJB access."
},

{
  type: "heading",
  level: 2,
  text: "Injecting EJB into JSF Managed Beans",
  anchor: "ejb-in-jsf"
},
{
  type: "paragraph",
  text: "JSF managed beans support EJB injection via `@EJB`. This enables clean MVC separation and reuse of business logic."
},
{
  type: "code",
  language: "java",
  code: `@Named
@ViewScoped
public class OrderBean {

  @EJB
  private OrderService orderService;

  public void placeOrder() {
    orderService.createOrder();
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "Using EJB in REST Endpoints",
  anchor: "ejb-in-rest"
},
{
  type: "paragraph",
  text: "You can inject EJBs into RESTful resources defined using JAX-RS. This is commonly used in enterprise REST APIs for database and business logic access."
},
{
  type: "code",
  language: "java",
  code: `@Path("/orders")
public class OrderResource {

  @EJB
  private OrderService orderService;

  @POST
  public Response createOrder(OrderDto dto) {
    orderService.create(dto);
    return Response.status(201).build();
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "Best Practices for Web Integration",
  anchor: "web-integration-best-practices"
},
{
  type: "list",
  style: "disc",
  items: [
    "Use `@EJB` for field injection in Servlets, JSF, and REST resources",
    "Avoid placing EJB logic directly in JSPs — use a controller layer",
    "Prefer thin controllers and delegate all business logic to EJBs",
    "Ensure proper scope management when using JSF and EJBs together"
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick: Let EJBs handle the work, and let web components focus on input/output."
}
,{
  type: "heading",
  level: 1,
  text: "EJB with JPA",
  anchor: "ejb-jpa-integration"
},
{
  type: "paragraph",
  text: "Enterprise JavaBeans (EJB) integrate seamlessly with Java Persistence API (JPA) to manage database operations. EJBs can inject and use `EntityManager` to interact with persistent entities, with container-managed transactions and context propagation."
},
{
  type: "alert",
  variant: "info",
  content: "Think of `EntityManager` as the gatekeeper to the database, and EJB as the brain deciding when and how to interact with it."
},

{
  type: "heading",
  level: 2,
  text: "Injecting EntityManager using @PersistenceContext",
  anchor: "inject-entitymanager"
},
{
  type: "paragraph",
  text: "Use the `@PersistenceContext` annotation to inject a container-managed `EntityManager` into your EJB. It automatically handles the lifecycle and transactions."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class EmployeeService {

  @PersistenceContext
  private EntityManager em;

  public void addEmployee(Employee emp) {
    em.persist(emp);
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "JPA Queries Inside EJB",
  anchor: "jpa-queries"
},
{
  type: "paragraph",
  text: "EJBs can use JPQL (Java Persistence Query Language), Criteria API, or native SQL for queries. These queries execute within the transactional scope managed by the EJB container."
},
{
  type: "code",
  language: "java",
  code: `public List<Employee> findByDepartment(String dept) {
  return em.createQuery(
    "SELECT e FROM Employee e WHERE e.department.name = :dept", Employee.class)
    .setParameter("dept", dept)
    .getResultList();
}`
},
{
  type: "alert",
  variant: "info",
  content: "JPQL works with entities and their relationships — not database tables directly."
},

{
  type: "heading",
  level: 2,
  text: "Transaction Boundaries and Persistence Context",
  anchor: "transaction-context"
},
{
  type: "list",
  style: "disc",
  items: [
    "In Stateless or Stateful EJBs, each business method runs in a transaction by default (CMT).",
    "`@PersistenceContext` provides a transaction-scoped persistence context.",
    "When the transaction commits, changes are flushed to the database.",
    "No need to call `em.flush()` manually unless immediate DB sync is required."
  ]
},
{
  type: "code",
  language: "java",
  code: `@TransactionAttribute(TransactionAttributeType.REQUIRED)
public void updateSalary(Long id, double newSalary) {
  Employee emp = em.find(Employee.class, id);
  emp.setSalary(newSalary);
  // changes auto-committed at end of method
}`
},

{
  type: "heading",
  level: 2,
  text: "Benefits of Using JPA with EJB",
  anchor: "ejb-jpa-benefits"
},
{
  type: "table",
  headers: ["Feature", "Benefit"],
  rows: [
    ["Transaction Management", "Automatic commit/rollback with CMT"],
    ["Lifecycle", "Managed persistence context"],
    ["Code Simplicity", "No boilerplate JDBC code"],
    ["Performance", "Built-in caching and lazy loading"],
    ["Portability", "Standardized API under Java EE"]
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick: EJB + JPA = Business Logic + Database Logic under full container control."
}
,{
  type: "heading",
  level: 1,
  text: "EJB vs CDI: Comparison and Use Cases",
  anchor: "ejb-vs-cdi"
},
{
  type: "paragraph",
  text: "EJB (Enterprise JavaBeans) and CDI (Contexts and Dependency Injection) are both component models used in Java EE for building reusable and scalable components, but they serve different purposes and offer different capabilities."
},
{
  type: "alert",
  variant: "info",
  content: "Analogy: EJBs are heavyweight Swiss army knives with built-in tools (transactions, timers), while CDI beans are lightweight and flexible Lego blocks for wiring your application."
},

{
  type: "heading",
  level: 2,
  text: "Key Differences Between EJB and CDI",
  anchor: "ejb-cdi-differences"
},
{
  type: "table",
  headers: ["Feature", "EJB", "CDI"],
  rows: [
    ["Purpose", "Business logic and services", "General dependency injection and lifecycle"],
    ["Transactions", "Built-in support (CMT/BMT)", "Requires external support or `@Transactional`"],
    ["Timers", "Built-in `@Schedule`, `TimerService`", "Not supported by default"],
    ["Concurrency", "`@Lock`, `@Asynchronous`", "Not provided by default"],
    ["Security", "`@RolesAllowed`, `@PermitAll`", "Requires external integration"],
    ["Scope", "Implicit, based on bean type", "Explicit (`@RequestScoped`, `@SessionScoped`, etc.)"],
    ["Interceptors", "Limited", "Full interceptor binding support"]
  ]
},

{
  type: "heading",
  level: 2,
  text: "When to Use CDI vs EJB",
  anchor: "when-to-use"
},
{
  type: "list",
  style: "disc",
  items: [
    "**Use CDI** when you want lightweight, flexible dependency injection and fine-grained scope management.",
    "**Use EJB** when you need built-in support for transactions, security, timers, asynchronous processing, or legacy compatibility.",
    "Modern applications often prefer CDI for most logic, and use EJBs selectively for advanced services."
  ]
},
{
  type: "alert",
  variant: "warning",
  content: "Avoid overusing EJBs when CDI + JPA or Spring-like features are sufficient — EJBs add complexity and deployment constraints."
},

{
  type: "heading",
  level: 2,
  text: "Feature Overlap and Integration",
  anchor: "overlap-integration"
},
{
  type: "paragraph",
  text: "EJB and CDI can be integrated in Java EE environments. For example, you can inject EJBs into CDI beans and vice versa."
},
{
  type: "code",
  language: "java",
  code: `@Named
@RequestScoped
public class OrderBean {

  @EJB
  private OrderService orderService;

  public void placeOrder() {
    orderService.process();
  }
}`
},
{
  type: "list",
  style: "disc",
  items: [
    "CDI beans can inject EJBs using `@EJB`",
    "EJBs can inject CDI beans using `@Inject`",
    "Lifecycle and context rules are honored by the container"
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick: Let CDI handle glue code and scopes, and use EJB for heavyweight backend services."
}
,{
  type: "heading",
  level: 1,
  text: "Testing EJBs",
  anchor: "ejb-testing"
},
{
  type: "paragraph",
  text: "Testing EJBs can be done using either lightweight unit tests or full integration tests. Java EE provides embeddable containers and testing frameworks like Arquillian to simulate the container environment during tests."
},
{
  type: "alert",
  variant: "info",
  content: "Trick: EJBs need a container to work — so testing often means simulating or deploying one!"
},

{
  type: "heading",
  level: 2,
  text: "Unit Testing with Embeddable EJB Container",
  anchor: "unit-test-ejb"
},
{
  type: "paragraph",
  text: "Java EE provides an embeddable EJB container for lightweight testing without a full Java EE server."
},
{
  type: "code",
  language: "java",
  code: `@Stateless
public class CalculatorBean {
  public int add(int a, int b) {
    return a + b;
  }
}

// JUnit Test
@Test
public void testAdd() throws Exception {
  Context ctx = new InitialContext();
  CalculatorBean calc = (CalculatorBean) ctx.lookup("java:global/test/CalculatorBean");
  assertEquals(5, calc.add(2, 3));
}`
},
{
  type: "alert",
  variant: "warning",
  content: "Ensure your testing environment includes an embeddable EJB container like GlassFish Embedded or OpenEJB."
},

{
  type: "heading",
  level: 2,
  text: "Arquillian Framework for Integration Testing",
  anchor: "arquillian-testing"
},
{
  type: "paragraph",
  text: "Arquillian is a powerful framework for integration testing of Java EE components, running tests inside a real container (WildFly, Payara, etc.)."
},
{
  type: "code",
  language: "java",
  code: `@RunWith(Arquillian.class)
public class PaymentServiceTest {

  @EJB
  private PaymentService paymentService;

  @Deployment
  public static Archive<?> createDeployment() {
    return ShrinkWrap.create(JavaArchive.class)
      .addClass(PaymentService.class)
      .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
  }

  @Test
  public void testPayment() {
    assertTrue(paymentService.process());
  }
}`
},
{
  type: "list",
  style: "disc",
  items: [
    "Supports real container lifecycle",
    "Injects real beans into test classes",
    "Works with JUnit and TestNG"
  ]
},

{
  type: "heading",
  level: 2,
  text: "Integration Testing Best Practices",
  anchor: "ejb-test-best-practices"
},
{
  type: "list",
  style: "disc",
  items: [
    "Use mocks or fakes only for external systems (e.g., REST, DB)",
    "Keep unit tests small and focused (test one bean in isolation)",
    "Use Arquillian or embedded containers for realistic integration tests",
    "Use `@Transactional` rollback strategies to isolate test data",
    "Structure code to allow injection of dependencies (e.g., use interfaces)"
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Real-life analogy: Arquillian is like a stage where real actors (EJBs) perform live, not just rehearsals (unit tests)."
}
,{
  type: "heading",
  level: 1,
  text: "EJB Deployment Descriptors (Optional in 3.2)",
  anchor: "ejb-descriptors"
},
{
  type: "paragraph",
  text: "In EJB 3.2, annotations are the primary configuration mechanism, but deployment descriptors like `ejb-jar.xml` remain supported for backward compatibility, centralized control, and overriding annotation behavior."
},
{
  type: "alert",
  variant: "info",
  content: "Real-life analogy: Annotations are like stickers on your luggage, while XML descriptors are the master manifest airlines use to override or enforce rules."
},

{
  type: "heading",
  level: 2,
  text: "What is ejb-jar.xml?",
  anchor: "what-is-ejb-jar-xml"
},
{
  type: "paragraph",
  text: "`ejb-jar.xml` is an optional deployment descriptor located in the `META-INF` folder of your EJB JAR file. It allows declarative configuration of EJB components independent of source code."
},
{
  type: "code",
  language: "xml",
  code: `<?xml version="1.0" encoding="UTF-8"?>
<ejb-jar version="3.2"
         xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee 
                             http://xmlns.jcp.org/xml/ns/javaee/ejb-jar_3_2.xsd">
  <enterprise-beans>
    <session>
      <ejb-name>OrderBean</ejb-name>
      <ejb-class>com.example.OrderBean</ejb-class>
      <session-type>Stateless</session-type>
      <transaction-type>Container</transaction-type>
    </session>
  </enterprise-beans>

  <assembly-descriptor>
    <security-role>
      <role-name>admin</role-name>
    </security-role>
    <method-permission>
      <role-name>admin</role-name>
      <method>
        <ejb-name>OrderBean</ejb-name>
        <method-name>*</method-name>
      </method>
    </method-permission>
  </assembly-descriptor>
</ejb-jar>`
},

{
  type: "heading",
  level: 2,
  text: "When and Why Use XML Over Annotations",
  anchor: "xml-vs-annotations"
},
{
  type: "table",
  headers: ["Use Case", "Why XML is Preferred"],
  rows: [
    ["Third-party beans", "You can’t modify source to add annotations"],
    ["Environment-specific overrides", "Switch behavior without changing code"],
    ["Bulk changes", "Update security/transaction rules centrally"],
    ["Compliance", "Some organizations require descriptor-based config"]
  ]
},
{
  type: "alert",
  variant: "warning",
  content: "When both annotation and XML are present, XML usually overrides annotations (per Java EE rules)."
},

{
  type: "heading",
  level: 2,
  text: "Common Elements in ejb-jar.xml",
  anchor: "common-elements"
},
{
  type: "table",
  headers: ["Element", "Purpose", "Example"],
  rows: [
    ["<session>", "Defines a session bean", "<session-type>Stateless</session-type>"],
    ["<ejb-class>", "Specifies implementation class", "com.example.MyBean"],
    ["<transaction-type>", "CMT or BMT", "<transaction-type>Container</transaction-type>"],
    ["<security-role>", "Declare app roles", "<role-name>admin</role-name>"],
    ["<method-permission>", "Control access to methods", "Grant or deny access per method"]
  ]
},

{
  type: "heading",
  level: 2,
  text: "Best Practices",
  anchor: "descriptor-best-practices"
},
{
  type: "list",
  style: "disc",
  items: [
    "Use annotations by default for clarity and maintainability",
    "Use descriptors when overriding annotations or adding environment-specific rules",
    "Keep descriptor files clean and version-controlled",
    "Document why XML was used when mixing with annotations"
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick: Use descriptors like config switches — only when you can’t or shouldn’t touch the source code."
}
,{
  type: "heading",
  level: 1,
  text: "EJB Best Practices and Performance",
  anchor: "ejb-best-practices"
},
{
  type: "paragraph",
  text: "Following best practices in EJB development helps ensure optimal performance, resource management, and maintainable code. These practices apply across bean types and application sizes."
},
{
  type: "alert",
  variant: "info",
  content: "Trick: Think of EJBs like rented rooms — you don’t want to leave the lights on, store junk, or throw wild parties. Be efficient and respectful of resources."
},

{
  type: "heading",
  level: 2,
  text: "Avoiding Memory Leaks",
  anchor: "memory-leaks"
},
{
  type: "list",
  style: "disc",
  items: [
    "Release resources in `@PreDestroy` methods (e.g., close DB connections, streams)",
    "Avoid static references to EJBs or large objects",
    "Clean up timers and injected services when not needed"
  ]
},
{
  type: "code",
  language: "java",
  code: `@PreDestroy
public void cleanup() {
  if (resource != null) resource.close();
}`
},

{
  type: "heading",
  level: 2,
  text: "Bean Pooling",
  anchor: "ejb-pooling"
},
{
  type: "paragraph",
  text: "EJB containers pool Stateless and Singleton beans to improve scalability. Avoid heavy constructor logic or shared mutable state."
},
{
  type: "list",
  style: "disc",
  items: [
    "Stateless beans should remain lightweight and stateless",
    "Don’t cache user-specific state inside pooled beans",
    "Pooling can be configured using vendor-specific descriptors or annotations"
  ]
},

{
  type: "heading",
  level: 2,
  text: "Thread Safety and Concurrency",
  anchor: "ejb-thread-safety"
},
{
  type: "paragraph",
  text: "EJB components run in a managed multithreaded environment. Avoid using synchronization unless required for Singleton beans."
},
{
  type: "list",
  style: "disc",
  items: [
    "Stateless beans are inherently thread-safe (no shared fields)",
    "Singletons should use `@Lock(LockType.READ/WRITE)` for concurrency control",
    "Avoid spawning new threads — use container services like `@Asynchronous`"
  ]
},

{
  type: "heading",
  level: 2,
  text: "Choosing the Right Bean Type",
  anchor: "bean-selection"
},
{
  type: "table",
  headers: ["Bean Type", "Use When"],
  rows: [
    ["Stateless", "No client-specific state; short-lived operations (e.g., services, utilities)"],
    ["Stateful", "Client session data is needed (e.g., shopping cart, wizard form)"],
    ["Singleton", "Shared global state/configuration; caching; bootstrapping"],
    ["MDB", "Asynchronous messaging via JMS"]
  ]
},
{
  type: "alert",
  variant: "info",
  content: "Trick: Use Stateless 80% of the time, Singleton for config, Stateful only when needed."
},

{
  type: "heading",
  level: 2,
  text: "Use Lazy Loading Appropriately",
  anchor: "lazy-loading"
},
{
  type: "paragraph",
  text: "Lazy loading improves performance by fetching data only when required, but must be used carefully to avoid `LazyInitializationException` in detached contexts."
},
{
  type: "list",
  style: "disc",
  items: [
    "Enable lazy loading in entity mappings for non-critical associations",
    "Access associations while the `EntityManager` is still active",
    "Use `JOIN FETCH` in JPQL queries when needed"
  ]
},

{
  type: "heading",
  level: 2,
  text: "Exception Design and Handling",
  anchor: "ejb-exception-design"
},
{
  type: "list",
  style: "disc",
  items: [
    "Use checked exceptions annotated with `@ApplicationException` for business logic errors",
    "Use unchecked exceptions for system errors (e.g., DB down)",
    "Handle rollback behavior explicitly using `@ApplicationException(rollback=true)` or `setRollbackOnly()`"
  ]
},
{
  type: "code",
  language: "java",
  code: `@ApplicationException(rollback = true)
public class InsufficientBalanceException extends Exception {
  public InsufficientBalanceException(String msg) {
    super(msg);
  }
}`
},

{
  type: "heading",
  level: 2,
  text: "General Tips for Performance",
  anchor: "ejb-performance-tips"
},
{
  type: "list",
  style: "disc",
  items: [
    "Use lazy loading + pagination for large datasets",
    "Avoid frequent remote calls — batch or use local interfaces",
    "Enable second-level cache when beneficial",
    "Profile slow EJBs using tools like VisualVM or YourKit"
  ]
}

  ],
  summary: {
    keyPoints: [
      "EJB is used to build scalable and transactional enterprise applications.",
      "EJB 3.x simplifies development using annotations and POJOs.",
      "It follows a component-based model with clear separation of concerns.",
      "EJB containers provide essential services such as transactions and security.",
      "Useful in distributed, multi-tier enterprise applications."
    ],
    cheatSheet: {
      cfgProperties: `
@Stateless, @Stateful, @Singleton
@EJB for injection
@TransactionAttribute
@Schedule (for timers)`,
      mappingElements: `
Session Beans (Stateless, Stateful, Singleton)
Message-Driven Beans
Remote and Local Interfaces
Interceptors and Lifecycle Callbacks`
    }
  },
  nextSteps: [
    {
      topicId: "ejb-session-beans",
      reason: "Understand different types of session beans and their usage"
    },
    {
      topicId: "ejb-transactions",
      reason: "Explore transaction management in EJB applications"
    }
  ]
}
