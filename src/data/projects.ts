import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "spatial-canvas",
    title: "SpatialFlow 3D",
    subtitle: "WebGPU / Three.js Collaborative Canvas",
    description:
      "A next-generation spatial computing workspace for creative engineers. Features real-time physics, collaborative multiplayer node graphs, and ultra-low latency WebRTC syncing.",
    longDescription:
      "SpatialFlow 3D blends WebGPU graphics pipelines with WebSockets and CRDT algorithms, enabling teams to build, simulate, and render complex 3D environments concurrently right inside the browser without standalone desktop software.",
    category: "Frontend & 3D",
    technologies: ["Next.js", "TypeScript", "Three.js", "WebGPU", "Tailwind CSS", "Zustand"],
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    githubUrl: "https://github.com/example/spatial-flow-3d",
    liveUrl: "https://spatial-flow-demo.vercel.app",
    metrics: [
      { label: "Render Frame Rate", value: "60+ FPS" },
      { label: "Active Nodes Support", value: "10,000+" },
      { label: "Sync Latency", value: "<18ms" },
    ],
  },
  {
    id: "quantum-cloud",
    title: "NeuroPulse AI",
    subtitle: "Autonomous Agent Orchestrator & Multi-LLM Runtime",
    description:
      "An enterprise-grade autonomous agent swarm system with streaming memory recall, dynamic tool calling, and liquid-glass telemetry dashboards.",
    longDescription:
      "Engineered an event-driven agent mesh with distributed vector search, speculative decoding inference, and real-time observability. Integrates LangChain, Python sidecars, and Next.js App Router for microsecond UI reactivity.",
    category: "AI & ML",
    technologies: ["Next.js 14", "Python", "FastAPI", "OpenAI API", "Vector DB", "Framer Motion"],
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    githubUrl: "https://github.com/example/neuropulse-ai",
    liveUrl: "https://neuropulse.vercel.app",
    metrics: [
      { label: "Tokens Processed", value: "45M/mo" },
      { label: "Query Speed", value: "140ms" },
      { label: "Accuracy Score", value: "99.2%" },
    ],
  },
  {
    id: "aether-defi",
    title: "Aether Protocol",
    subtitle: "High-Frequency Algorithmic Liquidity Engine",
    description:
      "Institutional decentralised exchange aggregator featuring zero-knowledge privacy layers, real-time depth order books, and liquid glass financial charts.",
    longDescription:
      "A high-throughput algorithmic DEX portal featuring sub-second MEV protection, cryptographic proof validation, and a customized WebGL orderbook visualizer for ultra-clear market depth comprehension.",
    category: "Web3",
    technologies: ["Solidity", "TypeScript", "Ethers.js", "Next.js", "Wagmi", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    githubUrl: "https://github.com/example/aether-protocol",
    liveUrl: "https://aether-protocol.vercel.app",
    metrics: [
      { label: "Total Volume", value: "$420M+" },
      { label: "Slippage", value: "<0.05%" },
      { label: "Gas Saved", value: "34%" },
    ],
  },
  {
    id: "chronos-os",
    title: "Chronos Glass OS",
    subtitle: "Futuristic Web Operating System & Desktop Workspace",
    description:
      "A complete in-browser desktop environment featuring frosted glass windows, multitasking process manager, custom filesystem, and interactive terminal.",
    longDescription:
      "Inspired by macOS and VisionOS, Chronos Glass OS showcases cutting-edge CSS backdrop filters, custom window management algorithms, dynamic tiling, and a modular plugin ecosystem.",
    category: "Full Stack",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "IndexedDB", "Web Workers"],
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    githubUrl: "https://github.com/example/chronos-glass-os",
    liveUrl: "https://chronos-os.vercel.app",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Window Frame Rate", value: "120 FPS" },
      { label: "Bundle Size", value: "84 KB" },
    ],
  },
  {
    id: "vortex-ai",
    title: "Vortex Analytics",
    subtitle: "Distributed Microservices Metrics Visualizer",
    description:
      "Real-time distributed tracing platform with predictive anomaly detection and interactive 3D particle network topology maps.",
    longDescription:
      "A full-stack monitoring platform collecting traces from Kubernetes clusters, analyzing latency bottlenecks with machine learning heuristics, and rendering dynamic cluster health topologies.",
    category: "Full Stack",
    technologies: ["Go", "Next.js", "ClickHouse", "Three.js", "Docker", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    githubUrl: "https://github.com/example/vortex-analytics",
    liveUrl: "https://vortex-analytics.vercel.app",
    metrics: [
      { label: "Events / Sec", value: "250K" },
      { label: "Query Latency", value: "<15ms" },
      { label: "Cost Reduction", value: "48%" },
    ],
  },
  {
    id: "zenith-synth",
    title: "Zenith Audio Core",
    subtitle: "Polyphonic WebAudio Synthesizer & Spatial 3D Visualizer",
    description:
      "Browser-based modular synthesizer engine with real-time audio analysis shaders and interactive reactive crystal geometry.",
    longDescription:
      "Utilizes the Web Audio API AudioWorklet threads for zero-jitter DSP synthesis, connected directly to GLSL vertex displacement shaders for hypnotic liquid glass visual representations.",
    category: "Frontend & 3D",
    technologies: ["Web Audio API", "Three.js", "GLSL Shaders", "TypeScript", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    githubUrl: "https://github.com/example/zenith-audio",
    liveUrl: "https://zenith-audio.vercel.app",
    metrics: [
      { label: "Sample Rate", value: "96 kHz" },
      { label: "Audio Latency", value: "4.2ms" },
      { label: "Polyphony", value: "32 Voices" },
    ],
  },
];

