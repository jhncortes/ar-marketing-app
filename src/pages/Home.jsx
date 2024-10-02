import React from 'react'
import { Button } from '@/components/ui/button'
import Placeholder from '../assets/placeholder.svg'

function Home() {
  return (
    <div class='grid grid-rows-4 mt-0 items-center space-y-20'>
        <div>
            <h1>
                <span class="text-violet-600">Revolutionize </span>
                Your Business<br></br> And Its Marketing with 
                <span class="text-violet-600"> AR Banners</span>
            </h1>
            <h4 class='mt-6 mb-6 font-normal'>
                Are you a tour operator looking to stand out in a crowded market?
                Our innovative Augmented Reality (AR) Banner solution is here to help you captivate potential customers 
                and showcase your unique travel experiences like never before.
            </h4>
            <Button>See More</Button>
        </div>
        <div className='flex flex-col items-center justify-center text-center'>
                <h1>What are AR Banners?</h1>
                <h4 class='font-normal mt-8'>
                    AR Banners are traditional print banners or posters enhanced with AR technology.
                    By scanning these banners with their smartphones, travelers unlock a world of immersive, 
                    interactive content that brings your tours and destinations to life.
                </h4>
            <img src={Placeholder} className='mt-20'/>  

        </div>
        <div className='text-center'>
            <h1>How can AR Banners Benefit Tour Operators?</h1>
            <h4 class='mt-8 font-normal'>
                AR Banners are traditional print banners or posters enhanced with AR technology.
                By scanning these banners with their smartphones, travelers unlock a world of immersive, 
                interactive content that brings your tours and destinations to life.
            </h4>
        </div>
        <div className='text-center'>
            <h1>How do AR Banners work?</h1>
            <h4 class='mt-8 mb-8 font-normal'>
                AR Banners are traditional print banners or posters enhanced with AR technology.
                By scanning these banners with their smartphones, travelers unlock a world of immersive, 
                interactive content that brings your tours and destinations to life.
            </h4>
            <div className='text-left'>
                <ul className="list-disc ml-6">
                    <li>
                    <b>Create:</b> Design your banner with stunning imagery of your tours and destinations, 
                    along with a clear call-to-action.
                    </li>
                    <li>
                    <b>Enhance:</b> Our team integrates AR technology into your banner, linking it to your chosen 
                    tour content and booking platform.
                    </li>
                    <li>
                    <b>Display:</b> Place your AR Banner in strategic locations, such as travel agencies, 
                    airports, or tourist information centers.
                    </li>
                    <li>
                    <b>Engage:</b> Travelers scan your banner using their smartphone camera and are instantly immersed 
                    in your tour experience.
                    </li>
                </ul>
            </div>

        </div>


    </div>
  )
}

export default Home