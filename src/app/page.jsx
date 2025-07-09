'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { GlobeDemo } from '@/components/GlobeDemo';

const SoftwareEngineerPortfolio = () => {
  return (
    <div className="w-full bg-global-7" style={{ fontFamily: 'sans-serif' }}>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="w-full bg-global-1 px-4 sm:px-6 lg:px-14 py-8 sm:py-12 lg:py-28 -mt-2" style={{ fontFamily: 'sans-serif' }}>
        <div className="w-full max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center w-full mb-8 sm:mb-12 lg:mb-16">
            <div className="relative w-full max-w-8xl">
              {/* Background Gradient Circle */}
              {/* <div className="absolute -left-24 top-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-[430px] bg-[linear-gradient(90deg,#763cac_0%,#320e8500_100%)] rounded-full shadow-[0_0_120px_60px_#763cac55]"></div> */}
              {/* Hero Content */}
      <GlobeDemo/>

              <div className="relative flex flex-col lg:flex-row items-start gap-56 lg:gap-56 pt-8 lg:pt-0 lg:ms-12">
                
                <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
                  <div className="relative z-20">
                    <div className="w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-[linear-gradient(180deg,#ffffff_0%,#42424200_100%)] rounded-full p-1 shadow-[0_0_60px_0_#763cac66]">
                      <Image
                        src="/images/dev.jpeg"
                        alt="Profile"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover rounded-full z-[1]"
                      />
                    </div>
                    <Image
                      src="/images/img_arrow.svg"
                      alt="Arrow"
                      width={120}
                      height={120}
                      className="absolute -top-8 -right-12 w-30 h-30 lg:w-30 lg:h-30"
                    />
                  </div>
                </div>
                {/* Text Content */}
                <div className="flex flex-col items-start w-full lg:w-auto">
                  <p className="text-white text-sm sm:text-base lg:text-lg leading-6 lg:leading-[97px] text-center lg:text-left mb-2" style={{ fontFamily: 'sans-serif' }}>
                    <span className="text-white">Hello! I am </span>
                    <span className="text-[#7127ba]">Govind</span>
                  </p>
                  <p className="text-white text-sm sm:text-base lg:text-[17px] leading-6 lg:leading-[31px] underline mb-2" style={{ fontFamily: 'sans-serif' }}>
                    A Frontend Developer who
                  </p>
                  <div className="relative">
                    <h1 className="text-white text-2xl sm:text-3xl lg:text-[50px] leading-8 sm:leading-10 lg:leading-[63px] tracking-wide mb-4" style={{ fontFamily: 'sans-serif' }}>
                      <span className="text-white">builds accessible, high-performance </span>
                      <span className="text-[#7127ba]">web experiences</span>
                    </h1>
                    {/* <div className="absolute -bottom-4 right-0 w-24 sm:w-32 lg:w-48 h-8 sm:h-12 lg:h-[72px] border border-white rounded-full"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Software Engineer Section */}
          <div className="flex flex-col items-start w-full mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-8 lg:px-0 lg:w-9/12 lg:ml-[454px] relative z-20">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[50px] leading-8 sm:leading-12 lg:leading-[90px] tracking-wide mb-4" style={{ fontFamily: 'sans-serif' }}>
              Senior Front End Developer at Cvent
            </h2>
            <div className="relative mb-6">
              <p className="text-white text-base sm:text-lg lg:text-[21px] leading-6 lg:leading-[37px] flex gap-2" style={{ fontFamily: 'sans-serif' }}>
                <span className="text-white">Currently, I am a Senior Associate, Front End Developer at </span>
                <Image
                  src="https://www.cvent.com/themes/custom/themekit/images/favicon/apple-touch-icon.png"
                  alt="Cvent"
                  width={20}
                  height={20}
                  className=" w-5 h-5 rounded-full self-center"
                />
                <a href='https://www.cvent.com/' className="text-[#1877f2]">Cvent</a>
                <span className="text-white">, India</span>
              </p>
            </div>
            <p className="text-white text-base sm:text-lg lg:text-[22px] leading-6 lg:leading-[39px] max-w-4xl" style={{ fontFamily: 'sans-serif' }}>
              I specialize in building accessible, high-performance marketing websites and reusable UI components. I am passionate about web accessibility, performance optimization, and modern frontend technologies. My work bridges the gap between design and engineering, ensuring every user has a seamless experience.
            </p>
          </div>
          {/* Work Experience Section */}
          <div className="relative w-full mb-8 sm:mb-12 lg:mb-16">
            {/* Background Gradient Circle */}
            {/* <div className="absolute right-0 top-0 w-48 sm:w-64 lg:w-[624px] h-48 sm:h-64 lg:h-[700px] bg-[linear-gradient(180deg,#763cac_0%,#320e8500_100%)] rounded-full "></div> */}
            <div className="relative">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-[40px] leading-8 sm:leading-12 lg:leading-[73px] mb-8 lg:mb-16" style={{ fontFamily: 'sans-serif' }}>
                Work Experience
              </h3>
              {/* Experience Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Cvent */}
                <div className="bg-[linear-gradient(162deg,#130328_0%,#37116d_50%,#190634_100%)] rounded-2xl p-6 shadow-[4px_7px_26px_#0000001e]">
                  <div className="w-full h-1 bg-global-4 rounded mb-6"></div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 lg:w-28 lg:h-28">
                      <Image
                        src="https://www.cvent.com/themes/custom/themekit/images/favicon/apple-touch-icon.png"
                        alt="Cvent"
                        width={112}
                        height={112}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl leading-6 lg:leading-8 mb-1" style={{ fontFamily: 'sans-serif' }}>
                        Cvent (2022 - Present)
                      </h4>
                      <p className="text-white font-medium text-xs sm:text-sm leading-3 lg:leading-4 mb-3" style={{ fontFamily: 'sans-serif' }}>
                        Senior Associate, Front End Developer
                      </p>
                      <ul className="text-white text-xs sm:text-sm mb-3" style={{ fontFamily: 'sans-serif', listStyle: 'disc', paddingLeft: '1.2em' }}>
                        <li>Lead accessibility and performance improvements for marketing websites</li>
                        <li>Developed reusable UI components in Storybook</li>
                        <li>Worked with Adobe, Navattic, Ion, Optimizely, 6Sense, Next.js, React</li>
                        <li>Achieved 99% accessibility score for Cvent.com</li>
                        <li>Initiated and contributed to design tokenization and Storybook R&D</li>
                        <li>Used AI tools (GitHub Copilot, Glean, ChatGPT) to boost productivity and accuracy</li>
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-button-1 bg-button-1 hover:bg-global-3"
                      >
                        VIEW PROJECTS
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Previous Experience */}
                <div className="bg-[linear-gradient(130deg,#130328_0%,#37116d_50%,#190634_100%)] rounded-2xl p-6 shadow-[4px_7px_26px_#0000001e]">
                  <div className="w-full h-1 bg-global-4 rounded mb-6"></div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 lg:w-28 lg:h-28">
                      <Image
                        src="https://www.publicissapient.com/content/dam/ps-reinvent/us/en/global/topnav/image/PS-Logo-Transparent.svg"
                        alt="Previous Company"
                        width={112}
                        height={112}
                        className="w-full h-full rounded-lg border border-white px-2"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl leading-6 lg:leading-8 mb-1" style={{ fontFamily: 'sans-serif' }}>
                        Previous Experience
                      </h4>
                      <p className="text-white font-medium text-xs sm:text-sm leading-3 lg:leading-4 mb-3" style={{ fontFamily: 'sans-serif' }}>
                        Frontend Developer
                      </p>
                      <ul className="text-white text-xs sm:text-sm mb-3" style={{ fontFamily: 'sans-serif', listStyle: 'disc', paddingLeft: '1.2em' }}>
                        <li>Built and maintained web applications using React and JavaScript</li>
                        <li>Collaborated with cross-functional teams for UI/UX improvements</li>
                        <li>Focused on accessibility and performance best practices</li>
                      </ul>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-button-1 bg-button-1 hover:bg-global-3"
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Add more cards as needed */}
              </div>
            </div>
          </div>
          {/* Cross-functional Team Section */}
          <div className="flex flex-col items-center w-full mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-8 lg:px-0">
            <div className="text-center mb-8">
              <p className="text-white text-lg sm:text-xl lg:text-2xl leading-6 lg:leading-8 mb-2" style={{ fontFamily: 'sans-serif' }}>
                I am currently looking to join a <span className="text-global-2">cross-functional</span> team
              </p>
              <p className="text-white text-sm sm:text-base lg:text-[17px] leading-6 lg:leading-8" style={{ fontFamily: 'sans-serif' }}>
                that values improving people's lives through accessible, high-quality websites.
              </p>
            </div>
            {/* Decorative/Branding Section remains unchanged */}
          </div>
          {/* Projects Section */}
          <div className="relative w-full mb-8 sm:mb-12 lg:mb-16">
            {/* Project 1 */}
            <div className="relative mb-16 lg:mb-24">
              {/* <div className="absolute right-0 top-0 w-48 sm:w-64 lg:w-[642px] h-48 sm:h-64 lg:h-[720px] bg-[linear-gradient(180deg,#763cac_0%,#320e8500_100%)] rounded-full"></div> */}
              <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="flex-1 order-2 lg:order-1">
                  <p className="text-global-1 font-semibold text-sm sm:text-base mb-2" style={{ fontFamily: 'sans-serif' }}>
                    Featured Project
                  </p>
                  <h4 className="text-global-3 font-semibold text-2xl sm:text-3xl lg:text-[34px] leading-8 lg:leading-[51px] mb-6" style={{ fontFamily: 'sans-serif' }}>
                    Cvent Marketing Website Redesign
                  </h4>
                  <p className="text-global-3 font-medium text-base sm:text-lg leading-6 lg:leading-[27px] mb-6" style={{ fontFamily: 'sans-serif' }}>
                    Led the frontend development for the Cvent.com redesign around 60 components, focusing on accessibility, performance, and responsive design. Implemented lazy loading, async JS, and design tokenization for scalable, maintainable code.
                  </p>
                  <div className="flex gap-4">
                    <Image src="/images/img_icon_park_solid_click.svg" alt="External Link" width={30} height={30} className="w-6 h-6 lg:w-[30px] lg:h-[30px]" />
                    <Image src="/images/img_icon_park_solid_click.svg" alt="GitHub" width={30} height={30} className="w-6 h-6 lg:w-[30px] lg:h-[30px]" />
                  </div>
                </div>
                <div className="flex-1 order-1 lg:order-2">
                  <div className="bg-global-2 rounded-lg p-2">
                    <Image
                      src="/images/home-rd.png"
                      alt="Cvent Homepage"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-48 sm:w-64 lg:w-[572px] h-48 sm:h-64 lg:h-[640px] bg-[linear-gradient(180deg,#763cac_0%,#320e8500_100%)] rounded-full"></div>
              {/* <div className="absolute right-0 top-32 w-48 sm:w-64 lg:w-[624px] h-48 sm:h-64 lg:h-[700px] bg-[linear-gradient(180deg,#763cac_0%,#320e8500_100%)] rounded-full"></div> */}
              <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="flex-1">
                  <div className="bg-global-2 rounded-lg p-2">
                    <Image
                      src="/images/coach.webp"
                      alt="Storybook Tokenization"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-global-1 font-semibold text-sm sm:text-base mb-2 text-left" style={{ fontFamily: 'sans-serif' }}>
                    Featured Project
                  </p>
                  <h4 className="text-global-3 font-semibold text-2xl sm:text-3xl lg:text-[34px] leading-8 lg:leading-[51px] mb-6 text-left" style={{ fontFamily: 'sans-serif' }}>
                    Coach.com development.
                  </h4>
                  <div className="bg-center rounded-lg mb-6 text-left">
                    <p className="text-global-3 font-medium text-base sm:text-lg leading-6 lg:leading-[27px]" style={{ fontFamily: 'sans-serif' }}>
                      Developed a comprehensive design system for Coach.com, implemented various form validations and handling states around PLP, PDP, cart and checkout. Focused on accessibility, performance, and responsive design to enhance user experience across devices.
                    </p>
                  </div>
                  <div className="flex gap-4 justify-end">
                    <Image src="/images/img_icon_park_solid_click.svg" alt="External Link" width={30} height={30} className="w-6 h-6 lg:w-[30px] lg:h-[30px]" />
                    <Image src="/images/img_icon_park_solid_click.svg" alt="GitHub" width={30} height={30} className="w-6 h-6 lg:w-[30px] lg:h-[30px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col items-start w-full px-4 sm:px-8 lg:px-0">
            <h3 className="text-white text-xl sm:text-2xl lg:text-[25px] leading-8 lg:leading-[46px] mb-8 lg:mb-16" style={{ fontFamily: 'sans-serif' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-6 lg:gap-8">
              <p className="text-white text-sm sm:text-base lg:text-[15px] leading-6 lg:leading-[27px] max-w-4xl" style={{ fontFamily: 'sans-serif' }}>
                Interested in collaborating or have a project in mind? Let's connect!
                <br /><br />
                <b>Email:</b> g.kgautam97@gmail.com
              </p>
              <div className="flex gap-6 lg:gap-8">
                <Image src="/images/img_vector_white_a700.svg" alt="LinkedIn" width={18} height={18} className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                <Image src="/images/img_vector_white_a700_18x18.svg" alt="GitHub" width={18} height={18} className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
                <Image src="/images/img_vector_white_a700_18x16.svg" alt="Twitter" width={16} height={18} className="w-4 h-4 lg:w-[16px] lg:h-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineerPortfolio;