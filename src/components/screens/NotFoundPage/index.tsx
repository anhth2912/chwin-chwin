import React from 'react'
import { useTranslation } from 'next-i18next'

export const NotFoundPage = () => {
  const { t } = useTranslation(['404'])

  return (
    <>
      <div className="pt-[220px] text-center">
        <p className="text-[from-purple-600]  font-normal text-[11rem] max-xs:text-[8rem] leading-[100%]">404</p>
      </div>
      <div className="text-center">
        <div className="uppercase text-[24px]  text-[#000000] opacity-50 leading-[100%]">
          {t<string>('Error, page not found')}
        </div>
        <div className="mt-[40px] text-[#000000] opacity-70 leading-[180%]">
          {t<string>('The page you requested could not be found.')}
        </div>
        <div className="text-[#000000] opacity-70 leading-[180%]">{t("We're working on it!")}</div>
      </div>
      <div className="w-fit mx-auto mt-[80px] mb-[70px] md:mb-[118px]">
        {/* <ButtonCustom
          label={t<string>('Back to homepage')}
          backgroundGradient={true}
          customClassName="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-[200%_auto]
              hover:bg-[right_center] text-white"
          onClick={backToHome}
        /> */}
      </div>
    </>
  )
}
