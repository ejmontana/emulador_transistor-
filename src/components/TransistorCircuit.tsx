import React, { useState, useEffect } from 'react';
import { Battery, Zap, SunMedium } from 'lucide-react';
import LED from './LED';

const TransistorCircuit: React.FC = () => {
  const [baseVoltage, setBaseVoltage] = useState(0);
  const [collectorVoltage, setCollectorVoltage] = useState(5);
  const [ambientLight, setAmbientLight] = useState(100);
  const [autoMode, setAutoMode] = useState(false);

  // Simulate transistor behavior
  const gain = 100; // transistor gain (β)
  const baseThreshold = 0.7; // base-emitter threshold voltage
  const baseResistance = 10000; // 10kΩ
  const collectorResistance = 220; // 220Ω
  
  const baseCurrent = Math.max(0, (baseVoltage - baseThreshold) / baseResistance);
  const collectorCurrent = Math.min(baseCurrent * gain, collectorVoltage / collectorResistance);
  const isTransistorOn = baseCurrent > 0;

  // Auto mode simulation
  useEffect(() => {
    if (autoMode) {
      const threshold = 50;
      setBaseVoltage(ambientLight < threshold ? 5 : 0);
    }
  }, [ambientLight, autoMode]);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-300">Circuito con Transistor NPN</h3>
          <div className="flex items-center gap-2">
            <label className="text-gray-300 text-sm">
              <input
                type="checkbox"
                checked={autoMode}
                onChange={(e) => setAutoMode(e.target.checked)}
                className="mr-2"
              />
              Modo Automático
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm">
              Voltaje Base (V)
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={baseVoltage}
                onChange={(e) => setBaseVoltage(Number(e.target.value))}
                disabled={autoMode}
                className="w-full"
              />
              <span className="text-yellow-400">{baseVoltage.toFixed(1)}V</span>
            </label>
          </div>

          {autoMode && (
            <div className="space-y-2">
              <label className="text-gray-300 text-sm flex items-center gap-2">
                <SunMedium className="w-4 h-4 text-yellow-400" />
                Luz Ambiental
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ambientLight}
                  onChange={(e) => setAmbientLight(Number(e.target.value))}
                  className="w-full"
                />
                <span className="text-yellow-400">{ambientLight}%</span>
              </label>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-6 p-4 bg-gray-900 rounded-lg">
          <div className="flex flex-col items-center">
            <Battery className="w-6 h-6 text-blue-400" />
            <span className="text-xs text-gray-400">5V</span>
          </div>
          
          <div className="relative">
            <div className="h-1 w-12 bg-yellow-400" />
            <div className="absolute -top-4 left-4 text-xs text-gray-400">R₁</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-2 border-gray-600 rounded flex items-center justify-center text-gray-400">
              T₁
            </div>
            <div className="text-xs text-gray-400 mt-1">2N2222A</div>
          </div>
          
          <div className="h-1 w-12 bg-yellow-400" />
          
          <LED isOn={isTransistorOn} current={collectorCurrent} />
        </div>

        <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900">
          <Zap className="w-5 h-5 text-yellow-400" />
          <div>
            <div className="text-gray-300 text-sm">Corriente Colector:</div>
            <div className={`font-mono ${collectorCurrent <= 0.02 ? 'text-green-400' : 'text-red-400'}`}>
              {(collectorCurrent * 1000).toFixed(1)} mA
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <h4 className="font-semibold mb-2">Datos del Circuito:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Transistor: 2N2222A (β≈100)</li>
            <li>R₁ (Colector): 220Ω</li>
            <li>R₂ (Base): 10kΩ</li>
            <li>V₍ₑₑ₎: 5V</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransistorCircuit;