#! /bin/bash

echo "Creating base habbajets..."

rm -rf app/images/habbajets/*
mkdir app/images/habbajets/red
mkdir app/images/habbajets/blue
mkdir app/images/habbajets/green
mkdir app/images/habbajets/yellow
mkdir app/images/habbajets/purple

echo "export function frameCounts(state: string): number {" > app/frame-counts.ts
echo "export function frameRates(state: string): number {" > app/frame-rates.ts
echo "  switch (state) {" >> app/frame-counts.ts
echo "  switch (state) {" >> app/frame-rates.ts

files=piskel/*.piskel
for f in $files; do
    filename=$(basename $f .piskel)
    echo "Processing $filename"

    rate=$(sed -r 's/.+"fps":([0-9]+).+/\1/' $f)

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
    echo "    case '$filename': return $rate;" >> app/frame-rates.ts
done

echo "    default: return 0;" >> app/frame-counts.ts
echo "  }" >> app/frame-counts.ts
echo "}" >> app/frame-counts.ts

echo "    default: return 100;" >> app/frame-rates.ts
echo "  }" >> app/frame-rates.ts
echo "}" >> app/frame-rates.ts

base1="#ea2929" # light torso colour
base2="#e91b1b" # lightly shaded torso colour
base3="#df1616" # shaded torso colour
base4="#8b0d0d" # darkest torso colour (for eyes and mouth)
base5="#da5fa6" # light tentacle colour
base6="#d7539f" # shaded tentacle colour
base7="#961860" # darkest tentacle colour (for eyes)

red1="#da4848"
red2="#d73b3b"
red3="#d42e2e"
red4="#951d1d"
red5="#ffaec9"
red6="#ff9bbc"
red7="#ce698a"

blue1="#1d4aa3"
blue2="#1b4496"
blue3="#193e89"
blue4="#0e2048"
blue5="#ffaec9"
blue6="#ff9bbc"
blue7="#ce698a"

green1="#298d23"
green2="#258120"
green3="#21751d"
green4="#10390e"
green5="#ffaec9"
green6="#ff9bbc"
green7="#ce698a"

yellow1="#7a8517"
yellow2="#6e7815"
yellow3="#626b13"
yellow4="#262a08"
yellow5="#ffaec9"
yellow6="#ff9bbc"
yellow7="#ce698a"

purple1="#c94dc2"
purple2="#c541be"
purple3="#bd3ab6"
purple4="#81267e"
purple5="#ffaec9"
purple6="#ff9bbc"
purple7="#ce698a"

echo "Converting to red..."
magick mogrify -path app/images/habbajets/red -format png -fill $red1 -opaque $base1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red2 -opaque $base2 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red3 -opaque $base3 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red4 -opaque $base4 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red5 -opaque $base5 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red6 -opaque $base6 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/red -format png -fill $red7 -opaque $base7 app/images/habbajets/red/*.png

echo "Converting to blue..."
magick mogrify -path app/images/habbajets/blue -format png -fill $blue1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $blue2 -opaque $red2 app/images/habbajets/blue/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $blue3 -opaque $red3 app/images/habbajets/blue/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $blue4 -opaque $red4 app/images/habbajets/blue/*.png

echo "Converting to green..."
magick mogrify -path app/images/habbajets/green -format png -fill $green1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $green2 -opaque $red2 app/images/habbajets/green/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $green3 -opaque $red3 app/images/habbajets/green/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $green4 -opaque $red4 app/images/habbajets/green/*.png

echo "Converting to yellow..."
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow2 -opaque $red2 app/images/habbajets/yellow/*.png
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow3 -opaque $red3 app/images/habbajets/yellow/*.png
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow4 -opaque $red4 app/images/habbajets/yellow/*.png

echo "Converting to purple..."
magick mogrify -path app/images/habbajets/purple -format png -fill $purple1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/purple -format png -fill $purple2 -opaque $red2 app/images/habbajets/purple/*.png
magick mogrify -path app/images/habbajets/purple -format png -fill $purple3 -opaque $red3 app/images/habbajets/purple/*.png
magick mogrify -path app/images/habbajets/purple -format png -fill $purple4 -opaque $red4 app/images/habbajets/purple/*.png
