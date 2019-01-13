#! /bin/bash

echo "Creating base habbajets..."

rm -rf app/images/habbajets/*
mkdir app/images/habbajets/red
mkdir app/images/habbajets/blue
mkdir app/images/habbajets/green
mkdir app/images/habbajets/yellow
mkdir app/images/habbajets/purple

echo "export function frameCounts(state: string): number {" > app/frame-counts.ts
echo "  switch (state) {" >> app/frame-counts.ts

files=piskel/*.piskel
for f in $files; do
    filename=$(basename $f .piskel)
    echo "Processing $filename"

    awk 'BEGIN { FS = "\"" } { print $37 }' < $f > one.png
    awk 'BEGIN { FS = "\\" } { print $1 }' < one.png > two.png
    magick inline:two.png output.png
    rm one.png
    rm two.png
    
    width=$(magick identify -format '%w' output.png)
    width=$(($width/300))
    
    magick output.png -crop "${width}x1+0+0@" +repage +adjoin "app/images/habbajets/red/$filename.png"
    rm output.png
    echo "    case '$filename': return $width;" >> app/frame-counts.ts 
done

echo "    default: return 0;" >> app/frame-counts.ts
echo "  }" >> app/frame-counts.ts
echo "}" >> app/frame-counts.ts

base1="#ea2929" # light body colour, generally on the face.
base2="#e91b1b" # lightish body colour, generally on the torso.
base3="#df1616" # slightly shaded torso area.
base4="#d11515" # more shaded torso area.
base5="#c31313" # heavily shaded torso area.
base6="#8b0d0d" # dark colour around eyes and mouth.
base7="#da5fa6" # light tail colour
base8="#d7539f" # shaded tail colour
base9="#cd308a" # dark tail colour for back tail (remove)
base10="#961860" # very dark tail colour for around eyes

red1="#da4848"
red2="#da4848"
red3="#da4848"
red4="#da4848"
red5="#da4848"
red6="#8b0d0d"

red7="#ffaec9"
red8="#ff9bbc"
red9="#ff9bbc"
red10="#ce698a"

blue1="#15326f"
blue2="#17387c"
blue3="#193e89"
blue4="#1b4496"
blue5="#1d4aa3"

green1="#c921c0"
green2="#1e691a"
green3="#21751d"
green4="#258120"
green5="#298d23"

yellow1="#4a510f"
yellow2="#565e11"
yellow3="#626b13"
yellow4="#6e7815"
yellow5="#7a8517"

purple1="#95198d"
purple1="#a21b9a"
purple1="#af1da6"
purple1="#bc1fb3"
purple1="#c921c0"

# echo "Converting to blue..."
# magick mogrify -path app/images/habbajets/blue -format png -fill $blue1 -opaque $base1 app/images/habbajets/red/*.png
# magick mogrify -path app/images/habbajets/blue -format png -fill $blue2 -opaque $base2 app/images/habbajets/blue/*.png
# magick mogrify -path app/images/habbajets/blue -format png -fill $blue3 -opaque $base3 app/images/habbajets/blue/*.png
# magick mogrify -path app/images/habbajets/blue -format png -fill $blue4 -opaque $base4 app/images/habbajets/blue/*.png
# magick mogrify -path app/images/habbajets/blue -format png -fill $blue5 -opaque $base5 app/images/habbajets/blue/*.png

# echo "Converting to green..."
# magick mogrify -path app/images/habbajets/green -format png -fill $green1 -opaque $base1 app/images/habbajets/red/*.png
# magick mogrify -path app/images/habbajets/green -format png -fill $green2 -opaque $base2 app/images/habbajets/green/*.png
# magick mogrify -path app/images/habbajets/green -format png -fill $green3 -opaque $base3 app/images/habbajets/green/*.png
# magick mogrify -path app/images/habbajets/green -format png -fill $green4 -opaque $base4 app/images/habbajets/green/*.png
# magick mogrify -path app/images/habbajets/green -format png -fill $green5 -opaque $base5 app/images/habbajets/green/*.png

# echo "Converting to yellow..."
# magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow1 -opaque $base1 app/images/habbajets/red/*.png
# magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow2 -opaque $base2 app/images/habbajets/yellow/*.png
# magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow3 -opaque $base3 app/images/habbajets/yellow/*.png
# magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow4 -opaque $base4 app/images/habbajets/yellow/*.png
# magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow5 -opaque $base5 app/images/habbajets/yellow/*.png

# echo "Converting to purple..."
# magick mogrify -path app/images/habbajets/purple -format png -fill $purple1 -opaque $base1 app/images/habbajets/red/*.png
# magick mogrify -path app/images/habbajets/purple -format png -fill $purple2 -opaque $base2 app/images/habbajets/purple/*.png
# magick mogrify -path app/images/habbajets/purple -format png -fill $purple3 -opaque $base3 app/images/habbajets/purple/*.png
# magick mogrify -path app/images/habbajets/purple -format png -fill $purple4 -opaque $base4 app/images/habbajets/purple/*.png
# magick mogrify -path app/images/habbajets/purple -format png -fill $purple5 -opaque $base5 app/images/habbajets/purple/*.png

echo "Converting to red..."
magick mogrify -path app/images/habbajets/red -format png -fill $red1 -opaque $base1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red2 -opaque $base2 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red3 -opaque $base3 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red4 -opaque $base4 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red5 -opaque $base5 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red6 -opaque $base6 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red7 -opaque $base7 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red8 -opaque $base8 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red9 -opaque $base9 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red10 -opaque $base10 app/images/habbajets/red/*.png