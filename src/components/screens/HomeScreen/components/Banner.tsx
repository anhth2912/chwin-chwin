import { CTABanner } from '@components/common/CTABanner';
import { Button } from '@components/common/button/Button';
import { Section } from '@components/layouts/Section';
import { AppConfig } from '@utils/AppConfig';
import Link from 'next/link';



const Banner = () => (
  <Section>
    <CTABanner
      title={`${AppConfig.title} - ${AppConfig.description}`}
      subtitle="Start to get bonus"
      button={
        <Link href="https://chinchin.club/">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
