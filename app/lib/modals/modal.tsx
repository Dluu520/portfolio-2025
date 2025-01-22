import React from "react";

interface ExperienceProps {
  started: number;
  ended: number | -1;
  position: string;
  employer: string;
  jd: string[];
}

interface ModalProps {
  content: ExperienceProps | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>
          {content.position} at {content.employer}
        </h2>
        <h3>
          {content.started} - {content.ended === -1 ? "Current" : content.ended}
        </h3>
        <ul>
          {content.jd.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
