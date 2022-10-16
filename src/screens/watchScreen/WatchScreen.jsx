import React, {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Comments from "../../components/comments/Comments";
import './_watchScreen.scss'
import { useParams } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getVideoById, getRelatedVideos } from '../../store/videos';

function WatchScreen() {
  const { video, loading } = useSelector(state => state.selectedVideo)
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getVideoById(id));
     dispatch(getRelatedVideos(id));

     // dispatch(getRelatedVideos(id))
  }, [dispatch, id])

  const { videos, loading: relatedVideosLoading } = useSelector(
   state => state.relatedVideos
)


  return (
    <Row className="ms-4">
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
             src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title="New Video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData video={video} videoId={id} />
        <Comments />
      </Col>
      <Col lg={4}>
            {!loading ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal video={video} key={video.id.videoId} />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )}
         </Col>
    </Row>
  );
}

export default WatchScreen;
