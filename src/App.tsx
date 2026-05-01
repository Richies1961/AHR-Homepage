import ahrLogo from "./assets/ahr-neutral-only-logo.png";

function App() {
  return (
    <div
      id="dog-lovers"
      className="min-h-screen bg-gray-100 flex items-center justify-center p-6"
    >
      <img
        src={ahrLogo}
        alt="AHR Logo"
        className="w-full max-w-2xl h-auto object-contain"
      />
    </div>
  );
}

export default App;
