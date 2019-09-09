import subprocess
import sys

val1=sys.argv[1]
val2=sys.argv[2]

z = "ffmpeg -i %s -t %s -c copy C:/Users/admin/Documents/pypsi-stuff/Doremon/try/part1.mp4 -ss %s -codec copy C:/Users/admin/Documents/pypsi-stuff/Doremon/try/part2.mp4" % (val1,val2,val2)

subprocess.run(z, shell=True)
print('split done')