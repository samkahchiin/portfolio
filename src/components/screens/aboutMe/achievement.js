import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { achievementSection } from '../../../data/websiteData';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import {
  Card, CardDetailsDiv, CardFooter,
  CardImageDiv, CardSubtitle,
  CardTitle, Carousel, CardTag, Subtitle,
} from './style/achievement';

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

      <Carousel>
        {achievementSection.cards.map((card) => (
          <Card key={card.title}>
            <Box>
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
            </Box>
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
      </Carousel>

    </section>
  );
};

export default Achievement;
