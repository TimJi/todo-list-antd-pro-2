(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    LY9D: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(a('MVZn')),
        c = n(a('o0o1')),
        s = a('dCQc'),
        o = {
          namespace: 'profile',
          state: {
            basicGoods: [],
            advancedOperation1: [],
            advancedOperation2: [],
            advancedOperation3: [],
          },
          effects: {
            fetchBasic: c.default.mark(function e(t, a) {
              var n, r, o;
              return c.default.wrap(
                function(e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n = a.call), (r = a.put), (e.next = 3), n(s.queryBasicProfile);
                      case 3:
                        return (o = e.sent), (e.next = 6), r({ type: 'show', payload: o });
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            }),
            fetchAdvanced: c.default.mark(function e(t, a) {
              var n, r, o;
              return c.default.wrap(
                function(e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (n = a.call), (r = a.put), (e.next = 3), n(s.queryAdvancedProfile);
                      case 3:
                        return (o = e.sent), (e.next = 6), r({ type: 'show', payload: o });
                      case 6:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            }),
          },
          reducers: {
            show: function(e, t) {
              var a = t.payload;
              return (0, r.default)({}, e, a);
            },
          },
        };
      t.default = o;
    },
  },
]);
