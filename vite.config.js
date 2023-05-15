import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "prompt",
			includeAssets: [
				"favicon.ico",
				"apple-touch-icon.png",
				"maskable225x225.png",
			],
			manifest: {
				name: "Advanced Filter",
				short_name: "Filter",
				description: "This is a react advanced filter",
				theme_color: "#ffffff",
				start_url: "/",
				icons: [
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "img/png",
					},
					{
						src: "pwa-512x2.png",
						sizes: "192x192",
						type: "img/png",
					},
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "img/png",
					},
					{
						src: "maskable225x225.png",
						sizes: "134x134",
						type: "img/png",
						purpose: "any maskable",
					},
				],
			},
		}),
	],
});
