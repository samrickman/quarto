/*
 * WorkbenchPrefsDialog.tsx
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

import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as yup from 'yup'

import { CommandManagerContext } from '../commands/CommandManager';
import { WorkbenchCommandId } from '../commands/commands';

import FormikDialog from '../widgets/formik/FormikDialog';
import { FormikHelpers } from 'formik';
import FormikTextInput from '../widgets/formik/FormikTextInput';
import FormikCheckbox from '../widgets/formik/FormikCheckbox';

interface TestProps {
  color: 'red' | 'green' | 'blue';
  email: string;
  enabled: boolean;
}

const WorkbenchTestDialog: React.FC = () => {

  // translations
  const { t } = useTranslation();

  // command to show dialog
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, cmDispatch] = useContext(CommandManagerContext);
  useEffect(() => {
    cmDispatch({ type: "ADD_COMMANDS", payload: [
      {
        id: WorkbenchCommandId.TestDialog,
        menuText: "Test Dialog",
        group: t('commands:group_utilities'),
        keymap: ['Mod+Shift+K'],
        isEnabled: () => true,
        isActive: () => false,
        execute: () => {
          setIsOpen(true);
        },
      },
    ]})
  }, []);



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: TestProps, helpers: FormikHelpers<TestProps>) => {
    console.log(values);
    helpers.setSubmitting(false);
    setIsOpen(false);
  };

  const onCancel = () => {
    setIsOpen(false);
  }

  const props: TestProps = {
    color: 'red',
    email: '',
    enabled: true
  }

  return (
    <FormikDialog
      title="Test Dialog" 
      isOpen={isOpen} 
      initialValues={props} 
      onSubmit={onSubmit} 
      onReset={onCancel}
      validationSchema={yup.object().shape({
        color: yup.string().oneOf(['red', 'green', 'blue']).required('Color is a required field'),
        email: yup.string().email("You must provided a valid email").required("You must provided a valid email")
      })}
    >
       <FormikTextInput name="color" label='Color' labelInfo='The color you want' helperText='This is the helper text that we have' autoFocus={true} validated={true}/>
       <FormikTextInput name="email" label='Email' labelInfo='Correspondence address' validated={true}/>
       <FormikCheckbox name="enabled" label="Enabled" />
    </FormikDialog>
  );
};


export default WorkbenchTestDialog;

