import React, { useState, useEffect, useMemo } from 'react'
import { useCode } from '../contexts/CodeProvider'

import styles from './CodeView.module.css'

export default () => {
  const { code } = useCode()

  const src = useMemo(() => `<html>
    <body>${code.xml}</body>
    <style>${code.css}</style>
    <script>${code.javascript}</script>
    </html>`
    , [code])

  const [srcDoc, setSrcDoc] = useState(src)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(src)
    }, 250)
    return () => clearTimeout(timeout)
  }, [src])
  return (
    <iframe
      className={styles.codeView}
      // frameBorder='0'
      srcDoc={srcDoc}
      title='output'
    />
  )
}