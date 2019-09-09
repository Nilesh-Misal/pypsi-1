import subprocess
import sys

z = 'ffmpeg -f concat -safe 0 -i "C:\\Users\\admin\\Documents\\pypsi-stuff\\Doremon\\outfromprogramme\\filedata.txt" -codec copy "C:\\Users\\admin\\Documents\\pypsi-stuff\\Doremon\\outfromprogramme\\final\\finaloutput.mp4"'

# z = "ffmpeg -f concat -safe 0 -i 'C:/Users/admin/Documents/pypsi-stuff/Doremon/outfromprogramme/filedata.txt' -codec copy 'C:/Users/admin/Documents/pypsi-stuff/Doremon/outfromprogramme/final/finaloutput.mp4'"
subprocess.run(z, shell=True)
print('Video Rendered Successfully')