import  { useState } from 'react';
import './HoverImage.css'; // Import main.css file for styling
// import ML from '../assets/ML.jpg'
// import VR from '../assets/VR.jpg'
// import HA from '../assets/HA.png'
// import CS from '../assets/CS.jpg'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="header">The Things We Offer</div>
      <div className="content" onMouseEnter={() => openModal('/ML.jpg')} onMouseLeave={closeModal}>
        <p className="text">Machine Learning</p>
      </div>
      <div className="content" onMouseEnter={() => openModal('/VR.jpg')} onMouseLeave={closeModal}>
        <p className="text">Virtual Reality</p>
      </div>
      <div className="content" onMouseEnter={() => openModal('/CS.jpg')} onMouseLeave={closeModal}>
        <p className="text">Cyber Security</p>
      </div>
      <div className="content" onMouseEnter={() => openModal('/HA.png')} onMouseLeave={closeModal}>
        <p className="text">Home Automation</p>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
           
            <img className="modal-image h-[600px] w-[700px]" src={modalImage} alt="Hovered Image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;