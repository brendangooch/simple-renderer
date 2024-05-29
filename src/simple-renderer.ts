/**
 * 
 */

import Canvas from "@brendangooch/canvas";

interface iRenderable {
    render(canvas: Canvas): void
}

export default class SimpleRenderer {

    public static FPS: number = 60;

    private canvas: Canvas;
    private running: boolean = false;
    private objectsToRender: iRenderable[] = [];
    private intervalID: number = 0;

    public constructor(canvas: Canvas) {
        this.canvas = canvas;
    }

    public add(obj: iRenderable): void {
        this.objectsToRender.push(obj);
    }

    public start(): void {
        if (!this.running) {
            this.loadInterval();
            this.running = true;
        }
    }

    public stop(): void {
        if (this.running) {
            clearInterval(this.intervalID);
            this.running = false;
        }
    }

    public render(): void {
        this.canvas.clear();
        this.objectsToRender.forEach(obj => obj.render(this.canvas));
    }

    private loadInterval(): void {
        this.intervalID = setInterval(this.render.bind(this), 1000 / SimpleRenderer.FPS);
    }

}