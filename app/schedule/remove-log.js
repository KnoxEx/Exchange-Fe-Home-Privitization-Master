const { removeLogConfig, removeLog } = require('BlockChain-ui-privatization/node/schedule/remove-log');

module.exports = {
  schedule: removeLogConfig,
  async task(ctx) {
    removeLog(ctx);
  },
};
