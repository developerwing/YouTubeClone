import React, { useEffect, useState } from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

import request from '../../store/api';

import moment from "moment";
import numeral from "numeral";

import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || contentDetails?.videoId || id;

  const navigate = useNavigate();

  useEffect(() => {
   const get_video_details = async () => {
      const {
         data: { items },
      } = await request('/videos', {
         params: {
            part: 'contentDetails,statistics',
            id: _videoId,
         },
      })
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
   }
   get_video_details();
}, [_videoId])


const handleVideoClick = () => {
  navigate(`/watch/${_videoId}`);
}

  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video__top">
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="video__top__duration">{_duration}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
        </span>{" "}
        <span> {moment(publishedAt).fromNow()} </span>
      </div>
      {!"tests" && (
        <div className="video__channel">
          <LazyLoadImage src={channelIcon?.url} effect="blur" />

          <p>{channelTitle}</p>
        </div>
      )}
    </div>
  );
};

export default Video;
