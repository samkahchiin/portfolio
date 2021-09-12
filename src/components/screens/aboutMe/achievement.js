import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Flickity from 'react-flickity-component';
import { achievementSection } from '../../../data/websiteData';
import Text from '../../foundation/text';
import {
  Card, CardDetailsDiv, CardFooter,
  CardImageDiv, CardSubtitle,
  CardTitle, CardTag, Subtitle,
} from './style/achievement';
import 'flickity/css/flickity.css';
import Box from '../../foundation/box';

const Achievement = () => {
  const themeContext = useContext(ThemeContext);
  const openUrlInNewTab = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <section>
      <Text tag="h3" variant="subTitleXS">{achievementSection.title}</Text>
      <Subtitle>
        {achievementSection.subtitle}
      </Subtitle>

      <Flickity options={{ initialIndex: 1, wrapAround: false, draggable: true }}>
        {achievementSection.cards.map((card) => (
          <Card key={card.title}>
            <CardImageDiv>
              <img src={card.imageLink} alt={card.title} />
            </CardImageDiv>
            <CardDetailsDiv>
              <CardTitle>
                {card.title}
              </CardTitle>
              <CardSubtitle>
                {card.subtitle}
              </CardSubtitle>
            </CardDetailsDiv>
            <CardFooter>
              {card.footer.map((v, idx) => (
                <CardTag
                  key={v.name}
                  buttonColor={themeContext.colors.details.second.color}
                  hoverBackground={themeContext.colors.details.main.color}
                >
                  <span
                    role="link"
                    tabIndex={idx}
                    onClick={() => openUrlInNewTab(v.url)}
                    onKeyDown={() => openUrlInNewTab(v.url)}
                  >
                    {v.name}
                  </span>
                </CardTag>
              ))}
            </CardFooter>

          </Card>
        ))}
      </Flickity>
    </section>
  );
};

export default Achievement;
