import React from 'react';
import type { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { title, thumbnail, channel, views, timestamp, duration } = video;
  
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      
      <div className="flex gap-3">
        <img
          src={channel.avatar}
          alt={channel.name}
          className="w-9 h-9 rounded-full"
        />
        <div>
          <h3 className="font-medium line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600">{channel.name}</p>
          <p className="text-sm text-gray-600">
            {views.toLocaleString()} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}