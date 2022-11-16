/*
 * EditorParagraphStyleMenuItems.tsx
 *
 * Copyright (C) 2022 by Posit Software, PBC
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

import React from 'react';

import { MenuDivider } from '@blueprintjs/core';

import { EditorCommandId } from 'editor';

import { CommandMenuItem, CommandMenuItemActive } from '../../widgets/command/CommandMenuItem';

const EditorParagraphStyleMenuItems: React.FC = () => {
  return (
    <>
      <CommandMenuItem id={EditorCommandId.Paragraph} active={CommandMenuItemActive.Check} />
      <MenuDivider />
      <CommandMenuItem id={EditorCommandId.Heading1} active={CommandMenuItemActive.Check} />
      <CommandMenuItem id={EditorCommandId.Heading2} active={CommandMenuItemActive.Check} />
      <CommandMenuItem id={EditorCommandId.Heading3} active={CommandMenuItemActive.Check} />
      <CommandMenuItem id={EditorCommandId.Heading4} active={CommandMenuItemActive.Check} />
      <CommandMenuItem id={EditorCommandId.Heading5} active={CommandMenuItemActive.Check} />
      <CommandMenuItem id={EditorCommandId.Heading6} active={CommandMenuItemActive.Check} />
      <MenuDivider />
      <CommandMenuItem id={EditorCommandId.CodeBlock} active={CommandMenuItemActive.Check} />
    </>
  );
};

export default EditorParagraphStyleMenuItems;
