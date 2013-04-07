Commander Map
=============

A strategic Planetside map for coordinating between people.

Building instructions
---------------------

1. Clone the repository
2. Run `npm install` to install the module dependencies.
3. Run `git submodule init` and `git submodule update` to fetch the leaflet scripts.
4. Run `convert.sh` in the `src/public/maps` directory.

Use the `run.sh` in the `src` directory to start the server.

Dependencies
------------

* Node.js v0.10
* gdal2tiles for converting the large maps to tiles.
* imagemagick for converting the png tiles to jpg.


