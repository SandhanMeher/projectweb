import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github'; // or use `duotoneDark`, `vsDark`, etc.

const CodeBlock = ({ language="java", code, explanation }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="my-6 group relative"
  >
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <div className="relative">
        <Highlight
          {...defaultProps}
          code={code.trim()}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} p-5 text-sm overflow-x-auto`}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <CopyButton text={code} />
      </div>
    </div>
    {explanation && (
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 pl-2">
        {explanation}
      </div>
    )}
  </motion.div>
);


export default CodeBlock;
