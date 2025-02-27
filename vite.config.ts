import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(
{   base: '/DIRI_ProyectoFinal/',
    build:{
        outDir:'docs',
    },
    plugins: [react()],
})
