import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// images
import ArmImg from '../../resources/images/project/arm_compute_shader_blur.png';
import BreakOutImg from '../../resources/images/project/breakoutvk.png';
import DismazementImg from '../../resources/images/project/dismazement.png';
import ZombieImg from '../../resources/images/project/early_zombie_game_prototype.png';
import EngardeImg from '../../resources/images/project/engarde.png';
import RaidersImg from '../../resources/images/project/raiders.png';
import SMRMImg from '../../resources/images/project/smrm.png';
import SuperZombieSmashImg from '../../resources/images/project/super_zombie_smash.png';
import SVOImg from '../../resources/images/project/svo.png';
import WackAWeedImg from '../../resources/images/project/whack_a_weed.png';
import TotobImg from '../../resources/images/project/totob.png';

// animations
import { Ripple } from '../../resources/animations/Ripple';


const projects = [
  { title: 'SVO', image: SVOImg },
  { title: 'Arm Compute Shader Blur', image: ArmImg },
  { title: 'Breakout Vulkan', image: BreakOutImg },
  { title: 'Totob', image: TotobImg },
  { title: 'Wack a Weed', image: WackAWeedImg },
  { title: 'Raiders', image: RaidersImg },
  { title: 'Dismazement', image: DismazementImg },
  { title: 'Zombie', image: ZombieImg },
  { title: 'EngardeImg', image: EngardeImg },
  { title: 'SMRM', image: SMRMImg },
  { title: 'Super Zombie Smash', image: SuperZombieSmashImg },
];

const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 20px;
  :hover {
    cursor: pointer;
    opacity: 1;

    img {
      opacity: 0.3;
    }
    div {
      opacity: 1;
    }
  }
`;

const StyledImg = styled(motion.img)`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
`;

const Overlay = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const Text = styled.div`
  color: black;
  font-size: 3em;
`;

const Projects = () => {
  return (
    <Container>
      {projects.map((project, key) => {
        return (
        <Wrapper>
          <StyledImg key={key} src={project.image} />
            <Overlay>
              <Text>{project.title}</Text>
            </Overlay>
        </Wrapper>
        )
      })}
    </Container>
  );
}

export default Projects;
