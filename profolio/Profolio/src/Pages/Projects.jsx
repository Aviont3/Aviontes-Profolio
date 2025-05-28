import { useState } from "react";
import Modal from "../Components/Modal.jsx";



const Project = ({ name, techStack, screenshot, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <div className="project-container">
        <div className="circle" onClick={openModal}>
          <div className="top-half">{name}</div>
          <div className="bottom-half tech-icons">
            {techStack.map((tech, index) => (
              <img
                key={index}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                style={{ height: "20px", marginRight: "8px" }}
              />
            ))}
          </div>
        </div>
  
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>{name}</h2>
          <img src={screenshot} alt={`${name} screenshot`} style={{ width: "100%", borderRadius: "8px" }} />
          <p>{description}</p>
        </Modal>
      </div>
    );
  };
  
  export default Project;


