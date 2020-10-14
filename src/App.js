import React from 'react';
import { CodeView, EditorWrapper } from './components'
import CodeProvider from './contexts/CodeProvider'
import './App.css';

function App() {
  return (
    <div className='mainView'>
      <CodeProvider>
        <EditorWrapper />
        <CodeView />
      </CodeProvider>
    </div>
  );
}

export default App;
