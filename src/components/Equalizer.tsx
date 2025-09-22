const Equalizer = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-end space-x-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="equalizer-bar"
          style={{
            height: `${Math.random() * 30 + 10}px`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Equalizer;