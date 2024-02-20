import React, { useEffect, useRef } from 'react';

function ChangeDOMManually() {
  const textRef = useRef(null);

  useEffect(() => {
    // Accessing the DOM element using the ref
    const textElement = textRef.current;

    // Changing the text content of the DOM element
    textElement.textContent = 'Text changed using useEffect!';
  }, []); // Empty dependency array means the effect runs only once after component mounts

  return (
    <div>
      {/* Ref attached to the DOM element */}
      <p ref={textRef}>Original text</p>
    </div>
  );
}

export default ChangeDOMManually;
