//Code
import { Operators, Function } from "/js/GraphikoMath.js";
import { Handler } from "/js/CanvasHandler.js";


let Graphiko = {
    PlotGraph: function () {
        outOffsetX += width/2;
        let expOut = 0;
        let prevSampleX = -sampleDist;
        let prevSampleY = height/2;
        let i = 0;
        for (let t = 0; t <= samples; t+=timeSteps) {
            i++;
            if (i < samples+1) {
                //Input Expression
                expOut = Operators.PositiveOut(Function.Trianglewave(t,10));
                //Input Expression
                expOut *= scale;
                expOut = -expOut
                expOut += (height / 2 + outOffsetY);
                Handler.Pixel(outOffsetX + sampleDist + prevSampleX, expOut, "white");
                if (sampleDist >= 5 || prevSampleY-expOut >= lineDrawerMinDist || prevSampleY-expOut <= -lineDrawerMinDist) {
                    Handler.Line(outOffsetX + prevSampleX, prevSampleY, outOffsetX+prevSampleX + sampleDist, expOut, 0, "white");
                }
                prevSampleX += sampleDist;
                prevSampleY = expOut;
            }
            if (prevSampleX > width) {
                break;
            }
        }
        i = 0;
        prevSampleX = -sampleDist;
        prevSampleY = height/2;    
        for (let t = 0; t <= samples; t+=timeSteps) {
            i++;
            if (i < samples+1) {
                //Input Expression
                expOut = Function.Sawtoothwave(t, 10, false);
                //Input Expression
                expOut *= scale;
                expOut = expOut
                expOut += (height / 2 + outOffsetY);
                Handler.Pixel(outOffsetX - sampleDist - prevSampleX, expOut, "white");
                if (sampleDist >= 5 || prevSampleY-expOut >= lineDrawerMinDist || prevSampleY-expOut <= -lineDrawerMinDist) {
                    Handler.Line(outOffsetX - prevSampleX, prevSampleY, outOffsetX-prevSampleX + sampleDist, expOut, 0, "white");
                }
                prevSampleX += sampleDist;
                prevSampleY = expOut;
            }
            if (prevSampleX > width) {
                break;
            }
        }
    },
    Save2Matrix: function () {
        let sampleArray = [];
        for (let t = samples; t >= 0; t-timeSteps){
            expOut = Function.Sinewave(t);
            sampleArray.push(expOut);
        }
    },
    PlotGraphBase: function (lineColor, divisionArea) {
        Handler.Line(0, height/2, width, height/2, 2, lineColor);
        Handler.Line(width/2, 0, width/2, height, 2, lineColor);
        
        for (let i = 0; i < width; i+=divisionArea) {
            Handler.Line(i, 0, i, height, 1, lineColor, 0.6);
        }
        for (let i = 0; i < height; i+=divisionArea) {
            Handler.Line(0, i, width, i, 1, lineColor, 0.6);
        }
    },
    PlotGraphBars: function (lineColor, bigBarSize, littleBarSize) {
        //Big Bars
        for (let i = 0; i < width; i+=20) {
            Handler.Line((width/2)-bigBarSize/2, i, (width/2)+bigBarSize/2, i, 2, lineColor, 0.9);
        }
        for (let i = 0; i < width; i+=20) {
            Handler.Line(i, (height/2)-bigBarSize/2, i, (height/2)+bigBarSize/2, 2, lineColor, 0.9);
        }
        //Little Bars
        for (let i = 0; i < width; i+=10) {
            Handler.Line((width/2)-littleBarSize/2, i, (width/2)+littleBarSize/2, i, 2, lineColor, 0.9);
        }
        for (let i = 0; i < width; i+=10) {
            Handler.Line(i, (height/2)-littleBarSize/2, i, (height/2)+littleBarSize/2, 2, lineColor, 0.9);
        }
    },
    BeginGraphiko: function () {
        Graphiko.PlotGraphBase(graphBaseColor ,divArea);
        Graphiko.PlotGraphBars(graphBaseColor, bigBarSize, littleBarSize);
    },
    ResetGraph: function () {
        Handler.ClearScreen();
        Graphiko.PlotGraphBase(divArea);
        Graphiko.PlotGraphBars(graphBaseColor, bigBarSize, littleBarSize);
    }
}
    let width = document.getElementById("graphiko").clientWidth;
    let height = document.getElementById("graphiko").clientHeight;
    Handler.BeginHandler("graphiko");
    //Code
    //Input Vars
    //Background Vars
    let divArea = 10;
    let littleBarSize = 15;
    let bigBarSize = 25;
    let graphBaseColor= "red";
    //Background Vars
    let samples = 10000;
    let timeSteps = 0.01;
    let outOffsetX = 0;
    let outOffsetY = 0;
    let scale = 100;
    let sampleDist = 0.1;
    let lineDrawerMinDist = 10;
    //Input Vars
    //Code Vars
    
    //Code Vars
    //Code
    Graphiko.BeginGraphiko();
    Graphiko.PlotGraph();
    //Save2Matrix();
    //document.getElementById("log").innerHTML = ;