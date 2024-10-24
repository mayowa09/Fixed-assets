"use client"
import { useState, useEffect } from 'react';
import AssetTable from '../components/assettable'
import SideBar from '../components/sidebar';
import Header from '../components/header';
import Lead from '../components/leads';


export default function Dashboard () {
    const [assets, setAssets] = useState([]);
    useEffect(() => {
        fetch('/api/assets')
          .then((response) => response.json())
          .then((data) => setAssets(data))
          .catch((error) => console.log('Error fetching assets:', error));
      }, []);
      const addNewAsset = (newAsset) => {
        setAssets([...assets, newAsset]);
      };

      const handleEdit = (assetId) => {
        console.log(`Edit asset with id: ${assetId}`);
      };
    
      const handleDelete = (assetId) => {
        const updatedAssets = assets.filter((asset) => asset.id !== assetId);
        setAssets(updatedAssets);
      };

    
      
      return (
        <>
        <div className=" flex gap-3 w-full">
        <SideBar />
        <div className="flex flex-col">
          <div className="flex justify-end">
          <Header />
          </div>
          <div className="flex flex-col items-start">
          <Lead />
          <div className="py-8 px-8 mt-8 bg-white w-full h-fit rounded-3xl">
          <h1 className="text-xl">Recent Assets</h1>
          <AssetTable assets={assets} onEdit={handleEdit} onDelete={handleDelete}/>
          </div>
          </div>
        </div>
        </div>
        </>
      );
    };
        

