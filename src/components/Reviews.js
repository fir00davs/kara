import React from "react";

const Reviews = () => {
  const videos = [
    { id: 1, src: "https://youtube.com/embed/xHwyMRhkems?si=8TRTNikqOqZ4_yDr"  },
    { id: 2, src: "https://youtube.com/embed/yQGfJdn_a9A?si=zNVvmtndtY9GH0KV" },
    { id: 3, src: "https://youtube.com/embed/Zzmuo-SmnQM?si=ON-POWDhUKxy4J9p" },
    { id: 4, src: "https://youtube.com/embed/eEVcEXhhLFU?si=fn-6IfFnawVVKx7P" },
    { id: 5, src: "https://youtube.com/embed/G5JGOqn4V0E?si=ftD0Vid-40a1N2Og" },
    { id: 6, src: "https://youtube.com/embed/ukidrqIIZAM?si=10EfFgC6-GS68D35"}
  ];

  return (
    <div id="reviews" className="container">
      <h1 className="heading">Отзывы</h1>
      <div className="grid-scroll">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <iframe
              className="video-frame"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Reviews;