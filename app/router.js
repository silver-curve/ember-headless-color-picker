import EmberRouter from '@ember/routing/router';
import config from 'ember-headless-color-picker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
