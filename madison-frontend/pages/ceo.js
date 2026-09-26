import React, { useState } from 'react';

export default function CeoConsole() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('');
  const [filePath, setFilePath] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [taskInput, setTaskInput] = useState('');
  const [taskOutput, setTaskOutput] = useState('');

  const BACKEND = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

  async function runOperator(type, payload) {
    const res = await fetch(`${BACKEND}/operator/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return await res.json();
  }

  async function runTerminal() {
    const result = await runOperator('execute', { code: terminalInput });
    setTerminalOutput(JSON.stringify(result, null, 2));
  }

  async function readFile() {
    const result = await runOperator('file/read', { path: filePath });
    setFileContent(result.content || result.error);
  }

  async function writeFile() {
    const result = await runOperator('file/write', {
      path: filePath,
      content: fileContent
    });
    alert('File written successfully');
  }

  async function runTask() {
    const result = await runOperator('task', { task: taskInput });
    setTaskOutput(JSON.stringify(result, null, 2));
  }

  async function deploy() {
    const result = await runOperator('deploy', { service: 'full-system' });
    alert(result.message);
  }

  return (
    <div style={{ background: '#000', color: '#0ff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#0ff' }}>Madison CEO Console</h1>

      {/* Terminal */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Terminal (Run Backend Code)</h2>
        <textarea
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          placeholder="console.log('Hello from Madison')"
          style={{ width: '100%', height: '120px', background: '#111', color: '#0ff' }}
        />
        <button onClick={runTerminal}>Run Code</button>
        <pre style={{ background: '#111', padding: '10px', marginTop: '10px' }}>
          {terminalOutput}
        </pre>
      </section>

      {/* File Editor */}
      <section style={{ marginBottom: '40px' }}>
        <h2>File Editor</h2>
        <input
          value={filePath}
          onChange={(e) => setFilePath(e.target.value)}
          placeholder="/src/test.js"
          style={{ width: '100%', background: '#111', color: '#0ff' }}
        />
        <button onClick={readFile}>Read File</button>
        <textarea
          value={fileContent}
          onChange={(e) => setFileContent(e.target.value)}
          placeholder="File content..."
          style={{ width: '100%', height: '200px', background: '#111', color: '#0ff', marginTop: '10px' }}
        />
        <button onClick={writeFile}>Write File</button>
      </section>

      {/* Task Runner */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Task Runner</h2>
        <textarea
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Build a new website using Next.js"
          style={{ width: '100%', height: '120px', background: '#111', color: '#0ff' }}
        />
        <button onClick={runTask}>Run Task</button>
        <pre style={{ background: '#111', padding: '10px', marginTop: '10px' }}>
          {taskOutput}
        </pre>
      </section>

      {/* Deployment */}
      <section>
        <h2>Deployment</h2>
        <button onClick={deploy}>Deploy Full System</button>
      </section>
    </div>
  );
}
