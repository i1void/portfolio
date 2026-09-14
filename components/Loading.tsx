import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const [show, setShow] = useState(true);
  const textRef = useRef<SVGTextElement>(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setLength(textRef.current.getComputedTextLength());
    }
  }, []);

  setTimeout(() => setShow(false), 300);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <svg width="320" height="80" viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg">
        <AnimatePresence>
          {show && (
            <motion.text
              ref={textRef}
              x="0"
              y="55"
              fill="none"
              fontFamily="Lexend, sans-serif"
              fontSize="56"
              fontWeight="700"
              className="stroke-primary-light"
              strokeWidth="1.5"
              style={{
                strokeDasharray: length,
              }}
              initial={{ strokeDashoffset: length }}
              animate={{ strokeDashoffset: 0 }}
              exit={{ strokeDashoffset: length }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}>
              i1void
            </motion.text>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}
