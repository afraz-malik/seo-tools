import React from 'react'
import { Link } from 'react-router-dom'
import polygon from '../../assets/img/Polygon.png'
import Styles from './homepage.module.css'
const tools = [
  {
    id: 1,
    name: 'Website Age Checker',
    path: '/website-age-checker',
  },
  {
    id: 2,
    name: 'Website Screen Shot Generator',
    path: '/shot-screen',
  },
  {
    id: 3,
    name: 'Collage Maker',
    path: '/collage-maker',
  },
  {
    id: 4,
    name: 'Video Compress',
    path: '/video-compress',
  },
  {
    id: 5,
    name: 'Images to SlideShow',
    path: '/images-slide',
  },
  {
    id: 6,
    name: 'Background Remover',
    path: '/bg-remover',
  },
  {
    id: 7,
    name: 'Quote Generator',
    path: '/quotegen',
  },
  {
    id: 8,
    name: 'Domain Authority',
    path: '/dachecker',
  },
  {
    id:9,
    name: 'Video to Audio Converter',
    path:'/vtoa'
  }
]
const HomePage = () => {
  return (
    <div className={Styles.container}>
      <h1>Test Tools</h1>
      <div className={Styles.tools}>
        {tools.map((tool) => (
          <div className={Styles.tool}>
            <img src={polygon}></img>
            <Link className={Styles.link} to={tool.path} key={tool.id}>
              <div>{tool.name}</div>
              {/* <i class="fa-solid fa-earth-asia"></i> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
