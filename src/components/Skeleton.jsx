import { Footer } from '.';

const Skeleton = () => {
  return (
    <>
      <section className='grid gap-5 sm:gap-7'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7'>
          <div className='skel h-72'></div>
          <div className='lg:col-span-2'>
            <div className='skel h-72'></div>
          </div>
        </div>
        <div className='skel h-[470px]'></div>
      </section>

      <Footer />
    </>
  );
};

export default Skeleton;
