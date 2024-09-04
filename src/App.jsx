import React, { useState } from 'react';
import JavaInput from './JavaInput';
import TokenDisplay from './TokenDisplay';

// Define token types for different languages
const tokenDefinitions = {
  java: [
    { regex: /\b(class|public|static|void|main|int|double|float|char)\b/, type: 'Keyword' },
    { regex: /[a-zA-Z_]\w*/, type: 'Identifier' },
    { regex: /\d+/, type: 'Number' },
    { regex: /[{}()[\];,]/, type: 'Separator' },
    { regex: /[+\-*/%]/, type: 'Operator' },
    { regex: /=/, type: 'Assignment Operator' },
  ],
  cpp: [
    { regex: /\b(int|float|double|char|void|if|else|while|for|return)\b/, type: 'Keyword' },
    { regex: /[a-zA-Z_]\w*/, type: 'Identifier' },
    { regex: /\d+/, type: 'Number' },
    { regex: /[{}()[\];,]/, type: 'Separator' },
    { regex: /[+\-*/%]/, type: 'Operator' },
    { regex: /=/, type: 'Assignment Operator' },
  ],
  c: [
    { regex: /\b(int|float|double|char|void|if|else|while|for|return)\b/, type: 'Keyword' },
    { regex: /[a-zA-Z_]\w*/, type: 'Identifier' },
    { regex: /\d+/, type: 'Number' },
    { regex: /[{}()[\];,]/, type: 'Separator' },
    { regex: /[+\-*/%]/, type: 'Operator' },
    { regex: /=/, type: 'Assignment Operator' },
  ],
  python: [
    { regex: /\b(def|class|if|else|elif|while|for|return|import|from|as|pass|break|continue|in|is|not|and|or|print)\b/, type: 'Keyword' },
    { regex: /[a-zA-Z_]\w*/, type: 'Identifier' },
    { regex: /\d+/, type: 'Number' },
    { regex: /[:{}()[\];,]/, type: 'Separator' },
    { regex: /[+\-*/%]/, type: 'Operator' },
    { regex: /=/, type: 'Assignment Operator' },
  ],
};

const lexicallyAnalyze = (code, language) => {
  const tokenTypes = tokenDefinitions[language] || [];
  let tokens = [];
  let remainingCode = code;

  while (remainingCode.length > 0) {
    let matched = false;

    for (const { regex, type } of tokenTypes) {
      const match = remainingCode.match(regex);
      if (match && match.index === 0) {
        tokens.push({ value: match[0], type });
        remainingCode = remainingCode.slice(match[0].length).trim();
        matched = true;
        break;
      }
    }

    if (!matched) {
      remainingCode = remainingCode.slice(1).trim();
    }
  }

  return tokens;
};

function App() {
  const [tokens, setTokens] = useState([]);

  const handleCodeSubmit = ({ code, language }) => {
    const analyzedTokens = lexicallyAnalyze(code, language);
    setTokens(analyzedTokens);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="w-full flex h-full">
        <div className="w-1/2 mr-2 h-full">
          <JavaInput onCodeSubmit={handleCodeSubmit} />
        </div>
        <div className="w-1/2 ml-2 h-full">
          <TokenDisplay tokens={tokens} />
        </div>
      </div>
    </div>
  );
}

export default App;
