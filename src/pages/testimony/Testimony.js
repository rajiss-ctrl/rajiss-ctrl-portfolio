import React from 'react'
import Adeika from '../../images/adeika.jpg'
import { TestimonyAside, TestimonyAsideH2, TestimonyAsideP, TestimonyCard, TestimonyContainer, TestimonyImage, TestimonySection, TestimonySectionH1 } from './TesimonyElements'

const Testimony = () => {
  return (
    <TestimonyContainer>
        <TestimonySection>
            <TestimonySectionH1>Testimonies & Recommendations</TestimonySectionH1>
        </TestimonySection>
        <TestimonyAside>
        <TestimonyCard>
            <TestimonyImage src={Adeika} alt="Adeika, Blessing Isoyiza" />
            <TestimonyAsideH2>Adeika, Blessing Isoyiza</TestimonyAsideH2>
            <TestimonyAsideP>
                    I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.
            </TestimonyAsideP>
        </TestimonyCard>
        <TestimonyCard>
            <TestimonyImage src={Adeika} alt="Adeika, Blessing Isoyiza" />
            <TestimonyAsideH2>Adeika, Blessing Isoyiza</TestimonyAsideH2>
            <TestimonyAsideP>
                    I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.
            </TestimonyAsideP>
        </TestimonyCard>
        <TestimonyCard>
            <TestimonyImage src={Adeika} alt="Adeika, Blessing Isoyiza" />
            <TestimonyAsideH2>Adeika, Blessing Isoyiza</TestimonyAsideH2>
            <TestimonyAsideP>
                    I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.
            </TestimonyAsideP>
        </TestimonyCard>
        <TestimonyCard>
            <TestimonyImage src={Adeika} alt="Adeika, Blessing Isoyiza" />
            <TestimonyAsideH2>Adeika, Blessing Isoyiza</TestimonyAsideH2>
            <TestimonyAsideP>
                    I was opportune to work on a project using React.Js with
                     Raji Sarafadeen and he proved very competent.
            </TestimonyAsideP>
        </TestimonyCard>
        </TestimonyAside>
    </TestimonyContainer>
    
  )
}

export default Testimony