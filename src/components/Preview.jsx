import { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';

export const Preview = ({ previewStream }) => {
  const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current && stream) {
        videoRef.current.srcObject = stream;
      }
    });

    if (stream) {
      return (
        <video ref={videoRef} width="100%" height="380px" controls autoPlay />
      );
    }

    return <video width="100%" height="380px" controls />;
  };

  return (
    <Card
      style={{
        width: '90%',
        margin: 'auto',
        maxWidth: '600px',
        height: '420px',
      }}
    >
      <Card.Body>
        <VideoPreview stream={previewStream} />
      </Card.Body>
    </Card>
  );
};
