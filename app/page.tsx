import Image from "next/image";

import { 
  FiTrendingUp, 
  FiClock, 
  FiMessageCircle, 
  FiShare2, 
  FiBookmark,
  FiTwitter,
  FiRss,
  FiArchive,
  FiInfo,
  FiCpu,
  FiBox,
  FiShield,
  FiZap,
  FiCode,
  FiDatabase,
  FiLock,
  FiAward,
  FiHeadphones,
  FiActivity
} from "react-icons/fi";
import { 
  SiOpenai, 
  SiApple, 
  SiGithub, 
  SiMeta, 
  SiGoogle 
} from "react-icons/si";

export default function Home() {
  const newsItems = [
    {
      id: 1,
      source: "TechCrunch",
      sourceIcon: <SiOpenai className="inline text-blue-600" size={14} />,
      timeAgo: "2h ago",
      title: "OpenAI releases new model updates for developers: faster inference & structured outputs",
      description: "New updates focus on performance, lower latency, and better reasoning. GPT-4o mini gets improved tool calling, plus cheaper tokens for high-volume apps.",
      category: "AI",
      comments: 342,
      shares: "1.2k",
      trending: true,
    },
    {
      id: 2,
      source: "The Verge",
      sourceIcon: <SiApple className="inline text-gray-700" size={14} />,
      timeAgo: "5h ago",
      title: "Apple announces deeper AI integration across devices: on-device Siri + ChatGPT synergy",
      description: "The company is integrating AI deeper into iOS and macOS with 'Apple Intelligence,' featuring writing tools, Genmoji, and smarter notification summaries.",
      category: "AI",
      comments: 529,
      shares: "2.1k",
      trending: false,
    },
    {
      id: 3,
      source: "TechCrunch+",
      sourceIcon: <FiTrendingUp className="inline text-green-600" size={14} />,
      timeAgo: "8h ago",
      title: "AI infrastructure startup 'Lambda' secures $320M Series C at $1.5B valuation",
      description: "The GPU cloud provider expands to meet demand for AI training. New data centers coming to Europe and Asia.",
      category: "Startups",
      comments: 143,
      shares: "845",
      trending: false,
    },
    {
      id: 4,
      source: "GitHub Blog",
      sourceIcon: <SiGithub className="inline" size={14} />,
      timeAgo: "12h ago",
      title: "GitHub Copilot Workspace: AI-native dev environment now in public beta",
      description: "From planning to code to runtime debugging — Copilot Workspace rethinks how developers build software with AI agents.",
      category: "Dev",
      comments: 276,
      shares: "1.5k",
      trending: true,
    },
    {
      id: 5,
      source: "Wired",
      sourceIcon: <FiLock className="inline text-red-600" size={14} />,
      timeAgo: "15h ago",
      title: "Critical zero-day in popular npm package exposes thousands of servers",
      description: "Maintainers urge immediate update to patched version. The supply chain attack targeted internal CI pipelines.",
      category: "Security",
      comments: 98,
      shares: "634",
      trending: false,
    },
    {
      id: 6,
      source: "Reuters / AI",
      sourceIcon: <SiMeta className="inline text-blue-800" size={14} />,
      timeAgo: "1d ago",
      title: "Meta plans Llama 4 release with multimodal capabilities, rivaling GPT-5",
      description: "Internal memos reveal focus on video and speech understanding, expected early next year. Open source approach continues.",
      category: "AI",
      comments: 427,
      shares: "3.2k",
      trending: false,
    },
    {
      id: 7,
      source: "Quanta Magazine",
      sourceIcon: <SiGoogle className="inline text-blue-500" size={14} />,
      timeAgo: "1d ago",
      title: "Google's quantum chip 'Willow' solves decade-old challenge, paves way for error correction",
      description: "Breakthrough reduces quantum errors exponentially, bringing practical quantum computing closer than ever.",
      category: "Dev",
      comments: 213,
      shares: "978",
      trending: false,
    }
  ];

  const categories = ["All", "AI", "Startups", "Dev", "Security"];

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      
      {/* Navbar */}
      <header className="w-full border-b border-zinc-200 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
              TechDay
            </h1>
            <span className="hidden sm:inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
              daily digest
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-500 hidden sm:flex items-center gap-1">
              <FiActivity size={14} /> live feed
            </span>
            <span className="text-sm text-zinc-500 font-medium">Tech + AI News</span>
          </div>
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="max-w-3xl mx-auto px-6 py-12 md:py-14">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-700 mb-3">
             today's briefing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Stay updated with{" "}
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
              tech, AI, and startups
            </span>
          </h2>
          <p className="mt-4 text-zinc-600 text-lg">
            A clean, fast news feed for developers and builders. Curated daily.
          </p>
          <div className="w-16 h-1 bg-zinc-800 rounded-full mt-4"></div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="flex gap-3 overflow-x-auto pb-5 border-b border-zinc-100 scrollbar-hide">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-medium rounded-full transition whitespace-nowrap ${
                idx === 0
                  ? "bg-zinc-900 text-white hover:bg-zinc-800"
                  : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* News List */}
      <section className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        {/* Header with update time */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              latest headlines
            </span>
            <span className="h-4 w-px bg-zinc-300"></span>
            <span className="inline-flex items-center gap-1 text-xs text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
              <FiClock size={10} /> updated {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}
            </span>
          </div>
          <div className="text-xs text-zinc-400 hidden sm:flex items-center gap-1">
            <FiTrendingUp size={12} /> real-time • daily digest
          </div>
        </div>

        {/* News Cards */}
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="p-6 bg-white rounded-2xl border border-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1.5">
                <span className="font-medium flex items-center gap-1">
                  {item.sourceIcon} {item.source}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiClock size={10} /> {item.timeAgo}
                </span>
                {item.trending && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">
                    <FiTrendingUp size={10} /> trending
                  </span>
                )}
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <FiBookmark className="text-zinc-400 hover:text-zinc-600" size={16} />
              </button>
            </div>
            <h3 className="text-xl font-bold leading-tight tracking-tight mt-1">
              {item.title}
            </h3>
            <p className="mt-2 text-zinc-600 text-base">
              {item.description}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                <FiCpu size={12} /> {item.category}
              </span>
              <span className="flex items-center gap-1">
                <FiMessageCircle size={12} /> {item.comments}
              </span>
              <span className="flex items-center gap-1">
                <FiShare2 size={12} /> {item.shares}
              </span>
            </div>
          </article>
        ))}

        {/* Load more button */}
        <div className="pt-3 pb-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition cursor-default">
            <FiDatabase size={14} /> 20+ more stories in archive · refresh daily
          </div>
        </div>
      </section>

      {/* Side highlights */}
      <section className="max-w-3xl mx-auto px-6 mt-2 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 hover:border-zinc-300 transition">
            <div className="flex items-center gap-2 text-zinc-700 text-sm font-semibold">
              <FiAward size={16} /> Top pick
            </div>
            <p className="text-sm text-zinc-600 mt-2">
              "The state of AI in 2025: agentic workflows and reasoning models dominate" — Andreessen Horowitz
            </p>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 hover:border-zinc-300 transition">
            <div className="flex items-center gap-2 text-zinc-700 text-sm font-semibold">
              <FiTrendingUp size={16} /> Trending on TechDay
            </div>
            <p className="text-sm text-zinc-600 mt-2">
              OpenAI o1 full release, Mistral Large 2, new JavaScript runtime "WinterJS"
            </p>
          </div>
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 hover:border-zinc-300 transition">
            <div className="flex items-center gap-2 text-zinc-700 text-sm font-semibold">
              <FiHeadphones size={16} /> Podcast pick
            </div>
            <p className="text-sm text-zinc-600 mt-2">
              "Lex Fridman x Jensen Huang: AI factories & the future of computing"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white mt-10">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <div className="flex gap-6">
            <span className="font-medium flex items-center gap-1">
              <FiBox size={14} /> TechDay
            </span>
          </div>
          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-zinc-900 transition flex items-center gap-1">
              <FiInfo size={14} /> About
            </span>
            <span className="cursor-pointer hover:text-zinc-900 transition flex items-center gap-1">
              <FiArchive size={14} /> Archive
            </span>
            <span className="cursor-pointer hover:text-zinc-900 transition flex items-center gap-1">
              <FiRss size={14} /> RSS
            </span>
            <span className="cursor-pointer hover:text-zinc-900 transition flex items-center gap-1">
              <FiTwitter size={14} /> Twitter
            </span>
          </div>
          <div className="text-xs">© 2025 TechDay — curated news for builders</div>
        </div>
      </footer>
    </main>
  );
} 