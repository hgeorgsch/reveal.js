INSDIR=$1
if test "$INSDIR"
then
  rsync -av dist index.html fig plugin $INSDIR/
else
   echo Usage: sh $0 INSDIR
fi

