module.exports = {
    content: [
        './resources/**/*.blade.php', 
        './resources/**/*.js',       
        './resources/**/*.vue',      
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6D28D9', 
                secondary: '#0E7490',
                success: '#10B981', 
                danger: '#DC2626', 
                warning: '#F59E0B',
                info: '#3B82F6', 
                dark: '#1F2937',
                light: '#F3F4F6', 
            },

            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
            },

            spacing: {
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
                '48': '12rem',
                '64': '16rem',
                '128': '32rem',
            },

            fontFamily: {
                sans: ['Nunito', 'sans-serif'], 
                mono: ['Courier New', 'monospace'], 
            },

            typography: {
                DEFAULT: {
                    css: {
                        color: '#374151', 
                        a: {
                            color: '#6D28D9', 
                            textDecoration: 'underline', 
                            fontWeight: 'normal', 
                            transition: 'color 0.15s ease-in-out', 
                            '&:hover': {
                                color: '#5B21B6', 
                            },
                        },
                        h1: {
                            fontSize: '2rem', 
                            fontWeight: 'bold', 
                            marginTop: '1.5rem', 
                            marginBottom: '1rem',
                        },
                        h2: {
                            fontSize: '1.5rem', 
                            fontWeight: 'bold', 
                            marginTop: '1.25rem', 
                            marginBottom: '0.75rem', 
                        },
                        p: {
                            fontSize: '1rem',
                            lineHeight: '1.75rem', 
                            marginBottom: '1rem', 
                        },
                    },
                },
            },

            boxShadow: {
                'sm': '0 1px 2px rgba(0, 0, 0, 0.05)', 
                'md': '0 4px 6px rgba(0, 0, 0, 0.1)', 
                'lg': '0 8px 12px rgba(0, 0, 0, 0.15)', 
            },

            borderWidth: {
                DEFAULT: '1px',
                '0': '0px',
                '2': '2px',
                '4': '4px',
                '8': '8px',
            },

            backgroundOpacity: {
                '5': '0.05',
                '10': '0.1',
                '20': '0.2',
                '30': '0.3',
                '40': '0.4',
                '50': '0.5',
                '60': '0.6',
                '70': '0.7',
                '80': '0.8',
                '90': '0.9',
            },

            textOpacity: {
                '5': '0.05',
                '10': '0.1',
                '20': '0.2',
                '30': '0.3',
                '40': '0.4',
                '50': '0.5',
                '60': '0.6',
                '70': '0.7',
                '80': '0.8',
                '90': '0.9',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
