import styled from 'styled-components';

export const ContatoModal = styled.div`
    position: relative;

    #contato:hover {
        /* color: ${({ theme }) => theme.colors.details.main.color}; */
        color: black;
        -webkit-text-fill-color: white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

`;

export default ContatoModal;
