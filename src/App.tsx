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

  const businessUnits: BusinessUnit[] = [
    {
      id: 'mitra-garage',
      name: 'Mitra Garage',
      description: 'Layanan perbaikan dan perawatan otomotif profesional dengan teknisi bersertifikat dan peralatan terdepan.',
      services: ['Perbaikan Mesin', 'Perbaikan Body', 'Layanan Rem', 'Ganti Oli', 'Tes Diagnostik', 'Layanan Ban'],
      icon: <Wrench className="w-8 h-8" />,
      color: 'bg-red-500'
    },
    {
      id: 'mitra-coffee',
      name: 'Mitra Coffee',
      description: 'Pengalaman kedai kopi premium dengan minuman yang dibuat ahli dan suasana yang ramah untuk semua pecinta kopi.',
      services: ['Kopi Spesial', 'Kue Segar', 'Ruang Pertemuan', 'Katering', 'Penjualan Biji Kopi', 'Pelatihan Barista'],
      icon: <Coffee className="w-8 h-8" />,
      color: 'bg-amber-600'
    },
    {
      id: 'hidroponik',
      name: 'Hidroponik',
      description: 'Solusi pertanian hidroponik inovatif menyediakan produk segar dan berkelanjutan melalui teknologi pertanian modern.',
      services: ['Sayuran Segar', 'Sistem Hidroponik', 'Konsultasi', 'Program Pelatihan', 'Penjualan Peralatan', 'Perawatan'],
      icon: <Leaf className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      id: 'mitra-motor',
      name: 'Mitra Motor',
      description: 'Pusat penjualan dan layanan sepeda motor komprehensif menampilkan merek-merek terkemuka dan layanan perawatan ahli.',
      services: ['Penjualan Motor', 'Layanan & Perbaikan', 'Suku Cadang', 'Asuransi', 'Test Drive', 'Program Tukar Tambah'],
      icon: <Bike className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      id: 'mitra-store',
      name: 'Mitra Store',
      description: 'Destinasi ritel satu atap menawarkan barang dagangan berkualitas dan kebutuhan sehari-hari untuk seluruh keluarga.',
      services: ['Barang Umum', 'Elektronik', 'Peralatan Rumah', 'Pakaian', 'Makanan & Minuman', 'Perawatan Pribadi'],
      icon: <Store className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      id: 'tefa-mesin',
      name: 'TEFA Mesin',
      description: 'Layanan mesin dan peralatan teknis khusus menyediakan solusi industri dan pendidikan teknis.',
      services: ['Perbaikan Mesin', 'Pelatihan Teknis', 'Penjualan Peralatan', 'Perawatan', 'Konsultasi', 'Penyediaan Suku Cadang'],
      icon: <Cog className="w-8 h-8" />,
      color: 'bg-gray-600'
    },
    {
      id: 'sunny-gold',
      name: 'Sunny Gold',
      description: 'Layanan perdagangan emas dan perhiasan terpercaya menawarkan produk emas berkualitas premium dan layanan penaksiran profesional.',
      services: ['Perdagangan Emas', 'Penjualan Perhiasan', 'Penaksiran Emas', 'Perhiasan Custom', 'Konsultasi Investasi', 'Layanan Beli Kembali'],
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'businesses', label: 'Unit Bisnis Kami' },
    { id: 'contact', label: 'Kontak' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-xl z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-white font-bold text-xl animate-pulse">M</span>
              </div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Mitra Enterprise</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id 
                      ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm' 
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur-sm"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 text-white" /> : 
                <Menu className="w-6 h-6 text-white" />
              }
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
              <div className="flex flex-col space-y-2 p-4">
                {navigationItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                      activeSection === item.id 
                        ? 'text-white bg-white/20 shadow-lg' 
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
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
      <section id="home" className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-blue-500/30 to-purple-600/20"></div>
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-400/25 rounded-full blur-2xl animate-bounce delay-500"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Title */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-200 mb-4 leading-tight animate-pulse">
                Selamat Datang di
              </h1>
              <div className="relative">
                <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse delay-300">
                  Mitra Enterprise
                </h1>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Mitra bisnis multi-usaha terpercaya yang menyediakan solusi komprehensif di bidang otomotif, perhotelan, pertanian, ritel, dan layanan teknis melalui jaringan unit TEFA khusus kami.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('businesses')}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Jelajahi Unit Bisnis Kami</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Hubungi Kami</span>
              </button>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill=%22%23000%22 fill-opacity=%220.4%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">Tentang Kami</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Mitra Enterprise</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Mitra Enterprise adalah perusahaan multi-bisnis dinamis yang beroperasi melalui model TEFA (Teaching Factory) inovatif kami. Kami menggabungkan keunggulan bisnis dengan nilai pendidikan, menciptakan lingkungan pembelajaran dunia nyata sambil memberikan layanan luar biasa kepada komunitas kami.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Star className="w-10 h-10 text-white animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Keunggulan</h3>
              <p className="text-gray-600 leading-relaxed">Berkomitmen memberikan kualitas terbaik di semua usaha bisnis kami dengan standar internasional</p>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:shadow-green-500/25 transition-all duration-300">
                  <Leaf className="w-10 h-10 text-white animate-pulse delay-150" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">Inovasi</h3>
              <p className="text-gray-600 leading-relaxed">Merangkul teknologi modern dan praktik berkelanjutan untuk masa depan yang lebih baik</p>
            </div>
            
            <div className="group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Clock className="w-10 h-10 text-white animate-pulse delay-300" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Keandalan</h3>
              <p className="text-gray-600 leading-relaxed">Mitra terpercaya yang menyediakan layanan konsisten dan dapat diandalkan setiap saat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section id="businesses" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-cyan-300 text-sm font-semibold rounded-full border border-cyan-500/30">Unit Bisnis Kami</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              Unit Bisnis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Kami</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Temukan portofolio beragam unit TEFA khusus kami, masing-masing dirancang untuk melayani kebutuhan pasar tertentu sambil mempertahankan standar kualitas dan layanan tertinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessUnits.map((business, index) => (
              <div key={business.id} className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className={`relative w-16 h-16 ${business.color} rounded-2xl flex items-center justify-center text-white mr-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110`}>
                      {business.icon}
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{business.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">{business.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-bold text-white mb-4 text-lg group-hover:text-cyan-300 transition-colors duration-300">Layanan Kami:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {business.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-all duration-300 hover:translate-x-2">
                          <div className={`w-2 h-2 ${business.color} rounded-full mr-3 shadow-lg animate-pulse`} style={{animationDelay: `${serviceIndex * 100}ms`}}></div>
                          <span className="font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Button */}
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">Hubungi Kami</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Siap menjelajahi layanan kami? Hubungi kami hari ini untuk mempelajari lebih lanjut tentang bagaimana Mitra Enterprise dapat melayani kebutuhan Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="group flex items-start p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-transparent hover:from-blue-100 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg mb-1">Alamat</p>
                    <p className="text-gray-600 leading-relaxed">Jl. Raya Mitra Enterprise No. 123<br />Jakarta, Indonesia 12345</p>
                  </div>
                </div>
                
                <div className="group flex items-start p-4 rounded-2xl bg-gradient-to-r from-green-50 to-transparent hover:from-green-100 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg mb-1">Telepon</p>
                    <p className="text-gray-600 text-lg font-semibold">+62 21 1234 5678</p>
                  </div>
                </div>
                
                <div className="group flex items-start p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-transparent hover:from-purple-100 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg mb-1">Email</p>
                    <p className="text-gray-600 text-lg font-semibold">info@mitraenterprise.co.id</p>
                  </div>
                </div>
                
                <div className="group flex items-start p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-transparent hover:from-orange-100 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg mb-1">Jam Operasional</p>
                    <p className="text-gray-600 leading-relaxed">Senin - Jumat: 08:00 - 18:00<br />Sabtu: 08:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Nama</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
                    placeholder="email.anda@contoh.com"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Minat Bisnis</label>
                  <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80">
                    <option value="">Pilih unit bisnis</option>
                    {businessUnits.map(business => (
                      <option key={business.id} value={business.id}>{business.name}</option>
                    ))}
                  </select>
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 resize-none"
                    placeholder="Ceritakan bagaimana kami dapat membantu Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                >
                  <span className="flex items-center justify-center">
                    Kirim Pesan
                    <Mail className="w-5 h-5 ml-2" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl animate-pulse">M</span>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Mitra Enterprise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Mitra bisnis multi-usaha terpercaya yang menyediakan solusi komprehensif melalui jaringan unit TEFA khusus kami. Keunggulan, inovasi, dan keandalan di setiap layanan yang kami berikan.
              </p>
              {/* Social Media Icons Placeholder */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Unit Bisnis Kami</h4>
              <ul className="space-y-3">
                {businessUnits.slice(0, 4).map(business => (
                  <li key={business.id} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {business.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Layanan Lainnya</h4>
              <ul className="space-y-3">
                {businessUnits.slice(4).map(business => (
                  <li key={business.id} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer flex items-center group">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {business.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
          
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">Mitra Enterprise</span>. Semua hak dilindungi undang-undang.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Dibuat dengan ❤️ untuk masa depan yang lebih baik
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;