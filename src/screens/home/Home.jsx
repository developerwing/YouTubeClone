import React, { useEffect } from "react";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import SkeletonVideo from '../../components/skeletons/SkeletonVideo'
import Video from "../../components/video/Video";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPopularVideos, getVideosByCategory } from '../../store/videos';

const HomeScreen = () => {
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getPopularVideos('All'))
  }, [dispatch])

  const { videos, activeCategory, loading } = useSelector(
     state => state.homeVideos
  )

  const fetchData = () => {
     if (activeCategory === 'All') dispatch(getPopularVideos('All'))
     else {
        dispatch(getVideosByCategory(activeCategory))
     }
  }

  return (
     <Container>
              {videos.length}
        <CategoriesBar />
        <InfiniteScroll
           dataLength={videos.length}
           next={fetchData}
           hasMore={true}
           loader={
              <div className='spinner-border text-danger d-block mx-auto'></div>
           }
           className='row'>
           {!loading
              ? videos.map((video, index) => (
                   <Col lg={3} md={4} key={index}>
                      <Video video={video} key={video.id} />
                   </Col>
                ))
              : [...Array(20)].map((item, index) => (
                   <Col lg={3} md={4} key={index}>
                     <SkeletonVideo />
                   </Col>
                ))}
        </InfiniteScroll>
     </Container>
  )
}

export default HomeScreen