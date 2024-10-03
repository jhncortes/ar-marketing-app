import React from 'react'
import { Button } from '@/components/ui/button'
import Placeholder from '../assets/placeholder.svg'
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function Home() {
    const navigate = useNavigate(); // Initialize useNavigate
  
    // Handler for booking button
    const handleBookingClick = () => {
      navigate('/booking');
    };
  
    // Handler for learn more button
    const handleLearnMoreClick = () => {
      navigate('/info'); // Navigate to the info page
    };
  return (
    <div class='grid grid-rows-3 mt-0 items-center space-y-20'>
        <div>
            <h1>Wicked <span class="text-violet-600">XR</span> Banners: Bringing Intelligent Virtual Concierges to <span class="text-violet-600">Life</span></h1>
            <br></br>
            <h2>
                <span class="text-violet-600">Revolutionize </span>
                Customer Engagement <br></br>with Customizable, Knowledge-Rich  
                <span class="text-violet-600"> Virtual Staff</span>
            </h2>
            <h4 class='mt-6 mb-6 font-normal'>
            Step into the future of customer service with Wicked XR Banners. 
            Our platform offers fully customizable AI-powered concierges with rich, tailored knowledge bases.
            These virtual staff members are ready to transform how you engage with customers in your physical spaces,
            powered by our cutting-edge AI technology.
            </h4>
            
        </div>
        <div className='flex flex-col items-center justify-center text-center '>
                <h2>Discover the Power of Custom <span class="text-violet-600">AI </span>:<br></br> Book Your Free 15-Minute <span class="text-violet-600">Consultation </span> Now!</h2>
                <h4 class='font-normal mt-8'>
                Curious about how intelligent, knowledge-rich virtual concierges can elevate your customer experience? 
                Schedule a no-obligation, 15-minute consultation with our experts and unlock the potential of AI-powered assistance in your space.
                </h4>
            <img src={Placeholder} className='mt-6'/> 
            <br></br> 
            <Button onClick={handleBookingClick}>Schedule Your Free Consultation</Button>

        </div>
        <div className='flex flex-col items-center justify-center text-center '>
            <h2>Our <span class="text-violet-600">Groundbreaking</span> Solution</h2>
            <h4 class='mt-8 font-normal'>
                Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:
            </h4>
            <img src={Placeholder} className='mt-6'/> 
            <br></br>
            <Button onClick={handleLearnMoreClick}>Learn More</Button>

        </div>
        {/* <div className='text-center space-y-10'>
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

        </div> */}


    </div>
  )
}

export default Home