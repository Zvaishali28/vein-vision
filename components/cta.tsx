import React from 'react'
import Link from 'next/link'
import { Activity, Heart, ArrowRight } from 'lucide-react'

const Cta = () => {
  return (
    <section className="w-full">
        <div className='flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 mb-0 bg-gradient-to-r from-medical-secondary via-vascular-secondary to-navy-900 border-t border-b border-vascular-border/40 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 sm:mb-8 font-medical leading-tight'>
                    Try VeinVision – Your Vein Health Companion!
                </h2>
                <p className='text-center text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10'>
                    VeinVision is your AI-powered assistant for varicose vein care, offering early detection, personalized risk assessment, and comprehensive health monitoring.
                </p>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
                    <Link 
                        href='/vericose' 
                        className='bg-medical-primary text-white py-3 sm:py-4 font-semibold px-6 sm:px-8 rounded-xl hover:bg-medical-secondary transition-all duration-200 shadow-medical flex items-center justify-center gap-2 text-decoration-none text-sm sm:text-base'
                    >
                        <Activity className='w-4 h-4 sm:w-5 sm:h-5' />
                        Get Started
                        <ArrowRight className='w-3 h-3 sm:w-4 sm:h-4' />
                    </Link>
                    <Link 
                        href='/about' 
                        className='border-2 border-medical-accent/60 text-white py-3 sm:py-4 font-semibold px-6 sm:px-8 rounded-xl hover:bg-medical-primary hover:border-medical-primary transition-all duration-200 flex items-center justify-center gap-2 text-decoration-none text-sm sm:text-base'
                    >
                        <Heart className='w-4 h-4 sm:w-5 sm:h-5' />
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta
