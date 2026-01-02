import { motion } from 'motion/react';
import { useState } from 'react';
import { Car, Factory, Flame, Home, Zap } from 'lucide-react';

export function PollutionSources() {
  const [selectedSource, setSelectedSource] = useState<number | null>(null);

  const sources = [
    {
      icon: Car,
      title: 'Vehicle Emissions',
      percentage: 30,
      color: 'bg-orange-500',
      description: 'Transportation contributes significantly to air pollution through exhaust emissions.',
      solutions: ['Use public transport', 'Carpool or bike', 'Switch to electric vehicles'],
    },
    {
      icon: Factory,
      title: 'Industrial Pollution',
      percentage: 25,
      color: 'bg-red-500',
      description: 'Factories and industrial processes release harmful pollutants into the atmosphere.',
      solutions: ['Support clean energy policies', 'Choose eco-friendly products', 'Advocate for regulations'],
    },
    {
      icon: Flame,
      title: 'Burning Waste',
      percentage: 20,
      color: 'bg-yellow-500',
      description: 'Open burning of waste and biomass releases toxic particles and gases.',
      solutions: ['Proper waste disposal', 'Composting organic waste', 'Recycling programs'],
    },
    {
      icon: Home,
      title: 'Construction Dust',
      percentage: 15,
      color: 'bg-gray-500',
      description: 'Construction activities generate dust and particulate matter.',
      solutions: ['Water spraying at sites', 'Use dust barriers', 'Proper site management'],
    },
    {
      icon: Zap,
      title: 'Power Generation',
      percentage: 10,
      color: 'bg-purple-500',
      description: 'Coal and fossil fuel power plants emit pollutants and greenhouse gases.',
      solutions: ['Use renewable energy', 'Reduce electricity consumption', 'Install solar panels'],
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
        <h2 className="text-white mb-4">Major Pollution Sources</h2>
        <p className="text-gray-400">Click on each source to learn how you can make a difference</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {sources.map((source, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedSource(selectedSource === index ? null : index)}
            className={`cursor-pointer rounded-2xl p-6 border-2 transition-all ${
              selectedSource === index
                ? 'border-cyan-400 bg-gray-800'
                : 'border-gray-700 bg-gray-800/50'
            }`}
          >
            <div className={`${source.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
              <source.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-sm mb-2">{source.title}</h3>
            <div className="text-gray-400 mb-2">{source.percentage}%</div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className={source.color}
                initial={{ width: 0 }}
                whileInView={{ width: `${source.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                style={{ height: '100%', borderRadius: '9999px' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Source Details */}
      {selectedSource !== null && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className={`${sources[selectedSource].color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
              {(() => {
                const IconComponent = sources[selectedSource].icon;
                return <IconComponent className="w-8 h-8 text-white" />;
              })()}
            </div>
            <div>
              <h3 className="text-white mb-2">{sources[selectedSource].title}</h3>
              <p className="text-gray-300">{sources[selectedSource].description}</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-cyan-400 mb-4">What You Can Do:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sources[selectedSource].solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-4 border border-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <p className="text-gray-300 text-sm">{solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}