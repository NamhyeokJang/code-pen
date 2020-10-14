import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Editor } from '.'

import styles from './EditorWrapper.module.css'
import 'react-tabs/style/react-tabs.css';


export default function EditorWrapper() {
  return (
    <div className={styles.editorWrapper}>
      <Tabs>
        <TabList>
          <Tab>Html</Tab>
          <Tab>CSS</Tab>
          <Tab>Javascript</Tab>
        </TabList>

        <TabPanel>
          <Editor language='xml' />
        </TabPanel>
        <TabPanel>
          <Editor language='css' />
        </TabPanel>
        <TabPanel>
          <Editor language='javascript' />
        </TabPanel>
      </Tabs>
    </div>
  )
};
