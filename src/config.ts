import type { PostHideElements } from '~/content/config';

export const Site = 'https://astro-blog-zozo.pages.dev';
export const SiteLanguage = 'pt-br';
export const SiteTitle = 'Henalecam';
export const SiteDescription = 'Henrique para vocês';
export const FooterDescription = 'Viva o Caos.';
export const AdminName = 'Henalecam';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'mailto:henriquealexandredec@gmail.com' },
	github: { url: 'https://github.com/henalecam' },
	// x: { url: 'https://x.com/userName' },
	// mastodon: { url: 'https://mastodon.social/@userName' },
	// facebook: { url: 'https://facebook.com/userName' },
	instagram: { url: 'https://instagram.com/henalecam' },
	// telegram: { url: 'https://t.me/@userName' },
	// youtube: { url: 'https://youtube.com/@userName' },
	// skype: { url: 'https://skype.com/userName' },
	// slack: { url: 'https://slack.com/userName' },
	// messenger: { url: 'https://messenger.com/userName' },
	whatsapp: { url: 'https://api.whatsapp.com/send?phone=5542998188268' },
	// snapchat: { url: 'https://snapchat.com/userName' },
	// line: { url: 'https://line.com/userName' },
	twitch: { url: 'https://twitch.com/henalecam' },
	// weibo: { url: 'https://weibo.com/userName' },
	// bilibili: { url: 'https://space.bilibili.com/userName' },
	// dingding: { url: 'https://dingtalk.com/userName' },
	// zhihu: { url: 'https://zhihu.com/userName' },
	// douban: { url: 'https://douban.com/userName' },
	// rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'Henalecam/astro-blog-zozo',
	'data-repo-id': 'R_kgDOMY_YaA',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDOMY_YaM4CiqAt',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'en',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
