import React from 'react';
import { Button } from '@/components/ui/button';
import Placeholder from '../assets/placeholder.svg';

// function Info() {
//   return (
//     <div className="mt-12">
//       <h1 className="mb-8">Information of AR Banners</h1>
//       <div className="flex flex-col items-center space-y-20">
//         <h4 className="font-normal mb-4 text-center">
//           Augmented Reality (AR) Banners are a cutting-edge solution for engaging potential customers. 
//           By using AR technology, these banners bring traditional print advertising to life, allowing users 
//           to interact with the content through their smartphones. This innovative approach helps tour operators 
//           showcase their offerings in a dynamic and captivating manner, enhancing customer experience and driving sales.
//         </h4>
//         {/* Image below the text and centered */}
//         <img src={Placeholder} className="my-4"/>
//       </div>
//       <div className="flex flex-col items-center">
//         <h4 className="mt-6 font-normal mb-4 text-center mb-28 mt-28">
//             AR Banners can feature 3D models, videos, and interactive elements that tell a story about your tours
//              and destinations. With just a simple scan, travelers can access immersive experiences that highlight 
//              the unique aspects of your services. This not only captures attention but also encourages potential customers 
//              to engage with your brand in a meaningful way.
//         </h4>
//         {/* Image below the text and centered */}
//         <img src={Placeholder} alt='placeholder'/>
//       </div>
//     </div>
//   );
// }



function Info() {
  return (
    <div className='max-w-3xl mx-auto px-4 py-12'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold text-violet-600'>Our Advanced AI Solutions</h1>
        <h2 className='text-2xl mt-4 text-gray-700'>Transforming Customer Engagement with Intelligent Virtual Concierges</h2>
      </div>
      
      <div className='space-y-12'>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-2xl font-semibold'>1. AI-Powered Virtual Concierges with Custom Knowledge Bases</h3>
          <p className='mt-4'>Create virtual staff as knowledgeable as your best employees:</p>
          <ul className='list-disc ml-6 mt-2 space-y-2'>
            <li><b>Tailored Knowledge Creation:</b> Build custom knowledge bases specific to your business, products, or services.</li>
            <li><b>Easy Knowledge Integration:</b> Seamlessly import existing databases, manuals, or FAQs to create comprehensive AI knowledge.</li>
            <li><b>Continuous Learning:</b> Your virtual concierges can update their knowledge base through interactions, staying current with the latest information.</li>
          </ul>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-2xl font-semibold'>2. Advanced AI Capabilities for Natural Interactions</h3>
          <p className='mt-4'>Our proprietary AI technology enables unparalleled virtual assistance:</p>
          <ul className='list-disc ml-6 mt-2 space-y-2'>
            <li><b>Natural Language Understanding:</b> Our AI comprehends context and nuance, providing more human-like interactions.</li>
            <li><b>Multi-Turn Conversations:</b> Engage in complex, context-aware dialogues that feel natural and productive.</li>
            <li><b>Sentiment Analysis:</b> Virtual concierges can detect and respond to customer emotions, enhancing the quality of interactions.</li>
          </ul>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-2xl font-semibold'>3. Fully Customizable Virtual Characters</h3>
          <p className='mt-4'>Tailor your virtual staff to embody your brand:</p>
          <ul className='list-disc ml-6 mt-2 space-y-2'>
            <li><b>Visual Customization:</b> Create characters that align with your brand aesthetics, from photorealistic to stylized designs.</li>
            <li><b>Personality Programming:</b> Define unique personalities that reflect your brand voice and values.</li>
            <li><b>Multilingual Capabilities:</b> Offer support in multiple languages to cater to a diverse customer base.</li>
          </ul>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-2xl font-semibold'>4. Seamless WebAR Integration</h3>
          <p className='mt-4'>Bring your virtual concierges into the physical world:</p>
          <ul className='list-disc ml-6 mt-2 space-y-2'>
            <li><b>QR Code Activation:</b> Simple QR codes serve as gateways to your AI-powered staff.</li>
            <li><b>Web-Based Platform:</b> No app downloads required, ensuring easy access for all customers.</li>
            <li><b>Cross-Device Compatibility:</b> Works on a wide range of smartphones and tablets.</li>
          </ul>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-2xl font-semibold'>5. Continuous Improvement and Analytics</h3>
          <p className='mt-4'>Optimize your virtual staff's performance over time:</p>
          <ul className='list-disc ml-6 mt-2 space-y-2'>
            <li><b>Interaction Analytics:</b> Gain valuable insights into customer queries, preferences, and satisfaction.</li>
            <li><b>Performance Metrics:</b> Track key performance indicators to continually enhance your virtual concierges.</li>
            <li><b>Regular AI Updates:</b> Benefit from ongoing improvements to our underlying AI technology.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Info;
