import React, { useContext, useState } from 'react'

const CodeContext = React.createContext()

export const useCode = () => {
  return useContext(CodeContext)
}

export default ({ children }) => {
  const [code, setCode] = useState({ xml: '<!-- Code Html -->\nHello World', css: '/* Code Css */', javascript: '/* Code Js */' })

  const writeCode = (language, value) => {
    setCode(prev => {
      return {
        ...prev,
        [language]: value
      }
    })
  }
  return (
    <CodeContext.Provider value={{ code, writeCode }}>
      {children}
    </CodeContext.Provider>
  )
};

