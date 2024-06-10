import type { NextPage } from 'next'

import Section from '../components/section'
import Layout from '../components/layout'

import About from '../components/about'

import ExperienceContent from '../components/experienceContent'
import ProjectHeader from '../components/projectHeader'

import ProjectContent from '../components/projectContent'
import ExperienceHeader from '../components/experienceHeader'

import TechMarquee from '../components/marquee'

import HomePortrait from '../components/homePortrait'
import HomeContent from '../components/homeContent'

import Contact from '../components/contact'

const Home: NextPage = () => {

  return (
    <Layout title="Jason Chan">

      <Section id='home' classname='relative'>
        <HomeContent />
        <HomePortrait />
      </Section>

      <TechMarquee />

      <Section id='about' colored={true}>
        <About />
      </Section>

      <Section id='experience'>
        <ExperienceHeader />
        <ExperienceContent />
      </Section>

      <Section id='project' colored={true}>
        <ProjectHeader />
        <ProjectContent />
      </Section>

      <Section id='contact'>
        <Contact />
      </Section>

    </Layout >
  )
}

export default Home
