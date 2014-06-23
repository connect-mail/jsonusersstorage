/*
 * jsonusersstorage
 * https://github.com/parroit/jsonusersstorage
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var jsonusersstorage = require('../lib/jsonusersstorage.js');

describe('jsonusersstorage module', function(){
  describe('#awesome()', function(){
    it('should return a hello', function(){
      jsonusersstorage.awesome('livia').should.equal("hello livia");
    });
  });
});
