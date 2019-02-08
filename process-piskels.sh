#! /bin/bash

echo "Creating base habbajets..."

rm -rf app/images/habbajets/*
mkdir app/images/habbajets/base

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
    
    magick output.png -crop "${width}x1+0+0@" +repage +adjoin "app/images/habbajets/base/$filename.png"
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

./recolour-sprites.sh

rm -rf app/images/habbajets/base
