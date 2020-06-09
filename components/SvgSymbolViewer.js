import { Heading, Margin, Toggle } from 'device-agnostic-ui';
import { useCallback, useState } from 'react';
import FileDropZone from './FileDropZone';
import Header from './Header';
import IconSvgSymbolViewer from './IconSvgSymbolViewer';
import Section from './Section';
import SymbolList from './SymbolList';

// eslint-disable-next-line jsdoc/require-jsdoc
export default function SvgSymbolViewer() {
  const [svgFilename, setSvgFilename] = useState(null);
  const [svg, setSvg] = useState(null);
  const [symbols, setSymbols] = useState(null);
  const [displayStrokes, setDisplayStrokes] = useState(true);
  const [displayFills, setDisplayFills] = useState(true);

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

  const onChangeToggleDisplayStrokes = useCallback(() => {
    setDisplayStrokes(!displayStrokes);
  }, [displayStrokes]);

  const onChangeToggleDisplayFills = useCallback(() => {
    setDisplayFills(!displayFills);
  }, [displayFills]);

  return (
    <Section>
      <Header>
        <Heading size={1}>
          <IconSvgSymbolViewer /> SVG symbol viewer
        </Heading>
      </Header>
      <Margin>
        <FileDropZone
          label={svgFilename || 'Drop SVG containing symbols…'}
          onFileDrop={onFileDrop}
        />
      </Margin>
      {svg !== null && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      {symbols !== null && (
        <>
          <Margin>
            <Toggle
              title="Display SVG strokes"
              inputProps={{
                type: 'checkbox',
                checked: displayStrokes,
                onChange: onChangeToggleDisplayStrokes,
              }}
            >
              Strokes
            </Toggle>
            <Toggle
              title="Display SVG fills"
              inputProps={{
                type: 'checkbox',
                checked: displayFills,
                onChange: onChangeToggleDisplayFills,
              }}
            >
              Fills
            </Toggle>
          </Margin>
          <SymbolList
            symbols={symbols}
            displayStrokes={displayStrokes}
            displayFills={displayFills}
          />
        </>
      )}
      <style jsx>{`
        div {
          display: none;
        }
      `}</style>
    </Section>
  );
}
