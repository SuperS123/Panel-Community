/* eslint-disable no-shadow */
/* eslint-disable no-var */
/* eslint-disable no-undef */
// to this work do "import './assets/js/livechats.js';" in vue file

const { livechat } = require('../../../../../../../config/core.json');

const lc = livechat.livechatv;
let d = document;
let s = d.createElement('script');
if (livechat.enabled) {
	switch (lc) {
	case 'livechatinc':

		window.__lc = window.__lc || {};
		window.__lc.license = livechat.api;
		(function(n, t, c) { function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n); } var e = { _q: [], _h: null, _v: '2.0', on: function() { i(['on', c.call(arguments)]); }, once: function() { i(['once', c.call(arguments)]); }, off: function() { i(['off', c.call(arguments)]); }, get: function() { if (!e._h) throw new Error('[LiveChatWidget] You can\'t use getters before load.'); return i(['get', c.call(arguments)]); }, call: function() { i(['call', c.call(arguments)]); }, init: function() { const n = t.createElement('script'); n.async = !0, n.type = 'text/javascript', n.src = 'https://cdn.livechatinc.com/tracking.js', t.head.appendChild(n); } }; !n.__lc.asyncInit && e.init(), n.LiveChatWidget = n.LiveChatWidget || e; }(window, document, [].slice));

		break;

	case 'chatra':

		(function(d, w, c) {
			w.ChatraID = livechat.api;
			const s = d.createElement('script');
			w[c] = w[c] || function() {
				(w[c].q = w[c].q || []).push(arguments);
			};
			s.async = true;
			s.src = 'https://call.chatra.io/chatra.js';
			if (d.head) d.head.appendChild(s);
		})(document, window, 'Chatra');

		break;

	case 'tawk':
		(function() {
			const s1 = document.createElement('script'), s0 = document.getElementsByTagName('script')[0];
			s1.async = true;
			s1.src = 'https://embed.tawk.to/' + livechat.api;
			s1.charset = 'UTF-8';
			s1.setAttribute('crossorigin', '*');
			s0.parentNode.insertBefore(s1, s0);
		})();

		break;

	case 'crisp':
		window.$crisp = [];window.CRISP_WEBSITE_ID = `${livechat.api}`;(function() {d = document;s = d.createElement('script');s.src = 'https://client.crisp.chat/l.js';s.async = 1;d.getElementsByTagName('head')[0].appendChild(s);})();

		break;
	}
}
