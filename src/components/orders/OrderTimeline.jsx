import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function OrderTimeline({ timeline }) {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {timeline.map((event, idx) => (
          <li key={event.date}>
            <div className="relative pb-8">
              {idx !== timeline.length - 1 && (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.status.replace(/_/g, ' ').toUpperCase()}
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    {new Date(event.date).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}