/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'custom\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_douban': '&#xe642;',
		'icon_bottom': '&#xe652;',
		'icon_left': '&#xe653;',
		'icon_right': '&#xe651;',
		'icon_top': '&#xe650;',
		'icon_shop': '&#xe601;',
		'icon_about': '&#xe604;',
		'icon_news': '&#xe602;',
		'icon_weibo': '&#xe640;',
		'icon_renren': '&#xe641;',
		'icon_home': '&#xe600;',
		'icon_contacts': '&#xe603;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
