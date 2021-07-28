module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                main: ['Rokkitt']
            },
            colors: {
                turqgrad: {
                    DEFAULT: '#00FFF0'
                },
                bluegrad: {
                    DEFAULT: '#00A3FF'
                },

                turqgrad2: {
                    DEFAULT: '#00D1FF'
                },

                pinkgrad: {
                    DEFAULT: '#F257FF'
                },

                bluegrad2: {
                    DEFAULT: '#00B5FF'
                },

                greengrad: {
                    DEFAULT: '#57FFB8'
                },

                vasupurpgrad: {
                    DEFAULT: '#AD00FF'
                },

                vasuredgrad: {
                    DEFAULT: '#FF0000'
                },

                chinmayyellowgrad: {
                    DEFAULT: '#FAFF00'
                },

                chinmaygreengrad: {
                    DEFAULT: '#00FFA3'
                },

            }
        },
    },
}