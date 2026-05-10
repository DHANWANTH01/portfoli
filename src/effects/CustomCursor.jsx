import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const expanded = useRef(false);

  useEffect(() => {
    const move = (event) => {
      pos.current = { x: event.clientX, y: event.clientY };
    };

    const onEnter = () => {
      expanded.current = true;
    };

    const onLeave = () => {
      expanded.current = false;
    };

    window.addEventListener("mousemove", move);
    const hoverables = document.querySelectorAll("button, a, .card-hover");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    let frame;
    const animate = () => {
      if (dot.current) {
        dot.current.style.left = `${pos.current.x}px`;
        dot.current.style.top = `${pos.current.y}px`;
      }

      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      if (ring.current) {
        ring.current.style.left = `${ringPos.current.x}px`;
        ring.current.style.top = `${ringPos.current.y}px`;
        const size = expanded.current ? 44 : 28;
        ring.current.style.width = `${size}px`;
        ring.current.style.height = `${size}px`;
        ring.current.style.opacity = expanded.current ? "0.6" : "1";
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        style={{
          position: "fixed",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#818cf8",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "background 0.2s",
        }}
      />
      <div
        ref={ring}
        style={{
          position: "fixed",
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1.5px solid rgba(129,140,248,0.7)",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.25s, height 0.25s, opacity 0.25s",
        }}
      />
    </>
  );
}
