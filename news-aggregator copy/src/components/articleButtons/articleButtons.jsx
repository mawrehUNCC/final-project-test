import "./articleButtons.css";
import React, { useState } from 'react';
import thumbsUpIcon from '../../assets/thumbs-up.svg';
import thumbsDownIcon from '../../assets/thumbs-down.svg';
import shareIcon from '../../assets/share.svg';
import commentIcon from '../../assets/comment.svg';
import goodIcon from '../../assets/good.svg';
import warningIcon from '../../assets/warning.svg';
import badIcon from '../../assets/bad.svg';

function ArticleButtons() {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prev) => [...prev, notification]);
    setTimeout(() => {
      setNotifications((prev) => prev.slice(1));
    }, 3000); // Remove notification after 3 seconds
  };

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    if (disliked) setDisliked(false); // Reset dislike if liked

    if (newLiked) {
      addNotification({
        backgroundColor: "#008078",
        textColor: "white",
        iconColor: "white",
        icon: goodIcon,
        text: "We'll recommend more stories like this",
      });
    } else {
      addNotification({
        backgroundColor: "#FFEB0B",
        textColor: "#1A1A1A",
        iconColor: "#1A1A1A",
        icon: warningIcon,
        text: "It's okay to change your mind",
      });
    }
  };

  const handleDislike = () => {
    const newDisliked = !disliked;
    setDisliked(newDisliked);
    if (liked) setLiked(false); // Reset like if disliked

    if (newDisliked) {
      addNotification({
        backgroundColor: "#EF4056",
        textColor: "#1A1A1A",
        iconColor: "#1A1A1A",
        icon: badIcon,
        text: "We won't recommend stories like this",
      });
    } else {
      addNotification({
        backgroundColor: "#FFEB0B",
        textColor: "#1A1A1A",
        iconColor: "#1A1A1A",
        icon: warningIcon,
        text: "It's okay to change your mind",
      });
    }
  };

  const handleShare = () => {
    alert("Share modal opened!"); // Replace with modal logic
  };

  const handleComment = () => {
    alert("Comment modal opened!"); // Replace with modal logic
  };

  return (
    <div className="article-buttons">
      <div className="notifications-container" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        {notifications.map((notif, index) => (
          <div
            key={index}
            className="notification"
            style={{
              backgroundColor: notif.backgroundColor,
              color: notif.textColor,
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={notif.icon}
              alt="Notification Icon"
              style={{ fill: notif.iconColor, marginRight: '10px', width: '20px', height: '20px' }}
            />
            <span>{notif.text}</span>
          </div>
        ))}
      </div>
      <button 
        className={`action-btn ${liked ? 'active' : ''}`} 
        onClick={handleLike}
        aria-label="Like"
      >
        <img src={thumbsUpIcon} alt="Thumbs Up" />
        <span className="tooltip">I like this</span>
      </button>
      <button 
        className={`action-btn ${disliked ? 'active' : ''}`} 
        onClick={handleDislike}
        aria-label="Dislike"
      >
        <img src={thumbsDownIcon} alt="Thumbs Down" />
        <span className="tooltip">Not for me</span>
      </button>
      <button 
        className="action-btn" 
        onClick={handleShare}
        aria-label="Share"
      >
        <img src={shareIcon} alt="Share" />
        <span className="tooltip">Share this</span>
      </button>
      <button 
        className="action-btn" 
        onClick={handleComment}
        aria-label="Comment"
      >
        <img src={commentIcon} alt="Comment" />
        <span className="tooltip">Talk about it</span>
      </button>
    </div>
  );
}

export default ArticleButtons;