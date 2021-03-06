/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_KEY: string
        REACT_APP_URI: string
        REACT_APP_IMG: string
    }
}