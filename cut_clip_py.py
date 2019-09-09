import subprocess
import sys

val1=sys.argv[1]
val2=sys.argv[2]
val3=sys.argv[3]
 
z = "ffmpeg -ss %s -t %s -i %s C:/Users/admin/Documents/pypsi-stuff/Doremon/try/newfile.mp4 -y" % (val1,val2,val3)

subprocess.run(z, shell=True)
print('C:/Users/admin/Documents/pypsi-stuff/Doremon/try/newfile.mp4')