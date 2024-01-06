import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src="/images/logo.png"
        alt="logo image"
        width={100}
        height={100}
        className="h-auto w-[200px]"
      />
    </span>
  );
};

export { Logo };
