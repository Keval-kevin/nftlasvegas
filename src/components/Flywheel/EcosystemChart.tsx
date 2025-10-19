import { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Code, Package, Rocket, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DATA = {
  series: [
    { date: "2025-01", Funding: 2, Tech: 3, Manufacturing: 1, Launch: 1, Distribution: 0 },
    { date: "2025-02", Funding: 4, Tech: 4, Manufacturing: 2, Launch: 2, Distribution: 1 },
    { date: "2025-03", Funding: 6, Tech: 5, Manufacturing: 3, Launch: 3, Distribution: 2 },
    { date: "2025-04", Funding: 8, Tech: 7, Manufacturing: 4, Launch: 4, Distribution: 2 },
    { date: "2025-05", Funding: 11, Tech: 8, Manufacturing: 5, Launch: 6, Distribution: 3 },
    { date: "2025-06", Funding: 13, Tech: 10, Manufacturing: 6, Launch: 7, Distribution: 4 }
  ],
  yLabel: "Initiatives / month",
  xLabel: "Month"
};

const SERIES_CONFIG = {
  Funding: { color: "#3b82f6", label: "Funding Pipeline", description: "Qualified funding initiatives", icon: DollarSign, route: "/funding-enablement" },
  Tech: { color: "#8b5cf6", label: "Tech Development", description: "Shipped features / integrations", icon: Code, route: "/tech-development" },
  Manufacturing: { color: "#ec4899", label: "Manufacturing", description: "Prototypes & certified units", icon: Package, route: "/product-manufacturing" },
  Launch: { color: "#06b6d4", label: "Platform Launch", description: "Campaigns & releases", icon: Rocket, route: "/platform-launch" },
  Distribution: { color: "#f43f5e", label: "Distribution", description: "New channels/marketplaces", icon: Share2, route: "/distribution" }
};

type TimeRange = "3M" | "6M" | "YTD" | "All";

export const EcosystemChart = () => {
  const [visibleSeries, setVisibleSeries] = useState<Record<string, boolean>>({
    Funding: true,
    Tech: true,
    Manufacturing: true,
    Launch: true,
    Distribution: true
  });
  const [hoveredSeries, setHoveredSeries] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<TimeRange>("6M");

  const filteredData = useMemo(() => {
    const ranges: Record<TimeRange, number> = { "3M": 3, "6M": 6, "YTD": 6, "All": 6 };
    const limit = ranges[timeRange];
    return DATA.series.slice(-limit);
  }, [timeRange]);

  const toggleSeries = (series: string) => {
    setVisibleSeries(prev => ({ ...prev, [series]: !prev[series] }));
  };

  const kpiData = useMemo(() => {
    const lastMonth = DATA.series[DATA.series.length - 1];
    const prevMonth = DATA.series[DATA.series.length - 2];
    
    return [
      {
        label: "Funding Pipeline",
        value: lastMonth.Funding,
        change: lastMonth.Funding - prevMonth.Funding,
        color: SERIES_CONFIG.Funding.color,
        sparkline: DATA.series.slice(-3).map(d => d.Funding)
      },
      {
        label: "Build Velocity",
        value: lastMonth.Tech,
        change: lastMonth.Tech - prevMonth.Tech,
        color: SERIES_CONFIG.Tech.color,
        sparkline: DATA.series.slice(-3).map(d => d.Tech)
      },
      {
        label: "Time-to-Prototype",
        value: 14,
        change: -3,
        color: SERIES_CONFIG.Manufacturing.color,
        sparkline: [18, 16, 14],
        suffix: " days"
      },
      {
        label: "Launches / Month",
        value: lastMonth.Launch,
        change: lastMonth.Launch - prevMonth.Launch,
        color: SERIES_CONFIG.Launch.color,
        sparkline: DATA.series.slice(-3).map(d => d.Launch)
      }
    ];
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload) return null;

    return (
      <div className="bg-slate-900/95 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-glow">
        <p className="text-sm font-semibold text-white mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground">{SERIES_CONFIG[entry.dataKey as keyof typeof SERIES_CONFIG].description}:</span>
            <span className="text-white font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  const activeSeries = Object.entries(visibleSeries).find(([_, visible]) => visible)?.[0] || "Funding";
  const activeConfig = SERIES_CONFIG[activeSeries as keyof typeof SERIES_CONFIG];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Complete Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Momentum across our five pillars—Funding, Tech, Manufacturing, Launch, Distribution.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpiData.map((kpi, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/70 border border-white/10 hover:bg-slate-900/90 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="text-xs text-muted-foreground">{kpi.label}</div>
                {kpi.change !== 0 && (
                  <div className={`flex items-center gap-1 text-xs ${kpi.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {kpi.change > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {Math.abs(kpi.change)}
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {kpi.value}{kpi.suffix || ""}
              </div>
              {/* Mini sparkline */}
              <div className="flex items-end gap-1 h-8">
                {kpi.sparkline.map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      backgroundColor: kpi.color,
                      height: `${(val / Math.max(...kpi.sparkline)) * 100}%`,
                      opacity: 0.6 + (i * 0.2)
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Chart Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/70 border border-white/10 shadow-xl">
          {/* Legend & Time Range */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            {/* Legend */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(SERIES_CONFIG).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => toggleSeries(key)}
                  onMouseEnter={() => setHoveredSeries(key)}
                  onMouseLeave={() => setHoveredSeries(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    visibleSeries[key]
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-transparent text-muted-foreground border border-white/5'
                  } hover:bg-white/15`}
                  aria-label={`Toggle ${config.label} series`}
                >
                  <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: config.color }} />
                  {config.label}
                </button>
              ))}
            </div>

            {/* Time Range */}
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
              {(["3M", "6M", "YTD", "All"] as TimeRange[]).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                    timeRange === range
                      ? 'bg-secondary text-white'
                      : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={filteredData}>
              <defs>
                {Object.entries(SERIES_CONFIG).map(([key, config]) => (
                  <linearGradient key={key} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={config.color} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={config.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="date" 
                stroke="rgba(255,255,255,0.3)" 
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.3)" 
                tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
                label={{ value: DATA.yLabel, angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.6)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              
              {hoveredSeries && visibleSeries[hoveredSeries] && (
                <Area
                  type="monotone"
                  dataKey={hoveredSeries}
                  fill={`url(#gradient-${hoveredSeries})`}
                  stroke="none"
                  animationDuration={300}
                />
              )}

              {Object.entries(SERIES_CONFIG).map(([key, config]) => (
                visibleSeries[key] && (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={config.color}
                    strokeWidth={2}
                    dot={{ fill: config.color, r: 3 }}
                    activeDot={{ r: 5, fill: config.color }}
                    animationDuration={500}
                    animationEasing="ease-in-out"
                  />
                )
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* CTA Row */}
        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-white">
              See how <span className="text-secondary">{activeConfig.label}</span> creates outcomes.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to={activeConfig.route}>
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Learn more →
              </Button>
            </Link>
            <a href="/downloads/nftlv-starter-pack-v1.0.zip" download>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Download Guide
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
