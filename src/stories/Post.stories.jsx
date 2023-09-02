
import React from 'react';
import Post from './Post';
export default {
  title: 'Molecules/Post',
  component: Post,
  tags: ['autodocs'],
  args: {
    loading: false,
    post: {
        title: 'my first post!',
        content: 'The true power of a hero lies not in their strength, but in their ability to inspire others',
        date: 'Dec 6, 2022',
        src: "https://images.thedirect.com/media/article_full/one-punch.jpg",
        alt: "one punch man",
        likedByCurrUser: false,
    },
    poster: {
        src: '/1517373869199.jpg',
        name: 'joe',
    },
  },
};

export const Playground = ({ ...args }) => {
  return (
    <Post  {...args} />
  );
};
