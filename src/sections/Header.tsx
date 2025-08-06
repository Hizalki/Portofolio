

export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3 ">
      {/* Navigantion */}
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        <a 
          href="#" 
          className="nav-item"
        >
          Home
        </a>
        <a 
          href="#" 
          className="nav-item"
        >
          Project
        </a>
        <a 
          href="#" 
          className="nav-item"
        >
          About
        </a>
        <a 
          href="#" 
          className="nav-item"
        >
          Write
        </a>
        <a 
          href="#" 
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 transition duration-300"
        >
          Contact
        </a>
        
      </nav>
    </div>
  );
};
