import { React, useEffect, useRef, useState } from 'react';

const FractalTree = () => {
    const width = 300;
    const height = 300;
    const canvasRef = useRef(null);
    let ctx;
    let prevX, prevY;

    const draw = () => {
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // ctx.lineTo(x - (window.innerWidth / 2) + (width / 2), y - (window.innerHeight / 2) + (height / 2));
        branch(100, 9);
    }

    const branch = (length, thick) => {
        ctx.lineWidth = thick > 1 ? thick : 1;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        prevY -= length;
        ctx.lineTo(prevX, prevY - length);
        ctx.closePath();
        ctx.stroke();

        if (length > 1) {
            branch(length / 1.618, thick - 1);
        }
    }

    const [x, setX] = useState();
    const [y, setY] = useState();

    useEffect(() => {
        const update = (e) => {
            setX(e.x);
            setY(e.y);
        }

        ctx = canvasRef.current.getContext('2d');
        window.addEventListener('mousemove', update);
        window.addEventListener('touchmove', update);
        prevX = width / 2;
        prevY = height;
        draw();

        return () => {
            window.removeEventListener('mousemove', update);
            window.removeEventListener('touchmove', update);
        }
    }, [draw, setX, setY]);

    return (
        <>
            <div>{x}:{y}</div>
            <canvas width={width} height={height} ref={canvasRef} />
        </>);
}

export default FractalTree;