import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-[430px] mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-light tracking-wider">LUMIÈRE</h1>
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <nav
        className={`fixed top-0 right-0 h-full w-full bg-background z-40 transition-transform duration-400 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-4xl font-light tracking-wide hover:opacity-60 transition-opacity"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('collections')}
            className="text-4xl font-light tracking-wide hover:opacity-60 transition-opacity"
          >
            Collections
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-4xl font-light tracking-wide hover:opacity-60 transition-opacity"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-4xl font-light tracking-wide hover:opacity-60 transition-opacity"
          >
            Contact
          </button>
        </div>
      </nav>

      <main className="max-w-[430px] mx-auto">
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16">
          <div className="animate-fade-in">
            <h2 className="text-6xl font-light mb-4 leading-tight">
              Timeless
              <br />
              Elegance
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-8 tracking-wide">
              Crafted with precision
            </p>
            <Button
              onClick={() => scrollToSection('collections')}
              className="px-8 py-6 text-base font-light tracking-widest"
            >
              EXPLORE
            </Button>
          </div>
          <div className="mt-12 aspect-square bg-muted rounded-sm overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <Icon name="Sparkles" size={64} />
            </div>
          </div>
        </section>

        <section id="collections" className="min-h-screen px-6 py-16">
          <h2 className="text-5xl font-light mb-12 tracking-wide">Collections</h2>
          <div className="space-y-8">
            {[
              { title: 'Diamonds', desc: 'Eternal brilliance' },
              { title: 'Gold', desc: 'Classic refinement' },
              { title: 'Pearls', desc: 'Natural beauty' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="aspect-[4/3] bg-muted rounded-sm mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                    <Icon name="Gem" size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-light mb-1 tracking-wide">{item.title}</h3>
                <p className="text-muted-foreground font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="min-h-screen px-6 py-16 flex flex-col justify-center">
          <h2 className="text-5xl font-light mb-8 tracking-wide">About</h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground mb-6">
            LUMIÈRE represents the pinnacle of fine jewelry craftsmanship. Each piece is
            meticulously designed and handcrafted to celebrate life's most precious moments.
          </p>
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            Our heritage spans generations, blending traditional techniques with contemporary
            aesthetics to create jewelry that transcends time.
          </p>
        </section>

        <section id="contact" className="min-h-screen px-6 py-16 flex flex-col justify-center">
          <h2 className="text-5xl font-light mb-8 tracking-wide">Contact</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Icon name="Mail" size={24} />
              <p className="font-light tracking-wide">contact@lumiere.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Phone" size={24} />
              <p className="font-light tracking-wide">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="MapPin" size={24} />
              <p className="font-light tracking-wide">New York, NY</p>
            </div>
          </div>
          <div className="mt-12 flex gap-6">
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
        </section>

        <footer className="px-6 py-8 border-t border-border">
          <p className="text-sm font-light text-muted-foreground text-center tracking-wider">
            © 2024 LUMIÈRE. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
