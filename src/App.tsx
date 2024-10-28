import React from 'react';
import { Info, CircuitBoard, GraduationCap, Users } from 'lucide-react';
import CircuitSimulation from './components/CircuitSimulation';
import TransistorCircuit from './components/TransistorCircuit';
import RealWorldExample from './components/RealWorldExample';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1 bg-yellow-400/10 rounded-full">
            <GraduationCap className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400">Universidad Nacional de Ingeniería</span>
          </div>
          
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Simulador de Circuitos Electrónicos
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-400">
              Proyecto final del curso de Electrónica Digital
            </p>
            
            <div className="mt-4 flex items-center justify-center gap-8 text-sm text-gray-500">
              <div>
                <div className="text-gray-400">Profesor</div>
                <div>Dr. Juan Pérez García</div>
              </div>
              <div>
                <div className="text-gray-400">Semestre</div>
                <div>2024-I</div>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-300">Equipo de Desarrollo</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li>• Ana María Rodríguez - 20201234</li>
                  <li>• Carlos Eduardo López - 20205678</li>
                  <li>• Miguel Ángel Torres - 20209012</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-300">Carrera</h3>
                <p className="mt-2 text-sm text-gray-400">
                  Ingeniería Electrónica
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-300">Curso</h3>
                <p className="mt-2 text-sm text-gray-400">
                  EL391 - Electrónica Digital
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CircuitBoard className="text-blue-400" />
                Descripción del Proyecto
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Este simulador interactivo demuestra tres conceptos fundamentales de la electrónica digital,
                  permitiendo a los estudiantes experimentar con diferentes configuraciones y observar
                  los resultados en tiempo real.
                </p>
                <div className="grid gap-4">
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h3 className="font-medium text-yellow-400 mb-2">1. Circuito LED Básico</h3>
                    <p className="text-sm text-gray-400">
                      Simula un circuito LED con resistencia limitadora, permitiendo ajustar el voltaje
                      y la resistencia para comprender la Ley de Ohm y los límites seguros de operación.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h3 className="font-medium text-yellow-400 mb-2">2. Control con Transistor</h3>
                    <p className="text-sm text-gray-400">
                      Demuestra el uso de un transistor NPN como interruptor electrónico,
                      ilustrando conceptos de amplificación y control de corriente.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg">
                    <h3 className="font-medium text-yellow-400 mb-2">3. Aplicación Práctica</h3>
                    <p className="text-sm text-gray-400">
                      Implementa una luz nocturna automática usando un fotoresistor,
                      mostrando la integración de componentes en una aplicación real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CircuitSimulation />
          </div>

          <div className="space-y-8">
            <TransistorCircuit />
            <RealWorldExample />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Info className="text-blue-400" />
            Especificaciones Técnicas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Transistor 2N2222A</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Ganancia típica (hFE): 100</li>
                <li>Voltaje base-emisor: 0.7V</li>
                <li>Corriente máxima colector: 800mA</li>
                <li>Voltaje máximo colector-emisor: 40V</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">LED</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Voltaje típico: 2-3.3V</li>
                <li>Corriente nominal: 20mA</li>
                <li>Resistencia recomendada: 220Ω - 330Ω</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;