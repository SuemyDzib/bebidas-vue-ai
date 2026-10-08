import { openrouter } from '../lib/ia'
import {  streamText } from 'ai'

export default {
    async generarReceta(prompt) {
        const resultado = streamText({
            model: openrouter('apodex/apodex-1.1-mini:free'),
            prompt
        })

        return resultado.textStream
    }
}