import { Point } from "./Point";

declare module EnclosingCircle {
    interface EnclosingCircle {
        new(center: Point, radius: number): EnclosingCircle;
        center: Point,
        radius: number,
    }
}
export = EnclosingCircle;