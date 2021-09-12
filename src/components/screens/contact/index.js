import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import ContatoModal from './style';
import FormEmail from '../../forms/formEmail';
import Modal from '../../common/modal/modal';
import { contactSection, seo } from '../../../data/websiteData';

function Contato() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <section>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{
          xs: 'space-around',
          md: 'space-around',
        }}
        padding={{
          xs: '0px',
          md: '20px',
        }}
        textAlign="center"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {(propsDoModal) => (
            <FormEmail propsDoModal={propsDoModal} setModalState={setModalState} />
          )}
        </Modal>
        <ContatoModal>
          <Button
            title={contactSection.title}
            ghost
            onClick={() => {
              setModalState(!isModalOpen);
            }}
          >
            <Text tag="p" id="contato" variant="titleXS" color="fonts.main">
              {contactSection.title}
            </Text>
          </Button>
        </ContatoModal>
        <Box>
          <img src={contactSection.imageLink} alt={seo.siteOwner} />
        </Box>

        <Text tag="p" variant="subTitleXS">Social Profiles</Text>
        <Box
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
          display="flex"
          justifyContent={{
            md: 'space-around',
          }}
        >
          <Box>
            <Text
              tag="a"
              href={contactSection.linkedinUrl}
              variant="paragraph1XS"
              target="_blank"
              rel="noopener noreferrer"
              title="Likedin"
              color="fonts.main"
            >
              Linkedin
            </Text>
          </Box>
          <Box>
            <Text
              tag="a"
              href={contactSection.githubUrl}
              variant="paragraph1XS"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              color="fonts.main"
            >
              Github
            </Text>
          </Box>
          <Box>
            <Text
              tag="a"
              href={contactSection.codepenUrl}
              variant="paragraph1XS"
              target="_blank"
              rel="noopener noreferrer"
              title="Codepen"
              color="fonts.main"
            >
              Codepen
            </Text>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Contato;
