import React from 'react'
import Autenticated from '@/Layouts/Autenticated/Index';
import SubscriptionCard from '@/Components/SubscriptionCard';
import { Inertia } from '@inertiajs/inertia';

export default function SubscriptionPlan({auth, subscriptionPlans}) {
  const selectSubscription =id=>{
    Inertia.post(
      route("user.dashboard.subscriptionPlan.userSubscribe", {
      subscriptionPlan: id,
    })
    );
  }
  return (
    <Autenticated auth={auth}>
        <div className="flex flex-col items-center py-0">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-4">
                    {subscriptionPlans.map((subscriptionPlan)=>(
                    <SubscriptionCard
                    key={subscriptionPlan.id}
                    name={subscriptionPlan.name}
                    price={subscriptionPlan.price}
                    durationInMounth={subscriptionPlan.active_period_in_mount}
                    features ={JSON.parse(subscriptionPlan.features)}
                    isPremium = {subscriptionPlan.name ==='Premium'}
                    onSelectSubscription={()=> selectSubscription(subscriptionPlan.id)}
                    />
                    ))};
                </div>
            </div>
    </Autenticated>
  )
}
