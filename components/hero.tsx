'use client'
import React from 'react'
import Link from 'next/link'
import { Activity, Heart, Shield } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-br from-vascular-light via-medical-light to-vascular-light min-h-screen px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col lg:flex-row items-center justify-between py-12 sm:py-16 md:py-20 lg:py-24 gap-8 sm:gap-10 lg:gap-12 max-w-7xl w-full'>
        <div className='flex flex-col justify-center lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-medical-accent font-bold mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medical leading-tight'>
            VeinVision – Smart Care for Your Veins
          </h1>
          <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-white leading-relaxed'>
            Real-time varicose vein detection, personalized risk assessment, and health monitoring — designed for everyone.
          </h2>
          <p className='text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl'>
            VeinVision is your AI-powered varicose vein assistant. From early detection and severity analysis to personalized lifestyle advice and wearable sensor monitoring, VeinVision empowers patients and healthcare providers with actionable insights for better vein health.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
            <Link 
              href='/vericose' 
              className='bg-medical-primary py-3 sm:py-3 font-semibold px-6 sm:px-6 rounded-xl hover:bg-medical-secondary transition-all duration-200 text-white shadow-medical flex items-center justify-center gap-2 text-decoration-none text-sm sm:text-base'
            >
              <Activity className='w-4 h-4 sm:w-5 sm:h-5' />
              Get Started
            </Link>
            <Link 
              href='/about' 
              className='border border-medical-accent py-3 sm:py-3 font-semibold px-6 sm:px-6 rounded-xl hover:bg-medical-primary hover:text-white transition-all duration-200 text-medical-accent flex items-center justify-center gap-2 text-decoration-none text-sm sm:text-base'
            >
              <Heart className='w-4 h-4 sm:w-5 sm:h-5' />
              Learn More
            </Link>
          </div>
        </div>
        <div className='relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-medical-lg bg-gradient-to-br from-medical-light via-[#14234e] to-vascular-secondary border border-vascular-border flex-shrink-0 flex items-center justify-center'>
          <div className='text-center px-4'>
            <div className='p-4 bg-medical-primary/20 rounded-2xl w-fit mx-auto mb-4 border border-medical-accent/30'>
              <Shield className='w-14 h-14 sm:w-16 sm:h-16 text-medical-accent' />
            </div>
            <h3 className='text-lg sm:text-xl font-semibold mb-2 text-white'>AI-Powered Detection</h3>
            <p className='text-xs sm:text-sm text-slate-300'>Advanced medical imaging analysis</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
