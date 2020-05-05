import { convertToRaw, EditorState, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'

export function convertDraftToHtml(editorState: EditorState) {
  const rawContentState = convertToRaw(editorState.getCurrentContent())
  return draftToHtml(rawContentState)
}

export function convertHtmlToDraft(html: string) {
  const blocksFromHtml = htmlToDraft(html)
  const { contentBlocks, entityMap } = blocksFromHtml
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap)

  return EditorState.createWithContent(contentState)
}
