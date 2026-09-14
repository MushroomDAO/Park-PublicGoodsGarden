/* Park 站点共享脚本：会员状态、渲染工具、Toast */
(function () {
  'use strict';
  var KEY = 'park.member';

  function readMember() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  function writeMember(m) {
    try { m ? localStorage.setItem(KEY, JSON.stringify(m)) : localStorage.removeItem(KEY); } catch (e) {}
  }

  var Park = {
    get member() { return readMember(); },
    /* 返回当前会员对象；未铸造时返回 null。
       注意：调用方普遍按对象使用（member.id），所以这里返回对象本身而不是布尔值。 */
    isMember: function () { return readMember(); },
    mint: function () {
      var hex = '0123456789abcdef', s = '';
      for (var i = 0; i < 8; i++) s += hex[Math.floor(Math.random() * 16)];
      var m = { id: '0x' + s, at: Date.now() };
      writeMember(m);
      return m;
    },
    reset: function () { writeMember(null); },

    toast: function (msg) {
      var t = document.getElementById('toast');
      if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
      t.textContent = msg;
      t.classList.add('show');
      clearTimeout(t._t);
      t._t = setTimeout(function () { t.classList.remove('show'); }, 2400);
    },

    /* 把会员徽章渲染进 header */
    paintBadge: function () {
      var b = document.getElementById('badge');
      if (!b) return;
      var m = readMember();
      var txt = document.getElementById('badgeText');
      if (m) {
        b.className = 'badge on';
        if (txt) txt.textContent = 'SBT #' + m.id.slice(2, 8);
      } else {
        b.className = 'badge';
        if (txt) txt.textContent = '非会员';
      }
    },

    /* 当前页导航高亮 */
    paintNav: function () {
      var here = location.pathname.split('/').pop() || 'index.html';
      Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) {
        if (a.getAttribute('href') === here) a.className = 'on';
      });
    },

    short: function (n) { return n; }
  };

  window.Park = Park;
  document.addEventListener('DOMContentLoaded', function () { Park.paintNav(); Park.paintBadge(); });
})();
