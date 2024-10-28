import React, { useState } from 'react';
import { Battery, Zap, Info, AlertCircle } from 'lucide-react';

interface LEDProps {
  isOn: boolean;
  current: number;
}

const LED: React.FC<LEDProps> = ({ isOn, current }) => {
  const brightness = Math.min(current / 20, 1);
  const color = isOn ? `rgba(255, 220, 50, ${brightness})` : 'rgb(200, 200, 200)';
  
  return (
    <div className="relative">
      <div 
        className="w-8 h-8 rounded-full transition-all duration-300"
        style={{ 
          backgroundColor: color,
          boxShadow: isOn ? `0 0 ${20 * brightness}px ${10 * brightness}px ${color}` : 'none'
        }}
      />
    </div>
  );
};

const CircuitSimulation: React.FC = () => {
  const [voltage, setVoltage] = useState(3);
  const [resistance, setResistance] = useState(220);
  const [isCircuitClosed, setIsCircuitClosed] = useState(false);

  const current = voltage / resistance;
  const isSafe = current <= 0.02;
  
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300">
              Voltaje (V)
              <input
                type="range"
                min="0"
                max="12"
                step="0.1"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-yellow-400">{voltage.toFixed(1)}V</span>
            </label>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-gray-300">
              Resistencia (Ω)
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-yellow-400">{resistance}Ω</span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 p-4 bg-gray-900 rounded-lg">
          <Battery className="w-8 h-8 text-blue-400" />
          <div className="h-1 w-16 bg-yellow-400" />
          <div className="flex flex-col items-center gap-2">
            <div className="text-gray-400 text-sm">Resistor</div>
            <div className="h-4 w-16 bg-brown-400 rounded-full" />
          </div>
          <div className="h-1 w-16 bg-yellow-400" />
          <LED isOn={isCircuitClosed} current={current} />
          <div className="h-1 w-16 bg-yellow-400" />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setIsCircuitClosed(!isCircuitClosed)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              isCircuitClosed
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isCircuitClosed ? 'Abrir Circuito' : 'Cerrar Circuito'}
          </button>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900">
          <Zap className="w-6 h-6 text-yellow-400" />
          <div>
            <div className="text-gray-300">Corriente:</div>
            <div className={`font-mono ${isSafe ? 'text-green-400' : 'text-red-400'}`}>
              {(current * 1000).toFixed(1)} mA
            </div>
          </div>
          
          {!isSafe && isCircuitClosed && (
            <div className="flex items-center gap-2 ml-auto text-red-400">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">¡Advertencia: Corriente demasiado alta!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircuitSimulation;