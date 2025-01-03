import React from 'react';
import VideoCard from './VideoCard';
import type { Video } from '../types';

const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a YouTube Clone with React & TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    channel: {
      name: 'Code Masters',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80'
    },
    views: 250000,
    timestamp: '2 weeks ago',
    duration: '12:34'
  },
  {
    id: '2',
    title: 'Learn Web Development in 2024',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    channel: {
      name: 'Tech Academy',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80'
    },
    views: 1000000,
    timestamp: '3 days ago',
    duration: '25:16'
  },
  {
    id: '3',
    title: 'Modern JavaScript Fundamentals',
    thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80',
    channel: {
      name: 'JS Ninja',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80'
    },
    views: 750000,
    timestamp: '1 week ago',
    duration: '18:42'
  }
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {mockVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}