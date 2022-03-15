import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of JS mastery is blah blah, my value proposition
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Learn More</Button> 
    </LeftSection>
  </Section>
);

export default Hero;