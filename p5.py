import subprocess
import sys

val1=sys.argv[1]
val2=sys.argv[2]
var3=sys.argv[3]
 
# z = "ffmpeg -i %s -i %s -c:v copy -vcodec copy %s" % (val1,val2,var3)

z = "ffmpeg -loop 1 -i %s -i %s -c:v libx264 -c:a aac -strict experimental -b:a 192k -shortest %s" % (val1,val2,var3)

subprocess.run(z, shell=True)
print(var3)