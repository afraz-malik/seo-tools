import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopNav from '../components/navbar/navbar'
import CollageMaker from '../pages/collageMaker/collageMaker'
import HomePage from '../pages/homepage/homepage'
import ImagesToSlider from '../pages/imagesToVideo/imagesToSlides'
import ShotScreen from '../pages/shotScreen/shotScreen'
import VideoCompressPage from '../pages/videoCompress/videoCompress'
import WebAgeChecker from '../pages/webAgeChecker/webAgeChecker'
import BGRemover from "../pages/bgRemover/BGRemover.js"
import QuoteGenerator from "../pages/quoteGenerator/QuoteGenerator.js"
import DAChecker from "../pages/DAChecker/DAChecker.js"
import VideoAudio from "../pages/VideoAudio/VideoAudio.js"
// import Particles from 'react-particles-js'

// const ParticleOption = {
//   particles: {
//     number: {
//       value: 80,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// }
export const routeKeys = [
  {
    path: '/',
    component: <HomePage />,
  },
  {
    path: '/website-age-checker',
    component: <WebAgeChecker />,
  },
  {
    path: '/shot-screen',
    component: <ShotScreen />,
  },
  {
    path: '/collage-maker',
    component: <CollageMaker />,
  },
  {
    path: '/video-compress',
    component: <VideoCompressPage />,
  },
  {
    path: '/images-slide',
    component: <ImagesToSlider />,
  },
  {
    path: '/bg-remover',
    component: <BGRemover/>
  },
  {
    path: '/quotegen',
    component: <QuoteGenerator/>
  },
  {
    path: '/dachecker',
    component: <DAChecker/>
  },

  {
    path: '/vtoa',
    component: <VideoAudio/>
  }



]

const AppRoutes = () => {
  return (
    <>
      <TopNav />
      {/* <Particles className="particles" params={ParticleOption} /> */}
      <Routes>
        {routeKeys.map((r, idx) => (
          <Route path={r.path} key={idx} element={r.component} />
        ))}
      </Routes>
    </>
  )
}

export default AppRoutes
