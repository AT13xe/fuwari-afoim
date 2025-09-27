import type {
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "AT13xe Blog",
	description:
		"分享网络技术及知识，随便写写文章，作者为AT13xe",

	keywords: [],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 360, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
		forceDarkMode: true, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "assets/5.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			// text: "Pixiv @chokei", // Credit text to be displayed

			// url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "https://pic.at13xe.top/h", // Background image URL (supports HTTPS)
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.5, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://q2.qlogo.cn/headimg_dl?dst_uin=3639191908&spec=5", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: '128x128',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "随机图",
			url: "https://pic.at13xe.top",
            external: true,
		},
		// {
			// name: "友链",
			// url: "/friends/", // Internal links should not include the base path, as it is automatically added
			// external: false, // Show an external link icon and will open in a new tab
		// },
		// {
			// name: "赞助",
			// url: "/donate/", // Internal links should not include the base path, as it is automatically added
			// external: false, // Show an external link icon and will open in a new tab
		// },
		{
			name: "统计",
			url: "https://umami.at13xe.top/share/JaCVkX59PnWKQwi0", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		// {
			// name: "状态",
			// url: "https://ss.2x.nz/", // Internal links should not include the base path, as it is automatically added
			// external: true, // Show an external link icon and will open in a new tab
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/5.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "AT13xe",
	bio: "爱你所爱~ ❤",
	links: [
		// {
			// name: "Bilibli",
			// icon: "fa6-brands:bilibili",
			// url: "https://space.bilibili.com/325903362",
		// },
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/AT13xe",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const imageFallbackConfig: ImageFallbackConfig = {
	enable: true,
	originalDomain: "eo-r2.2x.nz",
	fallbackDomain: "pub-d433ca7edaa74994b3d7c40a7fd7d9ac.r2.dev",
};

export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://umami.at13xe.top",
	shareId: "JaCVkX59PnWKQwi0",
	timezone: "Asia/Shanghai",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

export const gitHubEditConfig: GitHubEditConfig = {
	enable: false,
	baseUrl: "https://github.com/AT13xe/fuwari-afoim/blob/main/src/content/posts",
};

export const statsConfig = {
	viewsText: "浏览",
	visitsText: "访客",
	loadingText: "统计加载中...",
	unavailableText: "统计不可用。请检查是否屏蔽了Umami域名，如AdGuard和AdBlock等插件",
	getStatsText: (pageViews: number, visits: number) => `${statsConfig.viewsText} ${pageViews} · ${statsConfig.visitsText} ${visits}`,
};
