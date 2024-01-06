

import { VerticalFeatureRow } from '@components/common/VerticalFeatureRow';
import { VerticalFeatureRowVideo } from '@components/common/VerticalFeatureRowVideo';
import { Section } from '@components/layouts/Section'; 


const VerticalFeatures = () => (
  <Section
    title="Welcome New Player"
    description="Any new player who has engaged in at least one betting session and successfully navigated the mapping process on Telegram will be rewarded with 1000 kyats"
  >
    <VerticalFeatureRowVideo
      title="Play Game"
      description="In the demo, users can experience the seamless process of transferring funds to place bets and subsequently withdrawing their winnings"
      // image="/assets/images/feature.svg"
      // imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="View History"
      description="Every individual account maintains comprehensive records, featuring both a detailed history of placed bets and a comprehensive log of withdrawal transactions."
      image="/images/history.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Link With Telegram"
      description="Enable the functionality to link your Telegram account, allowing for a convenient password reset option in the event of a forgotten password."
      image="/images/link_telegram.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
