import React, { useState } from 'react';

function JavaInput({ onCodeSubmit }) {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('java');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCodeSubmit({ code, language });
  };

  return (
    <div className="p-3 bg-white shadow rounded-lg h-full">
      <h2 className="text-xl font-bold text-gray-700">Input Code</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="text-gray-700 ">Select Language</span>
          <select
            className="bg-blue-500 block w-full mt-1 p-2 border rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="python">Python</option>
          </select>
        </label>
        <textarea
          className="w-full bg-white text-gray-700 h-[360px] p-2 border rounded mb-4"
          rows="10"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Analyze Code
        </button>
      </form>
    </div>
  );
}

export default JavaInput;
