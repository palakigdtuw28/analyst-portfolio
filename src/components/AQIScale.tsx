import { motion } from 'motion/react';
import { useState } from 'react';

interface AQIScaleProps {
  currentAQI: number;
  setCurrentAQI: (aqi: number) => void;
}

export function AQIScale({ currentAQI, setCurrentAQI }: AQIScaleProps) {
  const [isInteractive, setIsInteractive] = useState(false);

  const aqiLevels = [
    { min: 0, max: 50, label: 'Good', color: 'bg-green-500', description: 'Air quality is satisfactory' },
    { min: 51, max: 100, label: 'Moderate', color: 'bg-yellow-500', description: 'Acceptable for most people' },
    { min: 101, max: 150, label: 'Unhealthy for Sensitive', color: 'bg-orange-500', description: 'Sensitive groups may experience effects' },
    { min: 151, max: 200, label: 'Unhealthy', color: 'bg-red-500', description: 'Everyone may experience effects' },
    { min: 201, max: 300, label: 'Very Unhealthy', color: 'bg-purple-500', description: 'Health alert for everyone' },
    { min: 301, max: 500, label: 'Hazardous', color: 'bg-pink-500', description: 'Emergency conditions' },
  ];

  const getCurrentLevel = (aqi: number) => {
    return aqiLevels.find(level => aqi >= level.min && aqi <= level.max) || aqiLevels[0];
  };

  const currentLevel = getCurrentLevel(currentAQI);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-white mb-4">Understanding Air Quality Index</h2>
        <p className="text-gray-400">Drag the slider to see how different AQI levels affect our health</p>
      </motion.div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
        {/* Interactive Slider */}
        <div className="mb-12">
          <div className="relative h-16 rounded-full overflow-hidden mb-6">
            <div className="absolute inset-0 flex">
              {aqiLevels.map((level, index) => (
                <div
                  key={index}
                  className={`${level.color} flex-1 flex items-center justify-center text-white text-xs px-2`}
                  style={{ opacity: 0.8 }}
                >
                  <span className="hidden sm:inline">{level.label}</span>
                </div>
              ))}
            </div>
            
            {/* Slider indicator */}
            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${(currentAQI / 500) * 100}%` }}
              animate={{ left: `${(currentAQI / 500) * 100}%` }}
            />
          </div>

          <input
            type="range"
            min="0"
            max="500"
            value={currentAQI}
            onChange={(e) => {
              setCurrentAQI(Number(e.target.value));
              setIsInteractive(true);
            }}
            className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: 'transparent',
            }}
          />
        </div>

        {/* Current Level Info */}
        <motion.div
          key={currentLevel.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className={`inline-block ${currentLevel.color} text-white px-6 py-3 rounded-full mb-4`}>
            {currentLevel.label}
          </div>
          <p className="text-gray-300 mb-2">{currentLevel.description}</p>
          <p className="text-gray-500 text-sm">
            AQI Range: {currentLevel.min} - {currentLevel.max}
          </p>
        </motion.div>

        {isInteractive && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-cyan-400 text-sm mt-6"
          >
            ✨ Together, we can move the needle towards cleaner air!
          </motion.p>
        )}
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
