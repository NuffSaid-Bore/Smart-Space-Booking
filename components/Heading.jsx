const Heading = ({ title }) => {
    return (
      <section className='bg-white mb-5 shadow-lg px-8 py-4'>
        <h1 className='text-2xl font-bold tracking-tight text-purple-400'>
          {title}
        </h1>
      </section>
    );
  };
  
  export default Heading;
  