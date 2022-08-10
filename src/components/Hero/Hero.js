import React from 'react';
import Image from "next/image";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am <br/>
        Sayali Kakade
      </SectionTitle>
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