import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';
import { Img } from '../Projects/ProjectsStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br/>
        Sayali Kakade
      </SectionTitle>
      {/* <Img src="/public/images/profilePic.png"/> */}
      <SectionText>
        Frontend developer | Creative | Self-motivated | Explorer
      </SectionText>
      <a href='#projects'>
        <Button>Learn more </Button>  
      </a> 
    </LeftSection>
  </Section>
);

export default Hero;