@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
  background: #07080d;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(circle at 15% 5%, rgba(53, 214, 255, 0.14), transparent 30rem),
    radial-gradient(circle at 85% 10%, rgba(255, 61, 110, 0.1), transparent 28rem),
    radial-gradient(circle at 50% 60%, rgba(155, 92, 255, 0.08), transparent 34rem),
    #07080d;
  color: #f6f8ff;
}

::selection {
  background: rgba(53, 214, 255, 0.28);
  color: #ffffff;
}

.fade-in {
  animation: fadeIn 0.75s ease both;
}

.float-slow {
  animation: floatSlow 5.5s ease-in-out infinite;
}

.scanline::after {
  background: linear-gradient(
    transparent,
    rgba(53, 214, 255, 0.08),
    transparent
  );
  content: "";
  height: 32%;
  inset: -32% 0 auto;
  position: absolute;
  animation: scan 4.5s linear infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatSlow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@keyframes scan {
  to {
    inset: 120% 0 auto;
  }
}
