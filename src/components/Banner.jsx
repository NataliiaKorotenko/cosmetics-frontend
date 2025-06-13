import { Link } from 'react-router-dom';

const Banner = ({ isScrolled }) => {
  const sections = [
    { label: 'Visage', path: '/face' },
    { label: 'Corps', path: '/body' },
    { label: 'Cheveux', path: '/hair' },
    { label: 'Cadeaux', path: '/gifts' },
  ];

  return (
    <div
  className={`
    w-full h-full flex flex-col items-center justify-center
    transition-colors duration-700 ease-in-out
    $${isScrolled ? 'bg-transparent text-gray-800' : 'bg-transparent text-white'}
  `}
>
  <nav className="flex gap-8 text-3xl font-medium">
        {sections.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`cursor-pointer transition-colors duration-300 hover:text-pink-500 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Banner;
