import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownCanvas.css';
import me from './me.md';

function MarkdownCanvas() {
  let [content, setContent] = useState({ md: '' });

  useEffect(() => {
    fetch(me)
      .then((res) => res.text())
      .then((md) => {
        if (md.length === 0) {
          setContent({
            md: '# No content to show, Fill `me.md` file ¯_(ツ)_/¯ ',
          });
        } else {
          setContent({ md });
        }
      });
  }, []);

  return (
    <div className="MarkdownCanvas">
      <div>
        <ReactMarkdown
          children={content.md}
          components={{
            img: ({ node, ...props }) => (
              <img style={{ maxWidth: '100%' }} {...props} />
            ),
          }}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
}

export default MarkdownCanvas;
