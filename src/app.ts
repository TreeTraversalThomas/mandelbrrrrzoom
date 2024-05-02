import { Set } from "./custom_types";
import { lagrangeLambda } from "./math_stuff";

var canvas = <HTMLCanvasElement>document.getElementById("drawing");
var ctx = canvas.getContext("2d");

let worker;
let colorSet = [];
let Real_SET: Set = { start: -2, end: 1 }; //realpart of numbers
let IMAGINARY_SET: Set = { start: -1, end: 1 }; // imaginary part of numbers
const ZOOM_SPEED: number = 0.05;
const TASKS = [];
