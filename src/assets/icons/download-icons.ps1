# PowerShell script to download all tech stack icons
# Run this script from the project root: .\src\assets\icons\download-icons.ps1

$icons = @{
    "html5-original.svg" = "https://devicon.dev/icons/html5/html5-original.svg"
    "css3-original.svg" = "https://devicon.dev/icons/css3/css3-original.svg"
    "javascript-original.svg" = "https://devicon.dev/icons/javascript/javascript-original.svg"
    "typescript-original.svg" = "https://devicon.dev/icons/typescript/typescript-original.svg"
    "react-original.svg" = "https://devicon.dev/icons/react/react-original.svg"
    "nextjs-original.svg" = "https://devicon.dev/icons/nextjs/nextjs-original.svg"
    "tailwindcss-plain.svg" = "https://devicon.dev/icons/tailwindcss/tailwindcss-plain.svg"
    "nodejs-original.svg" = "https://devicon.dev/icons/nodejs/nodejs-original.svg"
    "express-original.svg" = "https://devicon.dev/icons/express/express-original.svg"
    "mongodb-original.svg" = "https://devicon.dev/icons/mongodb/mongodb-original.svg"
    "mysql-original.svg" = "https://devicon.dev/icons/mysql/mysql-original.svg"
    "github-original.svg" = "https://devicon.dev/icons/github/github-original.svg"
    "git-original.svg" = "https://devicon.dev/icons/git/git-original.svg"
    "python-original.svg" = "https://devicon.dev/icons/python/python-original.svg"
    "java-original.svg" = "https://devicon.dev/icons/java/java-original.svg"
    "firebase-icon.svg" = "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
    "framer-motion-logo.png" = "https://seeklogo.com/images/F/framer-motion-logo-BCB4B2C93C-seeklogo.com.png"
    "figma-icon.svg" = "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
    "getpostman-icon.svg" = "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    "vercel-logo.png" = "https://assets.vercel.com/image/upload/v1662130559/front/vercel/logo.png"
}

$iconDir = "src\assets\icons"

foreach ($icon in $icons.GetEnumerator()) {
    $fileName = $icon.Key
    $url = $icon.Value
    $filePath = Join-Path $iconDir $fileName
    
    Write-Host "Downloading $fileName..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $filePath
        Write-Host "✓ Downloaded $fileName" -ForegroundColor Green
    } catch {
        Write-Host "✗ Failed to download $fileName : $_" -ForegroundColor Red
    }
}

Write-Host "`nDownload complete!" -ForegroundColor Cyan

