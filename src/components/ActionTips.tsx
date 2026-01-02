import { motion } from 'motion/react';
import { useState } from 'react';
import { Leaf, Bike, Lightbulb, Recycle, Wind, Droplets, ShoppingBag, Home } from 'lucide-react';

export function ActionTips() {
  const [activeCategory, setActiveCategory] = useState<'individual' | 'community'>('individual');

  const individualActions = [
    {
      icon: Bike,
      title: 'Choose Green Transport',
      description: 'Walk, bike, or use public transport instead of driving alone.',
      impact: 'Reduces CO₂ by 2.4 tons/year',
    },
    {
      icon: Lightbulb,
      title: 'Save Energy',
      description: 'Switch to LED bulbs and unplug devices when not in use.',
      impact: 'Saves 1,000 lbs CO₂/year',
    },
    {
      icon: Recycle,
      title: 'Reduce, Reuse, Recycle',
      description: 'Minimize waste and recycle materials properly.',
      impact: 'Prevents 1,000 lbs waste/year',
    },
    {
      icon: ShoppingBag,
      title: 'Shop Sustainably',
      description: 'Choose local, organic products with minimal packaging.',
      impact: 'Reduces carbon footprint by 20%',
    },
    {
      icon: Home,
      title: 'Green Your Home',
      description: 'Use air purifiers and indoor plants to improve air quality.',
      impact: 'Improves indoor air by 30%',
    },
    {
      icon: Droplets,
      title: 'Conserve Water',
      description: 'Fix leaks and use water-efficient appliances.',
      impact: 'Saves energy in water treatment',
    },
  ];

  const communityActions = [
    {
      icon: Leaf,
      title: 'Plant Trees',
      description: 'Organize tree-planting drives in your community.',
      impact: 'One tree absorbs 48 lbs CO₂/year',
    },
    {
      icon: Wind,
      title: 'Advocate for Clean Air',
      description: 'Support policies for renewable energy and emission controls.',
      impact: 'Systemic long-term change',
    },
    {
      icon: Recycle,
      title: 'Community Cleanup',
      description: 'Participate in neighborhood cleanup events.',
      impact: 'Prevents pollution spread',
    },
    {
      icon: Lightbulb,
      title: 'Educate Others',
      description: 'Share knowledge about air quality and pollution.',
      impact: 'Multiplies positive impact',
    },
  ];

  const actions = activeCategory === 'individual' ? individualActions : communityActions;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-white mb-4">Take Action Today</h2>
        <p className="text-gray-400 mb-8">Small steps lead to big changes. Start with these actions.</p>

        {/* Category Tabs */}
        <div className="inline-flex bg-gray-800/50 rounded-full p-1 border border-gray-700">
          <button
            onClick={() => setActiveCategory('individual')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === 'individual'
                ? 'bg-cyan-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Individual Actions
          </button>
          <button
            onClick={() => setActiveCategory('community')}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === 'community'
                ? 'bg-cyan-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Community Actions
          </button>
        </div>
      </motion.div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {actions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all"
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <action.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-white mb-2">{action.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{action.description}</p>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-3 py-2">
              <p className="text-cyan-400 text-xs">💚 {action.impact}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="text-white mb-4">Every Breath Matters</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join millions worldwide in the fight for cleaner air. Your actions today create a healthier tomorrow for everyone.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Pledge to Act
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            Share This Message
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
