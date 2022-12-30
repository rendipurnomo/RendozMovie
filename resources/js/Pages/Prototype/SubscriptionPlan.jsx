import React from 'react'
import Autenticated from '@/Layouts/Autenticated/Index';
import SubscriptionCard from '@/Components/SubscriptionCard';

export default function SubscriptionPlan() {
  return (
    <Autenticated>
        <div className="py-0 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-4">
                    {/* Basic */}
                    <SubscriptionCard
                    name="Basic"
                    price={199999}
                    durationInMounth={3}
                    features={["feature1","feature2"]}
                    />

                    {/* For Greatest */}
                    <SubscriptionCard isPremium
                    name="Premium"
                    price={499999}
                    durationInMounth={36}
                    features={["feature1","feature2","feature3","feature4"]}
                    />
                </div>
                {/* /Pricing Card */}
            </div>
    </Autenticated>
  )
}
