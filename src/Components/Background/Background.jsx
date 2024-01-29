import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Background.css'

const Background = ({children}) => {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setBackgroundImage(`backgroundImage: url("../public/victor-freitas-vqDAUejnwKw-unsplash.jpeg");`);
    }
    else {
      setBackgroundImage('backgroundColor:  #f0ece3;');
    }
  }, [location]);

  return (
    <div
      style={{
        backgroundImage,
      }}
    >
        {children}
    </div>
  );
};

export default Background;