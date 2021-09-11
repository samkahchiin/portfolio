import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/text';
import breakpointsMedia from '../../../theme/util/breakpoints';
import propToStyle from '../../../theme/util/propToStyle';
import Link from '../link/link';

const ButtonGhost = css`
    background: transparent;
    outline: none;
    padding: 0;
`;

const ButtonDefault = css`
    font-weight: 100;
    color: black;
    background-color: ${({ theme }) => theme.colors.button.second.color};
    border-radius: 0.3rem;
`;

const ButtonWrapper = styled.button`
    cursor: pointer;
    border: none;
    padding: 10px 12px;

    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.paragraph3}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph2}
    `,
  })}

    &:disabled {
      cursor: not-allowed;
      opacity: .3;
    }
    ${({ fullWidth }) => fullWidth && css`
      width: 100%;
    `};

    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  ${propToStyle('width')}
  ${propToStyle('height')}
`;

const Button = ({ href, children, ...props }) => {
  const isLink = Boolean(href);
  const tag = isLink ? Link : 'button';

  return (
    <ButtonWrapper
      as={tag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
