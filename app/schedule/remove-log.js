const { removeLogConfig, removeLog } = require('blockchain-ui-privatization/node/schedule/remove-log');

module.exports = {
  schedule: removeLogConfig,
  async task(ctx) {
    removeLog(ctx);
  },
};
