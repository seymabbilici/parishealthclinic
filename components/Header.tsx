'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openMobileSubSubmenu, setOpenMobileSubSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    services: {
      title: 'Hizmetler',
      submenu: [
        { 
          title: 'Yüz Estetiği', 
          href: '/yuz-estetigi',
          subitems: [
            { title: 'Burun Estetiği (Rhinoplasty)', href: '/yuz-estetigi/rhinoplasty' },
            { title: 'Yüz Germe (Face Lift)', href: '/yuz-estetigi/face-lift' },
            { title: 'Göz Kapağı Estetiği', href: '/yuz-estetigi/blepharoplasty' },
            { title: 'Dudak Dolgusu', href: '/yuz-estetigi' },
            { title: 'Elmacık Dolgusu', href: '/yuz-estetigi' },
            { title: 'Çene Düzeltme', href: '/yuz-estetigi' },
          ]
        },
        { 
          title: 'Göğüs Estetiği', 
          href: '/gogus-estetigi',
          subitems: [
            { title: 'Göğüs Büyütme', href: '/gogus-estetigi/gogus-buyutme' },
            { title: 'Göğüs Küçültme', href: '/gogus-estetigi' },
            { title: 'Göğüs Dikleştirme', href: '/gogus-estetigi' },
          ]
        },
        { 
          title: 'Vücut Estetiği', 
          href: '/vucut-estetigi',
          subitems: [
            { title: 'Yağ Alma (Liposuction)', href: '/vucut-estetigi/liposuction' },
            { title: 'Karın Germe (Tummy Tuck)', href: '/vucut-estetigi/tummy-tuck' },
            { title: 'Kol Germe', href: '/vucut-estetigi' },
            { title: 'Bacak Germe', href: '/vucut-estetigi' },
            { title: 'Popo Şekillendirme', href: '/vucut-estetigi' },
            { title: 'Soğuk Lipoliz', href: '/vucut-estetigi' },
          ]
        },
        { 
          title: 'Saç Ekimi', 
          href: '/sac-ekimi',
          subitems: [
            { title: 'FUE Saç Ekimi', href: '/sac-ekimi/fue' },
            { title: 'DHI Saç Ekimi', href: '/sac-ekimi' },
            { title: 'Sakal Ekimi', href: '/sac-ekimi' },
            { title: 'Kaş Ekimi', href: '/sac-ekimi' },
          ]
        },
        { 
          title: 'Diş Estetiği', 
          href: '/dis-estetigi',
          subitems: [
            { title: 'Hollywood Smile', href: '/dis-estetigi/hollywood-smile' },
            { title: 'Laminate (Zırhlı Kaplama)', href: '/dis-estetigi' },
            { title: 'Zirkonyum Kuron', href: '/dis-estetigi' },
            { title: 'Diş Beyazlatma', href: '/dis-estetigi' },
            { title: 'Gülüş Tasarımı', href: '/dis-estetigi' },
          ]
        },
      ],
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 hover:text-purple-clinic transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-1 lg:flex-none lg:mr-8">
            <div className="text-center lg:text-left">
              <div className="text-xl lg:text-2xl font-extrabold text-purple-clinic">PARIS</div>
              <div className="text-xs lg:text-sm text-gray-500 uppercase tracking-wider">Health Clinic</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 justify-center">
            {Object.entries(menuItems).map(([key, item]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-gray-800 text-sm font-semibold hover:text-purple-clinic transition-colors flex items-center space-x-1">
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Invisible gap bridge - prevents menu from closing when moving mouse */}
                <div className="absolute top-full left-0 right-0 h-2" />
                
                {openDropdown === key && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl py-2 animate-fade-in z-50">
                    {item.submenu.map((submenuItem, idx) => (
                      <div
                        key={idx}
                        className="relative group"
                        onMouseEnter={() => submenuItem.subitems && setOpenSubDropdown(idx.toString())}
                        onMouseLeave={() => setOpenSubDropdown(null)}
                      >
                        <Link
                          href={submenuItem.href}
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-purple-clinic/10 hover:text-purple-clinic transition-colors"
                        >
                          <span>{submenuItem.title}</span>
                          {submenuItem.subitems && <ChevronRight className="w-4 h-4" />}
                        </Link>
                        
                        {submenuItem.subitems && openSubDropdown === idx.toString() && (
                          <div className="absolute left-full top-0 ml-2 w-56 bg-white rounded-xl shadow-2xl py-2 z-50">
                            {/* Gap bridge for sub-submenu */}
                            <div className="absolute -left-2 top-0 bottom-0 w-2" />
                            {submenuItem.subitems.map((subitem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subitem.href}
                                className="block px-4 py-3 text-gray-700 hover:bg-purple-clinic/10 hover:text-purple-clinic transition-colors text-sm"
                              >
                                {subitem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/hakkimizda" className="text-gray-800 text-sm font-semibold hover:text-purple-clinic transition-colors">
              Hakkımızda
            </Link>
            <Link href="/#procedures" className="text-gray-800 text-sm font-semibold hover:text-purple-clinic transition-colors">
              İşlemler
            </Link>
            <Link href="/doktorlarimiz" className="text-gray-800 text-sm font-semibold hover:text-purple-clinic transition-colors">
              Doktorlarımız
            </Link>
            <Link href="/blog" className="text-gray-800 text-sm font-semibold hover:text-purple-clinic transition-colors">
              Blog
            </Link>
            <Link href="/iletisim" className="text-gray-800 text-sm font-semibold hover:text-purple-clinic transition-colors">
              İletişim
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+905444066234"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-purple-clinic transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">0 544 406 62 34</span>
            </a>
            <a
              href="https://wa.me/905444066234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-whatsapp text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ücretsiz Danışmanlık</span>
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href="https://wa.me/905444066234"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden bg-green-whatsapp text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key}>
                  <button
                    onClick={() => setOpenMobileSubmenu(openMobileSubmenu === key ? null : key)}
                    className="w-full flex items-center justify-between text-gray-700 hover:text-purple-clinic transition-colors py-2"
                  >
                    <span>{item.title}</span>
                    {openMobileSubmenu === key ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                  {openMobileSubmenu === key && (
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((submenuItem, idx) => (
                        <div key={idx}>
                          {submenuItem.subitems ? (
                            <>
                              <button
                                onClick={() => setOpenMobileSubSubmenu(openMobileSubSubmenu === `${key}-${idx}` ? null : `${key}-${idx}`)}
                                className="w-full flex items-center justify-between text-gray-600 hover:text-purple-clinic transition-colors py-2"
                              >
                                <span>{submenuItem.title}</span>
                                {openMobileSubSubmenu === `${key}-${idx}` ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </button>
                              {openMobileSubSubmenu === `${key}-${idx}` && (
                                <div className="pl-4 space-y-2">
                                  <Link
                                    href={submenuItem.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-gray-500 hover:text-purple-clinic transition-colors py-1"
                                  >
                                    Tümü
                                  </Link>
                                  {submenuItem.subitems.map((subitem, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subitem.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="block text-gray-500 hover:text-purple-clinic transition-colors py-1"
                                    >
                                      {subitem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={submenuItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-gray-600 hover:text-purple-clinic transition-colors py-2"
                            >
                              {submenuItem.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link href="/hakkimizda" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-clinic transition-colors py-2">
                Hakkımızda
              </Link>
              <Link href="/#procedures" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-clinic transition-colors py-2">
                İşlemler
              </Link>
              <Link href="/doktorlarimiz" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-clinic transition-colors py-2">
                Doktorlarımız
              </Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-clinic transition-colors py-2">
                Blog
              </Link>
              <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-purple-clinic transition-colors py-2">
                İletişim
              </Link>
              <a
                href="tel:+905444066234"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 text-gray-700 hover:text-purple-clinic transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span>0 544 406 62 34</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

