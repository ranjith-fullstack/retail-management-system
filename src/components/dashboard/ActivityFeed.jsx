import React from 'react';
import { formatDistanceToNow } from '../../utils/timeUtils';

export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50"
          >
            <div className={`p-2 rounded-full ${activity.iconBg} text-white`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
            <time className="text-xs text-gray-500">
              {formatDistanceToNow(activity.timestamp)}
            </time>
          </div>
        ))}
      </div>
    </div>
  );
}