import React, { useRef, useState, useEffect } from "react";
import "./PenTool.css";

const PenTool = () => {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [mode, setMode] = useState("default"); // default, pen, or move
  const [startMovePos, setStartMovePos] = useState({ x: 0, y: 0 });

  const startDrawing = (e) => {
    if (mode !== "pen") return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#E1FF26";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (mode !== "pen") return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.closePath();
    setIsDrawing(false);
    saveHistory();
  };

  const startMoving = (e) => {
    if (mode !== "move") return;
    setStartMovePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    setIsMoving(true);
  };

  const move = (e) => {
    if (!isMoving) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dx = e.nativeEvent.offsetX - startMovePos.x;
    const dy = e.nativeEvent.offsetY - startMovePos.y;
    setStartMovePos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }); // Update start position
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageRef.current, dx, dy, canvas.width, canvas.height);
  };

  const stopMoving = () => {
    if (mode !== "move") return;
    setIsMoving(false);
  };

  const saveHistory = () => {
    const canvas = canvasRef.current;
    const newHistory = history.slice(0, historyIndex);
    newHistory.push(canvas.toDataURL());
    setHistory(newHistory);
    setHistoryIndex(newHistory.length);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
    setHistory([]);
    setHistoryIndex(0);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    console.log(dataUrl); // Handle the save data as needed
  };

  const handleUndo = () => {
    if (historyIndex > 1) {
      const newIndex = historyIndex - 1;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = history[newIndex - 1];
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setHistoryIndex(newIndex);
      };
    }
  };
  
  const handleRedo = () => {
    if (historyIndex < history.length) {
      const newIndex = historyIndex + 1;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = history[newIndex - 1];
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setHistoryIndex(newIndex);
      };
    }
  };

  const handleZoomIn = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvas.toDataURL();
    img.onload = () => {
      canvas.width *= 1.1;
      canvas.height *= 1.1;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  const handleZoomOut = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvas.toDataURL();
    img.onload = () => {
      canvas.width /= 1.1;
      canvas.height /= 1.1;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 400;

    const image = new Image();
    image.src = "images/images (2).png"; // Path to your shape image
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      imageRef.current = image; // Save the image reference
    };
  }, []);

  return (
    <div className="pen-tool relative">
      <div className="pen-tool-canvas-container rounded-[30px] border bg-[#FAF7EC]">
        <div className="pen-tool-toolbar mt-2 border ml-4 p-3 gap-6 rounded-[30px]">
          <button onClick={handleSave}>
            <img src="images/editorlogo.png" alt="Save" />
          </button>
          <button onClick={handleClear}>
            <img src="images/arrow.png" alt="Clear" />
          </button>
          <button onClick={() => setMode("pen")}>
            <img src="images/Vector 33.png" alt="Pen" />
          </button>
          <button onClick={() => setMode("move")}>
            <img src="images/hand.png" alt="Move" />
          </button>
        </div>
        <div className="pen-tool-undo-controls absolute p-2 gap-">
          <button
            onClick={handleUndo}
            className="bg-white rounded-full border p-3"
          >
            <img src="images/undo.png" alt="Undo" />
          </button>
          <button
            onClick={handleRedo}
            className="bg-white p-3 rounded-full border"
          >
            <img src="images/redo.png" alt="Redo" />
          </button>
        </div>
        {/* Zoom in/out */}
        <div className="pen-tool-zoom-controls absolute p-2 gap-">
          <button
            onClick={handleZoomOut}
            className="bg-white rounded-full border p-3"
          >
            -
          </button>
          <button
            onClick={handleZoomIn}
            className="bg-white p-3 rounded-full border"
          >
            +
          </button>
        </div>
        <canvas
          ref={canvasRef}
          onMouseDown={(e) => {
            startDrawing(e);
            startMoving(e);
          }}
          onMouseMove={(e) => {
            draw(e);
            move(e);
          }}
          onMouseUp={(e) => {
            stopDrawing(e);
            stopMoving(e);
          }}
          onMouseLeave={(e) => {
            stopDrawing(e);
            stopMoving(e);
          }}
          className={`pen-tool-canvas ${
            mode === "pen"
              ? "cursor-pen"
              : mode === "move"
              ? "cursor-move"
              : "cursor-default"
          }`}
        />
      </div>
    </div>
  );
};

export default PenTool;
