import { motion } from 'motion/react';
import { Users, Heart, Trees, TrendingDown } from 'lucide-react';

interface ImpactCounterProps {
  currentAQI: number;
}

export function ImpactCounter({ currentAQI }: ImpactCounterProps) {
  const getHealthImpact = (aqi: number) => {
    const baselineAQI = 150;
    const improvement = Math.max(0, baselineAQI - aqi);
    
    return {
      livesProtected: Math.floor((improvement / 100) * 500000),
      hospitalVisitsReduced: Math.floor((improvement / 100) * 100000),
      treesEquivalent: Math.floor((improvement / 100) * 1000000),
      co2Reduced: Math.floor((improvement / 100) * 50000),
    };
  };

  const impact = getHealthImpact(currentAQI);
  const isImproved = currentAQI < 150;

  const stats = [
    {
      icon: Users,
      value: impact.livesProtected.toLocaleString(),
      label: 'Lives Protected',
      color: 'text-green-400',
    },
    {
      icon: Heart,
      value: impact.hospitalVisitsReduced.toLocaleString(),
      label: 'Hospital Visits Reduced',
      color: 'text-red-400',
    },
    {
      icon: Trees,
      value: impact.treesEquivalent.toLocaleString(),
      label: 'Trees Equivalent',
      color: 'text-emerald-400',
    },
    {
      icon: TrendingDown,
      value: `${impact.co2Reduced.toLocaleString()} tons`,
      label: 'CO₂ Reduced',
      color: 'text-blue-400',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-white mb-4">Your Impact Matters</h2>
        <p className="text-gray-400">
          {isImproved 
            ? "See the positive impact of reducing pollution below current levels"
            : "Imagine the benefits if we could reduce pollution from current levels"}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
          >
            <stat.icon className={`w-10 h-10 ${stat.color} mb-4`} />
            <motion.p
              key={stat.value}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`${stat.color} mb-2`}
            >
              {isImproved && stat.value !== '0' ? '+' : ''}{stat.value}
            </motion.p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {!isImproved && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          💡 Adjust the AQI slider above to see the potential positive impact
        </motion.div>
      )}
    </div>
  );
}
