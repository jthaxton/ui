
// import Modal from './index';
import React from 'react';
import {PageWrapper} from './PageWrapper';
import { useArgs } from '@storybook/client-api';
import usePage, { MESSAGE_TYPES } from "./usePage";
import PageContext from "./PageContext";


export default {
  title: 'PageWrapper',
  component: PageWrapper,
  argTypes: {
    kind: { control: 'select', 
    options: [
        MESSAGE_TYPES.SUCCESS,
        MESSAGE_TYPES.ERROR,
        MESSAGE_TYPES.WARNING,
        MESSAGE_TYPES.INFO,
      ]
    },
  },
  args: {
    text: 'this closes after 5ms',
    loading: false,
    kind: 'success'
  },
  tags: ['autodocs'],

};

export const Playground = ({ onClose, footer, ...args }) => {
  const [{text}, setArgs] = useArgs();
  const messageState = {
    ...args,
    setMessage: () => setArgs({text: null})
  };

  return (
<PageContext.Provider value={messageState}>
      <PageWrapper {...args}>
        <h1>Content only renders when finished loading</h1>
      </PageWrapper>
        </PageContext.Provider>
  );
};
