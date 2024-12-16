import path from 'path'

import type { NextConfig } from 'next'

const config: NextConfig = {
    experimental : {
        turbo : {
            resolveAlias : {
                '@' : path.resolve(__dirname, 'src'),
            },
        },
    },
}

export default config
