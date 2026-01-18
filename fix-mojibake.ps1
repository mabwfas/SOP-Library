# Fix mojibake in employee-handbook.html
$file = "C:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\employee-handbook.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Common mojibake patterns
$replacements = @{
    'ðŸš€' = '🚀'
    'ðŸš¨' = '🚨'
    'ðŸ"' = '📄'
    'ðŸ'¥' = '👥'
    'ðŸ–ï¸' = '🏖️'
    'ðŸ'°' = '💰'
    'ðŸ'¬' = '💬'
    'ðŸ ' = '🏠'
    'ðŸŽ‰' = '🎉'
    'ðŸ'»' = '💻'
    'ðŸšª' = '🚪'
    'ðŸ§ ' = '🧠'
    'ðŸ›¡ï¸' = '🛡️'
    'ðŸ'¼' = '💼'
    'ðŸ"˜' = '📘'
    'ðŸ"¢' = '📢'
    'ðŸ"'' = '🔒'
    'ðŸŽ‚' = '🎂'
    'ðŸ¤' = '🤝'
    'ðŸŒ±' = '🌱'
    'ðŸ"§' = '📧'
    'â °' = '⏰'
    'ðŸ¦¸' = '🦸'
}

foreach ($old in $replacements.Keys) {
    $content = $content -replace [regex]::Escape($old), $replacements[$old]
}

Set-Content $file $content -Encoding UTF8
Write-Host "Fixed emoji encoding in employee-handbook.html"
