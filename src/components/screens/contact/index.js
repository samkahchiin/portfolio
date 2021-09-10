import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import RedesSociais, { ContatoModal } from './style';
import FormEmail from '../../forms/formEmail';
import Modal from '../../common/modal/modal';

// TODO: Move this to constant
const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/kahchiin-sam/';
const GITHUB_PROFILE = 'https://github.com/samkahchiin';
const CODEPEN_PROFILE = 'https://codepen.io/earthworm48';

function Contato() {
  const [isModalOpen, setModalState] = React.useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={{
        xs: 'space-around',
        md: 'space-around',
      }}
      height="70vh"
      padding={{
        xs: '0px',
        md: '40px',
      }}
      marginTop={{
        xs: '50px',
        md: '100px',
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
          title="Chat with me"
          ghost
          onClick={() => {
            setModalState(!isModalOpen); // novo state sendo atribuido
          }}
        >
          <Text tag="p" id="contato" variant="titleXS" color="fonts.main">
            Chat with me?
          </Text>
        </Button>
      </ContatoModal>
      <Box>
        <img src="/images/happy-me.png" alt="Sam Kah Chiin" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{
          xs: 'justify',
          md: 'space-between',
        }}
      >
        <Text tag="p" variant="paragraph3">Social Profiles</Text>
        <RedesSociais>
          <Text
            tag="a"
            href={LINKEDIN_PROFILE}
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Likedin"
            color="fonts.main"
          >
            Linkedin
          </Text>
          <Text
            tag="a"
            href={GITHUB_PROFILE}
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            color="fonts.main"
          >
            Github
          </Text>
          <Text
            tag="a"
            href={CODEPEN_PROFILE}
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Codepen"
            color="fonts.main"
          >
            Codepen
          </Text>
        </RedesSociais>
      </Box>
    </Box>
  );
}

export default Contato;
