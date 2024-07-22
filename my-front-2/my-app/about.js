import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        {/* Header content */}
      </header>
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-[8.5in] w-[8.5in] h-[11in]">
          <div className="bg-background text-foreground rounded-lg shadow-lg p-6 w-[11in] h-[11in] overflow-auto typography">
            {/* About page content */}
            <h1>About</h1>
            <p>This is the about page.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;