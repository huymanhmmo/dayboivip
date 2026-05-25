$c = Get-Content 'e:\CLAUDE\dayboivip\website\src\pages\hoc-boi-gia-re.astro' -Raw
$lines = (Get-Content 'e:\CLAUDE\dayboivip\website\src\pages\hoc-boi-gia-re.astro').Count
Write-Host "Lines: $lines"
$textOnly = $c -replace '<[^>]+>',' ' -replace '\s+',' '
$words = ($textOnly.Trim() -split '\s+').Count
Write-Host "Words: $words"
Write-Host "Images: $(([regex]::Matches($c,'<figure')).Count)"
Write-Host "H2: $(([regex]::Matches($c,'<h2')).Count)"
Write-Host "H3: $(([regex]::Matches($c,'<h3')).Count)"
Write-Host "Tables: $(([regex]::Matches($c,'<table>')).Count)"
Write-Host "Strong: $(([regex]::Matches($c,'<strong>')).Count)"
Write-Host "Internal links: $(([regex]::Matches($c,'href=`"/[a-z]')).Count)"
