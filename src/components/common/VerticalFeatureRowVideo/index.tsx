import className from "classnames";
import { useTranslation } from "next-i18next";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  video?: string;
  reverse?: boolean;
};

const VerticalFeatureRowVideo = (props: IVerticalFeatureRowProps) => {
  const { i18n } = useTranslation();

  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  // const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-4xl font-semibold text-[#fff]">{props.title}</h3>
        <div className="mt-6 text-2xl leading-9">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/2 min-h-[280px]">
        {/* {props.language === "bu" ? (
          <video controls key={props.language}>
            <source src="/videos/User-Myanmar-sound.mp4" type="video/mp4" />
          </video>
        ) : (
          <video controls key={props.language}>
            <source src="/videos/User-english-sound.mp4" type="video/mp4" />
          </video>
        )} */}
        <video className="min-h-[280px]" controls key={i18n.language}>
          <source
            src={
              i18n.language === "bu"
                ? "/videos/User-Myanmar-sound.mp4"
                : "/videos/User-english-sound.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export { VerticalFeatureRowVideo };
