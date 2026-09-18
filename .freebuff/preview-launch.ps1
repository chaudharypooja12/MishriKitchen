$env:Path = 'C:\Users\pooja\Downloads\MishriKitchen\.freebuff\tools\node;' + $env:Path
$p = Start-Process -FilePath 'C:\Users\pooja\Downloads\MishriKitchen\.freebuff\tools\node\node.exe' `
  -ArgumentList 'node_modules\next\dist\bin\next','dev','-p','3000' `
  -WorkingDirectory 'C:\Users\pooja\Downloads\MishriKitchen' `
  -RedirectStandardOutput 'C:\Users\pooja\Downloads\MishriKitchen\.freebuff\preview-cf9ef908-e920-4404-9e92-c98e80009125.log' `
  -RedirectStandardError 'C:\Users\pooja\Downloads\MishriKitchen\.freebuff\preview-cf9ef908-e920-4404-9e92-c98e80009125.log.err' `
  -WindowStyle Hidden -PassThru
$p.Id
