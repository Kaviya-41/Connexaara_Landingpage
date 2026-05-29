export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const floatingAnim = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const slowFloatingAnim = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ─── Mobile-aware animation helpers ───

/** Returns floating animation props — disabled on mobile */
export function getFloatingAnim(isMobile, yRange = 10, duration = 4) {
  if (isMobile) return {};
  return {
    animate: { y: [0, -yRange, 0] },
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  };
}

/** Returns slow floating animation props — disabled on mobile */
export function getSlowFloatingAnim(isMobile, yRange = 15, duration = 6) {
  return getFloatingAnim(isMobile, yRange, duration);
}

/** Returns infinite rotation animation — disabled on mobile */
export function getRotationAnim(isMobile, duration = 20, reverse = false) {
  if (isMobile) return {};
  return {
    animate: { rotate: reverse ? -360 : 360 },
    transition: { duration, repeat: Infinity, ease: "linear" },
  };
}

/** Returns pulsing scale animation — disabled on mobile */
export function getPulseAnim(isMobile, scaleRange = [1, 1.1, 1], duration = 4) {
  if (isMobile) return {};
  return {
    animate: { scale: scaleRange },
    transition: { duration, repeat: Infinity, ease: "easeInOut" },
  };
}
