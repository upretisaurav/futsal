"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, MessageSquare, Star, Users } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    totalMatches: 0,
    wins: 0,
    messages: 0,
    rating: 0,
  })
  const [upcomingMatches, setUpcomingMatches] = useState([])
  const [recentActivity, setRecentActivity] = useState([])

  // Simulate data fetching
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // In a real app, these would be actual API calls
        await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

        // Mock data for stats
        setStats({
          totalMatches: 12,
          wins: 8,
          messages: 24,
          rating: 4.8,
        })

        // Mock data for upcoming matches
        setUpcomingMatches([
          {
            id: 1,
            opponent: "Team Alpha",
            location: "Futsal Arena, Kathmandu",
            date: "2024-12-15",
            time: "18:00",
          },
          {
            id: 2,
            opponent: "Futsal Kings",
            location: "Sports Complex, Lalitpur",
            date: "2024-12-20",
            time: "19:30",
          },
        ])

        // Mock data for recent activity
        setRecentActivity([
          {
            id: 1,
            type: "match_request",
            from: "Team Beta",
            time: "2 hours ago",
          },
          {
            id: 2,
            type: "message",
            from: "John Doe",
            time: "5 hours ago",
          },
          {
            id: 3,
            type: "feedback",
            from: "Team Gamma",
            time: "1 day ago",
          },
        ])

        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setIsLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <Skeleton className="h-10 w-[250px] mb-2" />
          <Skeleton className="h-4 w-[350px]" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Skeleton key={i} className="h-[120px] w-full rounded-lg" />
            ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-60" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array(2)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full rounded-md" />
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-60" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-md" />
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your futsal activities.</p>
        </div>
        <Link href="/dashboard/matchmaking">
          <Button>Find a Match</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMatches}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Wins</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.wins}</div>
            <p className="text-xs text-muted-foreground">66% win rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.messages}</div>
            <p className="text-xs text-muted-foreground">5 unread</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.rating}/5</div>
            <p className="text-xs text-muted-foreground">Based on 15 reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Matches</CardTitle>
            <CardDescription>Your scheduled matches for the next days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingMatches.length > 0 ? (
                upcomingMatches.map((match) => (
                  <div key={match.id} className="flex items-start space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                      <p className="font-medium leading-none">{match.opponent}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        {match.location}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(match.date).toLocaleDateString()} at {match.time}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-muted-foreground">No upcoming matches</p>
                  <Link href="/dashboard/matchmaking" className="mt-2">
                    <Button variant="outline" size="sm">
                      Find a Match
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 rounded-md border p-4">
                  {activity.type === "match_request" && <Users className="h-5 w-5 text-primary" />}
                  {activity.type === "message" && <MessageSquare className="h-5 w-5 text-primary" />}
                  {activity.type === "feedback" && <Star className="h-5 w-5 text-primary" />}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.type === "match_request" && "Match Request from"}
                      {activity.type === "message" && "New message from"}
                      {activity.type === "feedback" && "Feedback from"}
                      {" " + activity.from}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
