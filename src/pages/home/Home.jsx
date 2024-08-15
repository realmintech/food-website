import React, {useState} from 'react'
import './Home.css'
import Header from '../../component/header/Header'
import ExploreMenu from '../../component/exploreMenu/ExploreMenu'
import AppDownload from '../../component/appDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState('All')
  return (
    <div className='home'>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <AppDownload />
    </div>
  )
}

export default Home