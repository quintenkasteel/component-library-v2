import path, { join } from 'path';
import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(config);

// app.use('*', (req, res, next) => {
//   let time = new Date();
//   console.log(
//     `${req.method} to ${
//       req.originalUrl
//     } at ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
//   );
//   next();
// });

// app.use(express.static(path.join(__dirname))); This was used previously with express.
app.get('*.js', (req, res) => {
  if (req.header('Accept-Encoding').includes('br')) {
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript');
    res.sendFile(join(__dirname, `${req.url}.br`));
  } else if (req.header('Accept-Encoding').includes('gz')) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    res.sendFile(join(__dirname, `${req.url}.gz`));
  } else {
    res.sendFile.join(__dirname, 'main.js');
  }
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    return res.send(result);
  });
  next();
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  /* eslint no-console: */
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
