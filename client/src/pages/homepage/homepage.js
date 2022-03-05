import React from 'react'
import { Link } from 'react-router-dom'

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
]
const HomePage = () => {
  return (
    <div>
      <h1>Test Tools</h1>
      <div className="tools">
        {tools.map((tool) => (
          <div class="octagon">
            <Link to={tool.path} key={tool.id}>
              <div class="inner">{tool.name}</div>
              <i class="fa-solid fa-earth-asia"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
