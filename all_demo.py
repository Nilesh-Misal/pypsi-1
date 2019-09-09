
import os
v1="C:\\Users\\admin\\Documents\\pypsi-stuff\\Doremon\\outfromprogramme\\filedata.txt"
v2="C:\\Users\\admin\\Documents\\pypsi-stuff\\python-ffmpeg\\newout\\Output\\output1212.mp4"
os.system('ffmpeg -f concat -safe 0 -i '+v1+' -codec copy '+v2)