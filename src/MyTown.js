import './css/MyTown.css';
import GetWeather from './weather'
import { useNavigate } from 'react-router-dom';

function MyTown() {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  return (
      <body>
        <div class="container">
          <div class="page-name">My Town</div>
          <div class="title">I lived in Shenyang, China for 18 years</div>
          <div class="image-container">
            <img src="pic.jpg" alt="My hometown" />
          </div>
          <GetWeather/>
          <br />
          <button onClick={handleButtonClick}>self-introduction</button>
        </div>
      </body>
  );
}

export default MyTown;