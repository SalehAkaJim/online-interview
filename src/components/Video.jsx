import Card from 'react-bootstrap/Card';

export const Video = ({ mediaBlobUrl }) => {
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
        <video
          src={mediaBlobUrl}
          width="100%"
          height="380px"
          controls
          autoPlay
        />
      </Card.Body>
    </Card>
  );
};
