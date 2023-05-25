import React, { useState, ChangeEvent } from 'react';

const WordCounter: React.FC = () => {
    const [text, setText] = useState('');
    const wordCount = text.trim().split(/\s+/).length;
    const characterCount = text.length;
    const characterCountWithoutSpaces = text.replace(/\s+/g, '').length;

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Type something..."
                rows={4}
            />
            <p>Word Count: {wordCount}</p>
            <p>Character Count: {characterCount}</p>
            <p>Character Count (excluding spaces): {characterCountWithoutSpaces}</p>
        </div>
    );
};

export default WordCounter;