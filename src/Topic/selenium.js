export default {
  meta: {
    id: "selenium-intro",
    title: "Selenium",
    description: "An introduction to Selenium, its purpose, what's needed to get started, and its key benefits for web automation.",
    category: "testing",
    subcategory: "automation",
    difficulty: "beginner",
    prerequisites: ["programming-basics"],
    created: "2025-08-08",
    updated: "2025-08-08",
    duration: 15,
    keywords: ["selenium", "automation", "testing", "webdriver", "qa"]
  },
  content: [
    {
      type: "heading",
      level: 1,
      text: "Why We Use Selenium: A Quick Introduction",
      anchor: "why-selenium-intro"
    },
    {
      type: "paragraph",
      text: "Selenium is the de-facto standard for **automating web browsers**. It's an open-source framework that lets you control a browser programmatically, just like a human would. Think of it as a remote control for your web browser, but one that can perform repetitive tasks with perfect consistency."
    },
    {
      type: "alert",
      variant: "info",
      content: "Real-Life Analogy: Imagine you have to check 100 different websites every morning for a price change. Doing this manually is slow and boring. Selenium is your personal digital assistant that can do it for you in minutes, flawlessly."
    },
    {
      type: "heading",
      level: 2,
      text: "Why Selenium Came into the Picture",
      anchor: "why-selenium"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Manual Testing Pain Points:** Before Selenium, checking web applications by hand was time-consuming, prone to human error (did you really click that button?), and very expensive.",
        "**Need for Consistency:** Every time you run a test, the steps should be identical. A human might miss a step or click too fast, but an automated script won't.",
        "**Regression Testing:** When you change one part of a website, you need to quickly re-test all the old features to make sure they still work. Selenium makes this process fast and repeatable.",
        "**Cross-Browser Testing:** A website must work on Chrome, Firefox, Safari, and more. Manually checking every feature on every browser is a nightmare, but Selenium can run the same script on all of them automatically."
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "Mnemonic Trick: Think of a frustrated tester named **T.I.E.R.** who needed Selenium. T.I.E.R. stands for **T**ime-consuming, **I**nconsistent, **E**xpensive, and **R**epeatedly boring! Selenium solved all of T.I.E.R.'s problems!"
    },
    {
      type: "heading",
      level: 2,
      text: "What Selenium Needs to Work",
      anchor: "what-it-needs"
    },
    {
      type: "paragraph",
      text: "Selenium is a driver, not an engine. It needs a few things to get the car running:"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**A Programming Language:** You write your instructions in a language like Java, Python, or JavaScript.",
        "**A Web Browser:** The actual browser you want to automate (Chrome, Firefox, etc.).",
        "**A Browser Driver:** This is the magic link—a small program that translates your code instructions into commands the browser can understand.",
        "**A Testing Framework:** Tools like TestNG or JUnit help you organize and run your tests efficiently."
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "Why Use Selenium? (The Benefits)",
      anchor: "why-use"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Save Time & Money:** Automated tests run faster than manual ones and don't require human supervision.",
        "**Better Coverage:** You can run thousands of tests in a short period, covering more scenarios.",
        "**Scalability:** With Selenium Grid, you can run tests on hundreds of browsers in parallel.",
        "**Industry Standard:** It has a massive community, is actively developed, and integrates with nearly every modern development tool."
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "Funny Thought: If a website is a house, manual testing is walking through every room to check the lights. Selenium is a smart home system that checks every light, in every room, at the same time, without you even getting off the couch."
    }, {
      type: "heading",
      level: 1,
      text: "Essential Terms in Selenium Automation 🤖",
      anchor: "essential-terms"
    },
    {
      type: "paragraph",
      text: "Getting started with Selenium means understanding its key vocabulary. Here’s a quick rundown of the most important terms you'll hear and use."
    },
    {
      type: "alert",
      variant: "info",
      content: "Think of these terms as the basic building blocks you need to construct your automation tests. 🧱"
    },
    {
      type: "heading",
      level: 2,
      text: "Core Concepts ✨",
      anchor: "core-concepts"
    },
    {
      type: "table",
      headers: ["Term", "Description", "Analogy"],
      rows: [
        ["**WebDriver** 🚗", "The main tool that controls the browser.", "The driver of the car."],
        ["**Browser Driver** ⚙️", "An intermediary program that connects WebDriver to a specific browser.", "The car's engine, specific to the car model."],
        ["**Locator** 🎯", "A method to uniquely identify a web element on a page.", "A GPS coordinate to find a specific house."],
        ["**Web Element** 🧩", "Any interactive component on a web page (e.g., button, link, text box).", "A specific door or window in the house."],
        ["**Session** 🚀", "The duration from opening a browser to closing it.", "One complete road trip from start to finish."]
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "Common Operations 🛠️",
      anchor: "common-operations"
    },
    {
      type: "table",
      headers: ["Term", "Description", "Example"],
      rows: [
        ["**Waits** ⏳", "A command to pause the script until a certain condition is met.", "Waiting for the 'loading' spinner to disappear."],
        ["**Implicit Wait** ⏰", "A global setting that tells WebDriver to poll for an element for a specified time.", "Telling a friend, 'Wait for up to 10 seconds for me to arrive.'"],
        ["**Explicit Wait** 🚦", "A specific, conditional wait for a single element or event.", "Waiting specifically for a traffic light to turn green before driving."],
        ["**Assertions** ✅", "A check to verify if an expected condition is met, used to confirm a test pass or fail.", "Checking if the sign says 'Welcome!' after you enter a store."]
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "✨ Memory Trick: **L.E.W.D.** is a funny way to remember key concepts: **L**ocator, **E**lement, **W**ebDriver, **D**river. ✨"
    },
    {
      type: "heading",
      level: 2,
      text: "Advanced Tools & Concepts 🌐",
      anchor: "advanced-concepts"
    },
    {
      type: "table",
      headers: ["Term", "Description", "What It Does"],
      rows: [
        ["**Selenium Grid** 🕸️", "A distributed testing system to run tests in parallel on multiple machines.", "Runs a single test script across 5 different browsers at the same time."],
        ["**Test Runner** 🏃", "A framework (like TestNG, JUnit) that organizes and executes your tests.", "A project manager for your test scripts."],
        ["**Headless Browser** 👻", "A browser that runs without a visible GUI, ideal for fast, background tests.", "A ghost browser that does its work in the background without you seeing it."]
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "⭐ Bonus: **Test Suite** is just a collection of test cases grouped for execution. Like a playlist for your favorite songs! 🎶"
    }, {
      type: "heading",
      level: 1,
      text: "Prerequisites: Setting up a Selenium Project 💻",
      anchor: "prerequisites-setup"
    },
    {
      type: "paragraph",
      text: "Before you can start writing your first Selenium script, you need to set up your environment. This includes installing core software and configuring your project to use the Selenium libraries."
    },
    {
      type: "alert",
      variant: "info",
      content: "This guide assumes you are using Java and the Eclipse IDE. The principles apply to other languages and IDEs, but the steps may vary."
    },
    {
      type: "heading",
      level: 2,
      text: "1. Core Software Installation 🛠️",
      anchor: "core-software-installation"
    },
    {
      type: "paragraph",
      text: "These are the fundamental tools required for any Selenium automation project. Follow the links below for downloads."
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "**Install Java JDK**: Download & install Java JDK (version 8 or above).",
        "**Set JAVA_HOME**: Configure JAVA_HOME environment variable and add `bin` to your system's PATH.",
        "**Install Eclipse IDE**: Download and install Eclipse IDE for Java Developers.",
        "**Install Chrome browser**: Download the latest version of Google Chrome.",
        "**Download ChromeDriver**: Download the ChromeDriver executable that matches your Chrome version. Note its file path."
      ]
    },
    {
      type: "externalLink",
      text: "Download Eclipse IDE",
      url: "https://www.eclipse.org/downloads/"
    },
    {
      type: "externalLink",
      text: "Download ChromeDriver",
      url: "https://googlechromelabs.github.io/chrome-for-testing/#stable"
    },
    {
      type: "heading",
      level: 2,
      text: "2. Project Setup Method ⚙️",
      anchor: "project-setup"
    },
    {
      type: "paragraph",
      text: "Choose one of the following methods to add the Selenium libraries to your project."
    },
    {
      type: "heading",
      level: 3,
      text: "🟢 A. Using Maven (Recommended)",
      anchor: "using-maven"
    },
    {
      type: "paragraph",
      text: "Maven is a build automation tool that automatically handles library dependencies for you."
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "**Install Maven**: Download and set up Maven.",
        "**Create Maven Project**: In Eclipse, go to `File > New > Maven Project`. Follow the wizard, selecting `maven-archetype-quickstart` and providing a Group ID and Artifact ID.",
        "**Add Selenium Dependency**: Add the following XML snippet to your `pom.xml` file inside the `<dependencies>` tag. Maven will then download the libraries automatically."
      ]
    },
    {
      type: "externalLink",
      text: "Download Maven",
      url: "https://maven.apache.org/download.cgi"
    },
    {
      type: "code",
      language: "xml",
      code: `<project>
  <dependencies>
    <dependency>
      <groupId>org.seleniumhq.selenium</groupId>
      <artifactId>selenium-java</artifactId>
      <version>3.141.59</version>
    </dependency>
  </dependencies>
</project>`
    },
    {
      type: "heading",
      level: 3,
      text: "🟠 B. Without Maven (Manual JARs)",
      anchor: "manual-jars"
    },
    {
      type: "paragraph",
      text: "This method requires you to manually download the Selenium JAR files and add them to your project's build path."
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "**Create Java Project**: In Eclipse, go to `File > New > Java Project` and give it a name.",
        "**Download Selenium JARs**: Download the Selenium Java ZIP file from the official downloads page.",
        "**Add to Build Path**: Right-click your project, select `Build Path > Configure Build Path`, and then go to the `Libraries` tab. Use `Add External JARs...` to select all the `.jar` files from the downloaded Selenium folder (both the main one and all files inside the `libs` subfolder)."
      ]
    },
    {
      type: "externalLink",
      text: "Download Selenium JARs",
      url: "https://www.selenium.dev/downloads/"
    },{
      type: "heading",
      level: 1,
      text: "Your First Selenium Code: Hello WebDriver! 👋",
      anchor: "hello-webdriver"
    },
    {
      type: "paragraph",
      text: "Alright, you've got everything set up! Now let's write the simplest Selenium script to prove our automation powers. This code will open a Chrome browser, visit a website, and then close the browser. It's the 'Hello World' of web automation!"
    },
    {
      type: "alert",
      variant: "info",
      content: "Real-Life Analogy: This is like teaching your robot how to open a specific book on a shelf, peek at the first page, and then put the book back. Simple, but foundational!"
    },
    {
      type: "heading",
      level: 2,
      text: "The Simple Selenium Script 🚀",
      anchor: "simple-script"
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration; // For implicit wait

public class SimpleBrowserTest {
    public static void main(String[] args) {
        // Step 1: Set the path to your ChromeDriver executable
        // This line tells Java where to find the browser driver.
        // Replace "path/to/chromedriver.exe" with the actual path on your system.
        // For example: "C:\\Selenium\\chromedriver.exe" or "/usr/local/bin/chromedriver"
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");

        // Step 2: Initialize a new instance of the Chrome driver
        // This command actually opens the Chrome browser window.
        WebDriver driver = new ChromeDriver();

        // Step 3: Add an implicit wait (optional but good practice)
        // This tells WebDriver to wait up to 10 seconds for elements to appear before failing.
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        // Step 4: Navigate to a website
        // This command tells the browser to go to the specified URL.
        driver.get("https://www.selenium.dev");

        // Step 5: Print the page title to the console
        // This gets the title of the currently open web page.
        System.out.println("Page Title: " + driver.getTitle());

        // Step 6: Pause for a moment (optional, just to see the browser)
        try {
            Thread.sleep(3000); // Wait for 3 seconds
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Step 7: Close the browser
        // This command closes the currently active browser window.
        driver.quit();
        System.out.println("Browser closed successfully!");
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "What This Code Does (Step-by-Step Breakdown) 🕵️‍♂️",
      anchor: "code-breakdown"
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "**`System.setProperty(\"webdriver.chrome.driver\", \"path/to/chromedriver.exe\");`**: This is a crucial first step! It tells your Java program *where* the Chrome browser driver executable is located on your computer. Without this, Selenium wouldn't know how to talk to Chrome. Remember to replace the placeholder path with your actual path!",
        "**`WebDriver driver = new ChromeDriver();`**: This line instantiates (creates) a new object of `ChromeDriver`. When this line executes, you'll actually see a new Chrome browser window pop up on your screen. That's your automated browser!",
        "**`driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));`**: This sets a global 'smart' wait. If Selenium tries to find an element and it's not immediately there, it will wait *up to* 10 seconds for it to appear before giving up. It's like telling your robot, 'If the button isn't there immediately, give it a few seconds before complaining.'",
        "**`driver.get(\"https://www.selenium.dev\");`**: This is how you tell your browser to visit a specific URL. Your automated Chrome will navigate to the Selenium project's official website.",
        "**`System.out.println(\"Page Title: \" + driver.getTitle());`**: After navigating, this line retrieves the title of the web page that's currently loaded in the browser and prints it to your console.",
        "**`Thread.sleep(3000);`**: This is a simple (but generally discouraged in real tests) way to pause your script for 3 seconds. It's just so you can actually *see* the browser open and the website load before it closes too quickly. In real automation, use proper waits!",
        "**`driver.quit();`**: This is the clean-up step. It tells the WebDriver to close all associated browser windows and terminate the WebDriver session. Always use `quit()` to ensure proper resource release."
      ]
    },
    {
      type: "alert",
      variant: "warning",
      content: "Debugging Tip: If your browser doesn't open, double-check that your `chromedriver.exe` path in `System.setProperty` is absolutely correct and that its version matches your Chrome browser's version!"
    },
    {
      type: "alert",
      variant: "info",
      content: "Funny thought: Your first Selenium script is like training a very obedient, but currently clueless, digital puppy. It only does exactly what you tell it, and right now, that's just fetching the ball (the website) and bringing it back."
    },{
      type: "heading",
      level: 1,
      text: "Question: Simple Selenium WebDriver Program with Checks 🤔",
      anchor: "question"
    },
    {
      type: "paragraph",
      text: "Write a Java program to open Google in Chrome using Selenium WebDriver. Demonstrate how to get the title and current URL of a web page. Write a Java method that checks if the WebDriver is successfully launched. Create a class to compare Selenium WebDriver and Selenium RC (comment-based). Log a message if a website takes longer than 3 seconds to load."
    },
    {
      type: "heading",
      level: 1,
      text: "Answer: The Java Selenium Program 🧑‍💻",
      anchor: "answer"
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration; // For implicit waits

/**
 * Demonstrates basic Selenium WebDriver operations in Java.
 * Covers opening a browser, getting page info, and custom checks.
 */
public class GoogleAutomationDemo {

    /**
     * Verifies if the WebDriver instance is successfully launched.
     * @param driver The WebDriver instance.
     * @return true if responsive, false otherwise.
     */
    public static boolean isWebDriverLaunched(WebDriver driver) {
        if (driver == null) return false;
        try {
            driver.getWindowHandle(); // Attempt a basic operation.
            System.out.println("✅ WebDriver launched successfully!");
            return true;
        } catch (Exception e) {
            System.err.println("❌ WebDriver launch check failed: " + e.getMessage());
            return false;
        }
    }

    /**
     * Provides a conceptual comparison of Selenium WebDriver vs. RC.
     * RC is deprecated and should not be used in new projects.
     */
    public static class SeleniumComparison {
        /*
         * Selenium WebDriver vs. Selenium RC (Remote Control) Comparison:
         *
         * WebDriver: Direct browser communication, faster, more stable, modern.
         * RC: Requires proxy server, slower, deprecated.
         */
    }

    public static void main(String[] args) {
        // Set path to your ChromeDriver executable.
        // Replace with your actual path, e.g., "C:\\drivers\\chromedriver.exe"
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");

        WebDriver driver = null;
        long startTime;

        try {
            // Initialize ChromeDriver; this opens the Chrome browser.
            driver = new ChromeDriver();
            System.out.println("Attempting to launch Chrome browser...");

            // Check if WebDriver was successfully launched.
            if (!isWebDriverLaunched(driver)) {
                System.err.println("Exiting program due to WebDriver launch failure.");
                return;
            }

            // Set implicit wait for elements to appear.
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
            System.out.println("Implicit wait set to 5 seconds.");

            // Navigate to Google and measure load time.
            startTime = System.currentTimeMillis();
            driver.get("https://www.google.com");
            long loadTime = System.currentTimeMillis() - startTime;

            // Get and print page title and current URL.
            System.out.println("Current URL: " + driver.getCurrentUrl());
            System.out.println("Page Title: " + driver.getTitle());
            System.out.println("Page Load Time: " + loadTime + " ms");

            // Log warning if load time exceeds 3 seconds.
            if (loadTime > 3000) {
                System.out.println("⚠️ Warning: Page took >3s to load! (" + loadTime + "ms)");
            }

            // Optional: pause for visual inspection.
            Thread.sleep(3000);

        } catch (Exception e) {
            System.err.println("An error occurred: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Always quit the driver to close browser and release resources.
            if (driver != null) {
                driver.quit();
                System.out.println("Browser successfully closed.");
            }
        }
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Explanation of the Program 💡",
      anchor: "explanation"
    },
    {
      type: "list",
      style: "ordered",
      items: [
        "**Set ChromeDriver Path**: `System.setProperty()` directs Java to the ChromeDriver executable, essential for Selenium to communicate with Chrome. **Remember to replace the placeholder path.**",
        "**Initialize WebDriver**: `new ChromeDriver()` instantiates the browser, making a Chrome window appear. This `driver` object is your control panel for the browser.",
        "**Verify WebDriver Launch**: The custom `isWebDriverLaunched()` method checks if the browser instance is active by attempting a basic interaction, providing immediate feedback on setup success.",
        "**Implicit Wait**: `driver.manage().timeouts().implicitlyWait()` sets a global timeout for finding elements, making tests more robust against varying load times.",
        "**Navigate to URL**: `driver.get(\"https://www.google.com\")` commands the browser to open Google's homepage.",
        "**Get Page Information**: `driver.getCurrentUrl()` retrieves the full URL of the page, and `driver.getTitle()` gets the text from the browser tab (HTML `<title>` tag).",
        "**Measure Load Time**: The program calculates how long it takes for `driver.get()` to complete. If it's over 3 seconds, a warning is printed, highlighting potential performance issues.",
        "**Selenium WebDriver vs. RC**: The `SeleniumComparison` nested class includes concise comments explaining why WebDriver is the preferred, modern choice over the deprecated RC, focusing on architecture, speed, and stability.",
        "**Close Browser**: The `finally` block ensures `driver.quit()` is always called. This closes all browser windows and frees up system resources, preventing lingering browser processes."
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "This example forms the bedrock of most Selenium automation scripts. From here, you'll add more complex interactions like finding elements, typing, and clicking! 🖱️"
    },  {
      type: "heading",
      level: 1,
      text: "Locating Web Elements: Your GPS for Web Automation 📍",
      anchor: "locating-web-elements"
    },
    {
      type: "paragraph",
      text: "In Selenium, before you can click a button, type into a text box, or verify text, you need to tell WebDriver *which* element you're interested in. This is where **Locators** come in – they are like the GPS coordinates that help Selenium find specific parts of a web page."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: Imagine a busy street. Locators are the different ways you might describe a specific building: 'the one with the red door' (CSS), 'the corner shop' (XPath), or 'the post office' (ID)."
    },
    {
      type: "heading",
      level: 2,
      text: "The `By` Class: Your Locator Toolbox 🧰",
      anchor: "by-class"
    },
    {
      type: "paragraph",
      text: "Selenium's `By` class provides static methods to define various locator strategies. You'll typically use `driver.findElement(By.<strategy>(\"value\"))`."
    },
    {
      type: "heading",
      level: 2,
      text: "Common Locator Strategies Explained ✨",
      anchor: "common-locators"
    },
    {
      type: "heading",
      level: 3,
      text: "1. ID (`By.id()`)",
      anchor: "locator-id"
    },
    {
      type: "paragraph",
      text: "**Description:** Finds an element by its unique `id` attribute. This is generally the **most reliable and fastest** locator because IDs are (ideally) unique on a page."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <input id="username" type="text">
WebElement usernameField = driver.findElement(By.id("username"));`
    },
    {
      type: "alert",
      variant: "info",
      content: "Tip: Always prefer `By.id()` if an element has a unique and stable ID. It's like having a house number – very direct!"
    },
    {
      type: "heading",
      level: 3,
      text: "2. Name (`By.name()`)",
      anchor: "locator-name"
    },
    {
      type: "paragraph",
      text: "**Description:** Locates an element by its `name` attribute. Often used for form elements like text fields, radio buttons, or checkboxes."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <input name="password" type="password">
WebElement passwordField = driver.findElement(By.name("password"));`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Caution: Names might not always be unique on a page, so this can sometimes return the first matching element."
    },
    {
      type: "heading",
      level: 3,
      text: "3. Class Name (`By.className()`)",
      anchor: "locator-classname"
    },
    {
      type: "paragraph",
      text: "**Description:** Finds elements by their `class` attribute. Useful when multiple elements share the same style or behavior. Be aware that this may return multiple elements."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <button class="btn btn-primary">Submit</button>
WebElement submitButton = driver.findElement(By.className("btn-primary"));`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Caution: If an element has multiple classes (e.g., `class='btn btn-lg'`), you can only use one class name with `By.className()`."
    },
    {
      type: "heading",
      level: 3,
      text: "4. Tag Name (`By.tagName()`)",
      anchor: "locator-tagname"
    },
    {
      type: "paragraph",
      text: "**Description:** Locates elements by their HTML tag name (e.g., `div`, `a`, `input`, `button`). Typically used to find a collection of elements of a certain type."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <a>Link 1</a> <a>Link 2</a>
List<WebElement> allLinks = driver.findElements(By.tagName("a"));`
    },
    {
      type: "heading",
      level: 3,
      text: "5. Link Text (`By.linkText()` / `By.partialLinkText()`)",
      anchor: "locator-linktext"
    },
    {
      type: "paragraph",
      text: "**Description:** Specifically for `<a>` (anchor) elements. `By.linkText()` matches the **exact** visible text of the link, while `By.partialLinkText()` matches a **substring** of the visible text."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <a href="/about">About Us</a>
WebElement aboutLink = driver.findElement(By.linkText("About Us"));

// HTML: <a href="/contact">Contact Support</a>
WebElement supportLink = driver.findElement(By.partialLinkText("Support"));`
    },
    {
      type: "heading",
      level: 3,
      text: "6. CSS Selector (`By.cssSelector()`)",
      anchor: "locator-css-selector"
    },
    {
      type: "paragraph",
      text: "**Description:** Uses CSS selectors to locate elements. This is very powerful and often preferred over XPath for its readability and speed (as browsers optimize CSS selectors natively). You can target elements by ID (`#id`), class (`.class`), tag, attributes, and more combinations."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <input id="email" class="form-control">
WebElement emailField = driver.findElement(By.cssSelector("input#email"));

// HTML: <button type="submit" name="loginBtn">Login</button>
WebElement loginButton = driver.findElement(By.cssSelector("button[name='loginBtn']"));

// HTML: <div class="product-item">...</div>
WebElement productDiv = driver.findElement(By.cssSelector("div.product-item"));`
    },
    {
      type: "alert",
      variant: "info",
      content: "Tip: CSS Selectors are usually faster and more robust than XPath for most scenarios."
    },
    {
      type: "heading",
      level: 3,
      text: "7. XPath (`By.xpath()`)",
      anchor: "locator-xpath"
    },
    {
      type: "paragraph",
      text: "**Description:** XML Path Language (XPath) can navigate through the entire HTML DOM structure to find elements. It's the most flexible and can locate elements based on almost any criteria, even relative to other elements. However, it can be less readable and brittle if the DOM structure changes frequently."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <input type="text" id="fname">
WebElement firstNameField = driver.findElement(By.xpath("//input[@id='fname']"));

// HTML: <div><p>Welcome!</p></div>
WebElement welcomeText = driver.findElement(By.xpath("//div/p[text()='Welcome!']"));

// Find an element relative to another (parent/child)
// HTML: <div id="loginForm"><button>Login</button></div>
WebElement loginButtonXPath = driver.findElement(By.xpath("//div[@id='loginForm']/button"));`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Caution: Over-reliance on XPath, especially long or absolute XPaths, can lead to brittle tests that break easily with minor UI changes."
    }, {
      type: "heading",
      level: 1,
      text: "Java Practice: Locating Web Elements in Selenium 🔎",
      anchor: "locator-practice-intro"
    },
    {
      type: "paragraph",
      text: "Now that you understand the different locator strategies in Selenium, it's time to put that knowledge into practice! These tasks will help you solidify your understanding of how to find elements on a web page using Java and Selenium WebDriver. Remember to replace placeholder URLs and element attributes with those from a real website you're testing (e.g., Google, your own test page)."
    },
    {
      type: "alert",
      variant: "info",
      content: "Before you start, make sure your Selenium project is set up and you have the correct ChromeDriver for your browser version. Use your browser's developer tools (F12) to inspect elements and find their attributes."
    },
    {
      type: "heading",
      level: 2,
      text: "Task 1: Locate a Search Box (3 Ways) 🔍",
      anchor: "task-1-search-box"
    },
    {
      type: "paragraph",
      text: "Write Java code to locate a search box element using three different locator strategies (e.g., `By.name()`, `By.cssSelector()`, `By.xpath()`). Print a confirmation message for each."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class LocateSearchBox {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.google.com"); // Using Google for demonstration

        // Locate by Name
        WebElement searchBoxByName = driver.findElement(By.name("q"));
        System.out.println("Search box located by Name: " + (searchBoxByName != null ? "Success" : "Failed"));

        // Locate by CSS Selector
        // For Google search box, its CSS selector could be "textarea[name='q']" or "input.gLFyf"
        WebElement searchBoxByCss = driver.findElement(By.cssSelector("textarea[name='q']"));
        System.out.println("Search box located by CSS Selector: " + (searchBoxByCss != null ? "Success" : "Failed"));

        // Locate by XPath
        // For Google search box, a simple XPath could be "//textarea[@name='q']"
        WebElement searchBoxByXPath = driver.findElement(By.xpath("//textarea[@name='q']"));
        System.out.println("Search box located by XPath: " + (searchBoxByXPath != null ? "Success" : "Failed"));

        driver.quit();
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Task 2: Find a Button Inside a Specific Div (XPath) 🎯",
      anchor: "task-2-xpath-div-button"
    },
    {
      type: "paragraph",
      text: "Create an XPath expression to locate a button element that is specifically nested inside a `div` with a known ID or class. This demonstrates relative XPath usage."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class XPathDivButton {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Example URL with a div and button (replace with your actual test page)
        // Imagine HTML like: <div id="loginForm"><button id="submitBtn">Login</button></div>
        driver.get("https://www.example.com/login"); 

        // XPath to find a button within a div with id='loginForm'
        WebElement loginButton = driver.findElement(By.xpath("//div[@id='loginForm']/button"));
        System.out.println("Login button located by XPath: " + (loginButton != null ? "Success" : "Failed"));
        
        // Example: Click the button
        // loginButton.click();

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "XPath `//div[@id='loginForm']/button` means 'find a `div` anywhere with id `loginForm`, then find a direct `button` child inside it'."
    },
    {
      type: "heading",
      level: 2,
      text: "Task 3: Target Elements by Class and Attribute (CSS Selectors) 🎨",
      anchor: "task-3-css-selectors"
    },
    {
      type: "paragraph",
      text: "Write CSS selectors to target elements: one by its class name and another by an arbitrary attribute (e.g., `data-test-id`)."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;
import java.util.List;

public class CSSSelectorPractice {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.example.com"); // Use a page where these elements exist

        // CSS Selector by Class Name (e.g., for <div class="card-item">)
        List<WebElement> cardItems = driver.findElements(By.cssSelector(".card-item"));
        System.out.println("Number of elements with class 'card-item': " + cardItems.size());

        // CSS Selector by Attribute (e.g., for <input type="text" data-testid="search-input">)
        WebElement dataInput = driver.findElement(By.cssSelector("input[data-testid='search-input']"));
        System.out.println("Input with data-testid located: " + (dataInput != null ? "Success" : "Failed"));

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "`.className` for class, `[attribute='value']` for attributes. Combine them like `tag.className[attribute='value']`."
    },
    {
      type: "heading",
      level: 2,
      text: "Task 4: Locate a Link Using Partial Link Text and Click It 🔗",
      anchor: "task-4-partial-link-text"
    },
    {
      type: "paragraph",
      text: "Find a link on a web page using only a part of its visible text and then click on it. This is useful when the full link text might be dynamic or very long."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class PartialLinkTextClick {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.selenium.dev"); // Using Selenium website for example

        // Locate a link using partial text and click it
        // Example: link text "About Selenium" could be found with "About"
        WebElement downloadsLink = driver.findElement(By.partialLinkText("Downloads"));
        System.out.println("Link 'Downloads' located. Clicking now...");
        downloadsLink.click();
        
        System.out.println("Navigated to: " + driver.getCurrentUrl());

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Using `partialLinkText` might lead to finding an unintended link if multiple links contain the same partial text. Be specific!"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 5: Build a Reusable Locator Method 🔄",
      anchor: "task-5-reusable-method"
    },
    {
      type: "paragraph",
      text: "Create a generic Java method that accepts a `By` locator object and a value string as input, and returns a `WebElement`. This promotes code reusability in your test automation framework."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class ReusableLocatorMethod {

    private static WebDriver driver;

    // Reusable method to find an element
    public static WebElement findElement(By locatorType, String locatorValue) {
        WebElement element = null;
        try {
            if (locatorType.equals(By.id(""))) { // Dummy check for ID type, actual check is on instance
                element = driver.findElement(By.id(locatorValue));
            } else if (locatorType.equals(By.name(""))) { // Dummy check for Name type
                element = driver.findElement(By.name(locatorValue));
            } else if (locatorType.equals(By.cssSelector(""))) { // Dummy check for CSS type
                element = driver.findElement(By.cssSelector(locatorValue));
            } else if (locatorType.equals(By.xpath(""))) { // Dummy check for XPath type
                element = driver.findElement(By.xpath(locatorValue));
            } else if (locatorType.equals(By.linkText(""))) { // Dummy check for LinkText type
                element = driver.findElement(By.linkText(locatorValue));
            } else if (locatorType.equals(By.partialLinkText(""))) { // Dummy check for PartialLinkText type
                element = driver.findElement(By.partialLinkText(locatorValue));
            }
            // Add more By types as needed
            System.out.println("Element found using: " + locatorType + " with value: " + locatorValue);
        } catch (Exception e) {
            System.err.println("Element not found using " + locatorType + " with value " + locatorValue + ": " + e.getMessage());
        }
        return element;
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        driver = new ChromeDriver(); // Assign to static driver
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.google.com");

        // Using the reusable method
        WebElement searchBox = findElement(By.name(""), "q"); // Pass By.name with dummy value, then actual value
        if (searchBox != null) {
            searchBox.sendKeys("Reusable method test");
        }

        WebElement imagesLink = findElement(By.linkText(""), "Images"); // Locating 'Images' link on Google
        if (imagesLink != null) {
            imagesLink.click();
        }

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "The `By` object itself represents the strategy. You can pass the `By` instance directly, like `By.name(\"q\")`, without needing dummy values. A better reusable method might directly take `By` as a parameter: `public static WebElement findElement(By locator) { return driver.findElement(locator); }`"
    },
    {
      type: "heading",
      level: 1,
      text: "Web Element Interactions: Making Your Browser Do Stuff! 💪",
      anchor: "element-interactions-intro"
    },
    {
      type: "paragraph",
      text: "After successfully locating a web element, the next step is to actually *do something* with it! This note covers the most common actions you'll perform using the `WebElement` interface in Selenium WebDriver. Think of these as the 'actions' your robot performs on the web page."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: If 'Locators' are your GPS to find a building, 'Interactions' are the actions you take once you're there – opening the door, writing a note, or checking if the lights are on."
    },
    {
      type: "heading",
      level: 2,
      text: "Common Interaction Methods 🖱️⌨️",
      anchor: "common-interaction-methods"
    },
    {
      type: "paragraph",
      text: "These methods allow you to simulate user inputs and retrieve information from web elements."
    },
    {
      type: "heading",
      level: 3,
      text: "1. `click()`",
      anchor: "interaction-click"
    },
    {
      type: "paragraph",
      text: "**Description:** Simulates a mouse click on an element (e.g., buttons, links, checkboxes, radio buttons). If a click navigates to a new page, WebDriver will wait for the new page to load."
    },
    {
      type: "code",
      language: "java",
      code: `// Locate a button and click it
WebElement myButton = driver.findElement(By.id("submitButton"));
myButton.click();`
    },
    {
      type: "heading",
      level: 3,
      text: "2. `sendKeys()`",
      anchor: "interaction-sendkeys"
    },
    {
      type: "paragraph",
      text: "**Description:** Enters text into an input field or text area. It can also send special keyboard keys (e.g., `Keys.ENTER`, `Keys.TAB`)."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.Keys; // For special keys

// Locate a text field and type
WebElement searchField = driver.findElement(By.name("q"));
searchField.sendKeys("Selenium automation");

// Type and press ENTER
searchField.sendKeys(Keys.ENTER);`
    },
    {
      type: "heading",
      level: 3,
      text: "3. `clear()`",
      anchor: "interaction-clear"
    },
    {
      type: "paragraph",
      text: "**Description:** Clears the existing text from an input field or text area. Useful before typing new text into a pre-filled field."
    },
    {
      type: "code",
      language: "java",
      code: `// Locate a text field with existing text
WebElement commentBox = driver.findElement(By.id("comment"));
commentBox.clear(); // Clears any pre-existing text
commentBox.sendKeys("My new comment.");`
    },
    {
      type: "heading",
      level: 3,
      text: "4. `getText()`",
      anchor: "interaction-gettext"
    },
    {
      type: "paragraph",
      text: "**Description:** Retrieves the visible (inner) text of a web element. This is the text displayed between the opening and closing tags of an HTML element."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <p id="welcomeMessage">Welcome, User!</p>
WebElement messageElement = driver.findElement(By.id("welcomeMessage"));
String message = messageElement.getText();
System.out.println("Message: " + message); // Output: Welcome, User!`
    },
    {
      type: "heading",
      level: 3,
      text: "5. `getAttribute(String name)`",
      anchor: "interaction-getattribute"
    },
    {
      type: "paragraph",
      text: "**Description:** Retrieves the value of a specified HTML attribute of an element (e.g., `value`, `href`, `src`, `class`, `id`)."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <input type="text" value="Default Value" name="inputField">
WebElement inputField = driver.findElement(By.name("inputField"));
String value = inputField.getAttribute("value"); // Retrieves "Default Value"
String type = inputField.getAttribute("type");   // Retrieves "text"
System.out.println("Input value: " + value + ", type: " + type);`
    },
    {
      type: "alert",
      variant: "info",
      content: "Trick: Use `getText()` for visible text (like labels, paragraph content) and `getAttribute('value')` for the current text *inside* input fields or text areas. They are different! 😉"
    },
    {
      type: "heading",
      level: 2,
      text: "Checking Element States: `is...()` Methods ✅❌",
      anchor: "checking-element-states"
    },
    {
      type: "paragraph",
      text: "These boolean methods help you verify the current state of a web element, crucial for robust test assertions."
    },
    {
      type: "heading",
      level: 3,
      text: "1. `isDisplayed()`",
      anchor: "state-isdisplayed"
    },
    {
      type: "paragraph",
      text: "**Description:** Returns `true` if the element is visible on the page (not hidden by CSS, HTML, or JavaScript), `false` otherwise."
    },
    {
      type: "code",
      language: "java",
      code: `// Locate a potentially hidden error message
WebElement errorMessage = driver.findElement(By.id("errorMsg"));
if (errorMessage.isDisplayed()) {
    System.out.println("Error message is visible!");
}`
    },
    {
      type: "heading",
      level: 3,
      text: "2. `isEnabled()`",
      anchor: "state-isenabled"
    },
    {
      type: "paragraph",
      text: "**Description:** Returns `true` if the element is enabled (interactable), `false` if it's disabled (e.g., a grayed-out button). Disabled elements cannot be clicked or typed into."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <button id="submit" disabled>Submit</button> or <button id="submit">Submit</button>
WebElement submitButton = driver.findElement(By.id("submit"));
if (submitButton.isEnabled()) {
    System.out.println("Button is enabled. Clicking!");
    submitButton.click();
} else {
    System.out.println("Button is disabled. Cannot click.");
}`
    },
    {
      type: "heading",
      level: 3,
      text: "3. `isSelected()`",
      anchor: "state-isselected"
    },
    {
      type: "paragraph",
      text: "**Description:** Returns `true` if an element (like a checkbox, radio button, or option in a dropdown) is currently selected, `false` otherwise."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <input type="checkbox" id="agree" checked>
WebElement checkbox = driver.findElement(By.id("agree"));
if (checkbox.isSelected()) {
    System.out.println("Checkbox is already selected.");
} else {
    System.out.println("Checkbox not selected. Clicking to select.");
    checkbox.click();
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Funny thought: These `is...()` methods are like asking your web element, 'Are you there? Can you work? Did you pick that one?' It's a very conversational robot-to-HTML chat!"
    }, {
      type: "heading",
      level: 1,
      text: "Java Practice: Interacting with Web Elements 🎮",
      anchor: "interaction-practice-intro"
    },
    {
      type: "paragraph",
      text: "Time to get your hands dirty! These tasks will help you master various interactions with web elements using Selenium WebDriver in Java. You'll practice typing, clicking, checking states, and building reusable components. Remember to adapt the locators to a website you can test, like a demo login page or a public site like `example.com` or `google.com`."
    },
    {
      type: "alert",
      variant: "info",
      content: "Pro-Tip: Use your browser's developer tools (F12) to inspect elements and get their IDs, names, or other attributes for your locators! 🕵️"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 1: Fill a Login Form and Submit 🔑",
      anchor: "task-1-login-form"
    },
    {
      type: "paragraph",
      text: "Write Java code to navigate to a login page, enter a username and password into input fields using `sendKeys()`, and then click the login button or submit the form."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class LoginFormAutomation {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Navigate to a sample login page (replace with a real one)
        driver.get("https://www.example.com/login"); 

        // Locate and fill username field
        WebElement usernameField = driver.findElement(By.id("username"));
        usernameField.sendKeys("testuser");

        // Locate and fill password field
        WebElement passwordField = driver.findElement(By.name("password"));
        passwordField.sendKeys("password123");

        // Locate and click login button
        WebElement loginButton = driver.findElement(By.xpath("//button[@type='submit']"));
        loginButton.click(); // Or passwordField.submit(); if it's the last input in the form.

        System.out.println("Login form submitted.");
        driver.quit();
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Task 2: Check if a Button is Enabled ✅",
      anchor: "task-2-button-enabled"
    },
    {
      type: "paragraph",
      text: "Write a Java method that checks whether a specific button is enabled (`isEnabled()`). Print a message indicating its state. This is crucial for handling dynamic forms where buttons might be disabled until conditions are met."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class CheckButtonState {

    // Method to check button enabled state
    public static boolean isButtonEnabled(WebDriver driver, By locator) {
        WebElement button = driver.findElement(locator);
        return button.isEnabled();
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.example.com/form"); // Use a page with an enabled/disabled button

        // Example: check a button by its ID
        By submitButtonLocator = By.id("submitBtn"); // Replace with your button's locator
        
        if (isButtonEnabled(driver, submitButtonLocator)) {
            System.out.println("Submit button is ENABLED. Ready to click!");
            // driver.findElement(submitButtonLocator).click();
        } else {
            System.out.println("Submit button is DISABLED. Cannot click yet.");
        }
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Memory Trick: `isEnabled()` asks 'Is the button *on*?' like a light switch. `isDisplayed()` asks 'Can I *see* the button?' like a hidden object. They're different! 💡"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 3: Retrieve All Placeholder Values 📝",
      anchor: "task-3-placeholder-values"
    },
    {
      type: "paragraph",
      text: "Write Java code to find all `<input>` elements on a page and retrieve their `placeholder` attribute values using `getAttribute()`. Print each placeholder text."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;
import java.util.List;

public class GetPlaceholders {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.google.com"); // Google has a search input with a placeholder

        // Find all input elements on the page
        List<WebElement> inputElements = driver.findElements(By.tagName("input"));

        System.out.println("--- Input Placeholders ---");
        for (WebElement input : inputElements) {
            String placeholder = input.getAttribute("placeholder");
            if (placeholder != null && !placeholder.isEmpty()) {
                System.out.println("Found placeholder: \"" + placeholder + "\"");
            }
        }
        System.out.println("--------------------------");
        driver.quit();
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Task 4: Check and Toggle a Checkbox 🔲",
      anchor: "task-4-toggle-checkbox"
    },
    {
      type: "paragraph",
      text: "Write Java code to locate a checkbox. Check if it's currently selected using `isSelected()`. If it's not selected, click it to toggle its state. If it is selected, print a message indicating so."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class CheckboxToggler {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Navigate to a page with a checkbox (e.g., a registration form)
        // Imagine HTML: <input type="checkbox" id="terms" checked> or <input type="checkbox" id="terms">
        driver.get("https://www.example.com/signup"); 

        WebElement termsCheckbox = driver.findElement(By.id("terms")); // Replace with actual locator

        if (termsCheckbox.isSelected()) {
            System.out.println("Checkbox is already selected.");
        } else {
            System.out.println("Checkbox is NOT selected. Clicking to select...");
            termsCheckbox.click();
            System.out.println("Checkbox is now selected: " + termsCheckbox.isSelected());
        }
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Funny thought: Automating a checkbox is like a tiny robot deciding if it *really* agrees to the terms and conditions before clicking 'I Agree'. 🤔"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 5: Create a Utility Method to Click Only Visible and Enabled Buttons 🔗",
      anchor: "task-5-smart-click"
    },
    {
      type: "paragraph",
      text: "Build a reusable Java method that accepts a `WebElement` and clicks it *only* if it is both `isDisplayed()` and `isEnabled()`. This is a best practice for writing more robust and reliable automation scripts."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class SmartClickUtility {

    // Reusable method for a "smart" click
    public static void clickIfReady(WebElement element, String elementName) {
        if (element != null && element.isDisplayed() && element.isEnabled()) {
            System.out.println("Clicking '" + elementName + "' (visible and enabled).");
            element.click();
        } else {
            System.out.println("Cannot click '" + elementName + "'. It's either not found, not visible, or not enabled.");
        }
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.example.com/dashboard"); // Imagine a dashboard with a save button

        // Scenario 1: Button is visible and enabled
        WebElement saveButton = driver.findElement(By.id("saveChangesBtn")); 
        clickIfReady(saveButton, "Save Changes Button");

        // Scenario 2: Button might be hidden or disabled (for demonstration, assume it is)
        // In a real scenario, you'd have actual conditions making it hidden/disabled.
        WebElement disabledButton = null; // Imagine this button is not found or disabled
        try {
            disabledButton = driver.findElement(By.id("anotherActionBtn"));
        } catch (org.openqa.selenium.NoSuchElementException e) {
            System.out.println("Button 'anotherActionBtn' not found (for demonstration).");
        }
        clickIfReady(disabledButton, "Another Action Button"); // This will log inability to click

        driver.quit();
    }
}`
    }
,{
      type: "heading",
      level: 1,
      text: "Dropdowns & Radio Buttons: Choosing Your Options 📋",
      anchor: "dropdowns-radiobuttons-intro"
    },
    {
      type: "paragraph",
      text: "Web forms often feature **dropdown menus** (`<select>` tags) and **radio buttons** (`<input type=\"radio\">`) for users to make choices. While basic clicks work for radio buttons, dropdowns require a special approach using Selenium's `Select` class. This note will guide you through effectively automating interactions with both."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: Think of a dropdown as a list of restaurant menus you can pick from, and radio buttons as a choice between 'Pizza' or 'Pasta' – you can only pick one from a set!"
    },
    {
      type: "heading",
      level: 2,
      text: "Interacting with Dropdowns: The `Select` Class 📝",
      anchor: "select-class"
    },
    {
      type: "paragraph",
      text: "For HTML `<select>` elements, Selenium provides a dedicated `org.openqa.selenium.support.ui.Select` class. This class offers convenient methods specifically designed to handle dropdown options."
    },
    {
      type: "heading",
      level: 3,
      text: "Initializing the `Select` Class",
      anchor: "select-init"
    },
    {
      type: "paragraph",
      text: "First, locate the `<select>` web element, then pass it to the `Select` class constructor."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select; // Import Select class

// ... WebDriver setup ...
WebElement dropdownElement = driver.findElement(By.id("countryDropdown"));
Select selectObject = new Select(dropdownElement);`
    },
    {
      type: "heading",
      level: 3,
      text: "Selecting Options (Single Select Dropdowns) ✅",
      anchor: "single-select"
    },
    {
      type: "paragraph",
      text: "The `Select` class offers three main ways to select an option in a single-choice dropdown:"
    },
    {
      type: "table",
      headers: ["Method", "Description", "Example HTML", "Selenium Code"],
      rows: [
        ["`selectByVisibleText(String text)`", "Selects an option by its displayed text.", "`<option>USA</option>`", "`selectObject.selectByVisibleText(\"USA\");`"],
        ["`selectByValue(String value)`", "Selects an option by its `value` attribute.", "`<option value=\"us\">USA</option>`", "`selectObject.selectByValue(\"us\");`"],
        ["`selectByIndex(int index)`", "Selects an option by its 0-based index (order).", "`<option>First</option>` (index 0)", "`selectObject.selectByIndex(0);`"]
      ]
    },
    {
      type: "code",
      language: "java",
      code: `// Assuming 'selectObject' is initialized as above

// Select by visible text
selectObject.selectByVisibleText("Canada");
System.out.println("Selected by visible text: Canada");

// Select by value attribute
selectObject.selectByValue("uk"); // Assuming <option value="uk">United Kingdom</option>
System.out.println("Selected by value: UK");

// Select by index (e.g., the 3rd option, which is index 2)
selectObject.selectByIndex(2);
System.out.println("Selected by index: " + selectObject.getFirstSelectedOption().getText());`
    },
    {
      type: "heading",
      level: 3,
      text: "Handling Multi-Select Dropdowns 📊",
      anchor: "multi-select"
    },
    {
      type: "paragraph",
      text: "Some dropdowns allow selecting multiple options (defined with the `multiple` attribute in HTML). The `Select` class also provides methods for this."
    },
    {
      type: "code",
      language: "java",
      code: `// HTML: <select id="skills" multiple>...</select>
WebElement multiSelectElement = driver.findElement(By.id("skills"));
Select multiSelectObject = new Select(multiSelectElement);

// Check if it's a multi-select dropdown
if (multiSelectObject.isMultiple()) {
    System.out.println("This is a multi-select dropdown.");

    // Select multiple options
    multiSelectObject.selectByVisibleText("Java");
    multiSelectObject.selectByValue("python");

    // Deselect an option
    multiSelectObject.deselectByVisibleText("Java");

    // Deselect all selected options
    multiSelectObject.deselectAll();
} else {
    System.out.println("This is a single-select dropdown.");
}`
    },
    {
      type: "table",
      headers: ["Method", "Description"],
      rows: [
        ["`deselectByVisibleText(String text)`", "Deselects an option by its displayed text."],
        ["`deselectByValue(String value)`", "Deselects an option by its `value` attribute."],
        ["`deselectByIndex(int index)`", "Deselects an option by its 0-based index."],
        ["`deselectAll()`", "Deselects all currently selected options."],
        ["`isMultiple()`", "Returns `true` if the dropdown supports multiple selections, `false` otherwise."]
      ]
    },
    {
      type: "heading",
      level: 3,
      text: "Retrieving Selected Options 🧐",
      anchor: "get-selected-options"
    },
    {
      type: "paragraph",
      text: "You can also retrieve which options are currently selected:"
    },
    {
      type: "table",
      headers: ["Method", "Description"],
      rows: [
        ["`getFirstSelectedOption()`", "Returns the first selected `WebElement` (even for multi-selects)."],
        ["`getAllSelectedOptions()`", "Returns a `List<WebElement>` of all selected options (useful for multi-selects)."]
      ]
    },
    {
      type: "code",
      language: "java",
      code: `// Assuming 'selectObject' or 'multiSelectObject' is active

// Get the first selected option's text
WebElement selectedOption = selectObject.getFirstSelectedOption();
System.out.println("First selected option: " + selectedOption.getText());

// Get all selected options (for multi-select)
List<WebElement> allSelected = multiSelectObject.getAllSelectedOptions();
System.out.println("All selected options in multi-select:");
for (WebElement option : allSelected) {
    System.out.println("- " + option.getText());
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Important: The `Select` class only works with actual `<select>` HTML tags. If a dropdown is custom-built using `div`, `ul`, or `li` tags, you'll need to use standard `click()` and other `WebElement` methods to interact with its options."
    },
    {
      type: "heading",
      level: 2,
      text: "Interacting with Radio Buttons 🔘",
      anchor: "radio-buttons"
    },
    {
      type: "paragraph",
      text: "Radio buttons (`<input type=\"radio\">`) are used when you need to select only one option from a mutually exclusive set. Unlike dropdowns, they don't use the `Select` class. You interact with them using standard `WebElement` methods like `click()` and `isSelected()`."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class RadioButtonDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // Assume a page with radio buttons:
        // <input type="radio" id="genderMale" name="gender" value="male">
        // <input type="radio" id="genderFemale" name="gender" value="female">
        driver.get("https://www.example.com/form"); 

        WebElement maleRadio = driver.findElement(By.id("genderMale"));
        WebElement femaleRadio = driver.findElement(By.id("genderFemale"));

        // Check if male is selected, if not, select it
        if (!maleRadio.isSelected()) {
            maleRadio.click();
            System.out.println("Male radio button selected.");
        } else {
            System.out.println("Male radio button was already selected.");
        }

        // Verify that only one can be selected (female should now be deselected)
        System.out.println("Female radio button selected status: " + femaleRadio.isSelected());

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Trick: Radio buttons are just special checkboxes that automatically deselect others in their group! Use `isSelected()` to check their state before clicking. 🧠"
    },{
      type: "heading",
      level: 1,
      text: "Java Practice: Dropdowns & Radio Button Automation 🎯",
      anchor: "dropdown-radio-practice-intro"
    },
    {
      type: "paragraph",
      text: "It's time to put your `Select` class knowledge and radio button interaction skills to the test! These practice tasks will reinforce how to programmatically choose options in various web forms. Remember to adjust locators to match a real (or mock) web page you can test. A demo site like 'https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/' or similar forms will be helpful."
    },
    {
      type: "alert",
      variant: "info",
      content: "Ensure your Selenium project is set up and ChromeDriver is configured correctly. You'll need `org.openqa.selenium.support.ui.Select` imported for dropdowns."
    },
    {
      type: "heading",
      level: 2,
      text: "Task 1: Select Dropdown Values by Index, Value, and Visible Text 📋",
      anchor: "task-1-select-methods"
    },
    {
      type: "paragraph",
      text: "Demonstrate all three primary ways to select an option from a single-select dropdown. You will need to re-initialize the `Select` object or navigate back to the page between each selection to ensure proper isolation for demonstration."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select; // Import Select class
import java.time.Duration;

public class SelectDropdownOptions {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Use a test page with a dropdown, e.g., a country selection
        // HTML example: <select id="countries"> <option value="us">USA</option> <option value="ca">Canada</option> <option value="uk">UK</option> </select>
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); // Replace with your test URL

        // --- Select by Visible Text ---
        WebElement dropdownElement1 = driver.findElement(By.id("yourDropdownId")); // Replace with actual ID
        Select selectByText = new Select(dropdownElement1);
        selectByText.selectByVisibleText("Canada"); // Use an actual visible text
        System.out.println("Selected by Visible Text: " + selectByText.getFirstSelectedOption().getText());
        driver.navigate().refresh(); // Refresh to reset dropdown state

        // --- Select by Value ---
        WebElement dropdownElement2 = driver.findElement(By.id("yourDropdownId")); // Replace with actual ID
        Select selectByValue = new Select(dropdownElement2);
        selectByValue.selectByValue("uk"); // Use an actual option value
        System.out.println("Selected by Value: " + selectByValue.getFirstSelectedOption().getText());
        driver.navigate().refresh(); // Refresh to reset dropdown state

        // --- Select by Index ---
        WebElement dropdownElement3 = driver.findElement(By.id("yourDropdownId")); // Replace with actual ID
        Select selectByIndex = new Select(dropdownElement3);
        selectByIndex.selectByIndex(0); // Selects the first option (index 0)
        System.out.println("Selected by Index: " + selectByIndex.getFirstSelectedOption().getText());

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Tip: For stable tests, always use `selectByVisibleText()` or `selectByValue()` when possible, as the index can change if options are added/removed."
    },
    {
      type: "heading",
      level: 2,
      text: "Task 2: Print All Options in a Dropdown 📜",
      anchor: "task-2-print-options"
    },
    {
      type: "paragraph",
      text: "Write code to retrieve all available options from a dropdown and print their visible text to the console. This is useful for validating dropdown content."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import java.time.Duration;
import java.util.List;

public class PrintDropdownOptions {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); // Replace with your test URL

        WebElement dropdownElement = driver.findElement(By.id("yourDropdownId")); // Replace with actual ID
        Select select = new Select(dropdownElement);

        List<WebElement> allOptions = select.getOptions(); // Get all <option> WebElements

        System.out.println("--- All Options in Dropdown ---");
        for (WebElement option : allOptions) {
            System.out.println("- " + option.getText()); // Print visible text of each option
        }
        System.out.println("-----------------------------");

        driver.quit();
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Task 3: Handle a Multi-Select Dropdown: Select & Deselect 🔢",
      anchor: "task-3-multi-select"
    },
    {
      type: "paragraph",
      text: "Automate a multi-select dropdown. Select at least two options, then deselect one of them. Verify that the remaining options are still selected."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import java.time.Duration;
import java.util.List;

public class MultiSelectDropdown {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Use a test page with a multi-select dropdown, e.g., a list of skills
        // HTML example: <select id="skills" multiple> <option>Java</option> <option>Python</option> <option>SQL</option> </select>
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); // Replace with your test URL

        WebElement multiSelectElement = driver.findElement(By.id("yourMultiSelectId")); // Replace with actual ID
        Select multiSelect = new Select(multiSelectElement);

        if (multiSelect.isMultiple()) {
            System.out.println("Multi-select dropdown detected.");
            multiSelect.selectByVisibleText("Java");
            multiSelect.selectByVisibleText("SQL");
            System.out.println("Selected: Java, SQL");

            List<WebElement> selectedAfterFirst = multiSelect.getAllSelectedOptions();
            System.out.println("Currently selected after initial: " + selectedAfterFirst.size() + " options.");

            multiSelect.deselectByVisibleText("Java"); // Deselect one option
            System.out.println("Deselected: Java");

            List<WebElement> selectedAfterDeselect = multiSelect.getAllSelectedOptions();
            System.out.println("Currently selected after deselect: " + selectedAfterDeselect.size() + " options.");
            for (WebElement option : selectedAfterDeselect) {
                System.out.println("- " + option.getText());
            }
        } else {
            System.out.println("This is not a multi-select dropdown.");
        }

        driver.quit();
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Task 4: Select a Radio Button Based on its Label Text 🔘",
      anchor: "task-4-radio-by-label"
    },
    {
      type: "paragraph",
      text: "Sometimes, radio buttons don't have unique IDs, but their associated labels do, or you want to find them by the text visible to the user. Use XPath or CSS selectors to locate a radio button based on its sibling or parent label, then select it."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class SelectRadioButtonByLabel {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Use a test page with radio buttons and labels
        // HTML example: <label for="optMale">Male</label><input type="radio" id="optMale" name="gender" value="M">
        // <label for="optFemale">Female</label><input type="radio" id="optFemale" name="gender" value="F">
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); // Replace with your test URL

        String labelToSelect = "Male"; // The visible text of the label

        // XPath to find input radio by its associated label text
        // This XPath looks for an input radio whose 'id' attribute matches the 'for' attribute of a label with specific text.
        // Or find the label text, then find its associated input.
        WebElement maleRadio = driver.findElement(By.xpath("//label[text()='" + labelToSelect + "']/following-sibling::input[@type='radio']"));
        // Simpler, if the radio button itself has an id that matches the label's 'for' attribute, you can use that ID directly
        // WebElement maleRadio = driver.findElement(By.id("optMale")); // If ID is available and known

        if (maleRadio.isDisplayed() && maleRadio.isEnabled()) {
            if (!maleRadio.isSelected()) {
                maleRadio.click();
                System.out.println("Radio button for '" + labelToSelect + "' selected.");
            } else {
                System.out.println("Radio button for '" + labelToSelect + "' was already selected.");
            }
        } else {
            System.out.println("Radio button for '" + labelToSelect + "' is not ready for interaction.");
        }

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Finding elements by label text requires careful XPath/CSS Selector construction as the label isn't directly the radio button itself. Inspect the HTML carefully! 🔍"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 5: Check Which Option is Currently Selected in a Dropdown 🧐",
      anchor: "task-5-check-selected"
    },
    {
      type: "paragraph",
      text: "After performing selections, verify which option is currently active in a dropdown. Use `getFirstSelectedOption()` for single-selects or `getAllSelectedOptions()` for multi-selects to retrieve the selected `WebElement` and then its text."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import java.time.Duration;

public class CheckSelectedOption {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); // Replace with your test URL

        WebElement dropdownElement = driver.findElement(By.id("yourDropdownId")); // Replace with actual ID
        Select select = new Select(dropdownElement);

        // First, select an option to ensure something is selected
        select.selectByValue("uk"); // Select a known value

        // Get the currently selected option
        WebElement selectedOption = select.getFirstSelectedOption();
        System.out.println("Currently selected option is: \"" + selectedOption.getText() + "\"");

        // Example for a multi-select dropdown (if applicable)
        // WebElement multiSelectElement = driver.findElement(By.id("yourMultiSelectId"));
        // Select multiSelect = new Select(multiSelectElement);
        // List<WebElement> allCurrentlySelected = multiSelect.getAllSelectedOptions();
        // System.out.println("All currently selected options:");
        // for (WebElement option : allCurrentlySelected) {
        //     System.out.println("- " + option.getText());
        // }

        driver.quit();
    }
}`
    }
,{
      type: "heading",
      level: 1,
      text: "Handling Alerts & Popups: Navigating Sticky Situations 🚨",
      anchor: "alerts-popups-intro"
    },
    {
      type: "paragraph",
      text: "Automating web applications isn't always smooth sailing on a single page. Sometimes, you'll encounter unexpected (or expected!) interruptions like browser-generated popups or authentication dialogs. Selenium provides specific ways to interact with these tricky elements."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: Think of these as sudden roadblocks or tolls on your automation journey. You need specific tools to bypass or interact with them to continue your route. 🚧"
    },
    {
      type: "heading",
      level: 2,
      text: "1. JavaScript Alerts (`window.alert()`, `confirm()`, `prompt()`) 💬",
      anchor: "javascript-alerts"
    },
    {
      type: "paragraph",
      text: "These are small dialog boxes generated by JavaScript within the browser. Selenium uses the `Alert` interface to manage them. You must handle them before interacting with the main page."
    },
    {
      type: "alert",
      variant: "warning",
      content: "These are *browser-native* alerts, not custom modal popups built with HTML/CSS. Custom modals are handled like regular web elements."
    },
    {
      type: "table",
      headers: ["Type", "Description", "Selenium Action"],
      rows: [
        ["`alert()`", "Displays a message with an 'OK' button.", "`alert.accept();`"],
        ["`confirm()`", "Asks for confirmation with 'OK' and 'Cancel' buttons.", "`alert.accept()` (OK) or `alert.dismiss()` (Cancel)"],
        ["`prompt()`", "Asks for user input with 'OK', 'Cancel', and a text field.", "`alert.sendKeys(\"text\"); alert.accept();`"]
      ]
    },
    {
      type: "heading",
      level: 3,
      text: "Selenium `Alert` Interface Methods",
      anchor: "alert-methods"
    },
    {
      type: "paragraph",
      text: "To interact with a JS alert, first switch to it using `driver.switchTo().alert()`."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "`alert.accept()`: Clicks the 'OK' button (or equivalent for confirm/prompt).",
        "`alert.dismiss()`: Clicks the 'Cancel' button (or equivalent if present).",
        "`alert.getText()`: Retrieves the message displayed in the alert.",
        "`alert.sendKeys(\"text\")`: Types text into the input field of a `prompt` alert."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Alert; // Import Alert interface
import java.time.Duration;

public class JsAlerts {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // Navigate to a page that triggers an alert (e.g., a test site)
        // Example: a button that triggers alert('Hello');
        driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert"); 
        
        // Handle Simple Alert
        driver.switchTo().frame("iframeResult"); // Switch to iframe if alert is inside one
        driver.findElement(By.xpath("//button[text()='Try it']")).click(); // Click button to trigger alert
        Alert alert = driver.switchTo().alert(); // Switch focus to the alert
        System.out.println("Alert text: " + alert.getText()); // Get alert text
        alert.accept(); // Click OK on the alert
        driver.switchTo().defaultContent(); // Switch back to main content

        // Handle Confirm Alert (requires a page with confirm dialog)
        // driver.get("your_confirm_test_page_url");
        // driver.findElement(By.id("confirmButton")).click();
        // Alert confirmAlert = driver.switchTo().alert();
        // confirmAlert.dismiss(); // Click Cancel
        // System.out.println("Confirm dialog dismissed.");

        // Handle Prompt Alert (requires a page with prompt dialog)
        // driver.get("your_prompt_test_page_url");
        // driver.findElement(By.id("promptButton")).click();
        // Alert promptAlert = driver.switchTo().alert();
        // promptAlert.sendKeys("Selenium Tester"); // Type into prompt
        // promptAlert.accept(); // Click OK
        // System.out.println("Prompt dialog handled with input.");

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Memory Trick: Think `driver.switchTo().alert()` as 'switching your attention' to the popup. You can't talk to the main page until you switch back! 😵‍💫"
    },
    {
      type: "heading",
      level: 2,
      text: "2. File Upload (`<input type=\"file\">`) 📎",
      anchor: "file-upload"
    },
    {
      type: "paragraph",
      text: "Handling file uploads is surprisingly simple in Selenium for standard HTML file input fields (`<input type=\"file\">`). You just use `sendKeys()` on the file input element with the absolute path to the file you want to upload."
    },
    {
      type: "alert",
      variant: "warning",
      content: "This method works only for direct `<input type=\"file\">` elements. If the file upload is triggered by a custom button or drag-and-drop, it requires advanced techniques (e.g., Robot class, AutoIt, or JavaScript Executor)."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.File; // For file operations
import java.time.Duration;

public class FileUploadDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Navigate to a page with a file upload input (e.g., a test page)
        // HTML: <input type="file" id="uploadFile">
        driver.get("https://the-internet.herokuapp.com/upload"); 

        // Create a dummy file for upload (replace with your actual file path)
        File uploadFile = new File("src/test/resources/sample.txt"); // Example path in project
        String absolutePath = uploadFile.getAbsolutePath();

        // Locate the file input element
        WebElement fileInput = driver.findElement(By.id("file-upload"));
        
        // Use sendKeys() to input the file path
        fileInput.sendKeys(absolutePath);
        System.out.println("File path sent: " + absolutePath);

        // Click the upload button (if applicable)
        driver.findElement(By.id("file-submit")).click();
        System.out.println("Upload button clicked.");

        // Verify upload success (e.g., check text on next page)
        WebElement uploadedFiles = driver.findElement(By.id("uploaded-files"));
        if (uploadedFiles.getText().contains("sample.txt")) {
            System.out.println("✅ File uploaded successfully!");
        } else {
            System.out.println("❌ File upload failed.");
        }

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Trick: `sendKeys()` for file upload directly inputs the file's path into the hidden input field, bypassing the need to interact with the OS file dialog. It's like secretly putting the file into the upload box! 🕵️"
    },
    {
      type: "heading",
      level: 2,
      text: "3. Authentication Dialogs (Browser Popups) 🔒",
      anchor: "authentication-dialogs"
    },
    {
      type: "paragraph",
      text: "These are browser-level popups for basic HTTP authentication (username and password) and are not part of the HTML DOM. Selenium cannot directly interact with elements inside them. The most common way to handle them is by embedding credentials in the URL."
    },
    {
      type: "alert",
      variant: "warning",
      content: "This technique **only** works for HTTP Basic Authentication. It will **not** work for modern authentication methods like OAuth, SAML, or custom login forms within the web page. Those require standard element interactions."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class BasicAuthDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Example URL with HTTP Basic Authentication (replace with your test URL)
        // Format: http://username:password@your-domain.com
        String urlWithAuth = "https://admin:admin@the-internet.herokuapp.com/basic_auth"; 
        
        System.out.println("Attempting to access URL with credentials...");
        driver.get(urlWithAuth); // Browser will automatically send credentials
        
        // Verify if authentication was successful (e.g., by checking page text)
        if (driver.getPageSource().contains("Congratulations! You must have the proper credentials.")) {
            System.out.println("✅ Basic Authentication successful!");
        } else {
            System.out.println("❌ Basic Authentication failed.");
        }

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Funny thought: Using `username:password@URL` is like whispering the secret password directly into the browser's ear before it even sees the bouncer at the door! 🤫"
    }
,{
      type: "heading",
      level: 1,
      text: "Java Practice: Mastering Alerts & Popups in Selenium 🛡️",
      anchor: "alerts-popups-practice-intro"
    },
    {
      type: "paragraph",
      text: "It's time to tackle those pesky popups and alerts! These tasks will give you practical experience in handling different types of browser interruptions using Selenium WebDriver. Remember to use reliable test URLs that trigger these specific dialogs."
    },
    {
      type: "alert",
      variant: "info",
      content: "Always ensure your `chromedriver.exe` path is correct and its version matches your Chrome browser. Test on dedicated demo sites for consistent results. 🧪"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 1: Trigger & Accept a JavaScript Alert ✅",
      anchor: "task-1-accept-alert"
    },
    {
      type: "paragraph",
      text: "Navigate to a page that triggers a simple JavaScript `alert()`. Switch to the alert, print its text, and then accept it."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Alert; // Import Alert
import java.time.Duration;

public class AcceptAlert {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // Test URL to trigger an alert inside an iframe.
        driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert"); 

        driver.switchTo().frame("iframeResult"); // Switch to iframe if needed.
        driver.findElement(By.xpath("//button[text()='Try it']")).click(); // Trigger alert.

        Alert alert = driver.switchTo().alert(); // Switch focus to the alert.
        System.out.println("Alert message: " + alert.getText()); // Get alert text.
        alert.accept(); // Accept (click OK) the alert.
        driver.switchTo().defaultContent(); // Switch back to main page.
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Always `driver.switchTo().alert()` before interacting with browser-native dialogs. Don't forget to `driver.switchTo().defaultContent()` afterward! ↩️"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 2: Handle Confirmation and Prompt Boxes 💬",
      anchor: "task-2-confirm-prompt"
    },
    {
      type: "paragraph",
      text: "Automate interactions with a `confirm()` box (dismiss it) and a `prompt()` box (enter text and accept it)."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Alert;
import java.time.Duration;

public class HandleConfirmPrompt {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // Test URL for confirm/prompt dialogs.
        driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_confirm"); 
        driver.switchTo().frame("iframeResult");

        // Handle Confirmation Box
        driver.findElement(By.xpath("//button[text()='Try it']")).click();
        Alert confirmAlert = driver.switchTo().alert();
        System.out.println("Confirm message: " + confirmAlert.getText());
        confirmAlert.dismiss(); // Dismiss (click Cancel).
        System.out.println("Confirmation dismissed.");

        driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt"); // New URL for prompt
        driver.switchTo().frame("iframeResult");

        // Handle Prompt Box
        driver.findElement(By.xpath("//button[text()='Try it']")).click();
        Alert promptAlert = driver.switchTo().alert();
        System.out.println("Prompt message: " + promptAlert.getText());
        promptAlert.sendKeys("My Name"); // Type text into the prompt.
        promptAlert.accept(); // Accept (click OK).
        System.out.println("Prompt handled with input.");

        driver.switchTo().defaultContent();
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "`dismiss()` is like hitting 'Esc' or clicking 'Cancel'. `sendKeys()` only works on `prompt()` dialogs with an input field. 🛑"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 3: Upload a File Using `sendKeys()` 📂",
      anchor: "task-3-file-upload"
    },
    {
      type: "paragraph",
      text: "Write code to upload a file to an HTML `input type=\"file\"` element using `sendKeys()`. This requires the absolute path to your file."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.File; // For file path operations
import java.time.Duration;

public class FileUpload {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        // Test URL with a file upload input.
        driver.get("https://the-internet.herokuapp.com/upload"); 

        // Create a dummy file for upload (replace with your actual file).
        // Ensure this file exists at the specified path relative to your project.
        File uploadFile = new File("src/test/resources/sample.txt"); 
        String absolutePath = uploadFile.getAbsolutePath();

        // Locate the file input element.
        WebElement fileInput = driver.findElement(By.id("file-upload"));
        fileInput.sendKeys(absolutePath); // Send the file path.
        System.out.println("File path sent: " + absolutePath);

        // Click the upload button to finalize (if present).
        driver.findElement(By.id("file-submit")).click();
        System.out.println("Upload button clicked.");
        
        // Verify upload success message.
        WebElement uploadedFileName = driver.findElement(By.id("uploaded-files"));
        if (uploadedFileName.getText().contains(uploadFile.getName())) {
            System.out.println("✅ File uploaded successfully!");
        } else {
            System.out.println("❌ File upload failed.");
        }
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "`sendKeys()` directly populates the file input. For custom file upload dialogues (not `<input type='file'>`), you might need `Robot` class or other tools. 🤖"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 4: Bypass Browser Popup Login 🔑",
      anchor: "task-4-bypass-auth"
    },
    {
      type: "paragraph",
      text: "Bypass an HTTP Basic Authentication browser popup by embedding credentials directly in the URL."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class BypassAuthPopup {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // URL with embedded credentials: http://username:password@domain.com
        String authUrl = "https://admin:admin@the-internet.herokuapp.com/basic_auth"; 
        
        System.out.println("Navigating to authenticated URL...");
        driver.get(authUrl); // This bypasses the browser's native popup.
        
        // Verify success by checking page content.
        if (driver.getPageSource().contains("Congratulations! You must have the proper credentials.")) {
            System.out.println("✅ Basic Authentication successful!");
        } else {
            System.out.println("❌ Basic Authentication failed.");
        }
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "This method works only for HTTP Basic Authentication. It won't work for web forms or other authentication types. 🚫"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 5: Reusable Method to Wait for Alert and Return Text ⏰",
      anchor: "task-5-wait-alert"
    },
    {
      type: "paragraph",
      text: "Create a reusable Java method that waits for an alert to be present for a specified duration and, if found, returns its text. This makes your alert handling more robust."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Alert;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class AlertUtility {

    /**
     * Waits for an alert to be present and returns its text.
     * @param driver The WebDriver instance.
     * @param timeoutInSeconds Maximum time to wait for the alert.
     * @return The text of the alert, or null if no alert is present after timeout.
     */
    public static String waitForAlertAndGetText(WebDriver driver, int timeoutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
            Alert alert = wait.until(ExpectedConditions.alertIsPresent());
            String alertText = alert.getText();
            System.out.println("Alert appeared with text: " + alertText);
            alert.accept(); // Always good practice to handle after getting text.
            return alertText;
        } catch (org.openqa.selenium.TimeoutException e) {
            System.err.println("No alert appeared within " + timeoutInSeconds + " seconds.");
            return null;
        }
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert"); 
        driver.switchTo().frame("iframeResult");

        // Trigger the alert (e.g., click a button).
        driver.findElement(By.xpath("//button[text()='Try it']")).click();

        // Use the utility method to wait for and get alert text.
        String text = waitForAlertAndGetText(driver, 5); // Wait up to 5 seconds.
        if (text != null) {
            System.out.println("Successfully processed alert with text: " + text);
        } else {
            System.out.println("Failed to process alert.");
        }

        driver.switchTo().defaultContent();
        driver.quit();
    }
}`
    },
     {
      type: "heading",
      level: 1,
      text: "Waits & Synchronization: Taming Dynamic Web Pages ⏰",
      anchor: "waits-synchronization-intro"
    },
    {
      type: "paragraph",
      text: "Modern web applications are highly dynamic. Elements appear, disappear, or become interactive at varying speeds due to AJAX calls, animations, or server responses. Without proper **synchronization** (waits), your Selenium script might try to interact with an element before it's ready, leading to brittle tests and `NoSuchElementException` or `ElementNotInteractableException`."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: Imagine trying to catch a ball. If you just grab, you might miss. You need to *wait* for the ball to be in your hand. Waits tell Selenium, 'Hold on, don't rush!'"
    },
    {
      type: "heading",
      level: 2,
      text: "1. Implicit Wait: The Global Timeout ⏱️",
      anchor: "implicit-wait"
    },
    {
      type: "paragraph",
      text: "An **Implicit Wait** sets a default timeout for all `driver.findElement()` and `driver.findElements()` calls. If an element is not immediately found, WebDriver will poll the DOM for a specified duration before throwing a `NoSuchElementException`."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Global Scope**: Applies to the entire WebDriver session.",
        "**Fixed Duration**: Once set, it applies to every element lookup.",
        "**Less Flexible**: Waits for *any* element to appear, not for specific conditions (like visibility or clickability)."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration; // New in Selenium 4+ for Duration

public class ImplicitWaitDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        // Set implicit wait to 10 seconds
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        System.out.println("Implicit wait set to 10 seconds.");

        driver.get("https://www.google.com");
        
        // This findElement will wait up to 10 seconds if 'q' is not immediately present.
        driver.findElement(By.name("q")).sendKeys("Implicit Wait Example");

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Caution: Overusing Implicit Waits can slow down tests, as WebDriver might wait the full duration even if the element is ready sooner. Use sparingly or combine with Explicit Waits."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Explicit Wait: The Conditional Wait 🕰️",
      anchor: "explicit-wait"
    },
    {
      type: "paragraph",
      text: "An **Explicit Wait** tells WebDriver to wait for a *specific condition* to be met before proceeding. It's more intelligent and flexible than an implicit wait, as it only waits when necessary and for the exact condition you specify."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Specific Condition**: Waits for conditions like element visibility, clickability, text presence, etc.",
        "**Targeted**: Applies to a specific element or situation, not globally.",
        "**`WebDriverWait` Class**: Used to implement explicit waits.",
        "**`ExpectedConditions` Class**: Provides a library of common conditions."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait; // Import WebDriverWait
import org.openqa.selenium.support.ui.ExpectedConditions; // Import ExpectedConditions
import java.time.Duration;

public class ExplicitWaitDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); // A page with dynamic elements

        // Initialize WebDriverWait with driver and timeout
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15)); // Wait up to 15 seconds

        // Example 1: Wait for an element to be visible
        WebElement dynamicElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("yourDynamicElementId")));
        System.out.println("Dynamic element is now visible: " + dynamicElement.getText());

        // Example 2: Wait for a button to be clickable
        WebElement submitButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("submitBtn")));
        submitButton.click();
        System.out.println("Submit button is clickable and clicked.");

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Trick: Explicit Wait is like a highly trained dog sitting and staying until you give a specific command. It won't move until the *exact* condition is met. 🐕"
    },
    {
      type: "heading",
      level: 2,
      text: "3. Fluent Wait: The Customizable Wait ⚙️",
      anchor: "fluent-wait"
    },
    {
      type: "paragraph",
      text: "A **Fluent Wait** is an extension of `WebDriverWait` that provides more control over polling frequency and exceptions to ignore. It's used for highly dynamic elements where you need to repeatedly check for a condition with custom intervals."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Polling Frequency**: Define how often WebDriver checks for the condition.",
        "**Ignored Exceptions**: Specify which exceptions to ignore during polling (e.g., `NoSuchElementException`).",
        "**More Flexible**: Ideal for situations where an element might momentarily disappear or take an unpredictable time to become available."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException; // Important for ignoring
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.FluentWait; // Import FluentWait
import org.openqa.selenium.support.ui.Wait;     // Import Wait interface
import java.time.Duration;
import java.util.function.Function; // For the apply method in FluentWait

public class FluentWaitDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); // Use a page with dynamic content

        // Configure Fluent Wait
        Wait<WebDriver> wait = new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(30)) // Maximum wait time
                .pollingEvery(Duration.ofSeconds(2)) // Check every 2 seconds
                .ignoring(NoSuchElementException.class); // Ignore this exception during polling

        // Example: Wait for an element to be present and return it
        WebElement foo = wait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                // This function is called repeatedly until it returns a non-null value
                // or the timeout is reached.
                return driver.findElement(By.id("yourHighlyDynamicElementId"));
            }
        });
        System.out.println("Element found by Fluent Wait: " + foo.getText());
        
        // Another common usage with ExpectedConditions (simpler syntax)
        WebElement anotherElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("anotherElementId")));
        System.out.println("Another element found by Fluent Wait: " + anotherElement.getText());

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Funny Thought: Fluent Wait is like a super-patient detective: 'I'll check every 2 seconds for that element, and if I don't see it immediately, I won't panic, but I'll keep looking for 30 seconds!' 🕵️"
    },
    {
      type: "heading",
      level: 2,
      text: "Comparison of Wait Types ⚖️",
      anchor: "wait-comparison"
    },
    {
      type: "table",
      headers: ["Feature", "Implicit Wait", "Explicit Wait", "Fluent Wait"],
      rows: [
        ["**Scope**", "Global (all `findElement` calls)", "Specific (single element/condition)", "Specific (single element/condition)"],
        ["**Condition**", "Element presence in DOM", "Specific condition (visibility, clickable, etc.)", "Specific condition with custom polling/ignoring"],
        ["**Polling**", "Fixed interval (internal)", "Fixed interval (internal)", "Custom interval"],
        ["**Exceptions Ignored**", "No", "No (throws `TimeoutException`)", "Customizable"],
        ["**Flexibility**", "Low", "Medium", "High"],
        ["**Recommended Use**", "General baseline (use cautiously)", "Most common for dynamic elements", "Highly dynamic elements, custom polling needs"]
      ]
    },
    {
      type: "alert",
      variant: "warning",
      content: "Avoid mixing Implicit and Explicit Waits as they can cause unpredictable wait times and `TimeoutException` issues. Stick to Explicit Waits for specific scenarios. Never use `Thread.sleep()` in real tests unless absolutely necessary for debugging. 🚫"
    }

    ,{
      type: "heading",
      level: 1,
      text: "Java Practice: Taming Web Pages with Waits ⏳",
      anchor: "waits-practice-intro"
    },
    {
      type: "paragraph",
      text: "You've learned about the different types of waits in Selenium. Now, let's put that knowledge into action! These tasks will help you implement Implicit, Explicit, and Fluent Waits to handle dynamic web elements and make your tests more robust. Remember to use a test environment where elements genuinely load with delays."
    },
    {
      type: "alert",
      variant: "info",
      content: "Ensure your Selenium project is set up and ChromeDriver is correctly configured. Replace 'path/to/chromedriver.exe' with your actual driver path. Use a demo website like `https://the-internet.herokuapp.com/dynamic_loading/` for testing dynamic elements."
    },
    {
      type: "heading",
      level: 2,
      text: "Task 1: Apply Implicit Wait and Locate a Delayed Element ⏱️",
      anchor: "task-1-implicit-wait"
    },
    {
      type: "paragraph",
      text: "Set a global implicit wait and then navigate to a page where an element appears after a short delay. `findElement()` should automatically wait for it."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class ImplicitWaitTask {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();

        // Set implicit wait for 10 seconds.
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        // Navigate to a page where an element appears after a delay.
        // Example: https://the-internet.herokuapp.com/dynamic_loading/1 (Element appears after 5s)
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/1"); 

        driver.findElement(By.cssSelector("#start button")).click(); // Click 'Start' button.

        // Locate the delayed 'Hello World!' text. Implicit wait handles the delay.
        WebElement helloWorld = driver.findElement(By.id("finish"));
        System.out.println("Delayed element text: " + helloWorld.getText());
        
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Implicit wait makes `findElement()` intelligent: it waits for the element's presence in the DOM, up to the specified timeout. No extra code needed per element! 💡"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 2: Use WebDriverWait to Wait for a Button to be Clickable 🖱️",
      anchor: "task-2-explicit-wait"
    },
    {
      type: "paragraph",
      text: "Navigate to a page where a button initially exists but isn't clickable until a condition is met. Use `WebDriverWait` with `ExpectedConditions.elementToBeClickable()` to wait for it."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class ExplicitWaitClickableTask {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(0)); // Disable implicit for explicit focus.

        // Navigate to a page with a clickable button.
        driver.get("https://www.selenium.dev/selenium-ide/docs/en/introduction/tutorial-index/"); 
        
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        
        // Wait for 'DOWNLOAD' link to be clickable.
        WebElement learnMoreButton = wait.until(ExpectedConditions.elementToBeClickable(By.linkText("DOWNLOAD")));
        learnMoreButton.click();
        
        System.out.println("Button clicked after being clickable: " + driver.getCurrentUrl());
        
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Explicit waits target specific conditions, making them more precise. It's often recommended to set implicit wait to 0 when using explicit waits to avoid conflicts. ⚔️"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 3: Implement FluentWait to Wait for Dynamic Text Change 💬",
      anchor: "task-3-fluent-wait"
    },
    {
      type: "paragraph",
      text: "Use `FluentWait` to poll for a specific text change within an element. Define a polling interval and ignore `NoSuchElementException`."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import java.time.Duration;
import java.util.function.Function;

public class FluentWaitTextChangeTask {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(0)); // Disable implicit wait.

        // Navigate to a page with dynamic text (e.g., loading text changing to content).
        // Example: https://the-internet.herokuapp.com/dynamic_loading/2 (renders text after 5s)
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/2"); 

        driver.findElement(By.cssSelector("#start button")).click(); // Trigger dynamic content.

        Wait<WebDriver> wait = new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(15)) // Max wait time.
                .pollingEvery(Duration.ofSeconds(1)) // Check every 1 second.
                .ignoring(NoSuchElementException.class); // Ignore if element temporarily not found.

        // Wait for the 'Hello World!' text to appear and be visible.
        WebElement dynamicText = wait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                WebElement element = driver.findElement(By.id("finish"));
                if (element.isDisplayed() && element.getText().contains("Hello World!")) {
                    return element;
                }
                return null; // Keep waiting if not ready.
            }
        });

        System.out.println("Dynamic text updated to: " + dynamicText.getText());
        
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Fluent wait gives you granular control: set the max wait, how often to check, and which errors to tolerate during checks. It's for truly unpredictable scenarios. ⚙️"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 4: Create a Method that Waits for a Specific Page Title 📄",
      anchor: "task-4-wait-for-title"
    },
    {
      type: "paragraph",
      text: "Build a reusable Java method that uses `WebDriverWait` to wait until the page's title contains or is exactly a specific string. Return `true` if successful, `false` otherwise."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class WaitForTitleMethod {

    /**
     * Waits for the page title to contain a specific text.
     * @param driver The WebDriver instance.
     * @param titlePart The text expected to be in the title.
     * @param timeoutInSeconds Maximum time to wait.
     * @return true if title is found, false otherwise.
     */
    public static boolean waitForPageTitle(WebDriver driver, String titlePart, int timeoutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
            // You can use ExpectedConditions.titleIs() for exact match
            wait.until(ExpectedConditions.titleContains(titlePart));
            System.out.println("Page title contains '" + titlePart + "' after waiting.");
            return true;
        } catch (org.openqa.selenium.TimeoutException e) {
            System.err.println("Page title did not contain '" + titlePart + "' within " + timeoutInSeconds + " seconds.");
            return false;
        }
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(0));

        driver.get("https://www.google.com");
        
        // Wait for Google page title to contain "Google"
        boolean titleFound = waitForPageTitle(driver, "Google", 10);
        System.out.println("Google title status: " + titleFound);

        // Test with a non-existent title part (will time out)
        driver.get("https://www.example.com");
        boolean fakeTitleFound = waitForPageTitle(driver, "NonExistentTitle", 5);
        System.out.println("Non-existent title status: " + fakeTitleFound);

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Reusable methods improve code readability and maintainability! Think of common conditions you wait for, then wrap them in functions. ✨"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 5: Handle Timeout Exceptions Gracefully ⚠️",
      anchor: "task-5-handle-timeout"
    },
    {
      type: "paragraph",
      text: "Implement an Explicit Wait for an element that will **not** appear, and wrap the `wait.until()` call in a `try-catch` block to gracefully handle the `TimeoutException` without crashing the test."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.TimeoutException; // Specific exception to catch
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class HandleTimeoutExceptionTask {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(0)); // Disable implicit wait.

        driver.get("https://www.example.com"); 

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5)); // Short timeout for demonstration.

        try {
            // Attempt to wait for a non-existent element.
            WebElement nonExistentElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("thisElementDoesNotExist")));
            System.out.println("Found a non-existent element (this shouldn't happen!): " + nonExistentElement.getText());
        } catch (TimeoutException e) {
            // This block will execute when the wait times out.
            System.err.println("❌ Test failed gracefully: Element did not appear within the given time!");
            System.err.println("Error message: " + e.getMessage());
            // You can add logging, screenshot capture, or test failure reporting here.
        } catch (Exception e) {
            // Catch any other unexpected exceptions.
            System.err.println("An unexpected error occurred: " + e.getMessage());
        } finally {
            driver.quit();
        }
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Catching `TimeoutException` is vital for preventing test crashes when elements don't appear as expected. It allows you to log the error, take screenshots, or mark the test as a failure without stopping the entire test suite. 🚨"
    },
    {
      type: "heading",
      level: 1,
      text: "Handling Windows & Frames: Navigating the Browser Labyrinth 🌐",
      anchor: "windows-frames-intro"
    },
    {
      type: "paragraph",
      text: "Web applications often involve more than one browser window or tab, or embed content from other sources using frames (especially **iframes**). Selenium WebDriver provides specific mechanisms to switch your focus between these contexts, ensuring you can interact with the correct elements."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: Imagine your browser is a house. Tabs/windows are different rooms, and iframes are pictures on the wall that show *another* tiny room. You need to explicitly go into each room or picture to interact with things inside it!"
    },
    {
      type: "heading",
      level: 2,
      text: "1. Handling Multiple Tabs/Windows 🚪",
      anchor: "multiple-windows-tabs"
    },
    {
      type: "paragraph",
      text: "When an action (like clicking a link) opens a new browser tab or window, WebDriver's focus remains on the original window. To interact with elements in the new window, you must **switch** to it."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "`driver.getWindowHandle()`: Returns the unique ID (handle) of the **current** window.",
        "`driver.getWindowHandles()`: Returns a `Set<String>` containing the unique IDs of **all** open windows/tabs.",
        "`driver.switchTo().window(windowHandle)`: Switches WebDriver's focus to the window identified by the given handle."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;
import java.util.Set; // For Set of window handles
import java.util.Iterator; // For iterating through the set

public class WindowHandlingDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target"); // Page with link opening new tab

        // Get the handle of the parent window
        String parentWindowHandle = driver.getWindowHandle();
        System.out.println("Parent Window Handle: " + parentWindowHandle);

        driver.switchTo().frame("iframeResult"); // Switch to iframe to interact with the button
        // Click a link that opens a new window/tab
        driver.findElement(By.linkText("Visit W3Schools.com!")).click(); 
        driver.switchTo().defaultContent(); // Switch back after interacting in iframe

        // Get all window handles
        Set<String> allWindowHandles = driver.getWindowHandles();
        System.out.println("Total Windows Open: " + allWindowHandles.size());

        // Iterate through handles to find and switch to the new window
        Iterator<String> iterator = allWindowHandles.iterator();
        while (iterator.hasNext()) {
            String childWindow = iterator.next();
            if (!parentWindowHandle.equalsIgnoreCase(childWindow)) {
                driver.switchTo().window(childWindow); // Switch to the child window
                System.out.println("Switched to Child Window. Title: " + driver.getTitle());
                // Perform actions in the child window
                // For example, close the child window
                // driver.close(); // Closes the current window (child)
            }
        }

        // Switch back to the parent window
        driver.switchTo().window(parentWindowHandle);
        System.out.println("Switched back to Parent Window. Title: " + driver.getTitle());

        driver.quit(); // Quits all open windows managed by this driver instance
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Important: `driver.close()` closes only the *current* window/tab. `driver.quit()` closes *all* windows/tabs opened by the WebDriver instance and terminates the session. Always use `quit()` at the end of your test to clean up."
    },
    {
      type: "heading",
      level: 2,
      text: "2. Handling Frames and iFrames 🖼️",
      anchor: "frames-iframes"
    },
    {
      type: "paragraph",
      text: "A **frame** (`<frame>` or `<iframe>`) is essentially an HTML document embedded inside another HTML document. Elements inside a frame cannot be accessed directly from the parent page. You must **switch** WebDriver's focus into the frame before interacting with its elements."
    },
    {
      type: "heading",
      level: 3,
      text: "Switching to a Frame",
      anchor: "switch-to-frame"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "`driver.switchTo().frame(index)`: Switches by 0-based index (e.g., `0` for the first frame). Not recommended as index can change.",
        "`driver.switchTo().frame(nameOrId)`: Switches by the frame's `name` or `id` attribute. Most common and stable method.",
        "`driver.switchTo().frame(webElement)`: Switches by locating the iframe element as a `WebElement` first. Useful for dynamic frames."
      ]
    },
    {
      type: "heading",
      level: 3,
      text: "Switching Out of a Frame",
      anchor: "switch-out-frame"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "`driver.switchTo().parentFrame()`: Switches focus to the immediate parent frame of the current frame.",
        "`driver.switchTo().defaultContent()`: Switches focus back to the top-level document (main page). This is crucial after interacting within a frame."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class FrameHandlingDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Navigate to a page containing iframes
        driver.get("https://the-internet.herokuapp.com/nested_frames"); 

        // --- Scenario 1: Switch by Name/ID ---
        // Assume an iframe with name="frame-top"
        driver.switchTo().frame("frame-top");
        System.out.println("Switched to 'frame-top'");

        // Inside frame-top, there might be nested frames: "frame-left", "frame-middle", "frame-right"
        // Let's switch to frame-left within frame-top
        driver.switchTo().frame("frame-left");
        System.out.println("Switched to 'frame-left'");
        // Get text from an element inside frame-left
        WebElement leftBody = driver.findElement(By.xpath("//body"));
        System.out.println("Text from Left Frame: " + leftBody.getText());

        // Switch back to the parent frame (frame-top)
        driver.switchTo().parentFrame();
        System.out.println("Switched back to parent (frame-top).");

        // Now switch to frame-middle (still within frame-top)
        driver.switchTo().frame("frame-middle");
        WebElement middleBody = driver.findElement(By.id("content")); // Element inside middle frame
        System.out.println("Text from Middle Frame: " + middleBody.getText());

        // --- Scenario 2: Switch to default content ---
        driver.switchTo().defaultContent(); // Go back to the very top-level page
        System.out.println("Switched back to default content (main page).");
        
        // Now you can access elements on the main page, e.g., the page title.
        System.out.println("Main page title: " + driver.getTitle());

        // --- Scenario 3: Switch by WebElement ---
        // Imagine there's another iframe on the main page: <iframe id="myDynamicFrame">
        // driver.switchTo().defaultContent(); // Ensure we are on default content first
        // WebElement dynamicFrame = driver.findElement(By.id("myDynamicFrame"));
        // driver.switchTo().frame(dynamicFrame);
        // System.out.println("Switched to dynamic frame by WebElement.");
        // driver.switchTo().defaultContent();

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Common Pitfall: If you try to find an element inside a frame without switching to it first, you will get a `NoSuchElementException`. Always switch in, then switch out! 🔄"
    },
    {
      type: "alert",
      variant: "info",
      content: "Memory Trick: Think of `switchTo().window()` as changing your *TV channel*. Think of `switchTo().frame()` as changing the *picture on the TV*. You need to change both if the element is in a different picture on a different channel! 📺"
    },{
      type: "heading",
      level: 1,
      text: "Java Practice: Mastering Windows & Frames 🚪🖼️",
      anchor: "windows-frames-practice-intro"
    },
    {
      type: "paragraph",
      text: "Navigating complex web applications often involves dealing with multiple browser windows, tabs, or embedded frames. These tasks will give you practical experience in switching WebDriver's focus to the correct context to interact with elements. Remember to use demo sites that actually open new windows/tabs or contain iframes for realistic practice."
    },
    {
      type: "alert",
      variant: "info",
      content: "Always ensure your `chromedriver.exe` path is correct. Good practice sites for these tasks include `https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target` for new windows and `https://the-internet.herokuapp.com/nested_frames` for frames. 🔗"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 1: Switch to a New Window and Return to Parent 🔄",
      anchor: "task-1-new-window"
    },
    {
      type: "paragraph",
      text: "Click a link that opens a new browser window/tab. Switch WebDriver's focus to this new window, perform an action (e.g., get title), then close it and switch back to the original parent window."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;
import java.util.Set;
import java.util.Iterator;

public class SwitchToNewWindow {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target");

        String parentWindowHandle = driver.getWindowHandle(); // Get parent window handle.
        System.out.println("Parent Window Title: " + driver.getTitle());

        driver.switchTo().frame("iframeResult"); // Switch to iframe to click link.
        driver.findElement(By.linkText("Visit W3Schools.com!")).click();
        driver.switchTo().defaultContent(); // Go back to main page.

        Set<String> allWindowHandles = driver.getWindowHandles(); // Get all handles.
        Iterator<String> iterator = allWindowHandles.iterator();

        while (iterator.hasNext()) {
            String childWindowHandle = iterator.next();
            if (!parentWindowHandle.equalsIgnoreCase(childWindowHandle)) {
                driver.switchTo().window(childWindowHandle); // Switch to child.
                System.out.println("Switched to Child Window. Title: " + driver.getTitle());
                // Close the child window (optional)
                // driver.close(); 
            }
        }
        
        driver.switchTo().window(parentWindowHandle); // Switch back to parent.
        System.out.println("Returned to Parent Window. Title: " + driver.getTitle());
        
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Remember that `driver.close()` closes the current focused window, while `driver.quit()` closes all windows opened by the WebDriver instance. Use `quit()` for cleanup. 🧹"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 2: Handle Multiple Tabs Using Window Handles 📚",
      anchor: "task-2-multiple-tabs"
    },
    {
      type: "paragraph",
      text: "Simulate a scenario where multiple new tabs open. Collect all window handles, then iterate through them to switch to each tab, print its title, and then close it, finally returning to the original tab (if still open)."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;

public class HandleMultipleTabs {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://www.google.com"); // Start on Google

        // Open a few new tabs (you might need to click links that open new tabs)
        // For demonstration, let's open new tabs via JavaScript executor.
        ((org.openqa.selenium.JavascriptExecutor) driver).executeScript("window.open('https://www.bing.com');");
        ((org.openqa.selenium.JavascriptExecutor) driver).executeScript("window.open('https://duckduckgo.com');");
        
        Set<String> allHandles = driver.getWindowHandles(); // Get all window handles.
        List<String> handlesList = new ArrayList<>(allHandles); // Convert to List for indexed access.

        String originalWindow = handlesList.get(0); // Assuming first is original.

        System.out.println("--- Iterating Through Tabs ---");
        for (String handle : handlesList) {
            driver.switchTo().window(handle); // Switch to each tab.
            System.out.println("Tab Title: " + driver.getTitle() + " | Handle: " + handle);
            // Optionally close tabs other than the original.
            if (!handle.equals(originalWindow)) {
                driver.close(); 
            }
        }
        
        driver.switchTo().window(originalWindow); // Return to original tab.
        System.out.println("Returned to original tab: " + driver.getTitle());
        
        driver.quit(); // Close remaining original tab.
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "When using `driver.close()` on a tab, remember to switch to another valid handle afterward, or WebDriver will lose context. `driver.quit()` is always safer at the end of a test. 🚨"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 3: Switch to a Frame by ID and Click a Button Inside It 🎯",
      anchor: "task-3-frame-by-id"
    },
    {
      type: "paragraph",
      text: "Navigate to a page containing an `iframe` with a known ID. Switch into this frame, locate a button inside it, click the button, and then switch back to the main content."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class SwitchToFrameById {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        // Use a page with an iframe, e.g., the nested frames demo.
        driver.get("https://the-internet.herokuapp.com/nested_frames"); 

        System.out.println("Main page title: " + driver.getTitle());

        // Switch to the 'frame-bottom' iframe by its ID.
        driver.switchTo().frame("frame-bottom"); 
        System.out.println("Switched to 'frame-bottom' frame.");

        // Locate and interact with an element inside 'frame-bottom'.
        WebElement bottomFrameBody = driver.findElement(By.xpath("//body"));
        System.out.println("Text inside frame-bottom: " + bottomFrameBody.getText());
        
        // Assume there's a button inside this frame. For demo, let's click the body.
        // WebElement buttonInsideFrame = driver.findElement(By.id("someButtonId")); 
        // buttonInsideFrame.click();
        
        driver.switchTo().defaultContent(); // Switch back to the main page.
        System.out.println("Switched back to default content.");
        
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "You cannot directly interact with elements inside an iframe unless you `switchTo().frame()` first. It's a separate HTML document! 📂"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 4: Loop Through Frames and Find One with a Given Element 🔎",
      anchor: "task-4-loop-frames"
    },
    {
      type: "paragraph",
      text: "Sometimes frames don't have IDs/Names, or they are nested. Write a method to iterate through all `iframe` elements on a page, switch into each one, try to find a specific element, and if found, stop and print the frame's index/name. If not found, switch back and continue."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.NoSuchElementException; // Important for try-catch
import java.time.Duration;
import java.util.List;

public class LoopThroughFrames {

    /**
     * Loops through all iframes on the current page to find a specific element.
     * @param driver The WebDriver instance.
     * @param targetElementLocator The By locator of the element to find inside frames.
     * @return true if the element is found in any frame, false otherwise.
     */
    public static boolean findElementInFrames(WebDriver driver, By targetElementLocator) {
        List<WebElement> iframes = driver.findElements(By.tagName("iframe"));
        System.out.println("Found " + iframes.size() + " iframes on the page.");

        for (int i = 0; i < iframes.size(); i++) {
            driver.switchTo().defaultContent(); // Always start from main content.
            try {
                driver.switchTo().frame(i); // Switch by index.
                System.out.println("Attempting to switch to frame index: " + i);
                WebElement element = driver.findElement(targetElementLocator);
                if (element != null && element.isDisplayed()) {
                    System.out.println("✅ Element found in frame with index: " + i);
                    return true; // Element found, stay in this frame.
                }
            } catch (NoSuchElementException e) {
                System.out.println("Element not found in frame index: " + i);
            } catch (org.openqa.selenium.WebDriverException e) {
                System.out.println("Could not switch to frame index: " + i + ". Error: " + e.getMessage());
            }
        }
        driver.switchTo().defaultContent(); // Go back to main content if element not found.
        return false;
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://the-internet.herokuapp.com/frames"); // Page with multiple frames.

        // Click a link to go to a page with iframes to test on if needed
        driver.findElement(By.linkText("iFrame")).click(); // Navigates to a page with one iframe.
        
        // Try to find the element with ID 'tinymce' (a text editor inside the iframe).
        if (findElementInFrames(driver, By.id("tinymce"))) {
            System.out.println("Successfully located target element in one of the frames!");
            // Now that we are in the correct frame, we can interact:
            // WebElement editor = driver.findElement(By.id("tinymce"));
            // editor.clear();
            // editor.sendKeys("Hello from the iframe!");
        } else {
            System.out.println("Target element was not found in any frame.");
        }
        
        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "When looping through frames, always `switchTo().defaultContent()` at the start of each iteration to ensure you're at the top level before switching to the next frame. This prevents nested frame issues. 🕸️"
    },
    {
      type: "heading",
      level: 2,
      text: "Task 5: Write a Generic Method to Switch Between All Open Windows 🧭",
      anchor: "task-5-generic-window-switcher"
    },
    {
      type: "paragraph",
      text: "Create a reusable method that takes the WebDriver instance and a target page title (or part of it) as input. It should loop through all open window handles, switch to each, check if the title matches, and return the WebDriver with focus on that window. If no match, return focus to the original window."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.Set;

public class GenericWindowSwitcher {

    /**
     * Switches WebDriver focus to a window whose title contains the given text.
     * @param driver The current WebDriver instance.
     * @param targetTitlePart The partial or full title of the window to switch to.
     * @param timeoutInSeconds Max time to wait for the target window/title.
     * @return The WebDriver instance with focus on the target window if found, otherwise null (focus remains on original).
     */
    public static WebDriver switchToWindowByTitle(WebDriver driver, String targetTitlePart, int timeoutInSeconds) {
        String originalWindowHandle = driver.getWindowHandle();
        
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
            wait.until(ExpectedConditions.numberOfWindowsToBe(2)); // Wait for at least 2 windows to be open.

            Set<String> allHandles = driver.getWindowHandles();
            for (String handle : allHandles) {
                if (!handle.equals(originalWindowHandle)) { // Don't switch to original window immediately.
                    driver.switchTo().window(handle);
                    if (driver.getTitle().contains(targetTitlePart)) {
                        System.out.println("Switched to window with title: " + driver.getTitle());
                        return driver; // Found and switched.
                    } else {
                        driver.close(); // Close current tab if not the target.
                    }
                }
            }
            // If loop finishes and title not found, return to original.
            driver.switchTo().window(originalWindowHandle); 
            System.out.println("Target window with title '" + targetTitlePart + "' not found. Returned to original window.");
            return null;

        } catch (org.openqa.selenium.TimeoutException e) {
            System.err.println("Timeout waiting for another window to open or for title: " + e.getMessage());
            driver.switchTo().window(originalWindowHandle); // Ensure focus returns to original.
            return null;
        } catch (Exception e) {
            System.err.println("An error occurred during window switching: " + e.getMessage());
            driver.switchTo().window(originalWindowHandle);
            return null;
        }
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://www.google.com");
        String originalGoogleHandle = driver.getWindowHandle();

        // Simulate opening a new window/tab via JavaScript.
        ((org.openqa.selenium.JavascriptExecutor) driver).executeScript("window.open('https://www.bing.com', '_blank');");
        
        // Try to switch to the Bing window.
        WebDriver bingDriver = switchToWindowByTitle(driver, "Bing", 15);
        if (bingDriver != null) {
            System.out.println("Successfully accessed Bing page.");
            // Perform actions on Bing if needed: bingDriver.findElement(By.name("q")).sendKeys("Selenium");
            bingDriver.close(); // Close Bing tab.
        }
        
        // Ensure we are back on Google's original window.
        driver.switchTo().window(originalGoogleHandle); 
        System.out.println("Current window title: " + driver.getTitle());

        driver.quit();
    }
}`
    },
    {
      type: "heading",
      level: 1,
      text: "Actions Class: Mastering Mouse & Keyboard Events 🖱️⌨️",
      anchor: "actions-class-intro"
    },
    {
      type: "paragraph",
      text: "While `WebElement` offers basic interactions like `click()` and `sendKeys()`, many web applications require more sophisticated user gestures. Selenium's **`Actions` class** provides an API for performing complex **mouse and keyboard interactions**, such as drag-and-drop, hovering, or pressing multiple keys simultaneously."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: If basic `WebElement` methods are like pressing a single key or clicking a simple button, the `Actions` class is like playing a piano concerto – it handles intricate sequences and multi-key presses!"
    },
    {
      type: "heading",
      level: 2,
      text: "The `Actions` Class Fundamentals 🏗️",
      anchor: "actions-fundamentals"
    },
    {
      type: "paragraph",
      text: "The `Actions` class is part of `org.openqa.selenium.interactions`. You create an instance of `Actions` by passing your `WebDriver` object to its constructor. Most `Actions` methods return the `Actions` object itself, allowing you to **chain multiple actions**. Crucially, you must call **`build().perform()`** at the end of a chain to execute the sequence of actions."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.interactions.Actions; // Import Actions class

// ... WebDriver setup ...
Actions actions = new Actions(driver);

// Example chain (more details below)
// actions.moveToElement(element1).click(element2).sendKeys("text").build().perform();`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Remember to always call `build().perform()` at the end of your `Actions` chain. Without it, the actions will be 'built' but not 'performed'!"
    },
    {
      type: "heading",
      level: 2,
      text: "Mouse Events 🐭",
      anchor: "mouse-events"
    },
    {
      type: "paragraph",
      text: "These methods simulate various mouse interactions."
    },
    {
      type: "table",
      headers: ["Method", "Description"],
      rows: [
        ["`moveToElement(WebElement target)`", "Moves the mouse cursor to the center of the target element."],
        ["`clickAndHold(WebElement target)`", "Performs a mouse-down at the current (or specified) location."],
        ["`release(WebElement target)`", "Performs a mouse-up at the current (or specified) location. Used after `clickAndHold()`."],
        ["`dragAndDrop(WebElement source, WebElement target)`", "Combines `clickAndHold(source)`, `moveToElement(target)`, and `release()` for a single drag-and-drop action."],
        ["`contextClick(WebElement target)`", "Performs a right-click (context click) on the target element."],
        ["`doubleClick(WebElement target)`", "Performs a double-click on the target element."]
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import java.time.Duration;

public class MouseEventsDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://jqueryui.com/droppable/"); // Demo site for drag-and-drop

        // Switch to the iframe containing the draggable/droppable elements
        driver.switchTo().frame(driver.findElement(By.className("demo-frame")));

        WebElement draggable = driver.findElement(By.id("draggable"));
        WebElement droppable = driver.findElement(By.id("droppable"));

        Actions actions = new Actions(driver);

        // --- Drag and Drop ---
        actions.dragAndDrop(draggable, droppable).build().perform();
        System.out.println("Performed Drag and Drop.");

        // --- Mouse Hover (moveToElement) ---
        driver.switchTo().defaultContent(); // Go back to main page if needed
        driver.get("https://www.selenium.dev/documentation/webdriver/elements_interact/"); // A page where hover might show a tooltip
        
        WebElement menuElement = driver.findElement(By.linkText("WebDriver"));
        actions.moveToElement(menuElement).build().perform(); // Hover over the element
        System.out.println("Performed Mouse Hover.");
        
        // --- Context Click (Right Click) ---
        actions.contextClick(menuElement).build().perform();
        System.out.println("Performed Right Click.");
        
        // --- Double Click (Requires a double-clickable element) ---
        // For example, on a page like: driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick");
        // WebElement doubleClickMe = driver.findElement(By.xpath("//p[text()='Double-click me to change my text.']"));
        // actions.doubleClick(doubleClickMe).build().perform();
        // System.out.println("Performed Double Click.");

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Memory Trick: `build().perform()` is like hitting 'Assemble' and 'Execute' on your robot's command panel. Without both, nothing happens! 🤖"
    },
    {
      type: "heading",
      level: 2,
      text: "Keyboard Events ⌨️",
      anchor: "keyboard-events"
    },
    {
      type: "paragraph",
      text: "These methods allow simulating complex keyboard interactions, including pressing and holding modifier keys (Ctrl, Shift, Alt)."
    },
    {
      type: "table",
      headers: ["Method", "Description"],
      rows: [
        ["`sendKeys(CharSequence... keys)`", "Sends a series of keystrokes. Can be used on an element or anywhere on the page."],
        ["`keyDown(CharSequence key)`", "Presses a modifier key (e.g., `Keys.CONTROL`, `Keys.SHIFT`) without releasing it."],
        ["`keyUp(CharSequence key)`", "Releases a modifier key that was previously pressed down."],
        ["`sendKeys(WebElement target, CharSequence... keys)`", "Sends keys to a specific element without moving mouse focus first."]
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.Keys; // For keyboard keys
import java.time.Duration;

public class KeyboardEventsDemo {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://www.google.com"); // Using Google for demo

        WebElement searchBox = driver.findElement(By.name("q"));
        Actions actions = new Actions(driver);

        // --- Simulate pressing SHIFT and typing "hello" (HELLO) ---
        actions.keyDown(Keys.SHIFT) // Press Shift down
               .sendKeys(searchBox, "hello") // Type 'hello' into search box (becomes HELLO)
               .keyUp(Keys.SHIFT) // Release Shift
               .sendKeys(searchBox, " world") // Type ' world' (normal case)
               .build()
               .perform();
        System.out.println("Typed 'HELLO world' using Shift key actions.");

        // --- Simulate Ctrl+A (Select All) ---
        // First, click into the search box to focus it
        searchBox.click(); 
        actions.keyDown(Keys.CONTROL) // Press Ctrl down
               .sendKeys("a")         // Send 'a' key
               .keyUp(Keys.CONTROL)   // Release Ctrl
               .build()
               .perform();
        System.out.println("Performed Ctrl+A (Select All).");

        // --- Simulate pressing ENTER directly ---
        actions.sendKeys(Keys.ENTER).build().perform(); // Presses Enter anywhere on the page.
        System.out.println("Pressed Enter key.");

        driver.quit();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Tip: The `Keys` enum (e.g., `Keys.ENTER`, `Keys.SHIFT`, `Keys.CONTROL`, `Keys.ALT`, `Keys.TAB`) is your best friend for keyboard events! 🔑"
    }
, {
      type: "heading",
      level: 1,
      text: "Page Object Model (POM): Architecting Test Automation 🏛️",
      anchor: "pom-intro"
    },
    {
      type: "paragraph",
      text: "As your test suite grows, managing locators and interactions can become messy. The **Page Object Model (POM)** is a design pattern that helps you create a cleaner, more maintainable, and reusable test automation framework. It's about separating your test logic from your page-specific element definitions and actions."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: Think of POM as creating a blueprint for each 'room' (web page) in your 'house' (web application). Each blueprint describes *what's in the room* (elements) and *what you can do in that room* (actions), without cluttering the main house plan (your test script)."
    },
    {
      type: "heading",
      level: 2,
      text: "Why Use Page Object Model? 🤔",
      anchor: "why-pom"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Clean Separation of Concerns**: Test logic is separated from page UI logic.",
        "**Readability**: Tests become more readable as they refer to page elements by logical names (e.g., `loginPage.enterUsername()`) instead of complex locators.",
        "**Maintainability**: If the UI changes (e.g., an element's ID changes), you only need to update the locator in one place (the Page Object class), not in every test script that uses it.",
        "**Reusability**: Page Object methods can be reused across different test cases.",
        "**Reduced Code Duplication**: Avoids repeating locators and common interaction code across multiple tests."
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "Memory Trick: POM = **P**age **O**rganization for **M**aintainability! 🧠"
    },
    {
      type: "heading",
      level: 2,
      text: "Creating Page Classes: The Blueprint 📝",
      anchor: "creating-page-classes"
    },
    {
      type: "paragraph",
      text: "For each significant page or distinct component in your web application, you create a corresponding 'Page Class' (or 'Page Object')."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Elements (WebElements)**: Each Page Class contains `WebElement` variables representing the key UI elements on that page (e.g., username field, password field, login button).",
        "**Methods (Page Actions)**: It encapsulates methods that represent the services/interactions a user can perform on that page (e.g., `login()`, `search()`, `submitForm()`). These methods perform actions on the elements defined in the same class.",
        "**Constructor**: Typically accepts the `WebDriver` instance as an argument.",
        "**Return Type**: Methods often return `void` or another Page Object if the action leads to a new page (e.g., `login()` might return a `DashboardPage` object)."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

// Example: LoginPage.java
public class LoginPage {
    private WebDriver driver;

    // 1. Locators for elements on the page
    private By usernameField = By.id("username");
    private By passwordField = By.name("password");
    private By loginButton = By.xpath("//button[@type='submit']");
    private By errorMessage = By.cssSelector(".error-message");

    // 2. Constructor to initialize WebDriver
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        // Optionally add a wait here to ensure the page is loaded
        // new WebDriverWait(driver, Duration.ofSeconds(10)).until(ExpectedConditions.visibilityOfElementLocated(loginButton));
    }

    // 3. Methods to perform actions on the page
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }

    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }

    public DashboardPage clickLoginButton() { // Returns a new Page Object
        driver.findElement(loginButton).click();
        return new DashboardPage(driver); // Assuming successful login leads to DashboardPage
    }

    public String getErrorMessage() {
        return driver.findElement(errorMessage).getText();
    }
    
    // A consolidated login method
    public DashboardPage login(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        return clickLoginButton();
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "PageFactory: Simplifying Element Initialization 🏭",
      anchor: "pagefactory"
    },
    {
      type: "paragraph",
      text: "Selenium's `PageFactory` is a utility class that helps initialize WebElements defined in Page Objects without repeatedly calling `driver.findElement()`. It uses annotations to define locators, and elements are initialized automatically when a Page Object is created."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "`@FindBy` Annotation: Used to define the locator strategy and value for an element.",
        "`PageFactory.initElements(WebDriver driver, Object pageObject)`: The core method that initializes all annotated WebElements in the given Page Object."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy; // Import FindBy
import org.openqa.selenium.support.PageFactory; // Import PageFactory
import org.openqa.selenium.support.How; // For How.ID, How.NAME, etc.

// Example: LoginPage using PageFactory
public class LoginPageWithFactory {
    private WebDriver driver;

    // Elements initialized using @FindBy annotations
    @FindBy(id = "username")
    WebElement usernameField;

    @FindBy(name = "password")
    WebElement passwordField;

    @FindBy(how = How.XPATH, using = "//button[@type='submit']")
    WebElement loginButton;

    // Constructor initializes elements using PageFactory
    public LoginPageWithFactory(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this); // 'this' refers to the current Page Object instance
    }

    public void enterUsername(String username) {
        usernameField.sendKeys(username);
    }

    public void enterPassword(String password) {
        passwordField.sendKeys(password);
    }

    public DashboardPage clickLoginButton() {
        loginButton.click();
        return new DashboardPage(driver);
    }

    public DashboardPage login(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        return clickLoginButton();
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "PageFactory uses **lazy initialization** for elements by default, meaning elements are only found in the DOM when they are actually used in a method, not when the Page Object is instantiated. This can sometimes lead to `StaleElementReferenceException` if the page reloads, so careful use of waits is still necessary."
    },
    {
      type: "heading",
      level: 2,
      text: "Clean Separation of Logic: Test vs. Page 🏗️➡️🧪",
      anchor: "separation-of-logic"
    },
    {
      type: "paragraph",
      text: "The core principle of POM is to keep your test scripts lean and focused on *what* to test, while Page Objects handle *how* to interact with the page. This separation is key to maintainable automation."
    },
    {
      type: "heading",
      level: 3,
      text: "Test Class (Example: `LoginTest.java`)",
      anchor: "test-class"
    },
    {
      type: "paragraph",
      text: "Your test class should contain the actual test cases (e.g., using JUnit or TestNG). It instantiates Page Objects and calls their methods to perform test steps."
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue; // For assertions

public class LoginTest {
    private WebDriver driver;
    private LoginPageWithFactory loginPage; // Use the Page Object

    @BeforeEach // Runs before each test method
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://your-test-site.com/login"); // Navigate to the login page
        loginPage = new LoginPageWithFactory(driver); // Initialize the Page Object
    }

    @Test // Marks this as a test case
    public void testSuccessfulLogin() {
        DashboardPage dashboardPage = loginPage.login("validUser", "validPassword");
        assertTrue(dashboardPage.isDashboardDisplayed(), "Dashboard should be displayed after login.");
        // Further assertions on the dashboard page...
    }

    @Test
    public void testInvalidLogin() {
        loginPage.login("invalidUser", "wrongPassword");
        String errorMessage = loginPage.getErrorMessage();
        assertTrue(errorMessage.contains("Invalid credentials"), "Error message should be displayed.");
    }

    @AfterEach // Runs after each test method
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Notice how the `LoginTest` simply *calls* methods from `loginPage` and `dashboardPage`. It doesn't contain any `By.id()` or `driver.findElement()` calls directly. This is the beauty of POM! ✨"
    }
,
{
      type: "heading",
      level: 1,
      text: "TestNG Integration: Supercharging Your Selenium Tests 🚀",
      anchor: "testng-intro"
    },
    {
      type: "paragraph",
      text: "While Selenium WebDriver handles browser interactions, **TestNG** (Test Next Generation) is a robust testing framework for Java that provides powerful features to organize, run, and report your tests. Integrating TestNG with Selenium allows you to build a structured, flexible, and scalable test automation suite. It's an upgrade from basic JUnit for many automation needs."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: If Selenium is your car, TestNG is the GPS, the pit crew, and the race organizer all rolled into one. It tells the car where to go, makes sure it's ready, and manages the entire race sequence!"
    },
    {
      type: "heading",
      level: 2,
      text: "Why TestNG for Selenium? 🤔",
      anchor: "why-testng"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Powerful Annotations**: `@Test`, `@BeforeMethod`, `@AfterClass`, etc., for clear test setup and teardown.",
        "**Test Grouping**: Organize tests into logical groups (e.g., 'sanity', 'regression', 'smoke').",
        "**Test Dependencies**: Define the order in which tests should run (e.g., login test must pass before dashboard test).",
        "**Data-Driven Testing**: Easily run the same test with multiple sets of data using `@DataProvider`.",
        "**Parallel Execution**: Run tests concurrently across different browsers or machines for faster feedback.",
        "**Reporting**: Generates comprehensive HTML reports showing test results, pass/fail status, and execution times.",
        "**Test Prioritization**: Assign priorities to test methods to control execution order within a group."
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "Memory Trick: TestNG = **T**ests **N**ext **G**eneration, emphasizing its advanced features over older frameworks. Think of it as the 'next big thing' in testing! 🧠"
    },
    {
      type: "heading",
      level: 2,
      text: "TestNG Annotations: Organizing Your Code 📌",
      anchor: "testng-annotations"
    },
    {
      type: "paragraph",
      text: "Annotations are special tags that provide metadata about your test methods, classes, and suites, guiding TestNG on how to execute them."
    },
    {
      type: "table",
      headers: ["Annotation", "Description", "Execution Level"],
      rows: [
        ["`@BeforeSuite`", "Runs once before all tests in a suite.", "Suite"],
        ["`@AfterSuite`", "Runs once after all tests in a suite.", "Suite"],
        ["`@BeforeTest`", "Runs before any test method belonging to the classes inside the `<test>` tag in `testng.xml`.", "Test (XML level)"],
        ["`@AfterTest`", "Runs after all test methods belonging to the classes inside the `<test>` tag in `testng.xml`.", "Test (XML level)"],
        ["`@BeforeClass`", "Runs once before the first test method in the current class is invoked.", "Class"],
        ["`@AfterClass`", "Runs once after all test methods in the current class have run.", "Class"],
        ["`@BeforeMethod`", "Runs before each `@Test` method.", "Method"],
        ["`@AfterMethod`", "Runs after each `@Test` method.", "Method"],
        ["`@Test`", "Marks a method as a test method.", "Method"]
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.testng.annotations.*; // Import all TestNG annotations
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.time.Duration;

public class BasicTestNGExample {
    WebDriver driver;

    @BeforeSuite
    public void setupSuite() {
        System.out.println("--- BeforeSuite: Setting up test environment (e.g., global configs) ---");
        // E.g., Initialize reporting tools, set up database connections.
    }

    @BeforeClass
    public void setupClass() {
        System.out.println("--- BeforeClass: Setting up browser for this class ---");
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
    }

    @BeforeMethod
    public void setupMethod() {
        System.out.println("--- BeforeMethod: Navigating to base URL for each test ---");
        driver.get("https://www.google.com");
    }

    @Test(priority = 1) // First test to run
    public void testGoogleSearch() {
        System.out.println("Executing testGoogleSearch.");
        driver.findElement(By.name("q")).sendKeys("Selenium TestNG");
        driver.findElement(By.name("btnK")).submit(); // Submit search
        System.out.println("Search completed. Title: " + driver.getTitle());
    }

    @Test(priority = 2) // Second test to run
    public void testGoogleTitle() {
        System.out.println("Executing testGoogleTitle.");
        String pageTitle = driver.getTitle();
        assert pageTitle.contains("Google"); // Simple assertion
        System.out.println("Title assertion passed.");
    }

    @AfterMethod
    public void teardownMethod() {
        System.out.println("--- AfterMethod: Cleaning up after each test (e.g., clear cookies) ---");
        driver.manage().deleteAllCookies();
    }

    @AfterClass
    public void teardownClass() {
        System.out.println("--- AfterClass: Closing browser for this class ---");
        if (driver != null) {
            driver.quit();
        }
    }

    @AfterSuite
    public void teardownSuite() {
        System.out.println("--- AfterSuite: Cleaning up test environment (e.g., close DB connections) ---");
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Grouping Tests: Running Specific Sets 📦",
      anchor: "grouping"
    },
    {
      type: "paragraph",
      text: "You can assign tests to one or more groups using the `groups` attribute in the `@Test` annotation. This allows you to run specific subsets of your tests (e.g., only 'smoke' tests or 'regression' tests) from your `testng.xml` file."
    },
    {
      type: "code",
      language: "java",
      code: `import org.testng.annotations.Test;

public class TestGrouping {

    @Test(groups = {"smoke", "login"})
    public void verifyLoginFunctionality() {
        System.out.println("Running Login Smoke Test");
        // ... login automation steps ...
    }

    @Test(groups = {"regression", "dashboard"})
    public void verifyDashboardWidgets() {
        System.out.println("Running Dashboard Regression Test");
        // ... dashboard verification steps ...
    }

    @Test(groups = {"smoke", "logout"})
    public void verifyLogoutFunctionality() {
        System.out.println("Running Logout Smoke Test");
        // ... logout automation steps ...
    }
}`
    },
    {
      type: "paragraph",
      text: "To run tests by group, define them in `testng.xml`:"
    },
    {
      type: "code",
      language: "xml",
      code: `<!-- testng.xml to run 'smoke' group -->
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd" >
<suite name="MyTestSuite">
  <test name="SmokeTests">
    <groups>
      <run>
        <include name="smoke"/>
      </run>
    </groups>
    <classes>
      <class name="TestGrouping"/> <!-- Specify the class containing tests -->
    </classes>
  </test>
</suite>`
    },
    {
      type: "heading",
      level: 2,
      text: "Test Dependencies: Controlling Execution Order 🔗",
      anchor: "dependencies"
    },
    {
      type: "paragraph",
      text: "Use the `dependsOnMethods` or `dependsOnGroups` attributes to define the order of test execution. A test method marked as dependent will only run if its dependencies pass. This is useful for scenarios where one test's success is a prerequisite for another (e.g., successful login before performing actions as a logged-in user)."
    },
    {
      type: "code",
      language: "java",
      code: `import org.testng.annotations.Test;

public class TestDependencies {

    @Test(priority = 1) // Ensure login runs first
    public void loginTest() {
        System.out.println("Performing login...");
        // Assume this test passes for demonstration.
        // If it fails, DashboardTest will be skipped.
        // throw new RuntimeException("Login failed!"); // Uncomment to see dependency failure
    }

    @Test(dependsOnMethods = {"loginTest"})
    public void dashboardTest() {
        System.out.println("Verifying dashboard after successful login.");
    }

    @Test(dependsOnMethods = {"dashboardTest"})
    public void profileUpdateTest() {
        System.out.println("Updating profile after dashboard verification.");
    }
}`
    },
    {
      type: "alert",
      variant: "warning",
      content: "Caution: Overusing `dependsOnMethods` can make your test suite rigid. It's best used for critical, sequential flows where a failure in an early step truly prevents later steps from being meaningful. For independent tests, avoid dependencies."
    },
    {
      type: "heading",
      level: 2,
      text: "Data Provider: Data-Driven Testing Made Easy 📊",
      anchor: "data-provider"
    },
    {
      type: "paragraph",
      text: "The `@DataProvider` annotation allows you to pass multiple sets of test data to a single `@Test` method. This enables **data-driven testing**, where the same test logic is executed with different inputs, eliminating code duplication."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "A method annotated with `@DataProvider` returns a 2D array of objects (`Object[][]`).",
        "Each inner array represents a set of arguments for one test run.",
        "The `@Test` method specifies the `dataProvider` attribute with the name of the data provider method.",
        "The `@Test` method's parameters must match the types and order of the data returned by the data provider."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class DataDrivenTest {

    @DataProvider(name = "loginData")
    public Object[][] provideLoginData() {
        return new Object[][] {
            {"user1", "pass1", "Success"},
            {"user2", "wrongpass", "Failure"},
            {"", "pass3", "Failure - Username Empty"}
        };
    }

    @Test(dataProvider = "loginData")
    public void testLoginWithDifferentCredentials(String username, String password, String expectedResult) {
        System.out.println("Testing login for User: " + username + ", Pass: " + password + ", Expected: " + expectedResult);
        // ... Selenium steps to enter username, password, click login ...
        // Example: loginPage.login(username, password);

        // Based on expectedResult, you would add assertions here
        if (expectedResult.equals("Success")) {
            // assert true : "Login should be successful";
            System.out.println("Login successful for " + username);
        } else {
            // assert true : "Login should fail with message...";
            System.out.println("Login failed as expected for " + username);
        }
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Funny thought: `@DataProvider` is like cloning your test method and giving each clone a different set of toys to play with. Each clone runs independently with its own data! 🧪"
    },
    {
      type: "heading",
      level: 1,
      text: "Selenium Grid & Parallel Testing: Scaling Your Automation 🚀",
      anchor: "grid-intro"
    },
    {
      type: "paragraph",
      text: "As your test suite grows, running tests sequentially on a single machine becomes a bottleneck. **Selenium Grid** is a powerful tool that allows you to scale your Selenium tests by distributing them across multiple machines and browsers. This enables **parallel testing**, dramatically reducing the overall test execution time and providing faster feedback."
    },
    {
      type: "alert",
      variant: "info",
      content: "Analogy: Imagine you have 100 letters to deliver. Doing it yourself, one by one, takes ages. Selenium Grid is like hiring a whole fleet of delivery drivers (nodes) who can deliver many letters simultaneously, managed by a central post office (hub)! 🚚"
    },
    {
      type: "heading",
      level: 2,
      text: "Remote Execution: How It Works 🌐",
      anchor: "remote-execution"
    },
    {
      type: "paragraph",
      text: "Instead of running a WebDriver directly on your local machine, Selenium Grid allows tests to be executed on a **remote machine**. This is achieved using `RemoteWebDriver`, which connects to a Selenium Grid hub."
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**`RemoteWebDriver`**: This class is a replacement for `ChromeDriver`, `FirefoxDriver`, etc., when working with Grid. It takes the URL of the Grid Hub and desired browser capabilities as arguments.",
        "**Desired Capabilities / Options**: You specify which browser, version, and operating system you want your test to run on. The Hub then matches this request to an available Node."
      ]
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities; // Deprecated, but good for understanding
import org.openqa.selenium.chrome.ChromeOptions; // Modern way for browser-specific options
import org.openqa.selenium.remote.RemoteWebDriver; // For remote execution
import java.net.URL; // For Hub URL
import java.time.Duration;

public class RemoteExecutionExample {
    public static void main(String[] args) {
        WebDriver driver = null;
        try {
            // Define capabilities for Chrome browser
            ChromeOptions chromeOptions = new ChromeOptions();
            // chromeOptions.addArguments("--headless"); // Optional: run in headless mode on node

            // URL of the Selenium Grid Hub (default is http://localhost:4444)
            String hubUrl = "http://localhost:4444/wd/hub"; 

            // Initialize RemoteWebDriver
            driver = new RemoteWebDriver(new URL(hubUrl), chromeOptions);
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

            driver.get("https://www.google.com");
            System.out.println("Remote Google Title: " + driver.getTitle());

        } catch (Exception e) {
            System.err.println("Error during remote execution: " + e.getMessage());
            e.printStackTrace();
        } finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }
}`
    },
    {
      type: "alert",
      variant: "info",
      content: "Memory Trick: Think of `RemoteWebDriver` as sending a 'remote control signal' to the Grid Hub, which then forwards it to the right browser on a Node. 📡"
    },
    {
      type: "heading",
      level: 2,
      text: "Selenium Grid Architecture: Hub and Nodes 🏗️",
      anchor: "grid-architecture"
    },
    {
      type: "paragraph",
      text: "Selenium Grid operates on a client-server architecture with two main components:"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Hub**: The central point. It receives test requests from `RemoteWebDriver` clients and distributes them to appropriate Nodes.",
        "**Node**: A machine (physical or virtual) that registers with the Hub and runs browser instances. A Node executes the actual test commands received from the Hub."
      ]
    },
    {
      type: "heading",
      level: 2,
      text: "Grid Configuration: Setting Up Your Automation Farm 🚜",
      anchor: "grid-configuration"
    },
    {
      type: "paragraph",
      text: "Setting up a Selenium Grid involves downloading the Selenium Server JAR and starting it in two modes: Hub and Node."
    },
    {
      type: "heading",
      level: 3,
      text: "1. Download Selenium Server JAR",
      anchor: "download-jar"
    },
    {
      type: "paragraph",
      text: "Download the latest Selenium Server JAR file (it contains both Hub and Node capabilities)."
    },
    {
      type: "externalLink",
      text: "Download Selenium Server JAR",
      url: "https://www.selenium.dev/downloads/"
    },
    {
      type: "heading",
      level: 3,
      text: "2. Start the Hub",
      anchor: "start-hub"
    },
    {
      type: "paragraph",
      text: "Open a command prompt/terminal and navigate to the directory where you downloaded the JAR. Run the following command:"
    },
    {
      type: "code",
      language: "bash",
      code: `java -jar selenium-server-4.x.x.jar hub`
    },
    {
      type: "alert",
      variant: "info",
      content: "The Hub will typically start on `http://localhost:4444`. You can visit `http://localhost:4444/grid/console` (for Selenium 3) or `http://localhost:4444` (for Selenium 4) in your browser to see the Grid console."
    },
    {
      type: "heading",
      level: 3,
      text: "3. Register Nodes",
      anchor: "register-nodes"
    },
    {
      type: "paragraph",
      text: "On each machine (including your Hub machine, if desired) where you want to run browsers, open a separate command prompt/terminal and register it as a Node. Make sure the browser drivers (e.g., `chromedriver.exe`) are accessible from where you run this command."
    },
    {
      type: "code",
      language: "bash",
      code: `java -jar selenium-server-4.x.x.jar node --detect-drivers --publish-events tcp://localhost:4442 --subscribe-events tcp://localhost:4443 --map-config /opt/selenium/config.toml`
    },
    {
      type: "alert",
      variant: "info",
      content: "For Selenium 3, the node command was simpler: `java -jar selenium-server-standalone-3.x.x.jar -role node -hub http://localhost:4444/grid/register -port 5555`. Selenium 4 uses a more declarative approach with `--detect-drivers` or configuration files."
    },
    {
      type: "heading",
      level: 3,
      text: "4. Example `testng.xml` for Parallel Execution",
      anchor: "testng-parallel"
    },
    {
      type: "paragraph",
      text: "With TestNG, you can configure your tests to run in parallel. This configuration is done in your `testng.xml` suite file."
    },
    {
      type: "code",
      language: "xml",
      code: `<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd" >
<suite name="CrossBrowserSuite" parallel="tests" thread-count="2">
    <test name="ChromeTest">
        <parameter name="browser" value="chrome"/>
        <classes>
            <class name="com.example.tests.MyLoginTest"/>
        </classes>
    </test>
    
    <test name="FirefoxTest">
        <parameter name="browser" value="firefox"/>
        <classes>
            <class name="com.example.tests.MyLoginTest"/>
        </classes>
    </test>
</suite>`
    },
    {
      type: "paragraph",
      text: "Your TestNG test class would then accept the browser parameter and initialize `RemoteWebDriver` accordingly:"
    },
    {
      type: "code",
      language: "java",
      code: `import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
import java.net.URL;
import java.time.Duration;

public class MyLoginTest {
    WebDriver driver;
    String hubUrl = "http://localhost:4444/wd/hub";

    @BeforeMethod
    @Parameters("browser") // Get browser name from testng.xml
    public void setup(String browserName) throws Exception {
        if (browserName.equalsIgnoreCase("chrome")) {
            driver = new RemoteWebDriver(new URL(hubUrl), new ChromeOptions());
        } else if (browserName.equalsIgnoreCase("firefox")) {
            driver = new RemoteWebDriver(new URL(hubUrl), new FirefoxOptions());
        } else {
            throw new IllegalArgumentException("Browser " + browserName + " not supported.");
        }
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("https://www.example.com/login");
    }

    @Test
    public void testSuccessfulLogin() {
        // Your login test steps here
        System.out.println("Running login test on " + driver.getTitle() + " in " + ((RemoteWebDriver) driver).getCapabilities().getBrowserName());
        // driver.findElement(By.id("username")).sendKeys("test");
        // driver.findElement(By.id("password")).sendKeys("test");
        // driver.findElement(By.id("loginButton")).click();
        // Assertions...
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}`
    },
    {
      type: "heading",
      level: 2,
      text: "Benefits of Parallel Testing with Grid ✅",
      anchor: "benefits"
    },
    {
      type: "list",
      style: "unordered",
      items: [
        "**Faster Execution**: Run tests concurrently, drastically reducing the total execution time for large suites.",
        "**Cross-Browser Testing**: Easily test your application across different browsers and their versions simultaneously.",
        "**Distributed Testing**: Utilize resources on multiple machines, even across different operating systems.",
        "**Cost-Effective**: Can be set up using existing hardware or cloud services without needing multiple physical machines for each test run.",
        "**Centralized Control**: Manage all test execution from a single Hub."
      ]
    },
    {
      type: "alert",
      variant: "info",
      content: "Funny thought: Selenium Grid is like a highly organized, multi-browser symphony orchestra. The Hub is the conductor, and each Node is an instrument, playing its part in perfect harmony (hopefully!) to complete the test suite. 🎶"
    }
  ],
  summary: {
    keyPoints: [
      "Selenium automates web browsers for testing.",
      "It was created to solve the problems of manual testing: slowness, errors, and cost.",
      "Key requirements are a browser, a driver, and a programming language.",
      "Benefits include time-saving, cross-browser support, and scalability."
    ],
    cheatSheet: {
      tool: "Selenium",
      purpose: "Web Automation",
      coreComponent: "WebDriver",
      mustHave: "Browser + Driver"
    }
  },
  nextSteps: [
    {
      topicId: "selenium-webdriver-setup",
      reason: "Learn how to set up your first Selenium WebDriver project."
    },
    {
      topicId: "selenium-locators",
      reason: "Understand how to find and interact with elements on a web page."
    }
  ]
};