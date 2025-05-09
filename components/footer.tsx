export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-zinc-400">© {currentYear} Micheal Agulonye. All rights reserved.</p>
            </div>
  
            <div>
              <p className="text-zinc-400">
                Built with <span className="text-emerald-400">Next.js</span> and{" "}
                <span className="text-emerald-400">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  