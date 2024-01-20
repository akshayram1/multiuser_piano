import React from 'react'
import Piano from './piano'
import { ExampleWrapper } from '../components/ExampleWrapper'

/*
 * Check in piano.tsx for the live piano code and guided comments
 */

const info = {
  title: 'Live piano',
  description: 'Open in multiple windows, or share the link, to play piano live with others.',
  githubHref: 'https://github.com/akshayram1/piano',
  codeSandboxHref: '',
  twitterHref: 'https://instagram.com/akshay_chame',
  hide: false
}

const meta = {
  title: 'Live Piano — A shared piano that multiple users can play at once • ctnicholas.dev',
  description: 'Open in multiple windows, or share the link, to play piano live with others.',
  image: 'https://livepiano.ctnicholas.dev/screenshot.png',
  url: 'https://multiuser-piano.vercel.app/?room=aa669ccd1e23e78616c64',
  author: 'https://github.com/akshayram1',
  twitter: '@ctnicholasdev'
}

export default function Home (props: any) {
  return (
    <ExampleWrapper info={info} meta={meta} {...props}>
      <Piano />
    </ExampleWrapper>
  )
}

export async function getStaticProps () {
  return {
    props: {
      isRunningOnCodeSandbox: process.env.CODESANDBOX_SSE != null,
      hasSetupLiveblocksKey: process.env.LIVEBLOCKS_SECRET_KEY != null
    }
  }
}
