import React, { useState } from "react";
import {
  FaTimes,
  FaImage,
  FaProjectDiagram,
  FaCaretDown,
} from "react-icons/fa";
const PostType = {
  PROJECT: "PROJECT",
  POST: "POST",
};
const initialValues = {
  title: "",
  content: "",
  type: PostType.POST,
  linkUrl: "",
};
const PostCreatorProps = {
  avatarUrl: "",
  username: "",
  onClose: () => {},
  onPost: (content, title, projectUrl) => {},
};

export default function PostCreator({ avatarUrl, username, onClose, onPost }) {
  const [showTitleDropdown, setShowTitleDropdown] = useState(false);
  const [showProjectUrl, setShowProjectUrl] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  const handlePost = () => {
    onPost(content, title, projectUrl);
    setContent("");
    setTitle("");
    setProjectUrl("");
    setShowProjectUrl(false);
  };

  const toggleProjectUrl = () => {
    setShowProjectUrl(!showProjectUrl);
    if (showProjectUrl) {
      setProjectUrl("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.userInfo}>
          <img src={avatarUrl} alt={username} style={styles.avatar} />
          <span style={styles.username}>{username}</span>
        </div>
        <button onClick={onClose} style={styles.closeButton}>
          <FaTimes />
        </button>
      </div>

      <div style={styles.titleSection}>
        <button
          onClick={() => setShowTitleDropdown(!showTitleDropdown)}
          style={styles.dropdownButton}
        >
          {title || "Add a title"} <FaCaretDown />
        </button>
        {showTitleDropdown && (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            style={styles.titleInput}
          />
        )}
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What do you want to talk about?"
        style={styles.contentTextarea}
      />

      {showProjectUrl && (
        <input
          type="url"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
          placeholder="Enter project URL"
          style={styles.projectUrlInput}
        />
      )}

      <div style={styles.footer}>
        <div>
          <button style={styles.iconButton}>
            <FaImage />
          </button>
          <button onClick={toggleProjectUrl} style={styles.iconButton}>
            <FaProjectDiagram />
          </button>
        </div>
        <button
          onClick={handlePost}
          style={styles.postButton}
          disabled={!content.trim()}
        >
          Post
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "500px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "8px",
  },
  username: {
    fontWeight: "bold",
  },
  closeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
  },
  titleSection: {
    marginBottom: "16px",
  },
  dropdownButton: {
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px",
    cursor: "pointer",
    width: "100%",
    justifyContent: "space-between",
  },
  titleInput: {
    width: "100%",
    padding: "8px",
    marginTop: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  contentTextarea: {
    width: "100%",
    minHeight: "100px",
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    resize: "vertical",
  },
  projectUrlInput: {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    marginRight: "8px",
  },
  postButton: {
    background: "#0a66c2",
    color: "white",
    border: "none",
    borderRadius: "24px",
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
