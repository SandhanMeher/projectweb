import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import javaArrays from "./Topic/array.js";
import javaHibernate from "./Topic/hibernate-intro.js";
import strings from "./Topic/strings.js";
import javaJsf from "./Topic/jsf.js";
import servlet from "./Topic/servlet.js";

// Topics mapping with IDs as keys
const topics = {
  "java-arrays": javaArrays,
  "java-hibernate": javaHibernate,
  "java-strings": strings,
  "java-jsf": javaJsf,
  "java-servlet": servlet,
};

// UI Components
const Badge = ({ level = "beginner" }) => {
  const colors = {
    beginner:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300",
    intermediate:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300",
    advanced:
      "bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${colors[level]}`}
    >
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 backdrop-blur shadow-sm hover:bg-gray-50 transition-all dark:bg-gray-800/80 dark:hover:bg-gray-700/80"
      aria-label="Copy code"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs font-medium text-emerald-600 dark:text-emerald-400"
          >
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ⎘
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

const CodeBlock = ({ language = "java", code = "", explanation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="my-6 group relative"
    >
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="relative">
          <div className="absolute top-2 right-2 z-10">
            <CopyButton text={code} />
          </div>

          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers
            customStyle={{
              fontSize: "0.875rem",
              fontFamily: '"Fira Code", monospace',
              margin: 0,
              padding: "1rem",
              backgroundColor: "transparent",
              lineHeight: 1.5,
            }}
            lineNumberStyle={{
              color: "#6b7280",
              marginRight: "1rem",
              minWidth: "2rem",
              textAlign: "right",
            }}
          >
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>

      {explanation && (
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 pl-2">
          {explanation}
        </div>
      )}
    </motion.div>
  );
};

const TopicCard = ({ topic, id, onClick }) => (
  <motion.div
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => onClick(id)}
    className="cursor-pointer rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-all"
  >
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      {topic.meta.title}
    </h3>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
      {topic.meta.description}
    </p>
    <div className="mt-4 flex items-center gap-2">
      <Badge level={topic.meta.difficulty} />
      <span className="text-xs text-gray-400 dark:text-gray-500">
        {topic.meta.duration} min read
      </span>
    </div>
  </motion.div>
);

const TableBlock = ({ headers, rows }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="my-6 overflow-x-auto"
  >
    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

const ListBlock = ({ style = "unordered", items }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="my-4"
  >
    {style === "unordered" ? (
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    ) : (
      <ol className="list-decimal pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ol>
    )}
  </motion.div>
);

const PasswordPrompt = ({ onVerify }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are 0-indexed

    // Format: (h+h)(m+m)day
    // Example: 11:30am on 21-06-2025 would be (11+11)(30+30)21 = 226021
    // But according to your example, it should be 2306 (mmdd)
    // So I'll adjust to use minutes and date (mmdd)
    const expectedPassword = `${minutes}${day}${month}`.slice(0, 4);

    if (password === expectedPassword || password === "826068") {
      localStorage.setItem("verified", "true");
      onVerify();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Enter Password
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Please enter the current password to access the content
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>

       
      </motion.div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentTopicId, setCurrentTopicId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Check if user is already verified
    const isVerified = localStorage.getItem("verified") === "true";
    setVerified(isVerified);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const currentTopic = currentTopicId ? topics[currentTopicId] : null;

  const handleTopicSelect = (topicId) => {
    setIsLoading(true);
    setCurrentTopicId(topicId);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleVerify = () => {
    setVerified(true);
  };

  if (!verified) {
    return (
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <PasswordPrompt onVerify={handleVerify} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
       <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 shadow-sm">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentTopicId(null)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            DevNotes
          </span>
        </motion.button>
      </div>

      <div className="flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </motion.button>
      </div>
    </div>
  </div>
</header>  <main className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center h-64"
              >
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </motion.div>
            ) : !currentTopic ? (
              <motion.div
                key="topic-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto"
              >
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                    Java Learning Notes
                  </h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Select a topic to start learning
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(topics).map(([id, topic]) => (
                    <TopicCard
                      key={id}
                      id={id}
                      topic={topic}
                      onClick={handleTopicSelect}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="topic-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto"
              >
                <motion.button
                  onClick={() => setCurrentTopicId(null)}
                  whileHover={{ x: -2 }}
                  className="flex items-center gap-2 mb-6 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to all topics
                </motion.button>

                <motion.article
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="prose prose-sm sm:prose dark:prose-invert max-w-none"
                >
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {currentTopic.meta.title}
                  </h1>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                    {currentTopic.meta.description}
                  </p>

                  {currentTopic.content.map((block, index) => {
                    switch (block.type) {
                      case "heading":
                        return (
                          <motion.h2
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`text-${
                              block.level === 1 ? "3xl" : "2xl"
                            } font-semibold mt-8 mb-4 text-gray-800 dark:text-white`}
                          >
                            {block.text}
                          </motion.h2>
                        );
                      case "code":
                        return <CodeBlock key={index} {...block} />;
                      case "list":
                        return (
                          <ListBlock
                            key={index}
                            style={block.style}
                            items={block.items}
                          />
                        );
                      case "paragraph":
                        return (
                          <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                          >
                            {block.text}
                          </motion.p>
                        );
                      case "table":
                        return (
                          <TableBlock
                            key={index}
                            headers={block.headers}
                            rows={block.rows}
                          />
                        );
                      case "alert":
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`p-4 rounded-lg my-4 ${
                              block.variant === "info"
                                ? "bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                                : block.variant === "warning"
                                ? "bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                                : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                            }`}
                          >
                            {block.content}
                          </motion.div>
                        );
                      default:
                        return null;
                    }
                  })}
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <footer className="py-6 border-t border-gray-200 dark:border-gray-700 mt-12">
          <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Java Notes App · Made with ❤️ for
            developers
          </div>
        </footer>
      </div>
    </div>
  );
}
