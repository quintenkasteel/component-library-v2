// import { hot } from 'react-hot-loader/root';
import React, { Suspense } from 'react';
import '../scss/styles.scss';
import Row from './Layout/Row';
import Layout from './Layout/layout';
import Col from './Layout/Column';
import Grid from './Layout/Grid';
import Container from './Layout/Container';
// import Link from "./components/Link";
// import Divider from "./components/Divider";
const Button = React.lazy(() => import('./components/button/Button'));
// import Image from './components/Image';
const Heading = React.lazy(() => import('./components/Heading'));
const Text = React.lazy(() => import('./components/Text'));
// import Video from "./components/Video"
const Input = React.lazy(() => import('./components/Form/Inputs/Input'));
const Checkbox = React.lazy(() => import('./components/Form/Inputs/Checkbox'));
const Radio = React.lazy(() => import('./components/Form/Inputs/Radio'));
const ColorPicker = React.lazy(() => import('./components/Form/Inputs/ColorPicker'));
const DateSelect = React.lazy(() => import('./components/Form/Inputs/DatePicker'));
const Tel = React.lazy(() => import('./components/Form/Inputs/Tel'));
const Select = React.lazy(() => import('./components/Form/Inputs/Select'));
const Accordion = React.lazy(() => import('./components/Accordion'));
const Tabs = React.lazy(() => import('./components/Tabs'));
const Progress = React.lazy(() => import('./components/Progress'));
const Modal = React.lazy(() => import('./components/Modal'));
const Sticky = React.lazy(() => import('./components/Sticky'));
const PageProgress = React.lazy(() => import('./components/PageProgress'));
const MasonryGrid = React.lazy(() => import('./Layout/masonry-grid/MasonryGrid'));
const Slider = React.lazy(() => import('./components/Slider'));
const Cart = React.lazy(() => import('./Layout/Store/Cart/Cart'));
const Products = React.lazy(() => import('./Layout/Store/Products'));
const StoreProvider = React.lazy(() => import('./Layout/Store/Context/StoreProvider'));
const Checkout = React.lazy(() => import('./Layout/Store/Cart/Checkout'));

const App = () => (
  <Layout>
    <Container>
      <Grid>
        <Row>
          <Col width={6}>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h1">Heading 1</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h2">Heading 2</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h3">Heading 3</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h4">Heading 4</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h5">Heading 5</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h6">Heading 6</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="p">Heading P</Heading>
            </Suspense>
          </Col>
          <Col width={6}>
            <Suspense fallback={<p>loading</p>}>
              <Text>
                <ul>
                  <li>Heading P</li>
                  <li>Heading P</li>
                  <li>Heading P</li>
                  <li>Heading P</li>
                </ul>
              </Text>
            </Suspense>
          </Col>
        </Row>

        <Row>
          <Col width={12}>
            <Suspense fallback={<p>loading</p>}>
              <Heading underlined heading="h1">
                Buttons
              </Heading>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col width={4}>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h2">Large Buttons</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary to={'/'}>
                Primary
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary disabled to={'/'}>
                Primary Disabled
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary light to={'/'}>
                Primary Light
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary disabled light to={'/'}>
                Light Disabled
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary inverse to={'/'}>
                Primary Inverse
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary disabled inverse to={'/'}>
                Inverse Disabled
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary to={'/'}>
                With Icon
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" primary disabled to={'/'}>
                With Icon Disabled
              </Button>
            </Suspense>
          </Col>
          <Col width={4}>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h2">Small Buttons</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary to={'/'}>
                Small Primary
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary disabled to={'/'}>
                Small Primary
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary light to={'/'}>
                Small Primary Light
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary disabled light to={'/'}>
                {' '}
                Disabled
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary inverse to={'/'}>
                Small Primary Inverse
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary disabled inverse to={'/'}>
                Disabled
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary to={'/'}>
                With Icon
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button width="50%" small primary disabled to={'/'}>
                With Icon Disabled
              </Button>
            </Suspense>
          </Col>
          <Col width={4}>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h2">Other Buttons</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary to={'/'}>
                Primary
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary disabled to={'/'}>
                Primary
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary light to={'/'}>
                Primary Light
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary disabled light to={'/'}>
                Primary Light
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary inverse to={'/'}>
                Primary Inverse
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary disabled inverse to={'/'}>
                Primary Inverse
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary to={'/'}>
                With Icon
              </Button>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Button primary disabled to={'/'}>
                With Icon
              </Button>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col width={12}>
            <Suspense fallback={<p>loading</p>}>
              <Heading underlined heading="h1">
                Form fields
              </Heading>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col width={4}>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h2">Normal Inputs</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Input type="email" placeholder="Email placeholder" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Input type="password" placeholder="Password placeholder" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Input type="text" placeholder="Text placeholder" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Input type="email" error="error" placeholder="Email placeholder" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Input type="password" error="error" placeholder="Password placeholder" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Input type="text" error="error" placeholder="Text placeholder" />
            </Suspense>
          </Col>
          <Col width={4}>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h2">Select Inputs</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <ColorPicker />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Tel />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <DateSelect />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Select searchable multiselect title="Dropdown Select" />
            </Suspense>
          </Col>
          <Col width={4}>
            <Suspense fallback={<p>loading</p>}>
              <Heading heading="h2">Normal Inputs</Heading>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Checkbox label="Checkbox" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Checkbox disabled label="Checkbox" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Checkbox toggle label="Checkbox Toggle" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Checkbox toggle disabled label="Checkbox Toggle Disabled" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="first" label="Radio Field" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="first" label="Radio Field" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="second" disabled label="Radio Field disabled" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="second" disabled label="Radio Field disabled" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="third" toggle label="Radio Field Switch" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="third" toggle label="Radio Field Switch" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="fourth" toggle disabled label="Radio Field Switch disabled" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Radio name="fourth" toggle disabled label="Radio Field Switch disabled" />
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col width={6}>
            <Suspense fallback={<p>loading</p>}>
              <Accordion label="Accordion 1">
                <p>test</p>
              </Accordion>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Accordion label="Accordion 2">
                <p>test</p>
              </Accordion>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Accordion label="Accordion 3">
                <p>test</p>
              </Accordion>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Accordion label="Accordion 4">
                <p>test</p>
              </Accordion>
            </Suspense>
          </Col>
          <Col width={6}>
            <Suspense fallback={<p>loading</p>}>
              <Tabs selected={1}>
                <div title="first">This is the first panel</div>
                <div title="second">This is the second panel</div>
                <div title="third">This is the third panel</div>
              </Tabs>
            </Suspense>
          </Col>
        </Row>
        <Row>
          <Col width={6}>
            <Suspense fallback={<p>loading</p>}>
              <Progress percent={60} color="blue" />
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Modal>
                <Heading heading="h4">Heading 4</Heading>
              </Modal>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <Sticky fixed top right from={100}>
                <Heading heading="h3">this is stick</Heading>
              </Sticky>
            </Suspense>
            <Suspense fallback={<p>loading</p>}>
              <PageProgress />
            </Suspense>
          </Col>
          <Col width={6}></Col>
        </Row>
        <Row>
          <Col width={12}>
            <Suspense fallback={<p>loading</p>}>
              <Slider slideCount={1} showCount={3}>
                <div>
                  <img src="https://source.unsplash.com/user/erondu" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/user/hayleykimdesign" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/collection/8469893" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/random" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/user/jeannerosegomez" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/user/osillbury" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/collection/1758353" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/collection/1118894" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/collection/1360971" />
                </div>
              </Slider>
            </Suspense>
          </Col>
          <Col>
            <Suspense fallback={<p>loading</p>}>
              <StoreProvider>
                <Products />
                <Cart />
                <Checkout />
              </StoreProvider>
            </Suspense>
          </Col>
        </Row>
      </Grid>
      <Suspense fallback={<p>loading</p>}>
        <MasonryGrid columnsLg={4}>
          <div>Masonry item 1</div>
          <div>Masonry item 2</div>
          <div>Masonry item 3</div>
          <div>Masonry item 4</div>
          <div>Masonry item 5</div>
          <div>Masonry item 6</div>
          <div>Masonry item 7</div>
          <div>Masonry item 8</div>
          <div>Masonry item 9</div>
          <div>Masonry item 10</div>
          <div>Masonry item 11</div>
        </MasonryGrid>
      </Suspense>
    </Container>
  </Layout>
);

export default App;
