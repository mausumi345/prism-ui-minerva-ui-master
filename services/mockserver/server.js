// Load node.js package libraries.
let request = require('request'),
    express = require('express'),
    expressWinston = require('express-winston'),
    http = require('http'),
    path = require('path'),
    us = require('underscore'),
    cookieParser = require('cookie-parser');

const app = express();
const shell = require('child_process').execSync;

// Load external configuration.
// Local Config
//-------------
const env = {
  app: {
  }
};
// Initialize logger
const logger = require('./logger')(env);

app.use(expressWinston.logger({
  colorize: true,
  expressFormat: true,
  meta: false,
  statusLevels: true,
  winstonInstance: logger
}));
app.use(cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);


// The REST APIs
const server_dir = '.';
const mockData = `${server_dir}/mock_data`;
const apiURL = '/api/nutanix/v3';

app.post(new RegExp(`${apiURL}/groups`), function(req, res, next) {
  const entityType = req.body.entity_type;
  if ( entityType === 'category') {
    res.sendfile(`${mockData}/network_service_provider_categories.json`);
  } else {
    res.sendfile(`${mockData}/groups_${entityType}s.json`);
  }
});

app.post(`${apiURL}/file_servers/list`, function(req, res, next) {
  const entityType = req.body.kind;
  res.sendfile(`${mockData}/${entityType}_list.json`);
});

app.post(`${apiURL}/category/query`, function(req, res, next) {
  res.sendfile(`${mockData}/category_query.json`);
});

app.listen(5000, () => console.log('Minerva Files  - Mock API server listening on port 5000!'));
