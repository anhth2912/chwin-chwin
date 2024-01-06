import Image from "next/image";
import Link from "next/link";

import { NavbarTwoColumns } from "@components/navigation/NavbarTwoColumns";

import { Background } from "@components/common/background/Background";
import { Button } from "@components/common/button/Button";
import { HeroOneButton } from "@components/common/hero/HeroOneButton";
import { Section } from "@components/layouts/Section";
import { Logo } from "@components/common/logo";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter()

  const changeTo = router.locale === 'en' ? 'bu' : 'en'
  return (
    <Background color="bg-[#070b28]">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Docs</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {/* {'The modern landing page for\n'} */}
              <Image
                src="/images/logo.png"
                alt="logo image"
                width={512}
                height={512}
                className="h-auto w-[512px]"
              />
              <span className="text-primary-500">
                New Betting Game - Play To Win
              </span>
            </>
          }
          description="Play and Join the Contest to win the biggest rewards!"
          button={
            <div className="flex flex-col gap-4">
              <Link href="https://chinchin.club/">
                <Button xl>Get Started</Button>
              </Link>
              <Link href="/" locale={changeTo} >
                <Button xl>{`Change to ${changeTo}`}</Button>
              </Link>
              {/* <div>
                <select
                  id="countries"
                  value={language}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    i18n.changeLanguage(e.target.value, (err, t) => {
                      if (err)
                        return console.log("something went wrong loading", err);
                      setLang(e.target.value);
                      setLanguage(e.target.value);
                    });
                  }}
                  className="inline-block rounded-md text-center outline-none font-extrabold text-xl py-4 px-7 text-white bg-primary-500"
                >
                  <option
                    className="flex justify-center outline-none font-extrabold text-xl py-4 px-7 text-white bg-primary-500"
                    value="en"
                  >
                    English
                  </option>
                  <option
                    className="text-center outline-none font-extrabold text-xl py-4 px-7 text-white bg-primary-500"
                    value="bu"
                  >
                    Burmese
                  </option>
                </select>
              </div> */}
            </div>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
