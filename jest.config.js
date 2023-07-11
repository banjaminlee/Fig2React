module.exports = {
  testEnvironment: 'node',
  testEnvironment: "jsdom",
  testURL:"http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/empty.js",
    "\\.(css|less|scss)$": "<rootDir>/jest/style.js"
  }
};