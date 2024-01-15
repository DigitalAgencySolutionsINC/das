import image from '@/constant/Images/image';
import Image from 'next/image';

const Prefer = () => {
  return (
    <section className='py-24 sm:py-32 bg-slate-50'>
      <div className='app__container grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='mx-auto'>
          <Image src={image.bannerMan} alt='digital marketing' />
        </div>
        <div>
          <h1 className='primary-heading'>
            Why Choose DAS for{' '}
            <span className='highlight'>Digital Marketing Services?</span>
          </h1>
          <p className='pt-12 pb-6 app__text'>
            Welcome to DAS, your trusted partner for Digital Marketing Services.
            Our team comprises skilled professionals with a solid track record
            in digital marketing and web development. What sets us apart is our
            commitment to tailoring solutions that align with your specific
            business goals. We prioritize your success through a client-centric
            approach, keeping you engaged and informed throughout the process.
            At DAS, we thrive on innovation, utilizing the latest technologies
            to keep you ahead in the digital world. Our primary focus is on
            delivering measurable results to boost your online presence and
            drive business growth. Choose DAS for a partnership dedicated to
            taking your digital presence to the next level.
          </p>
          <ul className='list-inside list-disc app__text'>
            <li>
              Expertise: Our team consists of seasoned professionals with a
              proven track record in digital marketing and web development.
            </li>
            <li>
              Custom Solutions: We understand that every business is unique. Our
              services are tailored to meet your specific goals and
              requirements.
            </li>
            <li>
              Innovation: Stay ahead in the digital landscape with our
              innovative solutions and cutting-edge technologies.
            </li>
            <li>
              Client-Centric Approach: Your success is our priority. We work
              closely with you, keeping you informed and involved throughout the
              process.
            </li>
            <li>
              Results-Driven: We are committed to delivering measurable results.
              Our strategies are designed to enhance your online presence and
              drive business growth.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prefer;
