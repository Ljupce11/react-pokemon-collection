import { WandSparkles } from "lucide-react";

import { AnalyticsOverviewChart } from "@/components/common/analytics/analytics-overview-chart";
import { AnalyticsRecentCatches } from "@/components/common/analytics/analytics-recent-catches";
import { StatsIcon } from "@/components/common/analytics/stats-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { stats } from "@/constants/constants";

export const Analytics = () => {
  return (
    <div className="max-w-screen-xl flex flex-col mx-auto gap-8 p-4">
      <div className="flex justify-center items-center gap-3">
        <WandSparkles size={24} />
        <h1 className="text-2xl font-semibold text-center">Analytics</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <StatsIcon icon={stat.icon} />
            </CardHeader>
            <CardContent className="px-6">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.progress}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Overview chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <AnalyticsOverviewChart />
          </CardContent>
        </Card>
        {/* Recent catches */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent catches</CardTitle>
            <p className="text-sm text-muted-foreground">
              You caught 265 pokemons this month.
            </p>
          </CardHeader>
          <CardContent>
            <AnalyticsRecentCatches />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
