import './css/AboutMe.css';
import { useNavigate } from 'react-router-dom';

function AboutMe() {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/MyTown');
  };

  return (
      <body>
        <div class="container">
          <div class="page-name">About me</div>
          <h1 class="title">Max</h1>
          <p class="content">
            "Hi, I'm Max, and my Chinese name is Pengyao Zhao. 
             I'm passionate about sports and technology. 
             I enjoy basketball, badminton, and jogging. 
             I'm also particularly interested in Business Intelligence, 
             Data Analytics, Computer Vision, and Natural Language Processing."
            <br /><br />
            "The reason why I join MCDA is for developing my knowledge in the fields I interested. 
             And I believe that MCDA will provide me a clear path to be a specialist in Data Science."
            <br /><br />
          </p>
          <button onClick={handleButtonClick}>Home town introduction</button>
        </div>
      </body>
  );
}

export default AboutMe;

