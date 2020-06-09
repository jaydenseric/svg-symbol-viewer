import Page from '../components/Page';
import SvgSymbolViewer from '../components/SvgSymbolViewer';

const IndexPage = () => (
  <Page
    title="SVG symbol viewer"
    description="An online, no-upload drag-and-drop SVG file symbol extractor and viewer."
  >
    <SvgSymbolViewer />
  </Page>
);

export default IndexPage;
