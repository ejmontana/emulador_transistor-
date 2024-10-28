import React from 'react';

interface LEDProps {
  isOn: boolean;
  current: number;
  color?: string;
}

const LED: React.FC<LEDProps> = ({ isOn, current, color = 'rgb(255, 220, 50)' }) => {
  const brightness = Math.min(current / 20, 1);
  const displayColor = isOn ? color.replace(')', `, ${brightness})`) : 'rgb(200, 200, 200)';
  
  return (
    <div className="relative">
      <div 
        className="w-8 h-8 rounded-full transition-all duration-300"
        style={{ 
          backgroundColor: displayColor,
          boxShadow: isOn ? `0 0 ${20 * brightness}px ${10 * brightness}px ${displayColor}` : 'none'
        }}
      />
    </div>
  );
};

export default LED;