import React from 'react';
import { Button } from '@/components/ui/button';
import Placeholder from '../assets/placeholder.svg';
import DemoImage1 from '../assets/demoimage1.jpg';
import DemoImage2 from '../assets/demoimage2.jpg';
import DemoImage3 from '../assets/demoimage3.jpg';
import DemoImage4 from '../assets/demoimage4.jpg';
import DemoImage5 from '../assets/demoimage5.jpg';
import { useNavigate } from 'react-router-dom';
import { CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"; // Import Autoplay from embla-carousel-autoplay

// CarouselPlugin Component
export function CarouselPlugin() {

    const images = [
        DemoImage1,
        DemoImage2,
        DemoImage3,
        DemoImage4,
        DemoImage5,
      ];


  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="w-full">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image} alt={`Example ${index + 1}`} className="w-full h-full object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-gray-300 p-2 rounded">Previous</CarouselPrevious>
      <CarouselNext className="bg-gray-300 p-2 rounded">Next</CarouselNext>
    </Carousel>
  );
}

// Home Component
function Home() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };

  const handleLearnMoreClick = () => {
    navigate('/info');
  };

  return (
    <div className='grid grid-rows-6 mt-0 items-center space-y-3'>
      <div>
        <h1>Wicked <span className="text-violet-600">XR</span> Banners: Bringing Intelligent Virtual Concierges to <span className="text-violet-600">Life</span></h1>
        <br />
        <h2>
          <span className="text-violet-600">Revolutionize </span>
          Customer Engagement <br />with Customizable, Knowledge-Rich  
          <span className="text-violet-600"> Virtual Staff</span>
        </h2>
        <h4 className='mt-6 mb-6 font-normal'>
          Step into the future of customer service with Wicked XR Banners. 
          Our platform offers fully customizable AI-powered concierges with rich, tailored knowledge bases.
          These virtual staff members are ready to transform how you engage with customers in your physical spaces,
          powered by our cutting-edge AI technology.
        </h4>
        <br />
        <Button onClick={handleLearnMoreClick}>Learn More</Button>
      </div>

      <div className='flex flex-col items-center justify-center text-center'>
        <h2>Discover the Power of Custom <span className="text-violet-600">AI </span>:<br /> Book Your Free 15-Minute <span className="text-violet-600">Consultation </span> Now!</h2>
        <h4 className='font-normal mt-8'>
          Curious about how intelligent, knowledge-rich virtual concierges can elevate your customer experience? 
          Schedule a no-obligation, 15-minute consultation with our experts and unlock the potential of AI-powered assistance in your space.
        </h4>
        <img src={Placeholder} className='mt-6' />
        <br />
        <Button onClick={handleBookingClick}>Schedule Your Free Consultation</Button>
      </div>

      <div className='flex flex-col items-center justify-center text-center'>
        <h2>See Our <span className="text-violet-600">Virtual Staff</span> in Action!</h2>
        <h4 className='mt-8 font-normal'>
          Wicked XR Banners goes beyond simple chatbots. We offer virtual staff members with deep, customizable knowledge:
        </h4>
        <CarouselPlugin />
      </div>

      {/* New Section: The Wicked XR Banners Experience */}
      {/* New Section: The Wicked XR Banners Experience */}
      <div className='space-y-12 mt-12'>
            <h1 className='text-3xl font-bold text-center'>The Wicked XR Banners Experience : Bringing Your Virtual Staff to Life</h1>
            <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-2xl font-semibold'>Creating Your Custom AI-Powered Concierge</h3>
                <ul className='list-disc ml-6 mt-2 space-y-2 text-left'>
                    <li><b>Consultation:</b> Begin with a free 15-minute consultation to discuss your unique needs and goals.</li>
                    <li><b>Knowledge Base Creation:</b> We'll help you build a comprehensive, tailored knowledge base for your AI.</li>
                    <li><b>Character Design:</b> Collaborate with our team to create virtual staff that perfectly embodies your brand.</li>
                    <li><b>AI Personality Development:</b> Fine-tune the AI's personality, communication style, and decision-making processes.</li>
                    <li><b>Implementation:</b> We'll set up the WebAR technology and QR codes in your physical space.</li>
                    <li><b>Launch:</b> Your customers can now interact with knowledgeable, personalized virtual concierges with a simple QR code scan.</li>
                    <li><b>Ongoing Optimization:</b> Continuously refine your AI's performance based on real-world interactions and analytics.</li>
                </ul>
            </div>
        </div>

            {/* New Section: Why Choose Wicked XR Banners */}
            <div className='space-y-12 mt-12'>
                <h1 className='text-3xl font-bold text-center'>Why Choose Wicked XR Banners for Your Virtual Concierges?</h1>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <ul className='list-disc ml-6 mt-2 space-y-2 text-left'>
                        <li><b>Deep, Customizable Knowledge:</b> Create virtual staff as informed as your top experts.</li>
                        <li><b>Natural, Context-Aware Interactions:</b> Offer more human-like, intelligent conversations.</li>
                        <li><b>Scalable Personalized Service:</b> Provide one-on-one attention to every customer without increasing costs.</li>
                        <li><b>24/7 Availability:</b> Your virtual concierges are always ready to assist, day or night.</li>
                        <li><b>Consistent Brand Experience:</b> Ensure every interaction aligns perfectly with your brand identity.</li>
                        <li><b>Valuable Customer Insights:</b> Gain deep understanding of customer needs through AI-powered analytics.</li>
                    </ul>
                </div>
            </div>

            {/* New Section: Transform Any Industry with Intelligent Virtual Assistance */}
            <div className='space-y-12 mt-12'>
                <h1 className='text-3xl font-bold text-center'>Transform Any Industry with Intelligent Virtual Assistance</h1>
                <h2 className='text-xl text-center'>Wicked XR Banners' knowledge-rich virtual concierges can revolutionize various sectors:</h2>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <ul className='list-disc ml-6 mt-2 space-y-2 text-left'>
                        <li><b>Retail:</b> Personal shopping assistants with in-depth product knowledge and personalized recommendations.</li>
                        <li><b>Healthcare:</b> Virtual health guides offering detailed medical information and personalized health advice.</li>
                        <li><b>Finance:</b> AI financial advisors providing customized financial guidance and product information.</li>
                        <li><b>Education:</b> Intelligent tutors with deep subject knowledge, adapting to each student's learning style.</li>
                        <li><b>Tourism:</b> Virtual tour guides with extensive knowledge of local history, culture, and attractions.</li>
                        <li><b>Technology:</b> Technical support concierges with comprehensive troubleshooting capabilities.</li>
                    </ul>
                </div>
            </div>
      
    </div>
  );
}

export default Home;
