import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <Col sm={6} md={4}>
      <button onClick={handleButtonClick}>
        <div className="proj-imgbx">
          <img className='hello' src={imgUrl} alt={`${title} image`} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </button>
    </Col>
  );
};


