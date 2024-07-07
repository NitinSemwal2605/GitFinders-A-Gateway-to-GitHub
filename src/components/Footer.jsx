const Footer = () => {
  const builtWithList = [
    { title: 'React', ref: 'https://react.dev/' },
    { title: 'Github API', ref: 'https://docs.github.com/en/rest/' },
    { title: 'TailwindCSS', ref: 'https://tailwindcss.com/' },
    { title: 'daisyUI', ref: 'https://daisyui.com/' },
  ];

  const builtByList = [
    {title: 'Nitin Semwal', ref: 'http://nitinsemwal.vercel.app/'}
  ];

  return (
    <footer className='footer footer-center wrapper'>
      <aside className='wrapper-spacing'>
        <p className='text-base'>
          Built with{' '}
          {builtWithList.map((item, idx) => (
            <span key={idx}>
              <a href={item.ref} className='text-primary hover:underline'>
                {item.title}
              </a>
              {builtWithList.length - 1 !== idx && <span> &#183; </span>}
            </span>
          ))}
              - By {builtByList.map((item, idx) => (
            <span key={idx}>
              <a href={item.ref} className='text-primary hover:underline'>
                {item.title}
              </a>
            </span>
          ))}
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
