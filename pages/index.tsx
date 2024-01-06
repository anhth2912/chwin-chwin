import React from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { HomeScreen } from '@components/screens/HomeScreen'

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
      <HomeScreen />
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'], null, ['en', 'bu'])),
  },
})

export default HomePage
