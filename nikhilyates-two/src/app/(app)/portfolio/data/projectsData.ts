import type { Project } from '../types/portfolioTypes';

export const projectsData: Project[] = [
  {
    id: "athena",
    title: "Athena",
    description: "End-to-end real-time knee kinematics platform: BLE IMU ingest at 100 Hz, quaternion math, event detection, 3D visualization, and RAG assistant.",
    category: "hardware",
    technologies: ["FastAPI + asyncio", "WebSockets", "Bleak (BLE)", "React + React Three Fiber", "Supabase (vectors/RPC)", "OpenAI (text-embedding-3-small, chat)", "Python (signal processing)", "Next.js (API route)"],
    imageUrl: "https://picsum.photos/400/300?random=7",
    filename: "athena.hardware",
    date: "February 2025",
    link: "https://example.com/athena",
    mediaUrl: "https://picsum.photos/400/300?random=7",
    hotspots: [
      {
        id: "athena-h1",
        title: "100 Hz Streaming",
        description: "Async pipeline",
        details: "Concurrent BLE ingest with asyncio, non-blocking queues, and multi-client WebSocket broadcast with graceful shutdown.",
        type: "tech",
        position: { x: 35, y: 20 }
      },
      {
        id: "athena-h2",
        title: "Quaternion Kinematics",
        description: "Joint angle math",
        details: "Relative rotations for knee flexion, up-vector comparisons for hip/thigh, and earth-frame acceleration via q·v·q⁻¹.",
        type: "tech",
        position: { x: 70, y: 35 }
      },
      {
        id: "athena-h3",
        title: "Event Detection",
        description: "Landing & cut events",
        details: "Butterworth filters and a debounced state machine to detect high-impact events; feature windows extract pre/peak/post angles and forces.",
        type: "feature",
        position: { x: 25, y: 55 }
      },
      {
        id: "athena-h4",
        title: "3D Visualization",
        description: "Live knee model",
        details: "React Three Fiber viewer with articulated thigh/shin segments driven by live quaternions, angle overlays, and dev mode.",
        type: "feature",
        position: { x: 60, y: 70 }
      },
      {
        id: "athena-h5",
        title: "RAG Assistant",
        description: "Telemetry-aware answers",
        details: "Session summaries + vector retrieval with lightweight re-ranking and domain-tuned prompting; explicit {NONE} failure mode.",
        type: "tech",
        position: { x: 80, y: 50 }
      }
    ],
    createdAt: new Date("2025-02-01")
  },
  {
    id: "lantern",
    title: "Lantern",
    description: "Next.js app that ingests survey responses, infers evidence-backed factors, and delivers a provider-facing report with citations and pathways.",
    category: "web",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind + Radix/shadcn", "Airtable SDK", "Typeform SDK", "Stripe", "Zod", "Vercel", "Supabase (for auth/storage when needed)"],
    imageUrl: "https://picsum.photos/400/300?random=6",
    filename: "lantern.web",
    date: "October 2024",
    link: "https://example.com/lantern",
    mediaUrl: "https://picsum.photos/400/300?random=6",
    hotspots: [
      {
        id: "lantern-h1",
        title: "Rule Engine",
        description: "Deterministic inference",
        details: "Maps normalized Typeform answers to factors and exposure pathways; linear-time, set-based merging to dedupe outputs.",
        type: "feature",
        position: { x: 40, y: 30 }
      },
      {
        id: "lantern-h2",
        title: "API Aggregation",
        description: "Unified data payloads",
        details: "Route handlers orchestrate Typeform, Airtable (Factors/Pathways/Papers), and a rule engine into a single UI-ready response.",
        type: "tech",
        position: { x: 65, y: 45 }
      },
      {
        id: "lantern-h3",
        title: "Evidence Traceability",
        description: "Audit-ready outputs",
        details: "Each factor carries patient reference text and linked literature with MLA citation and PDF to support clinical review.",
        type: "feature",
        position: { x: 30, y: 65 }
      },
      {
        id: "lantern-h4",
        title: "Provider Portal UX",
        description: "Category → Factor drilldown",
        details: "Category screens and evidence-rich Factor Cards with pathways and citations; global state via React Context.",
        type: "feature",
        position: { x: 75, y: 25 }
      },
      {
        id: "lantern-h5",
        title: "Payments & Access",
        description: "Subscriptions and gating",
        details: "Stripe Embedded Checkout with server-side session creation; environment-validated secrets and gated report access.",
        type: "tech",
        position: { x: 55, y: 75 }
      }
    ],
    createdAt: new Date("2024-10-01")
  },
  {
    id: "fluffy",
    title: "Fluffy",
    description: "Next.js dashboard with large-volume data ingestion, Supabase backend, and performance-oriented client caching.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Supabase (PostgreSQL)", "TanStack Query", "ETL", "Vercel", "CodeRabbit"],
    imageUrl: "https://picsum.photos/400/300?random=8",
    filename: "fluffy.web",
    date: "August 2024",
    link: "https://example.com/fluffy",
    mediaUrl: "https://picsum.photos/400/300?random=8",
    hotspots: [
      {
        id: "fluffy-h1",
        title: "Dashboard UI",
        description: "Provider-style interface",
        details: "Built core front-end components and views in a Next.js environment suitable for high-throughput datasets.",
        type: "feature",
        position: { x: 40, y: 25 }
      },
      {
        id: "fluffy-h2",
        title: "ETL Ingestion",
        description: "Bulk data handling",
        details: "High-volume ingestion flow with attention to types, stability, and downstream queryability.",
        type: "tech",
        position: { x: 65, y: 45 }
      },
      {
        id: "fluffy-h3",
        title: "Client Caching",
        description: "Responsive UX",
        details: "TanStack Query configured for persistence, background refresh, and reduced over-fetching.",
        type: "tech",
        position: { x: 30, y: 65 }
      },
      {
        id: "fluffy-h4",
        title: "Performance Tuning",
        description: "Snappy interactions",
        details: "Optimized data fetching and render paths to maintain responsiveness under load.",
        type: "feature",
        position: { x: 75, y: 70 }
      }
    ],
    createdAt: new Date("2024-08-01")
  },
  {
    id: "sniff",
    title: "Sniff",
    description: "Expo/React Native mobile app with typed end-to-end data, robust auth/session flows, realtime notifications, and geospatial access control.",
    category: "mobile",
    technologies: ["React Native (Expo)", "TypeScript", "Supabase (Auth, Realtime, RPC)", "Redux Toolkit", "TanStack Query", "Notifee/Expo Notifications", "Turf (GeoJSON)"],
    imageUrl: "https://picsum.photos/400/300?random=5",
    filename: "sniff.mobile",
    date: "June 2024",
    link: "https://example.com/sniff",
    mediaUrl: "https://picsum.photos/400/300?random=5",
    hotspots: [
      {
        id: "sniff-h1",
        title: "Typed Architecture",
        description: "Modular, compile-time safety",
        details: "End-to-end TypeScript types for Supabase tables/RPCs; providers, stores, services, and feature modules for clear boundaries.",
        type: "tech",
        position: { x: 30, y: 25 }
      },
      {
        id: "sniff-h2",
        title: "Auth & Sessions",
        description: "Deterministic hydration",
        details: "Session orchestration with event-driven handlers (INITIAL_SESSION, SIGNED_IN, TOKEN_REFRESHED, SIGNED_OUT) and central teardown.",
        type: "feature",
        position: { x: 70, y: 40 }
      },
      {
        id: "sniff-h3",
        title: "Realtime Notifications",
        description: "Resilient delivery",
        details: "Supabase Realtime + push; exponential backoff and failover-to-polling to balance liveness vs. system pressure.",
        type: "feature",
        position: { x: 45, y: 60 }
      },
      {
        id: "sniff-h4",
        title: "Geospatial Gating",
        description: "Location-aware access",
        details: "Point-in-polygon with ray-casting and Haversine tolerance near borders; forward/reverse geocoding validation for fairness.",
        type: "feature",
        position: { x: 25, y: 75 }
      },
      {
        id: "sniff-h5",
        title: "Consistency Modeling",
        description: "Authoritative counters",
        details: "Server-authoritative unread counts via RPC; idempotent flows to avoid drift across multiple event sources.",
        type: "tech",
        position: { x: 80, y: 55 }
      }
    ],
    createdAt: new Date("2024-06-01")
  },
  {
    id: "atticus",
    title: "Atticus",
    description: "iOS + web platform featuring a RAG playground, serverless API, and secure investor demo used to showcase AI experiences for top authors.",
    category: "ai",
    technologies: ["iOS", "React Native", "Next.js", "TypeScript", "Vercel", "Supabase (PostgreSQL, pgvector)", "OpenAI (embeddings, chat)", "RAG", "VAPI", "elevenlabs"],
    imageUrl: "https://picsum.photos/400/300?random=4",
    filename: "atticus.ai",
    date: "January 2024",
    link: "https://example.com/atticus",
    mediaUrl: "https://picsum.photos/400/300?random=4",
    hotspots: [
      {
        id: "atticus-h1",
        title: "RAG Playground",
        description: "Interactive retrieval tuning",
        details: "Authenticated UI to explore document chunks with adjustable top-k, similarity threshold slider, and a live prompt editor.",
        type: "feature",
        position: { x: 35, y: 25 }
      },
      {
        id: "atticus-h2",
        title: "Serverless API",
        description: "Grounded completions endpoint",
        details: "Route `/api/book-gpt/generation` builds embeddings, runs Supabase RPC vector search, constructs a grounded prompt, and calls chat completions.",
        type: "tech",
        position: { x: 45, y: 45 }
      },
      {
        id: "atticus-h3",
        title: "Vector Search",
        description: "pgvector RPC",
        details: "Similarity search via Supabase SQL function `match_chunks` with threshold gating to balance recall vs. precision.",
        type: "tech",
        position: { x: 65, y: 65 }
      },
      {
        id: "atticus-h4",
        title: "Investor Demo Platform",
        description: "Secure interactive demo",
        details: "Delivered a polished, gated demo experience that helped secure $250k+ in funding.",
        type: "feature",
        position: { x: 75, y: 35 }
      }
    ],
    createdAt: new Date("2024-01-01")
  },
  {
    id: "2",
    title: "Large Language Models Based Test Case Generation",
    description: "Comprehensive analysis of the differences between traditional and LLM-generated python tests in both commercial and non-professional contexts.",
    category: "artificial-intel",
    technologies: ["Python", "Java", "LLMs", "Research", "Pynguin", "Comparative Analysis"],
    imageUrl: "/assets/images/projects/preview_llm.png",
    filename: "llm_tc_gen.ppr",
    date: "December 2023",
    link: "https://github.com/nikhilYates/LLM-based-testcase-generation/tree/main",
    mediaUrl: "assets/images/projects/preview_llm.png",
    hotspots: [
      {
        id: "llm1",
        position: { x: 30, y: 25 },
        title: "LLM Integration",
        description: "Large Language Model implementation",
        details: "Integrated state-of-the-art LLMs for automated test case generation, comparing their effectiveness against traditional testing methodologies in various software development contexts.",
        type: "tech"
      },
      {
        id: "llm2",
        position: { x: 65, y: 40 },
        title: "Comparative Analysis",
        description: "Traditional vs LLM-generated tests",
        details: "Conducted comprehensive analysis comparing test coverage, quality, and effectiveness between traditional test generation methods and LLM-based approaches across commercial and open-source projects.",
        type: "feature"
      },
      {
        id: "llm3",
        position: { x: 45, y: 65 },
        title: "Research Presentation",
        description: "Academic research showcase",
        details: "Presented research findings to a distinguished panel of faculty, staff, and students in the Electrical Engineering and Computer Science department, receiving an A+ grade for the comprehensive analysis.",
        type: "demo"
      },
      {
        id: "llm4",
        position: { x: 75, y: 75 },
        title: "Meta Collaboration",
        description: "Industry partnership project",
        details: "Built upon previous collaborative work with Meta, extending the research scope to include broader industry applications and real-world testing scenarios.",
        type: "info"
      }
    ],
    createdAt: new Date("2023-12-01")
  },
  {
    id: "1",
    title: "RRT-based Path Finding Algorithm",
    description: "RRT-based path planning algorithm for a robot simulation in 3D space to navigate a maze. Algorithm design and implementation was done in 48 hours with AditJainn.",
    category: "robotics",
    technologies: ["Python", "SciPy", "NumPy", "Advanced Algorithms", "Robotics", "Simulation"],
    imageUrl: "https://picsum.photos/400/300?random=1",
    filename: "rrt_pathfinding.alg",
    date: "November 2023",
    link: "https://github.com/nikhilYates/RRT-Path-Finding-Algorithm",
    mediaUrl: "assets/video/RRT-speeeed.mp4",
    hotspots: [
      {
        id: "rrt1",
        position: { x: 25, y: 30 },
        title: "RRT Algorithm Core",
        description: "Rapidly-exploring Random Tree implementation",
        details: "Custom implementation of the RRT algorithm optimized for 3D maze navigation. The algorithm efficiently explores the configuration space by randomly sampling points and connecting them to build a tree structure that finds feasible paths.",
        type: "tech"
      },
      {
        id: "rrt2",
        position: { x: 70, y: 45 },
        title: "3D Maze Navigation",
        description: "Complex 3D pathfinding solution",
        details: "Successfully navigates complex 3D mazes by processing black and white blueprint images and generating optimal waypoints. The system handles obstacles, dead ends, and finds the shortest collision-free path.",
        type: "feature"
      },
      {
        id: "rrt3",
        position: { x: 50, y: 70 },
        title: "Gazebo Integration",
        description: "Robot simulation environment",
        details: "Integrated with Gazebo simulation environment for realistic robot testing. The generated waypoints are fed to the robot controller for autonomous navigation in the simulated 3D environment.",
        type: "demo"
      },
      {
        id: "rrt4",
        position: { x: 80, y: 20 },
        title: "48-Hour Development",
        description: "Rapid prototyping achievement",
        details: "Completed the entire algorithm design, implementation, and testing within 48 hours as part of a collaborative project with AditJainn, demonstrating efficient problem-solving and teamwork.",
        type: "info"
      }
    ],
    createdAt: new Date("2023-11-01")
  },
  {
    id: "3",
    title: "Blockchain Cryptocurrency Project",
    description: "Built with Node.js, this project follows blockchain programming principles and simulates the backend of a cryptocurrency with transaction history, mining, and security features.",
    category: "saas-and-web",
    technologies: ["Node.js", "Blockchain Development", "Web3", "P2P Servers", "SHA256", "Cryptography"],
    imageUrl: "https://picsum.photos/400/300?random=3",
    filename: "blockchain.proj",
    date: "June 2022",
    link: "https://github.com/nikhilYates/mbagz-chain",
    mediaUrl: "",
    hotspots: [
      {
        id: "bc1",
        position: { x: 40, y: 30 },
        title: "Blockchain Core",
        description: "Custom blockchain implementation",
        details: "Built a complete blockchain system from scratch with block creation, chain validation, and consensus mechanisms. Implements proof-of-work mining and maintains transaction integrity across the network.",
        type: "tech"
      },
      {
        id: "bc2",
        position: { x: 70, y: 50 },
        title: "Transaction Mining",
        description: "Cryptocurrency mining system",
        details: "Developed a transaction mining system with difficulty adjustment, reward mechanisms, and mempool management. Miners compete to solve cryptographic puzzles and validate transactions.",
        type: "feature"
      },
      {
        id: "bc3",
        position: { x: 25, y: 65 },
        title: "Wallet System",
        description: "Secure digital wallet",
        details: "Implemented a secure wallet system with public-private key cryptography, transaction signing, and balance tracking. Includes features for sending, receiving, and managing cryptocurrency.",
        type: "feature"
      },
      {
        id: "bc4",
        position: { x: 60, y: 75 },
        title: "Custom SHA256",
        description: "Cryptographic security implementation",
        details: "Engineered a custom version of the SHA256 hashing algorithm for enhanced security and transaction verification. Focused on encryption and maintaining data integrity across the network.",
        type: "tech"
      },
      {
        id: "bc5",
        position: { x: 80, y: 25 },
        title: "2025 Web Expansion",
        description: "Future development plans",
        details: "Project is being revisited and expanded in 2025 as a full web application with modern UI/UX, real-time monitoring, and enhanced P2P networking capabilities.",
        type: "info"
      }
    ],
    createdAt: new Date("2022-06-01")
  }
];