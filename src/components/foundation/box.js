import styled from 'styled-components';
import propToStyle from '../../theme/util/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexBasis')}
  ${propToStyle('flexWrap')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('height')}
  ${propToStyle('placeItems')}
  ${propToStyle('minHeight')}
  ${propToStyle('minWidth')}
  ${propToStyle('width')}
  ${propToStyle('maxWidth')}
  ${propToStyle('zIndex')}
  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('bottom')}
  ${propToStyle('left')}
  ${propToStyle('right')}
  ${propToStyle('boxShadow')}
  ${propToStyle('alignItems')}
  ${propToStyle('textAlign')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingTop')}
  ${propToStyle('paddingBottom')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
`;

export default Box;
