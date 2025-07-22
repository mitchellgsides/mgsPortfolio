import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { personalData } from '../src/assets/personal-data'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import { FiMinus } from 'react-icons/fi';

const devBorders = false;

const PersonalCarousel = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextItem = () => {
    setCurrentItemIndex((prev) => (prev + 1) % personalData.length);
  };

  const prevItem = () => {
    setCurrentItemIndex((prev) => (prev - 1 + personalData.length) % personalData.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentItemIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentItemIndex]);

  return (
      <PersonalSection id="personal">
        <CarouselContainer>
          <CarouselTrack
            ref={carouselRef}
            animate={{ x: `-${currentItemIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {personalData.map((item, index) => (
              <ItemCard
                key={`job-${index}`}
                gradient={personalData.gradient}
                initial="hidden"
                animate={index === currentItemIndex ? "visible" : "hidden"}
              >
                <CardImage image={item.image} />

                <ItemContent>
                  <ItemHeader>
                    <ItemTitle>
                      {item.title}
                    </ItemTitle>
                    <ItemDuration>
                      {item.category}
                    </ItemDuration>
                  </ItemHeader>

                  <ItemDescription>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <ItemItem
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: bulletIndex * 0.1 }}
                      >
                        ️    <FiMinus size="0.8rem" color={'whitesmoke'} style={{ marginRight: '0.2rem' }} />
                            {bullet}
                      </ItemItem>
                    ))}
                  </ItemDescription>
                  
                </ItemContent>
              </ItemCard>
            ))}
          </CarouselTrack>


        </CarouselContainer>
        <NavigationContainer>
          <SectionTitle
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Personal
          </SectionTitle>
          <ButtonGroup>
            <NavButton
              onClick={prevItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <CgChevronLeft size="40px" color={'whitesmoke'} />
            </NavButton>
            <NavButton
              onClick={nextItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
                <CgChevronRight size="40px" color={'whitesmoke'} />
            </NavButton>
          </ButtonGroup>
        </NavigationContainer>
      </PersonalSection>
  );
};

export default PersonalCarousel;

// Styled Components
const PersonalSection = styled.section.withConfig({
  displayName: 'PersonalSection'
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

const ItemCard = styled(motion.div).withConfig({
  displayName: 'ItemCard'
})`
  min-width: 100%;
  height: 100%;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const ItemContent = styled.div.withConfig({
  displayName: 'ItemContent'
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

const ItemHeader = styled(motion.div).withConfig({
  displayName: 'ItemHeader'
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${devBorders && 'border: 1px solid gold;'}
  padding: 0.2rem;
`;

const ItemTitle = styled(motion.h3).withConfig({
  displayName: 'ItemTitle'
})`
  font-size: 1.4rem;
  font-weight: 700;
    text-align: left;
`;


const ItemDuration = styled(motion.div).withConfig({
  displayName: 'ItemDuration'
})`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.8;
  justify-self: flex-end;
`;

const ItemDescription = styled(motion.div).withConfig({
  displayName: 'ItemDescription'
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

const ItemItem = styled(motion.div).withConfig({
  displayName: 'ItemItem'
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
`;

const NavigationContainer = styled.div.withConfig({
  displayName: 'NavigationContainer'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  z-index: 10;
  flex-shrink: 0;
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