(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11],
  {
    BOD2: function(e, t, a) {
      e.exports = {
        container: 'antd-pro-layouts-user-layout-container',
        lang: 'antd-pro-layouts-user-layout-lang',
        content: 'antd-pro-layouts-user-layout-content',
        top: 'antd-pro-layouts-user-layout-top',
        header: 'antd-pro-layouts-user-layout-header',
        logo: 'antd-pro-layouts-user-layout-logo',
        title: 'antd-pro-layouts-user-layout-title',
        desc: 'antd-pro-layouts-user-layout-desc',
      };
    },
    jH8a: function(e, t, a) {
      'use strict';
      var l = a('284h'),
        u = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = u(a('lwsE')),
        n = u(a('W8MJ')),
        o = u(a('a1gu')),
        s = u(a('Nsbk')),
        d = u(a('7W2i'));
      a('Pwec');
      var c = u(a('CtXQ')),
        f = l(a('q1tI')),
        i = a('LLXN'),
        m = u(a('mOP9')),
        p = u(a('ggcP')),
        y = u(a('bfXr')),
        g = u(a('BOD2')),
        h = u(a('mxmt')),
        v = [
          { key: 'help', title: (0, i.formatMessage)({ id: 'layout.user.link.help' }), href: '' },
          {
            key: 'privacy',
            title: (0, i.formatMessage)({ id: 'layout.user.link.privacy' }),
            href: '',
          },
          { key: 'terms', title: (0, i.formatMessage)({ id: 'layout.user.link.terms' }), href: '' },
        ],
        E = f.default.createElement(
          f.Fragment,
          null,
          'Copyright ',
          f.default.createElement(c.default, { type: 'copyright' }),
          ' 2018 \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1'
        ),
        k = (function(e) {
          function t() {
            return (
              (0, r.default)(this, t),
              (0, o.default)(this, (0, s.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, d.default)(t, e),
            (0, n.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.children;
                  return f.default.createElement(
                    'div',
                    { className: g.default.container },
                    f.default.createElement(
                      'div',
                      { className: g.default.lang },
                      f.default.createElement(y.default, null)
                    ),
                    f.default.createElement(
                      'div',
                      { className: g.default.content },
                      f.default.createElement(
                        'div',
                        { className: g.default.top },
                        f.default.createElement(
                          'div',
                          { className: g.default.header },
                          f.default.createElement(
                            m.default,
                            { to: '/' },
                            f.default.createElement('img', {
                              alt: 'logo',
                              className: g.default.logo,
                              src: h.default,
                            }),
                            f.default.createElement(
                              'span',
                              { className: g.default.title },
                              'Ant Design'
                            )
                          )
                        ),
                        f.default.createElement(
                          'div',
                          { className: g.default.desc },
                          'Ant Design \u662f\u897f\u6e56\u533a\u6700\u5177\u5f71\u54cd\u529b\u7684 Web \u8bbe\u8ba1\u89c4\u8303'
                        )
                      ),
                      e
                    ),
                    f.default.createElement(p.default, { links: v, copyright: E })
                  );
                },
              },
            ]),
            t
          );
        })(f.default.PureComponent),
        N = k;
      t.default = N;
    },
  },
]);
