import React from 'react'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { useCode } from '../contexts/CodeProvider'

import './CodeMirror.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

export default function Editor({ language }) {
  const { writeCode, code } = useCode()

  const handleChangeCode = (editor, data, value) => {
    writeCode(language, value)
  }
  return (
    <ControlledEditor
      onBeforeChange={handleChangeCode}
      value={code[language]}
      className='code-mirror-wrapper'
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        lineNumbers: true,
        theme: 'material'
      }}
    />
  )
}