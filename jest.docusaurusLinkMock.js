const React = require('react');

function DocusaurusLinkMock({to, href, children, ...props}) {
  return React.createElement('a', {href: to ?? href ?? '#', ...props}, children);
}

module.exports = DocusaurusLinkMock;
module.exports.default = DocusaurusLinkMock;
