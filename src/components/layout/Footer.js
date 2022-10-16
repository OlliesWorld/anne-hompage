import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="mt-5">I am a Licensed Clinical Social Worker. I have over 20 years of experience working with youth and adults to make positive life changes.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">References</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.psychologytoday.com/us/therapists/anne-brubacher-boulder-co/1018742">Phycology Today</a>
          </li>
          <li>
            <a href="https://psychtap.com/dir/therapist-listings/anne-brubacher/">PsychTap</a>
          </li>
          <li>
            <a href="https://www.mind-diagnostics.org/listing/173939-Anne-Brubacher">Mind diagnostics.org</a>
          </li>
        </ul>
      </div>
      </div>
      <div className='text-center bg-primary-default h-24 pt-6'>
      <p className="text-sm  pt-2 m-0">&copy; {new Date().getFullYear()}  Anne Brubacher</p>
        <p className="mt-0 text-sm">Made with <span role="img" >💙</span> by<a href="https://roni.rocks/" target="_blank" className='text-blue-700'> Roni</a></p> 
    </div>
  </footer>
);

export default Footer;
