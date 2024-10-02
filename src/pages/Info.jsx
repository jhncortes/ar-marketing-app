import React from 'react';
import { Button } from '@/components/ui/button';
import Placeholder from '../assets/placeholder.svg';

function Info() {
  return (
    <div className="mt-12">
      <h1 className="mb-8">Information of AR Banners</h1>
      <div className="flex flex-col items-center space-y-20">
        <h4 className="font-normal mb-4 text-center">
          Augmented Reality (AR) Banners are a cutting-edge solution for engaging potential customers. 
          By using AR technology, these banners bring traditional print advertising to life, allowing users 
          to interact with the content through their smartphones. This innovative approach helps tour operators 
          showcase their offerings in a dynamic and captivating manner, enhancing customer experience and driving sales.
        </h4>
        {/* Image below the text and centered */}
        <img src={Placeholder} className="my-4"/>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="mt-6 font-normal mb-4 text-center mb-28 mt-28">
            AR Banners can feature 3D models, videos, and interactive elements that tell a story about your tours
             and destinations. With just a simple scan, travelers can access immersive experiences that highlight 
             the unique aspects of your services. This not only captures attention but also encourages potential customers 
             to engage with your brand in a meaningful way.
        </h4>
        {/* Image below the text and centered */}
        <img src={Placeholder} alt='placeholder'/>
      </div>
    </div>
  );
}

export default Info;
