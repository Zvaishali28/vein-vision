#!/bin/bash

# VeinVision Vercel Deployment Script
# This script helps deploy the frontend to Vercel

echo "🌐 VeinVision Vercel Deployment Helper"
echo "====================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📋 Pre-deployment Checklist:"
echo ""

# Check Node.js version
node_version=$(node --version 2>&1)
echo "✅ Node.js version: $node_version"

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "✅ Package.json found"
    
    # Check if Next.js is in dependencies
    if grep -q "\"next\":" package.json; then
        echo "✅ Next.js dependency found"
    else
        echo "❌ Error: Next.js not found in dependencies"
        exit 1
    fi
else
    echo "❌ Error: package.json not found"
    exit 1
fi

# Check if vercel.json exists
if [ -f "vercel.json" ]; then
    echo "✅ Vercel configuration found"
else
    echo "⚠️  Warning: vercel.json not found (optional)"
fi

# Check if next.config.ts exists
if [ -f "next.config.ts" ]; then
    echo "✅ Next.js configuration found"
else
    echo "⚠️  Warning: next.config.ts not found (using defaults)"
fi

# Check for environment variables template
if [ -f ".env.example" ]; then
    echo "✅ Environment variables template found"
else
    echo "⚠️  Warning: .env.example not found"
fi

echo ""
echo "🔧 Vercel Configuration:"
echo "- Framework: Next.js 15.5.2"
echo "- Build Command: npm run build"
echo "- Output Directory: .next"
echo "- Install Command: npm ci"

echo ""
echo "📝 Required Environment Variables for Vercel:"
echo "- NEXT_PUBLIC_API_URL (your Render backend URL)"
echo "- NEXT_PUBLIC_SUPABASE_URL"
echo "- NEXT_PUBLIC_SUPABASE_ANON_KEY"
echo "- NODE_ENV=production"

echo ""
echo "🚀 Deployment Options:"
echo ""
echo "Option 1 - CLI Deployment:"
echo "1. Install Vercel CLI: npm install -g vercel"
echo "2. Login: vercel login"
echo "3. Deploy: vercel --prod"
echo ""
echo "Option 2 - Dashboard Deployment:"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Import Git Repository"
echo "3. Select this repository"
echo "4. Framework Preset: Next.js"
echo "5. Add environment variables"
echo "6. Deploy!"

echo ""
echo "🔗 After Deployment:"
echo "1. Note your Vercel app URL"
echo "2. Update NEXT_PUBLIC_API_URL with your Render backend URL"
echo "3. Update backend CORS settings if needed"

echo ""
echo "✅ Deployment preparation complete!"
echo "Your VeinVision frontend is ready for Vercel deployment."
