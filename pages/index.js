import Footer from '../components/Footer';
import GithubLinks from '../components/GithubLinks';
import Header from '../components/Header';
import Page from '../components/Page';
import Tool from '../components/Tool';

const IndexPage = () => (
  <Page
    title="SVG symbol viewer"
    description="An online, no-upload drag-and-drop SVG file symbol extractor and viewer."
  >
    <Header />
    <Tool />
    <Footer>
      <GithubLinks author="jaydenseric" project="svg-symbol-viewer" />
    </Footer>
  </Page>
);

export default IndexPage;
