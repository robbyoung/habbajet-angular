base1="#ea2929" # light torso colour
base2="#e91b1b" # lightly shaded torso colour
base3="#df1616" # shaded torso colour
base4="#8b0d0d" # darkest torso colour (for eyes and mouth)
base5="#da5fa6" # light tentacle colour
base6="#d7539f" # shaded tentacle colour
base7="#961860" # darkest tentacle colour (for eyes)

recolour_sprites() {
    echo "Recolouring to $8..."
    mkdir app/images/habbajets/$8
    magick mogrify -path app/images/habbajets/$8 -format png -fill $1 -opaque $base1 app/images/habbajets/base/*.png
    magick mogrify -path app/images/habbajets/$8 -format png -fill $2 -opaque $base2 app/images/habbajets/$8/*.png
    magick mogrify -path app/images/habbajets/$8 -format png -fill $3 -opaque $base3 app/images/habbajets/$8/*.png
    magick mogrify -path app/images/habbajets/$8 -format png -fill $4 -opaque $base4 app/images/habbajets/$8/*.png
    magick mogrify -path app/images/habbajets/$8 -format png -fill $5 -opaque $base5 app/images/habbajets/$8/*.png
    magick mogrify -path app/images/habbajets/$8 -format png -fill $6 -opaque $base6 app/images/habbajets/$8/*.png
    magick mogrify -path app/images/habbajets/$8 -format png -fill $7 -opaque $base7 app/images/habbajets/$8/*.png
}

#-----------------Torso L----Torso M----Torso D----Eyes-------Tail L-----Tail M-----Tail D-----Name-----------|
recolour_sprites "#da4848", "#d73b3b", "#d42e2e", "#951d1d", "#ffaec9", "#ff9bbc", "#ce698a", "red"
recolour_sprites "#1d4aa3", "#1b4496", "#193e89", "#0e2048", "#ffaec9", "#ff9bbc", "#ce698a", "blue"
recolour_sprites "#298d23", "#258120", "#21751d", "#10390e", "#ffaec9", "#ff9bbc", "#ce698a", "green"
recolour_sprites "#7a8517", "#6e7815", "#626b13", "#262a08", "#ffaec9", "#ff9bbc", "#ce698a", "yellow"
recolour_sprites "#c94dc2", "#c541be", "#bd3ab6", "#81267e", "#ffaec9", "#ff9bbc", "#ce698a", "pink"
recolour_sprites "#363636", "#2e2e2e", "#262626", "#161616", "#ffaec9", "#ff9bbc", "#ce698a", "grey"
recolour_sprites "#1e6776", "#1b5c6a", "#18515e", "#123c46", "#ffaec9", "#ff9bbc", "#ce698a", "teal"
recolour_sprites "#7a54c9", "#7148c5", "#683dc1", "#5c35a9", "#ffaec9", "#ff9bbc", "#ce698a", "purple"
recolour_sprites "#bb771a", "#ae6e18", "#a16516", "#875512", "#ffaec9", "#ff9bbc", "#ce698a", "orange"
recolour_sprites "#623e16", "#553613", "#482e10", "#2e1e0a", "#ffaec9", "#ff9bbc", "#ce698a", "brown"
