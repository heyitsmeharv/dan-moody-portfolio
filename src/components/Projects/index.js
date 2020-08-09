import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// images
import ArmImg from '../../resources/images/arm_compute_shader_blur.png';
import BreakOutImg from '../../resources/images/breakoutvk.png';
import DismazementImg from '../../resources/images/dismazement.png';
import ZombieImg from '../../resources/images/early_zombie_game_prototype.png';
import EngardeImg from '../../resources/images/engarde.png';
import RaidersImg from '../../resources/images/raiders.png';
import SMRMImg from '../../resources/images/smrm.png';
import SuperZombieSmashImg from '../../resources/images/super_zombie_smash.png';
import SVOImg from '../../resources/images/svo.png';
import WackAWeedImg from '../../resources/images/whack_a_weed.png';
import TotobImg from '../../resources/images/totob.png';

// animations
import { Ripple } from '../../resources/animations/Ripple';


const projects = [
  { title: 'Arm Compute Shader Blur', image: ArmImg },
  { title: 'Breakout Vulkan', image: BreakOutImg },
  { title: 'Dismazement', image: DismazementImg },
  { title: 'Zombie', image: ZombieImg },
  { title: 'EngardeImg', image: EngardeImg },
  { title: 'Raiders', image: RaidersImg },
  { title: 'SMRM', image: SMRMImg },
  { title: 'Super Zombie Smash', image: SuperZombieSmashImg },
  { title: 'SVO', image: SVOImg },
  { title: 'Wack a Weed', image: WackAWeedImg },
  { title: 'Totob', image: TotobImg },
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
