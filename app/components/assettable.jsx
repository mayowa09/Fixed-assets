"use client"

import { useState, useEffect } from 'react';

export default function AssetTable ({ assets, onEdit, onDelete }) {
    return (
        <div className="mt-8">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr className="bg-[#E5E7EB] text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Asset ID</th>
            <th className="px-4 py-2">Value</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.name}</td>
              <td>{asset.category}</td>
              <td>{asset.assetId}</td>
              <td>{asset.value}</td>
              <td>{asset.status}</td>
              <td>{asset.location}</td>
              <td>
                <button onClick={() => onEdit(asset.id)}>Edit</button>
                <button onClick={() => onDelete(asset.id)}>Delete</button>
                <button>View All</button>
              </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}    
