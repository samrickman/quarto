/*
 * CommandToolbarButton.tsx
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

import React, { useContext } from 'react';

import { useSelector } from 'react-redux';

import { Props } from '@blueprintjs/core';

import { editorSelection } from '../../store/editor/editor-selectors';
import { ToolbarButton } from '../../widgets/Toolbar';
import { CommandId, commandTooltipText } from '../../commands/commands';
import { CommandManagerContext } from '../../commands/CommandManager';

export interface CommandToolbarButtonProps extends Props {
  command: CommandId;
}

export const CommandToolbarButton: React.FC<CommandToolbarButtonProps> = (props: CommandToolbarButtonProps) => {
  // force re-render when the selection changes
  useSelector(editorSelection);

  // get command
  const commandManager = useContext(CommandManagerContext);
  const command = commandManager.commands[props.command];
  if (command) {
    return (
      <ToolbarButton
        className={props.className}
        icon={command.icon}
        title={commandTooltipText(command)}
        enabled={command.isEnabled()}
        active={command.isActive()}
        onClick={command.execute}
      />
    );
  } else {
    return null;
  }
};