#! /bin/bash

echo "Creating red habbajets..."

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

red1="#8b0d0d"
red2="#d11515"
red3="#df1616"
red4="#e91b1b"
red5="#ea2929"

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

echo "Converting to blue..."
magick mogrify -path app/images/habbajets/blue -format png -fill $blue1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $blue2 -opaque $red2 app/images/habbajets/blue/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $blue3 -opaque $red3 app/images/habbajets/blue/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $blue4 -opaque $red4 app/images/habbajets/blue/*.png
magick mogrify -path app/images/habbajets/blue -format png -fill $blue5 -opaque $red5 app/images/habbajets/blue/*.png

echo "Converting to green..."
magick mogrify -path app/images/habbajets/green -format png -fill $green1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $green2 -opaque $red2 app/images/habbajets/green/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $green3 -opaque $red3 app/images/habbajets/green/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $green4 -opaque $red4 app/images/habbajets/green/*.png
magick mogrify -path app/images/habbajets/green -format png -fill $green5 -opaque $red5 app/images/habbajets/green/*.png

echo "Converting to yellow..."
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow2 -opaque $red2 app/images/habbajets/yellow/*.png
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow3 -opaque $red3 app/images/habbajets/yellow/*.png
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow4 -opaque $red4 app/images/habbajets/yellow/*.png
magick mogrify -path app/images/habbajets/yellow -format png -fill $yellow5 -opaque $red5 app/images/habbajets/yellow/*.png

echo "Converting to purple..."
magick mogrify -path app/images/habbajets/purple -format png -fill $purple1 -opaque $red1 app/images/habbajets/red/*.png
magick mogrify -path app/images/habbajets/purple -format png -fill $purple2 -opaque $red2 app/images/habbajets/purple/*.png
magick mogrify -path app/images/habbajets/purple -format png -fill $purple3 -opaque $red3 app/images/habbajets/purple/*.png
magick mogrify -path app/images/habbajets/purple -format png -fill $purple4 -opaque $red4 app/images/habbajets/purple/*.png
magick mogrify -path app/images/habbajets/purple -format png -fill $purple5 -opaque $red5 app/images/habbajets/purple/*.png
