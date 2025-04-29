import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We collect several types of information from and about users of our platform, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Personal information such as name, email address, and location</li>
            <li>Profile information such as skill level, position, and availability</li>
            <li>Communication data including chat messages and match requests</li>
            <li>Usage data such as how you interact with our platform</li>
            <li>Device information including IP address, browser type, and operating system</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We use the information we collect about you for various purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Providing, maintaining, and improving our platform</li>
            <li>Matching you with other players and teams based on your preferences</li>
            <li>Processing and facilitating match requests and communications</li>
            <li>Sending you notifications about matches, messages, and platform updates</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Protecting against unauthorized access and ensuring platform security</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Information Sharing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">We may share your information in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>With other users as part of the matchmaking process</li>
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations or protect our rights</li>
            <li>In connection with a business transfer or acquisition</li>
            <li>With your consent or at your direction</li>
          </ul>
          <p className="text-muted-foreground mt-4">We do not sell your personal information to third parties.</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Data Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p className="text-muted-foreground">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
            to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute
            security.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to rectify or update your personal information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict or object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>6. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-medium mt-2">privacy@futsalmatcher.com</p>
        </CardContent>
      </Card>
    </div>
  )
}
