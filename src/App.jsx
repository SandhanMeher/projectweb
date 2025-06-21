import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import javaArrays from "./Topic/array.js";
import javaHibernate from "./Topic/hibernate-intro.js";
import strings from "./Topic/strings.js";
import javaJsf from "./Topic/jsf.js";
import servlet from "./Topic/servlet.js";

// Technology icons (replace with your actual icons)
const JavaIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path
      fill="#0074BD"
      d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
    ></path>
    <path
      fill="#EA2D2E"
      d="M69.802 61.271c6.025 6.935-1.58 13.13-1.58 13.13s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.227z"
    ></path>
    <path
      fill="#0074BD"
      d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 10.42 49.821 9.757 90.817-4.873 77.896-9.073zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.229 19.644-4.643 19.644-4.643zM90.393 75.64c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.468-.617.468-.617z"
    ></path>
    <path
      fill="#EA2D2E"
      d="M76.491 1.587s12.968 12.245-12.303 35.03c-25.266 22.788-17.077 39.04-9.339 28.297 7.378-10.473 13.247-18.37 17.059-23.203 4.712-5.987 7.816-8.535 15.01-14.122C100.961 14.353 83.226-7.533 76.491 1.587z"
    ></path>
    <path
      fill="#0074BD"
      d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
    ></path>
  </svg>
);

const HibernateIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path
      fill="#59666C"
      d="M99.9 44.6c-9.9-16.6-26.4-27.7-45.5-27.7-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4c19.1 0 35.6-11.1 45.5-27.7l-12.9-7.6c-7.2 11.9-20.2 19.5-34.6 19.5-22.3 0-40.4-18.1-40.4-40.4s18.1-40.4 40.4-40.4c14.4 0 27.4 7.6 34.6 19.5l12.9-7.6z"
    ></path>
  </svg>
);

const MySqlIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path
      fill="#00758F"
      d="M64 1.066C28.8 1.066 0 29.866 0 65.066s28.8 64 64 64c35.2 0 64-28.8 64-64s-28.8-64-64-64zm0 102.4c-21.2 0-38.4-17.2-38.4-38.4s17.2-38.4 38.4-38.4c21.2 0 38.4 17.2 38.4 38.4s-17.2 38.4-38.4 38.4z"
    ></path>
    <path
      fill="#E48E00"
      d="M64 24.266c-22.4 0-40.6 18.2-40.6 40.6s18.2 40.6 40.6 40.6c22.4 0 40.6-18.2 40.6-40.6s-18.2-40.6-40.6-40.6zm0 64c-12.8 0-23.2-10.4-23.2-23.2s10.4-23.2 23.2-23.2c12.8 0 23.2 10.4 23.2 23.2s-10.4 23.2-23.2 23.2z"
    ></path>
    <path
      fill="#F29111"
      d="M64 35.066c-16.4 0-29.6 13.2-29.6 29.6s13.2 29.6 29.6 29.6c16.4 0 29.6-13.2 29.6-29.6s-13.2-29.6-29.6-29.6zm0 48c-10.2 0-18.4-8.2-18.4-18.4s8.2-18.4 18.4-18.4c10.2 0 18.4 8.2 18.4 18.4s-8.2 18.4-18.4 18.4z"
    ></path>
  </svg>
);

const JsfIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path fill="#0074BD" d="M1.408 1.408h125.184v125.185H1.408z"></path>
    <path
      fill="#F7DF1E"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
    ></path>
  </svg>
);

const JspIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path fill="#0074BD" d="M1.408 1.408h125.184v125.185H1.408z"></path>
    <path
      fill="#F7DF1E"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
    ></path>
  </svg>
);

const ServletIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path fill="#0074BD" d="M1.408 1.408h125.184v125.185H1.408z"></path>
    <path
      fill="#F7DF1E"
      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
    ></path>
  </svg>
);

const SpringIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 128 128">
    <path
      fill="#6DB33F"
      d="M110.2 69.4c1.4-7.2 2-14.5 1.7-21.9-3.3.3-6.5.4-9.8.4-14.1 0-3.2-.2-6.4-.7-9.5-1.8-12.5-7.6-23.4-16.7-31.3C76.1-3.2 63.8-1.1 53.9 5c-9.9 6.1-16.4 16.1-18.3 28.1-.5 3.1-.7 6.3-.7 9.5 0 4.5.6 8.9 1.7 13.2-11.8 10.9-19.1 25.8-19.1 42.3 0 6.4.9 12.6 2.6 18.5 4.5 15.8 16 28.3 31.8 32.8 6 1.7 12.2 2.6 18.5 2.6 16.5 0 31.4-7.3 42.3-19.1 4.3 1.1 8.7 1.7 13.2 1.7 3.2 0 6.4-.2 9.5-.7 12-1.9 22-8.4 28.1-18.3 6.1-9.9 8.2-22.2 4.3-33.8-7.9-9.1-18.8-14.9-31.3-16.7z"
    ></path>
    <path
      fill="#5A9E4E"
      d="M110.2 69.4c-12.5-1.8-23.4-7.6-31.3-16.7-9.1-9.1-14.9-20-16.7-31.3-.5-3.1-.7-6.3-.7-9.5 0-4.5.6-8.9 1.7-13.2-11.8-10.9-25.8-19.1-42.3-19.1-6.4 0-12.6.9-18.5 2.6-15.8 4.5-28.3 16-32.8 31.8-1.7 6-2.6 12.2-2.6 18.5 0 16.5 7.3 31.4 19.1 42.3-1.1 4.3-1.7 8.7-1.7 13.2 0 3.2.2 6.4.7 9.5 1.9 12 8.4 22 18.3 28.1 9.9 6.1 22.2 8.2 33.8 4.3 9.1-7.9 14.9-18.8 16.7-31.3.5-3.1.7-6.3.7-9.5 0-4.5-.6-8.9-1.7-13.2 10.9-11.8 19.1-25.8 19.1-42.3 0-6.4-.9-12.6-2.6-18.5z"
    ></path>
  </svg>
);

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
    whileHover={{ y: -2, scale: 1.02 }}
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
    const month = now.getMonth() + 1;

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

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Hint: The password is based on current time and date</p>
          <p className="mt-1">Format: (minutes)(day)(month)</p>
        </div>
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
        </header>

        <main className="container mx-auto px-4 py-8">
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
                {/* Floating Tech Icons Circle */}
                <div className="relative py-16">
                  <div className="text-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center mb-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        JAVA LEARNING RESOURCES
                      </span>
                      <div className="w-2 h-2 rounded-full bg-blue-500 ml-2"></div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 mb-4"
                    >
                      Master Java Development
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                      Select from our curated collection of topics to enhance
                      your Java skills and
                      <span className="relative mx-1">
                        <span className="absolute inset-x-0 bottom-1 h-2 bg-blue-100 dark:bg-blue-900/50 opacity-70 -z-10"></span>
                        <span className="relative">
                          boost your productivity
                        </span>
                      </span>
                      as a developer.
                    </motion.p>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    {[
                      { icon: "java", name: "Java", component: JavaIcon },
                      {
                        icon: "hibernate",
                        name: "Hibernate",
                        component: HibernateIcon,
                      },
                      { icon: "mysql", name: "MySQL", component: MySqlIcon },
                      { icon: "jsf", name: "JSF", component: JsfIcon },
                      { icon: "jsp", name: "JSP", component: JspIcon },
                      {
                        icon: "servlet",
                        name: "Servlet",
                        component: ServletIcon,
                      },
                      { icon: "spring", name: "Spring", component: SpringIcon },
                    ].map((tech, index) => {
                      const angle = (index * 360) / 7; // 7 technologies
                      const radius = 160; // Distance from center
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;

                      return (
                        <motion.div
                          key={tech.icon}
                          className="absolute"
                          style={{
                            x,
                            y,
                          }}
                          initial={{ y: 0 }}
                          animate={{
                            y: [y, y + 10, y],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        >
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.2 }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-400/20"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3],
                              }}
                              transition={{
                                duration: 5 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                            <div className="relative z-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                              <tech.component className="h-8 w-8" />
                              <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">
                                {tech.name}
                              </span>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
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


// Icons