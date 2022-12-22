/*
 * visual-editor.ts
 *
 * Copyright (C) 2022 by Posit Software, PBC
 *
 * Unless you have received this program directly from Posit Software pursuant
 * to the terms of a commercial license agreement with Posit Software, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

export const kVEInit = 've_init';
export const kVEGetMarkdown = 've_get_markdown';
export const kVEGetMarkdownFromState = 've_get_markdown_from_state';
export const kVEApplyTextEdit = 've_apply_text_edit';

export const kVEHostEditorReady = 've_host_editor_ready';
export const kVEHostEditorUpdated = 've_host_editor_updated';

export interface VisualEditor {
  init: (markdown: string) => Promise<string>; 
  getMarkdown: () => Promise<string>;
  getMarkdownFromState: (state: unknown) => Promise<string>;
  applyTextEdit: (markdown: string) => Promise<void>;
}

export interface VisualEditorHost {
  editorReady: () => Promise<void>; 
  editorUpdated: (state: unknown) => Promise<void>;
}


