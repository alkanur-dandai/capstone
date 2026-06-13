# Input / Output paths
$input = "public/New Academic BLDG-compressed.glb"
$temp1 = "temp1.glb"
$temp2 = "temp2.glb"
$output = "public/glb/ Academic BLDG.glb"

# STEP 1: Remove duplicates (reduces file size safely)
gltf-transform dedup $input $temp1

# STEP 2: Convert textures to WebP (SUPPORTED in v4.4.0)
gltf-transform webp $temp1 $temp2

# STEP 3: Compress geometry for mobile (best for Three.js)
gltf-transform meshopt $temp2 $output

# STEP 4: Cleanup temp files
Remove-Item $temp1,$temp2 -ErrorAction SilentlyContinue

Write-Host "✅ Done! Output saved to: $output"