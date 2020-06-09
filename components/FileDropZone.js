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
      className={dragging ? 'active' : undefined}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {label}
      <style jsx>{`
        p {
          margin: 0;
          border-size: 4px;
          border-style: dashed;
          border-radius: 8px;
          padding: 2em;
          font-weight: bold;
        }

        .active {
          border-color: hsl(
            var(--daui-interact-hue),
            var(--daui-interact-saturation),
            calc(var(--daui-interact-lightness) + 20%)
          );
        }
      `}</style>
    </p>
  );
}

FileDropZone.propTypes = {
  label: PropTypes.string.isRequired,
  onFileDrop: PropTypes.func.isRequired,
};
