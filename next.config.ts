import type { NextConfig } from 'next'

import path from 'path'

const config: NextConfig = {
    experimental: {
        turbo : {
            resolveAlias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
}

export default config
