INSDIR=$1
if test "$1"
then
  rsync -av dist index.html fig plugin $INSDIR/
else
   echo Usage: sh $0 INSDIR
fi

