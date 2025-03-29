import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "VIP Status | zmrush",
  description: "Get VIP status on zmrush servers for exclusive benefits and support the community.",
}

export default function VipStatusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">VIP Status</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Support zmrush community and get exclusive benefits with VIP status
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <VIPCard
          title="Bronze VIP"
          price="€5.00"
          duration="1 Month"
          features={[
            "Exclusive [VIP] Bronze tag",
            "Access to VIP-only commands",
            "Special model selection",
            "Custom spray options",
            "Spectator access on full servers"
          ]}
        />

        <VIPCard
          title="Silver VIP"
          price="€12.00"
          duration="3 Months"
          featured={true}
          features={[
            "Exclusive [VIP] Silver tag",
            "All Bronze VIP benefits",
            "Queue priority on all servers",
            "Access to premium maps",
            "Customizable player colors",
            "Priority support"
          ]}
        />

        <VIPCard
          title="Gold VIP"
          price="€20.00"
          duration="6 Months"
          features={[
            "Exclusive [VIP] Gold tag",
            "All Silver VIP benefits",
            "Name color customization",
            "Custom chat sound effects",
            "Early access to new maps",
            "Vote map priority",
            "Exclusive Discord role"
          ]}
        />
      </div>

      <div className="bg-gray-900/50 p-8 rounded-md mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">VIP Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Server Benefits</h3>
            <ul className="space-y-3">
              <BenefitItem text="Exclusive access to VIP-only servers with special maps" />
              <BenefitItem text="Queue priority – never wait in line again" />
              <BenefitItem text="Access to premium commands and features" />
              <BenefitItem text="Special models and skins not available to regular players" />
              <BenefitItem text="Ability to join full servers when regular slots are filled" />
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Community Benefits</h3>
            <ul className="space-y-3">
              <BenefitItem text="Exclusive Discord role with special channel access" />
              <BenefitItem text="Priority support for any issues or questions" />
              <BenefitItem text="Vote on new maps and features for the servers" />
              <BenefitItem text="Participate in VIP-only tournaments with special prizes" />
              <BenefitItem text="Support the community and help keep the servers running" />
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">How to Purchase VIP</h2>
        <div className="bg-gray-900/30 p-6 rounded-md">
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li className="ml-4">
              <span className="font-medium text-white">Join our Discord server</span>
              <p className="mt-1 ml-6">Visit our Discord server and go to the #vip-purchase channel.</p>
            </li>
            <li className="ml-4">
              <span className="font-medium text-white">Choose your VIP package</span>
              <p className="mt-1 ml-6">Select the Bronze, Silver, or Gold VIP package according to your preference.</p>
            </li>
            <li className="ml-4">
              <span className="font-medium text-white">Complete the payment</span>
              <p className="mt-1 ml-6">We accept PayPal, credit cards, and cryptocurrency payments.</p>
            </li>
            <li className="ml-4">
              <span className="font-medium text-white">Receive your VIP status</span>
              <p className="mt-1 ml-6">After payment verification, your VIP status will be activated within 24 hours.</p>
            </li>
          </ol>

          <div className="flex justify-center mt-8">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="https://discord.com/invite/4JqtZhHyCb" target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/50 p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <FaqItem
            question="How long does it take to receive VIP status after purchase?"
            answer="Most VIP activations happen within 24 hours after payment confirmation. If your VIP status hasn't been activated within this timeframe, please contact an administrator on Discord."
          />

          <FaqItem
            question="Can I transfer my VIP status to another account?"
            answer="VIP status is tied to the account that purchased it and cannot be transferred. Please make sure you're using the correct account when making a purchase."
          />

          <FaqItem
            question="Do VIP benefits work on all zmrush servers?"
            answer="Yes, your VIP benefits will be active on all official zmrush servers, including BEGINNER/EASY, MEDIUM/HARD, EXTREME/DEATH, LONGJUMPS, and MASTERS servers."
          />

          <FaqItem
            question="Is there a way to extend my VIP status before it expires?"
            answer="Yes, you can purchase an extension at any time. The new duration will be added to your existing VIP period."
          />

          <FaqItem
            question="Can I get a refund if I'm not satisfied with my VIP status?"
            answer="We do not offer refunds for VIP purchases. Please carefully consider your decision before making a purchase."
          />
        </div>
      </div>
    </div>
  )
}

function VIPCard({ title, price, duration, features, featured = false }: {
  title: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <Card className={`border ${featured ? 'border-indigo-500' : 'border-gray-800'} ${featured ? 'bg-gray-900/50' : 'bg-gray-900/30'}`}>
      {featured && (
        <div className="bg-indigo-600 text-white text-center py-1 text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
        <CardDescription className="text-center">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-gray-400 ml-2">/ {duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${featured ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-800 hover:bg-gray-700'}`}>
          Get {title}
        </Button>
      </CardFooter>
    </Card>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
      <span className="text-gray-300">{text}</span>
    </li>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gray-900/30 p-4 rounded-md">
      <h3 className="text-lg font-medium mb-2">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  )
}
