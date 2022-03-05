import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopNav from '../components/navbar/navbar'
import CollageMaker from '../pages/collageMaker/collageMaker'
import HomePage from '../pages/homepage/homepage'
import ImagesToSlider from '../pages/imagesToVideo/imagesToSlides'
import ShotScreen from '../pages/shotScreen/shotScreen'
import VideoCompressPage from '../pages/videoCompress/videoCompress'
import WebAgeChecker from '../pages/webAgeChecker/webAgeChecker'
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
