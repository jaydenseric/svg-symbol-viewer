import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
export default function FileDropZone({ label, onFileDrop }) {
  const [dragging, setDragging] = useState(false);

  const onDragEnter = useCallback(() => {
    setDragging(true);
  }, []);

  const onDragOver = useCallback(() => {
    event.preventDefault();
  }, []);

  const onDragLeave = useCallback(() => {
    setDragging(false);
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      setDragging(false);

      if (event.dataTransfer.files.length > 0)
        onFileDrop(event.dataTransfer.files[0]);
    },
    [onFileDrop]
  );

  return (
    <p
      className={dragging ? 'active' : 'inactive'}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {label}
      <style jsx>{`
        p {
          margin: 0;
          border-size: 0.2em;
          border-style: dashed;
          border-radius: 0.4em;
          padding: 2em;
          text-align: center;
          transition: 0.25s;
        }

        .inactive {
          border-color: black;
        }

        .active {
          border-color: white;
        }
      `}</style>
    </p>
  );
}

FileDropZone.propTypes = {
  label: PropTypes.string.isRequired,
  onFileDrop: PropTypes.func.isRequired,
};
