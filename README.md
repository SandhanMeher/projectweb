# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

🔗 **Live Demo**: [https://notes-two-tau.vercel.app/](https://notes-two-tau.vercel.app/)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

This note describes the **JavaScript file structure** used for defining learning topics in your application. This modular and declarative approach allows your React application to dynamically render diverse content without hardcoding HTML for each lesson.

---

## **The Topic File Structure**

Each JavaScript file representing a learning topic (like `java-strings.js` or `selenium-basics.js`) exports a default object. This object adheres to a consistent structure, enabling the main application to parse and display the content uniformly.

The top-level object contains four main properties:

### `meta`

This object holds **metadata** about the topic. It's crucial for displaying topic cards, filtering, searching, and providing context to the user.

* **`id`**: (String, *optional but recommended*) A unique identifier for the topic. Useful for internal linking and navigation.
* **`title`**: (String) The main title of the topic, displayed prominently.
* **`description`**: (String) A brief summary or overview of the topic, often shown on topic cards.
* **`category`**: (String) Broad categorization (e.g., "programming", "testing").
* **`subcategory`**: (String) More specific categorization within a category (e.g., "java", "automation").
* **`difficulty`**: (String) Indicates the complexity level ("beginner", "intermediate", "advanced").
* **`prerequisites`**: (Array of Strings, *optional*) A list of `id`s for topics that should be understood before this one.
* **`created`**: (String) The creation date (e.g., "YYYY-MM-DD").
* **`updated`**: (String) The last update date (e.g., "YYYY-MM-DD").
* **`duration`**: (Number) Estimated reading/learning time in minutes.
* **`keywords`**: (Array of Strings) Tags or keywords relevant to the topic, useful for search.

---

### `content`

This is an **array of objects**, where each object represents a distinct block of content within the lesson. The application iterates through this array and renders each block based on its `type`. This allows for a flexible and rich content layout.

Each object within the `content` array must have a `type` property, which dictates its structure and how it should be rendered. Here are the supported content block types:

#### 1. `type: "heading"`

Represents a section heading within the topic.

* **`level`**: (Number) The heading level (e.g., `1` for `<h1>`, `2` for `<h2>`).
* **`text`**: (String) The text content of the heading.
* **`anchor`**: (String, *optional*) A unique identifier for the heading, used for deep linking within the topic.

#### 2. `type: "paragraph"`

Represents a standard text paragraph.

* **`text`**: (String) The full text content of the paragraph.

#### 3. `type: "code"`

Represents a code snippet, typically with syntax highlighting.

* **`language`**: (String) The programming language of the code (e.g., "java", "javascript", "python").
* **`code`**: (String) The actual code string.
* **`explanation`**: (String, *optional*) A brief explanation or comment about the code snippet.

#### 4. `type: "list"`

Represents an unordered or ordered list.

* **`style`**: (String) "unordered" for `<ul>` (bullet points) or "ordered" for `<ol>` (numbered list).
* **`items`**: (Array of Strings) An array of list items.

#### 5. `type: "table"`

Represents tabular data.

* **`headers`**: (Array of Strings) An array of strings for the table column headers.
* **`rows`**: (Array of Arrays of Strings) An array where each inner array represents a row of data, with strings for each cell.

#### 6. `type: "alert"`

Represents a special message box for tips, warnings, or important information.

* **`variant`**: (String) The type of alert, influencing its styling ("info", "warning", "danger").
* **`content`**: (String) The message to be displayed within the alert box.

---

### `summary`

This object provides a concise **summary** of the topic, useful for quick review.

* **`keyPoints`**: (Array of Strings) A list of the most important takeaways from the topic.
* **`cheatSheet`**: (Object) A collection of key syntax or common patterns, with properties representing different aspects (e.g., `creation`, `comparison`).

---

### `nextSteps`

This array suggests **related topics** for the user to continue their learning journey.

* Each object in the array has:
    * **`topicId`**: (String) The `id` of the suggested next topic.
    * **`reason`**: (String) A brief explanation of why this topic is a relevant next step.

---

## **How This Structure Enables Dynamic Notes**

This structured JavaScript object acts as a **content API** for your front-end application. Instead of writing separate HTML files for each topic, your React (or similar) component can:

1.  **Import** the relevant topic object.
2.  **Read** the `meta` data to display general information.
3.  **Iterate** through the `content` array.
4.  Use a `switch` statement (or similar conditional logic) based on the `type` property of each content block to render the appropriate React component (e.g., `Heading`, `Paragraph`, `CodeBlock`, `TableBlock`, `ListBlock`, `Alert`).
5.  **Display** the `summary` and `nextSteps` as dedicated sections.

This design ensures **consistency** in presentation, simplifies **content management**, and allows for easy **expansion** of new topics and content types without altering the core rendering logic.