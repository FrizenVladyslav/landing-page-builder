import React, { useState, useEffect } from 'react'
import { useObserver, Observer } from 'mobx-react'

import { EditorState } from 'draft-js'
import { convertHtmlToDraft } from 'utils/wysiwygEditor'
// @ts-ignore
import { Editor, createEditorState } from 'medium-draft'
import { useStore } from 'stores'

interface IProps {
  selector: string
  html: string
}

const TextEditor: React.FC<IProps & object> = ({ html, selector, ...rest }) => {
  const { builder } = useStore()
  const [editorState, changeEditorState] = useState<EditorState>(createEditorState())

  useEffect(() => {
    changeEditorState(convertHtmlToDraft(html))
  }, [html])
  return (
    <div onClick={() => builder.selectElement(selector)}>
      <Editor editorState={editorState} onChange={changeEditorState} />
    </div>
  )
}

export default TextEditor
