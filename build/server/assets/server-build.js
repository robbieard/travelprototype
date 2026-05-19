import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@react-router/node';
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, useNavigate, useLocation, Meta, Links, ScrollRestoration, Scripts, useRouteError, useAsyncError } from 'react-router';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { forwardRef, useEffect, createElement, useRef, useState, Component, useCallback } from 'react';
import { useButton } from '@react-aria/button';
import { f as fetchWithHeaders } from './index-CPSik9gs.js';
import { SessionProvider, signIn } from '@hono/auth-js/react';
import { toPng } from 'html-to-image';
import { serializeError } from 'serialize-error';
import { Toaster, toast } from 'sonner';
import { useIdleTimer } from 'react-idle-timer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import _JSXStyle from 'styled-jsx/style.js';
import { Phone, X, Menu, ArrowRight, ArrowUpRight, Star, MapPin, Mail } from 'lucide-react';
import fg from 'fast-glob';
import 'node:async_hooks';
import 'node:console';
import '@auth/core';
import '@auth/core/providers/credentials';
import '@hono/auth-js';
import '@neondatabase/serverless';
import 'argon2';
import 'hono';
import 'hono/context-storage';
import 'hono/cors';
import 'hono/proxy';
import 'hono/body-limit';
import 'hono/request-id';
import 'hono/factory';
import '@hono/node-server';
import '@hono/node-server/serve-static';
import 'hono/logger';
import 'ws';
import 'node:path';
import 'node:fs';
import 'node:url';
import '@react-router/dev/routes';
import '@auth/core/jwt';
import 'node:fs/promises';

const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}

const entryServer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: 'Module' }));

const JSX_RENDER_ID_ATTRIBUTE_NAME = "data-render-id";
function buildGridPlaceholder(w, h) {
  const size = Math.max(w, h);
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 895 895" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="895" height="895" fill="#E9E7E7"/>
<g>
<line x1="447.505" y1="-23" x2="447.505" y2="901" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="447.505" x2="5.66443" y2="447.505" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="278.068" x2="5.66443" y2="278.068" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="57.1505" x2="5.66443" y2="57.1504" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="61.8051" y1="883.671" x2="61.8051" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="282.495" y1="907" x2="282.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="611.495" y1="907" x2="611.495" y2="-30" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="832.185" y1="883.671" x2="832.185" y2="6.10572e-05" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="827.53" x2="5.66443" y2="827.53" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="889.335" y1="606.613" x2="5.66443" y2="606.612" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="4.3568" y1="4.6428" x2="889.357" y2="888.643" stroke="#C0C0C0" stroke-width="1.00975"/>
<line x1="-0.3568" y1="894.643" x2="894.643" y2="0.642772" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.5" cy="441.5" r="163.995" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="447.911" cy="447.911" r="237.407" stroke="#C0C0C0" stroke-width="1.00975"/>
<circle cx="448" cy="442" r="384.495" stroke="#C0C0C0" stroke-width="1.00975"/>
</g>
</svg>
`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function useOptionalRef(ref) {
  const fallbackRef = useRef(null);
  if (ref && "instance" in ref) return fallbackRef;
  return ref ?? fallbackRef;
}
const CreatePolymorphicComponent = /* @__PURE__ */ forwardRef(
  // @ts-expect-error -- generic forwardRef signature doesn't propagate the As type param
  function CreatePolymorphicComponentRender({
    as,
    children,
    renderId,
    onError,
    ...rest
  }, forwardedRef) {
    const props = as === "img" ? {
      ...rest,
      // keep the original type of onError for <img>
      onError: (e) => {
        if (typeof onError === "function") onError(e);
        const img = e.currentTarget;
        const {
          width,
          height
        } = img.getBoundingClientRect();
        img.dataset.hasFallback = "1";
        img.onerror = null;
        img.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        img.style.objectFit = "cover";
      }
    } : rest;
    const ref = useOptionalRef(forwardedRef);
    useEffect(() => {
      const el = ref && "current" in ref ? ref.current : null;
      if (!el) return;
      if (as !== "img") {
        const placeholder = () => {
          const {
            width,
            height
          } = el.getBoundingClientRect();
          return buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
        };
        const applyBgFallback = () => {
          el.dataset.hasFallback = "1";
          el.style.backgroundImage = `url("${placeholder()}")`;
          el.style.backgroundSize = "cover";
        };
        const probeBg = () => {
          const bg = getComputedStyle(el).backgroundImage;
          const match = /url\(["']?(.+?)["']?\)/.exec(bg);
          const src = match?.[1];
          if (!src) return;
          const probe = new Image();
          probe.onerror = applyBgFallback;
          probe.src = src;
        };
        probeBg();
        const ro2 = new ResizeObserver(([entry]) => {
          if (!el.dataset.hasFallback) return;
          const {
            width,
            height
          } = entry.contentRect;
          el.style.backgroundImage = `url("${buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128)}")`;
        });
        ro2.observe(el);
        const mo = new MutationObserver(probeBg);
        mo.observe(el, {
          attributes: true,
          attributeFilter: ["style", "class"]
        });
        return () => {
          ro2.disconnect();
          mo.disconnect();
        };
      }
      if (!el.dataset.hasFallback) return;
      const ro = new ResizeObserver(([entry]) => {
        const {
          width,
          height
        } = entry.contentRect;
        el.src = buildGridPlaceholder(Math.round(width) || 128, Math.round(height) || 128);
      });
      ro.observe(el);
      return () => ro.disconnect();
    }, [as, ref]);
    return /* @__PURE__ */ createElement(as, Object.assign({}, props, {
      ref,
      ...renderId ? {
        [JSX_RENDER_ID_ATTRIBUTE_NAME]: renderId
      } : void 0
    }), children);
  }
);

function LoadFonts() {
  return /* @__PURE__ */ jsx(Fragment, {});
}

function useDevServerHeartbeat() {
  useIdleTimer({
    disabled: typeof window === "undefined",
    throttle: 6e4 * 3,
    timeout: 6e4,
    onAction: () => {
      fetch("/", {
        method: "GET"
      }).catch((error) => {
      });
    }
  });
}

if (typeof window !== "undefined") {
  void import('vanilla-colorful/hex-color-picker.js');
}

const links = () => [];
if (globalThis.window && globalThis.window !== void 0) {
  globalThis.window.fetch = fetchWithHeaders;
}
const LoadFontsSSR = LoadFonts ;
function InternalErrorBoundary({
  error: errorArg
}) {
  const routeError = useRouteError();
  const asyncError = useAsyncError();
  const error = errorArg ?? asyncError ?? routeError;
  const [isOpen, setIsOpen] = useState(false);
  const shouldScale = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const scaleFactor = shouldScale ? 1.02 : 1;
  const copyButtonTextClass = shouldScale ? "text-sm" : "text-xs";
  const copyButtonPaddingClass = shouldScale ? "px-[10px] py-[5px]" : "px-[6px] py-[3px]";
  const postCountRef = useRef(0);
  const lastPostTimeRef = useRef(0);
  const lastErrorKeyRef = useRef(null);
  const MAX_ERROR_POSTS_PER_ERROR = 5;
  const THROTTLE_MS = 1e3;
  useEffect(() => {
    const serialized = serializeError(error);
    const errorKey = JSON.stringify(serialized);
    if (errorKey !== lastErrorKeyRef.current) {
      lastErrorKeyRef.current = errorKey;
      postCountRef.current = 0;
    }
    if (postCountRef.current >= MAX_ERROR_POSTS_PER_ERROR) {
      return;
    }
    const now = Date.now();
    const timeSinceLastPost = now - lastPostTimeRef.current;
    const post = () => {
      if (postCountRef.current >= MAX_ERROR_POSTS_PER_ERROR) {
        return;
      }
      postCountRef.current += 1;
      lastPostTimeRef.current = Date.now();
      window.parent.postMessage({
        type: "sandbox:error:detected",
        error: serialized
      }, "*");
    };
    if (timeSinceLastPost < THROTTLE_MS) {
      const timer = setTimeout(post, THROTTLE_MS - timeSinceLastPost);
      return () => clearTimeout(timer);
    }
    post();
  }, [error]);
  useEffect(() => {
    const animateTimer = setTimeout(() => setIsOpen(true), 100);
    return () => clearTimeout(animateTimer);
  }, []);
  const {
    buttonProps: copyButtonProps
  } = useButton({
    onPress: useCallback(() => {
      const toastScale = shouldScale ? 1.2 : 1;
      const toastStyle = {
        padding: `${16 * toastScale}px`,
        background: "#18191B",
        border: "1px solid #2C2D2F",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: `${280 * toastScale}px`,
        fontSize: `${13 * toastScale}px`,
        display: "flex",
        alignItems: "center",
        gap: `${6 * toastScale}px`,
        justifyContent: "flex-start",
        margin: "0 auto"
      };
      navigator.clipboard.writeText(JSON.stringify(serializeError(error)));
      toast.custom(() => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: toastStyle,
        renderId: "render-0028d0ba",
        as: "div",
        children: [/* @__PURE__ */ jsxs("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
          children: [/* @__PURE__ */ jsx("title", {
            children: "Success"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
            renderId: "render-44cad991",
            as: "path"
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-e66021e0",
          as: "span",
          children: "Copied successfully!"
        })]
      }), {
        id: "copy-error-success",
        duration: 3e3
      });
    }, [error, shouldScale])
  }, useRef(null));
  function isInIframe() {
    try {
      return window.parent !== window;
    } catch {
      return true;
    }
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: !isInIframe() && /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      className: `fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-md z-50 transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`,
      style: {
        width: "75vw"
      },
      renderId: "render-a9719cf7",
      as: "div",
      children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        className: "bg-[#18191B] text-[#F2F2F2] rounded-lg p-4 shadow-lg w-full",
        style: scaleFactor !== 1 ? {
          transform: `scale(${scaleFactor})`,
          transformOrigin: "bottom center"
        } : void 0,
        renderId: "render-bb1a10c7",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "flex items-start gap-3",
          renderId: "render-842d5262",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "flex-shrink-0",
            renderId: "render-0d6abfbb",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "w-8 h-8 bg-[#F2F2F2] rounded-full flex items-center justify-center",
              renderId: "render-005b4d19",
              as: "div",
              children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-black text-[1.125rem] leading-none",
                renderId: "render-6cb66088",
                as: "span",
                children: "!"
              })
            })
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-2 flex-1",
            renderId: "render-6a5bc1bd",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              className: "flex flex-col gap-1",
              renderId: "render-a2266be1",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "font-light text-[#F2F2F2] text-sm",
                renderId: "render-0c5c5f65",
                as: "p",
                children: "App Error Detected"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "text-[#959697] text-sm font-light",
                renderId: "render-96e42a08",
                as: "p",
                children: "It looks like an error occurred while trying to use your app."
              })]
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: `flex flex-row items-center justify-center gap-[4px] outline-none transition-colors rounded-[8px] border-[1px] bg-[#2C2D2F] hover:bg-[#414243] active:bg-[#555658] border-[#414243] text-white ${copyButtonTextClass} ${copyButtonPaddingClass} w-fit`,
              type: "button",
              ...copyButtonProps,
              renderId: "render-b778f340",
              as: "button",
              children: "Copy error"
            })]
          })]
        })
      })
    })
  });
}
class ErrorBoundaryWrapper extends Component {
  state = {
    hasError: false,
    error: null
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx(InternalErrorBoundary, {
        error: this.state.error,
        params: {}
      });
    }
    return this.props.children;
  }
}
function LoaderWrapper({
  loader
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: loader()
  });
}
const ClientOnly = ({
  loader
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return /* @__PURE__ */ jsx(ErrorBoundaryWrapper, {
    children: isMounted ? /* @__PURE__ */ jsx(LoaderWrapper, {
      loader
    }) : null
  });
};
function useHmrConnection() {
  const [connected, setConnected] = useState(() => false);
  useEffect(() => {
    return;
  }, []);
  return connected;
}
const healthyResponseType = "sandbox:web:healthcheck:response";
const useHandshakeParent = () => {
  const isHmrConnected = useHmrConnection();
  useEffect(() => {
    const healthyResponse = {
      type: healthyResponseType,
      healthy: isHmrConnected,
      supportsErrorDetected: true
    };
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:web:healthcheck") {
        window.parent.postMessage(healthyResponse, "*");
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage(healthyResponse, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isHmrConnected]);
};
const waitForScreenshotReady = async () => {
  const images = Array.from(document.images);
  await Promise.all([
    // make sure custom fonts are loaded
    "fonts" in document ? document.fonts.ready : Promise.resolve(),
    ...images.map((img) => new Promise((resolve) => {
      img.crossOrigin = "anonymous";
      if (img.complete) {
        resolve(true);
        return;
      }
      img.onload = () => resolve(true);
      img.onerror = () => resolve(true);
    }))
  ]);
  await new Promise((resolve) => setTimeout(resolve, 250));
};
const useHandleScreenshotRequest = () => {
  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.data.type === "sandbox:web:screenshot:request") {
        try {
          await waitForScreenshotReady();
          const width = window.innerWidth;
          const aspectRatio = 16 / 9;
          const height = Math.floor(width / aspectRatio);
          const dataUrl = await toPng(document.body, {
            cacheBust: true,
            skipFonts: false,
            width,
            height,
            style: {
              // force snapshot sizing
              width: `${width}px`,
              height: `${height}px`,
              margin: "0"
            }
          });
          window.parent.postMessage({
            type: "sandbox:web:screenshot:response",
            dataUrl
          }, "*");
        } catch (error) {
          window.parent.postMessage({
            type: "sandbox:web:screenshot:error",
            error: error instanceof Error ? error.message : String(error)
          }, "*");
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
};
function Layout({
  children
}) {
  useHandshakeParent();
  useHandleScreenshotRequest();
  useDevServerHeartbeat();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location?.pathname;
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "sandbox:navigation") {
        navigate(event.data.pathname);
      }
    };
    window.addEventListener("message", handleMessage);
    window.parent.postMessage({
      type: "sandbox:web:ready"
    }, "*");
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);
  useEffect(() => {
    if (pathname) {
      window.parent.postMessage({
        type: "sandbox:web:navigation",
        pathname
      }, "*");
    }
  }, [pathname]);
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {}), /* @__PURE__ */ jsx("script", {
        type: "module",
        src: "/src/__create/dev-error-overlay.js"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: "/src/__create/favicon.png"
      }), LoadFontsSSR ? /* @__PURE__ */ jsx(LoadFontsSSR, {}) : null]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(ClientOnly, {
        loader: () => children
      }), /* @__PURE__ */ jsx(Toaster, {
        position: isMobile ? "top-center" : "bottom-right"
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx("link", {
        rel: "preconnect",
        href: "https://ka-p.fontawesome.com",
        crossOrigin: "anonymous"
      }), /* @__PURE__ */ jsx("link", {
        rel: "stylesheet",
        href: "https://ka-p.fontawesome.com/releases/v6.3.0/css/pro.min.css?token=2c15cc0cc7",
        crossOrigin: "anonymous"
      })]
    })]
  });
}
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(InternalErrorBoundary);
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(SessionProvider, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});

const route0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ClientOnly,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  useHandleScreenshotRequest,
  useHmrConnection
}, Symbol.toStringTag, { value: 'Module' }));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1e3 * 60 * 5,
      // 5 minutes
      cacheTime: 1e3 * 60 * 30,
      // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});
function RootLayout({
  children
}) {
  return /* @__PURE__ */ jsx(QueryClientProvider, {
    client: queryClient,
    children
  });
}

const IMG = {
  hero: "/hero.jpg",
  alphard: "/alphard.png",
  innova: "/innova.jpg",
  hiace: "/hiace.jpeg",
  interior: "/interior.jpg",
  driver: "/driver.jpg",
  bali: "/padang.jpg",
  airport: "/airport.jpg",
  citynight: "/citynight.jpg",
  corporate: "/corporate.jpg"
};
const PACKAGES = [{
  name: "Paket 1",
  class: "6 jam",
  seats: "2-4",
  img: IMG.alphard,
  price: "8.500.000",
  features: ["Transportasi VIP"],
  tag: "BESTSELLER"
}, {
  name: "Wisata",
  class: "4 Hari 3 Malam",
  seats: "2-6",
  img: IMG.innova,
  price: "4.200.000",
  features: ["Transportasi AC"],
  tag: "POPULER"
}, {
  name: "Eksplorasi Sumatera",
  class: "7 Hari 6 Malam",
  seats: "4-10",
  img: IMG.hiace,
  price: "12.800.000",
  features: ["Resort & Homestay", "Expert Guide", "Transportasi Minibus", "Full Board"],
  tag: "ADVENTURE"
}];
const SERVICES = [{
  no: "01",
  title: "Paket Travel Sumatera Barat",
  sub: "Eksplorasi Pulau Dewata",
  img: IMG.bali,
  desc: "lorem ipsum"
}, {
  no: "02",
  title: "Wisata Alam",
  sub: "Petualangan Tak Terlupakan",
  img: IMG.airport,
  desc: "lorem ipsum"
}, {
  no: "03",
  title: "Wisata Budaya",
  sub: "Warisan Nusantara",
  img: IMG.corporate,
  desc: "lorem ipsum"
}];
const STATS = [{
  val: "150",
  unit: "+",
  label: "Destinasi"
}, {
  val: "12",
  unit: " Thn",
  label: "Pengalaman"
}, {
  val: "25K",
  unit: "+",
  label: "Ulasan"
}, {
  val: "98",
  unit: "%",
  label: "Kepuasan"
}];
const TESTIMONIALS = [{
  name: "Budi Santoso",
  role: "Travel Blogger",
  city: "Jakarta",
  rating: 5,
  text: "Paket wisata Bali dari NusaTravel luar biasa! Pemandu lokalnya sangat berpengetahuan, hotelnya nyaman, dan itinerary-nya sempurna. Sangat merekomendasikan!"
}, {
  name: "Ratna Dewi",
  role: "Family Traveler",
  city: "Bali",
  rating: 5,
  text: "Liburan keluarga ke Jawa Tengah sangat berkesan. Anak-anak senang, semua terorganisir dengan rapi. Pasti akan booking lagi untuk destinasi lain."
}, {
  name: "Hendra Kusuma",
  role: "Adventure Seeker",
  city: "Surabaya",
  rating: 5,
  text: "Eksplorasi Sumatera 7 hari adalah petualangan terbaik saya. Pemandunya expert, rute-nya off the beaten path, pengalaman yang tak terlupakan!"
}];
const S = {
  bg: "#0C0C0C",
  surface: "#111111",
  border: "rgba(255,255,255,0.07)",
  gold: "#C9A257",
  text: "#F0EEE8",
  muted: "rgba(240,238,232,0.5)",
  dim: "rgba(240,238,232,0.28)"
};
function Page$9() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    style: {
      background: S.bg,
      color: S.text,
      fontFamily: "'Inter', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden"
    },
    className: "jsx-3520536481",
    renderId: "render-cd0ea7e1",
    as: "div",
    children: [/* @__PURE__ */ jsx(_JSXStyle, {
      id: "3520536481",
      children: ["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');", "*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}", "html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", "body{background:#0C0C0C;}", "::-webkit-scrollbar{width:3px;}", "::-webkit-scrollbar-track{background:#0C0C0C;}", "::-webkit-scrollbar-thumb{background:#2a2a2a;}", ".serif{font-family:'Cormorant Garamond',Georgia,serif;}", "@-webkit-keyframes fadeUp{from{opacity:0;-webkit-transform:translateY(28px);-ms-transform:translateY(28px);transform:translateY(28px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes fadeUp{from{opacity:0;-webkit-transform:translateY(28px);-ms-transform:translateY(28px);transform:translateY(28px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", ".fade-up{-webkit-animation:fadeUp .9s cubic-bezier(.16,1,.3,1) forwards;animation:fadeUp .9s cubic-bezier(.16,1,.3,1) forwards;}", ".fade-up-2{-webkit-animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .18s forwards;animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .18s forwards;opacity:0;}", ".fade-up-3{-webkit-animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .34s forwards;animation:fadeUp .9s cubic-bezier(.16,1,.3,1) .34s forwards;opacity:0;}", ".svc-row{-webkit-transition:background .2s;transition:background .2s;cursor:pointer;}", ".svc-row:hover{background:rgba(201,162,87,0.04);}", ".svc-row:hover .svc-arrow{opacity:1;-webkit-transform:translate(2px,-2px);-ms-transform:translate(2px,-2px);transform:translate(2px,-2px);}", ".svc-arrow{opacity:0;-webkit-transition:opacity .2s,-webkit-transform .2s;-webkit-transition:opacity .2s,transform .2s;transition:opacity .2s,transform .2s;}", ".fleet-tab{-webkit-transition:all .2s;transition:all .2s;}", ".fleet-tab:hover{color:#C9A257 !important;}", ".btn-gold{-webkit-transition:background .2s,color .2s;transition:background .2s,color .2s;}", ".btn-gold:hover{background:#d4a84a !important;}", ".btn-ghost{-webkit-transition:border-color .2s,color .2s;transition:border-color .2s,color .2s;}", ".btn-ghost:hover{border-color:#C9A257 !important;color:#C9A257 !important;}", ".nav-link{-webkit-transition:color .2s;transition:color .2s;}", ".nav-link:hover{color:#C9A257 !important;}", ".footer-link{-webkit-transition:color .2s;transition:color .2s;}", ".footer-link:hover{color:#C9A257 !important;}", "@media (max-width:900px){.hide-mobile{display:none !important;}.show-mobile{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;}.grid-2col{grid-template-columns:1fr !important;}.grid-3col{grid-template-columns:1fr !important;}.grid-4col{grid-template-columns:1fr 1fr !important;}.hero-content{padding:0 24px 100px !important;}.section-pad{padding:56px 24px !important;}.section-pad-y{padding-top:56px !important;padding-bottom:56px !important;}.fleet-grid{grid-template-columns:1fr !important;min-height:auto !important;}.fleet-img{min-height:260px !important;}.fleet-info{padding:36px 28px !important;}.driver-grid{grid-template-columns:1fr !important;}.svc-row-grid{grid-template-columns:40px 1fr !important;}.svc-row-img{display:none !important;}.svc-row-desc{display:none !important;}.stat-bar{grid-template-columns:1fr 1fr !important;}.footer-grid{grid-template-columns:1fr 1fr !important;}.nav-pad{padding:0 20px !important;}}"]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(12,12,12,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${S.border}` : "none",
        transition: "all .4s ease",
        padding: "0 52px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      className: "jsx-3520536481 nav-pad",
      renderId: "render-6f96958c",
      as: "header",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12
        },
        className: "jsx-3520536481",
        renderId: "render-49fdb7f1",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            width: 34,
            height: 34,
            border: `1px solid ${S.gold}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          },
          className: "jsx-3520536481",
          renderId: "render-18cf78b9",
          as: "div",
          children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              color: S.gold,
              fontSize: 10,
              letterSpacing: "0.18em",
              fontWeight: 600
            },
            className: "jsx-3520536481",
            renderId: "render-c0941477",
            as: "span",
            children: "NT"
          })
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.1em",
            color: S.text
          },
          className: "jsx-3520536481",
          renderId: "render-dd4dfbec",
          as: "span",
          children: "NUSATRAVEL"
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          display: "flex",
          gap: 40
        },
        className: "jsx-3520536481 hide-mobile",
        renderId: "render-0bc251b5",
        as: "nav",
        children: ["Layanan", "Paket", "Tentang", "Kontak"].map((n) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          href: "#",
          style: {
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: S.muted
          },
          className: "jsx-3520536481 nav-link",
          renderId: "render-9d584617",
          as: "a",
          children: n
        }, n))
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 24
        },
        className: "jsx-3520536481 hide-mobile",
        renderId: "render-24fa593a",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          href: "tel:+6281234567890",
          style: {
            fontSize: 12,
            color: S.muted,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 7
          },
          className: "jsx-3520536481 nav-link",
          renderId: "render-1f734f10",
          as: "a",
          children: [/* @__PURE__ */ jsx(Phone, {
            size: 12
          }), " +62 812-3456-7890"]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            background: S.gold,
            color: "#0C0C0C",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "11px 26px",
            border: "none",
            cursor: "pointer"
          },
          className: "jsx-3520536481 btn-gold",
          renderId: "render-b6bd227a",
          as: "button",
          children: "Pesan Sekarang"
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        onClick: () => setMenuOpen(!menuOpen),
        style: {
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: S.text
        },
        className: "jsx-3520536481 show-mobile",
        renderId: "render-c8ab8cd2",
        as: "button",
        children: menuOpen ? /* @__PURE__ */ jsx(X, {
          size: 22
        }) : /* @__PURE__ */ jsx(Menu, {
          size: 22
        })
      })]
    }), menuOpen && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      style: {
        position: "fixed",
        top: 72,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        background: S.bg,
        padding: "44px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 32
      },
      className: "jsx-3520536481",
      renderId: "render-eed6da3c",
      as: "div",
      children: [["Layanan", "Paket", "Tentang", "Kontak"].map((n) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        href: "#",
        style: {
          fontSize: 32,
          color: S.text,
          textDecoration: "none",
          letterSpacing: "-0.01em"
        },
        className: "jsx-3520536481 serif",
        renderId: "render-877bcabc",
        as: "a",
        children: n
      }, n)), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          marginTop: 12,
          background: S.gold,
          color: "#0C0C0C",
          padding: "15px 32px",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-start"
        },
        className: "jsx-3520536481",
        renderId: "render-5a9b8114",
        as: "button",
        children: "Pesan Sekarang"
      })]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      style: {
        position: "relative",
        height: "100vh",
        minHeight: 680,
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end"
      },
      className: "jsx-3520536481",
      renderId: "render-cd315963",
      as: "section",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        src: IMG.hero,
        alt: "Hero car",
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 40%"
        },
        className: "jsx-3520536481",
        renderId: "render-5c787d3d",
        as: "img"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(12,12,12,0.92) 35%, rgba(12,12,12,0.25) 100%)"
        },
        className: "jsx-3520536481",
        renderId: "render-30d6af74",
        as: "div"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 240,
          background: `linear-gradient(to top, ${S.bg}, transparent)`
        },
        className: "jsx-3520536481",
        renderId: "render-eaf47d0d",
        as: "div"
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          position: "relative",
          zIndex: 2,
          padding: "0 52px 96px",
          maxWidth: 680
        },
        className: "jsx-3520536481 hero-content",
        renderId: "render-0cbfd43f",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 32
          },
          className: "jsx-3520536481 fade-up",
          renderId: "render-ef1b7f85",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              width: 36,
              height: 1,
              background: S.gold
            },
            className: "jsx-3520536481",
            renderId: "render-78529cb7",
            as: "div"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: S.gold,
              fontWeight: 500
            },
            className: "jsx-3520536481",
            renderId: "render-28400171",
            as: "span",
            children: "Premium Travel Experiences · Indonesia"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            fontSize: "clamp(48px, 6.5vw, 88px)",
            fontWeight: 500,
            lineHeight: 1.05,
            marginBottom: 28,
            letterSpacing: "-0.02em"
          },
          className: "jsx-3520536481 serif fade-up-2",
          renderId: "render-1560987a",
          as: "h1",
          children: ["Pesan Travel", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-1fcecc1c",
            as: "br"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              color: S.gold,
              fontStyle: "italic"
            },
            className: "jsx-3520536481",
            renderId: "render-080459c8",
            as: "em",
            children: "Lebih Mudah,"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-97afd415",
            as: "br"
          }), "Bersama Kami."]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(240,238,232,0.6)",
            marginBottom: 44,
            maxWidth: 400
          },
          className: "jsx-3520536481 fade-up-3",
          renderId: "render-3300fb7a",
          as: "p",
          children: "Penyediaan layanan jasa Travel antara kota di Sumatra Barat"
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            display: "flex",
            gap: 14,
            flexWrap: "wrap"
          },
          className: "jsx-3520536481 fade-up-3",
          renderId: "render-cdc3f956",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              background: S.gold,
              color: "#0C0C0C",
              padding: "15px 36px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10
            },
            className: "jsx-3520536481 btn-gold",
            renderId: "render-b6f52e1c",
            as: "button",
            children: ["Jelajahi Destinasi ", /* @__PURE__ */ jsx(ArrowRight, {
              size: 14
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              background: "transparent",
              color: S.text,
              padding: "15px 36px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: `1px solid rgba(240,238,232,0.22)`,
              cursor: "pointer"
            },
            className: "jsx-3520536481 btn-ghost",
            renderId: "render-5a7bbb8b",
            as: "button",
            children: "Lihat Paket"
          })]
        })]
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: `1px solid ${S.border}`
        },
        className: "jsx-3520536481 stat-bar",
        renderId: "render-6cb5fcbe",
        as: "div",
        children: STATS.map((s, i) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            padding: "22px 0",
            textAlign: "center",
            borderRight: i < 3 ? `1px solid ${S.border}` : "none",
            background: "rgba(12,12,12,0.82)",
            backdropFilter: "blur(16px)"
          },
          className: "jsx-3520536481",
          renderId: "render-839fc462",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: 1
            },
            className: "jsx-3520536481",
            renderId: "render-5a1aa5bc",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 30,
                fontWeight: 500,
                color: S.gold
              },
              className: "jsx-3520536481 serif",
              renderId: "render-2887b9b8",
              as: "span",
              children: s.val
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 16,
                color: S.gold
              },
              className: "jsx-3520536481",
              renderId: "render-62362df1",
              as: "span",
              children: s.unit
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: S.dim,
              marginTop: 4
            },
            className: "jsx-3520536481",
            renderId: "render-0b4b3a8c",
            as: "p",
            children: s.label
          })]
        }, s.label))
      })]
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      style: {
        borderBottom: `1px solid ${S.border}`,
        padding: "80px 52px"
      },
      className: "jsx-3520536481 section-pad",
      renderId: "render-63d8cade",
      as: "section",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center"
        },
        className: "jsx-3520536481 grid-2col",
        renderId: "render-699de477",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-3520536481",
          renderId: "render-d3167ee1",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: S.gold,
              marginBottom: 20
            },
            className: "jsx-3520536481",
            renderId: "render-9719d300",
            as: "p",
            children: "Tentang NusaTravel"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              fontSize: "clamp(30px, 3.2vw, 48px)",
              fontWeight: 500,
              lineHeight: 1.15
            },
            className: "jsx-3520536481 serif",
            renderId: "render-723f9227",
            as: "h2",
            children: ["Standar Tertinggi dalam", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-3520536481",
              renderId: "render-0724f077",
              as: "br"
            }), "Kenyamanan Perjalanan"]
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "jsx-3520536481",
          renderId: "render-e8b2e751",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 14,
              lineHeight: 1.9,
              color: S.muted,
              marginBottom: 24
            },
            className: "jsx-3520536481",
            renderId: "render-1ae333ea",
            as: "p",
            children: "Lorem Ipsum"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            href: "#",
            style: {
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: S.gold,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8
            },
            className: "jsx-3520536481",
            renderId: "render-759aa150",
            as: "a",
            children: ["Pelajari Lebih Lanjut ", /* @__PURE__ */ jsx(ArrowUpRight, {
              size: 13
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      style: {
        padding: "80px 52px",
        borderBottom: `1px solid ${S.border}`
      },
      className: "jsx-3520536481 section-pad",
      renderId: "render-8e3885bb",
      as: "section",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          maxWidth: 1160,
          margin: "0 auto"
        },
        className: "jsx-3520536481",
        renderId: "render-7e2c5c71",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20
          },
          className: "jsx-3520536481",
          renderId: "render-5b9beb28",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-694e7258",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: S.gold,
                marginBottom: 16
              },
              className: "jsx-3520536481",
              renderId: "render-cd9ed472",
              as: "p",
              children: "Layanan Kami"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                fontSize: "clamp(28px, 3vw, 46px)",
                fontWeight: 500,
                lineHeight: 1.15
              },
              className: "jsx-3520536481 serif",
              renderId: "render-4a0bb09b",
              as: "h2",
              children: ["Solusi untuk Setiap", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-3520536481",
                renderId: "render-0dba4973",
                as: "br"
              }), "Kebutuhan Perjalanan"]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              background: "transparent",
              color: S.gold,
              border: `1px solid ${S.gold}`,
              padding: "13px 28px",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap"
            },
            className: "jsx-3520536481 btn-ghost",
            renderId: "render-0ed8173f",
            as: "button",
            children: ["Semua Layanan ", /* @__PURE__ */ jsx(ArrowRight, {
              size: 12
            })]
          })]
        }), SERVICES.map((svc, i) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            borderTop: `1px solid ${S.border}`,
            padding: "36px 0",
            display: "grid",
            gridTemplateColumns: "56px 1fr 1.1fr 96px",
            gap: 36,
            alignItems: "center",
            borderBottom: i === SERVICES.length - 1 ? `1px solid ${S.border}` : "none"
          },
          className: "jsx-3520536481 svc-row svc-row-grid",
          renderId: "render-4202efe6",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 11,
              color: S.gold,
              letterSpacing: "0.1em"
            },
            className: "jsx-3520536481",
            renderId: "render-485119d4",
            as: "span",
            children: svc.no
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-b561447c",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 24,
                fontWeight: 500,
                marginBottom: 5,
                letterSpacing: "-0.01em"
              },
              className: "jsx-3520536481 serif",
              renderId: "render-d262dfa7",
              as: "h3",
              children: svc.title
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: S.dim
              },
              className: "jsx-3520536481",
              renderId: "render-9015af34",
              as: "p",
              children: svc.sub
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 13,
              lineHeight: 1.75,
              color: S.muted
            },
            className: "jsx-3520536481 svc-row-desc",
            renderId: "render-340795bd",
            as: "p",
            children: svc.desc
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              width: 96,
              height: 64,
              overflow: "hidden",
              flexShrink: 0
            },
            className: "jsx-3520536481 svc-row-img",
            renderId: "render-38b96dcb",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              src: svc.img,
              alt: svc.title,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.65) saturate(0.8)"
              },
              className: "jsx-3520536481",
              renderId: "render-00385cfd",
              as: "img"
            })
          })]
        }, svc.no))]
      })
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      style: {
        borderBottom: `1px solid ${S.border}`
      },
      className: "jsx-3520536481",
      renderId: "render-b0b2391a",
      as: "section",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          padding: "80px 52px 48px",
          maxWidth: 1160,
          margin: "0 auto"
        },
        className: "jsx-3520536481 section-pad-y",
        renderId: "render-ce563cef",
        as: "div",
        children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 48
          },
          className: "jsx-3520536481",
          renderId: "render-83209d2b",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-2d815fde",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: S.gold,
                marginBottom: 16
              },
              className: "jsx-3520536481",
              renderId: "render-a5ef6432",
              as: "p",
              children: "Paket Wisata Pilihan"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                fontSize: "clamp(28px, 3vw, 46px)",
                fontWeight: 500,
                lineHeight: 1.15
              },
              className: "jsx-3520536481 serif",
              renderId: "render-b1bfc493",
              as: "h2",
              children: ["Destinasi Eksklusif,", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                className: "jsx-3520536481",
                renderId: "render-be7fcabe",
                as: "br"
              }), "Dikurasi dengan Cermat"]
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              display: "flex",
              gap: 3
            },
            className: "jsx-3520536481",
            renderId: "render-8ccdbdb3",
            as: "div",
            children: PACKAGES.map((p, i) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              onClick: () => setActivePackage(i),
              style: {
                padding: "10px 20px",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: activePackage === i ? S.gold : "transparent",
                color: activePackage === i ? "#0C0C0C" : S.muted,
                border: `1px solid ${activePackage === i ? S.gold : S.border}`,
                cursor: "pointer",
                fontWeight: activePackage === i ? 700 : 400
              },
              className: "jsx-3520536481 fleet-tab",
              renderId: "render-0c011163",
              as: "button",
              children: p.name
            }, p.name))
          })]
        })
      }), PACKAGES.map((p, i) => activePackage === i && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        },
        className: "jsx-3520536481 fleet-grid",
        renderId: "render-856d02f3",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            position: "relative",
            overflow: "hidden",
            minHeight: 440
          },
          className: "jsx-3520536481 fleet-img",
          renderId: "render-ec4b4615",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: p.img,
            alt: p.name,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            },
            className: "jsx-3520536481",
            renderId: "render-f700702a",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(12,12,12,0.15), transparent)"
            },
            className: "jsx-3520536481",
            renderId: "render-35c651e8",
            as: "div"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              position: "absolute",
              top: 24,
              left: 24
            },
            className: "jsx-3520536481",
            renderId: "render-fa2643d7",
            as: "div",
            children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                background: S.gold,
                color: "#0C0C0C",
                fontSize: 10,
                letterSpacing: "0.18em",
                fontWeight: 800,
                padding: "6px 14px"
              },
              className: "jsx-3520536481",
              renderId: "render-76a341d8",
              as: "span",
              children: p.tag
            })
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            padding: "56px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: S.surface
          },
          className: "jsx-3520536481 fleet-info",
          renderId: "render-bcf4a88c",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: S.gold,
              marginBottom: 14
            },
            className: "jsx-3520536481",
            renderId: "render-7e29b066",
            as: "p",
            children: [p.class, " · ", p.seats, " Orang"]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: "clamp(30px, 3vw, 44px)",
              fontWeight: 500,
              marginBottom: 32,
              lineHeight: 1.1
            },
            className: "jsx-3520536481 serif",
            renderId: "render-89115ba3",
            as: "h3",
            children: p.name
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginBottom: 40
            },
            className: "jsx-3520536481",
            renderId: "render-585200b0",
            as: "div",
            children: p.features.map((feat) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 16
              },
              className: "jsx-3520536481",
              renderId: "render-933cee72",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  width: 22,
                  height: 1,
                  background: S.gold,
                  flexShrink: 0
                },
                className: "jsx-3520536481",
                renderId: "render-a3985c61",
                as: "div"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  fontSize: 13,
                  color: S.muted
                },
                className: "jsx-3520536481",
                renderId: "render-f9b53bdf",
                as: "span",
                children: feat
              })]
            }, feat))
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              marginBottom: 36
            },
            className: "jsx-3520536481",
            renderId: "render-cf7f9c11",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: S.dim,
                marginBottom: 8
              },
              className: "jsx-3520536481",
              renderId: "render-343be4f1",
              as: "p",
              children: "Mulai Dari"
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                alignItems: "baseline",
                gap: 5
              },
              className: "jsx-3520536481",
              renderId: "render-a10a4f32",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  fontSize: 12,
                  color: S.muted
                },
                className: "jsx-3520536481",
                renderId: "render-007da5af",
                as: "span",
                children: "Rp"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  fontSize: 42,
                  fontWeight: 500,
                  color: S.gold,
                  lineHeight: 1
                },
                className: "jsx-3520536481 serif",
                renderId: "render-90fa5292",
                as: "span",
                children: p.price
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  fontSize: 13,
                  color: S.dim
                },
                className: "jsx-3520536481",
                renderId: "render-be51d1e7",
                as: "span",
                children: "/ paket"
              })]
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              background: S.gold,
              color: "#0C0C0C",
              padding: "15px 36px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              alignSelf: "flex-start",
              display: "flex",
              alignItems: "center",
              gap: 10
            },
            className: "jsx-3520536481 btn-gold",
            renderId: "render-0967b995",
            as: "button",
            children: ["Pesan Paket Ini ", /* @__PURE__ */ jsx(ArrowRight, {
              size: 13
            })]
          })]
        })]
      }, p.name))]
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      style: {
        position: "relative",
        height: 440,
        overflow: "hidden"
      },
      className: "jsx-3520536481",
      renderId: "render-2cb12cf5",
      as: "section",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        src: IMG.citynight,
        alt: "City",
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 55%"
        },
        className: "jsx-3520536481",
        renderId: "render-e9c14ddc",
        as: "img"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          position: "absolute",
          inset: 0,
          background: "rgba(12,12,12,0.72)"
        },
        className: "jsx-3520536481",
        renderId: "render-a0ca1553",
        as: "div"
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          flexDirection: "column"
        },
        className: "jsx-3520536481",
        renderId: "render-43fd33a6",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: S.gold,
            marginBottom: 22
          },
          className: "jsx-3520536481",
          renderId: "render-cd852f90",
          as: "p",
          children: "Jangkauan Kami"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: "clamp(30px, 4.5vw, 60px)",
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: 20
          },
          className: "jsx-3520536481 serif",
          renderId: "render-bd90d42a",
          as: "h2",
          children: "150+ Destinasi di Seluruh Nusantara"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: 14,
            color: "rgba(240,238,232,0.55)",
            maxWidth: 460
          },
          className: "jsx-3520536481",
          renderId: "render-6a6f0681",
          as: "p",
          children: "Dari Sabang sampai Merauke, kami hadir untuk memastikan wisata Anda lancar, nyaman, dan berkesan."
        })]
      })]
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      style: {
        borderBottom: `1px solid ${S.border}`
      },
      className: "jsx-3520536481",
      renderId: "render-7fcc7e07",
      as: "section",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        },
        className: "jsx-3520536481 driver-grid",
        renderId: "render-2790292c",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          },
          className: "jsx-3520536481 section-pad",
          renderId: "render-49d9a77b",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: S.gold,
              marginBottom: 22
            },
            className: "jsx-3520536481",
            renderId: "render-f60aac5e",
            as: "p",
            children: "Pemandu Kami"
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              fontSize: "clamp(28px, 2.8vw, 42px)",
              fontWeight: 500,
              marginBottom: 26,
              lineHeight: 1.2
            },
            className: "jsx-3520536481 serif",
            renderId: "render-4d8da449",
            as: "h2",
            children: ["Profesional, Berpengalaman,", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "jsx-3520536481",
              renderId: "render-0c76eda5",
              as: "br"
            }), "& Terpercaya"]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 14,
              lineHeight: 1.9,
              color: S.muted,
              marginBottom: 38
            },
            className: "jsx-3520536481",
            renderId: "render-4c1887f1",
            as: "p",
            children: "Setiap pemandu NusaTravel melewati proses seleksi ketat, pelatihan service excellence standar hospitality internasional, dan pemeriksaan latar belakang menyeluruh. Mereka bukan sekadar pemandu — mereka adalah representasi standar kami."
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: 16
            },
            className: "jsx-3520536481",
            renderId: "render-ddbbdb9b",
            as: "div",
            children: ["Verified background check & sertifikasi profesional", "Pelatihan etika & hospitality 40+ jam", "Pemantauan performa & rating berkala", "Asuransi perjalanan komprehensif"].map((item) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 16
              },
              className: "jsx-3520536481",
              renderId: "render-0b7aab8a",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  width: 22,
                  height: 1,
                  background: S.gold,
                  flexShrink: 0
                },
                className: "jsx-3520536481",
                renderId: "render-1f8d6072",
                as: "div"
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  fontSize: 13,
                  color: S.muted
                },
                className: "jsx-3520536481",
                renderId: "render-a5331141",
                as: "span",
                children: item
              })]
            }, item))
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            position: "relative",
            overflow: "hidden",
            minHeight: 480
          },
          className: "jsx-3520536481",
          renderId: "render-6978fab7",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            src: IMG.driver,
            alt: "Professional Guide",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center"
            },
            className: "jsx-3520536481",
            renderId: "render-b5e4a866",
            as: "img"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to left, transparent 55%, rgba(12,12,12,0.5))"
            },
            className: "jsx-3520536481",
            renderId: "render-dc835797",
            as: "div"
          })]
        })]
      })
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      style: {
        padding: "80px 52px",
        background: S.surface,
        borderBottom: `1px solid ${S.border}`
      },
      className: "jsx-3520536481 section-pad",
      renderId: "render-1b7a7300",
      as: "section",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          maxWidth: 1160,
          margin: "0 auto"
        },
        className: "jsx-3520536481",
        renderId: "render-8fdafc99",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 20
          },
          className: "jsx-3520536481",
          renderId: "render-6821b632",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-2a43482d",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: S.gold,
                marginBottom: 16
              },
              className: "jsx-3520536481",
              renderId: "render-73430493",
              as: "p",
              children: "Testimoni"
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 500
              },
              className: "jsx-3520536481 serif",
              renderId: "render-8efe1cc0",
              as: "h2",
              children: "Kata Mereka Tentang Kami"
            })]
          }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 8
            },
            className: "jsx-3520536481",
            renderId: "render-c932e2a4",
            as: "div",
            children: [[...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, {
              size: 13,
              fill: S.gold,
              color: S.gold
            }, i)), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 13,
                color: S.dim,
                marginLeft: 8
              },
              className: "jsx-3520536481",
              renderId: "render-f7f1e7c4",
              as: "span",
              children: "4.9 / 5.0"
            })]
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 1,
            border: `1px solid ${S.border}`
          },
          className: "jsx-3520536481 grid-3col",
          renderId: "render-08d23ded",
          as: "div",
          children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              padding: "40px 36px",
              borderRight: i < 2 ? `1px solid ${S.border}` : "none",
              background: S.surface
            },
            className: "jsx-3520536481",
            renderId: "render-92ea699d",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                gap: 3,
                marginBottom: 24
              },
              className: "jsx-3520536481",
              renderId: "render-24c921b9",
              as: "div",
              children: [...Array(t.rating)].map((_, j) => /* @__PURE__ */ jsx(Star, {
                size: 12,
                fill: S.gold,
                color: S.gold
              }, j))
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                fontSize: 14,
                lineHeight: 1.85,
                color: S.muted,
                marginBottom: 28,
                fontStyle: "italic"
              },
              className: "jsx-3520536481",
              renderId: "render-ae10623a",
              as: "p",
              children: ['"', t.text, '"']
            }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end"
              },
              className: "jsx-3520536481",
              renderId: "render-00168da8",
              as: "div",
              children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                className: "jsx-3520536481",
                renderId: "render-b0132465",
                as: "div",
                children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  style: {
                    fontSize: 13,
                    fontWeight: 500,
                    marginBottom: 3,
                    color: S.text
                  },
                  className: "jsx-3520536481",
                  renderId: "render-d29fd1ee",
                  as: "p",
                  children: t.name
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  style: {
                    fontSize: 11,
                    color: S.dim
                  },
                  className: "jsx-3520536481",
                  renderId: "render-1d0e412a",
                  as: "p",
                  children: t.role
                })]
              }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 5
                },
                className: "jsx-3520536481",
                renderId: "render-4ee56592",
                as: "div",
                children: [/* @__PURE__ */ jsx(MapPin, {
                  size: 10,
                  color: S.dim
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  style: {
                    fontSize: 11,
                    color: S.dim
                  },
                  className: "jsx-3520536481",
                  renderId: "render-387191c5",
                  as: "span",
                  children: t.city
                })]
              })]
            })]
          }, t.name))
        })]
      })
    }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      style: {
        position: "relative",
        overflow: "hidden"
      },
      className: "jsx-3520536481",
      renderId: "render-b6e71afa",
      as: "section",
      children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        src: IMG.interior,
        alt: "Luxury Interior",
        style: {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center"
        },
        className: "jsx-3520536481",
        renderId: "render-39ab751e",
        as: "img"
      }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        style: {
          position: "absolute",
          inset: 0,
          background: "rgba(12,12,12,0.85)"
        },
        className: "jsx-3520536481",
        renderId: "render-5446d1bc",
        as: "div"
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          position: "relative",
          zIndex: 2,
          padding: "100px 52px",
          textAlign: "center"
        },
        className: "jsx-3520536481 section-pad",
        renderId: "render-971ca22d",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: S.gold,
            marginBottom: 22
          },
          className: "jsx-3520536481",
          renderId: "render-a4fecbe4",
          as: "p",
          children: "Mulai Perjalanan Anda"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: "clamp(28px, 4vw, 56px)",
            fontWeight: 500,
            lineHeight: 1.1,
            marginBottom: 22,
            maxWidth: 520,
            margin: "0 auto 22px"
          },
          className: "jsx-3520536481 serif",
          renderId: "render-12688449",
          as: "h2",
          children: "Siap Merencanakan Wisata Impian Anda?"
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          style: {
            fontSize: 14,
            color: "rgba(240,238,232,0.5)",
            marginBottom: 44,
            maxWidth: 400,
            margin: "0 auto 44px"
          },
          className: "jsx-3520536481",
          renderId: "render-379d42fb",
          as: "p",
          children: "Tim konsultan wisata kami siap membantu 24/7. Hubungi kami untuk konsultasi dan penawaran khusus."
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap"
          },
          className: "jsx-3520536481",
          renderId: "render-fe79101b",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            style: {
              background: S.gold,
              color: "#0C0C0C",
              padding: "16px 40px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10
            },
            className: "jsx-3520536481 btn-gold",
            renderId: "render-6f98b9b9",
            as: "button",
            children: ["Hubungi via WhatsApp ", /* @__PURE__ */ jsx(ArrowRight, {
              size: 14
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              background: "transparent",
              color: S.text,
              border: `1px solid rgba(240,238,232,0.22)`,
              padding: "16px 40px",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer"
            },
            className: "jsx-3520536481 btn-ghost",
            renderId: "render-ace435ce",
            as: "button",
            children: "Minta Penawaran Grup"
          })]
        })]
      })]
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      style: {
        background: "#080808",
        borderTop: `1px solid ${S.border}`,
        padding: "64px 52px 40px"
      },
      className: "jsx-3520536481 section-pad",
      renderId: "render-e21bec73",
      as: "footer",
      children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        style: {
          maxWidth: 1160,
          margin: "0 auto"
        },
        className: "jsx-3520536481",
        renderId: "render-f0a3d500",
        as: "div",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 60
          },
          className: "jsx-3520536481 footer-grid",
          renderId: "render-2b4518fc",
          as: "div",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-2ad9b597",
            as: "div",
            children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 22
              },
              className: "jsx-3520536481",
              renderId: "render-9ab11382",
              as: "div",
              children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  width: 34,
                  height: 34,
                  border: `1px solid ${S.gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                className: "jsx-3520536481",
                renderId: "render-71093b52",
                as: "div",
                children: /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  style: {
                    color: S.gold,
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    fontWeight: 600
                  },
                  className: "jsx-3520536481",
                  renderId: "render-6a949f69",
                  as: "span",
                  children: "NT"
                })
              }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                style: {
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.1em"
                },
                className: "jsx-3520536481",
                renderId: "render-3c366635",
                as: "span",
                children: "NUSATRAVEL"
              })]
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 13,
                lineHeight: 1.85,
                color: S.dim,
                maxWidth: 250,
                marginBottom: 28
              },
              className: "jsx-3520536481",
              renderId: "render-cfd7045e",
              as: "p",
              children: "Layanan paket wisata premium yang melayani seluruh Indonesia sejak 2012."
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 11
              },
              className: "jsx-3520536481",
              renderId: "render-3cca9579",
              as: "div",
              children: [[Phone, "+62 812-3456-7890"], [Mail, "hello@nusatravel.id"], [MapPin, "Jakarta Selatan, Indonesia"]].map(([Icon, txt]) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 10
                },
                className: "jsx-3520536481",
                renderId: "render-551ee40e",
                as: "div",
                children: [/* @__PURE__ */ jsx(Icon, {
                  size: 12,
                  color: S.gold,
                  style: {
                    opacity: 0.7
                  },
                  className: "jsx-3520536481"
                }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                  style: {
                    fontSize: 12,
                    color: S.dim
                  },
                  className: "jsx-3520536481",
                  renderId: "render-1741f3af",
                  as: "span",
                  children: txt
                })]
              }, txt))
            })]
          }), [{
            title: "Layanan",
            links: ["Paket Wisata Bali", "Wisata Alam", "Wisata Budaya", "Wisata Keluarga", "Wisata Korporat"]
          }, {
            title: "Perusahaan",
            links: ["Tentang Kami", "Paket Wisata", "Mitra Pemandu", "Karir", "Blog"]
          }, {
            title: "Legal",
            links: ["Kebijakan Privasi", "Syarat & Ketentuan", "FAQ", "Hubungi Kami"]
          }].map((col) => /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "jsx-3520536481",
            renderId: "render-95b08894",
            as: "div",
            children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: S.gold,
                marginBottom: 22
              },
              className: "jsx-3520536481",
              renderId: "render-dbf8a3d5",
              as: "p",
              children: col.title
            }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 13
              },
              className: "jsx-3520536481",
              renderId: "render-fad7cc45",
              as: "div",
              children: col.links.map((l) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
                href: "#",
                style: {
                  fontSize: 12,
                  color: S.dim,
                  textDecoration: "none"
                },
                className: "jsx-3520536481 footer-link",
                renderId: "render-3aa98e57",
                as: "a",
                children: l
              }, l))
            })]
          }, col.title))]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          style: {
            borderTop: `1px solid ${S.border}`,
            paddingTop: 26,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12
          },
          className: "jsx-3520536481",
          renderId: "render-e34f842b",
          as: "div",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 11,
              color: "rgba(240,238,232,0.22)"
            },
            className: "jsx-3520536481",
            renderId: "render-d295f12f",
            as: "p",
            children: "© 2025 NusaTravel. Hak Cipta Dilindungi."
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            style: {
              fontSize: 11,
              color: "rgba(240,238,232,0.18)"
            },
            className: "jsx-3520536481",
            renderId: "render-15308a1a",
            as: "p",
            children: "Berlisensi Resmi · Terasuransi · Beroperasi Sejak 2012"
          })]
        })]
      })
    })]
  });
}

const page$c = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$9, {
      ...props
    })
  });
});

const route1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$c
}, Symbol.toStringTag, { value: 'Module' }));

function Page$8() {
  useEffect(() => {
    const run = async () => {
      throw new Error("async effect exploded");
    };
    run();
  }, []);
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-9b01fce0",
    as: "div",
    children: "async effect error"
  });
}

const page$b = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$8, {
      ...props
    })
  });
});

const route2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$b
}, Symbol.toStringTag, { value: 'Module' }));

function Page$7() {
  const handleClick = () => {
    throw new Error("click handler exploded");
  };
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    onClick: handleClick,
    renderId: "render-5eacbd34",
    as: "button",
    children: "Click me"
  });
}

const page$a = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$7, {
      ...props
    })
  });
});

const route3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$a
}, Symbol.toStringTag, { value: 'Module' }));

function BadHook({
  flag
}) {
  if (flag) {
    const [n, setValue] = useState(0);
    return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      renderId: "render-96494657",
      as: "div",
      children: [n, /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
        onClick: () => setValue(n + 1),
        renderId: "render-cd6259a7",
        as: "button",
        children: "Increment"
      })]
    });
  }
  return "ok";
}
function Page$6() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
    renderId: "render-19601fad",
    as: "div",
    children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      renderId: "render-5d662cac",
      as: "h1",
      children: "Bad Hook Example"
    }), /* @__PURE__ */ jsx(BadHook, {
      flag: count % 2 === 0
    }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
      onClick: () => setCount(count + 1),
      renderId: "render-2a33f801",
      as: "button",
      children: "Toggle Hook"
    })]
  });
}

const page$9 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$6, {
      ...props
    })
  });
});

const route4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$9
}, Symbol.toStringTag, { value: 'Module' }));

function Page$5() {
  const [count, setCount] = useState(0);
  setCount(count + 1);
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-6a5fd849",
    as: "div",
    children: count
  });
}

const page$8 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$5, {
      ...props
    })
  });
});

const route5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$8
}, Symbol.toStringTag, { value: 'Module' }));

function Page$4() {
  const data = JSON.parse("not valid json {{{");
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-25c1c970",
    as: "div",
    children: data.name
  });
}

const page$7 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$4, {
      ...props
    })
  });
});

const route6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$7
}, Symbol.toStringTag, { value: 'Module' }));

function Page$3() {
  const Widget = undefined;
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-b1962e22",
    as: "div",
    children: Widget()
  });
}

const page$6 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$3, {
      ...props
    })
  });
});

const route7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$6
}, Symbol.toStringTag, { value: 'Module' }));

function Bug() {
  const obj = null;
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-27e441cc",
    as: "p",
    children: obj.key
  });
}

const page$5 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Bug, {
      ...props
    })
  });
});

const route8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$5
}, Symbol.toStringTag, { value: 'Module' }));

function Page$2() {
  const data = {
    name: "test",
    value: 42
  };
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-97213d98",
    as: "div",
    children: data
  });
}

const page$4 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$2, {
      ...props
    })
  });
});

const route9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$4
}, Symbol.toStringTag, { value: 'Module' }));

function Page$1() {
  const notAFunction = 42;
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-06dca14d",
    as: "p",
    children: notAFunction()
  });
}

const page$3 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page$1, {
      ...props
    })
  });
});

const route10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$3
}, Symbol.toStringTag, { value: 'Module' }));

function Page() {
  const obj = void 0;
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-26d5cba7",
    as: "p",
    children: obj.key
  });
}

const page$2 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Page, {
      ...props
    })
  });
});

const route11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$2
}, Symbol.toStringTag, { value: 'Module' }));

function Fetcher() {
  useEffect(() => {
    fetch("/unknown");
  }, []);
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    renderId: "render-4dbb230f",
    as: "div",
    children: "unhandled promise"
  });
}

const page$1 = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(Fetcher, {
      ...props
    })
  });
});

const route12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page$1
}, Symbol.toStringTag, { value: 'Module' }));

const isDev = process.env.NEXT_PUBLIC_CREATE_ENV === "DEVELOPMENT";
const PROVIDER_LABELS = {
  google: "Google",
  facebook: "Facebook",
  twitter: "Twitter / X",
  apple: "Apple"
};
function SocialDevShimPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isDev) {
      navigate("/");
    }
  }, [navigate]);
  if (!isDev) {
    return null;
  }
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const provider = params.get("provider") || "google";
  const callbackUrl = params.get("callbackUrl") || "/";
  const label = PROVIDER_LABELS[provider] || provider;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [missingSecrets, setMissingSecrets] = useState(null);
  useEffect(() => {
    fetch(`/api/__create/check-social-secrets?provider=${encodeURIComponent(provider)}`).then((r) => r.json()).then((data) => setMissingSecrets(data.missing || [])).catch((err) => {
      console.error("Failed to check social secrets:", err);
    });
  }, [provider]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signIn("dev-social", {
        email,
        name,
        provider,
        callbackUrl
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed. Please try again.");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
    className: "min-h-screen flex items-center justify-center font-sans bg-gray-100",
    renderId: "render-7504e9e5",
    as: "div",
    children: /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
      className: "bg-white rounded-xl p-8 w-full max-w-[400px] shadow-md",
      renderId: "render-02b8e06e",
      as: "div",
      children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-amber-50 border border-amber-400 rounded-lg p-3 mb-4 text-[13px] text-amber-800",
        renderId: "render-23aa19fc",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-74e7cb03",
          as: "strong",
          children: "Development Mode"
        }), " — This is a simulated", " ", label, " sign-in. In production, users will see the real", " ", label, " OAuth screen."]
      }), error && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-red-50 border border-red-400 rounded-lg p-3 mb-4 text-[13px] text-red-900",
        renderId: "render-82243573",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-4fc7591e",
          as: "strong",
          children: "Sign-in error"
        }), " — ", error]
      }), missingSecrets && missingSecrets.length > 0 && /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "bg-red-50 border border-red-400 rounded-lg p-3 mb-4 text-[13px] text-red-900",
        renderId: "render-7774f518",
        as: "div",
        children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          renderId: "render-7daaac7d",
          as: "strong",
          children: "Missing secrets"
        }), " — ", label, " sign-in won't work in production until you add these secrets to your project:", " ", missingSecrets.map((s) => /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          className: "bg-red-200 px-1 rounded text-[12px]",
          renderId: "render-70256150",
          as: "code",
          children: s
        }, s))]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        className: "mt-0 mb-6 text-xl font-semibold",
        renderId: "render-d2f7e4a6",
        as: "h2",
        children: ["Sign in with ", label]
      }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
        onSubmit: handleSubmit,
        renderId: "render-aac00787",
        as: "form",
        children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "block mb-4",
          renderId: "render-c9fe9e18",
          as: "label",
          children: [/* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            className: "block text-sm font-medium mb-1.5",
            renderId: "render-70cb0595",
            as: "span",
            children: "Email"
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "test@example.com",
            className: "w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm",
            renderId: "render-7cf244c3",
            as: "input"
          })]
        }), /* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
          className: "block mb-6",
          renderId: "render-bf978038",
          as: "label",
          children: [/* @__PURE__ */ jsxs(CreatePolymorphicComponent, {
            className: "block text-sm font-medium mb-1.5",
            renderId: "render-af4dc4a4",
            as: "span",
            children: ["Display Name", " ", /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
              className: "text-gray-400",
              renderId: "render-a8ccffb5",
              as: "span",
              children: "(optional)"
            })]
          }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
            type: "text",
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "Test User",
            className: "w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm",
            renderId: "render-87077e31",
            as: "input"
          })]
        }), /* @__PURE__ */ jsx(CreatePolymorphicComponent, {
          type: "submit",
          disabled: loading,
          className: "w-full py-2.5 rounded-lg border-none text-white text-sm font-medium bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-default cursor-pointer",
          renderId: "render-3b7b99c5",
          as: "button",
          children: loading ? "Signing in..." : `Continue as ${label} user`
        })]
      })]
    })
  });
}

const page = UNSAFE_withComponentProps(function WrappedPage(props) {
  return /* @__PURE__ */jsx(RootLayout, {
    children: /* @__PURE__ */jsx(SocialDevShimPage, {
      ...props
    })
  });
});

const route13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: page
}, Symbol.toStringTag, { value: 'Module' }));

async function loader({
  params
}) {
  const matches = await fg("src/**/page.{js,jsx,ts,tsx}");
  return {
    path: `/${params["*"]}`,
    pages: matches.sort((a, b) => a.length - b.length).map(match => {
      const url = match.replace("src/app", "").replace(/\/page\.(js|jsx|ts|tsx)$/, "") || "/";
      const path = url.replaceAll("[", "").replaceAll("]", "");
      const displayPath = path === "/" ? "Homepage" : path;
      return {
        url,
        path: displayPath
      };
    })
  };
}
const notFound = UNSAFE_withComponentProps(function CreateDefaultNotFoundPage({
  loaderData
}) {
  const [siteMap, setSitemap] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window !== "undefined" && window.parent && window.parent !== window) {
      const handler = event => {
        if (event.data.type === "sandbox:sitemap") {
          window.removeEventListener("message", handler);
          setSitemap(event.data.sitemap);
        }
      };
      window.parent.postMessage({
        type: "sandbox:sitemap"
      }, "*");
      window.addEventListener("message", handler);
      return () => {
        window.removeEventListener("message", handler);
      };
    }
  }, []);
  const missingPath = loaderData.path.replace(/^\//, "");
  const existingRoutes = loaderData.pages.map(page => ({
    path: page.path,
    url: page.url
  }));
  const handleBack = () => {
    navigate("/");
  };
  const handleSearch = value => {
    if (!siteMap) {
      const path = `/${value}`;
      navigate(path);
    } else {
      navigate(value);
    }
  };
  const handleCreatePage = useCallback(() => {
    window.parent.postMessage({
      type: "sandbox:web:create",
      path: missingPath,
      view: "web"
    }, "*");
  }, [missingPath]);
  return /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
    className: "flex sm:w-full w-screen sm:min-w-[850px] flex-col",
    renderId: "render-5b7c1a94",
    as: "div",
    children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex w-full items-center gap-2 p-5",
      renderId: "render-f9cfe8d8",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        type: "button",
        onClick: handleBack,
        className: "flex items-center justify-center w-10 h-10 rounded-md",
        renderId: "render-f713def7",
        as: "button",
        children: /* @__PURE__ */jsxs("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-label": "Back",
          role: "img",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M8.5957 2.65435L2.25005 9L8.5957 15.3457",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-17e4e146",
            as: "path"
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            d: "M2.25007 9L15.75 9",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            renderId: "render-ff8d15a8",
            as: "path"
          })]
        })
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500",
        renderId: "render-2db7093b",
        as: "div",
        children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center px-[14px] py-[5px]",
          renderId: "render-f520cd29",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            renderId: "render-91755c85",
            as: "span",
            children: "/"
          })
        }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center min-w-0",
          renderId: "render-e4f90274",
          as: "div",
          children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]",
            style: {
              minWidth: 0
            },
            title: missingPath,
            renderId: "render-e10196f6",
            as: "p",
            children: missingPath
          })
        })]
      })]
    }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
      className: "flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px]",
      renderId: "render-1eb16767",
      as: "div",
      children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "text-4xl font-medium text-gray-900 px-2",
        renderId: "render-845cf93d",
        as: "h1",
        children: "Uh-oh! This page doesn't exist (yet)."
      }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
        className: "pt-4 pb-12 px-2 text-gray-500",
        renderId: "render-c1d1723a",
        as: "p",
        children: ['Looks like "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "font-bold",
          renderId: "render-8b13bbce",
          as: "span",
          children: ["/", missingPath]
        }), `" isn't part of your project. But no worries, you've got options!`]
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "px-[20px] w-full",
        renderId: "render-ed8f7256",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-row justify-center items-center w-full max-w-[800px] mx-auto border border-gray-200 rounded-lg p-[20px] mb-[40px] gap-[20px]",
          renderId: "render-002f4c50",
          as: "div",
          children: [/* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "flex flex-col gap-[5px] items-start self-start w-1/2",
            renderId: "render-c8355f21",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-black text-left",
              renderId: "render-0a3eff73",
              as: "p",
              children: "Build it from scratch"
            }), /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
              className: "text-sm text-gray-500 text-left",
              renderId: "render-cf96379c",
              as: "p",
              children: ['Create a new page to live at "', /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
                renderId: "render-69b45685",
                as: "span",
                children: ["/", missingPath]
              }), '"']
            })]
          }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "flex flex-row items-center justify-end w-1/2",
            renderId: "render-1a7191db",
            as: "div",
            children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              type: "button",
              className: "bg-black text-white px-[10px] py-[5px] rounded-md",
              onClick: () => handleCreatePage(),
              renderId: "render-28737f73",
              as: "button",
              children: "Create Page"
            })
          })]
        })
      }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "pb-20 lg:pb-[80px]",
        renderId: "render-bc822bca",
        as: "div",
        children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex items-center text-gray-500",
          renderId: "render-89c2ab69",
          as: "p",
          children: "Check out all your project's routes here ↓"
        })
      }), siteMap ? /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-col justify-center items-center w-full px-[50px]",
        renderId: "render-87a23d16",
        as: "div",
        children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
          className: "flex flex-col justify-between items-center w-full max-w-[600px] gap-[10px]",
          renderId: "render-68166a54",
          as: "div",
          children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
            className: "text-sm text-gray-300 pb-[10px] self-start p-4",
            renderId: "render-c195a45e",
            as: "p",
            children: "PAGES"
          }), siteMap.webPages?.map(route => /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            type: "button",
            onClick: () => handleSearch(route.cleanRoute || ""),
            className: "flex flex-row justify-between text-center items-center p-4 rounded-lg bg-white shadow-sm w-full hover:bg-gray-50",
            renderId: "render-d352ddd0",
            as: "button",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "font-medium text-gray-900",
              renderId: "render-1de82612",
              as: "h3",
              children: route.name
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "text-sm text-gray-400",
              renderId: "render-2db2f582",
              as: "p",
              children: route.cleanRoute
            })]
          }, route.id))]
        })
      }) : /* @__PURE__ */jsx(CreatePolymorphicComponent, {
        className: "flex flex-wrap gap-3 w-full max-w-[80rem] mx-auto pb-5 px-2",
        renderId: "render-88e5787e",
        as: "div",
        children: existingRoutes.map(route => /* @__PURE__ */jsx(CreatePolymorphicComponent, {
          className: "flex flex-col flex-grow basis-full sm:basis-[calc(50%-0.375rem)] xl:basis-[calc(33.333%-0.5rem)]",
          renderId: "render-161adade",
          as: "div",
          children: /* @__PURE__ */jsxs(CreatePolymorphicComponent, {
            className: "w-full flex-1 flex flex-col items-center ",
            renderId: "render-e09c6f84",
            as: "div",
            children: [/* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "relative w-full max-w-[350px] h-48 sm:h-56 lg:h-64 overflow-hidden rounded-[8px] border border-comeback-gray-75 transition-all group-hover:shadow-md",
              renderId: "render-c7a95cc5",
              as: "div",
              children: /* @__PURE__ */jsx(CreatePolymorphicComponent, {
                type: "button",
                onClick: () => handleSearch(route.url.replace(/^\//, "")),
                className: "h-full w-full rounded-[8px] bg-gray-50 bg-cover",
                renderId: "render-1051153e",
                as: "button"
              })
            }), /* @__PURE__ */jsx(CreatePolymorphicComponent, {
              className: "pt-3 text-left text-gray-500 w-full max-w-[350px]",
              renderId: "render-d2ed0bd7",
              as: "p",
              children: route.path
            })]
          })
        }, route.path))
      })]
    })]
  });
});

const route14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: notFound,
  loader
}, Symbol.toStringTag, { value: 'Module' }));

const serverManifest = {'entry':{'module':'/assets/entry.client-C9sKPVw-.js','imports':['/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/index-BjslmPf3.js'],'css':[]},'routes':{'root':{'id':'root','parentId':undefined,'path':'','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':true,'module':'/assets/root-CR21CyeC.js','imports':['/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/index-BjslmPf3.js','/assets/PolymorphicComponent-DH_HpETz.js','/assets/react-BsSlgf-q.js'],'css':['/assets/root-DEKwVV5L.css'],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'page':{'id':'page','parentId':'root','path':undefined,'index':true,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-C07t93RV.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/async-effect-error/page':{'id':'errors/async-effect-error/page','parentId':'root','path':'errors/async-effect-error','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-B4uEjmDU.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/event-handler-error/page':{'id':'errors/event-handler-error/page','parentId':'root','path':'errors/event-handler-error','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-BmATMWUi.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/hook-rule/page':{'id':'errors/hook-rule/page','parentId':'root','path':'errors/hook-rule','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-B9mrEPll.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/infinite-render-loop/page':{'id':'errors/infinite-render-loop/page','parentId':'root','path':'errors/infinite-render-loop','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-CrYDbsrp.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/json-parse-error/page':{'id':'errors/json-parse-error/page','parentId':'root','path':'errors/json-parse-error','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-CUhAOo5F.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/missing-component/page':{'id':'errors/missing-component/page','parentId':'root','path':'errors/missing-component','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-C5YvZKXZ.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/null-access/page':{'id':'errors/null-access/page','parentId':'root','path':'errors/null-access','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-Cp0uhu6-.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/render-object/page':{'id':'errors/render-object/page','parentId':'root','path':'errors/render-object','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-6lttt1Iv.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/type-error-not-function/page':{'id':'errors/type-error-not-function/page','parentId':'root','path':'errors/type-error-not-function','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-CeKVGl8g.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/undefined-access/page':{'id':'errors/undefined-access/page','parentId':'root','path':'errors/undefined-access','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-9wWNcW75.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'errors/unhandled-promise/page':{'id':'errors/unhandled-promise/page','parentId':'root','path':'errors/unhandled-promise','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-C30ELGkl.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/social-dev-shim/page':{'id':'__create/social-dev-shim/page','parentId':'root','path':'__create/social-dev-shim','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':false,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/page-BJnYb_or.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js','/assets/layout-CdeA1Ky5.js','/assets/react-BsSlgf-q.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined},'__create/not-found':{'id':'__create/not-found','parentId':'root','path':'*?','index':undefined,'caseSensitive':undefined,'hasAction':false,'hasLoader':true,'hasClientAction':false,'hasClientLoader':false,'hasClientMiddleware':false,'hasDefaultExport':true,'hasErrorBoundary':false,'module':'/assets/not-found-BLgUvio1.js','imports':['/assets/PolymorphicComponent-DH_HpETz.js','/assets/chunk-4N6VE7H7-BN1BdguA.js'],'css':[],'clientActionModule':undefined,'clientLoaderModule':undefined,'clientMiddlewareModule':undefined,'hydrateFallbackModule':undefined}},'url':'/assets/manifest-916a9fdc.js','version':'916a9fdc','sri':undefined};

const assetsBuildDirectory = "build\\client";
      const basename = "/";
      const future = {"unstable_optimizeDeps":false,"v8_passThroughRequests":false,"unstable_trailingSlashAwareDataRequests":false,"unstable_previewServerPrerendering":false,"v8_middleware":false,"v8_splitRouteModules":false,"v8_viteEnvironmentApi":false};
      const ssr = true;
      const isSpaMode = false;
      const prerender = ["/*?"];
      const routeDiscovery = {"mode":"lazy","manifestPath":"/__manifest"};
      const publicPath = "/";
      const entry = { module: entryServer };
      const routes = {
        "root": {
          id: "root",
          parentId: undefined,
          path: "",
          index: undefined,
          caseSensitive: undefined,
          module: route0
        },
  "page": {
          id: "page",
          parentId: "root",
          path: undefined,
          index: true,
          caseSensitive: undefined,
          module: route1
        },
  "errors/async-effect-error/page": {
          id: "errors/async-effect-error/page",
          parentId: "root",
          path: "errors/async-effect-error",
          index: undefined,
          caseSensitive: undefined,
          module: route2
        },
  "errors/event-handler-error/page": {
          id: "errors/event-handler-error/page",
          parentId: "root",
          path: "errors/event-handler-error",
          index: undefined,
          caseSensitive: undefined,
          module: route3
        },
  "errors/hook-rule/page": {
          id: "errors/hook-rule/page",
          parentId: "root",
          path: "errors/hook-rule",
          index: undefined,
          caseSensitive: undefined,
          module: route4
        },
  "errors/infinite-render-loop/page": {
          id: "errors/infinite-render-loop/page",
          parentId: "root",
          path: "errors/infinite-render-loop",
          index: undefined,
          caseSensitive: undefined,
          module: route5
        },
  "errors/json-parse-error/page": {
          id: "errors/json-parse-error/page",
          parentId: "root",
          path: "errors/json-parse-error",
          index: undefined,
          caseSensitive: undefined,
          module: route6
        },
  "errors/missing-component/page": {
          id: "errors/missing-component/page",
          parentId: "root",
          path: "errors/missing-component",
          index: undefined,
          caseSensitive: undefined,
          module: route7
        },
  "errors/null-access/page": {
          id: "errors/null-access/page",
          parentId: "root",
          path: "errors/null-access",
          index: undefined,
          caseSensitive: undefined,
          module: route8
        },
  "errors/render-object/page": {
          id: "errors/render-object/page",
          parentId: "root",
          path: "errors/render-object",
          index: undefined,
          caseSensitive: undefined,
          module: route9
        },
  "errors/type-error-not-function/page": {
          id: "errors/type-error-not-function/page",
          parentId: "root",
          path: "errors/type-error-not-function",
          index: undefined,
          caseSensitive: undefined,
          module: route10
        },
  "errors/undefined-access/page": {
          id: "errors/undefined-access/page",
          parentId: "root",
          path: "errors/undefined-access",
          index: undefined,
          caseSensitive: undefined,
          module: route11
        },
  "errors/unhandled-promise/page": {
          id: "errors/unhandled-promise/page",
          parentId: "root",
          path: "errors/unhandled-promise",
          index: undefined,
          caseSensitive: undefined,
          module: route12
        },
  "__create/social-dev-shim/page": {
          id: "__create/social-dev-shim/page",
          parentId: "root",
          path: "__create/social-dev-shim",
          index: undefined,
          caseSensitive: undefined,
          module: route13
        },
  "__create/not-found": {
          id: "__create/not-found",
          parentId: "root",
          path: "*?",
          index: undefined,
          caseSensitive: undefined,
          module: route14
        }
      };
      
      const allowedActionOrigins = false;

export { allowedActionOrigins, serverManifest as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
