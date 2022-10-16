import React from 'react';
import { ChatBubbleLeftEllipsisIcon, ChatBubbleOvalLeftEllipsisIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/solid';


const Services = () => (
  <div className='w-50'>
    <h2 className="text-4xl font-semibold text-primary">Services Offered</h2>
   <p className='text-lg'>100% confidential &#x2299; No judment</p>
   <div className='flex justify-center gap-12 mt-8'>
       <div>
       <ChatBubbleLeftEllipsisIcon className="mx-auto h-12 w-12 text-primary-darker"/>
       <h3 className='text-3xl w-32 mx-auto'>Messaging </h3>
       </div>
       <div>
       <ChatBubbleOvalLeftEllipsisIcon className="mx-auto h-12 w-12 text-primary-darker"/>
       <h3 className='text-3xl w-32 mx-auto'>Live Chat</h3>
       </div>
   </div>
   <div className='flex justify-center gap-12 mt-8'>
       <div>
       <PhoneIcon className="mx-auto h-12 w-12 text-primary-darker"/>
       <h3 className='text-3xl w-32 mx-auto'>Phone</h3>
       </div>
       <div>
       <VideoCameraIcon className="mx-auto h-12 w-12 text-primary-darker"/>
       <h3 className='text-3xl w-32 mx-auto'>Video</h3>
       </div>
   </div>
  </div>
);

export default Services;


