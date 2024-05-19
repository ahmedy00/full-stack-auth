import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#647EFF',
                secondary: '#00DC82',
                dark: {
                    text: '#F3F3F3',
                    header: '#1A1A1A',
                    pale: '#94A3B8'
                },
                light: {
                    text: '#1F1F1F',
                    header: '#FFFFFF',
                    pale: '#64748b'
                }
            },
            height: {
                header: '64px'
            }
        }
    }
}
