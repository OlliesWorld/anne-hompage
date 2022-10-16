import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
import CustomerCard from '../components/CustomerCard';
import Insurance from '../components/Insurance';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Services from '../components/Services';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import { HeartIcon}from '@heroicons/react/24/solid';
const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
          MENTAL HEALTH CONDITIONS ARE REAL, COMMON AND TREATABLE.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Anne Brubacher is an experienced, licensed Medical Health Professional who specializes in affordable online therapy.
          </p>
          
          {/* <p className="mt-4 text-gray-600">Anne Brubacher is an experienced, licensed Medical Health Professional who specializes in affordable online therapy.</p> */}
        </div>
        <div className="lg:w-1/2 ml-32 ">
        <StaticImage src="../images/anne-1.jpeg" alt="Anne headshot" className='-z-10 rounded-lg' width={400} height={400} />
        </div>
      </div>
    </section>
   
    <section id="focus" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center w-5/6">
        <LabelText className="text-gray-600">Focus and Specialization Areas</LabelText>
        <div className="flex flex-wrap  mt-8 px-12">
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Stress" />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Anger management" />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Self esteem" />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Coping with life changes" />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Anxiety"  />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Relationship issues"  />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Family conflicts"  />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Grief"  />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Parenting issues"  />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Career difficulties"  />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Depression"  />
          </div>
          <div className="m-4 p-4 rounded border border-primary-darker">
            <StatsBox primaryText="Compassion fatigue"  />
          </div>
          {/* <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div> */}
        </div>
      </div>
    </section>

    <SplitSection
      id="about"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">MORE ABOUT ME</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Hello. I am a Licensed Clinical Social Worker in the State of Colorado with over 20 years of experience as a social worker. I've worked with people of all ages on issues of communication, anger management, self confidence, decision making, and contentedness.</p>
          <p className="mt-8 text-xl font-light leading-relaxed">My approach is engaging, straight forward, and practical. I seek to use humor when appropriate and have as good a time as possible with the subject matter and process. I approach practice from the solution focused and cognitive behavioral therapy models.
          </p>
        </div>
      }
      secondarySlot={ <StaticImage src="../images/anne-3.jpeg" className='-z-10 rounded-lg' alt="Anne office headshot" width={400} height={400}  placeholder="blurred"
      layout="fixed" objectFit='contain' object-position="bottom center"/>}
    />
   
    <SplitSection
      secondarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          ABOUT ONLINE COUNSELING
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Online counseling allows you to receive care from an online mental health practitioner via phone, video chat, or instant messaging. It is convenient for those who may have trouble getting to or would prefer not to have in-person therapy appointments. Ranging from $35 to $80 per week, online counseling is generally more affordable than in-person counseling. A study by researchers at University of California, Berkeley found that online counseling can be just as effective as face-to-face therapy while being more convenient, affordable, and accessible.
          </p>
        </div>
      }
      primarySlot={<StaticImage src="../images/online.jpeg" alt="Image by Peggy und Marco Lachmann-Anke from Pixabay"className='-z-10 rounded-lg' width={600} height={600} />}
    />

<section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        
  
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Licensing:LCSW</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Years in Practice:20</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">State:CO</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

  <section id="note">
    <div className="container mx-auto">
    <h2 className="text-3xl lg:text-5xl font-semibold">Personal Note</h2>
      <p className="mt-8 text-xl font-light leading-relaxed">On a personal note, I have lived in Colorado for nearly 20 years and love to get outside in the sunshine. I still consider the plains of Kansas, where I grew up and visit often, my home. Aside from work I spend lots of time at youth sporting events, having conversations about current events with friends and family, tending my house and working to find time for exercise and reading.</p>
       <p className="mt-8 text-xl font-light leading-relaxed">Seeking someone to talk to about feeling better and making changes is a courageous step. I look forward to working with you to uncover, or dust off, your skills and abilities in shaping your actions to best advance your life goals.</p>
    </div>
  </section>
   
    
    <section id="areas" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center w-8/12">
        <h3 className="text-2xl text-primary-darker border-b w-1/2 mx-auto">Treatment Approach</h3>
        <div className="flex  mt-8 px-12 text-lg">
        <div className='mr-12 flex'>
        <HeartIcon className="mx-auto h-6 w-6 text-primary-darker"/><p>Cognitive Behavioral (CBT)</p>
          </div>
          <div className='mr-12 flex'>
            <HeartIcon className="mx-auto h-6 w-6 text-primary-darker"/><p>Family Systems</p>
          </div>
          <div className='mr-12 flex'>
          <HeartIcon className="mx-auto h-6 w-6 text-primary-darker"/><p>Motivational Interviewing</p>
          </div>
          <div className='mr-12 flex'>
          <HeartIcon className="mr-4 h-6 w-6 text-primary-darker"/><p>Rational</p>
          </div>
          <div className='mr-12 flex'>
          <HeartIcon className=" h-6 w-6 text-primary-darker"/><p>Solution Focused Brief (SFBT)</p>
          </div>
          <div className='mr-12 flex'>
          <HeartIcon className="mx-auto h-6 w-6 text-primary-darker"/><p>Strength-Based</p>
          </div>
          
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Testimonials</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="contact" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to work with me?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      
    <div className='container mx-auto text-center flex gap-12 mt-8 justify-center'>
      <div className='flex-initial w-1/2'>
        <Services />
        <Insurance />
        </div>
      <div className='flex-initial w-1/2'>
        <h4 className='text-lg'>Send a message and I will get back to you soon!</h4>
       <ContactForm />
       <p>Call Anne Brubacher for a free 15 minute consultation now - (720) 419-1024</p>
       </div>
    </div>
   
    </section>
  </Layout>
);

export default Index;
