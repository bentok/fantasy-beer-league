const logger = require('tracer').colorConsole({
  format : "{{title}}: {{timestamp}} (in {{file}}:{{line}}) {{message}}",
  dateformat : "HH:MM:ss.L"
});

module.exports = logger;