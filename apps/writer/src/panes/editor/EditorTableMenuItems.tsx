/*
 * EditorTableMenuItems.tsx
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

import { useTranslation } from 'react-i18next';

import { MenuDivider } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import { EditorCommandId } from 'editor';

import { CommandMenuItem, CommandMenuItemActive } from '../../widgets/command/CommandMenuItem';
import { CommandSubMenu } from '../../widgets/command/CommandSubMenu';

const EditorTableMenuItems: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <CommandMenuItem id={EditorCommandId.TableInsertTable} />
      <MenuDivider />
      <CommandMenuItem id={EditorCommandId.TableToggleHeader} active={CommandMenuItemActive.Check} />
      <CommandMenuItem id={EditorCommandId.TableToggleCaption} active={CommandMenuItemActive.Check} />
      <MenuDivider />
      <CommandSubMenu text={t('table_column_alignment_menu')} icon={IconNames.SPLIT_COLUMNS}>
        <CommandMenuItem id={EditorCommandId.TableAlignColumnLeft} />
        <CommandMenuItem id={EditorCommandId.TableAlignColumnRight} />
        <CommandMenuItem id={EditorCommandId.TableAlignColumnCenter} />
        <MenuDivider />
        <CommandMenuItem id={EditorCommandId.TableAlignColumnDefault} />
      </CommandSubMenu>
      <MenuDivider />
      <CommandMenuItem id={EditorCommandId.TableAddRowBefore} />
      <CommandMenuItem id={EditorCommandId.TableAddRowAfter} />
      <CommandMenuItem id={EditorCommandId.TableAddColumnBefore} />
      <CommandMenuItem id={EditorCommandId.TableAddColumnAfter} />
      <MenuDivider />
      <CommandMenuItem id={EditorCommandId.TableDeleteRow} />
      <CommandMenuItem id={EditorCommandId.TableDeleteColumn} />
      <MenuDivider />
      <CommandMenuItem id={EditorCommandId.TableDeleteTable} />
    </>
  );
};

export default EditorTableMenuItems;