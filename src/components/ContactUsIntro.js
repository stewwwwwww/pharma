import React from 'react'
import pic from "../assets/pharmacist.jpg"

const ContactUsIntro = () => {
  return (
    <div className="flex flex-col items-center gap-16 gap-24 px-4 md:gap-20 xl:gap-24">
      <div className=" flex max-w-[75rem]  flex-col pt-24 text-center md:pt-32 lg:pt-44">
        <div className="xl-gap-7 flex flex-col justify-between gap-10 md:gap-12 lg:flex-row lg:gap-5">
          <div className="flex flex-col gap-5 lg:text-start">
            <h6 className="text-[#00378A]">Get in Touch</h6>
            <h1>Ask Us Anything</h1>
          </div>
          <div className="flex items-end lg:w-[33%]">
            <p className=" text-[#838B93] lg:text-end">
              Discover the dedicated and highly skilled professionals who make
              up our medical laboratory team. With a shared commitment to
              precision and quality, our experts bring a wealth of experience in
              various specialized fields, including pathology, and molecular
              diagnostics.
            </p>
          </div>
        </div>
      </div>
      <img
        src={pic}
        className="lg: h-[25rem] w-full rounded-xl object-cover sm:h-[19rem] md:h-[31rem] md:h-[32.5rem] xl:max-w-[75rem]"
      />
    </div>
  )
}

export default ContactUsIntro