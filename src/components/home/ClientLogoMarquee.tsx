import React, { useRef, useEffect, useCallback } from "react";
import logo1 from "../../assets/image/logo/Logo.png";
import logo2 from "../../assets/image/logo/Logo-2.png";
import logo3 from "../../assets/image/logo/Logo-3.png";
import logo4 from "../../assets/image/logo/Logo-4.png";
import logo5 from "../../assets/image/logo/Logo-5.png";
import logo6 from "../../assets/image/logo/Google_Cloud_Platform.png";
import logo7 from "../../assets/image/logo/aws.webp";
import logo8 from "../../assets/image/logo/logo-6.png";
import logo9 from "../../assets/image/logo/logo-7.png";
import patner1 from "../../assets/image/logo/patner-1.png";
import patner2 from "../../assets/image/logo/patner-2.png";
import patner3 from "../../assets/image/logo/patner-3.png";
import patner4 from "../../assets/image/logo/patner-4.png";
import patner5 from "../../assets/image/logo/patner-5.png";
import patner6 from "../../assets/image/logo/patner-6.png";
import patner7 from "../../assets/image/logo/patner-7.png";
import patner8 from "../../assets/image/logo/patner-8.png";
import patner9 from "../../assets/image/logo/patner-9.jpg";

const clientLogos = [
  logo3,
  logo2,
  logo6,
  logo1,
  logo7,
  logo4,
  logo5,
  logo8,
  logo9,
];
const partnerLogos = [
  patner1,
  patner2,
  patner3,
  patner4,
  patner5,
  patner6,
  patner7,
  patner8,
  patner9,
];

const ITEM_WIDTH = 160;
const ITEM_MARGIN = 32; // each side, total gap = 64px
const ITEM_SLOT = ITEM_WIDTH + ITEM_MARGIN * 2;

type InfiniteMarqueeProps = {
  logos: string[];
  alt: string;
  direction: "left" | "right";
  speed?: number; // px per second
};

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  logos,
  alt,
  direction,
  speed = 80,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const lastTimestamp = useRef<number>(0);
  const velocity = useRef(0);
  const isHovered = useRef(false);

  // Total width of one full set
  const setWidth = logos.length * ITEM_SLOT;

  const clampPos = useCallback(
    (pos: number) => {
      // wrap between -setWidth and 0
      let p = pos % setWidth;
      if (p > 0) p -= setWidth;
      return p;
    },
    [setWidth],
  );

  const applyPos = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`;
    }
  }, []);

  // Auto-scroll loop
  useEffect(() => {
    const sign = direction === "left" ? -1 : 1;
    let last = 0;

    const tick = (ts: number) => {
      if (last === 0) last = ts;
      const delta = (ts - last) / 1000;
      last = ts;
      lastTimestamp.current = ts;

      if (!isDragging.current && !isHovered.current) {
        posRef.current = clampPos(posRef.current + sign * speed * delta);
        applyPos();
      } else if (!isDragging.current && Math.abs(velocity.current) > 0.5) {
        // momentum after swipe
        posRef.current = clampPos(posRef.current + velocity.current * delta);
        velocity.current *= 0.92; // friction
        applyPos();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, speed, clampPos, applyPos]);

  // Pointer/touch drag handlers
  const onDragStart = (clientX: number) => {
    isDragging.current = true;
    dragStartX.current = clientX;
    dragStartPos.current = posRef.current;
    velocity.current = 0;
  };

  const onDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const delta = clientX - dragStartX.current;
    posRef.current = clampPos(dragStartPos.current + delta);
    applyPos();
  };

  const onDragEnd = (clientX: number) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // compute swipe velocity (px/s) to hand off to momentum
    const delta = clientX - dragStartX.current;
    velocity.current = delta * 3; // amplify for feel
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        cursor: "grab",
      }}
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={(e) => {
        isHovered.current = false;
        velocity.current = 0;
        if (isDragging.current) onDragEnd(e.clientX);
      }}
      // Mouse drag
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => {
        if (isDragging.current) onDragMove(e.clientX);
      }}
      onMouseUp={(e) => onDragEnd(e.clientX)}
      // Touch swipe
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
    >
      {/* Scrolling track — 3 copies to cover any swipe offset without gaps */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          willChange: "transform",
          userSelect: "none",
        }}
      >
        {[0, 1, 2].map((copy) =>
          logos.map((logo, i) => (
            <div
              key={`c${copy}-${i}`}
              style={{
                width: ITEM_WIDTH,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                margin: `0 ${ITEM_MARGIN}px`,
              }}
            >
              <img
                src={logo}
                alt={`${alt} ${i + 1}`}
                title={`${alt} ${i + 1}`}
                draggable={false}
                width={140}
                height={58}
                style={{
                  maxWidth: 140,
                  maxHeight: 58,
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  filter: "grayscale(15%)",
                  transition: "filter 0.25s ease, transform 0.25s ease",
                  pointerEvents: "none",
                }}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
};

const SectionLabel: React.FC<{ label: string; accent: string }> = ({
  label,
  accent,
}) => (
  <div style={{ textAlign: "center", marginBottom: 28 }}>
    <h2
      style={{
        fontSize: "clamp(1.2rem, 2.2vw, 1.65rem)",
        fontWeight: 700,
        color: "#111827",
        letterSpacing: "-0.01em",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em",
        lineHeight: 1.3,
      }}
    >
      {label}{" "}
      <span style={{ color: "#B91C1C", position: "relative" }}>
        {accent}
        <span
          style={{
            position: "absolute",
            bottom: -3,
            left: 0,
            right: 0,
            height: 2,
            borderRadius: 2,
            background: "linear-gradient(90deg, #B91C1C, #EF4444)",
            opacity: 0.55,
          }}
        />
      </span>
    </h2>
  </div>
);

const ClientLogoMarquee: React.FC = () => (
  <section
    style={{
      background: "#fff",
      paddingTop: 34,
      paddingBottom: 34,
      overflow: "hidden",
    }}
  >
    <div style={{ marginBottom: 48 }}>
      <SectionLabel label="Trusted By" accent="Fortune 500 Clients" />
      <InfiniteMarquee
        logos={partnerLogos}
        alt="Partner logo"
        direction="left"
        speed={35}
      />
    </div>

    <div
      style={{
        width: "100%",
        height: 1,
        marginBottom: 44,
        background:
          "linear-gradient(90deg, transparent, #E5E7EB 20%, #E5E7EB 80%, transparent)",
      }}
    />

    <div>
      <SectionLabel label="Our" accent="Partners" />
      <InfiniteMarquee
        logos={clientLogos}
        alt="Client logo"
        direction="right"
        speed={35}
      />
    </div>
  </section>
);

export default ClientLogoMarquee;
