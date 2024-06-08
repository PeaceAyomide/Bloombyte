import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProjectThree.css'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";
const ProjectThree = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/projects'); 
  };

  return (
      <section className='projectree-wall'>
      <div className="projectree-top">
        <button className='arrowt' onClick={handleBackClick}><HiMiniArrowSmallLeft /></button>
        <p><span>Project</span>/Platform for Outdoor Gear Company</p>
        <div className="top-btn">
          <button>View Project <MdArrowOutward/></button>
        </div>   
      </div>
      <div className="terraboxz-wall">
<div className="terrabox"></div>
      </div>

      
      <div className="giantbox">
        <div className="giantbox-wall">
          <div className="giantbox-one">
            <div>
          <h3>
          Project Title</h3> <p>Gear Up! E-commerce Platform for Outdoor Gear Company
            </p>
          </div>
            <div>
            <h3>
            Category</h3> <p>Logistics Solutions
            </p>
            </div>  </div>
          <div className="line">
            <hr />
            <hr />

          </div>
          <div className="line2">
            <hr />
          </div>
                      <div className="giantbox-one erroz">
            <div>
            <h3>Project Start Date</h3>
            <p>January 1, 2022</p>
            </div>
            <div><h3>Project Start Date</h3>
            <p>2022</p></div>
          </div>
          
        </div>
       
      </div>
      <div className="topic-box">
      <div className="topic-wall">
          <h3>Project Overview</h3>
          <p>Bytechain partnered with Global Logistics Inc., a leading transportation and logistics company, to develop a cutting-edge fleet management solution. The platform aimed to streamline operations, optimize routes, and enhance real-time tracking capabilities, enabling efficient and cost-effective delivery services.</p>
    </div>
      </div>
      <div className="topic-box">
      <div className="topic-wall">
          <h3>Client Goals</h3>
          <p>Global Logistics Inc. sought to improve their operational efficiency, reduce fuel costs, and enhance customer satisfaction by providing accurate delivery estimates and real-time updates.</p>
    </div>
      </div>
      <div className="topic-box">
      <div className="topic-wall">
          <h3>Problems Encountered</h3>
          <p><li>Integrating with various third-party systems and legacy data sources</li>
            <li>Handling large volumes of real-time data from multiple locations</li>
          <li>Ensuring data security and compliance with industry regulations</li></p>
    </div>
      </div>
      <div className="topic-box">
      <div className="topic-wall">
          <h3>Solutions</h3>
          <p><li>Implemented a microservices architecture for scalability and flexibility</li>
            <li>Developed a robust data ingestion pipeline for real-time data processing</li>
            <li>Integrated advanced algorithms for route optimization and vehicle tracking</li>
          <li>Deployed secure and compliant cloud infrastructure for data storage and processing</li>
          </p>
    </div>
      </div>
      <div className="topic-box">
      <div className="topic-wall">
          <h3>SDLC Process</h3>
          <p>Bytechain followed an Agile methodology, with regular sprint planning, daily stand-ups, and retrospective meetings to ensure continuous collaboration and iterative development.</p>
    </div>
      </div>
    </section>
  )
}

export default ProjectThree