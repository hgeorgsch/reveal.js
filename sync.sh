INSDIR=$1
if test "$INSDIR"
then
  rsync -av dist demo fig plugin $INSDIR/
else
   echo Usage: sh $0 INSDIR
fi

