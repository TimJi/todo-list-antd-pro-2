(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [39],
  {
    GsTM: function(e, t, r) {
      'use strict';
      var n = r('TqRt'),
        a = r('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), r('IzEo');
      var u = n(r('bx4M'));
      r('T2oS');
      var i = n(r('W9HT'));
      r('+L6B');
      var l,
        o,
        d = n(r('2/Rp')),
        c = n(r('lwsE')),
        f = n(r('W8MJ')),
        s = n(r('a1gu')),
        g = n(r('Nsbk')),
        p = n(r('7W2i')),
        E = a(r('q1tI')),
        y = r('MuoO'),
        v = n(r('uUKN')),
        h = ((l = (0, y.connect)(function(e) {
          return { isloading: e.error.isloading };
        })),
        l(
          (o = (function(e) {
            function t() {
              var e, r;
              (0, c.default)(this, t);
              for (var n = arguments.length, a = new Array(n), u = 0; u < n; u++)
                a[u] = arguments[u];
              return (
                (r = (0, s.default)(this, (e = (0, g.default)(t)).call.apply(e, [this].concat(a)))),
                (r.state = { isloading: !1 }),
                (r.triggerError = function(e) {
                  r.setState({ isloading: !0 });
                  var t = r.props.dispatch;
                  t({ type: 'error/query', payload: { code: e } });
                }),
                r
              );
            }
            return (
              (0, p.default)(t, e),
              (0, f.default)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.state.isloading;
                    return E.default.createElement(
                      u.default,
                      null,
                      E.default.createElement(
                        i.default,
                        { spinning: t, wrapperClassName: v.default.trigger },
                        E.default.createElement(
                          d.default,
                          {
                            type: 'danger',
                            onClick: function() {
                              return e.triggerError(401);
                            },
                          },
                          '\u89e6\u53d1401'
                        ),
                        E.default.createElement(
                          d.default,
                          {
                            type: 'danger',
                            onClick: function() {
                              return e.triggerError(403);
                            },
                          },
                          '\u89e6\u53d1403'
                        ),
                        E.default.createElement(
                          d.default,
                          {
                            type: 'danger',
                            onClick: function() {
                              return e.triggerError(500);
                            },
                          },
                          '\u89e6\u53d1500'
                        ),
                        E.default.createElement(
                          d.default,
                          {
                            type: 'danger',
                            onClick: function() {
                              return e.triggerError(404);
                            },
                          },
                          '\u89e6\u53d1404'
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(E.PureComponent))
        ) || o),
        w = h;
      t.default = w;
    },
    uUKN: function(e, t, r) {
      e.exports = { trigger: 'antd-pro-pages-exception-style-trigger' };
    },
  },
]);
