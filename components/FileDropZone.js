import classNameProp from 'class-name-prop';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import styles from './FileDropZone.module.css';

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
      className={classNameProp(styles.p, dragging && styles.active)}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {label}
    </p>
  );
}

FileDropZone.propTypes = {
  label: PropTypes.string.isRequired,
  onFileDrop: PropTypes.func.isRequired,
};
