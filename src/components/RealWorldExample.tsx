import React, { useState, useEffect } from 'react';
import { Moon, Sun, Battery } from 'lucide-react';
import LED from './LED';

const RealWorldExample: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState(12);
  const [isAutomatic, setIsAutomatic] = useState(true);
  
  // Simulate day/night cycle
  useEffect(() => {
    if (isAutomatic) {
      const interval = setInterval(() => {
        setTimeOfDay((prev) => (prev + 1) % 24);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isAutomatic]);

  const ambientLight = Math.sin((timeOfDay - 6) * Math.PI / 12) * 100;
  const isDark = ambientLight < 20;
  const current = isDark ? 0.015 : 0; // 15mA when on

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
      <h3 className="text-lg font-semibold text-gray-300 mb-4">
        Ejemplo Práctico: Luz Nocturna Automática
      </h3>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isDark ? (
              <Moon className="w-6 h-6 text-blue-400" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-400" />
            )}
            <span className="text-gray-300">
              {timeOfDay.toString().padStart(2, '0')}:00
            </span>
          </div>
          
          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={isAutomatic}
              onChange={(e) => setIsAutomatic(e.target.checked)}
            />
            Simulación Automática
          </label>
        </div>

        {!isAutomatic && (
          <div className="space-y-2">
            <label className="text-gray-300 text-sm">
              Hora del Día
              <input
                type="range"
                min="0"
                max="23"
                value={timeOfDay}
                onChange={(e) => setTimeOfDay(Number(e.target.value))}
                className="w-full"
              />
            </label>
          </div>
        )}

        <div className="flex items-center justify-center gap-6 p-4 bg-gray-900 rounded-lg">
          <Battery className="w-6 h-6 text-blue-400" />
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-400">LDR</div>
            <div className="w-6 h-6 rounded-full border-2 border-gray-600" 
                 style={{
                   background: `linear-gradient(to bottom, 
                     rgba(255,255,0,${Math.max(0, ambientLight/100)}), 
                     rgba(128,128,0,${Math.max(0, ambientLight/100)}))`
                 }}
            />
          </div>
          <div className="w-12 h-12 border-2 border-gray-600 rounded flex items-center justify-center text-gray-400">
            T₁
          </div>
          <LED isOn={isDark} current={current} color="rgb(255, 255, 200)" />
        </div>

        <div className="text-sm text-gray-400">
          <h4 className="font-semibold mb-2">Componentes:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>LDR (Fotoresistor)</li>
            <li>Transistor 2N2222A</li>
            <li>LED Blanco Cálido</li>
            <li>Resistencias: 10kΩ y 220Ω</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RealWorldExample;