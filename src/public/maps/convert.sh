for continent in 'indar' 'esamir' 'amerish'
do
    echo "Processing: $continent"
    echo
    rm -rf $continent
    gdal2tiles.py -p raster -z 0-5 -w none $continent.jpg
    echo "Converting tiles from PNG to JPEG..."
    find ./$continent -name "*.png" -exec mogrify -format jpg {} \;
    echo "Removing PNG files..."
    find ./$continent -name "*.png" -exec rm {} \;
    echo

done
