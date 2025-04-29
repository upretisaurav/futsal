import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, MapPin, MessageSquare, Star } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">How It Works</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Futsal Opponent Matcher makes it easy to connect with other players and teams in your area.
      </p>

      <div className="grid gap-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-primary/10 p-2 rounded-full mr-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </span>
            Step 1: Create Your Profile
          </h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Sign up and create your player profile with your skills, position, and availability. This helps us
                    match you with compatible players and teams.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Specify your skill level (Beginner, Intermediate, Advanced, Professional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Set your preferred position (Goalkeeper, Defender, Midfielder, Forward)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Indicate your availability (weekdays, weekends, specific times)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Add your location to find nearby players and venues</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <Users className="h-24 w-24 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-primary/10 p-2 rounded-full mr-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </span>
            Step 2: Find Matches
          </h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center md:order-2">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <MapPin className="h-24 w-24 text-muted-foreground" />
                  </div>
                </div>

                <div className="md:order-1">
                  <p className="text-muted-foreground mb-4">
                    Use our matchmaking system to find opponents or teammates based on your preferences. You can search
                    by location, skill level, team size, and availability.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Find opponents for your team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Join existing teams looking for players</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Discover futsal venues near you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Schedule matches at available time slots</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-primary/10 p-2 rounded-full mr-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </span>
            Step 3: Connect & Organize
          </h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Use our real-time chat system to connect with other players and teams. Organize matches, discuss
                    details, and coordinate logistics.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Real-time messaging with players and teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Create group chats for team coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Share files and images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Receive notifications for new messages and match requests</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-24 w-24 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-primary/10 p-2 rounded-full mr-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </span>
            Step 4: Play & Review
          </h2>

          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center md:order-2">
                  <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <Star className="h-24 w-24 text-muted-foreground" />
                  </div>
                </div>

                <div className="md:order-1">
                  <p className="text-muted-foreground mb-4">
                    After your match, provide feedback and ratings for your opponents. This helps build a trusted
                    community and improves future matchmaking.
                  </p>

                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Rate your opponents on sportsmanship and skill</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Leave detailed feedback about your experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>View your own ratings and feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                      <span>Build your reputation in the community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
