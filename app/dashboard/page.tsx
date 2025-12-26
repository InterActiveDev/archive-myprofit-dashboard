import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Archive, ArrowUpCircle, ArrowDownCircle } from "lucide-react"

const stats = [
  {
    title: "Total Database Archived",
    value: "1,284",
    icon: Archive,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Overall data currently stored",
  },
  {
    title: "Total Backup Today",
    value: "12",
    icon: ArrowUpCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
    description: "Successful backups performed",
  },
  {
    title: "Total Restore Today",
    value: "3",
    icon: ArrowDownCircle,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    description: "Successful data restorations",
  },
]

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Summary Section */}
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>System Activity Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg bg-muted/10">
            <p className="text-muted-foreground">Activity visualization will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
