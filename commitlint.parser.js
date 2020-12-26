// parser-preset.js
module.exports = {
  parserOpts: {
    headerCorrespondence: ['type', 'subject'],
    headerPattern: /^\[(.+)\]\s(.+)$/,
  },
};
