(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [19],
  {
    '9nVL': function(e, t, a) {
      e.exports = { linkGroup: 'antd-pro-components-editable-link-group-index-linkGroup' };
    },
    bjO7: function(e, t, a) {
      'use strict';
      var l = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
      var d = r(a('2/Rp')),
        n = r(a('lwsE')),
        u = r(a('W8MJ')),
        c = r(a('a1gu')),
        i = r(a('Nsbk')),
        o = r(a('7W2i')),
        s = l(a('q1tI')),
        f = (r(a('17x9')), r(a('9nVL'))),
        m = (function(e) {
          function t() {
            return (
              (0, n.default)(this, t),
              (0, c.default)(this, (0, i.default)(t).apply(this, arguments))
            );
          }
          return (
            (0, o.default)(t, e),
            (0, u.default)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.links,
                    a = e.linkElement,
                    l = e.onAdd;
                  return s.default.createElement(
                    'div',
                    { className: f.default.linkGroup },
                    t.map(function(e) {
                      return (0,
                      s.createElement)(a, { key: 'linkGroup-item-'.concat(e.id || e.title), to: e.href, href: e.href }, e.title);
                    }),
                    s.default.createElement(
                      d.default,
                      { size: 'small', type: 'primary', ghost: !0, onClick: l, icon: 'plus' },
                      '\u6dfb\u52a0'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(s.PureComponent);
      m.defaultProps = { links: [], onAdd: function() {}, linkElement: 'a' };
      var p = m;
      t.default = p;
    },
    't/hC': function(e, t, a) {
      'use strict';
      var l = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('14J3');
      var d = l(a('BMrR'));
      a('jCWc');
      var n = l(a('kPKH'));
      a('IzEo');
      var u = l(a('bx4M'));
      a('Mwp2');
      var c = l(a('VXEj'));
      a('Telt');
      var i,
        o,
        s = l(a('Tckk')),
        f = l(a('lwsE')),
        m = l(a('W8MJ')),
        p = l(a('a1gu')),
        h = l(a('Nsbk')),
        E = l(a('7W2i')),
        v = r(a('q1tI')),
        g = l(a('wd/R')),
        b = a('MuoO'),
        k = l(a('mOP9')),
        y = a('KTCi'),
        w = l(a('bjO7')),
        N = l(a('zHco')),
        j = l(a('wnz0')),
        C = [
          { title: '\u64cd\u4f5c\u4e00', href: '' },
          { title: '\u64cd\u4f5c\u4e8c', href: '' },
          { title: '\u64cd\u4f5c\u4e09', href: '' },
          { title: '\u64cd\u4f5c\u56db', href: '' },
          { title: '\u64cd\u4f5c\u4e94', href: '' },
          { title: '\u64cd\u4f5c\u516d', href: '' },
        ],
        L = ((i = (0, b.connect)(function(e) {
          var t = e.user,
            a = e.project,
            l = e.activities,
            r = e.chart,
            d = e.loading;
          return {
            currentUser: t.currentUser,
            project: a,
            activities: l,
            chart: r,
            currentUserLoading: d.effects['user/fetchCurrent'],
            projectLoading: d.effects['project/fetchNotice'],
            activitiesLoading: d.effects['activities/fetchList'],
          };
        })),
        i(
          (o = (function(e) {
            function t() {
              return (
                (0, f.default)(this, t),
                (0, p.default)(this, (0, h.default)(t).apply(this, arguments))
              );
            }
            return (
              (0, E.default)(t, e),
              (0, m.default)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this.props.dispatch;
                    e({ type: 'user/fetchCurrent' }),
                      e({ type: 'project/fetchNotice' }),
                      e({ type: 'activities/fetchList' }),
                      e({ type: 'chart/fetch' });
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    var e = this.props.dispatch;
                    e({ type: 'chart/clear' });
                  },
                },
                {
                  key: 'renderActivities',
                  value: function() {
                    var e = this.props.activities.list;
                    return e.map(function(e) {
                      var t = e.template.split(/@\{([^{}]*)\}/gi).map(function(t) {
                        return e[t]
                          ? v.default.createElement(
                              'a',
                              { href: e[t].link, key: e[t].name },
                              e[t].name
                            )
                          : t;
                      });
                      return v.default.createElement(
                        c.default.Item,
                        { key: e.id },
                        v.default.createElement(c.default.Item.Meta, {
                          avatar: v.default.createElement(s.default, { src: e.user.avatar }),
                          title: v.default.createElement(
                            'span',
                            null,
                            v.default.createElement(
                              'a',
                              { className: j.default.username },
                              e.user.name
                            ),
                            '\xa0',
                            v.default.createElement('span', { className: j.default.event }, t)
                          ),
                          description: v.default.createElement(
                            'span',
                            { className: j.default.datetime, title: e.updatedAt },
                            (0, g.default)(e.updatedAt).fromNow()
                          ),
                        })
                      );
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.currentUser,
                      a = e.currentUserLoading,
                      l = e.project.notice,
                      r = e.projectLoading,
                      i = e.activitiesLoading,
                      o = e.chart.radarData,
                      f =
                        t && Object.keys(t).length
                          ? v.default.createElement(
                              'div',
                              { className: j.default.pageHeaderContent },
                              v.default.createElement(
                                'div',
                                { className: j.default.avatar },
                                v.default.createElement(s.default, { size: 'large', src: t.avatar })
                              ),
                              v.default.createElement(
                                'div',
                                { className: j.default.content },
                                v.default.createElement(
                                  'div',
                                  { className: j.default.contentTitle },
                                  '\u65e9\u5b89\uff0c',
                                  t.name,
                                  '\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01'
                                ),
                                v.default.createElement('div', null, t.title, ' |', t.group)
                              )
                            )
                          : null,
                      m = v.default.createElement(
                        'div',
                        { className: j.default.extraContent },
                        v.default.createElement(
                          'div',
                          { className: j.default.statItem },
                          v.default.createElement('p', null, '\u9879\u76ee\u6570'),
                          v.default.createElement('p', null, '56')
                        ),
                        v.default.createElement(
                          'div',
                          { className: j.default.statItem },
                          v.default.createElement('p', null, '\u56e2\u961f\u5185\u6392\u540d'),
                          v.default.createElement(
                            'p',
                            null,
                            '8',
                            v.default.createElement('span', null, ' / 24')
                          )
                        ),
                        v.default.createElement(
                          'div',
                          { className: j.default.statItem },
                          v.default.createElement('p', null, '\u9879\u76ee\u8bbf\u95ee'),
                          v.default.createElement('p', null, '2,223')
                        )
                      );
                    return v.default.createElement(
                      N.default,
                      { loading: a, content: f, extraContent: m },
                      v.default.createElement(
                        d.default,
                        { gutter: 24 },
                        v.default.createElement(
                          n.default,
                          { xl: 16, lg: 24, md: 24, sm: 24, xs: 24 },
                          v.default.createElement(
                            u.default,
                            {
                              className: j.default.projectList,
                              style: { marginBottom: 24 },
                              title: '\u8fdb\u884c\u4e2d\u7684\u9879\u76ee',
                              bordered: !1,
                              extra: v.default.createElement(
                                k.default,
                                { to: '/' },
                                '\u5168\u90e8\u9879\u76ee'
                              ),
                              loading: r,
                              bodyStyle: { padding: 0 },
                            },
                            l.map(function(e) {
                              return v.default.createElement(
                                u.default.Grid,
                                { className: j.default.projectGrid, key: e.id },
                                v.default.createElement(
                                  u.default,
                                  { bodyStyle: { padding: 0 }, bordered: !1 },
                                  v.default.createElement(u.default.Meta, {
                                    title: v.default.createElement(
                                      'div',
                                      { className: j.default.cardTitle },
                                      v.default.createElement(s.default, {
                                        size: 'small',
                                        src: e.logo,
                                      }),
                                      v.default.createElement(k.default, { to: e.href }, e.title)
                                    ),
                                    description: e.description,
                                  }),
                                  v.default.createElement(
                                    'div',
                                    { className: j.default.projectItemContent },
                                    v.default.createElement(
                                      k.default,
                                      { to: e.memberLink },
                                      e.member || ''
                                    ),
                                    e.updatedAt &&
                                      v.default.createElement(
                                        'span',
                                        { className: j.default.datetime, title: e.updatedAt },
                                        (0, g.default)(e.updatedAt).fromNow()
                                      )
                                  )
                                )
                              );
                            })
                          ),
                          v.default.createElement(
                            u.default,
                            {
                              bodyStyle: { padding: 0 },
                              bordered: !1,
                              className: j.default.activeCard,
                              title: '\u52a8\u6001',
                              loading: i,
                            },
                            v.default.createElement(
                              c.default,
                              { loading: i, size: 'large' },
                              v.default.createElement(
                                'div',
                                { className: j.default.activitiesList },
                                this.renderActivities()
                              )
                            )
                          )
                        ),
                        v.default.createElement(
                          n.default,
                          { xl: 8, lg: 24, md: 24, sm: 24, xs: 24 },
                          v.default.createElement(
                            u.default,
                            {
                              style: { marginBottom: 24 },
                              title: '\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a',
                              bordered: !1,
                              bodyStyle: { padding: 0 },
                            },
                            v.default.createElement(w.default, {
                              onAdd: function() {},
                              links: C,
                              linkElement: k.default,
                            })
                          ),
                          v.default.createElement(
                            u.default,
                            {
                              style: { marginBottom: 24 },
                              bordered: !1,
                              title: 'XX \u6307\u6570',
                              loading: 0 === o.length,
                            },
                            v.default.createElement(
                              'div',
                              { className: j.default.chart },
                              v.default.createElement(y.Radar, {
                                hasLegend: !0,
                                height: 343,
                                data: o,
                              })
                            )
                          ),
                          v.default.createElement(
                            u.default,
                            {
                              bodyStyle: { paddingTop: 12, paddingBottom: 12 },
                              bordered: !1,
                              title: '\u56e2\u961f',
                              loading: r,
                            },
                            v.default.createElement(
                              'div',
                              { className: j.default.members },
                              v.default.createElement(
                                d.default,
                                { gutter: 48 },
                                l.map(function(e) {
                                  return v.default.createElement(
                                    n.default,
                                    { span: 12, key: 'members-item-'.concat(e.id) },
                                    v.default.createElement(
                                      k.default,
                                      { to: e.href },
                                      v.default.createElement(s.default, {
                                        src: e.logo,
                                        size: 'small',
                                      }),
                                      v.default.createElement(
                                        'span',
                                        { className: j.default.member },
                                        e.member
                                      )
                                    )
                                  );
                                })
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(v.PureComponent))
        ) || o),
        x = L;
      t.default = x;
    },
    wnz0: function(e, t, a) {
      e.exports = {
        activitiesList: 'antd-pro-pages-dashboard-workplace-activitiesList',
        username: 'antd-pro-pages-dashboard-workplace-username',
        event: 'antd-pro-pages-dashboard-workplace-event',
        pageHeaderContent: 'antd-pro-pages-dashboard-workplace-pageHeaderContent',
        avatar: 'antd-pro-pages-dashboard-workplace-avatar',
        content: 'antd-pro-pages-dashboard-workplace-content',
        contentTitle: 'antd-pro-pages-dashboard-workplace-contentTitle',
        extraContent: 'antd-pro-pages-dashboard-workplace-extraContent',
        statItem: 'antd-pro-pages-dashboard-workplace-statItem',
        members: 'antd-pro-pages-dashboard-workplace-members',
        member: 'antd-pro-pages-dashboard-workplace-member',
        projectList: 'antd-pro-pages-dashboard-workplace-projectList',
        cardTitle: 'antd-pro-pages-dashboard-workplace-cardTitle',
        projectGrid: 'antd-pro-pages-dashboard-workplace-projectGrid',
        projectItemContent: 'antd-pro-pages-dashboard-workplace-projectItemContent',
        datetime: 'antd-pro-pages-dashboard-workplace-datetime',
        activeCard: 'antd-pro-pages-dashboard-workplace-activeCard',
      };
    },
  },
]);
