
import React from 'react';
import Avatar from './Avatar';
// import avatar from './static/1517373869199.jpg'
export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    alt: 'joe',
    loading: false,
  },
};

export const Playground = ({ ...args }) => {
    const {
        alt,
        src,
    } = args;
  return (
    <Avatar  {...args} src={'/1517373869199.jpg'} />
  );
};
