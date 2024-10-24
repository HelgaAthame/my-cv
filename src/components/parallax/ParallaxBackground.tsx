"use client";
import React, { useRef, useEffect, useCallback } from "react";

// Типы для точек
interface Point {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speedX: number;
  speedY: number;
}

export const ParallaxBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  const radius = 150;
  // const minDistanceFromCursor = 30; // Минимальное расстояние от курсора

  // Генерация точки в пределах видимой области
  const generatePoint = (x: number, y: number): Point => ({
    x,
    y,
    targetX: x,
    targetY: y,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 0.05 + 0.01,
    speedY: Math.random() * 0.05 + 0.01,
  });

  // Генерация точек
  const generatePoints = useCallback(() => {
    const newPoints: Point[] = [];
    const pointCount =
      Math.floor(window.innerWidth / 50) * Math.floor(window.innerHeight / 50);
    for (let i = 0; i < pointCount; i++) {
      // Генерация случайных координат в пределах экрана
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      newPoints.push(generatePoint(x, y));
    }
    pointsRef.current = newPoints;
  }, []);

  // Функция отрисовки точек и линий
  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      pointsRef.current.forEach((point) => {
        // Плавное движение точек к целевой позиции
        point.x += (point.targetX - point.x) * 0.05;
        point.y += (point.targetY - point.y) * 0.05;

        // Проверка, не вышла ли точка за пределы экрана
        if (
          point.x < 0 ||
          point.x > ctx.canvas.width ||
          point.y < 0 ||
          point.y > ctx.canvas.height
        ) {
          const newX = Math.random() * ctx.canvas.width;
          const newY = Math.random() * ctx.canvas.height;
          point.targetX = newX;
          point.targetY = newY;
        }

        // Рассчитываем расстояние от точки до курсора
        const distanceToMouse = Math.hypot(
          point.x - mousePositionRef.current.x,
          point.y - mousePositionRef.current.y
        );
        const opacity = Math.max(0, 1 - distanceToMouse / radius);

        // Рисуем точки с уменьшением непрозрачности от центра к краям
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        ctx.closePath();

        // Рисуем линии, соединяющие точки
        pointsRef.current.forEach((otherPoint) => {
          const distance = Math.hypot(
            point.x - otherPoint.x,
            point.y - otherPoint.y
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              opacity * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
          }
        });
      });
    },
    [radius]
  );

  // Обновление позиции мыши
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (canvasRef.current) {
      // Получаем границы холста
      const rect = canvasRef.current.getBoundingClientRect();

      // Обновляем позицию мыши относительно холста
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // Обновляем целевые координаты для каждой точки
      pointsRef.current = pointsRef.current.map((point) => {
        // Генерация случайного угла и расстояния для смещения от курсора
        const angle = Math.random() * Math.PI * 2;
        const offsetDistance = 1 + Math.random() * 4;

        // Обновляем координаты targetX и targetY относительно исходных точек
        return {
          ...point,
          targetX: point.targetX + Math.cos(angle) * offsetDistance,
          targetY: point.targetY + Math.sin(angle) * offsetDistance,
        };
      });
    }
  }, []);

  // Плавная анимация с использованием requestAnimationFrame
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        draw(ctx);
      }
    }
    requestAnimationFrame(animate);
  }, [draw]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Инициализация положения курсора на центре окна при загрузке
      mousePositionRef.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        generatePoints();
      }
      animate();

      window.addEventListener("mousemove", handleMouseMove);
      const animateInterval = setInterval(() => {
        const event = new MouseEvent("mousemove", {
          bubbles: true,
          cancelable: true,
          clientX: mousePositionRef.current.x,
          clientY: mousePositionRef.current.y,
        });
        handleMouseMove(event);
      }, 100);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearInterval(animateInterval);
      };
    }
  }, [animate, generatePoints, handleMouseMove]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        generatePoints();
      }
    };

    // Добавляем слушателя на изменение размера окна
    window.addEventListener("resize", handleResize);

    // Удаляем слушателя при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [generatePoints]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        width={typeof window !== "undefined" ? window.innerWidth : 800}
        height={typeof window !== "undefined" ? window.innerHeight : 600}
        className="absolute top-0 left-0 w-full h-full "
      />
    </div>
  );
};
