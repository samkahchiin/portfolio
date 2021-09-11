import React from 'react';
import { skillsSection } from '../../../data/websiteData';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import { Descricao, Image, Info } from './style';

function AboutMe() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      paddingLeft={{
        xs: '20px',
        md: '40px',
      }}
      paddingRight={{
        xs: '20px',
        md: '40px',
      }}
      minHeight="70vh"
    >
      <Text tag="h1" variant="titleXS">{skillsSection.title}</Text>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Info>
          <Descricao>
            <Text tag="p" variant="paragraph3">
              {skillsSection.subTitle}
              <ul>
                {skillsSection.skills.map((skill) => (
                  <li style={{ textAlign: 'left' }}>{skill}</li>
                ))}
              </ul>
            </Text>
          </Descricao>
          <Box style={{ textAlign: 'center' }}>
            <Text tag="p" variant="paragraph2" style={{ marginBottom: '0.5rem' }}>
              Tech Stacks that I have been working on:
            </Text>
            <ul className="dev-icons" style={{ fontSize: '3rem' }}>
              {Object.keys(skillsSection.softwareSkills).map((group) => (
                <>
                  {skillsSection.softwareSkills[group].map((skill) => (
                    <li key={skill.skillName} name={skill.skillName} style={{ display: 'inline-block', marginRight: '1.3rem' }}>
                      {skill.imageLink
                        ? <img src={skill.imageLink} alt={skill.skillName} />
                        : <i className={skill.fontAwesomeClassname} />}
                      <p style={{ fontSize: '0.5rem' }}>{skill.skillName}</p>
                    </li>
                  ))}
                  <br />
                </>
              ))}
            </ul>
          </Box>
        </Info>
        <Image>
          <figure>
            <img src="/images/profile.png" alt="Sam Kah Chiin" />
            <figcaption style={{ textAlign: 'center', fontWeight: '100' }}>
              <i>&quot;No bug please ~&quot;</i>
            </figcaption>
          </figure>
        </Image>
      </Box>
    </Box>
  );
}

export default AboutMe;
