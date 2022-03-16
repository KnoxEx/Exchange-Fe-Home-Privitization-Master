// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGetMarket = require('../../../app/controller/getMarket');
import ExportHomePage = require('../../../app/controller/homePage');

declare module 'egg' {
  interface IController {
    getMarket: ExportGetMarket;
    homePage: ExportHomePage;
  }
}
