/**
 * packages barrel file
 */

import { Canvas } from "@brendangooch/canvas";

export interface iRenderable {
    render(canvas: Canvas): void
}

export { SimpleRenderer } from './simple-renderer.js';