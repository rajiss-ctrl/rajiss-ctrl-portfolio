import React from 'react'
import { ProjectsContainer, ProjectsFive, ProjectsFour, ProjectsH1, ProjectsOne, ProjectsP, ProjectsSix, ProjectsThree, ProjectsTwo, ProjectsWrapper } from './ProjectsElements';

export const Projects = () => {
  return (
    <ProjectsContainer>
        <ProjectsH1>Milestones of Projects</ProjectsH1>
        <ProjectsP>Here are a few  people & projects i’ve patnered and worked on.</ProjectsP>
            <ProjectsWrapper>
                <ProjectsOne>1</ProjectsOne>
                <ProjectsTwo>2</ProjectsTwo>
                <ProjectsThree>3</ProjectsThree>
                <ProjectsFour>4</ProjectsFour>
                <ProjectsFive>5</ProjectsFive>
                <ProjectsSix>6</ProjectsSix>
            </ProjectsWrapper>
    </ProjectsContainer>
  )
}
