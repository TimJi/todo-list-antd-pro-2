(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    '+LeE': function(e, t, a) {
      'use strict';
      var s = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = s(a('MVZn')),
        r = s(a('o0o1')),
        u = a('dCQc'),
        c = {
          namespace: 'monitor',
          state: { tags: [] },
          effects: {
            fetchTags: r.default.mark(function e(t, a) {
              var s, n, c;
              return r.default.wrap(
                function(e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (s = a.call), (n = a.put), (e.next = 3), s(u.queryTags);
                      case 3:
                        return (c = e.sent), (e.next = 6), n({ type: 'saveTags', payload: c.list });
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
            saveTags: function(e, t) {
              return (0, n.default)({}, e, { tags: t.payload });
            },
          },
        };
      t.default = c;
    },
  },
]);
