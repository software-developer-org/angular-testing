module.exports = {
  name: 'angular-fixtures',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-fixtures',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
