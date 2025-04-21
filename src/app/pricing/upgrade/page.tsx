"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Container from "@/components/global/container";
import { PLANS } from "@/constants/plans";

export default function UpgradePage() {
  const router = useRouter();

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[80vh] py-12">
        <h1 className="text-4xl font-bold mb-8">Upgrade Your Plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
              <p className="text-muted-foreground mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">${plan.monthlyPrice}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                onClick={() => {
                  // Handle upgrade logic here
                  console.log("Upgrading to plan:", plan.id);
                }}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
} 