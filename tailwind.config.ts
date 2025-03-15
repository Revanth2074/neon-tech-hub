
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				display: ["'Space Grotesk'", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom tech-themed colors
				tech: {
					"dark": "#0F0F1A",
					"darker": "#080810",
					"accent-blue": "#00BFFF",
					"accent-purple": "#8A2BE2",
					"accent-teal": "#00CED1",
					"accent-green": "#00FA9A",
					"muted": "#2A2A3A",
					"gray": "#4A4A5A",
					"light": "#EAEAEA"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-in-slow": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-in-right": {
					"0%": { transform: "translateX(20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"pulse-glow": {
					"0%, 100%": { 
						boxShadow: "0 0 15px rgba(0, 191, 255, 0.5), 0 0 30px rgba(0, 191, 255, 0.3)"
					},
					"50%": { 
						boxShadow: "0 0 25px rgba(0, 191, 255, 0.7), 0 0 40px rgba(0, 191, 255, 0.5)"
					}
				},
				"shimmer": {
					"0%": { backgroundPosition: "200% 0" },
					"100%": { backgroundPosition: "-200% 0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out forwards",
				"fade-in-slow": "fade-in-slow 1.2s ease-out forwards",
				"slide-up": "slide-up 0.7s ease-out forwards",
				"slide-in-right": "slide-in-right 0.5s ease-out forwards",
				"pulse-glow": "pulse-glow 2s infinite",
				"shimmer": "shimmer 3s infinite linear"
			},
			backgroundImage: {
				"tech-gradient": "linear-gradient(120deg, rgba(10, 10, 25, 0.9), rgba(15, 15, 30, 0.9))",
				"neon-glow": "linear-gradient(90deg, rgba(0, 191, 255, 0.2), rgba(138, 43, 226, 0.2), rgba(0, 191, 255, 0.2))",
				"card-gradient": "linear-gradient(180deg, rgba(42, 42, 58, 0.8), rgba(30, 30, 45, 0.8))",
				"shimmer-gradient": "linear-gradient(90deg, transparent, rgba(0, 191, 255, 0.1), rgba(138, 43, 226, 0.1), transparent)",
				"blur-gradient": "radial-gradient(circle, rgba(25, 25, 55, 0.8), rgba(10, 10, 25, 0.9))"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
