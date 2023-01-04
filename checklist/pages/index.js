import Head from 'next/head'
//import { Inter } from '@next/font/google'
import Menu from '../components/menu/menu.js'
import Notepad from '../components/notepad/notepad.js'
import * as S from './style.js'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Checklist</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Main>
        <Menu></Menu>
        <Notepad></Notepad>
      </S.Main>
    </>
  )
}
