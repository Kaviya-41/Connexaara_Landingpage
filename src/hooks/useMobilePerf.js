import { useSyncExternalStore, useCallback } from 'react';

// ─── Mobile detection via useSyncExternalStore (no re-renders on resize) ───
const MOBILE_BREAKPOINT = 768;

function subscribeMobile(callback) {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getSnapshotMobile() {
  return window.innerWidth < MOBILE_BREAKPOINT;
}

function getServerSnapshotMobile() {
  return false; // SSR fallback
}

// ─── Reduced motion detection ───
function subscribeReducedMotion(callback) {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getSnapshotReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerSnapshotReducedMotion() {
  return false;
}

/**
 * Shared hook for mobile performance detection.
 * Uses useSyncExternalStore so it won't cause unnecessary re-renders.
 *
 * @returns {{ isMobile: boolean, prefersReducedMotion: boolean, mobileValue: function }}
 */
export function useMobilePerf() {
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getSnapshotMobile,
    getServerSnapshotMobile
  );

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getSnapshotReducedMotion,
    getServerSnapshotReducedMotion
  );

  // Helper: return mobile or desktop value
  const mobileValue = useCallback(
    (mobileVal, desktopVal) => (isMobile ? mobileVal : desktopVal),
    [isMobile]
  );

  return { isMobile, prefersReducedMotion, mobileValue };
}

// ─── Blur constants for consistency ───
export const BLUR = {
  MOBILE: '40px',
  MOBILE_SM: '25px',
  DESKTOP_SM: '70px',
  DESKTOP_MD: '80px',
  DESKTOP_LG: '90px',
};

// ─── Helper: get mobile-aware infinite animation props ───
// Returns the animate prop only on desktop, empty on mobile
export function getMobileAnim(isMobile, desktopAnimate, desktopTransition) {
  if (isMobile) {
    return { animate: {}, transition: { duration: 0 } };
  }
  return { animate: desktopAnimate, transition: desktopTransition };
}
