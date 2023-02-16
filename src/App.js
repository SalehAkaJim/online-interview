import { ReactMediaRecorder } from 'react-media-recorder';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

import './App.css';
import { Preview } from './components/Preview';
import { Video } from './components/Video';

import { useState } from 'react';

function App() {
  const [showPreview, setShowPreview] = useState(true);
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      <ReactMediaRecorder
        video
        render={({
          previewStream,
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
        }) => (
          <div>
            {showPreview ? (
              <Preview previewStream={previewStream} />
            ) : (
              <Video mediaBlobUrl={mediaBlobUrl} />
            )}

            <br />

            {!started ? (
              <Button
                variant="primary"
                onClick={() => {
                  startRecording();
                  setStarted(true);
                }}
              >
                Start Recording
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  stopRecording();
                  setShowPreview(false);
                  setStarted(false);
                }}
              >
                Stop Recording
              </Button>
            )}

            <br />
            <br />

            <p>{status}</p>
          </div>
        )}
      />
    </div>
  );
}

export default App;
