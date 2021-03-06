/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: User starts on organizations', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('visits /', function() {
    beforeEach(function() {
      visit('/');
    });

    it('transitions to /organizations', function() {
      expect(currentURL()).to.equal('/organizations');
    });
  });
});
