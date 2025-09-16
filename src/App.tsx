import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Wrench,
  Coffee,
  Leaf,
  Bike,
  Store,
  Cog,
  Gem
} from 'lucide-react';
import { MitraCoffeeLogo } from './assets/MitraCoffeeLogo';
import { HydroponicLogo } from './assets/HydroponicLogo';

interface BusinessUnit {
  id: string;
  name: string;
  description: string;
  services: string[];
  icon: React.ReactNode;
  color: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [counters, setCounters] = useState({ clients: 0, projects: 0, years: 0, satisfaction: 0 });
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  const businessUnits: BusinessUnit[] = [
    {
      id: 'mitra-garage',
      name: 'Mitra Garage',
      description: 'Layanan perbaikan dan perawatan otomotif profesional dengan teknisi bersertifikat dan peralatan canggih.',
      services: ['Perbaikan Mesin', 'Body Repair', 'Service Rem', 'Ganti Oli', 'Diagnostic Testing', 'Service Ban'],
      icon: <Wrench className="w-8 h-8" />,
      color: 'bg-red-500'
    },
    {
      id: 'mitra-coffee',
      name: 'Mitra Coffee',
      description: 'Pengalaman kedai kopi premium dengan minuman berkualitas tinggi dan suasana hangat untuk semua pecinta kopi.',
      services: ['Kopi Spesial', 'Kue Segar', 'Ruang Meeting', 'Catering', 'Penjualan Biji Kopi', 'Pelatihan Barista'],
      icon: <MitraCoffeeLogo width={32} height={32} />,
      color: 'bg-amber-600'
    },
    {
      id: 'hidroponik',
      name: 'H-MIND Hidroponik',
      description: 'Solusi pertanian hidroponik inovatif yang menyediakan produk segar dan berkelanjutan melalui teknologi pertanian modern.',
      services: ['Sayuran Segar', 'Sistem Hidroponik', 'Konsultasi', 'Program Pelatihan', 'Penjualan Peralatan', 'Maintenance'],
      icon: <HydroponicLogo width={64} height={32} />,
      color: 'bg-green-500'
    },
    {
      id: 'mitra-motor',
      name: 'Mitra Motor',
      description: 'Pusat penjualan dan service motor komprehensif dengan brand terbaik dan layanan perawatan ahli.',
      services: ['Penjualan Motor', 'Service & Repair', 'Suku Cadang', 'Asuransi', 'Test Ride', 'Program Tukar Tambah'],
      icon: <Bike className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      id: 'mitra-store',
      name: 'Mitra Store',
      description: 'Destinasi retail lengkap yang menawarkan produk berkualitas dan kebutuhan sehari-hari untuk seluruh keluarga.',
      services: ['Barang Umum', 'Elektronik', 'Peralatan Rumah', 'Pakaian', 'Makanan & Minuman', 'Perawatan Pribadi'],
      icon: <Store className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      id: 'tefa-mesin',
      name: 'TEFA Mesin',
      description: 'Layanan mesin dan peralatan teknis khusus yang menyediakan solusi industri dan pendidikan teknis.',
      services: ['Perbaikan Mesin', 'Pelatihan Teknis', 'Penjualan Peralatan', 'Maintenance', 'Konsultasi', 'Supply Suku Cadang'],
      icon: <Cog className="w-8 h-8" />,
      color: 'bg-gray-600'
    },
    {
      id: 'sunny-gold',
      name: 'Sunny Gold',
      description: 'Layanan perdagangan emas dan perhiasan terpercaya dengan produk emas berkualitas premium dan jasa penaksiran profesional.',
      services: ['Trading Emas', 'Penjualan Perhiasan', 'Penaksiran Emas', 'Perhiasan Custom', 'Konsultasi Investasi', 'Layanan Buyback'],
      icon: <Gem className="w-8 h-8" />,
      color: 'bg-yellow-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'businesses', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }

      // Check if stats section is visible for counter animation
      const statsElement = document.getElementById('stats');
      if (statsElement && !isCounterVisible) {
        const rect = statsElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsCounterVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCounterVisible]);

  // Counter animation effect
  useEffect(() => {
    if (isCounterVisible) {
      const targets = { clients: 500, projects: 150, years: 8, satisfaction: 98 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounters({
          clients: Math.round(targets.clients * easeOut),
          projects: Math.round(targets.projects * easeOut),
          years: Math.round(targets.years * easeOut),
          satisfaction: Math.round(targets.satisfaction * easeOut)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isCounterVisible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert('Pesan berhasil dikirim!');
  };

  const navigationItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'businesses', label: 'Unit Bisnis Kami' },
    { id: 'contact', label: 'Kontak' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation Header */}
      <header className={`fixed top-0 w-full backdrop-blur-sm shadow-lg z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-gray-900/95 shadow-gray-800' : 'bg-white/95 shadow-gray-200'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Mitra Enterprise</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' 
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-yellow-500 text-yellow-900 hover:bg-yellow-400' 
                    : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                {navigationItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-blue-600 ${
                      activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className={`relative pt-20 pb-16 overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse ${
            isDarkMode ? 'bg-blue-400' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 ${
            isDarkMode ? 'bg-purple-400' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 animate-spin-slow ${
            isDarkMode ? 'bg-indigo-400' : 'bg-indigo-300'
          }`}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent animate-gradient ${
                isDarkMode 
                  ? 'from-blue-400 via-purple-400 to-pink-400' 
                  : 'from-blue-600 via-purple-600 to-pink-600'
              }`}>
                Selamat Datang di <br className="md:hidden" />
                <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                  Mitra Enterprise
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up delay-300">
              <p className={`text-xl md:text-2xl mb-10 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Mitra bisnis terpercaya yang menyediakan solusi komprehensif di bidang otomotif, perhotelan, pertanian, retail, dan layanan teknis melalui jaringan unit TEFA khusus kami.
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-500">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => scrollToSection('businesses')}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Jelajahi Bisnis Kami</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`group border-2 px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">Hubungi Kami</span>
                </button>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                isDarkMode ? 'border-gray-400' : 'border-gray-600'
              }`}>
                <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
                  isDarkMode ? 'bg-gray-400' : 'bg-gray-600'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-blue-600'
              }`}>
                <span className="text-2xl">👥</span>
              </div>
              <div className={`text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{counters.clients}+</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Klien Puas</div>
            </div>
            
            <div className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode ? 'bg-gradient-to-br from-green-500 to-teal-600' : 'bg-gradient-to-br from-green-400 to-green-600'
              }`}>
                <span className="text-2xl">🚀</span>
              </div>
              <div className={`text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{counters.projects}+</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Proyek Selesai</div>
            </div>
            
            <div className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 'bg-gradient-to-br from-yellow-400 to-yellow-600'
              }`}>
                <span className="text-2xl">⭐</span>
              </div>
              <div className={`text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{counters.years}</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Tahun Pengalaman</div>
            </div>
            
            <div className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode ? 'bg-gradient-to-br from-pink-500 to-red-600' : 'bg-gradient-to-br from-pink-400 to-pink-600'
              }`}>
                <span className="text-2xl">💯</span>
              </div>
              <div className={`text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{counters.satisfaction}%</div>
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Tentang Mitra Enterprise</h2>
            <p className={`text-lg md:text-xl leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Mitra Enterprise adalah perusahaan multi-bisnis yang dinamis beroperasi melalui model TEFA (Teaching Factory) yang inovatif. Kami menggabungkan keunggulan bisnis dengan nilai pendidikan, menciptakan lingkungan pembelajaran dunia nyata sambil memberikan layanan luar biasa kepada komunitas kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-500/25' 
                  : 'bg-gradient-to-br from-blue-100 to-blue-200 shadow-blue-200'
              }`}>
                <Star className={`w-10 h-10 ${
                  isDarkMode ? 'text-white' : 'text-blue-600'
                }`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Keunggulan</h3>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Berkomitmen memberikan kualitas superior dalam semua usaha bisnis kami</p>
            </div>
            
            <div className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-green-500 to-green-700 shadow-green-500/25' 
                  : 'bg-gradient-to-br from-green-100 to-green-200 shadow-green-200'
              }`}>
                <Leaf className={`w-10 h-10 ${
                  isDarkMode ? 'text-white' : 'text-green-600'
                }`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Inovasi</h3>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Mengadopsi teknologi modern dan praktik berkelanjutan</p>
            </div>
            
            <div className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-purple-500 to-purple-700 shadow-purple-500/25' 
                  : 'bg-gradient-to-br from-purple-100 to-purple-200 shadow-purple-200'
              }`}>
                <Clock className={`w-10 h-10 ${
                  isDarkMode ? 'text-white' : 'text-purple-600'
                }`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Keandalan</h3>
              <p className={`${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Mitra terpercaya yang memberikan layanan konsisten dan dapat diandalkan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section id="businesses" className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Unit Bisnis Kami</h2>
            <p className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Temukan portofolio beragam unit TEFA khusus kami, masing-masing dirancang untuk melayani kebutuhan pasar tertentu sambil mempertahankan standar kualitas dan layanan tertinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUnits.map((business, index) => (
              <div 
                key={business.id} 
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-hover ${
                  isDarkMode 
                    ? 'bg-gray-900 shadow-gray-900/50' 
                    : 'bg-white shadow-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${business.color} rounded-2xl flex items-center justify-center text-white mr-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      {business.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{business.name}</h3>
                  </div>
                  
                  <p className={`mb-8 leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{business.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className={`font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Layanan Kami:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {business.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex} 
                          className={`flex items-center text-sm p-2 rounded-lg transition-colors duration-200 ${
                            isDarkMode 
                              ? 'text-gray-300 hover:bg-gray-800' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Apa Kata Klien Kami</h2>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Kepercayaan dan kepuasan klien adalah prioritas utama kami. Berikut testimoni dari para klien yang telah merasakan layanan terbaik kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                position: "CEO, PT Maju Jaya",
                content: "Mitra Enterprise memberikan solusi otomotif terbaik untuk armada perusahaan kami. Pelayanan professional dan hasil yang memuaskan!",
                rating: 5,
                avatar: "👨‍💼"
              },
              {
                name: "Sari Dewi",
                position: "Owner, Cafe Nusantara",
                content: "Mitra Coffee membantu kami meningkatkan kualitas minuman dan pelayanan. Tim barista mereka sangat berpengalaman!",
                rating: 5,
                avatar: "👩‍💼"
              },
              {
                name: "Ahmad Rahman",
                position: "Petani Modern",
                content: "Sistem hidroponik H-MIND mengubah cara saya bertani. Hasil panen lebih berkualitas dan berkelanjutan.",
                rating: 5,
                avatar: "👨‍🌾"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 shadow-gray-900/50' 
                    : 'bg-white shadow-gray-200'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Icon */}
                <div className={`absolute top-6 right-6 text-4xl opacity-10 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-300'
                }`}>
                  "
                </div>
                
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                {/* Content */}
                <p className={`text-lg leading-relaxed mb-8 italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className={`font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{testimonial.name}</h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>{testimonial.position}</p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Hubungi Kami</h2>
            <p className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Siap untuk mengeksplorasi layanan kami? Hubungi kami hari ini untuk mempelajari lebih lanjut bagaimana Mitra Enterprise dapat melayani kebutuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-8 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Informasi Kontak</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Alamat",
                      content: "Jl. Raya Mitra Enterprise No. 123\nJakarta, Indonesia 12345",
                      color: "text-red-500"
                    },
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Telepon",
                      content: "+62 21 1234 5678",
                      color: "text-green-500"
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email",
                      content: "info@mitraenterprise.co.id",
                      color: "text-blue-500"
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Jam Operasional",
                      content: "Senin - Jumat: 08:00 - 18:00\nSabtu: 08:00 - 16:00",
                      color: "text-purple-500"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start p-4 rounded-xl transition-all duration-300 hover:scale-105">
                      <div className={`${item.color} mt-1 mr-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className={`font-semibold mb-2 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>{item.title}</p>
                        <p className={`leading-relaxed whitespace-pre-line ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h4 className={`font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Ikuti Kami</h4>
                <div className="flex space-x-4">
                  {[
                    { name: "Facebook", icon: "🔵", color: "hover:bg-blue-600" },
                    { name: "Instagram", icon: "🟣", color: "hover:bg-pink-600" },
                    { name: "LinkedIn", icon: "🗺", color: "hover:bg-blue-700" },
                    { name: "WhatsApp", icon: "🟢", color: "hover:bg-green-600" }
                  ].map((social) => (
                    <button
                      key={social.name}
                      className={`w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xl transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-8 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Kirim Pesan</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Nama</label>
                    <input
                      type="text"
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder="Nama lengkap Anda"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Email</label>
                    <input
                      type="email"
                      required
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder="email.anda@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Minat Bisnis</label>
                  <select className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}>
                    <option value="">Pilih unit bisnis</option>
                    {businessUnits.map(business => (
                      <option key={business.id} value={business.id}>{business.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Pesan</label>
                  <textarea
                    rows={4}
                    required
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Ceritakan bagaimana kami dapat membantu Anda..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="loading-spinner mr-2"></div>
                      Mengirim...
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">Kirim Pesan</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 ${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-900 text-white'
      }`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mitra Enterprise
                </h3>
              </div>
              <p className={`leading-relaxed text-lg mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-400'
              }`}>
                Mitra bisnis terpercaya yang menyediakan solusi komprehensif melalui jaringan unit TEFA khusus kami. Keunggulan, inovasi, dan keandalan dalam setiap layanan yang kami berikan.
              </p>
              
              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className={`flex-1 px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                  }`}
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Berlangganan
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bisnis Kami
              </h4>
              <ul className="space-y-3">
                {businessUnits.slice(0, 4).map((business, index) => (
                  <li 
                    key={business.id}
                    className={`transition-all duration-300 hover:translate-x-2 hover:text-blue-400 cursor-pointer ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-400'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    • {business.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Layanan Lainnya
              </h4>
              <ul className="space-y-3">
                {businessUnits.slice(4).map((business, index) => (
                  <li 
                    key={business.id}
                    className={`transition-all duration-300 hover:translate-x-2 hover:text-blue-400 cursor-pointer ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-400'
                    }`}
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    • {business.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center ${
            isDarkMode ? 'border-gray-700' : 'border-gray-800'
          }`}>
            <div className={`text-center md:text-left mb-4 md:mb-0 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-400'
            }`}>
              <p className="text-lg">&copy; 2025 Mitra Enterprise. Hak cipta dilindungi.</p>
              <p className="text-sm mt-1">Dibuat dengan ❤️ untuk masa depan yang lebih baik</p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={() => scrollToSection('home')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;