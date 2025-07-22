import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { jobs } from './assets/resume-data'; // Assuming you have a file that exports the jobs data
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import { FiMinus } from 'react-icons/fi';

const devBorders = false;

const ExperienceCarousel = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextJob = () => {
    setCurrentJobIndex((prev) => (prev + 1) % jobs.length);
  };

  const prevJob = () => {
    setCurrentJobIndex((prev) => (prev - 1 + jobs.length) % jobs.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentJobIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentJobIndex]);

  return (
      <ExperienceSection id="experience">
        <CarouselContainer>
          <CarouselTrack
            ref={carouselRef}
            animate={{ x: `-${currentJobIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {jobs.map((job, index) => (
              <JobCard
                key={`job-${index}`}
                gradient={job.gradient}
                initial="hidden"
                animate={index === currentJobIndex ? "visible" : "hidden"}
              >
                <CardImage image={job.image} />
                
                <JobContent>
                  <JobHeader>
                    <JobTitle>
                      {job.title}
                    </JobTitle>
                    <JobDuration>
                      {job.duration}
                    </JobDuration>
                    <JobPosition>
                      {job.position}
                    </JobPosition>
                  </JobHeader>

                  <JobDescription>
                    {job.bullets.map((bullet, bulletIndex) => (
                      <JobItem
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: bulletIndex * 0.1 }}
                      >
                        ️    <FiMinus size="0.8rem" color={'whitesmoke'} style={{ marginRight: '0.2rem' }} />
                            {bullet}
                      </JobItem>
                    ))}
                  </JobDescription>
                  
                </JobContent>
              </JobCard>
            ))}
          </CarouselTrack>


        </CarouselContainer>
        <NavigationContainer>
          <SectionTitle
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </SectionTitle>
          <ButtonGroup>
            <NavButton
              onClick={prevJob}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <CgChevronLeft size="40px" color={'whitesmoke'} />
            </NavButton>
            <NavButton
              onClick={nextJob}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
                <CgChevronRight size="40px" color={'whitesmoke'} />
            </NavButton>
          </ButtonGroup>
        </NavigationContainer>
      </ExperienceSection>
  );
};

export default ExperienceCarousel;

// Styled Components
const ExperienceSection = styled.section.withConfig({
  displayName: 'ExperienceSection'
})`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0.5rem 10vw;
  padding-top: 5rem;
`;

const SectionTitle = styled(motion.h2).withConfig({
  displayName: 'SectionTitle'
})`
  text-align: left;
  font-size: 2rem;
  font-weight: 800;
`;

const CarouselContainer = styled.div.withConfig({
  displayName: 'CarouselContainer'
})`
  position: relative;
  width: 100%;
  flex: 1;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  overflow: hidden;
`;

const CarouselTrack = styled(motion.div).withConfig({
  displayName: 'CarouselTrack'
})`
  display: flex;
  width: 100%;
  height: 100%;
  ${devBorders && 'border: 1px solid yellow;'}
`;

const JobCard = styled(motion.div).withConfig({
  displayName: 'JobCard'
})`
  min-width: 100%;
  height: 100%;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const JobContent = styled.div.withConfig({
  displayName: 'JobContent'
})`
  height: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  position: relative;
  z-index: 2;
  ${devBorders && 'border: 1px solid purple;'}
`;

const JobHeader = styled(motion.div).withConfig({
  displayName: 'JobHeader'
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${devBorders && 'border: 1px solid gold;'}
  padding: 0.2rem;
`;

const JobTitle = styled(motion.h3).withConfig({
  displayName: 'JobTitle'
})`
  font-size: 1.4rem;
  font-weight: 700;
    text-align: left;
`;

const JobPosition = styled(motion.h4).withConfig({
  displayName: 'JobPosition'
})`
  font-size: 1.0rem;
  font-weight: 600;
  `;

const JobDuration = styled(motion.div).withConfig({
  displayName: 'JobDuration'
})`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.8;
  justify-self: flex-end;
`;

const JobDescription = styled(motion.div).withConfig({
  displayName: 'JobDescription'
})`
  padding: 0;
  margin: 0;
  ${devBorders && 'border: 1px solid red;'}
  color: white;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const JobItem = styled(motion.div).withConfig({
  displayName: 'JobItem'
})`
  font-size: 0.9rem;
  padding: 0.2rem;
  ${devBorders && 'border: 1px solid blue;'}
  text-align: left;
`;

const CardImage = styled.div.withConfig({
  displayName: 'CardImage'
})`
  width: 100%;
  height: 100%;
  align-self: center;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 0.5rem;
`;

const NavigationContainer = styled.div.withConfig({
  displayName: 'NavigationContainer'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  z-index: 10;
  flex-shrink: 0;
  ${devBorders && 'border: 1px solid green;'}
`;

const ButtonGroup = styled.div.withConfig({
  displayName: 'ButtonGroup'
})`
  display: flex;
  gap: 0.5rem;
`;

const NavButton = styled(motion.button).withConfig({
  displayName: 'NavButton'
})`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  width: 50px;
  height: 50px;
  
  &:hover {
    transform: scale(1.05);
  }
`;