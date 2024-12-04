import React from "react";
import { useInView } from "react-intersection-observer";
import "./Steps.scss";

const Steps = () => {
    const steps = [
        { 
          title: "Discovery Phase", 
          description: "Uncover your brand’s unique story and identify opportunities to elevate your digital presence." 
        },
        { 
          title: "Strategic Planning", 
          description: "Craft a custom strategy tailored to your goals, ensuring seamless integration of design and technology." 
        },
        { 
          title: "Design & Development", 
          description: "Bring your vision to life with cutting-edge designs and robust development for a flawless user experience." 
        },
        { 
          title: "Launch & Optimize", 
          description: "Go live with confidence and continuously refine your digital solutions to maximize results." 
        },
    ];
      

  return (
    <div className="arta-steps">
        <div className="arta-container">
            <div className="arta-steps__wrapper">
                <div className="arta-steps__wrapper--left">
                    <h3 className="arta-latin-text">Let's grow together with Artacode!</h3>
                    <img
                        src={require("../../assets/gifs/steps.gif")}
                        alt="Arta code connection"
                    />
                </div>
                <div className="arta-steps__wrapper--right">
                {steps.map((step, index) => (
                    <JourneyStep
                        key={index}
                        stepNumber={index + 1}
                        title={step.title}
                        description={step.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

const JourneyStep = ({ stepNumber, title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`arta-steps__step ${inView ? "arta-steps__step--visible" : ""}`}
    >
      <div className="arta-steps__circle">{stepNumber}</div>
      <div className="arta-steps__content">
        <h2 className="arta-steps__title">{title}</h2>
        <p className="arta-steps__description">{description}</p>
      </div>
    </div>
  );
};

export default Steps;
