import { useCallback, useState } from 'react';
import FileDropZone from './FileDropZone';
import Section from './Section';
import SymbolList from './SymbolList';

// eslint-disable-next-line jsdoc/require-jsdoc
export default function Tool() {
  const [svgFilename, setSvgFilename] = useState(null);
  const [svg, setSvg] = useState(null);
  const [symbols, setSymbols] = useState(null);

  const onFileDrop = useCallback((file) => {
    if (file.type === 'image/svg+xml') {
      setSvgFilename(file.name);

      const reader = new window.FileReader();

      reader.onload = () => {
        const parser = new window.DOMParser();
        const doc = parser.parseFromString(reader.result, 'image/svg+xml');
        const idList = Array.from(doc.querySelectorAll('symbol[id]')).map(
          (element) => element.id
        );

        setSvg(reader.result);
        setSymbols(idList);
      };

      reader.readAsText(file);
    } else {
      setSvgFilename(null);
      setSvg(null);
      setSymbols(null);
    }
  }, []);

  return (
    <main>
      <Section>
        <FileDropZone
          label={svgFilename || 'Drop SVG containing symbols'}
          onFileDrop={onFileDrop}
        />
      </Section>
      {svg !== null && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      {symbols !== null && <SymbolList symbols={symbols} />}
      <style jsx>{`
        main {
          display: block;
        }
        div {
          display: none;
        }
      `}</style>
    </main>
  );
}
