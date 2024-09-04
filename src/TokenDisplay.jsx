import React from 'react';

function TokenDisplay({ tokens }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg h-full overflow-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Tokens</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-gray-700">Token</th>
            <th className="border px-4 py-2 text-gray-700">Type</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index} className="border-b">
              <td className="border px-4 py-2 text-gray-700">{token.value}</td>
              <td className="border px-4 py-2 text-gray-700">{token.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TokenDisplay;
