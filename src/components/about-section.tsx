import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <div className="space-y-8 mb-12">
      <Card className="bg-opacity-20 bg-gray-900 border border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl text-center">What is Kreedz?</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p>
            Kreedz is an exciting and challenging speedrunning gamemode for Counter-Strike 1.6 where players engage in movement-based
            techniques, navigating through obstacle courses in the most skillful, efficient and fastest way possible. It's a test of precision, patience,
            and skill.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-opacity-20 bg-gray-900 border border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl text-center">Who should play Kreedz?</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p>
            Whether you are a total newcomer, a casual or an experienced movement player, Kreedz welcomes all. Anyone patient, willing to
            explore, and open to embracing thrilling jumps will enjoy Kreedz.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-opacity-20 bg-gray-900 border border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl text-center">Why zmrush?</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p>
            Join zmrush for a welcoming, beginner-friendly community with over 1500 unique maps, a competitive League system, rich statistics
            and enjoyable playing experience for all skill levels.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
